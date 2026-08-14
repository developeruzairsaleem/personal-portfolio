import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer, LINKS, EMAIL } from "../site-chrome";

export const metadata: Metadata = {
  title: "Ops automation for fuel distributors",
  description:
    "Truck ticket to QuickBooks invoice, same day. I build back offices for family-run fuel distributors, proven live on a New Jersey jobber.",
};

export default function FuelPage() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <section className="intro">
          <p className="label fade">
            <span>ops automation for fuel distributors</span>
          </p>
          <h1 className="fade d1" style={{ maxWidth: "17ch" }}>
            How many hours a week does your office spend typing truck tickets
            into QuickBooks?
          </h1>
          <p className="sub fade d2">
            I spent the past year automating exactly that for a family-run fuel
            distributor in New Jersey. Their office used to retype every
            delivery ticket, email price lists by hand, and build fuel tax
            lines one by one. Today it runs by itself, and they still use the
            same QuickBooks they always did.
          </p>
          <p className="links fade d3">
            <Link href="/fuel/demo">See the 60 second walkthrough <span className="x">→</span></Link>
            <a href={`mailto:${EMAIL}?subject=Walkthrough for my company`}>Email me <span className="x">↗</span></a>
            <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer">Book 30 minutes <span className="x">↗</span></a>
          </p>
        </section>

        <section className="block">
          <p className="label"><span>what their operation looks like now</span></p>
          <div className="fuel-points">
            <p>
              <b>Daily prices send themselves.</b> They enter rack numbers once
              each morning. Every station gets its price email automatically,
              markups, freight and taxes already applied.
            </p>
            <p>
              <b>Deliveries check themselves.</b> The driver&apos;s ticket
              matches to the right customer and that morning&apos;s price, and
              the gallons reconcile against the BOL before anyone approves
              anything.
            </p>
            <p>
              <b>Invoices reach QuickBooks the same day the truck delivers.</b>{" "}
              One click. Fuel at the right rate, every per gallon tax as its
              own named line, due dates from each customer&apos;s own terms.
              Hundreds of invoices pushed. Zero retyping.
            </p>
          </div>
        </section>

        <section className="block">
          <p className="label"><span>how working with me goes</span></p>
          <div className="fuel-points">
            <p>
              I am not selling software off a shelf. I build this around{" "}
              <b>your</b> operation: your products, your stations, your
              state&apos;s taxes, your QuickBooks. A one-time setup gets you
              live, then a monthly arrangement keeps it running, maintained,
              and improving as your business changes. You talk to me, the
              engineer who built it, not a sales team.
            </p>
            <p>
              The first step is a 20 minute walkthrough on your own numbers. If
              it would not save your office hours every week, you will know
              inside the first five minutes, and I will tell you so myself.
            </p>
          </div>
          <p className="links" style={{ marginTop: 22 }}>
            <a href={`mailto:${EMAIL}?subject=Walkthrough for my company`}>Book a walkthrough <span className="x">↗</span></a>
          </p>
        </section>
      </main>
      <Footer />
      <style>{`
        .fuel-points p { margin: 0 0 16px; color: var(--muted); font-size: 16.5px; line-height: 1.65; max-width: 62ch; }
        .fuel-points p b { color: var(--ink); font-weight: 600; }
      `}</style>
    </>
  );
}
