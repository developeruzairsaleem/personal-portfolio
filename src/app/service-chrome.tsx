import Link from "next/link";
import { EMAIL, LINKS } from "./site-chrome";

/**
 * Chrome for the fuel-ops service pages (root, /work/satraj, /demo).
 * Warm paper, dark ink, one pump-orange accent, large type. Built for owners
 * reading on a phone or an old office PC: nothing smaller than 15px, strong
 * contrast, obvious buttons, no decoration that competes with the words.
 */
export function ServiceNav() {
  return (
    <header className="fz-nav">
      <div className="fz-nav-in">
        <Link href="/" className="fz-brand">Uzair Saleem</Link>
        <nav className="fz-nav-links" aria-label="Site">
          <Link href="/work/satraj">case study</Link>
          <Link href="/demo">walkthrough</Link>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="fz-nav-ext">LinkedIn<span className="fz-sr"> (opens in new tab)</span></a>
        </nav>
        <a className="fz-cta" href={`mailto:${EMAIL}?subject=My fleet and accounting software&body=Fleet size: %0D%0AAccounting software: %0D%0A`}>Email me</a>
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
        --fz-paper: #f8f5ef;
        --fz-sand: #f0eadf;
        --fz-card: #ffffff;
        --fz-ink: #1a1f1d;
        --fz-body: #3d4743;
        --fz-mut: #5f6a65;
        --fz-line: #e2dbcf;
        --fz-rule: #1a1f1d;
        --fz-amber: #e8720c;
        --fz-amber-d: #dc6e0b;
        --fz-amber-ink: #ad470c;
        --fz-deep: #12211d;
        --fz-deeper: #0d1a17;
        --fz-green: #5f6a65;
        --fz-bg: var(--fz-paper);
        --fz-max: 1120px;
      }
      body { background: var(--fz-paper); color: var(--fz-ink); font-size: 18px; line-height: 1.65; }
      a:focus-visible, button:focus-visible, [tabindex]:focus-visible { outline: 3px solid var(--fz-amber-ink); outline-offset: 3px; border-radius: 6px; }
      .fz-end :focus-visible, .fz-foot :focus-visible { outline-color: var(--fz-amber); }
      .fz-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

      .fz-nav { background: var(--fz-card); border-bottom: 1px solid var(--fz-line); }
      .fz-nav-in { max-width: var(--fz-max); margin: 0 auto; padding: 10px 24px; display: flex; align-items: center; gap: 28px; }
      .fz-brand { font-weight: 750; font-size: 19px; color: var(--fz-ink); letter-spacing: -0.01em; white-space: nowrap; padding: 8px 0; }
      .fz-nav-links { display: flex; align-items: center; gap: 28px; margin-left: auto; }
      .fz-nav-links a { display: inline-block; padding: 10px 0; font-size: 16px; color: var(--fz-body); font-weight: 600; transition: color 0.15s; white-space: nowrap; }
      .fz-nav-links a:hover { color: var(--fz-ink); }
      .fz-cta { display: inline-block; background: transparent; color: var(--fz-ink); font-weight: 700; font-size: 16px; padding: 9px 16px; border-radius: 8px; border: 2px solid var(--fz-ink); white-space: nowrap; transition: background 0.15s; }
      .fz-cta:hover { background: var(--fz-sand); color: var(--fz-ink); }

      .fz-foot { background: var(--fz-deeper); color: #b6c0ba; }
      .fz-foot-in { max-width: var(--fz-max); margin: 0 auto; padding: 28px 24px; display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; font-size: 15px; border-top: 1px solid rgba(255,255,255,0.08); }

      .fz-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--fz-amber); color: var(--fz-ink); font-weight: 700; font-size: 17px; line-height: 1.2; padding: 15px 26px; border-radius: 8px; border: 2px solid var(--fz-amber); cursor: pointer; transition: background 0.15s, border-color 0.15s, transform 0.05s; }
      .fz-btn:hover { background: var(--fz-amber-d); border-color: var(--fz-amber-d); }
      .fz-btn:active { transform: translateY(1px); }
      .fz-btn.ghost { background: var(--fz-card); color: var(--fz-ink); border-color: var(--fz-ink); }
      .fz-btn.ghost:hover { background: var(--fz-sand); }

      .fz-sec { padding: 88px 0; }
      .fz-sec.sand { background: var(--fz-sand); }
      .fz-sec.white { background: var(--fz-card); }
      .fz-sec-in { max-width: var(--fz-max); margin: 0 auto; padding: 0 24px; }
      .fz-kick { font-size: 15px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fz-amber-ink); margin: 0 0 14px; }
      .fz-sec h2 { font-size: clamp(28px, 3.4vw, 36px); line-height: 1.15; letter-spacing: -0.02em; font-weight: 750; color: var(--fz-ink); margin: 0 0 32px; }

      .fz-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 40px; }
      .fz-col::before { content: ""; display: block; width: 44px; height: 4px; border-radius: 2px; background: var(--fz-amber); margin-bottom: 18px; }
      .fz-tag { display: none; }
      .fz-col h3 { font-size: 22px; font-weight: 700; line-height: 1.25; margin: 0 0 10px; color: var(--fz-ink); letter-spacing: -0.01em; }
      .fz-col p { font-size: 17.5px; line-height: 1.65; color: var(--fz-body); margin: 0; }

      .fz-rows { max-width: 720px; list-style: none; margin: 0; padding: 0; }
      .fz-sec .fz-kick-h { font-size: 15px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fz-amber-ink); line-height: 1.4; margin: 0 0 14px; }
      .fz-row { display: grid; grid-template-columns: 72px 1fr; gap: 24px; padding: 30px 0; border-top: 1px solid var(--fz-line); }
      .fz-rows .fz-row:first-of-type { border-top: 0; padding-top: 0; }
      .fz-num { font-size: 40px; font-weight: 800; line-height: 1; letter-spacing: -0.03em; color: var(--fz-amber-ink); }
      .fz-row h3 { font-size: 22px; font-weight: 700; line-height: 1.25; margin: 4px 0 8px; color: var(--fz-ink); letter-spacing: -0.01em; }
      .fz-row p { font-size: 17.5px; line-height: 1.65; color: var(--fz-body); margin: 0 0 8px; }
      .fz-row p:last-child { margin-bottom: 0; }
      .fz-row p b { color: var(--fz-ink); font-weight: 650; }

      .fz-link { display: inline-block; padding: 8px 0; color: var(--fz-ink); font-weight: 700; text-decoration: underline; text-decoration-color: var(--fz-amber); text-decoration-thickness: 3px; text-underline-offset: 5px; transition: text-decoration-color 0.15s; }
      .fz-link:hover { text-decoration-color: var(--fz-ink); }

      .fz-end { background: var(--fz-deep); color: #fff; padding: 88px 0; }
      .fz-end-in { max-width: var(--fz-max); margin: 0 auto; padding: 0 24px; }
      .fz-end h2 { font-size: clamp(28px, 3.4vw, 36px); font-weight: 750; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 14px; }
      .fz-end p { color: #d6ddd9; font-size: 19px; line-height: 1.6; margin: 0 0 28px; max-width: 58ch; }
      .fz-end .fz-btn + .fz-btn { margin-left: 12px; }
      .fz-end .fz-btn.ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,0.55); }
      .fz-end .fz-btn.ghost:hover { background: rgba(255,255,255,0.08); }

      @media (max-width: 640px) {
        body { font-size: 17px; }
        .fz-nav-in { padding: 8px 20px 10px; flex-wrap: wrap; gap: 0 16px; }
        .fz-brand { order: 1; }
        .fz-cta { order: 2; margin-left: auto; }
        .fz-nav-links { order: 3; width: 100%; margin-left: 0; gap: 22px; }
        .fz-nav-links a { padding: 6px 0 10px; }
        .fz-nav-ext { display: none; }
        .fz-sec { padding: 56px 0; }
        .fz-sec h2 { font-size: 26px; }
        .fz-sec-in, .fz-end-in { padding: 0 20px; }
        .fz-end { padding: 64px 0; }
        .fz-row { grid-template-columns: 48px 1fr; gap: 16px; padding: 24px 0; }
        .fz-num { font-size: 30px; }
        .fz-btn { width: 100%; }
        .fz-end .fz-btn + .fz-btn { margin: 12px 0 0; }
      }
    `}</style>
  );
}
