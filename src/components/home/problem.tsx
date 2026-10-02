"use client";

import type { CSSProperties } from "react";
import { m } from "framer-motion";
import { Flag, Keyboard, Droplets, Percent, Mail, Coins, UserRound, ArrowDown } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";
import { useReducedMotionPref } from "@/components/site/hooks";

const PAINS = [
  {
    flag: "Typed by hand",
    icon: Keyboard,
    text: "Someone types BOLs into QuickBooks every afternoon, from DTN, the ELD, or paper.",
    tilt: -2.2,
  },
  {
    flag: "Gallons don't agree",
    icon: Droplets,
    text: "Gross, net and billed gallons don't always agree, and it's not obvious which one hit the invoice.",
    tilt: 1.4,
  },
  {
    flag: "Tax lines by hand",
    icon: Percent,
    text: "Fuel tax lines get added by hand, and one wrong rate means a corrected invoice.",
    tilt: -0.9,
  },
  {
    flag: "One email at a time",
    icon: Mail,
    text: "Tomorrow's prices go out from a spreadsheet, one customer email at a time.",
    tilt: 1.8,
  },
  {
    flag: "Charges missed",
    icon: Coins,
    text: "Small charges like additive, freight and delivery fees sometimes never make it onto the bill.",
    tilt: -1.6,
  },
  {
    flag: "One person knows",
    icon: UserRound,
    text: "One person really knows how it all fits together, and they can't take a week off.",
    tilt: 1.1,
  },
];

export function Problem() {
  const reduced = useReducedMotionPref();

  return (
    <section id="problem" className="fx-sec fx-problem" aria-labelledby="problem-title">
      <div className="fx-problem-light" aria-hidden="true" />
      <div className="fx-wrap">
        <header className="fx-sec-head">
          <p className="fx-kicker fx-reveal">
            <b>02</b> The problem
          </p>
          <h2 id="problem-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["Sound", { em: "familiar?" }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(120)}>
            If a few of these describe your office, the walkthrough is worth 20 minutes.
          </p>
        </header>

        <ul className="fx-tickets">
          {PAINS.map((p, i) => {
            const Icon = p.icon;
            return (
              <m.li
                key={p.flag}
                className="fx-ticket"
                initial={reduced ? false : { opacity: 0, y: -70, rotate: p.tilt * 4, scale: 1.08 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: p.tilt,
                  scale: 1,
                  transition: reduced
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 420,
                        damping: 26,
                        mass: 0.9,
                        delay: (i % 3) * 0.11 + Math.floor(i / 3) * 0.16,
                      },
                }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                style={{ "--tilt": `${p.tilt}deg` } as CSSProperties}
              >
                <div className="fx-ticket-in">
                <div className="fx-ticket-top">
                  <span className="fx-flag">
                    <Flag aria-hidden="true" strokeWidth={2.4} />
                    {p.flag}
                  </span>
                  <span className="fx-ticket-no" aria-hidden="true">
                    No. {String(i + 1).padStart(4, "0")}
                  </span>
                </div>
                <p className="fx-ticket-text">{p.text}</p>
                <div className="fx-ticket-foot" aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                  <span className="fx-ticket-barcode" />
                </div>
                </div>
              </m.li>
            );
          })}
        </ul>

        <p className="fx-problem-close fx-reveal">
          If that sounds like your office, <span className="fx-em">here&apos;s what replaces it.</span>
          <ArrowDown aria-hidden="true" className="fx-problem-arrow" />
        </p>
      </div>
    </section>
  );
}
