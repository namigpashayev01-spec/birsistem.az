import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the same rule-and-bead mark as `icon.svg`, on a full square. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#c8102e",
        }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 20, background: "#fff" }} />
        <div
          style={{
            marginTop: 10,
            width: 20,
            height: 78,
            borderRadius: 10,
            background: "rgba(255,255,255,0.55)",
          }}
        />
      </div>
    ),
    size,
  );
}
