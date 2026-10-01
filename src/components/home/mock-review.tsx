"use client";

import { useEffect, useState } from "react";
import { CircleCheck, Info, MapPin, Search, X, ChevronDown } from "lucide-react";
import { StagePill, UiBadge, UiLabel, UiRoot, type Stage } from "@/components/mock/ui";

/* The real Deliveries review queue and its "Unresolved customer" drawer
   (demo data): anything that doesn't match waits for a person. */
const ROWS: { name: string; sub: string; bol: string; gal: string; stage: Stage; pin?: boolean }[] = [
  { name: "Cedar Bridge Ave – New Site", sub: "Samsara geofence · needs mapping", bol: "4471857", gal: "5,000 gal", stage: "attention", pin: true },
  { name: "Pine Barrens Petroleum", sub: "Hammonton · Hammonton", bol: "4471833", gal: "8,500 gal", stage: "ready" },
  { name: "Route 9 Fuel Mart", sub: "Toms River · Toms River", bol: "4471802", gal: "8,500 gal", stage: "ready" },
  { name: "Turnpike Truck Plaza", sub: "Bordentown · Bordentown", bol: "4471820", gal: "7,800 gal", stage: "invoiced" },
  { name: "Delaware Valley Fuel", sub: "Bensalem · Bensalem", bol: "7713402", gal: "8,500 gal", stage: "qb" },
];
// 0-1 rows in, 2 hover the flagged row, 3 drawer, 4 geofence card, 5 map box, then hold
const DELAYS = [500, 900, 900, 800, 700, 4200];

export function ReviewMock({ active, reduced }: { active: boolean; reduced: boolean }) {
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
        <span className="mk-crumb">Deliveries</span>
        <span className="mk-illus">Illustration · demo data</span>
      </div>
      <div className="mk-body mk-review">
        <div className="mk-filters">
          <span className="ui-chip" data-on>
            <i data-c="red" />
            All
          </span>
          <span className="ui-chip">
            <i data-c="amber" />
            Needs attention <b>1</b>
          </span>
          <span className="ui-chip">
            <i data-c="green" />
            Ready to invoice <b>2</b>
          </span>
          <span className="ui-chip">
            <i data-c="navy" />
            Invoiced <b>1</b>
          </span>
          <span className="ui-chip">
            <i data-c="qb" />
            In QuickBooks <b>16</b>
          </span>
        </div>
        <div className="mk-search">
          <Search /> Search BOL #, customer, location, driver…
        </div>
        <div className="mk-dtable">
          <div className="mk-dr mk-dth">
            <span>Customer / location</span>
            <span>BOL</span>
            <span>Gallons</span>
            <span>Stage</span>
          </div>
          {ROWS.map((r, i) => (
            <div
              className="mk-dr"
              key={r.bol}
              data-on={s >= 1 || i < 2 || undefined}
              data-hover={(r.pin && s >= 2) || undefined}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="hs-cust" data-pin={r.pin || undefined}>
                <b>
                  {r.pin && <MapPin />}
                  {r.name}
                </b>
                <small>{r.sub}</small>
              </span>
              <code>{r.bol}</code>
              <span className="hs-gal">{r.gal}</span>
              <span>
                <StagePill stage={r.stage} />
              </span>
            </div>
          ))}
        </div>

        <div className="mk-drawer" data-open={s >= 3 || undefined}>
          <div className="mk-drawer-top">
            <UiBadge tone="warning">Needs attention</UiBadge>
            <span className="hs-x">
              <X />
            </span>
          </div>
          <p className="mk-unresolved">Unresolved customer</p>
          <p className="mk-dsub">Cedar Bridge new site</p>
          <p className="mk-dsub">
            BOL 4471857 · Shipped <code>Oct 1, 2026, 9:40 AM EDT</code>
          </p>
          <div className="mk-why">
            <UiLabel>Why this is blocked</UiLabel>
            <UiBadge tone="warning">Geofence not mapped</UiBadge>
          </div>
          <div className="mk-geo" data-on={s >= 4 || undefined}>
            <CircleCheck />
            <div>
              <b>Samsara geofence matched</b>
              <span>
                <strong>Cedar Bridge Ave – New Site</strong> · 1420 Cedar Bridge Ave, Lakewood, NJ
              </span>
              <code>ext: 91009901</code>
            </div>
          </div>
          <div className="mk-map" data-on={s >= 5 || undefined}>
            <b>
              Map this geofence to a customer location <Info />
            </b>
            <span className="mk-select">
              — pick a customer location — <ChevronDown />
            </span>
            <span className="mk-map-btns">
              <span className="ui-btn ui-btn-sm">
                <MapPin /> Map &amp; resolve
              </span>
              <span className="ui-btn ui-btn-sm ui-btn-outline">Open in Addresses</span>
            </span>
          </div>
        </div>
      </div>
    </UiRoot>
  );
}
