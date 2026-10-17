import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Resume from "./Resume";
import "./resume.css";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Uzair Saleem, full-stack engineer. Next.js, TypeScript, Node and Postgres. Billing, data pipelines and marketplaces in production.",
  robots: { index: false, follow: true },
};

// The résumé is a paper document, so the browser bar should be light here.
export const viewport: Viewport = { themeColor: "#ededed" };

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <Link href="/">← uzairsaleem.dev</Link>
        <a className="download" href="/uzair-saleem-resume.pdf" target="_blank" rel="noopener noreferrer">
          Download PDF
        </a>
      </div>
      <div className="sheet">
        <Resume />
      </div>
    </div>
  );
}
