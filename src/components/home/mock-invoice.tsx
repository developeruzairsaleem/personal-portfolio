"use client";

import { useEffect, useState } from "react";
import { Check, Loader2, RefreshCw, X } from "lucide-react";
import { StagePill, UiBadge, UiLabel, UiRoot } from "@/components/mock/ui";

/* The real delivery drawer after posting (demo data): the invoice, its
   QuickBooks sync, and the Platform vs QuickBooks check, line by line. */
const CMP: { group?: string; item: string; qty: string; amt: string }[] = [
  { group: "Fuel", item: "FUEL:Unleaded 87", qty: "6,000 × 2.17864", amt: "$13,071.84" },
  { item: "FUEL:Unleaded 93", qty: "2,500 × 2.69614", amt: "$6,740.35" },
  { group: "Taxes", item: "Federal Excise Tax - Gasoline", qty: "8,500 × 0.183", amt: "$1,555.50" },
  { item: "PA Oil Franchise Tax", qty: "8,500 × 0.576", amt: "$4,896.00" },
  { item: "PA USTIF", qty: "8,500 × 0.011", amt: "$93.50" },
];
// 0 invoice, 1 posted, 2 pulling, 3-7 rows checked, 8 matches, then hold
const LAST = 8;
const DELAYS = [700, 900, 1000, 300, 300, 300, 300, 600, 4000];

export function InvoiceMock({ active, reduced }: { active: boolean; reduced: boolean }) {
  const [step, setStep] = useState(0);
  const s = reduced ? LAST : step;

  useEffect(() => {
    if (!active || reduced) return;
    const t = window.setTimeout(() => setStep((v) => (v >= LAST ? 0 : v + 1)), DELAYS[step]);
    return () => window.clearTimeout(t);
  }, [active, reduced, step]);

  return (
    <UiRoot className="mk">
      <div className="mk-top">
        <span className="mk-crumb">Deliveries · Delaware Valley Fuel</span>
        <span className="mk-illus">Illustration · demo data</span>
      </div>
      <div className="mk-body">
        <div className="mk-drawer-top">
          <StagePill stage={s >= 1 ? "qb" : "invoiced"} key={s >= 1 ? "qb" : "inv"} />
          <span className="hs-x">
            <X />
          </span>
        </div>
        <p className="hs-dname">Delaware Valley Fuel</p>
        <p className="hs-dmeta">
          Bensalem · BOL 7713402 · Shipped <code>Oct 1, 2026, 6:10 AM EDT</code>
        </p>

        <div className="mk-sec">
          <UiLabel>Invoice</UiLabel>
          <div className="hs-invoice">
            <b>#SR-20261001-0005</b>
            <span>8,500 gal · $26,398.50 · sent</span>
            <span>Invoice date (= ship date): Oct 1, 2026, 6:10 AM EDT</span>
          </div>
        </div>

        <div className="mk-sec" data-wait={s < 1 || undefined}>
          <UiLabel>QuickBooks sync</UiLabel>
          <div className="hs-posted">
            Posted Oct 1, 2026, 9:44 AM EDT · QuickBooks invoice <b>#10485</b> · QB ID <code>1A2F8-1790862240</code>
          </div>
        </div>

        <div className="mk-pvq" data-wait={s < 2 || undefined}>
          <div className="mk-pvq-head">
            <b>Platform vs QuickBooks</b>
            <span className="mk-match" data-on={s >= LAST || undefined}>
              <UiBadge tone="success">Matches</UiBadge>
            </span>
            <span className="mk-pvq-meta">QuickBooks #10485 · pulled Oct 1, 12:58 PM</span>
            <span className="ui-btn ui-btn-sm ui-btn-outline">
              {s === 2 ? <Loader2 className="hs-spin" /> : <RefreshCw />} Pull again from QuickBooks
            </span>
          </div>
          <div className="mk-ctable">
            <div className="mk-cr mk-cth">
              <span>Item</span>
              <span>Platform, as sent</span>
              <span>QuickBooks now</span>
              <span>Change</span>
            </div>
            {CMP.map((r, i) => (
              <div key={r.item} className="mk-cgroup">
                {r.group && <div className="mk-cgroup-label">{r.group}</div>}
                <div className="mk-cr" data-on={s >= 3 + i || undefined}>
                  <span className="mk-citem">{r.item}</span>
                  <span>
                    <small>{r.qty}</small>
                    {r.amt}
                  </span>
                  <span>
                    <small>{r.qty}</small>
                    {r.amt}
                  </span>
                  <span className="mk-cchange">
                    {s >= 3 + i ? <Check strokeWidth={3} /> : "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UiRoot>
  );
}
