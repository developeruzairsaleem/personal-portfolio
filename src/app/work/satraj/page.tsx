import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { BOOK_HREF, FIT_CHECK_HREF } from "../../service-contact";
import { CopyEmail } from "../../copy-email";
import { DemoPlayer } from "../../demo-player";
import { TrackedLink } from "../../tracked-link";
import { SiteShell } from "@/components/site/shell";
import { SplitWords, delay } from "@/components/site/split";
import { ScrollTimeline } from "@/components/site/timeline";

export const metadata: Metadata = {
  title: "Case study: Sat-Raj, Inc.",
  description: "The custom pricing, delivery review and QuickBooks Desktop invoicing system built for Sat-Raj, a gasoline and diesel distributor in New Jersey.",
  alternates: { canonical: "/work/satraj" },
};

const WORKFLOWS = [
  {
    title: "Prepare customer prices from a shared set of rules",
    text: "The pricing workflow combines rack costs with configured customer margins, freight and tax items. Customer groups can share a fuel menu while individual locations keep their freight settings. The office can prepare and send customer price emails from the system.",
    detail: "The implementation includes saved pricing history so a delivery can be checked against the relevant customer price. Rules and exceptions need to be agreed with each business before rollout.",
  },
  {
    title: "Bring delivery tickets into an office review queue",
    text: "The Samsara integration imports delivery documents and uses truck location data and customer geofences to help identify the delivery site. The office can review tickets and assign a location when a match is missing or ambiguous.",
    detail: "The useful part is the review process: missing information is visible before an invoice is created. A different ticket system or file format would need its own compatibility check.",
  },
  {
    title: "Check quantities and prices before billing",
    text: "Delivery records can be checked against terminal bill-of-lading data and customer pricing. The implementation handles Sat-Raj-specific cases such as split deliveries, full-load pricing and prices that arrive after a ticket.",
    detail: "These are configured business rules, not assumptions to carry into another company. A pilot would start with representative records and have the office confirm the expected results.",
  },
  {
    title: "Create approved invoices in QuickBooks Desktop",
    text: "Approved deliveries become invoice jobs for QuickBooks Desktop Web Connector. Fuel and configured tax lines map to the accounting items used by the office. The connector processes the queue when the required QuickBooks connection is available.",
    detail: "The integration includes retry handling and duplicate checks. Connection failures and rejected jobs still need monitoring and a recovery process; accounting review remains part of the workflow.",
  },
  {
    title: "Support the system as the operation changes",
    text: "Uzair built the application and provides ongoing development and support. The work includes changes to pricing rules, customer mappings, delivery handling and accounting integration, alongside the screens the office uses to review them. Recent additions: the Top Tier additive charge and a payables view. Supplier invoice checks are next.",
    detail: "For a new project, Uzair and your office agree who handles exceptions, what is monitored, how to fall back to the existing process and what ongoing support covers.",
  },
];

