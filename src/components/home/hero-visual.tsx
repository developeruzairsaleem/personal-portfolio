"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { Check, ChevronDown, Info, Loader2, MapPin, RefreshCw, Send, X } from "lucide-react";
import { useReducedMotionPref } from "@/components/site/hooks";
import { StagePill, UiBadge, UiLabel, UiRoot, UiSidebar, type Stage } from "@/components/mock/ui";

/*
 * Hero product scene, recreated from the real back office (demo data):
 * a Deliveries queue with one live load, and its delivery drawer on top.
 * The load arrives (DTN ticket + Samsara GPS), is matched and priced with
 * every tax line, approved, invoiced and posted to QuickBooks as #10485.
 * An orange fuel line runs behind the panels from the ticket to QuickBooks.
 */

// ms before advancing from step i to i + 1
// The last step (13) scrolls back to the five tax lines and holds there with
// the QuickBooks chip lit: the whole story in one frame (also the reduced-motion frame).
const SCRIPT = [650, 800, 1100, 850, 420, 260, 260, 260, 260, 760, 950, 1050, 1400];
const LAST = SCRIPT.length; // 13
const HOLD = 3800;
const LINE_AT = [0, 0.16, 0.24, 0.34, 0.46, 0.5, 0.53, 0.56, 0.59, 0.62, 0.68, 0.8, 1, 1];

const TAXES: [string, string, string][] = [
  ["Federal Excise Tax - Gasoline", "$0.183", "$1,555.50"],
  ["Federal Excise Tax LUST", "$0.001", "$8.50"],
  ["Federal Oil Superfund Tax - Gasoline", "$0.00386", "$32.81"],
  ["PA Oil Franchise Tax", "$0.576", "$4,896.00"],
  ["PA USTIF", "$0.011", "$93.50"],
];

const ROWS: { name: string; sub: string; bol: string; raw: string; gal: string; stage: Stage; pin?: boolean }[] = [
  { name: "Cedar Bridge Ave – New Site", sub: "Samsara geofence · needs mapping", bol: "4471857", raw: "Cedar Bridge new site", gal: "5,000 gal", stage: "attention", pin: true },
  { name: "Pine Barrens Petroleum", sub: "Hammonton · Hammonton", bol: "4471833", raw: "Pine Barrens Hammonton", gal: "8,500 gal", stage: "ready" },
  { name: "Route 9 Fuel Mart", sub: "Toms River · Toms River", bol: "4471802", raw: "Route 9 Toms River", gal: "8,500 gal", stage: "ready" },
  { name: "Turnpike Truck Plaza", sub: "Bordentown · Bordentown", bol: "4471820", raw: "Turnpike plaza Bordentown", gal: "7,800 gal", stage: "invoiced" },
];

const PATH = "M262 17 C 470 17, 614 8, 614 96 L 614 330 C 614 470, 470 488, 330 488 L 214 488";

