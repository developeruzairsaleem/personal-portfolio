"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useReducedMotionPref } from "./hooks";

export type TimelineItem = { title: string; paras: string[]; note?: string };

/**
 * Vertical numbered steps joined by a fuel line that fills as you scroll.
 * Each badge lights up when the line reaches it. Reduced motion: all lit.
 */
export function ScrollTimeline({ items }: { items: TimelineItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotionPref();
  const [lit, setLit] = useState(0);
  const [rail, setRail] = useState({ top: 28, height: 0, fracs: items.map((_, i) => i / Math.max(1, items.length - 1)) });
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.65"] });
  const headTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  // The rail runs from the first number badge to the last one.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || typeof ResizeObserver === "undefined") return;
    const measure = () => {
      const nodes = Array.from(wrap.querySelectorAll<HTMLElement>(".fx-step-n"));
      if (nodes.length < 2) return;
      const base = wrap.getBoundingClientRect().top;
      const c = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 - base;
      });
      const span = c[c.length - 1] - c[0] || 1;
      setRail({ top: c[0], height: span, fracs: c.map((x) => (x - c[0]) / span) });
    };
    const id = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const n = v <= 0.001 ? 0 : rail.fracs.filter((f) => v >= f - 0.02).length;
    setLit((p) => (p === n ? p : n));
  });

  const shown = reduced ? items.length : lit;

  return (
    <div ref={wrapRef} className="fx-steps-wrap">
      <span className="fx-steps-rail" aria-hidden="true" style={{ top: rail.top, height: rail.height }}>
        <m.span className="fx-steps-fill" style={reduced ? undefined : { scaleY: scrollYProgress }} />
        {!reduced && <m.span className="fx-steps-head" style={{ top: headTop }} />}
      </span>
      <ol ref={listRef} className="fx-steps">
        {items.map((s, i) => (
          <li key={s.title} className="fx-step" data-on={i < shown || undefined}>
            <span className="fx-step-n" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="fx-h3">{s.title}</h3>
              {s.paras.map((l) => (
                <p key={l}>{l}</p>
              ))}
              {s.note && <p className="fx-step-note">{s.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
