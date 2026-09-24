"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { CtaButton, CtaLink } from "@/components/ui/Cta";

/**
 * Recovery screen for a failed render or a failed client navigation — the
 * second is the common one: the visitor clicks a link, the RSC request for the
 * next page never lands (connection dropped, server restarted, tab left open
 * overnight) and without this boundary they are left on a dead page.
 *
 * `reset()` retries the same route, which is what fixes that case.
 */
export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common");

  useEffect(() => {
    // The digest is the only handle on the server-side stack in production.
    console.error("Route error", error.digest ?? "", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[76rem] px-5 py-28 md:px-8 md:py-36">
      <h1 className="max-w-2xl text-h1 font-extrabold text-ink">{t("errorTitle")}</h1>
      <p className="mt-5 max-w-xl text-lead text-ink-70">{t("errorText")}</p>

      <div className="mt-9 flex flex-wrap gap-3">
        <CtaButton type="button" onClick={reset}>
          {t("errorRetry")}
        </CtaButton>
        <CtaLink href="/" variant="secondary">
          {t("backHome")}
        </CtaLink>
      </div>

      {error.digest ? (
        <p className="mt-10 font-mono text-2xs text-ink-50">{error.digest}</p>
      ) : null}
    </div>
  );
}
