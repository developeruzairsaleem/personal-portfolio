"use client";

import { useId, useState } from "react";
import { m } from "framer-motion";
import { Plus } from "lucide-react";
import { FIT_CHECK_HREF } from "@/app/service-contact";
import { TrackedLink } from "@/app/tracked-link";
import { SplitWords, delay } from "@/components/site/split";
import { useReducedMotionPref } from "@/components/site/hooks";

const QA = [
  {
    q: "We don't use Samsara.",
    a: [
      "That's fine. DTN tickets, another ELD, dispatch software exports, emailed PDFs: if the data exists, it can usually be pulled in.",
      "We'll look at exactly what you have on the call.",
    ],
  },
  {
    q: "We already have fuel software.",
    a: [
      "Then the question is which step still gets retyped. Often it's the hop between the dispatch system and QuickBooks.",
      "If your current software already covers it, I'll tell you that.",
    ],
  },
  {
    q: "You're not local. What if something breaks?",
    a: [
      "I work US Eastern business hours and answer the same day. Sat-Raj emails me and it gets fixed.",
      "The system lives in your own cloud account and your books stay in QuickBooks, so you're never locked in.",
    ],
  },
  {
    q: "What does it cost?",
    a: [
      "A fixed price for the setup and a flat monthly fee for support. No hourly billing.",
      "You get the number in writing after the walkthrough, before you commit to anything.",
    ],
  },
];

export function Faq() {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotionPref();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="fx-sec fx-faq" aria-labelledby="faq-title">
      <div className="fx-wrap fx-faq-grid">
        <div className="fx-faq-head">
          <p className="fx-kicker fx-reveal">
            <b>09</b> Questions
          </p>
          <h2 id="faq-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["The obvious", { em: "questions." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(120)}>
            Something else on your mind?{" "}
            <TrackedLink event="cta_email" href={FIT_CHECK_HREF} className="fx-inline-link">
              Email me
            </TrackedLink>{" "}
            and I&apos;ll answer it straight.
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
                  <button
                    id={bid}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={pid}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="fx-qa-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
                  inert={!isOpen}
                >
                  <div className="fx-qa-a">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
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
