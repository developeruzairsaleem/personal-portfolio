import Link from "next/link";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";
import { DemoPlayer } from "./demo-player";
import { TrackedLink } from "./tracked-link";
import { OWNER_QUOTE } from "./owner-quote";
import { BOOK_HREF, FIT_CHECK_HREF } from "./service-contact";
import { CopyEmail } from "./copy-email";

function Check() {
  return (
    <span className="fz-check" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />

      <main id="main">
      {/* HERO */}
      <section className="fz-hero">
        <div className="fz-hero-in">
          <div className="fz-hero-top">
            <p className="fz-kick">For gasoline &amp; diesel distributors on QuickBooks</p>
            <h1>Stop retyping delivery tickets into QuickBooks.</h1>
          </div>
          <div className="fz-hero-grid">
            <div>
              <p className="fz-lead">I build and run the back office for Sat-Raj, a New Jersey fuel distributor. Loads come in from terminal tickets and truck GPS, get priced, get approved, and land in QuickBooks as invoices.</p>
              <ul className="fz-lines" role="list">
                <li>Every load priced with rack cost, freight, margin and every federal and state fuel tax line.</li>
                <li>Your office approves each invoice before it posts. Nothing goes into the books on its own.</li>
                <li>You keep QuickBooks. Your data stays in your account.</li>
              </ul>
              <div className="fz-hero-cta">
                <TrackedLink event="cta_book_hero" href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className="fz-btn">Book a 20-min walkthrough <span aria-hidden="true">&rarr;</span></TrackedLink>
                <TrackedLink event="cta_watch_demo_hero" href="#demo-video" className="fz-link">Watch the demo</TrackedLink>
              </div>
            </div>
            <DemoPlayer />
          </div>
          <div className="fz-stats">
            <div><b>~1 hour &rarr; 1 click</b><span>Sat-Raj&apos;s daily customer price run</span></div>
            <div><b>Typed twice &rarr; zero</b><span>delivery tickets re-entered by hand</span></div>
            <div><b>Every tax line</b><span>federal, state and local, on each invoice</span></div>
          </div>
          <p className="fz-built"><span>Works with</span> <span className="fz-chip">QuickBooks Desktop &amp; Online</span> <span className="fz-chip">DTN</span> <span className="fz-chip">Samsara</span> <span className="fz-chip">your state&apos;s fuel taxes</span></p>
        </div>
      </section>

      {/* SOUND FAMILIAR */}
      <section className="fz-sec sand" id="who">
        <div className="fz-sec-in">
          <h2>Sound familiar?</h2>
          <ul className="fz-who-list" role="list">
            <li><Check />Someone types BOLs into QuickBooks every afternoon, from DTN, the ELD, or paper.</li>
            <li><Check />Gross, net and billed gallons don&apos;t always agree, and it&apos;s not obvious which one hit the invoice.</li>
            <li><Check />Fuel tax lines get added by hand, and one wrong rate means a corrected invoice.</li>
            <li><Check />Tomorrow&apos;s prices go out from a spreadsheet, one customer email at a time.</li>
            <li><Check />Small charges like additive, freight and delivery fees sometimes never make it onto the bill.</li>
            <li><Check />One person really knows how it all fits together, and they can&apos;t take a week off.</li>
          </ul>
          <p className="fz-who-close">That was Sat-Raj&apos;s office. Here&apos;s what it runs on now.</p>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="fz-sec white">
        <div className="fz-sec-in">
          <h2>What I build for you</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <h3>Daily customer prices</h3>
              <ul className="fz-lines" role="list">
                <li>Rack costs come in from DTN or get entered once.</li>
                <li>Your markups, freight zones and taxes are applied per customer and location.</li>
                <li>Price emails go out to every customer in one click, with full history.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>Delivery review</h3>
              <ul className="fz-lines" role="list">
                <li>Terminal tickets and driver BOLs pulled in automatically.</li>
                <li>Each drop matched to the right customer site by truck GPS.</li>
                <li>Gallon mismatches, missing prices and unknown sites flagged for the office.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>QuickBooks invoices</h3>
              <ul className="fz-lines" role="list">
                <li>Approved deliveries become invoices with your items and every fuel tax line.</li>
                <li>Duplicate protection and a visible sync status for each invoice.</li>
                <li>Works with QuickBooks Desktop or Online.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="fz-sec" id="work">
        <div className="fz-sec-in">
          <p className="fz-kick">Live in production</p>
          <h2>Sat-Raj, Inc. &middot; Voorhees, New Jersey</h2>
          <div className="fz-case">
            <div>
              <p className="fz-lead">Sat-Raj has supplied gasoline and diesel to stations in New Jersey and Pennsylvania since 1992. Their back office ran on Google Sheets and retyping.</p>
              <ul className="fz-lines" role="list">
                <li>I replaced it with one system: DTN terminal prices and tickets, Samsara deliveries, customer pricing, delivery review and QuickBooks invoicing.</li>
                <li>I still run and extend it every week. Recent additions: the Top Tier additive charge and a payables view. Supplier invoice checks are next.</li>
              </ul>
              <div className="fz-case-links">
                <Link href="/work/satraj" className="fz-link">Read the full case study</Link>
                <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc<span className="fz-sr"> (opens in new tab)</span></a>
              </div>
            </div>
            <ul className="fz-facts" role="list">
              <li><b>Pricing</b>The daily price run went from 45&ndash;60 minutes of spreadsheet and email work to one reviewed click.</li>
              <li><b>Deliveries</b>BOLs used to be typed into Sheets, then again into QuickBooks. Now they&apos;re pulled once and matched.</li>
              <li><b>Invoices</b>Each load is invoiced with its fuel and tax lines and synced to QuickBooks with its invoice number.</li>
              <li><b>Audit trail</b>Every price sent and every invoice synced can be looked up by date and customer.</li>
            </ul>
          </div>
          {OWNER_QUOTE && (
            <figure className="fz-quote">
              <blockquote><p>&ldquo;{OWNER_QUOTE.text}&rdquo;</p></blockquote>
              <figcaption><b>{OWNER_QUOTE.name}</b>, {OWNER_QUOTE.role}</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* HOW IT GOES */}
      <section className="fz-sec sand">
        <div className="fz-sec-in">
          <h2>How it works</h2>
          <ol className="fz-rows">
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">01</span>
              <div>
                <h3>A 20-minute walkthrough</h3>
                <ul className="fz-lines" role="list">
                  <li>You show me how one load goes from ticket to invoice today. I show you the system running at Sat-Raj.</li>
                  <li>You leave with a clear picture of what would change, and a fixed price in writing. No data to send beforehand.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">02</span>
              <div>
                <h3>Run it side by side</h3>
                <ul className="fz-lines" role="list">
                  <li>I set it up on your real tickets while your office keeps working the old way.</li>
                  <li>You compare its invoices with yours. It goes live only when they match.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">03</span>
              <div>
                <h3>Go live, then I keep it running</h3>
                <ul className="fz-lines" role="list">
                  <li>Monthly support covers fixes, tax rate changes and new charges. You deal with me directly.</li>
                  <li>It runs in your own cloud account, so you own the system and the data.</li>
                </ul>
              </div>
            </li>
          </ol>
          <div className="fz-mid">
            <TrackedLink event="cta_book_mid" href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className="fz-btn">Book a 20-min walkthrough <span aria-hidden="true">&rarr;</span></TrackedLink>
          </div>
        </div>
      </section>

      {/* THE OBVIOUS QUESTIONS */}
      <section className="fz-sec white" id="questions">
        <div className="fz-sec-in">
          <h2>The obvious questions</h2>
          <ul className="fz-qa" role="list">
            <li>
              <b>&ldquo;We don&apos;t use Samsara.&rdquo;</b>
              <ul className="fz-lines" role="list"><li>That&apos;s fine. DTN tickets, another ELD, dispatch software exports, emailed PDFs: if the data exists, it can usually be pulled in.</li><li>We&apos;ll look at exactly what you have on the call.</li></ul>
            </li>
            <li>
              <b>&ldquo;We already have fuel software.&rdquo;</b>
              <ul className="fz-lines" role="list"><li>Then the question is which step still gets retyped. Often it&apos;s the hop between the dispatch system and QuickBooks.</li><li>If your current software already covers it, I&apos;ll tell you that.</li></ul>
            </li>
            <li>
              <b>&ldquo;You&apos;re not local. What if something breaks?&rdquo;</b>
              <ul className="fz-lines" role="list"><li>I work US Eastern business hours and answer the same day. Sat-Raj emails me and it gets fixed.</li><li>The system lives in your own cloud account and your books stay in QuickBooks, so you&apos;re never locked in.</li></ul>
            </li>
            <li>
              <b>&ldquo;What does it cost?&rdquo;</b>
              <ul className="fz-lines" role="list"><li>A fixed price for the setup and a flat monthly fee for support. No hourly billing.</li><li>You get the number in writing after the walkthrough, before you commit to anything.</li></ul>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL ASK */}
      <section className="fz-end" id="contact">
        <div className="fz-end-in">
          <h2>See it on your own tickets</h2>
          <p>20 minutes, on Zoom or Google Meet. Bring one load you invoiced last week.</p>
          <p>Prefer email? Tell me your accounting software and the step your office still does by hand.</p>
          <TrackedLink event="cta_book_end" href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className="fz-btn">Book a 20-min walkthrough</TrackedLink>
          <p className="fz-alt"><TrackedLink event="cta_email" href={FIT_CHECK_HREF} className="fz-link">Or email me</TrackedLink></p>
          <CopyEmail />
        </div>
      </section>
      </main>

      <ServiceFooter />

      <style>{`
        .fz-hero { padding: 64px 0 0; }
        .fz-hero-in { max-width: var(--fz-max); margin: 0 auto; padding: 0 24px; }
        .fz-hero-top { max-width: 900px; margin: 0 0 44px; }
        .fz-hero-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 64px; align-items: center; }
        .fz-hero h1 { font-size: clamp(32px, 3.6vw, 44px); line-height: 1.1; letter-spacing: -0.025em; font-weight: 800; color: var(--fz-ink); margin: 0; max-width: 24ch; }
        .fz-hero-cta { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

        .fz-lead { font-size: 21px; line-height: 1.45; font-weight: 600; color: var(--fz-ink); margin: 0 0 18px; max-width: 46ch; }
        .fz-lines { list-style: none; margin: 0; padding: 0; max-width: 50ch; }
        .fz-lines li { position: relative; padding-left: 24px; margin: 0 0 12px; font-size: 18px; line-height: 1.55; color: var(--fz-body); }
        .fz-lines li:last-child { margin-bottom: 0; }
        .fz-lines li::before { content: ""; position: absolute; left: 2px; top: 0.6em; width: 9px; height: 9px; border-radius: 50%; background: var(--fz-amber); }

        .fz-stats { display: grid; grid-template-columns: repeat(3, auto); justify-content: start; gap: 24px 80px; margin-top: 72px; padding: 36px 0; border-top: 1px solid var(--fz-line); border-bottom: 1px solid var(--fz-line); }
        .fz-stats b { display: block; font-size: 32px; line-height: 1.1; letter-spacing: -0.02em; color: var(--fz-ink); margin-bottom: 4px; }
        .fz-stats span { font-size: 16px; color: var(--fz-mut); }
        .fz-built { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 12px; margin: 24px 0 0; padding-bottom: 80px; font-size: 16px; color: var(--fz-mut); }
        .fz-chip { display: inline-block; background: var(--fz-card); border: 1px solid var(--fz-line); border-radius: 999px; padding: 7px 14px; font-size: 15px; font-weight: 600; color: var(--fz-ink); }

        .fz-who-list { list-style: none; margin: 0; padding: 0; max-width: 780px; }
        .fz-who-list li { display: grid; grid-template-columns: 34px 1fr; gap: 16px; align-items: start; font-size: 21px; line-height: 1.45; padding: 14px 0; color: var(--fz-ink); }
        .fz-check { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: var(--fz-amber); color: var(--fz-ink); margin-top: 1px; }
        .fz-check svg { width: 18px; height: 18px; }
        .fz-who-close { font-size: 21px; font-weight: 700; line-height: 1.45; margin: 30px 0 0; max-width: 780px; color: var(--fz-ink); }

        .fz-mid { margin-top: 56px; display: flex; justify-content: center; }

        .fz-case { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 72px; align-items: start; }
        .fz-case-links { display: flex; flex-wrap: wrap; gap: 14px 28px; margin-top: 28px; }
        .fz-facts { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 28px 32px; }
        .fz-facts li { border-top: 3px solid var(--fz-amber); padding-top: 14px; font-size: 17px; line-height: 1.55; color: var(--fz-body); }
        .fz-facts b { display: block; font-size: 19px; color: var(--fz-ink); margin-bottom: 6px; }
        .fz-quote { margin: 56px 0 0; padding: 28px 32px; background: var(--fz-card); border-left: 6px solid var(--fz-amber); border-radius: 0 12px 12px 0; max-width: 820px; }
        .fz-quote blockquote { margin: 0; }
        .fz-quote p { font-size: 22px; line-height: 1.5; color: var(--fz-ink); margin: 0 0 14px; }
        .fz-quote figcaption { font-size: 16px; color: var(--fz-mut); }
        .fz-quote figcaption b { color: var(--fz-ink); }

        .fz-qa { list-style: none; margin: 0; padding: 0; max-width: 680px; }
        .fz-qa > li { padding: 32px 0; border-top: 1px solid var(--fz-line); }
        .fz-qa > li:first-child { border-top: 0; padding-top: 0; }
        .fz-qa > li > b { display: block; font-size: 22px; line-height: 1.3; color: var(--fz-ink); margin-bottom: 14px; }

        .fz-end p + p { margin-top: -14px; }
        .fz-alt { margin: 18px 0 0; }
        .fz-stats b { white-space: nowrap; }

        @media (max-width: 960px) {
          .fz-hero-top { margin-bottom: 28px; }
          .fz-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .fz-hero h1 { max-width: none; }
          .fz-case { grid-template-columns: 1fr; }
          .fz-stats { grid-template-columns: 1fr 1fr; gap: 20px 32px; }
          .fz-stats b { font-size: 26px; }
        }
        @media (max-width: 640px) {
          .fz-hero { padding-top: 28px; }
          .fz-hero-in { padding: 0 20px; }
          .fz-hero h1 { font-size: 30px; }
          .fz-lead { font-size: 19px; }
          .fz-lines li { font-size: 17px; }
          .fz-stats { grid-template-columns: 1fr; gap: 20px; margin-top: 48px; padding: 28px 0; }
          .fz-built { padding-bottom: 48px; }
          .fz-facts { grid-template-columns: 1fr; gap: 24px; }
          .fz-who-list li { font-size: 19px; grid-template-columns: 30px 1fr; gap: 12px; }
          .fz-check { width: 26px; height: 26px; }
          .fz-who-close { font-size: 19px; }
          .fz-quote { padding: 22px; }
          .fz-quote p { font-size: 20px; }
          .fz-qa > li > b { font-size: 20px; }
        }
      `}</style>
    </>
  );
}
