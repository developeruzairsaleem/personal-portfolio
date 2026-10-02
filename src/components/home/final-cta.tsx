import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF, FIT_CHECK_HREF } from "@/app/service-contact";
import { CopyEmail } from "@/app/copy-email";
import { SplitWords, delay } from "@/components/site/split";

export function FinalCta() {
  return (
    <section id="contact" className="fx-end" aria-labelledby="end-title">
      <div className="fx-end-bg" aria-hidden="true">
        <div className="fx-end-glow" />
        <div className="fx-end-arc" />
      </div>
      <div className="fx-wrap fx-end-in">
        <p className="fx-kicker fx-reveal">20 minutes · Zoom or Google Meet</p>
        <h2 id="end-title" className="fx-h1 fx-split fx-reveal">
          <SplitWords parts={["See it on your", { em: "own tickets." }]} />
        </h2>
        <p className="fx-lead fx-reveal" style={delay(120)}>
          Bring one load you invoiced last week. I&apos;ll show you the system running at Sat-Raj, and you leave with a fixed price in writing.
        </p>
        <div className="fx-end-me fx-reveal" style={delay(160)}>
          <span className="fx-avatar" style={{ width: 48, height: 48 }}>
            <Image src="/images/uzair-avatar.jpg" alt="" width={48} height={48} sizes="48px" />
          </span>
          <p>
            <b>You&apos;ll talk to me, not a sales rep.</b>
            I build it, I run it, and I answer the emails.
          </p>
        </div>
        <div className="fx-end-cta fx-reveal" style={delay(220)}>
          <TrackedLink
            event="cta_book_end"
            href={BOOK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-btn fx-btn-xl fx-magnetic"
          >
            Book a 20-min walkthrough
            <ArrowRight className="fx-arrow" aria-hidden="true" />
            <span className="fx-sr"> (opens in new tab)</span>
          </TrackedLink>
        </div>
        <div className="fx-end-alt fx-reveal" style={delay(280)}>
          <p>
            Prefer email? Tell me your accounting software and the step your office still does by hand.{" "}
            <TrackedLink event="cta_email" href={FIT_CHECK_HREF} className="fx-inline-link">
              Or email me
            </TrackedLink>
          </p>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}
