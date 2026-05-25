import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Écrivance - TCF Canada Writing Practice";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #eef4ff 0%, #ffffff 55%, #fff7ed 100%)",
          color: "#111827",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.78)",
            border: "2px solid rgba(0, 35, 149, 0.12)",
            borderRadius: 40,
            boxShadow: "0 28px 80px rgba(0, 35, 149, 0.16)",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%"
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#002395",
                borderRadius: 18,
                color: "#ffffff",
                display: "flex",
                fontSize: 38,
                fontWeight: 800,
                height: 64,
                justifyContent: "center",
                width: 64
              }}
            >
              E
            </div>
            <div style={{ color: "#002395", fontSize: 38, fontWeight: 800 }}>Écrivance</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ color: "#002395", fontSize: 28, fontWeight: 700 }}>
              TCF Canada Writing Practice
            </div>
            <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>
              Master writing tasks with instant AI feedback.
            </div>
            <div style={{ color: "#4b5563", fontSize: 30, lineHeight: 1.35, maxWidth: 880 }}>
              Practice Tasks 1, 2, and 3 with NCLC-level scoring and clear corrections.
            </div>
          </div>

          <div style={{ color: "#6b7280", display: "flex", fontSize: 26, gap: 24 }}>
            <span>Real TCF-style tasks</span>
            <span>Instant feedback</span>
            <span>NCLC scoring</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
