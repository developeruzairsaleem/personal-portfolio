"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";
import { useReducedMotionPref } from "@/components/site/hooks";
import { PricesMock } from "./mock-prices";
import { ReviewMock } from "./mock-review";
import { InvoiceMock } from "./mock-invoice";

const PILLARS = [
  {
    key: "prices",
    title: "Daily customer prices",
    short: "Tomorrow's prices, worked out and sent to every customer in one click.",
    lines: [
      "Rack costs come in from DTN or get entered once.",
      "Your markups, freight zones and taxes are applied per customer and location.",
      "Price emails go out to every customer in one click, with full history.",
    ],
    sr: "Illustration of the real Prices screen with demo data: cost, tax, freight and margin add up to each sell price, then Send to All Customers sends them to 9 customers.",
    Viz: PricesMock,
  },
  {
    key: "review",
    title: "Delivery review",
    short: "Every drop matched to its site. Problems flagged.",
    lines: [
      "Terminal tickets and driver BOLs pulled in automatically.",
      "Each drop matched to the right customer site by truck GPS.",
      "Gallon mismatches, missing prices and unknown sites flagged for the office.",
    ],
    sr: "Illustration of the real Deliveries queue with demo data: one delivery needs attention because its Samsara geofence is not mapped to a customer location, so it waits for the office.",
    Viz: ReviewMock,
  },
  {
    key: "invoices",
    title: "QuickBooks invoices",
    short: "Approved loads become invoices with every tax line.",
    lines: [
      "Approved deliveries become invoices with your items and every fuel tax line.",
      "Duplicate protection and a visible sync status for each invoice.",
      "Works with QuickBooks Desktop or Online.",
    ],
    sr: "Illustration of the real delivery drawer with demo data: invoice SR-20261001-0005 posted to QuickBooks as invoice 10485, and every fuel and tax line checked against QuickBooks and matching.",
    Viz: InvoiceMock,
  },
];

export function Pillars() {
  const uid = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReducedMotionPref();
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hold, setHold] = useState(false);

  function choose(i: number, focus = false) {
    setAuto(false);
    setCurrent(i);
    if (focus) tabRefs.current[i]?.focus();
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const n = PILLARS.length;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (current + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (current - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      choose(next, true);
    }
  }

  const running = auto && inView && !hold && !reduced;

  return (
    <section id="build" className="fx-sec fx-pillars" aria-labelledby="build-title">
      <div className="fx-wrap">
        <header className="fx-sec-head">
          <p className="fx-kicker fx-reveal">
            <b>04</b> What I build
          </p>
          <h2 id="build-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["Three jobs your office repeats", { em: "every day." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(120)}>
            One system for pricing, delivery review and invoicing, set up around how your office already works.
          </p>
        </header>

        <div
          ref={ref}
          className="fx-pillars-grid fx-reveal"
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
        >
          <div className="fx-tabs" role="tablist" aria-label="What I build" aria-orientation="vertical" onKeyDown={onKey}>
            {PILLARS.map((p, i) => {
              const on = i === current;
              return (
                <button
                  key={p.key}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${uid}-${p.key}`}
                  aria-selected={on}
                  aria-controls={`panel-${uid}-${p.key}`}
                  tabIndex={on ? 0 : -1}
                  className="fx-tab fx-spot"
                  onClick={() => choose(i)}
                >
                  <span className="fx-tab-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fx-tab-text">
                    <span className="fx-tab-title">{p.title}</span>
                    <span className="fx-tab-short">{p.short}</span>
                  </span>
                  {on && auto && !reduced && (
                    <span className="fx-tab-progress" aria-hidden="true">
                      <span
                        key={`${current}`}
                        data-running={running || undefined}
                        onAnimationEnd={() => setCurrent((c) => (c + 1) % PILLARS.length)}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="fx-panels">
            {PILLARS.map((p, i) => {
              const on = i === current;
              const Viz = p.Viz;
              return (
                <div
                  key={p.key}
                  role="tabpanel"
                  id={`panel-${uid}-${p.key}`}
                  aria-labelledby={`tab-${uid}-${p.key}`}
                  hidden={!on}
                  className="fx-panel"
                  tabIndex={0}
                >
                  <div className="fx-viz" role="img" aria-label={p.sr}>
                    <div aria-hidden="true" className="fx-viz-in">
                      <Viz active={on && inView} reduced={reduced} />
                    </div>
                  </div>
                  <ul className="fx-panel-lines">
                    {p.lines.map((l) => (
                      <li key={l}>
                        <Check aria-hidden="true" strokeWidth={2.6} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
