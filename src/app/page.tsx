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
          <div className="fz-hero-grid">
            <div>
              <p className="fz-kick">Operations automation for fuel distributors</p>
              <h1>How many hours a week does your office spend retyping truck tickets into QuickBooks?</h1>
              <p className="fz-sub">
                I&apos;m Uzair, the engineer who automated exactly that for
                Sat-Raj, a family-run fuel distributor in New Jersey. Their
                Samsara tickets now land in QuickBooks Desktop as reconciled,
                itemized invoices the same day. No retyping, no new software
                for their team to learn. I designed it, I built it, and I run
                it today.
              </p>
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
          <p className="fz-built">Built around QuickBooks Desktop, Samsara, and your state&apos;s fuel taxes.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="fz-sec sand" id="who">
        <div className="fz-sec-in">
          <p className="fz-kick">Who this is for</p>
          <ul className="fz-who-list">
            <li><Check />You run a fleet of fuel trucks.</li>
            <li><Check />Your office lives in QuickBooks Desktop.</li>
            <li><Check />Driver tickets come through Samsara (or another ELD), and every morning someone prices the stations while someone else retypes deliveries.</li>
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
              <p>Rack numbers go in once each morning. Every station gets its price email automatically, markups, freight, and taxes already applied by state.</p>
            </div>
            <div className="fz-col">
              <h3>Deliveries check themselves</h3>
              <p>The driver&apos;s ticket matches to the right customer and that morning&apos;s price, and gallons reconcile against the BOL before anyone approves anything.</p>
            </div>
            <div className="fz-col">
              <h3>Invoices reach QuickBooks same day</h3>
              <p>One click. Fuel at the right rate, every per-gallon tax as its own named line, due dates from each customer&apos;s own terms. Zero retyping.</p>
            </div>
          </div>
          <div className="fz-mid">
            <TrackedLink event="cta_see_numbers" href="#contact" className="fz-btn">See it on your numbers <span aria-hidden="true">&rarr;</span></TrackedLink>
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
          <div className="fz-rows">
            <div className="fz-row">
              <span className="fz-num">01</span>
              <div>
                <h3>A 20-minute walkthrough on your numbers</h3>
                <p>Your products, your stations, your state&apos;s taxes. If it wouldn&apos;t save your office hours every week, you&apos;ll know in the first five minutes, and I&apos;ll tell you so myself.</p>
              </div>
            </div>
            <div className="fz-row">
              <span className="fz-num">02</span>
              <div>
                <h3>A one-time setup gets you live</h3>
                <p>I build it around your operation and your QuickBooks. Nothing off a shelf, nothing your team has to bend around.</p>
              </div>
            </div>
            <div className="fz-row">
              <span className="fz-num">03</span>
              <div>
                <h3>A monthly arrangement that costs less than the admin hours it replaces</h3>
                <p>Maintained and improving as your business changes. You talk to me, the engineer who built it, not a sales team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE OBVIOUS QUESTIONS */}
      <section className="fz-sec white" id="questions">
        <div className="fz-sec-in">
          <h2>The obvious questions</h2>
          <ul className="fz-qa">
            <li><b>&ldquo;I don&apos;t use Samsara.&rdquo;</b><p>I build around whatever you run. Samsara, another ELD, even paper tickets.</p></li>
            <li><b>&ldquo;My bookkeeper is set in QuickBooks.&rdquo;</b><p>They keep it. The system feeds QuickBooks; it doesn&apos;t replace it. Their workflow gets shorter, not different.</p></li>
            <li><b>&ldquo;What happens if it breaks?&rdquo;</b><p>You call me. It runs a real business every day, so it can&apos;t break for long. Over 300 automated tests keep it honest.</p></li>
          </ul>
        </div>
      </section>

      {/* FINAL ASK */}
      <section className="fz-end" id="contact">
        <div className="fz-end-in">
          <h2>See it on your own numbers</h2>
          <p>Send me one line: your fleet size and your accounting software. I&apos;ll reply within a day, and I&apos;ll tell you straight whether the math works for your operation.</p>
          <TrackedLink event="cta_email" href={EMAIL_HREF} className="fz-btn">Email me</TrackedLink>
        </div>
      </section>
      </main>

      <ServiceFooter />

      <style>{`
        .fz-hero { padding: 72px 0 0; }
        .fz-hero-in { max-width: var(--fz-max); margin: 0 auto; padding: 0 24px; }
        .fz-hero-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: center; }
        .fz-hero h1 { font-size: clamp(32px, 4.4vw, 50px); line-height: 1.08; letter-spacing: -0.025em; font-weight: 800; color: var(--fz-ink); margin: 0 0 22px; max-width: 17ch; }
        .fz-sub { font-size: 19px; line-height: 1.6; color: var(--fz-body); max-width: 52ch; margin: 0 0 30px; }
        .fz-hero-cta { display: flex; flex-wrap: wrap; gap: 14px; }
        .fz-stats { display: grid; grid-template-columns: repeat(3, auto); justify-content: start; gap: 24px 72px; margin-top: 64px; padding: 32px 0; border-top: 1px solid var(--fz-line); border-bottom: 1px solid var(--fz-line); }
        .fz-stats b { display: block; font-size: 30px; line-height: 1.1; letter-spacing: -0.02em; color: var(--fz-ink); }
        .fz-stats span { font-size: 16px; color: var(--fz-mut); }
        .fz-built { margin: 20px 0 0; padding-bottom: 72px; font-size: 16px; color: var(--fz-mut); }

        .fz-who-list { list-style: none; margin: 0; padding: 0; max-width: 780px; }
        .fz-who-list li { display: grid; grid-template-columns: 34px 1fr; gap: 16px; align-items: start; font-size: 21px; line-height: 1.45; padding: 12px 0; color: var(--fz-ink); }
        .fz-check { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: var(--fz-amber); color: var(--fz-ink); margin-top: 1px; }
        .fz-check svg { width: 18px; height: 18px; }
        .fz-who-close { font-size: 21px; font-weight: 700; line-height: 1.45; margin: 22px 0 0; max-width: 780px; color: var(--fz-ink); }

        .fz-mid { margin-top: 56px; display: flex; justify-content: center; }

        .fz-case { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 32px 64px; }
        .fz-case > div > p { font-size: 19px; line-height: 1.65; color: var(--fz-body); margin: 0 0 26px; }
        .fz-case-links { display: flex; flex-wrap: wrap; gap: 14px 28px; }
        .fz-case-list { list-style: none; margin: 0; padding: 0; }
        .fz-case-list li { padding: 16px 0; border-top: 1px solid var(--fz-line); font-size: 17px; line-height: 1.55; color: var(--fz-body); }
        .fz-case-list li:first-child { border-top: 0; padding-top: 0; }
        .fz-case-list b { display: block; font-size: 18px; color: var(--fz-ink); margin-bottom: 4px; }
        .fz-quote { margin: 56px 0 0; padding: 28px 32px; background: var(--fz-card); border-left: 6px solid var(--fz-amber); border-radius: 0 12px 12px 0; max-width: 820px; }
        .fz-quote blockquote { margin: 0; }
        .fz-quote p { font-size: 22px; line-height: 1.5; color: var(--fz-ink); margin: 0 0 14px; }
        .fz-quote figcaption { font-size: 16px; color: var(--fz-mut); }
        .fz-quote figcaption b { color: var(--fz-ink); }

        .fz-qa { list-style: none; margin: 0; padding: 0; max-width: 760px; }
        .fz-qa li { padding: 26px 0; border-top: 1px solid var(--fz-line); }
        .fz-qa li:first-child { border-top: 0; padding-top: 0; }
        .fz-qa b { display: block; font-size: 21px; line-height: 1.3; color: var(--fz-ink); margin-bottom: 8px; }
        .fz-qa p { margin: 0; font-size: 18px; line-height: 1.6; color: var(--fz-body); }

        @media (max-width: 960px) {
          .fz-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          #demo-video { order: -1; }
          .fz-hero h1 { max-width: none; }
          .fz-case { grid-template-columns: 1fr; }
          .fz-stats { grid-template-columns: 1fr 1fr; gap: 20px 32px; }
        }
        @media (max-width: 640px) {
          .fz-hero { padding-top: 24px; }
          .fz-hero-in { padding: 0 20px; }
          .fz-hero h1 { font-size: 30px; }
          .fz-sub { font-size: 18px; }
          .fz-stats { grid-template-columns: 1fr; gap: 18px; margin-top: 44px; padding: 24px 0; }
          .fz-built { padding-bottom: 48px; }
          .fz-who-list li { font-size: 19px; grid-template-columns: 30px 1fr; gap: 12px; }
          .fz-check { width: 26px; height: 26px; }
          .fz-who-close { font-size: 19px; }
          .fz-quote { padding: 22px; }
          .fz-quote p { font-size: 20px; }
          .fz-qa b { font-size: 19px; }
        }
      `}</style>
    </>
  );
}
