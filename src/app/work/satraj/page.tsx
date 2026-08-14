import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "../../site-chrome";
import { ServiceNav, ServiceFooter, ServiceStyles } from "../../service-chrome";

export const metadata: Metadata = {
  title: "Case study: Sat-Raj, Inc.",
  description:
    "How a family-run fuel distributor in New Jersey went from spreadsheets and retyping to same-day automated invoicing, without leaving QuickBooks Desktop.",
  alternates: { canonical: "/work/satraj" },
};

export default function SatrajCaseStudy() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />

      <main id="main" className="cs-wrap">
        <header className="cs-head">
          <p className="fz-kick">Case study</p>
          <h1>Sat-Raj, Inc.: a fuel distributor&apos;s office, automated</h1>
          <p className="cs-sub">
            How a family-run gasoline and diesel distributor in New Jersey went
            from spreadsheets and retyping to same-day automated invoicing,
            without leaving QuickBooks Desktop.
          </p>
          <dl className="cs-meta">
            <div><dt>Role</dt><dd>Software engineer, sole developer, ongoing</dd></div>
            <div><dt>Stack</dt><dd>Next.js, TypeScript, PostgreSQL, Prisma, AWS</dd></div>
            <div><dt>Integrations</dt><dd>Samsara telematics, DTN terminal feeds, QuickBooks Desktop</dd></div>
            <div><dt>Live</dt><dd><a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc</a></dd></div>
          </dl>
        </header>

        <section className="cs-sec">
          <h2 className="fz-kick">The situation</h2>
          <p className="cs-body">
            Sat-Raj delivers gasoline and diesel to gas stations across New
            Jersey and Pennsylvania. Before this project the office ran the
            whole business by hand. Every morning someone computed prices in a
            spreadsheet from terminal rack costs and emailed them customer by
            customer. Drivers photographed their delivery tickets, and the
            office retyped each one into QuickBooks Desktop. Every per-gallon
            fuel tax was added as a separate invoice line, from memory.
            Invoices went out days after the fuel did, and one mistyped number
            meant a wrong bill.
          </p>
          <p className="cs-body">
            I designed and built the platform that replaced this, and I run it
            today. Here is what was actually wrong, and what I did about each
            piece.
          </p>
        </section>

        <section className="cs-sec">
          <h2 className="fz-kick">The problems and what I built</h2>
          <div className="fz-rows cs-rows">
            <div className="fz-row">
              <span className="fz-num">01</span>
              <div>
                <h3>Daily pricing took an hour and lived in one person&apos;s head</h3>
                <p>
                  The morning routine: pull rack costs, add margin, freight,
                  and the right state&apos;s fuel taxes for each customer, then
                  write the price emails one by one. An hour on a good day,
                  and nobody else in the office could do it.
                </p>
                <p>
                  <b>What I built:</b> the operator types the day&apos;s rack
                  costs once. The system computes every customer
                  location&apos;s price, margin and freight per station, NJ or
                  PA taxes by rule, and sends each customer their price email
                  automatically. Customers with several stations can share a
                  price group: one location defines the group&apos;s fuel menu
                  and each station keeps its own freight. The morning run is
                  now about 90 seconds.
                </p>
              </div>
            </div>

            <div className="fz-row">
              <span className="fz-num">02</span>
              <div>
                <h3>Delivery tickets were retyped into QuickBooks by hand</h3>
                <p>
                  Drivers already submitted tickets through Samsara, a photo
                  plus typed fields, but from there everything was manual. And
                  hand-typed location names are unreliable, so even knowing
                  which customer received the fuel was guesswork.
                </p>
                <p>
                  <b>What I built:</b> a scheduled sync pulls every ticket from
                  Samsara&apos;s API. A GPS matcher reads where the truck
                  actually stopped during the delivery, matches the position
                  against geofences, and resolves the exact customer location.
                  The driver&apos;s typing never decides anything, the
                  truck&apos;s position does. Tickets the matcher cannot
                  resolve, no GPS, unknown site, two possible geofences, queue
                  on a dashboard with one-click assignment.
                </p>
              </div>
            </div>

            <div className="fz-row">
              <span className="fz-num">03</span>
              <div>
                <h3>Matching a delivery to the right price was error-prone</h3>
                <p>
                  Prices change daily and differ per customer, per station, and
                  per fuel. Billing a delivery meant finding the right price in
                  old emails and spreadsheets.
                </p>
                <p>
                  <b>What I built:</b> every delivery automatically matches the
                  price sent to that customer that morning, and gallons
                  reconcile against the ticket. Their real business rules are
                  encoded: a clear diesel load of 6,500 gallons or more bills
                  at the full-load price; split loads, one truck serving two
                  customers, get divided into portions that invoice separately;
                  a delivery that arrives before its price was sent re-prices
                  itself when the price arrives. Hand-priced deliveries still
                  get their taxes derived correctly by state.
                </p>
              </div>
            </div>

            <div className="fz-row">
              <span className="fz-num">04</span>
              <div>
                <h3>QuickBooks Desktop has no modern API</h3>
                <p>
                  The bookkeeper runs QuickBooks Desktop on a PC. The vendors
                  who &quot;solve&quot; this problem want distributors to
                  abandon QuickBooks for a five-figure ERP. That was never
                  going to happen here.
                </p>
                <p>
                  <b>What I built:</b> a Web Connector service, the SOAP
                  protocol QuickBooks Desktop actually supports, which the
                  bookkeeper&apos;s PC polls every 15 minutes. One click turns
                  a checked delivery into a fully itemized invoice: fuel at its
                  net rate, then every per-gallon tax as its own named line,
                  federal excise, state fuel taxes, spill fees, 16 tax rules
                  across NJ, PA, and federal, each mapped to the exact
                  QuickBooks items the bookkeeper already uses. The customer
                  list syncs back from QuickBooks live. Batch draining,
                  retries, and duplicate guards mean a dropped connection never
                  double-bills anyone.
                </p>
              </div>
            </div>

            <div className="fz-row">
              <span className="fz-num">05</span>
              <div>
                <h3>Automation nobody trusts is automation nobody uses</h3>
                <p>
                  An office that has been burned by software checks everything
                  twice, which erases the time the software saved.
                </p>
                <p>
                  <b>What I built:</b> 169 automated tests run on every change.
                  Syncs are idempotent, so running one twice changes nothing.
                  Every price and invoice carries an audit trail. And the
                  dashboard never hides a problem: when something needs a
                  human it says exactly what is wrong, a missing price, an
                  unmatched location, gallons that do not reconcile, and
                  offers the fix right there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-sec">
          <h2 className="fz-kick">Where it stands</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <h3>Hundreds of invoices</h3>
              <p>Pushed into QuickBooks Desktop through the pipeline, in production daily.</p>
            </div>
            <div className="fz-col">
              <h3>Same day</h3>
              <p>Ticket to invoice. It used to take days.</p>
            </div>
            <div className="fz-col">
              <h3>90 seconds</h3>
              <p>The morning pricing run, down from about an hour.</p>
            </div>
            <div className="fz-col">
              <h3>Nothing ripped out</h3>
              <p>The office kept QuickBooks Desktop, their item list, and their process.</p>
            </div>
          </div>
        </section>
      </main>

      <section className="fz-end">
        <div className="fz-end-in">
          <h2>If your office looks like the before picture</h2>
          <p>
            Email me one line about your operation and I will walk you through
            the system on your own numbers.
          </p>
          <a href={`mailto:${EMAIL}?subject=Walkthrough for my company`} className="fz-btn">Email me</a>
          <Link href="/demo" className="fz-btn ghost">See the walkthrough</Link>
        </div>
      </section>

      <ServiceFooter />

      <style>{`
        .cs-wrap { max-width: 860px; margin: 0 auto; padding: 56px 24px 72px; }
        .cs-head h1 { font-size: clamp(26px, 4vw, 38px); line-height: 1.18; letter-spacing: -0.02em; margin: 0 0 14px; color: var(--fz-ink); }
        .cs-sub { font-size: 17px; line-height: 1.65; color: var(--fz-mut); max-width: 62ch; margin: 0 0 34px; }
        .cs-meta { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0 28px; border-top: 2px solid var(--fz-rule); border-bottom: 1px solid var(--fz-line); margin: 0; }
        .cs-meta div { padding: 14px 0; }
        .cs-meta dt { font-family: var(--font-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fz-green); font-weight: 600; margin-bottom: 4px; }
        .cs-meta dd { margin: 0; font-size: 14.5px; color: var(--fz-ink); line-height: 1.5; }
        .cs-sec { margin-top: 52px; }
        .cs-body { font-size: 16.5px; line-height: 1.75; color: var(--fz-mut); max-width: 68ch; margin: 0 0 18px; }
        .cs-rows { max-width: none; }
        @media (max-width: 640px) { .cs-meta { grid-template-columns: 1fr; } .cs-meta div { padding: 10px 0; border-top: 1px solid var(--fz-line); } .cs-meta div:first-child { border-top: 0; } }
      `}</style>
    </>
  );
}
