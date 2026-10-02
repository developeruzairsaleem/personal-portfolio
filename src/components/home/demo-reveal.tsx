"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";
import { DemoPlayer } from "@/app/demo-player";

/**
 * The screen recording as a compact row, so it doesn't compete with the film.
 * The player mounts (and starts) only when the visitor opens it.
 */
export function DemoReveal() {
  const uid = useId().replace(/:/g, "");
  const [open, setOpen] = useState(false);
  const regionId = `demo-${uid}`;

  return (
    <div className="fx-demo">
      <button
        type="button"
        className="fx-demo-row"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="fx-demo-thumb" aria-hidden="true">
          <Image src="/fuel-demo-v3-poster.jpg" alt="" width={160} height={90} sizes="112px" />
          <span className="fx-demo-play">
            <Play fill="currentColor" strokeWidth={0} />
          </span>
        </span>
        <span className="fx-demo-text">
          <b>
            {open ? (
              "Hide the screen recording"
            ) : (
              <>
                Watch the live <span className="fx-nowrap">Sat-Raj</span> system
              </>
            )}
          </b>
          <span>0:50 · recorded with demo data</span>
        </span>
        <ChevronDown className="fx-demo-chev" aria-hidden="true" />
      </button>
      <div id={regionId} className="fx-demo-player" hidden={!open}>
        {open && <DemoPlayer id="demo-video" autoStart />}
      </div>
    </div>
  );
}
