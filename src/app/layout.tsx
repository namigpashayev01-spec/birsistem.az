import type { ReactNode } from "react";

/**
 * All markup lives in `[locale]/layout.tsx`, which owns <html> and its lang
 * attribute. This file only exists because Next requires a root layout.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
