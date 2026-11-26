import { ImageResponse } from "next/og";

export const alt =
  "Glyph Agency — Software a Medida, Webs Comerciales, Redes Sociales y Meta Ads";
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
                width: "44px",
                height: "44px",
                borderRadius: "11px",
                backgroundColor: "#141417",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
                <path
                  d="M88.24 34.57A38 38 0 1 0 98 60L98 53.75L69.5 53.75L75.75 60L69.5 66.25L84.72 66.25A25.5 25.5 0 1 1 78.95 42.94Z"
                  fill="#FFFFFF"
                />
                <path d="M58.5 49L69.5 60L58.5 71L47.5 60Z" fill="#FF8400" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#52525b",
              }}
            >
              Glyph Agency · Software & Mercadeo Digital
            </span>
          </div>

          <div
            style={{
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#18181b",
              marginBottom: "24px",
            }}
          >
            Atrae clientes, ordena tu negocio y escala.
          </div>

          <div
            style={{
              fontSize: "25px",
              lineHeight: 1.38,
              color: "#52525b",
            }}
          >
            Sistemas a Medida · Webs Comerciales · Redes Sociales & Meta Ads
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
