import type { Metadata } from "next";
import Link from "next/link";
import Resume from "./Resume";
import "./resume.css";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Uzair Saleem — full-stack engineer.",
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <Link href="/">← uzair-saleem</Link>
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
