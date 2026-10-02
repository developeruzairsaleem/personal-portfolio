"use client";

import { useId, useState } from "react";
import { m } from "framer-motion";
import { Plus } from "lucide-react";
import { FIT_CHECK_HREF } from "@/app/service-contact";
import { TrackedLink } from "@/app/tracked-link";
import { SplitWords } from "@/components/site/split";
import { useReducedMotionPref } from "@/components/site/hooks";

const QA = [
  {
    q: "What does it cost?",
    a: "A fixed setup price and a flat monthly support fee, in writing after the 20-minute call and before you commit to anything. No hourly billing.",
  },
  {
    q: "How long does it take?",
    a: "The case-study build ran January to April 2026. Your office keeps working the old way until the invoices match.",
  },
  {
    q: "You're not local. What if something breaks?",
    a: "Email Uzair and get a reply the same US Eastern business day. Fixes are covered by the monthly fee.",
  },
  {
    q: "We're not on QuickBooks.",
    a: "QuickBooks Desktop and Online run in production today. Sage, NetSuite, Dynamics and Xero take invoices by import or API, checked before anything is promised.",
  },
  {
    q: "We don't use Samsara.",
    a: "That's fine. Another ELD, dispatch exports or emailed PDFs: if the data exists, it can usually be pulled in.",
  },
  {
    q: "We already have fuel software.",
    a: "Then the question is which step still gets retyped. If your software already covers it, Uzair will say so.",
  },
];

export function Faq() {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotionPref();
  const [open, setOpen] = useState<number | null>(0);
  // Panels still animating shut; they get `hidden` once the collapse ends.
  const [closing, setClosing] = useState<number[]>([]);

  function toggle(i: number) {
    const next = open === i ? null : i;
    if (!reduced && open !== null) setClosing((c) => (c.includes(open) ? c : [...c, open]));
    setOpen(next);
  }

  return (
    <section id="faq" className="fx-sec fx-faq" aria-labelledby="faq-title">
      <div className="fx-wrap fx-faq-grid">
        <div className="fx-faq-head">
          <h2 id="faq-title" className="fx-h2 fx-h2-sm fx-split fx-reveal">
            <SplitWords parts={["The obvious questions."]} />
          </h2>
          <p className="fx-lead fx-reveal">
            Something else?{" "}
            <TrackedLink event="cta_email_faq" href={FIT_CHECK_HREF} className="fx-inline-link">
              Email Uzair
            </TrackedLink>
            .
          </p>
        </div>

        <div className="fx-accordion fx-reveal">
          {QA.map((item, i) => {
            const isOpen = open === i;
            const bid = `faq-b-${uid}-${i}`;
            const pid = `faq-p-${uid}-${i}`;
            return (
              <div key={item.q} className="fx-qa" data-open={isOpen || undefined}>
                <h3>
                  <button id={bid} type="button" aria-expanded={isOpen} aria-controls={pid} onClick={() => toggle(i)}>
                    <span className="fx-qa-q">&ldquo;{item.q}&rdquo;</span>
                    <span className="fx-qa-icon" aria-hidden="true">
                      <Plus strokeWidth={2.2} />
                    </span>
                  </button>
                </h3>
                <m.div
                  id={pid}
                  role="region"
                  aria-labelledby={bid}
                  className="fx-qa-panel"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={() => {
                    if (!isOpen) setClosing((c) => c.filter((n) => n !== i));
                  }}
                  hidden={!isOpen && !closing.includes(i)}
                >
                  <div className="fx-qa-a">
                    <p>{item.a}</p>
                  </div>
                </m.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
