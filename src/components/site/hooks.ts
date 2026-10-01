"use client";

import { useCallback, useSyncExternalStore } from "react";

function subscribeMedia(query: string) {
  return (onChange: () => void) => {
    if (typeof window === "undefined" || !window.matchMedia) return () => {};
    const mq = window.matchMedia(query);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  };
}

/**
 * A media query as React state. The server (and the first client render)
 * always sees `serverValue`, so markup never mismatches during hydration.
 */
export function useMediaQuery(query: string, serverValue = false) {
  const subscribe = useCallback((cb: () => void) => subscribeMedia(query)(cb), [query]);
  return useSyncExternalStore(
    subscribe,
    () => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia(query).matches : serverValue),
    () => serverValue,
  );
}

/** True when the visitor asked the OS for less motion. Render final states. */
export function useReducedMotionPref() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled past `offset` pixels. */
export function useScrolledPast(offset = 8) {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > offset,
    () => false,
  );
}
