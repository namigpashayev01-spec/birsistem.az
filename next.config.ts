import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // The parent folder is another git repo; pin the root so Turbopack stops
  // looking upward for a lockfile.
  turbopack: { root: import.meta.dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // This machine has ~8 GB RAM; one build worker avoids worker crashes when memory is tight.
    cpus: 1,
  },
};

export default createNextIntlPlugin("./src/i18n/request.ts")(nextConfig);
