import { ImageResponse } from "next/og";

export const alt = "Uzair Saleem · Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fcfcfc",
          color: "#18181b",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 27 }}>
          <div style={{ display: "flex", fontWeight: 600 }}>uzair-saleem</div>
          <div style={{ display: "flex", color: "#565b64" }}>open to remote roles</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 67, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            Full-stack engineer who ships products end to end.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#565b64", marginTop: 26 }}>
            Five years of TypeScript, Node, Next.js, and Postgres.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 23, color: "#868c96" }}>
          <div style={{ display: "flex" }}>Indiecator · Sat-Raj · Diffed.gg</div>
          <div style={{ display: "flex" }}>Islamabad · UTC+5</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
