"use client";

import { useRef, type ReactNode } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useReducedMotionPref } from "@/components/site/hooks";

/** Grows a block from 90% to full size as it scrolls up into the frame. */
export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPref();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.25"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  return (
    <m.div ref={ref} className={className} style={reduced ? undefined : { scale, y }}>
      {children}
    </m.div>
  );
}
