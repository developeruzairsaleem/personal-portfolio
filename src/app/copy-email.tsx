"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { EMAIL } from "./site-chrome";
import { mark } from "./mark";

export function CopyEmail() {
  const [status, setStatus] = useState("");
  const copied = status === "Email address copied.";

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("Email address copied.");
      mark("cta_copy_email");
    } catch {
      setStatus("Select and copy the email address above.");
    }
  }

  return (
    <div className="fx-copy">
      <div className="fx-copy-pill">
        <span className="fx-copy-address">{EMAIL}</span>
        <button type="button" onClick={copy} className="fx-copy-btn" data-copied={copied || undefined}>
          {copied ? <Check aria-hidden="true" strokeWidth={2.6} /> : <Copy aria-hidden="true" strokeWidth={2} />}
          {copied ? "Copied" : "Copy email address"}
        </button>
      </div>
      <span role="status" className="fx-copy-status">
        {status}
      </span>
    </div>
  );
}
