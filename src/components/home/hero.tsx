import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { TrackedLink } from "@/app/tracked-link";
import { CONTACT_HREF } from "@/app/service-contact";
import { LINKS } from "@/app/site-chrome";
import { SplitWords, delay } from "@/components/site/split";
import { HeroVisualPortfolio } from "./hero-visual-portfolio";

const ASSURE = [
  "5+ years shipping production software",
  "n8n, custom APIs & AI workflow steps",
  "Full-stack: Next.js, Node, PostgreSQL",
];

export function Hero() {
  return (
    <section className="fx-hero" aria-labelledby="hero-title">
      <div className="fx-hero-bg" aria-hidden="true">
        <div className="fx-hero-grid-lines" />
        <svg className="fx-hero-topo" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 9 }, (_, i) => (
            <path
              key={i}
              d={`M-50 ${430 - i * 34} C 220 ${330 - i * 40}, 420 ${520 - i * 30}, 660 ${400 - i * 36} S 1040 ${250 - i * 28}, 1260 ${330 - i * 34}`}
            />
          ))}
        </svg>
        <div className="fx-glow fx-glow-a" />
        <div className="fx-glow fx-glow-b" />
      </div>

      <div className="fx-wrap fx-hero-in">
        <p className="fx-pill fx-load" style={delay(60)}>
          <span className="fx-live-dot" aria-hidden="true" />
          <span className="fx-pill-long">Full-stack developer &amp; automation specialist</span>
          <span className="fx-pill-short">Developer · automation</span>
        </p>

        <h1 id="hero-title" className="fx-h1 fx-split-load">
          <SplitWords parts={["I build software and", { em: "automate the work around it." }]} />
        </h1>

        <div className="fx-hero-cols">
          <div className="fx-hero-copy">
            <p className="fx-lead fx-load" style={delay(520)}>
              Uzair Saleem — 5+ years end-to-end: marketplaces, revenue analytics, and operations platforms. I design
              n8n workflows, custom backends, and AI steps so support, reporting, and delivery stop living in
              spreadsheets and inboxes.
            </p>

            <div className="fx-cta-row fx-load" style={delay(640)}>
              <TrackedLink
                event="cta_contact_hero"
                href={CONTACT_HREF}
                className="fx-btn fx-btn-lg fx-magnetic"
              >
                Get in touch
                <ArrowRight className="fx-arrow" aria-hidden="true" />
              </TrackedLink>
              <Link href={LINKS.resume} className="fx-btn fx-btn-ghost fx-btn-lg">
                View résumé
              </Link>
            </div>

            <Link href="#work" className="fx-hero-proof fx-load" style={delay(760)}>
              <span className="fx-live-dot fx-live-dot-green" aria-hidden="true" />
              <span>See selected work — Satraj, Indiecator, Diffed, AI reels</span>
              <ArrowRight aria-hidden="true" />
            </Link>

            <ul className="fx-assure fx-load" style={delay(860)}>
              {ASSURE.map((a) => (
                <li key={a}>
                  <Check aria-hidden="true" strokeWidth={2.6} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="fx-hero-visual fx-load" style={delay(380)}>
            <HeroVisualPortfolio />
          </div>
        </div>
      </div>
    </section>
  );
}
