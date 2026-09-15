import type { Metadata } from "next";
import { ServiceNav, ServiceFooter, ServiceStyles } from "../service-chrome";
import { Walkthrough } from "./walkthrough";

export const metadata: Metadata = {
  title: "Walkthrough: delivery review to QuickBooks invoice",
  description:
    "An interactive illustration with sample data: delivery ticket, office review and itemized invoice. Based on the workflow built for Sat-Raj.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <>
      <ServiceStyles />
      <ServiceNav />
      <Walkthrough />
      <ServiceFooter />
    </>
  );
}
