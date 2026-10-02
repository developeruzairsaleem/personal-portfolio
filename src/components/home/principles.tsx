"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown, GitCompare, MapIcon, ShieldCheck } from "lucide-react";
import { useMediaQuery } from "@/components/site/hooks";

const PRINCIPLES = [
  {
    icon: MapIcon,
    k: "Model the business first",
    v: "The first deliverable is a map of how your office runs.",
  },
  {
    icon: GitCompare,
    k: "Reconcile everything",
    v: "Your office sees a mismatch before a customer does.",
  },
  {
    icon: ShieldCheck,
    k: "Build for the office, not the demo",
    v: "Every price sent and invoice synced leaves an audit trail.",
  },
];

/**
 * How Uzair works: three principles. Phones show the titles, with the
 * one-line explanations behind a single disclosure. `children` (the profile
 * link) sits in the same row as that disclosure.
 */
export function Principles({ children }: { children?: ReactNode }) {
  const uid = useId().replace(/:/g, "");
  const phone = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = useState(false);
  const showLines = !phone || open;
  const listId = `principles-${uid}`;

  return (
    <>
      <ul id={listId} className="fx-principles" role="list" data-compact={!showLines || undefined}>
        {PRINCIPLES.map((p) => {
          const Icon = p.icon;
          return (
            <li key={p.k}>
              <span className="fx-principle-icon" aria-hidden="true">
                <Icon strokeWidth={1.9} />
              </span>
              <div>
                <h3 className="fx-principle-k">{p.k}</h3>
                <p hidden={!showLines}>{p.v}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="fx-about-actions">
        {phone && (
          <button
            type="button"
            className="fx-more"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Hide details" : "How Uzair works"}
            <ChevronDown aria-hidden="true" />
          </button>
        )}
        {children}
      </div>
    </>
  );
}
