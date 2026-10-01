"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotionPref } from "./hooks";

function format(v: number, decimals: number, prefix: string, suffix: string) {
  return (
    prefix +
    v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
    suffix
  );
}

/**
 * Counts from `from` to `to` once it scrolls into view. Server markup and
 * screen readers get the final value; only the visible digits animate.
 */
export function Counter({
  to,
  from = 0,
  decimals = 0,
  duration = 1.4,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  play,
}: {
  to: number;
  from?: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Drive it from outside instead of on scroll (e.g. an animated scene). */
  play?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotionPref();
  const go = play ?? inView;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.textContent = format(to, decimals, prefix, suffix);
      return;
    }
    if (!go) {
      el.textContent = format(from, decimals, prefix, suffix);
      return;
    }
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v, decimals, prefix, suffix);
      },
    });
    return () => controls.stop();
  }, [go, reduced, from, to, decimals, duration, delay, prefix, suffix]);

  const final = format(to, decimals, prefix, suffix);
  return (
    <span className={className}>
      <span className="fx-sr">{final}</span>
      <span aria-hidden="true" ref={ref} className="fx-tnum">
        {final}
      </span>
    </span>
  );
}
