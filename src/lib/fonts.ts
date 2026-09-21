import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * One family, two widths. IBM Plex covers Latin, Latin Extended (the Azerbaijani
 * schwa "ə" lives there) and Cyrillic, so all three locales share a typography.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

/** Figures only: tabular numerals so columns of money line up. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
