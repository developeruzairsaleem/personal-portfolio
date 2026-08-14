import Link from "next/link";
import { EMAIL, LINKS } from "./site-chrome";

/**
 * Chrome for the fuel-ops service pages (root + /demo): dark petrol-green
 * bar and footer, amber CTA. Distinct identity from the client app.
 */
export function ServiceNav() {
  return (
    <header className="fz-nav">
      <div className="fz-nav-in">
        <Link href="/" className="fz-brand">
          Uzair Saleem <span>· fuel ops</span>
        </Link>
        <nav className="fz-nav-links">
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
        <span>© {new Date().getFullYear()} Uzair Saleem</span>
        <span>back offices for family-run fuel businesses that run on QuickBooks</span>
      </div>
    </footer>
  );
}

export function ServiceStyles() {
  return (
    <style>{`
      :root {
        --fz-deep: #14312a;
        --fz-deeper: #0d231e;
        --fz-amber: #e79a1b;
        --fz-amber-d: #c98410;
        --fz-bg: #f5f4ef;
        --fz-card: #ffffff;
        --fz-ink: #1b2420;
        --fz-mut: #5b6862;
        --fz-line: #e0ded5;
        --fz-green: #2f7d57;
      }
      body { background: var(--fz-bg); }
      .fz-nav { background: var(--fz-deeper); }
      .fz-nav-in { max-width: 1020px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; }
      .fz-brand { font-weight: 700; font-size: 16px; color: #fff; letter-spacing: -0.01em; }
      .fz-brand span { color: #9db8ae; font-weight: 500; }
      .fz-nav-links { display: flex; align-items: center; gap: 22px; }
      .fz-nav-links a { font-size: 14px; color: #c8d6cf; font-weight: 500; transition: color 0.15s; }
      .fz-nav-links a:hover { color: #fff; }
      .fz-nav-links .fz-cta { background: var(--fz-amber); color: var(--fz-deeper); font-weight: 700; padding: 8px 18px; border-radius: 7px; }
      .fz-nav-links .fz-cta:hover { background: #f2ab33; color: var(--fz-deeper); }
      .fz-foot { background: var(--fz-deeper); margin-top: 0; }
      .fz-foot-in { max-width: 1020px; margin: 0 auto; padding: 26px 24px; display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; color: #9db8ae; font-size: 13.5px; }
      @media (max-width: 560px) { .fz-nav-links { gap: 14px; } .fz-nav-links a:not(.fz-cta) { display: none; } }
    `}</style>
  );
}
