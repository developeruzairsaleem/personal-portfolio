import type { Metadata } from "next";
import Link from "next/link";
import { FIT_CHECK_HREF } from "../../service-contact";
import { CopyEmail } from "../../copy-email";
import { ServiceNav, ServiceFooter, ServiceStyles } from "../../service-chrome";
import { DemoPlayer } from "../../demo-player";

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
    text: "I built the application and provide ongoing development and support. The work includes changes to pricing rules, customer mappings, delivery handling and accounting integration, alongside the screens the office uses to review them.",
    detail: "For a new project, we agree who handles exceptions, what is monitored, how to fall back to the existing process and what ongoing support covers.",
  },
];

export default function SatrajCaseStudy() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />
      <main id="main" className="cs-wrap">
        <header className="cs-head">
          <p className="fz-kick">Client implementation</p>
          <h1>Sat-Raj: pricing, delivery review and QuickBooks Desktop</h1>
          <p className="cs-sub">
            Custom software for a gasoline and diesel distributor in New Jersey.
            It connects customer pricing and delivery records with the office&apos;s
            invoicing process in QuickBooks Desktop.
          </p>
          <dl className="cs-meta">
            <div><dt>My role</dt><dd>Developer and ongoing support</dd></div>
            <div><dt>Accounting</dt><dd>QuickBooks Desktop Web Connector</dd></div>
            <div><dt>Delivery data</dt><dd>Samsara and DTN integrations</dd></div>
            <div><dt>Client</dt><dd><a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc<span className="fz-sr"> (opens in new tab)</span></a></dd></div>
          </dl>
        </header>
        <section className="cs-sec">
          <h2 className="fz-kick">See the implementation · 90-second video</h2>
          <DemoPlayer />
        </section>
        <section className="cs-sec">
          <h2 className="fz-kick">What the office needs to connect</h2>
          <p className="cs-body">
            Fuel billing brings together delivery quantities, customer locations,
            changing prices and accounting items. I built a shared application
            for Sat-Raj to prepare prices, review delivery information and send
            approved invoice jobs to QuickBooks Desktop.
          </p>
          <p className="cs-body">
            The project is an example of the work I can build around an existing
            operation. The starting point for another company is one repeated
            manual step, its source data and the result the office needs.
          </p>
        </section>
        <section className="cs-sec">
          <h2 className="fz-kick">What I built</h2>
          <div className="fz-rows cs-rows">
            {WORKFLOWS.map((item, index) => (
              <div className="fz-row" key={item.title}>
                <span className="fz-num">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p><p>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="cs-sec">
          <h2 className="fz-kick">Start with one workflow</h2>
          <div className="fz-cols">
            <div className="fz-col"><h3>Check the source</h3><p>Confirm the accounting version, ticket format and integration access.</p></div>
            <div className="fz-col"><h3>Define the result</h3><p>Agree on representative records, expected invoice lines and exception handling.</p></div>
            <div className="fz-col"><h3>Review a pilot</h3><p>Check results with the office before expanding the scope or relying on automation.</p></div>
          </div>
        </section>
        <section className="fz-end">
          <div className="fz-end-in">
            <h2>Which step does your office still do by hand?</h2>
            <p>Send your accounting version, how delivery tickets arrive and the step you want to change. A short description is enough to start.</p>
            <a href={FIT_CHECK_HREF} className="fz-btn">Check one workflow</a>
            <Link href="/demo" className="fz-btn ghost">Try the sample walkthrough</Link>
            <CopyEmail />
          </div>
        </section>
      </main>
      <ServiceFooter />

      <style>{`
        .cs-wrap { max-width: 860px; margin: 0 auto; padding: 56px 24px 72px; }
        .cs-head h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 14px; color: var(--fz-ink); }
        .cs-sub { font-size: 19px; line-height: 1.6; color: var(--fz-body); max-width: 62ch; margin: 0 0 34px; }
        .cs-meta { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0 28px; border-top: 2px solid var(--fz-rule); border-bottom: 1px solid var(--fz-line); margin: 0; }
        .cs-meta div { padding: 14px 0; }
        .cs-meta dt { font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--fz-amber-ink); font-weight: 700; margin-bottom: 4px; }
        .cs-meta dd { margin: 0; font-size: 17px; color: var(--fz-ink); line-height: 1.5; }
        .cs-sec { margin-top: 52px; }
        .cs-body { font-size: 18px; line-height: 1.7; color: var(--fz-body); max-width: 64ch; margin: 0 0 18px; }
        @media (max-width: 640px) { .cs-meta { grid-template-columns: 1fr; } .cs-meta div { padding: 10px 0; border-top: 1px solid var(--fz-line); } .cs-meta div:first-child { border-top: 0; } }
      `}</style>
    </>
  );
}
