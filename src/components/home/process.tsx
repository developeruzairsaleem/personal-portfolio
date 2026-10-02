import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF } from "@/app/service-contact";
import { SplitWords, delay } from "@/components/site/split";

const STEPS = [
  {
    title: "A 20-minute walkthrough",
    text: "Walk through one of your loads, then see the system running live.",
  },
  {
    title: "Run it side by side",
    text: "It's set up on your real tickets while your office works the old way.",
  },
  {
    title: "Go live, with support that stays",
    text: (
      <>
        A <b>flat monthly fee</b> covers fixes, tax rate changes and new charges. It runs in your own cloud account,
        so you&apos;re never locked in.
      </>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="fx-sec fx-process" aria-labelledby="process-title">
      <div className="fx-wrap">
        <div className="fx-process-head">
          <div>
            <p className="fx-kicker fx-reveal">Getting started</p>
            <h2 id="process-title" className="fx-h2 fx-h2-sm fx-split fx-reveal">
              <SplitWords parts={["Nothing changes until the invoices match."]} />
            </h2>
          </div>
          <div className="fx-reveal" style={delay(160)}>
            <TrackedLink
              event="cta_book_mid"
              href={BOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="fx-btn fx-btn-lg fx-magnetic"
            >
              Book a 20-min walkthrough
              <ArrowRight className="fx-arrow" aria-hidden="true" />
              <span className="fx-sr"> (opens in new tab)</span>
            </TrackedLink>
          </div>
        </div>

        <ol className="fx-process-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="fx-reveal" style={delay(i * 110)}>
              <span className="fx-step-n" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="fx-h3">{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
