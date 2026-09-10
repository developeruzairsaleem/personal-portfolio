import { ImageResponse } from "next/og";

export const alt = "Uzair Saleem · Software Engineer for Fuel Distributors";
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
            Software engineer for fuel distributors.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#565b64", marginTop: 26 }}>
            Truck ticket to QuickBooks invoice, same day.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 23, color: "#868c96" }}>
          <div style={{ display: "flex" }}>Proven live at Sat-Raj, New Jersey</div>
          <div style={{ display: "flex" }}>Islamabad · UTC+5</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
