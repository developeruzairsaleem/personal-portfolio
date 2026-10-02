"use client";

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";

type SysLink = { label: string; href: string; kind: "page" | "site" | "pdf" };

type System = {
  key: string;
  tab: string;
  /** Short label for the phone chip row: the product, not a category. */
  chip: string;
  sub: string;
  tag: string;
  status: string;
  title: string;
  meta: [string, string][];
  flow: [string, string][];
  does: string;
  hard: string;
  outcomes: [string, string][];
  links: SysLink[];
};

// Facts come from the résumé and the case studies in /public/case-studies.
const SYSTEMS: System[] = [
  {
    key: "fuel",
    tab: "Fuel back office",
    chip: "Fuel back office",
    sub: "Sat-Raj, Inc. · NJ & PA",
    tag: "Wholesale fuel",
    status: "Live · supported weekly",
    title: "Tickets, prices, taxes and QuickBooks in one system the office trusts.",
    meta: [
      ["Role", "Lead engineer, end to end"],
      ["Runs on", "Next.js, PostgreSQL, AWS"],
    ],
    flow: [
      ["DTN feed", "terminal costs and tickets"],
      ["Pricing engine", "rack, freight, margin, tax"],
      ["Review queue", "GPS site match, mismatches"],
      ["QuickBooks Desktop", "Web Connector, no duplicates"],
    ],
    does: "The first deliverable was a map: 39 hand-edited pricing spreadsheets, a master tax and margin template and a freight matrix, rebuilt as one data model. Supplier costs now arrive from DTN daily, delivery tickets from DTN and Samsara, and approved invoices post to QuickBooks Desktop through the Web Connector with retries and duplicate checks.",
    hard: "Trust. The first price run had to match the old spreadsheet to the cent, so the pricing math is pinned to the legacy rates in tests. Samsara geofences don't always line up with a customer's site, so unclear drops wait in a review queue instead of being guessed, and every confirmed address is remembered. When one terminal's feed swapped gross and net gallons, the fix and a repair of the affected history shipped together.",
    outcomes: [
      ["Jan–Apr 2026", "first build, extended since"],
      ["NJ + PA", "tax rules by state and fuel type"],
      ["DTN + Samsara", "tickets pulled in once, never retyped"],
    ],
    links: [{ label: "Read the case study", href: "/work/satraj", kind: "page" }],
  },
  {
    key: "revenue",
    tab: "Revenue analytics",
    chip: "Indiecator",
    sub: "Indiecator",
    tag: "SaaS analytics",
    status: "Live",
    title: "Revenue numbers rebuilt from what customers actually paid.",
    meta: [
      ["Role", "Lead full-stack engineer"],
      ["Product", "indiecator.com"],
      ["Runs on", "Node.js, PostgreSQL, Next.js"],
    ],
    flow: [
      ["Stripe & Paddle", "invoices and subscriptions"],
      ["Movement ledger", "new, upgrade, downgrade, churn"],
      ["Daily snapshots", "derived, never hand-edited"],
      ["Metrics", "MRR, ARR, churn, drill-down"],
    ],
    does: "Subscription businesses connect their billing account and see monthly recurring revenue, churn, upgrades and retention rebuilt from two years of real billing history, for one product or a whole portfolio. Every number opens up to the customers behind it.",
    hard: "Deciding what each billing change means. An upgrade, a downgrade, a trial converting and a $4.27 proration invoice look alike in raw data, and getting one wrong leaves a chart that looks plausible while it lies. So the ledger records movements, not totals, taken from what customers actually paid. Three sync paths (a two-year backfill, live webhooks and a nightly reconciliation that repairs anything the webhooks missed) all write to the same source of truth.",
    outcomes: [
      ["2 years", "of history rebuilt on connect"],
      ["3 sync paths", "one source of truth"],
      ["Minutes", "from connecting to full history"],
    ],
    links: [
      { label: "indiecator.com", href: "https://indiecator.com", kind: "site" },
      { label: "Case study (PDF)", href: "/case-studies/indiecator.pdf", kind: "pdf" },
    ],
  },
  {
    key: "market",
    tab: "Coaching marketplace",
    chip: "Diffed.gg",
    sub: "Diffed.gg",
    tag: "Marketplace & payments",
    status: "Live",
    title: "A full marketplace, checkout to payout, in about two months.",
    meta: [
      ["Role", "Lead full-stack engineer"],
      ["Team", "Three people, about two months"],
      ["Runs on", "Next.js, PostgreSQL, Socket.IO"],
    ],
    flow: [
      ["Checkout", "card and PayPal, re-priced on the server"],
      ["Order queue", "providers apply live"],
      ["Team & chat", "assembled in real time"],
      ["Wallet & payouts", "fee split, admin verified"],
    ],
    does: "Gamers configure a coaching or play-along order, pay by card or PayPal, and build a team from vetted providers who apply in real time. Providers earn into an in-platform wallet, and admins verify the work before payouts. Customers, providers and admins each get their own app.",
    hard: "Money and state. Each order is split across several providers after a 20% platform fee, so money is stored in whole cents and every balance is derived from transactions that are never edited. The server re-prices every checkout so a tampered price can't reach the payment gateway, and orders move through a strict lifecycle from pending to verified. A rank engine lets admins add any game's ranking system without code.",
    outcomes: [
      ["~2 months", "to ship, with a team of three"],
      ["3 apps", "customer, provider and admin"],
      ["Whole cents", "no floating-point money"],
    ],
    links: [{ label: "Case study (PDF)", href: "/case-studies/diffed.pdf", kind: "pdf" }],
  },
  {
    key: "video",
    tab: "Video engine",
    chip: "AI reels",
    sub: "AI reels · Germany",
    tag: "Media pipelines",
    status: "Shipped",
    title: "Video renders cut from minutes to seconds.",
    meta: [
      ["Role", "Full-stack engineer"],
      ["Where", "Design&Desktop, Germany"],
      ["Runs on", "MediaBunny, Remotion, n8n"],
    ],
    flow: [
      ["Reel spec", "scenes, text and media"],
      ["Frames", "drawn frame by frame"],
      ["Encode", "WebCodecs, via MediaBunny"],
      ["Publish", "n8n workflow to Instagram"],
    ],
    does: "An AI tool that generates short video reels. Its rendering engine was rebuilt to encode directly in the browser, and a second pipeline renders language-learning reels from React components and publishes them to Instagram automatically, without anyone opening a video editor.",
    hard: "Speed without a render farm. The old in-browser pipeline took 2 to 10 minutes per clip. Rebuilt on MediaBunny, which hands each frame to the browser's own video encoder through WebCodecs, the same clip renders in about 10 seconds. The automated reels are Remotion compositions passed to an n8n workflow that publishes them. The 50-second film at the top of this page was made the same way: React components, rendered in code.",
    outcomes: [
      ["2–10 min → ~10 s", "render time per clip"],
      ["Zero editing", "reels render and publish on their own"],
    ],
    links: [],
  },
];

