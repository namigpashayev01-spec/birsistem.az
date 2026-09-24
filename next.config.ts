import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * One address per page for search engines: https, no www. Every canonical,
 * hreflang and sitemap URL is built from NEXT_PUBLIC_SITE_URL, so a "www" or
 * "http" value there would undo the redirects below from the inside — refuse
 * to start with one. Localhost stays allowed for running the build locally.
 */
const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://birsistem.az");
const isLocal = ["localhost", "127.0.0.1"].includes(SITE_URL.hostname);
if (!isLocal && (SITE_URL.protocol !== "https:" || SITE_URL.hostname.startsWith("www."))) {
  throw new Error(
    `NEXT_PUBLIC_SITE_URL must be https without www (e.g. https://birsistem.az), got ${SITE_URL.origin}`,
  );
}
const CANONICAL_HOST = SITE_URL.hostname;
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

const nextConfig: NextConfig = {
  // The parent folder is another git repo; pin the root so Turbopack stops
  // looking upward for a lockfile.
  turbopack: { root: import.meta.dirname },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    if (isLocal) return [];
    return [
      // www.birsistem.az/anything → https://birsistem.az/anything, one hop.
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      // Plain http → https. TLS ends at the hosting proxy, which reports the
      // original scheme in X-Forwarded-Proto. Next only fills that header in
      // itself after redirects have run, so this matches a real http request
      // and never loops when a proxy leaves the header out.
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
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
