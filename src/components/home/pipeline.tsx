"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { BookCheck, FileText, Receipt, ReceiptText, ShieldCheck } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";
import { useMediaQuery, useReducedMotionPref } from "@/components/site/hooks";

const STEPS = [
  {
    label: "Ticket",
    icon: FileText,
    title: "Tickets arrive on their own",
    text: "DTN terminal tickets and driver BOLs come in automatically, matched to the right customer site by truck GPS.",
    data: "DTN #7713402 · 8,500 gal",
  },
  {
    label: "Price",
    icon: Receipt,
    title: "Priced, line by line",
    text: "Rack cost, freight, margin and every federal and state fuel tax line, per customer and location.",
    data: "$2.17864/gal + 5 taxes",
  },
  {
    label: "Review",
    icon: ShieldCheck,
    title: "Flagged, then approved",
    text: "Gallon mismatches, missing prices and unknown sites get flagged. Your office approves each invoice.",
    data: "Approved by the office",
  },
  {
    label: "Invoice",
    icon: ReceiptText,
    title: "Every tax line on the bill",
    text: "Approved deliveries become invoices with your items and every fuel tax line.",
    data: "$26,398.50 invoice",
  },
  {
    label: "QuickBooks",
    icon: BookCheck,
    title: "Lands in QuickBooks",
    text: "Desktop or Online, with duplicate protection and a visible sync status for each invoice.",
    data: "QuickBooks #10485",
  },
];

// Five nodes at 10/30/50/70/90% of a 1000-wide track, joined by gentle arcs.
const PATH = "M100 40 Q200 4 300 40 Q400 76 500 40 Q600 4 700 40 Q800 76 900 40";
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function Pipeline() {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotionPref();
  const pinned = useMediaQuery("(min-width: 1100px) and (min-height: 700px)");

  const pinRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState({ top: 28, height: 0, fracs: [0, 0.25, 0.5, 0.75, 1] });
  const [active, setActive] = useState(0);

  const { scrollYProgress: pinP } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const { scrollYProgress: listP } = useScroll({ target: listRef, offset: ["start 0.72", "end 0.55"] });
  const lineD = useTransform(pinP, (v) => clamp01((v - 0.06) / 0.78));
  const lineM = useTransform(listP, (v) => clamp01(v));
  const line: MotionValue<number> = pinned ? lineD : lineM;

  // Where each node sits along the vertical rail (phones, tablets, short screens).
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof ResizeObserver === "undefined") return;
    const measure = () => {
      const nodes = Array.from(stage.querySelectorAll<HTMLElement>(".fx-pipe-node"));
      if (nodes.length < 2) return;
      const base = stage.getBoundingClientRect().top;
      const centers = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 - base;
      });
      const span = centers[centers.length - 1] - centers[0] || 1;
      setRail({ top: centers[0], height: span, fracs: centers.map((c) => (c - centers[0]) / span) });
    };
    const id = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, []);

  useMotionValueEvent(line, "change", (v) => {
    const marks = pinned ? STEPS.map((_, i) => i / (STEPS.length - 1)) : rail.fracs;
    const n = v <= 0.001 ? 0 : marks.filter((m) => v >= m - 0.015).length;
    setActive((prev) => (prev === n ? prev : n));
  });

  // Pulse that rides the head of the horizontal line.
  const px = useMotionValue("10%");
  const py = useMotionValue("50%");
  useMotionValueEvent(lineD, "change", (v) => {
    const p = pathRef.current;
    if (!p || typeof p.getTotalLength !== "function") return;
    const pt = p.getPointAtLength(v * p.getTotalLength());
    px.set(`${pt.x / 10}%`);
    py.set(`${(pt.y / 80) * 100}%`);
  });
  const railTop = useTransform(lineM, (v) => `${v * 100}%`);

  const shown = reduced ? STEPS.length : active;

  return (
    <section id="how" className="fx-pipe" data-pinned={(pinned && !reduced) || undefined} aria-labelledby="how-title">
      <div ref={pinRef} className="fx-pipe-pin">
        <div className="fx-pipe-sticky">
          <div className="fx-pipe-glow" aria-hidden="true" />
          <div className="fx-wrap">
            <header className="fx-sec-head fx-sec-head-center">
              <p className="fx-kicker fx-reveal">
                <b>03</b> How it works
              </p>
              <h2 id="how-title" className="fx-h2 fx-split fx-reveal">
                <SplitWords parts={["Ticket in.", { em: "Invoice out." }]} />
              </h2>
              <p className="fx-lead fx-reveal" style={delay(120)}>
                Every load takes the same path. Nothing goes into the books until your office approves it.
              </p>
            </header>

            <div ref={stageRef} className="fx-pipe-stage">
              <div className="fx-pipe-track" aria-hidden="true">
                <svg viewBox="0 0 1000 80" className="fx-pipe-svg">
                  <defs>
                    <linearGradient id={`g${uid}`} x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#FF6A13" />
                      <stop offset="1" stopColor="#FFB23F" />
                    </linearGradient>
                    <filter id={`b${uid}`} x="-10%" y="-200%" width="120%" height="500%">
                      <feGaussianBlur stdDeviation="6" />
                    </filter>
                    <mask id={`m${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="80">
                      <m.path
                        d={PATH}
                        fill="none"
                        stroke="#fff"
                        strokeWidth="12"
                        style={{ pathLength: reduced ? 1 : lineD }}
                      />
                    </mask>
                  </defs>
                  <path d={PATH} className="fx-pipe-base" />
                  <m.path
                    d={PATH}
                    className="fx-pipe-halo"
                    stroke={`url(#g${uid})`}
                    filter={`url(#b${uid})`}
                    style={{ pathLength: reduced ? 1 : lineD }}
                  />
                  <m.path
                    ref={pathRef}
                    d={PATH}
                    className="fx-pipe-line"
                    stroke={`url(#g${uid})`}
                    style={{ pathLength: reduced ? 1 : lineD }}
                  />
                  <path d={PATH} className="fx-pipe-flow" pathLength={1} mask={`url(#m${uid})`} />
                </svg>
                {!reduced && <m.span className="fx-pipe-head" style={{ left: px, top: py }} />}
              </div>

              <span className="fx-pipe-rail" aria-hidden="true" style={{ top: rail.top, height: rail.height }}>
                <m.span className="fx-pipe-rail-fill" style={reduced ? undefined : { scaleY: lineM }} />
                {!reduced && <m.span className="fx-pipe-rail-head" style={{ top: railTop }} />}
              </span>

              <ol ref={listRef} className="fx-pipe-list">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label} className="fx-pipe-step" data-on={i < shown || undefined}>
                      <span className="fx-pipe-node" aria-hidden="true">
                        <Icon strokeWidth={1.9} />
                      </span>
                      <div className="fx-pipe-copy">
                        <p className="fx-pipe-label">
                          <span>{String(i + 1).padStart(2, "0")}</span> {s.label}
                        </p>
                        <h3 className="fx-h3">{s.title}</h3>
                        <p className="fx-pipe-text">{s.text}</p>
                        <p className="fx-pipe-data" aria-hidden="true">
                          {s.data}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
