"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Page-wide effects that need no React state, wired once per page:
 *  - scroll reveals: `.fx-reveal` elements get `.is-in` when they enter view
 *    (CSS does the motion, so content is visible even if JS never runs);
 *  - cursor spotlight: `.fx-spot` / `.fx-btn` get --mx/--my for hover light;
 *  - magnetic CTAs: `.fx-magnetic` drift toward a fine pointer.
 */
export function ClientFX() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".fx-reveal:not(.is-in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last: PointerEvent | null = null;
    let magnet: HTMLElement | null = null;

    const frame = () => {
      raf = 0;
      const e = last;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const lit = target?.closest<HTMLElement>(".fx-spot, .fx-btn");
      if (lit) {
        const r = lit.getBoundingClientRect();
        lit.style.setProperty("--mx", `${e.clientX - r.left}px`);
        lit.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      if (reduced) return;
      const m = target?.closest<HTMLElement>(".fx-magnetic") ?? null;
      if (magnet && magnet !== m) magnet.style.transform = "";
      magnet = m;
      if (m) {
        const r = m.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        m.style.transform = `translate3d(${(dx * 0.16).toFixed(1)}px, ${(dy * 0.26).toFixed(1)}px, 0)`;
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
