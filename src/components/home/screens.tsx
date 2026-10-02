"use client";

import { useId, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMediaQuery, useReducedMotionPref } from "@/components/site/hooks";
import { PricesMock } from "./mock-prices";

const SR =
  "Illustration of the real Prices screen with demo data: cost, tax, freight and margin add up to each sell price, then Send to All Customers sends them to 9 customers.";

/**
 * The one screen the hero doesn't show: tomorrow's prices. Nested in How it
 * works. On phones it sits behind a disclosure, so the page stays short.
 */
export function Screens() {
  const uid = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReducedMotionPref();
  const phone = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = useState(false);
  const shown = !phone || open;
  const vizId = `screen-${uid}`;

  return (
    <div id="build" className="fx-wrap fx-screens" role="region" aria-labelledby="build-title">
      <h3 id="build-title" className="fx-screens-h fx-reveal">
        Tomorrow&apos;s prices, sent to every customer in one click.
      </h3>

      {phone && (
        <button
          type="button"
          className="fx-more fx-screens-toggle"
          aria-expanded={open}
          aria-controls={vizId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Hide the pricing screen" : "See the pricing screen"}
          <ChevronDown aria-hidden="true" />
        </button>
      )}

      <div ref={ref} id={vizId} className="fx-viz fx-reveal" role="img" aria-label={SR} hidden={!shown}>
        <div aria-hidden="true" className="fx-viz-in">
          <PricesMock active={shown && inView} reduced={reduced} />
        </div>
      </div>
    </div>
  );
}
