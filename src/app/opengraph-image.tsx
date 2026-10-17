import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Uzair Saleem · Full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same dark page and lime accent as the site.
const BG = "#0b0b0c";
const INK = "#f4f2ed";
const MUTED = "#b4b2ba";
const LINE = "#3a3a41";
const ACCENT = "#d4ff3f";
const GREEN = "#5ee59a";

export default async function OpengraphImage() {
  const portrait = `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public/images/uzair-portrait-blazer.jpg"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: BG,
          color: INK,
          padding: "64px 72px",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 23,
                fontWeight: 600,
                padding: "9px 20px 9px 16px",
                borderRadius: 999,
                border: `1px solid ${LINE}`,
                alignSelf: "flex-start",
              }}
            >
              <div style={{ display: "flex", width: 12, height: 12, borderRadius: 6, backgroundColor: GREEN }} />
              Available now for full-time remote roles
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 40,
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
              }}
            >
              <span>I&apos;m a full-stack engineer.&nbsp;</span>
              <span>I&apos;ve shipped&nbsp;</span>
              <span style={{ color: ACCENT }}>a billing system,&nbsp;</span>
              <span style={{ color: ACCENT }}>a revenue dashboard&nbsp;</span>
              <span>and&nbsp;</span>
              <span style={{ color: ACCENT }}>a gaming marketplace.</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 25, color: MUTED }}>
            <div style={{ display: "flex" }}>Next.js · TypeScript · Node · Postgres</div>
            <div style={{ display: "flex", color: ACCENT, fontWeight: 700 }}>uzairsaleem.dev</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 300 }}>
          <div style={{ display: "flex", position: "relative", width: 300, height: 375 }}>
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 14,
                width: 300,
                height: 375,
                borderRadius: 30,
                backgroundColor: ACCENT,
                transform: "rotate(4deg)",
              }}
            />
            <img
              src={portrait}
              alt=""
              width={300}
              height={375}
              style={{ position: "absolute", top: 0, left: 0, width: 300, height: 375, borderRadius: 30, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
