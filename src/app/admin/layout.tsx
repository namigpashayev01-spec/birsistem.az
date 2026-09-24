import type { Metadata } from "next";
import type { ReactNode } from "react";

import { manrope, plexMono } from "@/lib/fonts";
import "../globals.css";

/**
 * The admin sits outside `[locale]`: it has one language, no public header or
 * footer, and must never be indexed. It owns its own <html> for that reason.
 */
export const metadata: Metadata = {
  title: { default: "Admin — BirSistem", template: "%s — Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh bg-cloud font-sans antialiased">{children}</body>
    </html>
  );
}
