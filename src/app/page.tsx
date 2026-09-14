import Link from "next/link";
import { EMAIL } from "./site-chrome";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";
import { DemoPlayer } from "./demo-player";
import { TrackedLink } from "./tracked-link";
import { OWNER_QUOTE } from "./owner-quote";

const EMAIL_HREF = `mailto:${EMAIL}?subject=My fleet and accounting software&body=Fleet size: %0D%0AAccounting software: %0D%0A`;

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
            <p className="fz-kick">Operations automation for fuel distributors</p>
            <h1>How many hours a week does your office spend retyping truck tickets into QuickBooks?</h1>
          </div>
          <div className="fz-hero-grid">
            <div>
              <p className="fz-lead">I&apos;m Uzair, the engineer who automated exactly that for Sat-Raj, a family-run fuel distributor in New Jersey.</p>
              <ul className="fz-lines" role="list">
                <li>Their Samsara tickets now land in QuickBooks Desktop as reconciled, itemized invoices the same day.</li>
                <li>No retyping, no new software for their team to learn.</li>
                <li>I designed it, I built it, and I run it today.</li>
              </ul>
              <div className="fz-hero-cta">
                <TrackedLink event="cta_see_numbers_hero" href="#contact" className="fz-btn">See it on your numbers <span aria-hidden="true">&rarr;</span></TrackedLink>
              </div>
            </div>
            <DemoPlayer />
          </div>
          <div className="fz-stats">
            <div><b>60 min &rarr; 90 sec</b><span>the morning pricing run</span></div>
            <div><b>Same day</b><span>ticket to QuickBooks invoice</span></div>
            <div><b>Hundreds</b><span>live invoices pushed</span></div>
          </div>
          <p className="fz-built"><span>Built around</span> <span className="fz-chip">QuickBooks Desktop</span> <span className="fz-chip">Samsara</span> <span className="fz-chip">your state&apos;s fuel taxes</span></p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="fz-sec sand" id="who">
        <div className="fz-sec-in">
          <h2>Who this is for</h2>
          <ul className="fz-who-list" role="list">
            <li><Check />You run a fleet of fuel trucks.</li>
            <li><Check />Your office lives in QuickBooks Desktop.</li>
            <li><Check />Driver tickets come through Samsara (or another ELD).</li>
            <li><Check />Every morning someone prices the stations while someone else retypes deliveries.</li>
          </ul>
          <p className="fz-who-close">If that&apos;s your operation, this was built for exactly you.</p>
        </div>
      </section>

      {/* AFTER */}
      <section className="fz-sec white">
        <div className="fz-sec-in">
          <h2>What your operation looks like after</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <h3>Daily prices send themselves</h3>
              <ul className="fz-lines" role="list">
                <li>Rack numbers go in once each morning.</li>
                <li>Every station gets its price email automatically, markups, freight, and taxes already applied by state.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>Deliveries check themselves</h3>
              <ul className="fz-lines" role="list">
                <li>The driver&apos;s ticket matches to the right customer and that morning&apos;s price.</li>
                <li>Gallons reconcile against the BOL before anyone approves anything.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>Invoices reach QuickBooks same day</h3>
              <ul className="fz-lines" role="list">
                <li>One click.</li>
                <li>Fuel at the right rate, every per-gallon tax as its own named line, due dates from each customer&apos;s own terms.</li>
                <li>Zero retyping.</li>
              </ul>
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
              <p className="fz-lead">Sat-Raj delivers gasoline and diesel to stations across New Jersey and Pennsylvania.</p>
              <ul className="fz-lines" role="list">
                <li>Their office ran on spreadsheets, retyping, and memory.</li>
                <li>I replaced that with one platform that prices, tracks deliveries by GPS, and invoices into QuickBooks Desktop.</li>
                <li>I&apos;m the sole engineer on it, and it runs their business every day.</li>
              </ul>
              <div className="fz-case-links">
                <Link href="/work/satraj" className="fz-link">Read the full case study</Link>
                <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc<span className="fz-sr"> (opens in new tab)</span></a>
              </div>
            </div>
            <ul className="fz-facts" role="list">
              <li><b>Pricing engine</b>Rack costs in once, every customer&apos;s price email out automatically, taxes by state.</li>
              <li><b>Delivery tracking</b>Driver tickets pulled from Samsara, matched to the right customer by where the truck actually stopped.</li>
              <li><b>QuickBooks invoicing</b>One click to a fully itemized Desktop invoice, every fuel tax as its own named line.</li>
              <li><b>Proof</b>Hundreds of live invoices, over 300 automated tests, in production daily.</li>
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
          <h2>How it goes</h2>
          <ol className="fz-rows">
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">01</span>
              <div>
                <h3>A 20-minute walkthrough on your numbers</h3>
                <ul className="fz-lines" role="list">
                  <li>Your products, your stations, your state&apos;s taxes.</li>
                  <li>If it wouldn&apos;t save your office hours every week, you&apos;ll know in the first five minutes, and I&apos;ll tell you so myself.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">02</span>
              <div>
                <h3>A one-time setup gets you live</h3>
                <ul className="fz-lines" role="list">
                  <li>I build it around your operation and your QuickBooks.</li>
                  <li>Nothing off a shelf, nothing your team has to bend around.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">03</span>
              <div>
                <h3>A monthly arrangement that costs less than the admin hours it replaces</h3>
                <ul className="fz-lines" role="list">
                  <li>Maintained and improving as your business changes.</li>
                  <li>You talk to me, the engineer who built it, not a sales team.</li>
                </ul>
              </div>
            </li>
          </ol>
          <div className="fz-mid">
            <TrackedLink event="cta_see_numbers" href="#contact" className="fz-btn">See it on your numbers <span aria-hidden="true">&rarr;</span></TrackedLink>
          </div>
        </div>
      </section>

      {/* THE OBVIOUS QUESTIONS */}
      <section className="fz-sec white" id="questions">
        <div className="fz-sec-in">
          <h2>The obvious questions</h2>
          <ul className="fz-qa" role="list">
            <li>
              <b>&ldquo;I don&apos;t use Samsara.&rdquo;</b>
              <ul className="fz-lines" role="list"><li>I build around whatever you run.</li><li>Samsara, another ELD, even paper tickets.</li></ul>
            </li>
            <li>
              <b>&ldquo;My bookkeeper is set in QuickBooks.&rdquo;</b>
              <ul className="fz-lines" role="list"><li>They keep it.</li><li>The system feeds QuickBooks; it doesn&apos;t replace it.</li><li>Their workflow gets shorter, not different.</li></ul>
            </li>
            <li>
              <b>&ldquo;What happens if it breaks?&rdquo;</b>
              <ul className="fz-lines" role="list"><li>You call me.</li><li>It runs a real business every day, so it can&apos;t break for long.</li><li>Over 300 automated tests keep it honest.</li></ul>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL ASK */}
      <section className="fz-end" id="contact">
        <div className="fz-end-in">
          <h2>See it on your own numbers</h2>
          <p>Send me one line: your fleet size and your accounting software.</p>
          <p>I&apos;ll reply within a day, and I&apos;ll tell you straight whether the math works for your operation.</p>
          <TrackedLink event="cta_email" href={EMAIL_HREF} className="fz-btn">Email me</TrackedLink>
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
        .fz-qa li { padding: 32px 0; border-top: 1px solid var(--fz-line); }
        .fz-qa li:first-child { border-top: 0; padding-top: 0; }
        .fz-qa > li > b { display: block; font-size: 22px; line-height: 1.3; color: var(--fz-ink); margin-bottom: 14px; }

        .fz-end p + p { margin-top: -14px; }

        @media (max-width: 960px) {
          .fz-hero-top { margin-bottom: 28px; }
          .fz-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          #demo-video { order: -1; }
          .fz-hero h1 { max-width: none; }
          .fz-case { grid-template-columns: 1fr; }
          .fz-stats { grid-template-columns: 1fr 1fr; gap: 20px 32px; }
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
