import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { OWNER_QUOTE } from "@/app/owner-quote";
import { Counter } from "@/components/site/counter";
import { SplitWords, delay } from "@/components/site/split";
import { DemoReveal } from "./demo-reveal";

/** Before/after at Sat-Raj. Every number is from the résumé or the case study. */
const BOARD: { label: string; before: string; now: ReactNode }[] = [
  { label: "Daily price run", before: "45–60 min", now: "Under 90 sec" },
  { label: "People who can run pricing", before: "1 person", now: "Whole office" },
  {
    label: "Times a ticket is typed",
    before: "2",
    now: <Counter from={2} to={0} duration={1.6} delay={0.5} />,
  },
];

export function CaseTeaser() {
  return (
    <section id="case" className="fx-sec fx-case" aria-labelledby="case-title">
      <div className="fx-case-glow" aria-hidden="true" />
      <div className="fx-wrap fx-case-grid">
        <header className="fx-case-head">
          <p className="fx-kicker fx-reveal">Case study · live in production</p>
          <h2 id="case-title" className="fx-h2 fx-h2-sm fx-split fx-reveal">
            <SplitWords parts={[{ em: "Sat-Raj, Inc." }, "stopped retyping tickets."]} />
          </h2>
        </header>

        <ul className="fx-board">
          {BOARD.map((b, i) => (
            <li key={b.label} className="fx-board-item fx-reveal" style={delay(i * 110)}>
              <p className="fx-board-label">{b.label}</p>
              <p className="fx-board-was">
                <span className="fx-sr">Before: </span>
                <span aria-hidden="true">Was </span>
                {b.before}
              </p>
              <p className="fx-board-now">
                <span className="fx-sr">Now: </span>
                <span className="fx-board-big">{b.now}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="fx-case-story">
          <p className="fx-case-text fx-reveal" style={delay(100)}>
            A New Jersey and Pennsylvania gasoline and diesel supplier since 1992, on QuickBooks Desktop. Uzair rebuilt
            its back office as one system, matched the old spreadsheet&apos;s prices to the cent, and still runs it
            every week.
          </p>
          <div className="fx-case-links fx-reveal" style={delay(160)}>
            <Link href="/work/satraj" className="fx-link">
              Full case study <ArrowRight aria-hidden="true" />
            </Link>
            <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="fx-link fx-link-quiet">
              satraj.inc <ArrowUpRight aria-hidden="true" />
              <span className="fx-sr"> (opens in new tab)</span>
            </a>
          </div>
        </div>

        <div className="fx-case-demo fx-reveal" style={delay(120)}>
          <DemoReveal />
        </div>

        {OWNER_QUOTE && (
          <figure className="fx-quote fx-reveal">
            <blockquote>
              <p>&ldquo;{OWNER_QUOTE.text}&rdquo;</p>
            </blockquote>
            <figcaption>
              <b>{OWNER_QUOTE.name}</b>, {OWNER_QUOTE.role}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
