import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/app/tracked-link";
import { HIRE_HREF } from "@/app/service-contact";
import { EMAIL, LINKS } from "@/app/site-chrome";

export const PDF = "/uzair-saleem-resume.pdf";

/** A link that opens in a new tab and says so to screen readers. */
export function External({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr"> (opens in new tab)</span>
    </a>
  );
}

export function SiteNav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="brand">
          <Image src="/images/uzair-avatar-hd.jpg" alt="" width={30} height={30} />
          Uzair Saleem
        </Link>
        <nav className="nav-links" aria-label="Main">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/blog">Writing</Link>
          <Link href="/resume" className="keep">
            Résumé
          </Link>
        </nav>
        <TrackedLink event="cta_hire_nav" href={HIRE_HREF} className="btn btn-sm">
          Email me
        </TrackedLink>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>© {new Date().getFullYear()} Uzair Saleem</span>
        <nav aria-label="Footer">
          <External href={LINKS.github}>GitHub</External>
          <External href={LINKS.linkedin}>LinkedIn</External>
          <Link href={LINKS.resume}>Résumé</Link>
          <a href={PDF}>PDF</a>
          <a href={LINKS.email}>{EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}

/** Nav, page content and footer, all inside the dark .site theme. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
