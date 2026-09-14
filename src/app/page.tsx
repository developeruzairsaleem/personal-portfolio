import Link from "next/link";
import { EMAIL } from "./site-chrome";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";
import { DemoPlayer } from "./demo-player";
import { HeroCtas } from "./hero-ctas";
import { TrackedLink } from "./tracked-link";

export default function Home() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />

      <main id="main">
      {/* HERO */}
      <section className="fz-hero">
        <div className="fz-hero-in">
          <div className="fz-hero-grid">
            <div>
              <p className="fz-kicker">Operations automation for fuel distributors</p>
              <h1>
                How many hours a week does your office spend retyping truck
                tickets into QuickBooks?
              </h1>
              <p className="fz-sub">
                I&apos;m Uzair, the engineer who automated exactly that for
                Sat-Raj, a family-run fuel distributor in New Jersey. Their
                Samsara tickets now land in QuickBooks Desktop as reconciled,
                itemized invoices the same day. No retyping, no new software
                for their team to learn. I designed it, I built it, and I run
                it today.
              </p>
              <HeroCtas />
            </div>
            <DemoPlayer />
          </div>
          <div className="fz-stats">
            <div><b>60 min &rarr; 90 sec</b><span>the morning pricing run</span></div>
            <div><b>Same day</b><span>ticket to QuickBooks invoice</span></div>
            <div><b>Hundreds</b><span>of live invoices pushed</span></div>
          </div>
          <p className="fz-built">Built around QuickBooks Desktop, Samsara, and your state&apos;s fuel taxes.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="fz-sec" id="who">
        <div className="fz-sec-in">
          <p className="fz-kick">Who this is for</p>
          <p className="fz-who">
            You run a fleet of fuel trucks. Your office lives in QuickBooks
            Desktop. Driver tickets come through Samsara (or another ELD), and
            every morning someone prices the stations while someone else
            retypes deliveries. If that&apos;s your operation, this was built
            for exactly you.
          </p>
        </div>
      </section>

      {/* AFTER */}
      <section className="fz-sec">
        <div className="fz-sec-in">
          <p className="fz-kick">The system</p>
          <h2>What your operation looks like after</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <span className="fz-tag">pricing</span>
              <h3>Daily prices send themselves</h3>
              <p>
                Rack numbers go in once each morning. Every station gets its
                price email automatically, markups, freight, and taxes already
                applied by state.
              </p>
            </div>
            <div className="fz-col">
              <span className="fz-tag">deliveries</span>
              <h3>Deliveries check themselves</h3>
              <p>
                The driver&apos;s ticket matches to the right customer and that
                morning&apos;s price, and gallons reconcile against the BOL
                before anyone approves anything.
              </p>
            </div>
            <div className="fz-col">
              <span className="fz-tag">invoicing</span>
              <h3>Invoices reach QuickBooks same day</h3>
              <p>
                One click. Fuel at the right rate, every per-gallon tax as its
                own named line, due dates from each customer&apos;s own terms.
                Zero retyping.
              </p>
            </div>
          </div>
          <div className="fz-mid">
            <TrackedLink event="cta_see_numbers" href="#contact" className="fz-btn">See it on your numbers</TrackedLink>
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
                Sat-Raj delivers gasoline and diesel to stations across New
                Jersey and Pennsylvania. Their office ran on spreadsheets,
                retyping, and memory. I replaced that with one platform that
                prices, tracks deliveries by GPS, and invoices into QuickBooks
                Desktop. I&apos;m the sole engineer on it, and it runs their
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
              <li><b>QuickBooks invoicing</b>One click to a fully itemized Desktop invoice, every fuel tax as its own named line.</li>
              <li><b>Proof</b>Hundreds of live invoices, over 300 automated tests, in production daily.</li>
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
                <h3>A 20-minute walkthrough on your numbers</h3>
                <p>
                  Your products, your stations, your state&apos;s taxes. If it
                  wouldn&apos;t save your office hours every week, you&apos;ll
                  know in the first five minutes, and I&apos;ll tell you so
                  myself.
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
                <h3>A monthly arrangement that costs less than the admin hours it replaces</h3>
                <p>
                  Maintained and improving as your business changes. You talk
                  to me, the engineer who built it, not a sales team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE OBVIOUS QUESTIONS */}
      <section className="fz-sec" id="questions">
        <div className="fz-sec-in">
          <p className="fz-kick">The obvious questions</p>
          <ul className="fz-case-list fz-qa">
            <li><b>&ldquo;I don&apos;t use Samsara.&rdquo;</b>I build around whatever you run. Samsara, another ELD, even paper tickets.</li>
            <li><b>&ldquo;My bookkeeper is set in QuickBooks.&rdquo;</b>They keep it. The system feeds QuickBooks; it doesn&apos;t replace it. Their workflow gets shorter, not different.</li>
            <li><b>&ldquo;What happens if it breaks?&rdquo;</b>You call me. It runs a real business every day, so it can&apos;t break for long. Over 300 automated tests keep it honest.</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fz-end" id="contact">
        <div className="fz-end-in">
          <h2>See it on your own numbers</h2>
          <p>
            Send me one line: your fleet size and your accounting software.
            I&apos;ll reply within a day, and I&apos;ll tell you straight
            whether the math works for your operation.
          </p>
          <TrackedLink event="cta_email" href={`mailto:${EMAIL}?subject=My fleet and accounting software&body=Fleet size: %0D%0AAccounting software: %0D%0A`} className="fz-btn">Email me</TrackedLink>
        </div>
      </section>
      </main>

      <ServiceFooter />

      <style>{`
        .fz-hero { background: var(--fz-deeper); color: #fff; }
        .fz-hero-in { max-width: 1240px; margin: 0 auto; padding: 64px 24px 48px; }
        .fz-hero-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 52px; align-items: center; }
        .fz-kicker { font-family: var(--font-mono), monospace; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--fz-amber); margin: 0 0 16px; font-weight: 600; }
        .fz-hero h1 { font-size: clamp(24px, 3vw, 34px); line-height: 1.18; letter-spacing: -0.02em; margin: 0 0 18px; font-weight: 750; }
        .fz-sub { font-size: 16px; line-height: 1.65; color: #b9bdb4; max-width: 54ch; margin: 0 0 26px; }
        .fz-hero-cta { display: flex; flex-wrap: wrap; gap: 12px 14px; align-items: center; }
        .fz-stats { display: flex; flex-wrap: wrap; gap: 14px 44px; border-top: 1px solid #2b2e2a; margin-top: 48px; padding-top: 24px; }
        .fz-stats b { display: block; font-size: 20px; letter-spacing: -0.01em; color: #fff; }
        .fz-stats span { font-size: 13px; color: #9aa094; }
        .fz-built { margin: 18px 0 0; font-size: 14px; color: #9aa094; }
        .fz-who { font-size: 19px; line-height: 1.6; color: var(--fz-ink); max-width: 62ch; margin: 0; }
        .fz-mid { margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--fz-line); }
        .fz-qa { max-width: 720px; }
        .fz-qa li { padding: 16px 0; font-size: 15.5px; }
        .fz-qa b { font-size: 16px; margin-bottom: 4px; }
        @media (max-width: 900px) { .fz-hero-grid { grid-template-columns: 1fr; gap: 28px; } #demo-video { order: -1; } }

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
