import Link from "next/link";
import { EMAIL, GithubIcon, LINKS, LinkedinIcon } from "@/app/site-chrome";
import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="fx-footer">
      <div className="fx-wrap">
        <div className="fx-footer-top">
          <div className="fx-footer-id">
            <Link href="/" className="fx-brand" aria-label="Uzair Saleem, home">
              <Brand size={44} />
            </Link>
          </div>
          <nav className="fx-footer-links" aria-label="Footer">
            <Link href="/work/satraj">Case study</Link>
            <Link href="/demo">Demo</Link>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
              LinkedIn<span className="fx-sr"> (opens in new tab)</span>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              GitHub<span className="fx-sr"> (opens in new tab)</span>
            </a>
            <Link href={LINKS.resume}>Résumé</Link>
            <a href={LINKS.email}>{EMAIL}</a>
          </nav>
        </div>
        <div className="fx-footer-base">
          <span>© {new Date().getFullYear()} Uzair Saleem · Software &amp; product engineer</span>
          <span>Sample data on this site is illustrative.</span>
        </div>
      </div>
      <p className="fx-footer-giant" aria-hidden="true">
        Ticket in. <span className="fx-em">Invoice out.</span>
      </p>
    </footer>
  );
}