function LinkIcon({ kind }: { kind: SysLink["kind"] }) {
  if (kind === "pdf") return <FileText aria-hidden="true" />;
  if (kind === "site") return <ArrowUpRight aria-hidden="true" />;
  return <ArrowRight aria-hidden="true" />;
}

export function Systems() {
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  // One "How it was built" state shared by every tab.
  const [open, setOpen] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (active + 1) % SYSTEMS.length
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (active - 1 + SYSTEMS.length) % SYSTEMS.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? SYSTEMS.length - 1
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="fx-wrap fx-sys">
      <header className="fx-sys-head">
        <p className="fx-kicker fx-reveal">Selected systems</p>
        <h3 className="fx-sys-title fx-split fx-reveal">
          <SplitWords parts={["What Uzair has built."]} />
        </h3>
      </header>

      <div className="fx-sys-grid fx-reveal" style={delay(120)}>
        <div className="fx-sys-tabs" role="tablist" aria-label="Selected systems" onKeyDown={onKey}>
          {SYSTEMS.map((s, i) => (
            <button
              key={s.key}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`sys-tab-${uid}-${s.key}`}
              aria-selected={i === active}
              aria-controls={`sys-panel-${uid}-${s.key}`}
              tabIndex={i === active ? 0 : -1}
              className="fx-sys-tab"
              data-other-start={i === 1 || undefined}
              onClick={() => setActive(i)}
            >
              <span className="fx-sys-tab-text">
                <b>{s.tab}</b>
                <span>{s.sub}</span>
              </span>
              <span className="fx-sys-chip">{s.chip}</span>
            </button>
          ))}
        </div>

        {SYSTEMS.map((s, i) => (
          <article
            key={s.key}
            id={`sys-panel-${uid}-${s.key}`}
            role="tabpanel"
            aria-labelledby={`sys-tab-${uid}-${s.key}`}
            hidden={i !== active}
            className="fx-sys-panel"
          >
            <div className="fx-sys-panel-in">
              <div className="fx-sys-top">
                <span className="fx-sys-tag">{s.tag}</span>
                <span className="fx-sys-status">
                  <span className="fx-sys-status-dot" aria-hidden="true" />
                  {s.status}
                </span>
              </div>
              <h4 className="fx-sys-h">{s.title}</h4>

              <ul className="fx-sys-outcomes" role="list">
                {s.outcomes.map(([k, v]) => (
                  <li key={k}>
                    <b>{k}</b>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>

              <div className="fx-sys-actions">
                {s.links.length > 0 && (
                  <div className="fx-sys-links">
                    {s.links.map((l) =>
                      l.kind === "page" ? (
                        <Link key={l.href} href={l.href} className="fx-link">
                          {l.label} <LinkIcon kind={l.kind} />
                        </Link>
                      ) : (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fx-link fx-link-quiet"
                        >
                          {l.label} <LinkIcon kind={l.kind} />
                          <span className="fx-sr"> (opens in new tab)</span>
                        </a>
                      ),
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className="fx-more"
                  aria-expanded={open}
                  aria-controls={`sys-more-${uid}-${s.key}`}
                  onClick={() => setOpen((o) => !o)}
                >
                  {open ? "Hide details" : "How it was built"}
                  <ChevronDown aria-hidden="true" />
                </button>
              </div>
              <div id={`sys-more-${uid}-${s.key}`} className="fx-sys-detail" hidden={!open}>
                <dl className="fx-sys-meta">
                  {s.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <ol className="fx-sys-flow" aria-label="How data moves through it">
                  {s.flow.map(([k, v], n) => (
                    <li key={k} style={{ "--n": n } as CSSProperties}>
                      <b>{k}</b>
                      <span>{v}</span>
                    </li>
                  ))}
                </ol>
                <div className="fx-sys-cols">
                  <div>
                    <h5 className="fx-sys-label">What it does</h5>
                    <p>{s.does}</p>
                  </div>
                  <div>
                    <h5 className="fx-sys-label">The hard part</h5>
                    <p>{s.hard}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
