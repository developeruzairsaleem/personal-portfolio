"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { FIT_CHECK_HREF } from "../service-contact";
import { SplitWords, delay } from "@/components/site/split";
import { UiRoot } from "@/components/mock/ui";

const STEPS = [
  "Driver submits the ticket",
  "Office reviews the delivery",
  "Approved invoice",
];

export function Walkthrough() {
  const [step, setStep] = useState(0);

  return (
    <main id="main" className="wt">
      <div className="fx-hero-bg" aria-hidden="true">
        <div className="fx-hero-grid-lines" />
        <div className="fx-glow fx-glow-a" />
      </div>
      <div className="fx-wrap wt-in">
        <section className="wt-head">
          <p className="wt-kick">
            <span className="fx-kicker">Walkthrough with sample data</span>
            <Link href="/" className="wt-back" aria-label="Back to home">
              <ArrowLeft aria-hidden="true" /> back
            </Link>
          </p>
          <h1 className="fx-h1 wt-title fx-split-load">
            <SplitWords parts={["From delivery ticket to", { em: "reviewed invoice." }]} />
          </h1>
          <p className="fx-lead fx-load" style={delay(400)}>
            An interactive illustration of the workflow I built for Sat-Raj.
            These are sample records, not a connection to live books. Rates are
            illustrative and are not current tax guidance. Click through the three steps.
          </p>
        </section>

        <div className="wt-steps" data-step={step}>
          <span className="wt-track" aria-hidden="true">
            <span className="wt-track-fill" style={{ transform: `scaleX(${step / (STEPS.length - 1)})` }} />
          </span>
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              aria-current={i === step ? "step" : undefined}
              className={"wt-pill" + (i === step ? " on" : "") + (i < step ? " done" : "")}
            >
              <span className="wt-pill-n" aria-hidden="true">
                {i < step ? <Check strokeWidth={3} /> : i + 1}
              </span>
              <span>
                <span className="fx-sr">Step {i + 1}: </span>
                {label}
              </span>
            </button>
          ))}
        </div>

        <div className="wt-card">
          <div className="wt-stage" key={step}>
            {step === 0 && (
              <div>
                <p className="wt-cap">
                  In this example, the driver submits delivery information through
                  Samsara. The integration brings those fields into an office review queue.
                </p>
                <div className="wt-ticket">
                  <div className="wt-doc-title">MOTOR CARRIER DELIVERY TICKET</div>
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
                <p className="wt-cap">
                  The office reviews the imported delivery:{" "}
                  <b>
                    matched to the customer, priced from that morning&apos;s send,
                    gallons checked against the BOL.
                  </b>
                </p>
                <UiRoot className="wt-ui">
                  <div className="wt-row">
                    <div>
                      <b>Sunrise Fuel Mart</b>
                      <small>Springfield · BOL 771204 · today 2:14 PM</small>
                    </div>
                    <span className="ui-badge" data-tone="success">READY TO INVOICE</span>
                  </div>
                  <div className="wt-panel">
                    <div className="wt-panel-cap">Lines · priced from the morning send</div>
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
                  <div className="wt-check">
                    <Check aria-hidden="true" strokeWidth={3} />
                    <span>
                      Gallons check: ticket 8,810 = terminal 8,810. Prices matched from
                      the morning send. Taxes computed per gallon, per state.
                    </span>
                  </div>
                </UiRoot>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="wt-cap">
                  After review, the office selects <b>Approve and invoice</b>.
                  The invoice job waits for QuickBooks Desktop Web Connector to
                  process it. This sample shows the resulting itemized invoice.
                </p>
                <UiRoot className="wt-ui wt-qb">
                  <div className="head">
                    <div>
                      <b>INVOICE</b>
                      <small>Sunrise Fuel Mart</small>
                    </div>
                    <div className="right">
                      <b>#20481</b>
                      <small>Aug 18 · terms from customer</small>
                    </div>
                  </div>
                  <div className="wt-panel">
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
                  <span className="ui-badge" data-tone="success">
                    <Check aria-hidden="true" strokeWidth={3} /> Illustrative invoice
                  </span>
                </UiRoot>
                <p className="wt-cta">
                  Still moving delivery data by hand?{" "}
                  <a href={FIT_CHECK_HREF} className="fx-inline-link">
                    Check one workflow
                  </a>{" "}
                  with your accounting version, ticket source and the step you want
                  to change. We will check compatibility before scoping a pilot.
                </p>
              </div>
            )}
          </div>

          <div className="wt-nav">
            <button
              type="button"
              className="fx-btn fx-btn-ghost"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ArrowLeft aria-hidden="true" /> Back
            </button>
            <button
              type="button"
              className="fx-btn"
              onClick={() => setStep((s) => (s === 2 ? 0 : s + 1))}
            >
              {step === 2 ? (
                <>
                  <RotateCcw aria-hidden="true" /> Start over
                </>
              ) : (
                <>
                  Next step <ArrowRight className="fx-arrow" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
