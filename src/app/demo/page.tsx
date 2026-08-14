import type { Metadata } from "next";
import { Nav, Footer } from "../site-chrome";
import { Walkthrough } from "./walkthrough";

export const metadata: Metadata = {
  title: "Walkthrough: truck ticket to QuickBooks invoice, same day",
  description:
    "A 60 second walkthrough with sample data: driver's ticket in, checked delivery, one click to a fully itemized QuickBooks invoice.",
};

export default function DemoPage() {
  return (
    <>
      <Nav />
      <Walkthrough />
      <Footer />
    </>
  );
}
