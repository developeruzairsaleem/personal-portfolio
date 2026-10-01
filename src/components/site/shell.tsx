import type { ReactNode } from "react";
import "./site.css";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { ClientFX } from "./client-fx";
import { MotionProvider } from "./motion-provider";

/** Dark "premium industrial" chrome shared by /, /work/satraj and /demo. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <div className="fx">
        <div className="fx-grain" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
        <ClientFX />
      </div>
    </MotionProvider>
  );
}
