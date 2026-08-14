import Link from "next/link";
import { EMAIL, LINKS } from "./site-chrome";
import { ServiceNav, ServiceFooter, ServiceStyles } from "./service-chrome";

export default function Home() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />

      {/* HERO */}
      <section className="fz-hero">
        <div className="fz-hero-in">
          <p className="fz-kicker">Ops automation for fuel distributors</p>
          <h1>
            How many hours a week does your office spend typing truck tickets
            into QuickBooks?
          </h1>
          <p className="fz-sub">
            I automated exactly that for a family-run fuel distributor in New
            Jersey. Their office used to retype every delivery ticket, email
            price lists by hand, and build fuel tax lines one by one. Today it
            runs by itself, and they still use the same QuickBooks they always
            did.
          </p>
          <div className="fz-hero-cta">
            <Link href="/demo" className="fz-btn">See the 60 second walkthrough</Link>
            <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="fz-btn ghost">Book 30 minutes</a>
          </div>
          <div className="fz-stats">
            <div><b>Hundreds</b><span>of live invoices pushed</span></div>
            <div><b>Same day</b><span>ticket to QuickBooks invoice</span></div>
            <div><b>60 min &rarr; 90 sec</b><span>daily pricing and invoicing run</span></div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="fz-sec">
        <div className="fz-sec-in">
          <h2>What their operation looks like now</h2>
          <div className="fz-cards">
            <div className="fz-card">
              <span className="fz-tag">pricing</span>
              <h3>Daily prices send themselves</h3>
              <p>
                Rack numbers go in once each morning. Every station gets its
                price email automatically, markups, freight and taxes already
                applied.
              </p>
            </div>
            <div className="fz-card">
              <span className="fz-tag">deliveries</span>
              <h3>Deliveries check themselves</h3>
              <p>
                The driver&apos;s ticket matches to the right customer and that
                morning&apos;s price, and the gallons reconcile against the BOL
                before anyone approves anything.
              </p>
            </div>
            <div className="fz-card">
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

      {/* HOW IT GOES */}
      <section className="fz-sec alt">
        <div className="fz-sec-in">
          <h2>How working with me goes</h2>
          <div className="fz-steps">
            <div className="fz-step">
              <span className="fz-num">1</span>
              <div>
                <h3>A 20 minute walkthrough on your numbers</h3>
                <p>
                  Your products, your stations, your state&apos;s taxes. If it
                  would not save your office hours every week, you will know in
                  the first five minutes, and I will tell you so myself.
                </p>
              </div>
            </div>
            <div className="fz-step">
              <span className="fz-num">2</span>
              <div>
                <h3>A one-time setup gets you live</h3>
                <p>
                  I build it around your operation and your QuickBooks. Nothing
                  off a shelf, nothing your team has to bend around.
                </p>
              </div>
            </div>
            <div className="fz-step">
              <span className="fz-num">3</span>
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

      <ServiceFooter />

      <style>{`
        .fz-hero { background: linear-gradient(180deg, var(--fz-deeper) 0%, var(--fz-deep) 100%); color: #fff; }
        .fz-hero-in { max-width: 1020px; margin: 0 auto; padding: 84px 24px 64px; }
        .fz-kicker { font-family: var(--font-mono), monospace; font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--fz-amber); margin: 0 0 18px; font-weight: 600; }
        .fz-hero h1 { font-size: clamp(30px, 4.6vw, 46px); line-height: 1.16; letter-spacing: -0.02em; margin: 0 0 20px; max-width: 21ch; font-weight: 750; }
        .fz-sub { font-size: 17.5px; line-height: 1.65; color: #c8d6cf; max-width: 60ch; margin: 0 0 30px; }
        .fz-hero-cta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 46px; }
        .fz-btn { display: inline-block; background: var(--fz-amber); color: var(--fz-deeper); font-weight: 700; font-size: 15.5px; padding: 13px 26px; border-radius: 8px; transition: background 0.15s; }
        .fz-btn:hover { background: #f2ab33; }
        .fz-btn.ghost { background: transparent; color: #e9f0ec; border: 1.5px solid #3f5d52; }
        .fz-btn.ghost:hover { background: rgba(255,255,255,0.06); border-color: #6b8a7d; }
        .fz-stats { display: flex; flex-wrap: wrap; gap: 14px 44px; border-top: 1px solid #2b473e; padding-top: 26px; }
        .fz-stats b { display: block; font-size: 21px; letter-spacing: -0.01em; color: #fff; }
        .fz-stats span { font-size: 13.5px; color: #9db8ae; }
        .fz-sec { padding: 64px 0; }
        .fz-sec.alt { background: #eeece4; }
        .fz-sec-in, .fz-end-in { max-width: 1020px; margin: 0 auto; padding: 0 24px; }
        .fz-sec h2 { font-size: 24px; letter-spacing: -0.015em; color: var(--fz-ink); margin: 0 0 26px; }
        .fz-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
        .fz-card { background: var(--fz-card); border: 1px solid var(--fz-line); border-radius: 12px; padding: 24px; box-shadow: 0 1px 4px rgba(27,36,32,0.05); }
        .fz-tag { font-family: var(--font-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fz-green); font-weight: 600; }
        .fz-card h3 { font-size: 17.5px; margin: 10px 0 8px; color: var(--fz-ink); letter-spacing: -0.01em; }
        .fz-card p { font-size: 15px; line-height: 1.6; color: var(--fz-mut); margin: 0; }
        .fz-steps { display: flex; flex-direction: column; gap: 18px; max-width: 720px; }
        .fz-step { display: flex; gap: 18px; background: var(--fz-card); border: 1px solid var(--fz-line); border-radius: 12px; padding: 22px 24px; }
        .fz-num { flex: none; width: 34px; height: 34px; border-radius: 50%; background: var(--fz-deep); color: var(--fz-amber); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 15px; }
        .fz-step h3 { font-size: 16.5px; margin: 4px 0 6px; color: var(--fz-ink); }
        .fz-step p { font-size: 15px; line-height: 1.6; color: var(--fz-mut); margin: 0; }
        .fz-end { background: var(--fz-deep); color: #fff; padding: 64px 0; }
        .fz-end h2 { font-size: 26px; margin: 0 0 12px; letter-spacing: -0.015em; }
        .fz-end p { color: #c8d6cf; font-size: 16.5px; margin: 0 0 24px; max-width: 52ch; }
      `}</style>
    </>
  );
}
