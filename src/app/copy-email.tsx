"use client";

import { useState } from "react";
import { EMAIL } from "./site-chrome";
import { mark } from "./mark";

export function CopyEmail() {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("Email address copied.");
      mark("cta_copy_email");
    } catch {
      setStatus("Select and copy the email address below.");
    }
  }

  return (
    <div className="fz-email-fallback">
      <button type="button" onClick={copy}>Copy email address</button>
      <span className="fz-email-address">{EMAIL}</span>
      <span role="status">{status}</span>
      <style>{`
        .fz-email-fallback { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 16px; margin-top: 20px; }
        .fz-email-fallback button { padding: 10px 0; min-height: 44px; background: none; border: 0; color: inherit; font: inherit; font-weight: 600; text-decoration: underline; cursor: pointer; }
        .fz-email-address { overflow-wrap: anywhere; }
        .fz-email-fallback [role="status"] { width: 100%; font-size: 15px; }
      `}</style>
    </div>
  );
}
