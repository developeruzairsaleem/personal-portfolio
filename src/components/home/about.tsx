import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LINKS, LinkedinIcon } from "@/app/site-chrome";
import { SplitWords, delay } from "@/components/site/split";

const PRINCIPLES = [
  {
    k: "Model the business first",
    v: "Prices, freight zones, tax jurisdictions and customer sites become real records with rules, not formulas buried in tabs nobody dares to touch.",
  },
  {
    k: "Reconcile everything",
    v: "Every gallon, price and tax line traces back to a terminal ticket, a GPS drop or a rate you set. When two sources disagree, the office sees it before a customer does.",
  },
  {
    k: "Build for the office, not the demo",
    v: "Approval before anything posts, a visible sync status, an audit trail by date and customer. Boring, reliable, and owned by you.",
  },
];

const SYSTEMS = [
  {
    tag: "Fuel operations",
    name: "Sat-Raj back office",
    v: "DTN terminal tickets, Samsara GPS and geofences, customer pricing, delivery review and QuickBooks Desktop invoicing. Live, and I run it every week.",
  },
  {
    tag: "Revenue ledger",
    name: "Indiecator",
    v: "Rebuilds a company's full Stripe or Paddle billing history into MRR, ARR and retention, fed by three idempotent ingestion paths and a two-year backfill.",
  },
  {
    tag: "Marketplace",
    name: "Diffed.gg",
    v: "A three-sided marketplace with a configurable ranking engine and a multi-currency wallet over Stripe and PayPal.",
  },
  {
    tag: "Video pipelines",
    name: "Rendering in code",
    v: "Remotion and in-browser render pipelines for AI video products. The 50-second film on this page is code, too.",
  },
];

const FACTS = [
  { k: "4 years", v: "building production software end to end" },
  { k: "39 tabs → 1", v: "pricing spreadsheets turned into one data model" },
  { k: "BS, AI", v: "Artificial Intelligence, SZABIST University" },
  { k: "Same day", v: "replies, during US Eastern business hours" },
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
              <span>Software engineer · Islamabad, PK</span>
              <span className="fx-portrait-chip">
                <span className="fx-live-dot" aria-hidden="true" />
                Works US Eastern hours
              </span>
            </figcaption>
          </figure>
          <ul className="fx-about-facts fx-reveal" style={delay(120)} role="list">
            {FACTS.map((f) => (
              <li key={f.k}>
                <b className="fx-tnum">{f.k}</b>
                <span>{f.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="fx-about-copy">
          <p className="fx-kicker fx-reveal">
            <b>07</b> About me
          </p>
          <h2 id="about-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["I map the whole system", { em: "before I write the code." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(100)}>
            I&apos;m Uzair Saleem, a full-stack engineer with four years of building production systems where every
            number has to reconcile back to its source: revenue ledgers, marketplaces, and now the back office of a
            fuel distributor.
          </p>
          <p className="fx-body fx-reveal" style={delay(160)}>
            At Sat-Raj I didn&apos;t start with screens. I started by reverse-engineering how the business actually
            ran: 39 customer pricing tabs, a master tax and margin template, a freight matrix, and prices emailed to
            customers one at a time. I turned that into one data model, and the first launch had to reproduce the
            spreadsheet&apos;s prices exactly before anything else was allowed to change.
          </p>
          <p className="fx-body fx-reveal" style={delay(200)}>
            Then the hard parts, end to end: terminal tickets from DTN, truck GPS and geofences from Samsara to put
            every drop at the right site, gross against net gallons, every federal and state tax line, and invoices
            posted to QuickBooks Desktop through the Web Connector with retries and duplicate checks. The person who
            built it should be the one who keeps it running, so I still do.
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

          <h3 className="fx-about-sub fx-reveal">Systems I&apos;ve built</h3>
          <ul className="fx-systems" role="list">
            {SYSTEMS.map((s, i) => (
              <li key={s.name} className="fx-spot fx-reveal" style={delay(60 * i)}>
                <span className="fx-systems-tag">{s.tag}</span>
                <b>{s.name}</b>
                <p>{s.v}</p>
              </li>
            ))}
          </ul>

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
    </section>
  );
}
