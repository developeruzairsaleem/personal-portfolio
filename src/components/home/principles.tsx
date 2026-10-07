"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown, GitCompare, MapIcon, ShieldCheck } from "lucide-react";
import { useMediaQuery } from "@/components/site/hooks";

const PRINCIPLES = [
  {
    icon: MapIcon,
    k: "Map the workflow first",
    v: "Before code or n8n nodes: where data enters, who approves it, and what “done” looks like.",
  },
  {
    icon: GitCompare,
    k: "Automate with audit trails",
    v: "Logs, retries, and human review queues so support and finance can trust the output.",
  },
  {
    icon: ShieldCheck,
    k: "Own the stack end to end",
    v: "APIs, databases, and workflows in your accounts — not a black box on someone else's SaaS.",
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