function anchorFor(s: number) {
  if (s >= 13) return "taxes";
  if (s >= 12) return "qb";
  if (s >= 11) return "invoice";
  if (s >= 10) return "approve";
  if (s >= 7) return "taxes";
  return "lines";
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduced = useReducedMotionPref();
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);
  const s = reduced ? LAST : step;

  // Fit the fixed 640px scene to its column.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const fit = () => el.style.setProperty("--s", String(Math.min(1, el.clientWidth / 640)));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The scripted loop. Runs only while on screen.
  useEffect(() => {
    if (reduced || !inView) return;
    if (fading) {
      const t = window.setTimeout(() => {
        setStep(0);
        setFading(false);
      }, 560);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(
      () => (step < LAST ? setStep(step + 1) : setFading(true)),
      step < LAST ? SCRIPT[step] : HOLD,
    );
    return () => window.clearTimeout(t);
  }, [step, fading, inView, reduced]);

  // Scroll the drawer like an office user would, to keep the action in view.
  const anchor = anchorFor(s);
  useLayoutEffect(() => {
    const view = viewRef.current;
    const content = scrollRef.current;
    if (!view || !content) return;
    const target = content.querySelector<HTMLElement>(`[data-anchor="${anchor}"]`);
    const max = Math.max(0, content.scrollHeight - view.clientHeight);
    // Snap to the row's top edge so no half-clipped row peeks above it.
    const y = target ? Math.min(max, Math.max(0, target.offsetTop - 4)) : 0;
    content.style.transform = `translate3d(0, ${-y}px, 0)`;
  }, [anchor]);

  const live = s >= 2;
  const matched = s >= 3;
  const liveStage: Stage = s >= 12 ? "qb" : s >= 11 ? "invoiced" : "ready";
  const drawerOpen = s >= 4;
  const counts = {
    ready: 2 + (matched && s < 11 ? 1 : 0),
    invoiced: 1 + (s >= 11 && s < 12 ? 1 : 0),
    qb: 15 + (s >= 12 ? 1 : 0),
  };

  return (
    <div
      ref={ref}
      className="hs"
      data-fading={fading || undefined}
      data-hold={s >= LAST || undefined}
      role="img"
      aria-label="Illustration of the real back office with demo data: a DTN ticket and truck GPS bring in a delivery for Delaware Valley Fuel, it is priced with five fuel tax lines, the office clicks Approve and invoice, and it posts to QuickBooks as invoice 10485."
    >
      <div className="hs-scene">
        {/* Fuel line, behind the panels */}
        <svg className="hs-line" viewBox="0 0 640 560" aria-hidden="true">
          <defs>
            <linearGradient id="hs-g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FF6A13" />
              <stop offset="1" stopColor="#FFB23F" />
            </linearGradient>
            <filter id="hs-b" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path d={PATH} className="hs-line-base" />
          <m.path
            d={PATH}
            className="hs-line-glow"
            stroke="url(#hs-g)"
            filter="url(#hs-b)"
            initial={false}
            animate={{ pathLength: LINE_AT[s] }}
            transition={{ duration: reduced ? 0 : 0.7, ease: [0.65, 0, 0.35, 1] }}
          />
          <m.path
            d={PATH}
            className="hs-line-core"
            stroke="url(#hs-g)"
            initial={false}
            animate={{ pathLength: LINE_AT[s] }}
            transition={{ duration: reduced ? 0 : 0.7, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>

        {/* Source: the terminal ticket and the truck's GPS */}
        <div className="hs-chip hs-chip-src" data-on={s >= 1 || undefined} aria-hidden="true">
          <span className="hs-chip-dot" />
          DTN ticket <b>#7713402</b> + Samsara GPS
        </div>

        {/* The Deliveries queue */}
        <UiRoot className="hs-window">
          <UiSidebar active="Deliveries" />
          <div className="hs-main">
            <div className="hs-titlebar">
              <div>
                <p className="hs-h">Deliveries</p>
                <p className="hs-sub">Every BOL, from truck to QuickBooks invoice.</p>
              </div>
            </div>
            <div className="hs-filters">
              <span className="ui-chip">
                <i data-c="amber" />
                Needs attention <b>1</b>
              </span>
              <span className="ui-chip">
                <i data-c="green" />
                Ready to invoice <b>{counts.ready}</b>
              </span>
              <span className="ui-chip">
                <i data-c="navy" />
                Invoiced <b>{counts.invoiced}</b>
              </span>
              <span className="ui-chip">
                <i data-c="qb" />
                In QuickBooks <b>{counts.qb}</b>
              </span>
            </div>
            <div className="hs-table">
              <div className="hs-tr hs-th">
                <span>Customer / location</span>
                <span>BOL · raw text</span>
                <span>Gallons</span>
                <span>Stage</span>
              </div>
              <div className="hs-rows">
                <div className="hs-tr hs-live" data-in={live || undefined} data-flash={(s >= 2 && s < 4) || undefined}>
                  <span className="hs-cust">
                    {matched ? (
                      <>
                        <b>Delaware Valley Fuel</b>
                        <small>Bensalem · Bensalem</small>
                      </>
                    ) : (
                      <>
                        <b className="hs-skel">Matching truck GPS…</b>
                        <small className="hs-skel hs-skel-sm">Samsara · truck 130</small>
                      </>
                    )}
                  </span>
                  <span className="hs-bol">
                    <code>7713402</code>
                    <small>Del Val Bensalem</small>
                  </span>
                  <span className="hs-gal">8,500 gal</span>
                  <span>{matched ? <StagePill stage={liveStage} key={liveStage} /> : <span className="hs-skel hs-skel-pill" />}</span>
                </div>
                {ROWS.map((r) => (
                  <div className="hs-tr" key={r.bol}>
                    <span className="hs-cust" data-pin={r.pin || undefined}>
                      <b>
                        {r.pin && <MapPin />}
                        {r.name}
                      </b>
                      <small>{r.sub}</small>
                    </span>
                    <span className="hs-bol">
                      <code>{r.bol}</code>
                      <small>{r.raw}</small>
                    </span>
                    <span className="hs-gal">{r.gal}</span>
                    <span>
                      <StagePill stage={r.stage} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </UiRoot>

        {/* The delivery drawer */}
        <UiRoot className="hs-drawer">
          <div className="hs-dpanel" data-open={drawerOpen || undefined}>
            <div className="hs-dhead">
              <div className="hs-dtop">
                <StagePill stage={liveStage} key={liveStage} />
                <span className="hs-x">
                  <X />
                </span>
              </div>
              <p className="hs-dname">Delaware Valley Fuel</p>
              <p className="hs-dmeta">Bensalem · BOL 7713402</p>
              <p className="hs-dmeta">
                Shipped <code>Oct 1, 2026, 6:10 AM EDT</code>
              </p>
            </div>
            <div className="hs-dview" ref={viewRef}>
              <div className="hs-dscroll" ref={scrollRef}>
                <section data-anchor="lines">
                  <div className="hs-sechead">
                    <UiLabel>Lines</UiLabel>
                    <span className="hs-breakdown">
                      <Info /> Price breakdown
                    </span>
                  </div>
                  <div className="hs-lines">
                    <div className="hs-lr hs-lth">
                      <span>Product</span>
                      <span>Gallons</span>
                      <span>Unit price</span>
                      <span>Subtotal</span>
                    </div>
                    <div className="hs-lr">
                      <span>Regular 87</span>
                      <span>6,000 gal</span>
                      <span>
                        $2.17864<small>before taxes</small>
                      </span>
                      <span className="hs-amt">$13,071.84</span>
                    </div>
                    <div className="hs-lr">
                      <span>Super 93</span>
                      <span>2,500 gal</span>
                      <span>
                        $2.69614<small>before taxes</small>
                      </span>
                      <span className="hs-amt">$6,740.35</span>
                    </div>
                    <div className="hs-lr hs-taxhead" data-anchor="taxes" data-on={s >= 5 || undefined}>
                      <span>
                        <ChevronDown /> Taxes <em>· 5</em>
                      </span>
                      <span />
                      <span className="hs-amt">{s >= 9 ? "$0.77486" : "…"}</span>
                      <span className="hs-amt">{s >= 9 ? "$6,586.31" : "…"}</span>
                    </div>
                    {TAXES.map(([name, rate, amt], i) => (
                      <div key={name} className="hs-lr hs-tax" data-on={s >= 5 + i || undefined}>
                        <span>{name}</span>
                        <span>8,500 gal</span>
                        <span className="hs-amt">{rate}</span>
                        <span className="hs-amt">{amt}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section data-anchor="approve" className="hs-approve">
                  <span className="ui-btn" data-busy={s === 10 || undefined} data-done={s >= 11 || undefined}>
                    {s >= 11 ? (
                      <>
                        <Check /> Invoiced
                      </>
                    ) : s === 10 ? (
                      <>
                        <Loader2 className="hs-spin" /> Creating invoice…
                      </>
                    ) : (
                      <>
                        <Send /> Approve &amp; invoice
                      </>
                    )}
                  </span>
                  <small>Queues the invoice for QuickBooks.</small>
                </section>

                <section data-anchor="invoice" className="hs-sec" data-on={s >= 11 || undefined}>
                  <UiLabel>Invoice</UiLabel>
                  <div className="hs-invoice">
                    <b>#INV-20261001-0005</b>
                    <span>8,500 gal · $26,398.50 · sent</span>
                    <span>Invoice date (= ship date): Oct 1, 2026, 6:10 AM EDT</span>
                  </div>
                </section>

                <section data-anchor="qb" className="hs-sec" data-on={s >= 12 || undefined}>
                  <UiLabel>QuickBooks sync</UiLabel>
                  <div className="hs-posted">
                    Posted Oct 1, 2026, 9:44 AM EDT · QuickBooks invoice <b>#10485</b>
                  </div>
                  <div className="hs-pvq">
                    <b>Platform vs QuickBooks</b>
                    <UiBadge tone="success">Matches</UiBadge>
                    <span className="hs-pull">
                      <RefreshCw /> Pull again
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </UiRoot>

        {/* Destination */}
        <div className="hs-chip hs-chip-qb" data-on={s >= 12 || undefined} aria-hidden="true">
          <span className="hs-chip-check">
            <Check strokeWidth={3} />
          </span>
          In QuickBooks · invoice <b>#10485</b>
        </div>

        <p className="hs-tag" aria-hidden="true">
          Illustration · demo data
        </p>
      </div>
    </div>
  );
}
