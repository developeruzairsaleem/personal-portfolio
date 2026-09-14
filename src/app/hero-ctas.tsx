"use client";

import Link from "next/link";
import { mark } from "./mark";
import { LINKS } from "./site-chrome";

/** Hero buttons. The recording is the promise made in every email, so it
 *  comes first; the calendar ask comes last. Every click is tracked. */
export function HeroCtas() {
  function watch() {
    mark("cta_watch_demo");
    const video = document.querySelector<HTMLVideoElement>("#demo-video video");
    if (!video) return;
    video.scrollIntoView({ behavior: "smooth", block: "center" });
    void video.play();
  }
  return (
    <div className="fz-hero-cta">
      <button type="button" className="fz-btn" onClick={watch}>
        Watch the 90 second recording
      </button>
      <Link href="/work/satraj" className="fz-btn ghost" onClick={() => mark("cta_case_study")}>
        Read the case study
      </Link>
      <a
        href={LINKS.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="fz-btn ghost"
        onClick={() => mark("cta_book_call")}
      >
        Book 30 minutes
      </a>
    </div>
  );
}
