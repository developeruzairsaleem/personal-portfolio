import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TrackedLink } from "@/app/tracked-link";
import { CONTACT_HREF } from "@/app/service-contact";
import { CopyEmail } from "@/app/copy-email";
import { LINKS } from "@/app/site-chrome";
import { SplitWords, delay } from "@/components/site/split";

export function FinalCta() {
  return (
    <section id="contact" className="fx-end" aria-labelledby="end-title">
      <div className="fx-end-bg" aria-hidden="true">
        <div className="fx-end-glow" />
        <div className="fx-end-arc" />
      </div>
      <div className="fx-wrap fx-end-in">
        <h2 id="end-title" className="fx-h1 fx-split fx-reveal">
          <SplitWords parts={["Have a workflow", { em: "eating your week?" }]} />
        </h2>
        <p className="fx-lead fx-reveal" style={delay(120)}>
          Email or book a call. Share where support, reporting, or delivery hurts most — I&apos;ll reply with whether
          automation, custom software, or both is the right fix.
        </p>
        <div className="fx-end-me fx-reveal" style={delay(160)}>
          <span className="fx-avatar" style={{ width: 48, height: 48 }}>
            <Image src="/images/uzair-avatar-hd.jpg" alt="" width={48} height={48} sizes="48px" />
          </span>
          <p>
            <b>You talk to Uzair directly.</b>
            <span>Same-day replies · WhatsApp available on request</span>
          </p>
        </div>
        <div className="fx-end-cta fx-reveal" style={delay(220)}>
          <TrackedLink event="cta_contact_end" href={CONTACT_HREF} className="fx-btn fx-btn-xl fx-magnetic">
            Email Uzair
            <ArrowRight className="fx-arrow" aria-hidden="true" />
          </TrackedLink>
          <Link href={LINKS.resume} className="fx-btn fx-btn-ghost fx-btn-xl">
            Résumé &amp; PDF
          </Link>
        </div>
        <div className="fx-end-alt fx-reveal" style={delay(280)}>
          <p>
            Prefer a call?{" "}
            <TrackedLink
              event="cta_calendly"
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="fx-inline-link"
            >
              Book 30 minutes
            </TrackedLink>
            .
          </p>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}
