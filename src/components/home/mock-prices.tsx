"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, DollarSign, History, Loader2, Send } from "lucide-react";
import { UiBadge, UiRoot } from "@/components/mock/ui";
import { Counter } from "@/components/site/counter";

/* "Today's pricing" from the real Prices screen (demo data). Cost + tax +
   freight + margin = sell price, then one click sends every customer. */
const LINES = [
  { fuel: "Unleaded 87", cost: "$2.0418", tax: "$0.6794", freight: "$0.0650", margin: "$0.0650", sell: 2.8512 },
  { fuel: "Unleaded 93", cost: "$2.5326", tax: "$0.6794", freight: "$0.0650", margin: "$0.0850", sell: 3.362 },
  { fuel: "Diesel", cost: "$2.3184", tax: "$0.8098", freight: "$0.0650", margin: "$0.0750", sell: 3.2682 },
];
// 0 empty, 1-3 rows priced, 4 sending, 5 sent, then hold
const DELAYS = [600, 900, 900, 1100, 900, 3600];

export function PricesMock({ active, reduced }: { active: boolean; reduced: boolean }) {
  const [step, setStep] = useState(0);
  const s = reduced ? 5 : step;

  useEffect(() => {
    if (!active || reduced) return;
    const t = window.setTimeout(() => setStep((v) => (v >= 5 ? 0 : v + 1)), DELAYS[step]);
    return () => window.clearTimeout(t);
  }, [active, reduced, step]);

  return (
    <UiRoot className="mk">
      <div className="mk-top">
        <span className="mk-crumb">Prices</span>
        <span className="mk-tabs">
          <span data-on>
            <DollarSign /> Enter Prices
          </span>
          <span>
            <History /> History
          </span>
        </span>
        <span className="mk-illus">Illustration · demo data</span>
      </div>
      <div className="mk-body">
        <div className="mk-headrow">
          <div>
            <p className="mk-kick">Price management</p>
            <p className="mk-h">Today&apos;s pricing</p>
          </div>
          <span className="mk-meta">9 customers · 38 price lines</span>
        </div>

        <div className="mk-card">
          <div className="mk-cardhead">
            <span className="mk-icon">
              <DollarSign />
            </span>
            <div>
              <b>Cape Shore Fuel</b>
              <small>Cape May Court House, NJ · 3 fuel lines</small>
            </div>
            <span className="mk-sent" data-on={s >= 5 || undefined}>
              <UiBadge tone="success">Sent</UiBadge>
            </span>
          </div>
          <div className="mk-ptable">
            <div className="mk-pr mk-pth">
              <span>Fuel type</span>
              <span>Cost</span>
              <span>Tax</span>
              <span>Freight</span>
              <span>Margin</span>
              <span>Sell price</span>
            </div>
            {LINES.map((l, i) => {
              const on = s >= i + 1;
              return (
                <div className="mk-pr" key={l.fuel} data-on={on || undefined}>
                  <span className="mk-fuel">{l.fuel}</span>
                  <span>{l.cost}</span>
                  <span>{l.tax}</span>
                  <span>{l.freight}</span>
                  <span>{l.margin}</span>
                  <span className="mk-sell">
                    $<Counter to={l.sell} decimals={4} duration={0.8} delay={0.35} play={on} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {[
          ["Route 9 Fuel Mart", "Toms River, NJ · 2 fuel lines"],
          ["Pine Barrens Petroleum", "Hammonton, NJ · 3 fuel lines"],
        ].map(([name, sub]) => (
          <div className="mk-more" key={name}>
            <span className="mk-icon">
              <DollarSign />
            </span>
            <div>
              <b>{name}</b>
              <small>{sub}</small>
            </div>
            <span className="mk-sent" data-on={s >= 5 || undefined}>
              <UiBadge tone="success">Sent</UiBadge>
            </span>
          </div>
        ))}

        <div className="mk-actions">
          <span className="ui-btn" data-busy={s === 4 || undefined}>
            {s === 4 ? <Loader2 className="hs-spin" /> : <Send />}
            {s === 4 ? "Sending…" : "Send to All Customers"}
          </span>
          <span className="mk-banner" data-on={s >= 5 || undefined}>
            <CheckCircle2 /> Sent to 9 customers
          </span>
        </div>
      </div>
    </UiRoot>
  );
}