const RESULTS = [
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

const START = [
  { title: "Check the source", text: "Confirm the accounting version, ticket format and integration access." },
  { title: "Define the result", text: "Agree on representative records, expected invoice lines and exception handling." },
  { title: "Review a pilot", text: "Check results with the office before expanding the scope or relying on automation." },
];

export default function SatrajCaseStudy() {
  return (
    <SiteShell>
      <main id="main" className="cs">
        <header className="cs-hero">
          <div className="fx-hero-bg" aria-hidden="true">
            <div className="fx-hero-grid-lines" />
            <div className="fx-glow fx-glow-a" />
          </div>
          <div className="fx-wrap">
            <p className="fx-pill fx-load" style={delay(40)}>
              <span className="fx-live-dot" aria-hidden="true" />
              Client implementation · live in production
            </p>
            <h1 className="fx-h1 cs-title fx-split-load">
              <SplitWords parts={["Sat-Raj: pricing, delivery review and", { em: "QuickBooks Desktop." }]} />
            </h1>
            <p className="fx-lead fx-load" style={delay(480)}>
              Custom software for a gasoline and diesel distributor in New Jersey, supplying stations in New Jersey and
              Pennsylvania since 1992. It connects customer pricing and
              delivery records with the office&apos;s invoicing process in QuickBooks Desktop.
            </p>
            <dl className="cs-meta fx-load" style={delay(600)}>
              <div>
                <dt>Role</dt>
                <dd>Lead engineer, build and ongoing support</dd>
              </div>
              <div>
                <dt>Accounting</dt>
                <dd>QuickBooks Desktop Web Connector</dd>
              </div>
              <div>
                <dt>Delivery data</dt>
                <dd>Samsara and DTN integrations</dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>
                  <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fx-link">
                    satraj.inc <ArrowUpRight aria-hidden="true" />
                    <span className="fx-sr"> (opens in new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="cs-video" aria-labelledby="cs-video-title">
          <div className="fx-wrap">
            <h2 id="cs-video-title" className="fx-kicker fx-reveal">
              See the implementation
            </h2>
            <div className="cs-video-frame fx-reveal">
              <div className="fx-film-glow" aria-hidden="true" />
              <DemoPlayer />
            </div>
            <p className="fx-proof-note fx-reveal">Real screens from the Sat-Raj back office, running on fictional demo data.</p>
          </div>
        </section>

        <section className="cs-results" aria-labelledby="cs-results-title">
          <div className="fx-wrap">
            <h2 id="cs-results-title" className="fx-kicker fx-reveal">
              What changed
            </h2>
            <ul className="fx-facts">
              {RESULTS.map((r, i) => (
                <li key={r.k} className="fx-fact fx-spot fx-reveal" style={delay(i * 90)}>
                  <p className="fx-fact-k">{r.k}</p>
                  <p className="fx-fact-v">{r.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="fx-sec cs-need" aria-labelledby="cs-need-title">
          <div className="fx-wrap cs-two">
            <div>
              <p className="fx-kicker fx-reveal">The problem</p>
              <h2 id="cs-need-title" className="fx-h2 fx-split fx-reveal">
                <SplitWords parts={["What the office needs", { em: "to connect." }]} />
              </h2>
            </div>
            <div className="cs-prose">
              <p className="fx-reveal">
                Fuel billing brings together delivery quantities, customer locations, changing prices and accounting
                items. Uzair built a shared application for Sat-Raj to prepare prices, review delivery information and send
                approved invoice jobs to QuickBooks Desktop.
              </p>
              <p className="fx-reveal" style={delay(100)}>
                The project is an example of what can be built around an existing operation. The starting point for
                another company is one repeated manual step, its source data and the result the office needs.
              </p>
            </div>
          </div>
        </section>

        <section className="fx-sec cs-built" aria-labelledby="cs-built-title">
          <div className="fx-wrap cs-two">
            <div className="cs-sticky">
              <p className="fx-kicker fx-reveal">What was built</p>
              <h2 id="cs-built-title" className="fx-h2 fx-split fx-reveal">
                <SplitWords parts={["Five workflows,", { em: "one system." }]} />
              </h2>
            </div>
            <ScrollTimeline items={WORKFLOWS.map((w) => ({ title: w.title, paras: [w.text], note: w.detail }))} />
          </div>
        </section>

        <section className="fx-sec cs-start" aria-labelledby="cs-start-title">
          <div className="fx-wrap">
            <header className="fx-sec-head">
              <p className="fx-kicker fx-reveal">For your office</p>
              <h2 id="cs-start-title" className="fx-h2 fx-split fx-reveal">
                <SplitWords parts={["Start with", { em: "one workflow." }]} />
              </h2>
            </header>
            <ol className="cs-cards">
              {START.map((c, i) => (
                <li key={c.title} className="fx-fact fx-spot fx-reveal" style={delay(i * 100)}>
                  <p className="fx-fact-k">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {c.title}
                  </p>
                  <p className="fx-fact-v">{c.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="fx-end" aria-labelledby="cs-end-title">
          <div className="fx-end-bg" aria-hidden="true">
            <div className="fx-end-glow" />
            <div className="fx-end-arc" />
          </div>
          <div className="fx-wrap fx-end-in">
            <h2 id="cs-end-title" className="fx-h2 fx-split fx-reveal cs-end-title">
              <SplitWords parts={["Which step does your office still do", { em: "by hand?" }]} />
            </h2>
            <p className="fx-lead fx-reveal" style={delay(120)}>
              Send your accounting version, how delivery tickets arrive and the step you want to change. A short
              description is enough to start.
            </p>
            <div className="cs-end-ctas fx-reveal" style={delay(200)}>
              <TrackedLink
                event="cta_book_end"
                href={BOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-btn fx-btn-lg fx-magnetic"
              >
                Book a 20-min walkthrough
                <ArrowRight className="fx-arrow" aria-hidden="true" />
                <span className="fx-sr"> (opens in new tab)</span>
              </TrackedLink>
              <TrackedLink event="cta_email" href={FIT_CHECK_HREF} className="fx-btn fx-btn-ghost fx-btn-lg">
                <Mail aria-hidden="true" /> Check one workflow
              </TrackedLink>
            </div>
            <p className="cs-end-alt fx-reveal" style={delay(260)}>
              <Link href="/demo" className="fx-link">
                Try the sample walkthrough <ArrowRight aria-hidden="true" />
              </Link>
            </p>
            <CopyEmail />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
