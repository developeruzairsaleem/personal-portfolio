import Link from "next/link";
import { EMAIL, LINKS } from "./site-chrome";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";

export default function Home() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />

      <main id="main">
      {/* HERO */}
      <section className="fz-hero">
        <div className="fz-hero-in">
          <p className="fz-kicker">Software engineer · ops automation for fuel distributors</p>
          <h1>
            How many hours a week does your office spend typing truck tickets
            into QuickBooks?
          </h1>
          <p className="fz-sub">
            I am the engineer who automated exactly that for Sat-Raj, a
            family-run fuel distributor in New Jersey. Their office used to
            retype every delivery ticket, email price lists by hand, and build
            fuel tax lines one by one. I designed the system, built it, and run
            it today. They still use the same QuickBooks they always did.
          </p>
          <div className="fz-hero-cta">
            <a href="#demo-video" className="fz-btn">Watch the 90 second demo</a>
            <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="fz-btn ghost">Book 30 minutes</a>
            <Link href="/work/satraj" className="fz-hero-case">Read the Sat-Raj case study</Link>
          </div>
          <div className="fz-stats">
            <div><b>Hundreds</b><span>of live invoices pushed</span></div>
            <div><b>Same day</b><span>ticket to QuickBooks invoice</span></div>
            <div><b>60 min &rarr; 90 sec</b><span>the morning pricing run</span></div>
          </div>
        </div>
      </section>

      {/* DEMO VIDEO */}
      <section className="fz-sec" id="demo-video">
        <div className="fz-sec-in">
          <p className="fz-kick">The 90 second demo</p>
          <h2>Truck ticket to QuickBooks invoice, same day</h2>
          <div className="fz-video">
            <video controls preload="metadata" poster="/satraj-demo-poster.jpg" playsInline>
              <source src="/satraj-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="fz-sec">
        <div className="fz-sec-in">
          <p className="fz-kick">The system</p>
          <h2>What their operation looks like now</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <span className="fz-tag">pricing</span>
              <h3>Daily prices send themselves</h3>
              <p>
                Rack numbers go in once each morning. Every station gets its
                price email automatically, markups, freight and taxes already
                applied.
              </p>
            </div>
            <div className="fz-col">
              <span className="fz-tag">deliveries</span>
              <h3>Deliveries check themselves</h3>
              <p>
                The driver&apos;s ticket matches to the right customer and that
                morning&apos;s price, and the gallons reconcile against the BOL
                before anyone approves anything.
              </p>
            </div>
            <div className="fz-col">
              <span className="fz-tag">invoicing</span>
              <h3>Invoices reach QuickBooks same day</h3>
              <p>
                One click. Fuel at the right rate, every per gallon tax as its
                own named line, due dates from each customer&apos;s own terms.
                Zero retyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="fz-sec" id="work">
        <div className="fz-sec-in">
          <p className="fz-kick">Case study</p>
          <h2>Sat-Raj, Inc., New Jersey</h2>
          <div className="fz-case">
            <div>
              <p>
                Sat-Raj delivers gasoline and diesel to gas stations across New
                Jersey and Pennsylvania. Their office ran on spreadsheets,
                retyping, and memory. I replaced that with one platform that
                prices, tracks deliveries by GPS, and invoices into QuickBooks
                Desktop. I am the sole engineer on it and it runs their
                business every day.
              </p>
              <div className="fz-case-links">
                <Link href="/work/satraj" className="fz-link">Read the full case study</Link>
                <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc</a>
              </div>
            </div>
            <ul className="fz-case-list">
              <li><b>Pricing engine</b>Rack costs in once, every customer&apos;s price email out automatically, taxes by state.</li>
              <li><b>Delivery tracking</b>Driver tickets pulled from Samsara, matched to the right customer by where the truck actually stopped.</li>
              <li><b>QuickBooks invoicing</b>One click to a fully itemized QuickBooks Desktop invoice, every fuel tax as its own named line.</li>
              <li><b>Proof</b>Hundreds of live invoices, 169 automated tests, in production daily.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT GOES */}
      <section className="fz-sec">
        <div className="fz-sec-in">
          <p className="fz-kick">Working with me</p>
          <h2>How it goes</h2>
          <div className="fz-rows">
            <div className="fz-row">
              <span className="fz-num">01</span>
              <div>
                <h3>A 20 minute walkthrough on your numbers</h3>
                <p>
                  Your products, your stations, your state&apos;s taxes. If it
                  would not save your office hours every week, you will know in
                  the first five minutes, and I will tell you so myself.
                </p>
              </div>
            </div>
            <div className="fz-row">
              <span className="fz-num">02</span>
              <div>
                <h3>A one-time setup gets you live</h3>
                <p>
                  I build it around your operation and your QuickBooks. Nothing
                  off a shelf, nothing your team has to bend around.
                </p>
              </div>
            </div>
            <div className="fz-row">
              <span className="fz-num">03</span>
              <div>
                <h3>A monthly arrangement keeps it running</h3>
                <p>
                  Maintained and improving as your business changes. You talk
                  to me, the engineer who built it, not a sales team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fz-end">
        <div className="fz-end-in">
          <h2>See it on your own numbers</h2>
          <p>
            Email me one line about your operation and I will set up the
            walkthrough. I usually reply within a day.
          </p>
          <a href={`mailto:${EMAIL}?subject=Walkthrough for my company`} className="fz-btn">Email me</a>
        </div>
      </section>
      </main>

      <ServiceFooter />

      <style>{`
        .fz-hero { background: linear-gradient(180deg, var(--fz-deeper) 0%, var(--fz-deep) 100%); color: #fff; }
        .fz-hero-in { max-width: 1020px; margin: 0 auto; padding: 84px 24px 64px; }
        .fz-kicker { font-family: var(--font-mono), monospace; font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--fz-amber); margin: 0 0 18px; font-weight: 600; }
        .fz-hero h1 { font-size: clamp(30px, 4.6vw, 46px); line-height: 1.16; letter-spacing: -0.02em; margin: 0 0 20px; max-width: 21ch; font-weight: 750; }
        .fz-sub { font-size: 17.5px; line-height: 1.65; color: #c8d6cf; max-width: 62ch; margin: 0 0 30px; }
        .fz-hero-cta { display: flex; flex-wrap: wrap; gap: 12px 18px; align-items: center; margin-bottom: 46px; }
        .fz-hero-case { color: #c8d6cf; font-size: 14.5px; font-weight: 500; border-bottom: 1px solid #3f5d52; padding-bottom: 2px; }
        .fz-hero-case:hover { color: #fff; border-color: #9db8ae; }
        .fz-stats { display: flex; flex-wrap: wrap; gap: 14px 44px; border-top: 1px solid #2b473e; padding-top: 26px; }
        .fz-stats b { display: block; font-size: 21px; letter-spacing: -0.01em; color: #fff; }
        .fz-stats span { font-size: 13.5px; color: #9db8ae; }

        .fz-case { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 24px 56px; }
        .fz-case > div > p { font-size: 16px; line-height: 1.7; color: var(--fz-mut); margin: 0 0 22px; }
        .fz-case-links { display: flex; flex-wrap: wrap; gap: 12px 26px; }
        .fz-case-list { list-style: none; margin: 0; padding: 0; }
        .fz-case-list li { border-top: 1px solid var(--fz-line); padding: 13px 0; font-size: 14.5px; color: var(--fz-mut); line-height: 1.55; }
        .fz-case-list li:first-child { border-top: 2px solid var(--fz-rule); }
        .fz-case-list b { color: var(--fz-ink); display: block; font-size: 15px; margin-bottom: 2px; }
        @media (max-width: 700px) { .fz-case { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
