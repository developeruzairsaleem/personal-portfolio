"use client";

import type { CSSProperties } from "react";
import { m } from "framer-motion";
import { Flag, Keyboard, Droplets, Percent, Mail, Coins, UserRound } from "lucide-react";
import { SplitWords } from "@/components/site/split";
import { useMediaQuery, useReducedMotionPref } from "@/components/site/hooks";

const PAINS = [
  { flag: "Every afternoon", icon: Keyboard, text: "BOLs typed into QuickBooks by hand.", tilt: -2.2 },
  { flag: "Gallons don't agree", icon: Droplets, text: "Gross, net and billed gallons don't match.", tilt: 1.4 },
  { flag: "Corrected invoice", icon: Percent, text: "One wrong tax rate and the invoice goes out again.", tilt: -0.9 },
  { flag: "Copy, paste, send", icon: Mail, text: "Tomorrow's prices go out one email at a time.", tilt: 1.8 },
  { flag: "Money left on the truck", icon: Coins, text: "Additive, freight and delivery fees slip off the bill.", tilt: -1.6 },
  { flag: "No week off", icon: UserRound, text: "One person holds it all together.", tilt: 1.1 },
];

export function Problem() {
  const reduced = useReducedMotionPref();
  // Phones: a gentler tilt, so the stacked tickets don't look messy.
  const phone = useMediaQuery("(max-width: 640px)");

  return (
    <section id="problem" className="fx-sec fx-problem" aria-labelledby="problem-title">
      <div className="fx-problem-light" aria-hidden="true" />
      <div className="fx-wrap">
        <header className="fx-sec-head">
          <h2 id="problem-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["What your office still does by hand."]} />
          </h2>
        </header>

        <ul className="fx-tickets">
          {PAINS.map((p, i) => {
            const Icon = p.icon;
            const tilt = phone ? Math.max(-1, Math.min(1, p.tilt)) : p.tilt;
            return (
              <m.li
                key={p.flag}
                className="fx-ticket"
                initial={reduced ? false : { opacity: 0, y: -70, rotate: tilt * 4, scale: 1.08 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: tilt,
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
                style={{ "--tilt": `${tilt}deg` } as CSSProperties}
              >
                <div className="fx-ticket-in">
                  <span className="fx-flag">
                    <Icon className="fx-flag-icon" aria-hidden="true" strokeWidth={2.2} />
                    <Flag className="fx-flag-mark" aria-hidden="true" strokeWidth={2.4} />
                    {p.flag}
                  </span>
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
      </div>
    </section>
  );
}
