import { IBM_Plex_Mono, Manrope } from "next/font/google";

/**
 * Manrope: a geometric sans with semi-rounded terminals and a genuinely heavy
 * ExtraBold, which is what the display sizes on this site are set in. Latin
 * Extended covers the Azerbaijani alphabet, including the schwa "ə"; Cyrillic
 * covers the Russian locale.
 */
export const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

/** Figures only: tabular numerals so columns of money line up. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
