import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF } from "@/app/service-contact";
import { SplitWords, delay } from "@/components/site/split";
import { ScrollTimeline } from "@/components/site/timeline";

const STEPS = [
  {
    title: "A 20-minute walkthrough",
    paras: [
      "You show me how one load goes from ticket to invoice today. I show you the system running at Sat-Raj.",
      "You leave with a clear picture of what would change, and a fixed price in writing. No data to send beforehand.",
    ],
  },
  {
    title: "Run it side by side",
    paras: [
      "I set it up on your real tickets while your office keeps working the old way.",
      "You compare its invoices with yours. It goes live only when they match.",
    ],
  },
  {
    title: "Go live, then I keep it running",
    paras: [
      "Monthly support covers fixes, tax rate changes and new charges. You deal with me directly.",
      "It runs in your own cloud account, so you own the system and the data.",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="fx-sec fx-process" aria-labelledby="process-title">
      <div className="fx-wrap fx-process-grid">
        <div className="fx-process-head">
          <p className="fx-kicker fx-reveal">
            <b>08</b> Getting started
          </p>
          <h2 id="process-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["From first call", { em: "to go-live." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(120)}>
            Nothing changes for your office until the new invoices match the old ones.
          </p>
          <div className="fx-reveal" style={delay(200)}>
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
        <ScrollTimeline items={STEPS} />
      </div>
    </section>
  );
}
