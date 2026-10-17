import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Uzair Saleem · Full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same paper, ink and cobalt as the home page.
const PAPER = "#f7f6f2";
const INK = "#15161a";
const MUTED = "#555963";
const LINE = "#e2dfd7";
const ACCENT = "#1f56cc";
const GREEN = "#1c7c52";

const PROOF = [
  ["Indiecator", "ETL pipelines for years of billing data"],
  ["Satraj", "Billing workflow, dispatch to QuickBooks"],
  ["AI reels", "Generator plus n8n auto posting"],
];

export default async function OpengraphImage() {
  const portrait = `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public/images/uzair-portrait-blazer.jpg"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: PAPER,
          color: INK,
          padding: "60px 64px",
          gap: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 22,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${LINE}`,
                backgroundColor: "#ffffff",
                alignSelf: "flex-start",
              }}
            >
              <div style={{ display: "flex", width: 12, height: 12, borderRadius: 6, backgroundColor: GREEN }} />
              Open to full-time remote roles
            </div>
            <div style={{ display: "flex", marginTop: 34, fontSize: 30, color: MUTED }}>Uzair Saleem · Full-stack engineer</div>
            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontSize: 60,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              I build data pipelines, billing workflows and AI automations.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", borderTop: `1px solid ${LINE}` }}>
            {PROOF.map(([k, v]) => (
              <div
                key={k}
                style={{ display: "flex", gap: 16, fontSize: 23, padding: "12px 0", borderBottom: `1px solid ${LINE}` }}
              >
                <div style={{ display: "flex", width: 150, color: ACCENT, fontWeight: 700 }}>{k}</div>
                <div style={{ display: "flex", color: MUTED }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 300 }}>
          <img
            src={portrait}
            alt=""
            width={300}
            height={375}
            style={{ width: 300, height: 375, borderRadius: 24, objectFit: "cover" }}
          />
          <div style={{ display: "flex", flexDirection: "column", fontSize: 22, color: MUTED, gap: 4 }}>
            <div style={{ display: "flex", color: ACCENT, fontWeight: 700 }}>uzairsaleem.dev</div>
            <div style={{ display: "flex" }}>Islamabad · works US hours</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
