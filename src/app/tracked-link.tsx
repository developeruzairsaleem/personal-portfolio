"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { mark } from "./mark";

/** A plain link that records a visitor action when clicked. */
export function TrackedLink({
  event,
  children,
  ...rest
}: { event: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...rest} onClick={() => mark(event)}>
      {children}
    </a>
  );
}
