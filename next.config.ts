import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // The parent folder is another git repo; pin the root so Turbopack stops
  // looking upward for a lockfile.
  turbopack: { root: import.meta.dirname },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
  experimental: {
    // This machine has ~8 GB RAM; one build worker avoids worker crashes when memory is tight.
    cpus: 1,
  },
};

export default createNextIntlPlugin("./src/i18n/request.ts")(nextConfig);
