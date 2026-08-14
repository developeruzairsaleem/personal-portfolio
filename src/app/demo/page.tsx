import type { Metadata } from "next";
import { ServiceNav, ServiceFooter, ServiceStyles } from "../service-chrome";
import { Walkthrough } from "./walkthrough";

export const metadata: Metadata = {
  title: "Walkthrough: truck ticket to QuickBooks invoice, same day",
  description:
    "A 60 second walkthrough with sample data: driver's ticket in, checked delivery, one click to a fully itemized QuickBooks invoice.",
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
