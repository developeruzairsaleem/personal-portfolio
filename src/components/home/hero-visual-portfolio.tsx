import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { name: "Satraj", href: "https://satraj.inc", img: "/images/satraj.png", tag: "Ops automation" },
  { name: "Indiecator", href: "https://indiecator.com", img: "/images/indiecator.png", tag: "SaaS analytics" },
  { name: "Diffed", href: "https://diffed-swart.vercel.app/", img: "/images/diffed.png", tag: "Marketplace" },
];

/** Static project stack for the portfolio hero — no fuel-demo animation. */
export function HeroVisualPortfolio() {
  return (
    <div className="fx-hero-stack" aria-label="Selected projects">
      {PROJECTS.map((p, i) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fx-hero-stack-card"
          style={{ "--i": i } as CSSProperties}
        >
          <span className="fx-hero-stack-shot">
            <Image src={p.img} alt="" width={640} height={400} sizes="(max-width: 899px) 88vw, 380px" />
          </span>
          <span className="fx-hero-stack-meta">
            <span className="fx-hero-stack-tag">{p.tag}</span>
            <span className="fx-hero-stack-name">
              {p.name}
              <ArrowUpRight aria-hidden="true" />
            </span>
          </span>
          <span className="fx-sr"> (opens in new tab)</span>
        </a>
      ))}
    </div>
  );
}
