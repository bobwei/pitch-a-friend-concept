import { ImageResponse } from "next/og";

export const alt = "Pitch A Friend — App Concept";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const FRAUNCES_NORMAL_URL =
  "https://fonts.gstatic.com/s/fraunces/v38/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58njr1603gg7S2nfgRYIcHhyjDg.ttf";
const FRAUNCES_ITALIC_URL =
  "https://fonts.gstatic.com/s/fraunces/v38/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lod9sPEKsxx664UJf1jiSv7W.ttf";

async function fetchFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    return res.ok ? res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const [frauncesBold, frauncesItalic] = await Promise.all([
    fetchFont(FRAUNCES_NORMAL_URL),
    fetchFont(FRAUNCES_ITALIC_URL),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: number;
    style: "normal" | "italic";
  }[] = [];
  if (frauncesBold)
    fonts.push({ name: "Fraunces", data: frauncesBold, weight: 900, style: "normal" });
  if (frauncesItalic)
    fonts.push({ name: "Fraunces", data: frauncesItalic, weight: 900, style: "italic" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F5EFE4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Background decoration circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(232, 130, 58, 0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(212, 85, 106, 0.1)",
            display: "flex",
          }}
        />

        {/* App badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(26,18,8,0.07)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8C7B6B",
              fontFamily: "sans-serif",
            }}
          >
            App Concept Design
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "96px",
              fontWeight: 900,
              color: "#1A1208",
              lineHeight: 1,
            }}
          >
            {"Pitch A "}
          </span>
          <span
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "96px",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#E8823A",
              lineHeight: 1,
            }}
          >
            Friend
          </span>
        </div>

        {/* Amber divider */}
        <div
          style={{
            width: "64px",
            height: "4px",
            background: "#E8823A",
            borderRadius: "2px",
            marginBottom: "28px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              color: "#6B5D50",
              fontFamily: "sans-serif",
            }}
          >
            讓最了解你的人，替你找到對的人
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#B5A090",
              fontFamily: "sans-serif",
            }}
          >
            以好友推薦為核心的全新約會體驗
          </div>
        </div>

        {/* Bottom logo */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#1A1208",
              fontFamily: "sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            pitch
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#E8823A",
              fontFamily: "sans-serif",
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#1A1208",
              fontFamily: "sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            friend
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
