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
    <main id="main" className="fd-wrap">
      <section className="fd-head">
        <p className="fd-kick">
          <span>Walkthrough with sample data</span>
          <Link href="/">← back</Link>
        </p>
        <h1>From truck ticket to QuickBooks invoice, same day</h1>
        <p className="fd-sub">
          This is the system I built for Sat-Raj, a New Jersey fuel
          distributor, shown here with sample numbers. Click through the three
          steps.
        </p>
      </section>

      <div className="fd-steps">
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

      <div className="fd-card">
        {step === 0 && (
          <div>
            <p className="fd-cap">
              The driver drops the load and submits the ticket from the truck,
              like your drivers already do today. <b>Nobody retypes it.</b>
            </p>
            <div className="fd-ticket mono">
              <div className="fd-doc-title">MOTOR CARRIER DELIVERY TICKET</div>
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
              <div className="fd-panel-cap">Lines · priced from the morning send</div>
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
                    <tr><td>FUEL:REGULAR</td><td>6,005</td><td>$2.7475</td><td>$16,498.74</td></tr>
                    <tr><td>FUEL:DIESEL</td><td>2,805</td><td>$3.9699</td><td>$11,135.57</td></tr>
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
        .fd-wrap { max-width: 860px; margin: 0 auto; padding: 40px 24px 70px; }
        .fd-head .fd-kick { display: flex; justify-content: space-between; font-family: var(--font-mono), monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fz-green); font-weight: 600; margin: 0 0 14px; }
        .fd-head .fd-kick a { color: var(--fz-mut); text-transform: none; letter-spacing: 0; font-family: inherit; }
        .fd-head h1 { font-size: clamp(24px, 4vw, 32px); letter-spacing: -0.02em; color: var(--fz-ink); margin: 0 0 12px; line-height: 1.2; }
        .fd-sub { color: var(--fz-mut); font-size: 16px; margin: 0 0 26px; max-width: 58ch; }
        .fd-steps { display: flex; gap: 8px; margin: 6px 0 16px; }
        .fd-pill { flex: 1; font: inherit; font-size: 13px; font-weight: 600; padding: 9px 6px; border-radius: 4px; border: 1px solid var(--fz-line); background: #f4f3ee; color: var(--fz-mut); cursor: pointer; text-align: center; }
        .fd-pill.on { background: var(--fz-card); color: var(--fz-deep); border-color: var(--fz-deep); font-weight: 700; }
        .fd-pill.done { color: var(--fz-green); }
        .fd-card { border: 1px solid var(--fz-line); border-radius: 10px; padding: 22px; background: var(--fz-card); margin-bottom: 60px; }
        .fd-cap { margin: 0 0 16px; font-size: 15.5px; color: var(--fz-mut); }
        .fd-cap b { color: var(--fz-ink); font-weight: 600; }
        .fd-ticket { border: 1.5px solid var(--fz-ink); padding: 18px; max-width: 460px; margin: 0 auto; background: #fffdf6; }
        .fd-ticket .fd-doc-title { font-size: 12.5px; font-weight: 700; text-align: center; margin: 0 0 10px; letter-spacing: 0.05em; }
        .fd-ticket table { width: 100%; font-size: 12.5px; border-collapse: collapse; }
        .fd-ticket td { padding: 3px 4px; }
        .fd-ticket .rule td { border-top: 1px dashed var(--fz-ink); }
        .fd-ticket .stamp { text-align: center; margin-top: 12px; font-size: 11.5px; color: #8a6d1a; font-weight: 700; }
        .fd-row { display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--fz-line); border-radius: 8px; padding: 11px 15px; margin-bottom: 13px; background: #f4f3ee; }
        .fd-row b { display: block; font-size: 15px; }
        .fd-row small { color: #5d6a63; font-size: 12.5px; }
        .fd-badge { font-family: var(--font-mono), monospace; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: #e7f2ec; color: var(--fz-green); white-space: nowrap; }
        .fd-panel { border: 1px solid var(--fz-line); border-radius: 8px; overflow-x: auto; }
        .fd-panel .fd-panel-cap { font-family: var(--font-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.09em; color: #5d6a63; padding: 9px 14px; margin: 0; background: #f4f3ee; font-weight: 500; }
        .fd-panel table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 420px; }
        .fd-panel td, .fd-panel th { padding: 8px 14px; text-align: right; border-top: 1px solid var(--fz-line); }
        .fd-panel td:first-child, .fd-panel th:first-child { text-align: left; }
        .fd-panel th { font-family: var(--font-mono), monospace; font-size: 10.5px; text-transform: uppercase; color: #5d6a63; letter-spacing: 0.06em; border-top: 0; font-weight: 500; }
        .fd-panel .tax td { color: #5d6a63; font-size: 12.5px; }
        .fd-panel .total td { font-weight: 700; border-top: 2px solid var(--fz-ink); }
        .fd-check { margin-top: 13px; padding: 10px 14px; border-radius: 8px; background: #e7f2ec; color: var(--fz-green); font-size: 13px; font-weight: 500; }
        .fd-qb { border: 1px solid var(--fz-line); border-radius: 8px; padding: 18px; background: var(--fz-card); max-width: 540px; margin: 0 auto; }
        .fd-qb .head { display: flex; justify-content: space-between; margin-bottom: 13px; }
        .fd-qb .head b { font-size: 16px; }
        .fd-qb .head small { color: #5d6a63; display: block; font-size: 12.5px; }
        .fd-synced { display: inline-block; margin-top: 14px; background: #e7f2ec; color: var(--fz-green); font-weight: 600; font-size: 12.5px; padding: 6px 13px; border-radius: 999px; }
        .fd-synced::before { content: "✓ "; }
        .fd-cta { text-align: center; margin: 22px 0 0; font-size: 15px; color: var(--fz-mut); }
        .fd-cta a { color: var(--fz-deep); font-weight: 600; }
        .fd-nav { display: flex; justify-content: space-between; margin-top: 20px; }
        .fd-btn { font: inherit; font-size: 14.5px; font-weight: 700; padding: 10px 24px; border-radius: 8px; border: 1.5px solid var(--fz-amber); background: var(--fz-amber); color: var(--fz-deeper); cursor: pointer; }
        .fd-btn.ghost { background: var(--fz-card); color: var(--fz-deep); border-color: var(--fz-line); }
        .fd-btn[disabled] { opacity: 0.35; cursor: default; }
        @media (max-width: 560px) { .fd-steps { flex-direction: column; } }
      `}</style>
    </main>
  );
}
