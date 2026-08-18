import Link from "next/link";
import { EMAIL, LINKS } from "./site-chrome";

/**
 * Chrome for the fuel-ops service pages (root, /work/satraj, /demo):
 * dark petrol-green bar and footer, amber CTA, editorial ruled sections.
 */
export function ServiceNav() {
  return (
    <header className="fz-nav">
      <div className="fz-nav-in">
        <Link href="/" className="fz-brand">
          Uzair Saleem <span>· software engineer</span>
        </Link>
        <nav className="fz-nav-links">
          <Link href="/work/satraj">case study</Link>
          <Link href="/demo">walkthrough</Link>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="fz-cta" href={`mailto:${EMAIL}?subject=Walkthrough for my company`}>Email me</a>
        </nav>
      </div>
    </header>
  );
}

export function ServiceFooter() {
  return (
    <footer className="fz-foot">
      <div className="fz-foot-in">
        <span>© {new Date().getFullYear()} Uzair Saleem · software engineer</span>
        <span>I build and run back offices for fuel distributors on QuickBooks</span>
      </div>
    </footer>
  );
}

export function ServiceStyles() {
  return (
    <style>{`
      :root {
        --fz-deep: #1c1f1c;
        --fz-deeper: #121412;
        --fz-amber: #e8720c;
        --fz-bg: #ffffff;
        --fz-card: #ffffff;
        --fz-ink: #191b18;
        --fz-mut: #5a5e54;
        --fz-line: #e7e5de;
        --fz-rule: #191b18;
        --fz-green: #6d7266;
      }
      body { background: var(--fz-bg); color: var(--fz-ink); }

      .fz-nav { background: var(--fz-deeper); border-top: 3px solid var(--fz-amber); }
      .fz-nav-in { max-width: 1020px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
      .fz-brand { font-weight: 700; font-size: 16px; color: #fff; letter-spacing: -0.01em; white-space: nowrap; }
      .fz-brand span { color: #9aa094; font-weight: 500; }
      .fz-nav-links { display: flex; align-items: center; gap: 22px; }
      .fz-nav-links a { font-size: 14px; color: #b9bdb4; font-weight: 500; transition: color 0.15s; white-space: nowrap; }
      .fz-nav-links a:hover { color: #fff; }
      .fz-nav-links .fz-cta { background: var(--fz-amber); color: var(--fz-deeper); font-weight: 700; padding: 8px 18px; border-radius: 4px; }
      .fz-nav-links .fz-cta:hover { background: #fb8319; color: var(--fz-deeper); }

      .fz-foot { background: var(--fz-deeper); }
      .fz-foot-in { max-width: 1020px; margin: 0 auto; padding: 26px 24px; display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; color: #9aa094; font-size: 13.5px; }

      .fz-btn { display: inline-block; background: var(--fz-amber); color: var(--fz-deeper); font-weight: 700; font-size: 15.5px; padding: 13px 26px; border-radius: 4px; transition: background 0.15s; }
      .fz-btn:hover { background: #fb8319; }
      .fz-btn.ghost { background: transparent; color: #eef0ec; border: 1.5px solid #3a3e3a; }
      .fz-btn.ghost:hover { background: rgba(255,255,255,0.06); border-color: #5c615c; }

      .fz-sec { padding: 68px 0; border-top: 1px solid var(--fz-line); }
      .fz-sec-in { max-width: 1020px; margin: 0 auto; padding: 0 24px; }
      .fz-kick { font-family: var(--font-mono), monospace; font-size: 12px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--fz-green); font-weight: 600; margin: 0 0 12px; }
      .fz-sec h2 { font-size: clamp(22px, 3vw, 28px); letter-spacing: -0.015em; color: var(--fz-ink); margin: 0 0 30px; }

      .fz-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; }
      .fz-col { border-top: 2px solid var(--fz-rule); padding-top: 16px; }
      .fz-tag { font-family: var(--font-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fz-green); font-weight: 600; }
      .fz-col h3 { font-size: 17px; margin: 10px 0 8px; color: var(--fz-ink); letter-spacing: -0.01em; }
      .fz-col p { font-size: 15px; line-height: 1.65; color: var(--fz-mut); margin: 0; }

      .fz-rows { max-width: 780px; }
      .fz-rows .fz-row:first-of-type { border-top: 2px solid var(--fz-rule); }
      .fz-row { display: grid; grid-template-columns: 56px 1fr; gap: 20px; padding: 26px 0 24px; border-top: 1px solid var(--fz-line); }
      .fz-num { font-family: var(--font-mono), monospace; font-size: 13px; font-weight: 700; color: var(--fz-green); padding-top: 4px; }
      .fz-row h3 { font-size: 17px; margin: 0 0 6px; color: var(--fz-ink); letter-spacing: -0.01em; }
      .fz-row p { font-size: 15px; line-height: 1.65; color: var(--fz-mut); margin: 0 0 8px; }
      .fz-row p:last-child { margin-bottom: 0; }
      .fz-row p b { color: var(--fz-ink); font-weight: 650; }

      .fz-link { color: var(--fz-ink); font-weight: 650; border-bottom: 2px solid var(--fz-amber); padding-bottom: 2px; transition: background 0.15s; }
      .fz-link:hover { background: #fdeadb; }

      .fz-end { background: var(--fz-deep); color: #fff; padding: 64px 0; }
      .fz-end-in { max-width: 1020px; margin: 0 auto; padding: 0 24px; }
      .fz-end h2 { font-size: 26px; margin: 0 0 12px; letter-spacing: -0.015em; }
      .fz-end p { color: #b9bdb4; font-size: 16.5px; margin: 0 0 24px; max-width: 56ch; }
      .fz-end .fz-btn + .fz-btn { margin-left: 12px; }

      @media (max-width: 640px) {
        .fz-nav-links { gap: 14px; }
        .fz-nav-links a:not(.fz-cta) { display: none; }
        .fz-brand span { display: none; }
        .fz-row { grid-template-columns: 40px 1fr; gap: 14px; }
      }
    `}</style>
  );
}
