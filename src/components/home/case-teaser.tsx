import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DemoPlayer } from "@/app/demo-player";
import { OWNER_QUOTE } from "@/app/owner-quote";
import { SplitWords, delay } from "@/components/site/split";

const FACTS = [
  {
    k: "Pricing",
    v: "The daily price run went from 45–60 minutes of spreadsheet and email work to one reviewed click.",
  },
  {
    k: "Deliveries",
    v: "BOLs used to be typed into Sheets, then again into QuickBooks. Now they're pulled once and matched.",
  },
  {
    k: "Invoices",
    v: "Each load is invoiced with its fuel and tax lines and synced to QuickBooks with its invoice number.",
  },
  {
    k: "Audit trail",
    v: "Every price sent and every invoice synced can be looked up by date and customer.",
  },
];

export function CaseTeaser() {
  return (
    <section id="case" className="fx-sec fx-case" aria-labelledby="case-title">
      <div className="fx-wrap">
        <div className="fx-case-grid">
          <div className="fx-case-copy">
            <p className="fx-kicker fx-reveal">
              <b>06</b> Case study · live in production
            </p>
            <h2 id="case-title" className="fx-h2 fx-split fx-reveal">
              <SplitWords parts={["Sat-Raj, Inc."]} />
            </h2>
            <p className="fx-case-place fx-reveal" style={delay(60)}>
              <span className="fx-em">Voorhees, New Jersey</span>
            </p>
            <p className="fx-lead fx-reveal" style={delay(100)}>
              Sat-Raj has supplied gasoline and diesel to stations in New Jersey and Pennsylvania since 1992. Their
              back office ran on Google Sheets and retyping.
            </p>
            <p className="fx-body fx-reveal" style={delay(160)}>
              I replaced it with one system: DTN terminal prices and tickets, Samsara deliveries, customer pricing,
              delivery review and QuickBooks invoicing. I still run and extend it every week. Recent additions: the
              Top Tier additive charge and a payables view. Supplier invoice checks are next.
            </p>
            <div className="fx-case-links fx-reveal" style={delay(220)}>
              <Link href="/work/satraj" className="fx-link">
                Read the full case study <ArrowRight aria-hidden="true" />
              </Link>
              <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fx-link fx-link-quiet">
                satraj.inc <ArrowUpRight aria-hidden="true" />
                <span className="fx-sr"> (opens in new tab)</span>
              </a>
            </div>
          </div>

          <div className="fx-case-proof fx-reveal" style={delay(120)}>
            <p className="fx-proof-label">
              <span className="fx-live-dot" aria-hidden="true" /> See the real system
            </p>
            <DemoPlayer />
            <p className="fx-proof-note">Real screens from the Sat-Raj back office, running on fictional demo data.</p>
          </div>
        </div>

        <ul className="fx-facts">
          {FACTS.map((f, i) => (
            <li key={f.k} className="fx-fact fx-spot fx-reveal" style={delay(i * 90)}>
              <p className="fx-fact-k">
                <span>{String(i + 1).padStart(2, "0")}</span>
                {f.k}
              </p>
              <p className="fx-fact-v">{f.v}</p>
            </li>
          ))}
        </ul>

        {OWNER_QUOTE && (
          <figure className="fx-quote fx-reveal">
            <blockquote>
              <p>&ldquo;{OWNER_QUOTE.text}&rdquo;</p>
            </blockquote>
            <figcaption>
              <b>{OWNER_QUOTE.name}</b>, {OWNER_QUOTE.role}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
