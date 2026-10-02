import type { Metadata } from "next";
import { SiteShell } from "@/components/site/shell";
import { Walkthrough } from "./walkthrough";

export const metadata: Metadata = {
  title: "Walkthrough: delivery review to QuickBooks invoice",
  description:
    "An interactive illustration with sample data: delivery ticket, office review and itemized invoice. Based on a workflow running in production.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <SiteShell>
      <Walkthrough />
    </SiteShell>
  );
}
