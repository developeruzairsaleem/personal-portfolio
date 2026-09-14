"use client";

import { track } from "@vercel/analytics";

/**
 * Records a visitor action. Vercel shows custom events only on the Pro plan,
 * so the same action is also sent as a pageview of a virtual /e/<name> path,
 * which appears under Pages on every plan.
 */
export function mark(name: string) {
  track(name);
  const w = window as Window & {
    va?: (event: string, data: Record<string, unknown>) => void;
  };
  w.va?.("pageview", { route: `/e/${name}`, path: `/e/${name}` });
}
