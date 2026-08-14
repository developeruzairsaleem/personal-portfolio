"use client";

import { useState } from "react";
import Link from "next/link";
import { EMAIL } from "../site-chrome";

const STEPS = [
  "Driver submits the ticket",
  "Delivery checks itself",
  "One click to QuickBooks",
];

export function Walkthrough() {
  const [step, setStep] = useState(0);

  return (
    <main className="wrap">
      <section className="intro" style={{ paddingBottom: 28 }}>
        <p className="label fade">
          <span>walkthrough with sample data</span>
          <span className="x"><Link href="/">← back</Link></span>
        </p>
        <h1 className="fade d1" style={{ maxWidth: "18ch" }}>
          From truck ticket to QuickBooks invoice, same day
        </h1>
        <p className="sub fade d2">
          This is the system I built for a New Jersey fuel distributor, shown
          here with sample numbers. Click through the three steps.
        </p>
      </section>

      <div className="fd-steps fade d2">
        {STEPS.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setStep(i)}
            className={
              "fd-pill" + (i === step ? " on" : "") + (i < step ? " done" : "")
            }
          >
            {i + 1} · {label}
          </button>
        ))}
      </div>

      <div className="fd-card fade d3">
        {step === 0 && (
          <div>
            <p className="fd-cap">
              The driver drops the load and submits the ticket from the truck,
              like your drivers already do today. <b>Nobody retypes it.</b>
            </p>
            <div className="fd-ticket mono">
              <h3>MOTOR CARRIER DELIVERY TICKET</h3>
              <table>
                <tbody>
                  <tr><td>BOL #</td><td>771204</td><td>DATE</td><td>08/18</td></tr>
                  <tr className="rule"><td colSpan={4}></td></tr>
                  <tr><td>SOLD TO</td><td colSpan={3}>SUNRISE FUEL MART, SPRINGFIELD</td></tr>
                  <tr className="rule"><td colSpan={4}></td></tr>
                  <tr><td>REG 87 UNL</td><td colSpan={2}></td><td>6,005 GAL</td></tr>
                  <tr><td>#2 ULSD DIESEL</td><td colSpan={2}></td><td>2,805 GAL</td></tr>
                  <tr className="rule"><td colSpan={4}></td></tr>
                  <tr><td>TOTAL</td><td colSpan={2}></td><td>8,810 GAL</td></tr>
                </tbody>
              </table>
              <div className="stamp">submitted from the truck · 2:14 PM</div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="fd-cap">
              Minutes later the delivery is on the office screen:{" "}
              <b>
                matched to the customer, priced from that morning&apos;s send,
                gallons checked against the BOL.
              </b>
            </p>
            <div className="fd-row">
              <div>
                <b>Sunrise Fuel Mart</b>
                <small>Springfield · BOL 771204 · today 2:14 PM</small>
              </div>
              <span className="fd-badge">READY TO INVOICE</span>
            </div>
            <div className="fd-panel">
              <h4>Lines · priced from the morning send</h4>
              <table>
                <tbody>
                  <tr><th>Product</th><th>Gallons</th><th>Rate</th><th>Amount</th></tr>
                  <tr><td>Regular 87</td><td>6,005</td><td>$2.7475</td><td>$16,498.74</td></tr>
                  <tr><td>Diesel</td><td>2,805</td><td>$3.9699</td><td>$11,135.57</td></tr>
                  <tr className="tax"><td>Federal Excise Tax, Gasoline</td><td>6,005</td><td>$0.1830</td><td>$1,098.92</td></tr>
                  <tr className="tax"><td>State Motor Fuel Tax</td><td>6,005</td><td>$0.1050</td><td>$630.53</td></tr>
                  <tr className="tax"><td>Federal Diesel Tax</td><td>2,805</td><td>$0.2430</td><td>$681.62</td></tr>
                  <tr className="tax"><td>State Diesel Tax</td><td>2,805</td><td>$0.1350</td><td>$378.68</td></tr>
                  <tr className="total"><td>Total</td><td>8,810</td><td></td><td>$30,424.06</td></tr>
                </tbody>
              </table>
            </div>
            <div className="fd-check">
              Gallons check: ticket 8,810 = terminal 8,810. Prices matched from
              the morning send. Taxes computed per gallon, per state.
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="fd-cap">
              The office reviews, clicks <b>Approve and invoice</b>, and it
              lands in QuickBooks with every tax as its own line.{" "}
              <b>Same day. No typing.</b>
            </p>
            <div className="fd-qb">
              <div className="head">
                <div>
                  <b>INVOICE</b>
                  <small>Sunrise Fuel Mart</small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b>#20481</b>
                  <small>Aug 18 · terms from customer</small>
                </div>
              </div>
              <div className="fd-panel">
                <table>
                  <tbody>
                    <tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
                    <tr><td>FUEL:REGULAR</td><td>6,005</td><td>$2.4595</td><td>$14,769.30</td></tr>
                    <tr><td>FUEL:DIESEL</td><td>2,805</td><td>$3.5919</td><td>$10,075.28</td></tr>
                    <tr className="tax"><td>FUEL TAXES:FGT</td><td>6,005</td><td>$0.1830</td><td>$1,098.92</td></tr>
                    <tr className="tax"><td>FUEL TAXES:SMFT</td><td>6,005</td><td>$0.1050</td><td>$630.53</td></tr>
                    <tr className="tax"><td>FUEL TAXES:FDT</td><td>2,805</td><td>$0.2430</td><td>$681.62</td></tr>
                    <tr className="tax"><td>FUEL TAXES:SDT</td><td>2,805</td><td>$0.1350</td><td>$378.68</td></tr>
                    <tr className="total"><td>Balance due</td><td></td><td></td><td>$30,424.06</td></tr>
                  </tbody>
                </table>
              </div>
              <span className="fd-synced">Synced to QuickBooks Desktop</span>
            </div>
            <p className="fd-cta">
              Want this for your company?{" "}
              <a href={`mailto:${EMAIL}?subject=Walkthrough for my company`}>
                Email me
              </a>{" "}
              and I will walk you through it on your own numbers. I build it
              around your operation and keep it running.
            </p>
          </div>
        )}

        <div className="fd-nav">
          <button
            type="button"
            className="fd-btn ghost"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Back
          </button>
          <button
            type="button"
            className="fd-btn"
            onClick={() => setStep((s) => (s === 2 ? 0 : s + 1))}
          >
            {step === 2 ? "Start over" : "Next step"}
          </button>
        </div>
      </div>

      <style>{`
        .fd-steps { display: flex; gap: 8px; margin: 6px 0 16px; }
        .fd-pill { flex: 1; font: inherit; font-size: 13px; font-weight: 600; padding: 9px 6px; border-radius: 7px; border: 1px solid var(--line); background: var(--bg-2); color: var(--muted); cursor: pointer; text-align: center; }
        .fd-pill.on { background: var(--bg); color: var(--accent); border-color: var(--accent); }
        .fd-pill.done { color: var(--green); }
        .fd-card { border: 1px solid var(--line); border-radius: 10px; padding: 22px; background: var(--bg); margin-bottom: 60px; }
        .fd-cap { margin: 0 0 16px; font-size: 15.5px; color: var(--muted); }
        .fd-cap b { color: var(--ink); font-weight: 600; }
        .fd-ticket { border: 1.5px solid var(--ink); padding: 18px; max-width: 460px; margin: 0 auto; background: #fffdf6; }
        .fd-ticket h3 { font-size: 12.5px; text-align: center; margin: 0 0 10px; letter-spacing: 0.05em; }
        .fd-ticket table { width: 100%; font-size: 12.5px; border-collapse: collapse; }
        .fd-ticket td { padding: 3px 4px; }
        .fd-ticket .rule td { border-top: 1px dashed var(--ink); }
        .fd-ticket .stamp { text-align: center; margin-top: 12px; font-size: 11.5px; color: #8a6d1a; font-weight: 700; }
        .fd-row { display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--line); border-radius: 8px; padding: 11px 15px; margin-bottom: 13px; background: var(--bg-2); }
        .fd-row b { display: block; font-size: 15px; }
        .fd-row small { color: var(--faint); font-size: 12.5px; }
        .fd-badge { font-family: var(--font-mono), monospace; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: #e7f2ec; color: var(--green); white-space: nowrap; }
        .fd-panel { border: 1px solid var(--line); border-radius: 8px; overflow-x: auto; }
        .fd-panel h4 { font-family: var(--font-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.09em; color: var(--faint); padding: 9px 14px; margin: 0; background: var(--bg-2); font-weight: 500; }
        .fd-panel table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 420px; }
        .fd-panel td, .fd-panel th { padding: 8px 14px; text-align: right; border-top: 1px solid var(--line-2); }
        .fd-panel td:first-child, .fd-panel th:first-child { text-align: left; }
        .fd-panel th { font-family: var(--font-mono), monospace; font-size: 10.5px; text-transform: uppercase; color: var(--faint); letter-spacing: 0.06em; border-top: 0; font-weight: 500; }
        .fd-panel .tax td { color: var(--faint); font-size: 12.5px; }
        .fd-panel .total td { font-weight: 700; border-top: 2px solid var(--ink); }
        .fd-check { margin-top: 13px; padding: 10px 14px; border-radius: 8px; background: #e7f2ec; color: var(--green); font-size: 13px; font-weight: 500; }
        .fd-qb { border: 1px solid var(--line); border-radius: 8px; padding: 18px; background: var(--bg); max-width: 540px; margin: 0 auto; }
        .fd-qb .head { display: flex; justify-content: space-between; margin-bottom: 13px; }
        .fd-qb .head b { font-size: 16px; }
        .fd-qb .head small { color: var(--faint); display: block; font-size: 12.5px; }
        .fd-synced { display: inline-block; margin-top: 14px; background: #e7f2ec; color: var(--green); font-weight: 600; font-size: 12.5px; padding: 6px 13px; border-radius: 999px; }
        .fd-synced::before { content: "✓ "; }
        .fd-cta { text-align: center; margin: 22px 0 0; font-size: 15px; color: var(--muted); }
        .fd-cta a { color: var(--accent); font-weight: 600; }
        .fd-nav { display: flex; justify-content: space-between; margin-top: 20px; }
        .fd-btn { font: inherit; font-size: 14px; font-weight: 600; padding: 10px 22px; border-radius: 7px; border: 1px solid var(--accent); background: var(--accent); color: #fff; cursor: pointer; }
        .fd-btn.ghost { background: var(--bg); color: var(--accent); }
        .fd-btn[disabled] { opacity: 0.35; cursor: default; }
        @media (max-width: 560px) { .fd-steps { flex-direction: column; } }
      `}</style>
    </main>
  );
}
