import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LINKS, LinkedinIcon } from "@/app/site-chrome";
import { SplitWords, delay } from "@/components/site/split";
import { Systems } from "./systems";

const PRINCIPLES = [
  {
    k: "Model the business first",
    v: "Prices, freight zones, tax jurisdictions and customer sites become real records with rules, not formulas buried in tabs nobody dares to touch.",
  },
  {
    k: "Reconcile everything",
    v: "Every gallon, price and tax line traces back to a terminal ticket, a GPS drop or a rate the office set. When two sources disagree, the office sees it before a customer does.",
  },
  {
    k: "Build for the office, not the demo",
    v: "Approval before anything posts, a visible sync status, an audit trail by date and customer. Boring, reliable, and owned by the business that runs it.",
  },
];

const SPEC = [
  { k: "Experience", v: "5 years shipping production software" },
  { k: "Scope", v: "Data model, integrations, interface, hosting and support" },
  { k: "Hours", v: "US Eastern business hours, same-day replies" },
  { k: "Engagement", v: "Fixed-price build, then a flat monthly fee for support" },
];

export function About() {
  return (
    <section id="about" className="fx-sec fx-about" aria-labelledby="about-title">
      <div className="fx-about-glow" aria-hidden="true" />
      <div className="fx-wrap fx-about-grid">
        <div className="fx-about-side">
          <figure className="fx-portrait fx-reveal">
            <Image
              src="/images/uzair-portrait-blazer.jpg"
              alt="Uzair Saleem"
              width={820}
              height={1024}
              sizes="(max-width: 899px) 92vw, 440px"
            />
            <figcaption className="fx-portrait-cap">
              <b>Uzair Saleem</b>
              <span>Software &amp; product engineer · Islamabad, PK</span>
              <span className="fx-portrait-chip">
                <span className="fx-live-dot" aria-hidden="true" />
                Works US Eastern hours
              </span>
            </figcaption>
          </figure>
          <dl className="fx-spec fx-reveal" style={delay(120)}>
            {SPEC.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fx-about-copy">
          <p className="fx-kicker fx-reveal">
            <b>07</b> About Uzair
          </p>
          <h2 id="about-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["An engineer who learns the operation", { em: "before writing the code." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(100)}>
            Uzair Saleem has spent five years shipping production software where close enough isn&apos;t good
            enough: revenue ledgers, payment marketplaces, video pipelines and now back-office systems for fuel
            distributors.
          </p>
          <p className="fx-body fx-reveal" style={delay(160)}>
            On a fuel project the first deliverable isn&apos;t a screen. It&apos;s a map of how the business actually
            runs. At Sat-Raj that meant 39 customer pricing tabs, a master tax and margin template, a freight matrix
            and prices emailed to customers one at a time, all rebuilt as one data model. The first launch had to
            reproduce the spreadsheet&apos;s prices to the cent before anything else was allowed to change.
          </p>
          <p className="fx-body fx-reveal" style={delay(200)}>
            Then come the hard parts, end to end: terminal tickets from DTN, truck GPS and geofences from Samsara to
            put every drop at the right site, gross against net gallons, every federal and state tax line, and
            invoices posted to QuickBooks Desktop with retries and duplicate checks. The engineer who built it is the
            one who keeps it running, week after week.
          </p>

          <ol className="fx-principles" role="list">
            {PRINCIPLES.map((p, i) => (
              <li key={p.k} className="fx-reveal" style={delay(80 * i)}>
                <span className="fx-principle-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="fx-h3">{p.k}</h3>
                  <p>{p.v}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="fx-about-links fx-reveal">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="fx-chip-link">
              <LinkedinIcon /> LinkedIn <ArrowUpRight aria-hidden="true" />
              <span className="fx-sr"> (opens in new tab)</span>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="fx-chip-link">
              <GithubIcon /> GitHub <ArrowUpRight aria-hidden="true" />
              <span className="fx-sr"> (opens in new tab)</span>
            </a>
            <Link href={LINKS.resume} className="fx-chip-link">
              <FileText aria-hidden="true" /> Résumé
            </Link>
          </div>
        </div>
      </div>

      <Systems />
    </section>
  );
}
