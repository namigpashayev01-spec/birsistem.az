import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { HOME } from "@/content/home";
import { pick } from "@/lib/content";
import type { Locale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — ERP`;

const FONT_DIR = join(process.cwd(), "src", "assets", "fonts");

/**
 * The renderer uses one file per family name, and no single Plex file ships
 * both Latin and Latin Extended. "ə", "ğ", "ı" and "ş" therefore always come
 * from a second file, so the card is set entirely in Regular: one weight means
 * the fallback glyphs match the letters around them instead of looking thin.
 * Only the ASCII wordmark uses the SemiBold file.
 */
async function loadFonts() {
  const files = [
    ["ibm-plex-sans-latin-400-normal.woff", "PlexBody"],
    ["ibm-plex-sans-latin-ext-400-normal.woff", "PlexExt"],
    ["ibm-plex-sans-latin-600-normal.woff", "PlexBold"],
  ] as const;

  return Promise.all(
    files.map(async ([file, name]) => ({
      name,
      data: await readFile(join(FONT_DIR, file)),
      weight: 400 as const,
      style: "normal" as const,
    })),
  );
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = pick(HOME, locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#6B0F1A",
          color: "#F7F7F5",
          padding: 72,
          fontFamily: "PlexBody",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 8, height: 44, background: "#C8102E" }} />
          <div style={{ fontSize: 40, fontFamily: "PlexBold", letterSpacing: -1 }}>birsistem</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontFamily: "PlexBody",
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 940,
          }}
        >
          {copy.hero.h1}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(247,247,245,0.25)",
            paddingTop: 24,
            fontSize: 26,
            color: "rgba(247,247,245,0.75)",
          }}
        >
          <div style={{ display: "flex" }}>CRM · Anbar · Mühasibat · Maliyyə · HR</div>
          <div style={{ display: "flex" }}>birsistem.az</div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadFonts() },
  );
}
