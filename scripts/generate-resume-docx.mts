// Writes public/uzair-saleem-resume.docx from src/app/resume/resume-data.ts,
// so the Word file always matches the /resume page and the PDF.
//
//   npm run resume:docx

import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  HEADLINE,
  NAME,
  PROJECTS,
  SKILLS,
  SUMMARY,
} from "../src/app/resume/resume-data.ts";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "public/uzair-saleem-resume.docx");

const FONT = "Calibri";
const INK = "111111";
const MUTED = "555555";
const RIGHT_TAB = 10800; // 7.5in content width in twips

function runs(text: string, size = 20) {
  return text.split("**").map((seg, i) => new TextRun({ text: seg, bold: i % 2 === 1, font: FONT, size, color: INK }));
}

function heading(text: string) {
  return new Paragraph({
    spacing: { before: 160, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: INK, space: 2 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, font: FONT, size: 21, color: INK, characterSpacing: 20 })],
  });
}

function row(left: string, right: string, opts: { bold?: boolean; italics?: boolean } = {}) {
  return new Paragraph({
    spacing: { before: opts.bold ? 100 : 0, after: 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    children: [
      new TextRun({ text: left, bold: opts.bold, italics: opts.italics, font: FONT, size: 21, color: INK }),
      new TextRun({ text: `\t${right}`, italics: opts.italics, font: FONT, size: 19, color: MUTED }),
    ],
  });
}

function bullet(text: string) {
  return new Paragraph({ numbering: { reference: "dots", level: 0 }, spacing: { after: 20 }, children: runs(text) });
}

const contact = CONTACT.flatMap((c, i) => {
  const sep = i > 0 ? [new TextRun({ text: "  |  ", font: FONT, size: 18, color: MUTED })] : [];
  const item = c.href
    ? new ExternalHyperlink({ link: c.href, children: [new TextRun({ text: c.label, font: FONT, size: 18, color: INK, underline: {} })] })
    : new TextRun({ text: c.label, font: FONT, size: 18, color: INK });
  return [...sep, item];
});

const doc = new Document({
  creator: NAME,
  title: `${NAME} · Résumé`,
  numbering: {
    config: [
      {
        reference: "dots",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 220 } } } }],
      },
    ],
  },
  sections: [
    {
      properties: { page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: NAME, bold: true, font: FONT, size: 40, color: INK })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: HEADLINE, italics: true, font: FONT, size: 22, color: INK })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: contact }),
        new Paragraph({ spacing: { after: 40 }, children: runs(SUMMARY) }),

        heading("Experience"),
        ...EXPERIENCE.flatMap((job) => [
          row(job.company, job.dates, { bold: true }),
          row(job.role, job.location, { italics: true }),
          ...job.bullets.map(bullet),
        ]),

        heading("Projects"),
        ...PROJECTS.flatMap((p) => [
          new Paragraph({
            spacing: { before: 60 },
            children: [
              new TextRun({ text: p.name, bold: true, font: FONT, size: 21, color: INK }),
              new TextRun({ text: "  |  ", font: FONT, size: 20, color: MUTED }),
              new ExternalHyperlink({ link: p.link.href, children: [new TextRun({ text: p.link.label, font: FONT, size: 20, color: INK, underline: {} })] }),
            ],
          }),
          new Paragraph({ children: runs(p.blurb) }),
        ]),

        heading("Skills"),
        ...SKILLS.map(
          (g) =>
            new Paragraph({
              spacing: { after: 20 },
              children: [
                new TextRun({ text: `${g.label}: `, bold: true, font: FONT, size: 20, color: INK }),
                new TextRun({ text: g.items.join(", "), font: FONT, size: 20, color: INK }),
              ],
            }),
        ),

        heading("Education"),
        row(EDUCATION.school, EDUCATION.dates, { bold: true }),
        row(EDUCATION.degree, EDUCATION.location, { italics: true }),
      ],
    },
  ],
});

await writeFile(OUT, await Packer.toBuffer(doc));
console.log(`Wrote ${OUT}`);
