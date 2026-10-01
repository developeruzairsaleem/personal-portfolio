import Link from "next/link";
import { EMAIL, LINKS, LinkedinIcon } from "@/app/site-chrome";

export function Footer() {
  return (
    <footer className="fx-footer">
      <div className="fx-wrap">
        <div className="fx-footer-top">
          <div className="fx-footer-id">
            <Link href="/" className="fx-brand">
              <span className="fx-monogram" aria-hidden="true">
                US
              </span>
              <span className="fx-brand-name">Uzair Saleem</span>
            </Link>
            <p>I build and run back offices for gasoline and diesel distributors on QuickBooks.</p>
          </div>
          <nav className="fx-footer-links" aria-label="Footer">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
              LinkedIn<span className="fx-sr"> (opens in new tab)</span>
            </a>
            <a href={LINKS.email}>{EMAIL}</a>
            <Link href="/work/satraj">Case study</Link>
            <Link href="/demo">Walkthrough</Link>
            <Link href={LINKS.resume}>Résumé</Link>
          </nav>
        </div>
        <div className="fx-footer-base">
          <span>© {new Date().getFullYear()} Uzair Saleem · Software engineer</span>
          <span>Sample data on this site is illustrative.</span>
        </div>
      </div>
      <p className="fx-footer-giant" aria-hidden="true">
        Ticket in. <span className="fx-em">Invoice out.</span>
      </p>
    </footer>
  );
}
