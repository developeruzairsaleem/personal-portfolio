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
import { BookCheck, FileText, Receipt, ShieldCheck } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";
import { Screens } from "./screens";
import { useMediaQuery, useReducedMotionPref } from "@/components/site/hooks";

const STEPS = [
  {
    icon: FileText,
    title: "Tickets come in",
    text: "DTN tickets, matched by truck GPS.",
    data: "DTN #7713402 · 8,500 gal",
  },
  {
    icon: Receipt,
    title: "Priced line by line",
    text: "Rack, freight, margin, every tax.",
    data: "$2.17864/gal + 5 taxes",
  },
  {
    icon: ShieldCheck,
    title: "Flagged, then approved",
    text: "Nothing posts without your OK.",
    data: "Approved by the office",
    office: true,
  },
  {
    icon: BookCheck,
    title: "Posted to QuickBooks",
    text: "Once per load. Desktop or Online.",
    data: "QuickBooks #10485",
  },
];

// Four nodes at 12.5/37.5/62.5/87.5% of a 1000-wide track, joined by gentle arcs.
const PATH = "M125 40 Q250 4 375 40 Q500 76 625 40 Q750 4 875 40";
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function Pipeline() {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotionPref();
  const pinned = useMediaQuery("(min-width: 1100px) and (min-height: 700px)");

  const pinRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState({ top: 28, height: 0, fracs: [0, 1 / 3, 2 / 3, 1] });
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
  const px = useMotionValue("12.5%");
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
              <p className="fx-kicker fx-reveal">How it works</p>
              <h2 id="how-title" className="fx-h2 fx-split fx-reveal">
                <SplitWords parts={["Ticket in.", { em: "Invoice out." }]} />
              </h2>
              <p className="fx-lead fx-reveal" style={delay(120)}>
                Your office stops typing tickets and starts approving them.
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
                    <li
                      key={s.title}
                      className="fx-pipe-step"
                      data-on={i < shown || undefined}
                      data-office={s.office || undefined}
                    >
                      <span className="fx-pipe-node" aria-hidden="true">
                        <Icon strokeWidth={1.9} />
                      </span>
                      <div className="fx-pipe-copy">
                        <p className="fx-pipe-label">
                          <span>{String(i + 1).padStart(2, "0")}</span>
                          {s.office && <span className="fx-pipe-badge">Your office</span>}
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

      <Screens />
    </section>
  );
}
