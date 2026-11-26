import { ImageResponse } from "next/og";

export const alt = "Khristian Ali — Full-Stack Product Engineer & Founder @ Glyph Agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fafafa",
          padding: "72px 84px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "32px",
                borderRadius: "16px 16px 3px 3px",
                background: "linear-gradient(145deg, #ff8400 0%, #ff8ee5 55%, #d559ff 100%)",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#52525b",
              }}
            >
              Khristian Ali · Glyph Agency
            </span>
          </div>

          <div
            style={{
              fontSize: "66px",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#18181b",
              marginBottom: "24px",
            }}
          >
            Cada idea abre un producto real.
          </div>

          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.38,
              color: "#52525b",
            }}
          >
            SaaS Offline-First · PostgreSQL Multi-Tenant RLS · Aplicaciones con IA
          </div>
        </div>

        <div
          style={{
            width: "280px",
            height: "390px",
            borderRadius: "140px 140px 14px 14px",
            background: "linear-gradient(155deg, #ffc157 0%, #ff8400 35%, #ff8ee5 72%, #d559ff 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 24px 60px rgba(255, 132, 0, 0.25)",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "230px",
              borderRadius: "80px 80px 8px 8px",
              backgroundColor: "#141417",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
