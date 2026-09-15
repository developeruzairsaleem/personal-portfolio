import Link from "next/link";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";
import { DemoPlayer } from "./demo-player";
import { TrackedLink } from "./tracked-link";
import { OWNER_QUOTE } from "./owner-quote";
import { FIT_CHECK_HREF } from "./service-contact";
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
            <p className="fz-kick">Operations automation for fuel distributors</p>
            <h1>From delivery tickets to QuickBooks. With your office in control.</h1>
          </div>
          <div className="fz-hero-grid">
            <div>
              <p className="fz-lead">I build invoicing and pricing tools for fuel distributors who still move delivery data by hand.</p>
              <ul className="fz-lines" role="list">
                <li>At Sat-Raj in New Jersey, I connected Samsara delivery review, pricing, and QuickBooks Desktop invoicing.</li>
                <li>For your operation, we start with one workflow and compare the results with your existing invoices.</li>
                <li>Your office reviews the output before it goes into the books.</li>
              </ul>
              <div className="fz-hero-cta">
                <TrackedLink event="cta_fit_check_hero" href={FIT_CHECK_HREF} className="fz-btn">Check one workflow <span aria-hidden="true">&rarr;</span></TrackedLink>
                <TrackedLink event="cta_watch_demo_hero" href="#demo-video" className="fz-link">Watch the 90-second demo</TrackedLink>
              </div>
            </div>
            <DemoPlayer />
          </div>
          <div className="fz-stats">
            <div><b>One workflow</b><span>a defined starting scope</span></div>
            <div><b>Your review</b><span>before production posting</span></div>
            <div><b>Desktop</b><span>keep your accounting system</span></div>
          </div>
          <p className="fz-built"><span>Built around</span> <span className="fz-chip">QuickBooks Desktop</span> <span className="fz-chip">Samsara</span> <span className="fz-chip">your state&apos;s fuel taxes</span></p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="fz-sec sand" id="who">
        <div className="fz-sec-in">
          <h2>Who this is for</h2>
          <ul className="fz-who-list" role="list">
            <li><Check />You distribute gasoline or diesel to stations or commercial customers.</li>
            <li><Check />Your office lives in QuickBooks Desktop.</li>
            <li><Check />Your delivery records are available from Samsara or an export we can assess.</li>
            <li><Check />Someone still retypes delivery data or builds customer price emails by hand.</li>
          </ul>
          <p className="fz-who-close">Tell me which step takes the work. We&apos;ll check the fit before discussing a build.</p>
        </div>
      </section>

      {/* AFTER */}
      <section className="fz-sec white">
        <div className="fz-sec-in">
          <h2>Choose the workflow that needs attention</h2>
          <div className="fz-cols">
            <div className="fz-col">
              <h3>Prepare customer prices</h3>
              <ul className="fz-lines" role="list">
                <li>Rack numbers go in once each morning.</li>
                <li>Calculate customer prices using your approved markups, freight, and tax rules, then send the price emails.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>Review delivery records</h3>
              <ul className="fz-lines" role="list">
                <li>Bring tickets, customer matches, prices, and BOL information into one review.</li>
                <li>Flag missing information and differences for the office to resolve.</li>
              </ul>
            </div>
            <div className="fz-col">
              <h3>Create QuickBooks invoices</h3>
              <ul className="fz-lines" role="list">
                <li>Send approved delivery details to QuickBooks Desktop through its Web Connector.</li>
                <li>Use mapped customers and invoice items, including the applicable fuel tax lines.</li>
                <li>Keep exceptions and sync status visible.</li>
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
                <li>I built their system for customer pricing, delivery review, and invoicing.</li>
                <li>It connects Samsara delivery records and DTN terminal information with QuickBooks Desktop.</li>
                <li>The case study shows the implementation and the review steps it supports.</li>
              </ul>
              <div className="fz-case-links">
                <Link href="/work/satraj" className="fz-link">Read the full case study</Link>
                <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fz-link">satraj.inc<span className="fz-sr"> (opens in new tab)</span></a>
              </div>
            </div>
            <ul className="fz-facts" role="list">
              <li><b>Pricing</b>Customer prices calculated from rack costs, freight, margins, and configured taxes.</li>
              <li><b>Delivery review</b>Samsara tickets and location evidence help match deliveries to customers.</li>
              <li><b>QuickBooks invoicing</b>Reviewed deliveries become invoice jobs with mapped fuel and tax items.</li>
              <li><b>See the work</b>A 90-second recording and an interactive example show the flow.</li>
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
                <h3>Check the fit</h3>
                <ul className="fz-lines" role="list">
                  <li>Tell me your accounting software, how tickets arrive, and what still happens by hand.</li>
                  <li>We identify one useful improvement and check whether your existing software can already handle it.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">02</span>
              <div>
                <h3>Test a defined pilot</h3>
                <ul className="fz-lines" role="list">
                  <li>We agree the records, outputs, price, and acceptance criteria before work begins.</li>
                  <li>Your office compares the sample output with its current invoices before any live posting.</li>
                </ul>
              </div>
            </li>
            <li className="fz-row">
              <span className="fz-num" aria-hidden="true">03</span>
              <div>
                <h3>Roll out with a support plan</h3>
                <ul className="fz-lines" role="list">
                  <li>After approval, we plan setup, training, and the ongoing support your workflow needs.</li>
                  <li>You work directly with me. Delivery dates and support coverage are agreed in the scope.</li>
                </ul>
              </div>
            </li>
          </ol>
          <div className="fz-mid">
            <TrackedLink event="cta_fit_check" href={FIT_CHECK_HREF} className="fz-btn">Check one workflow <span aria-hidden="true">&rarr;</span></TrackedLink>
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
              <ul className="fz-lines" role="list"><li>The existing implementation uses Samsara.</li><li>For another system or paper tickets, I first check the available data and how it could be captured.</li><li>Compatibility is part of the fit check.</li></ul>
            </li>
            <li>
              <b>&ldquo;My bookkeeper is set in QuickBooks.&rdquo;</b>
              <ul className="fz-lines" role="list"><li>The existing integration works with QuickBooks Desktop.</li><li>We check your edition and setup, then agree how the office reviews and approves invoices.</li></ul>
            </li>
            <li>
              <b>&ldquo;What happens if it breaks?&rdquo;</b>
              <ul className="fz-lines" role="list"><li>We define who monitors it, how to report a problem, and how to continue the work manually.</li><li>Support hours, backups, and recovery arrangements belong in the agreement before rollout.</li></ul>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL ASK */}
      <section className="fz-end" id="contact">
        <div className="fz-end-in">
          <h2>Which step still needs retyping?</h2>
          <p>Tell me your accounting software and the step your office does by hand.</p>
          <p>A short description is enough to start. There&apos;s no need to send customer records or price sheets.</p>
          <TrackedLink event="cta_email" href={FIT_CHECK_HREF} className="fz-btn">Email me about your workflow</TrackedLink>
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

        @media (max-width: 960px) {
          .fz-hero-top { margin-bottom: 28px; }
          .fz-hero-grid { grid-template-columns: 1fr; gap: 32px; }
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
