import { ArrowDown, ArrowRight, Check, Play } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF } from "@/app/service-contact";
import { SplitWords, delay } from "@/components/site/split";
import { HeroVisual } from "./hero-visual";

const ASSURE = ["QuickBooks Desktop & Online", "You approve every invoice", "Fixed price, in writing"];

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
          <span className="fx-pill-long">Back-office software for gasoline &amp; diesel distributors</span>
          <span className="fx-pill-short">For gasoline &amp; diesel distributors</span>
        </p>

        <h1 id="hero-title" className="fx-h1 fx-split-load">
          <SplitWords parts={["Stop retyping delivery tickets", { em: "into QuickBooks." }]} />
        </h1>

        <div className="fx-hero-cols">
          <div className="fx-hero-copy">
            <p className="fx-lead fx-load" style={delay(520)}>
              Uzair Saleem builds and runs the system that does the typing for you: DTN tickets and truck GPS in, priced
              QuickBooks invoices with every tax line out.
            </p>

            <div className="fx-cta-row fx-load" style={delay(640)}>
              <TrackedLink
                event="cta_book_hero"
                href={BOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-btn fx-btn-lg fx-magnetic"
              >
                Book a 20-min walkthrough
                <ArrowRight className="fx-arrow" aria-hidden="true" />
                <span className="fx-sr"> (opens in new tab)</span>
              </TrackedLink>
              <TrackedLink event="cta_watch_demo_hero" href="#film" className="fx-btn fx-btn-ghost fx-btn-lg">
                <span className="fx-btn-play" aria-hidden="true">
                  <Play fill="currentColor" strokeWidth={0} />
                </span>
                Watch the film
              </TrackedLink>
            </div>

            <TrackedLink event="proof_link_hero" href="#case" className="fx-hero-proof fx-load" style={delay(760)}>
              <span className="fx-live-dot fx-live-dot-green" aria-hidden="true" />
              <span>
                <span className="fx-proof-long">Running every day at a</span>
                <span className="fx-proof-short">Live at a</span> NJ &amp; PA fuel distributor
              </span>
              <ArrowDown aria-hidden="true" />
            </TrackedLink>

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
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
