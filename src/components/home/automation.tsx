import { Bot, GitBranch, Workflow, Zap } from "lucide-react";
import { SplitWords, delay } from "@/components/site/split";

const STACK = [
  { icon: Workflow, title: "n8n & webhooks", body: "Multi-step workflows that connect inboxes, CRMs, billing, and reporting without manual copy-paste." },
  { icon: Bot, title: "AI in the loop", body: "Triage support threads, draft replies, summarize threads, and route escalations with guardrails your team approves." },
  { icon: GitBranch, title: "Custom backends", body: "When no-code hits a wall, I ship the API, queue, or ledger in Next.js and Postgres and wire it into the workflow." },
  { icon: Zap, title: "Ship & support", body: "Automations run in your accounts (AWS, Vercel, self-hosted n8n). I build them, monitor them, and fix them when APIs change." },
];

const FLOW = [
  ["Support inbox", "Classify & draft reply"],
  ["CRM / tasks", "Create or update records"],
  ["Reporting", "Pull metrics into a client-ready view"],
  ["Delivery", "Notify the team in Slack or email"],
];

export function Automation() {
  return (
    <section id="automation" className="fx-sec fx-auto" aria-labelledby="auto-title">
      <div className="fx-wrap">
        <header className="fx-sec-head fx-sec-head-center">
          <p className="fx-kicker fx-reveal">Automation specialist</p>
          <h2 id="auto-title" className="fx-h2 fx-h2-sm fx-split fx-reveal">
            <SplitWords parts={["Connect the tools.", { em: "Remove the busywork." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(80)}>
            Five-plus years building production software, with n8n, custom APIs, and AI steps wired into workflows agencies
            actually run every day — customer support, reporting, and delivery.
          </p>
        </header>

        <ul className="fx-auto-grid fx-reveal" style={delay(120)} role="list">
          {STACK.map(({ icon: Icon, title, body }) => (
            <li key={title} className="fx-auto-card">
              <span className="fx-auto-icon" aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </span>
              <h3 className="fx-h3">{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>

        <div className="fx-auto-flow fx-reveal" style={delay(180)}>
          <p className="fx-auto-flow-label">Example: community &amp; agency support</p>
          <ol className="fx-auto-flow-steps" aria-label="Example automation flow">
            {FLOW.map(([k, v], i) => (
              <li key={k}>
                <span className="fx-auto-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <b>{k}</b>
                  <span>{v}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
