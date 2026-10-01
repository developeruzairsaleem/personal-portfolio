import { ImageResponse } from "next/og";

export const alt = "Uzair Saleem · Stop retyping delivery tickets into QuickBooks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark "premium industrial" card matching the site and the ad film:
// near-black ink, warm white type, one fuel-orange line from ticket to QuickBooks.
export default function OpengraphImage() {
  const nodes = [
    { x: 120, label: "Ticket" },
    { x: 360, label: "Price" },
    { x: 600, label: "Review" },
    { x: 840, label: "Invoice" },
    { x: 1080, label: "QuickBooks" },
  ];
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07090C",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(255,106,19,0.38), rgba(255,106,19,0) 46%), radial-gradient(circle at 0% 100%, rgba(255,178,63,0.14), rgba(255,178,63,0) 40%)",
          color: "#F4EFE6",
          padding: "64px 72px 56px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 14,
                border: "2px solid #FF8B2B",
                fontSize: 20,
                fontWeight: 700,
                color: "#F4EFE6",
              }}
            >
              US
            </div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>Uzair Saleem</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#C3C9D1",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            For gasoline &amp; diesel distributors on QuickBooks
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.045em" }}>
            Stop retyping delivery
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.045em" }}>
            <span>tickets&nbsp;</span>
            <span style={{ color: "#FF8B2B", fontStyle: "italic", fontWeight: 600 }}>into QuickBooks.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <svg width="1056" height="56" viewBox="0 0 1200 56" style={{ display: "flex" }}>
            <path
              d="M120 28 Q240 4 360 28 Q480 52 600 28 Q720 4 840 28 Q960 52 1080 28"
              fill="none"
              stroke="#FF6A13"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {nodes.map((n, i) => (
              <circle key={n.label} cx={n.x} cy={28} r={i === 4 ? 13 : 11} fill={i === 4 ? "#34D399" : "#FFB23F"} />
            ))}
          </svg>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9AA3AE", padding: "0 10px" }}>
            {nodes.map((n) => (
              <div key={n.label} style={{ display: "flex" }}>
                {n.label}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8E97A3", marginTop: 6 }}>
            <div style={{ display: "flex" }}>Running every day at Sat-Raj, a New Jersey fuel distributor</div>
            <div style={{ display: "flex", color: "#FFB23F" }}>Book a 20-min walkthrough →</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
