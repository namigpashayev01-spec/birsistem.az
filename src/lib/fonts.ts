import { DM_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * DM Sans: a low-contrast geometric sans that stays friendly at display sizes
 * and reads cleanly at 16px. Latin Extended covers the Azerbaijani alphabet,
 * including the schwa "ə", and Cyrillic covers the Russian locale.
 */
export const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

/** Figures only: tabular numerals so columns of money line up. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
