"use client";

import { usePathname } from "next/navigation";

/**
 * Last resort: this replaces the whole document, so it runs when the locale
 * layout itself failed and neither the fonts, the stylesheet nor the
 * translations can be relied on. Everything here is inline; the language is
 * read from the URL prefix because there is no provider left to ask.
 */
const COPY = {
  az: {
    title: "Səhifə yüklənmədi",
    text: "Gözlənilməz xəta baş verdi. Yenidən cəhd edin və ya ana səhifəyə qayıdın.",
    retry: "Yenidən cəhd et",
    home: "Ana səhifə",
    homeHref: "/",
  },
  ru: {
    title: "Страница не загрузилась",
    text: "Произошла непредвиденная ошибка. Попробуйте ещё раз или вернитесь на главную.",
    retry: "Попробовать снова",
    home: "На главную",
    homeHref: "/ru",
  },
} as const;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname() ?? "/";
  const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "az";
  const copy = COPY[lang];

  return (
    <html lang={lang}>
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#fff",
          color: "#1a1214",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        <main style={{ maxWidth: "32rem" }}>
          <h1 style={{ margin: 0, fontSize: "1.75rem", letterSpacing: "-0.03em" }}>
            {copy.title}
          </h1>
          <p style={{ marginTop: "1rem", lineHeight: 1.6, color: "#544a4d" }}>
            {copy.text}
          </p>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: "3rem",
                padding: "0 1.75rem",
                border: 0,
                borderRadius: "999px",
                background: "#c8102e",
                color: "#fff",
                fontSize: "0.9375rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {copy.retry}
            </button>
            {/* A plain anchor on purpose: this boundary runs when the app
                shell itself failed, so the link must force a full document
                load rather than a client navigation through the router that
                just broke. */}
            <a
              href={copy.homeHref}
              style={{
                minHeight: "3rem",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 1.75rem",
                borderRadius: "999px",
                border: "1px solid #cdc6c8",
                color: "#1a1214",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {copy.home}
            </a>
          </div>
          {error.digest ? (
            <p style={{ marginTop: "2.5rem", fontSize: "0.75rem", color: "#746a6d" }}>
              {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
