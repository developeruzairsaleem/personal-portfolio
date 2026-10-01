import type { ReactNode } from "react";
import { Building2, DollarSign, Fuel, Inbox, Landmark, LayoutDashboard, Send } from "lucide-react";
import { manrope } from "./manrope";

/*
 * Light-UI primitives copied from the real back-office app (Manrope, navy
 * #052334 / #082f42, #e3e6ec borders, 4px corners, bordered uppercase pills).
 * Used only inside decorative, aria-hidden product illustrations.
 */

export type Stage = "attention" | "ready" | "invoiced" | "qb";

const STAGE_LABEL: Record<Stage, string> = {
  attention: "Needs attention",
  ready: "Ready",
  invoiced: "Invoiced",
  qb: "In QuickBooks",
};

export function StagePill({ stage }: { stage: Stage }) {
  return (
    <span className="ui-pill" data-stage={stage}>
      <i />
      {STAGE_LABEL[stage]}
    </span>
  );
}

export function UiBadge({ tone, children }: { tone: "success" | "warning" | "info" | "default"; children: ReactNode }) {
  return (
    <span className="ui-badge" data-tone={tone}>
      {children}
    </span>
  );
}

export function UiLabel({ children }: { children: ReactNode }) {
  return <span className="ui-label">{children}</span>;
}

const NAV = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Prices", icon: DollarSign },
  { name: "Deliveries", icon: Send },
  { name: "Suppliers", icon: Building2 },
  { name: "Accounting", icon: Landmark },
  { name: "Messages", icon: Inbox },
];

/** The app's navy sidebar, with a neutral brand instead of the client's logo. */
export function UiSidebar({ active }: { active: string }) {
  return (
    <aside className="ui-side">
      <div className="ui-side-brand">
        <span className="ui-side-mark">
          <Fuel />
        </span>
        <span>
          <b>Your Fuel Co.</b>
          <small>Back office</small>
        </span>
      </div>
      <nav>
        {NAV.map((n) => {
          const Icon = n.icon;
          return (
            <span key={n.name} className="ui-side-item" data-active={n.name === active || undefined}>
              <Icon />
              {n.name}
            </span>
          );
        })}
      </nav>
    </aside>
  );
}

/** Root wrapper that switches a mock panel to the app's own type and colors. */
export function UiRoot({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`ui ${manrope.variable} ${className}`}>{children}</div>;
}
