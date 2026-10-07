import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LINKS, LinkedinIcon } from "@/app/site-chrome";
import { SplitWords, delay } from "@/components/site/split";
import { Principles } from "./principles";
import { Systems } from "./systems";

const SPEC = [
  "5+ years shipping production software",
  "Automation: n8n, webhooks, scheduled jobs, AI triage",
  "Based in Islamabad · US Eastern hours",
];

export function About() {
  return (
    <>
      <section id="work" className="fx-sec" aria-labelledby="work-title">
        <h2 id="work-title" className="fx-sr">
          Selected work
        </h2>
        <Systems />
      </section>

      <section id="about" className="fx-sec fx-about" aria-labelledby="about-title">
        <div className="fx-about-glow" aria-hidden="true" />
        <div className="fx-wrap fx-about-grid">
          <header className="fx-about-head">
            <p className="fx-kicker fx-reveal">About Uzair</p>
            <h2 id="about-title" className="fx-h2 fx-h2-sm fx-split fx-reveal">
              <SplitWords parts={["Developer first.", { em: "Automation where it saves hours." }]} />
            </h2>
          </header>

          <div className="fx-about-side">
            <figure className="fx-portrait fx-reveal">
              <Image
                src="/images/uzair-portrait-blazer.jpg"
                alt="Uzair Saleem"
                width={820}
                height={1024}
                sizes="(max-width: 640px) 112px, (max-width: 899px) 92vw, 440px"
              />
              <figcaption className="fx-portrait-cap">
                <b>Uzair Saleem</b>
                <span>Full-stack developer &amp; automation specialist · Islamabad, PK</span>
                <span className="fx-portrait-chip">
                  <span className="fx-live-dot" aria-hidden="true" />
                  Works US Eastern hours
                </span>
              </figcaption>
            </figure>
            <ul className="fx-spec fx-reveal" style={delay(120)} role="list">
              {SPEC.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>

          <div className="fx-about-body">
            <div className="fx-reveal">
              <Principles>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-link fx-link-quiet fx-about-link"
                >
                  <LinkedinIcon /> LinkedIn <ArrowUpRight aria-hidden="true" />
                  <span className="fx-sr"> (opens in new tab)</span>
                </a>
              </Principles>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
