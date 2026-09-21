"use client";

import { useActionState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

import { submitLead, type LeadState } from "@/app/actions/leads";
import { CtaButton } from "@/components/ui/Cta";

export type LeadFormOption = { value: string; label: string };

const inputClass =
  "mt-1.5 block h-11 w-full rounded-[2px] border border-rule-strong bg-card px-3 text-ink outline-none transition-colors focus:border-red";

const initialState: LeadState = { status: "idle" };

export function LeadForm({
  type,
  submitLabel,
  sectors,
  modules,
  withModules = false,
  withEmployees = false,
  phone,
}: {
  type: "DEMO" | "CONTACT" | "CALLBACK" | "PRICING";
  submitLabel: string;
  sectors: LeadFormOption[];
  modules: LeadFormOption[];
  withModules?: boolean;
  withEmployees?: boolean;
  phone: string;
}) {
  const t = useTranslations("form");
  const tEmployees = useTranslations("employees");
  const locale = useLocale();
  const pathname = usePathname();

  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Written straight to the input on mount: the value must reflect when the
  // visitor actually saw the form, and it must not exist during SSR.
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, []);

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        className="border border-rule bg-card p-6 outline-none"
        role="status"
      >
        <h3 className="text-h3 font-semibold text-ink">{t("successTitle")}</h3>
        <p className="mt-2 max-w-md leading-relaxed text-ink-70">
          {t("successText", { phone })}
        </p>
      </div>
    );
  }

  const errorKey =
    state.status === "error"
      ? ({ rate: "errorRateLimit", tooFast: "errorTooFast" } as const)[
          state.reason as "rate" | "tooFast"
        ] ?? "errorText"
      : null;

  return (
    <form action={formAction} className="max-w-xl space-y-5" noValidate={false}>
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="sourcePath" value={pathname} />
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            {t("companyLabel")}{" "}
            <span className="font-normal text-ink-50">({t("optional")})</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder={t("companyPlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            {t("phoneLabel")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={t("phonePlaceholder")}
            className={`${inputClass} font-mono`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            {t("emailLabel")}{" "}
            <span className="font-normal text-ink-50">({t("optional")})</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
        </div>

        {withEmployees ? (
          <div>
            <label htmlFor="employees" className="text-sm font-medium text-ink">
              {t("employeesLabel")}
            </label>
            <select id="employees" name="employees" defaultValue="" className={inputClass}>
              <option value="">{t("employeesPlaceholder")}</option>
              {(["1-10", "11-50", "51-200", "200+"] as const).map((band) => (
                <option key={band} value={band}>
                  {tEmployees(band)}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <div>
          <label htmlFor="sector" className="text-sm font-medium text-ink">
            {t("sectorLabel")}{" "}
            <span className="font-normal text-ink-50">({t("optional")})</span>
          </label>
          <select id="sector" name="sector" defaultValue="" className={inputClass}>
            <option value="">{t("sectorPlaceholder")}</option>
            {sectors.map((sector) => (
              <option key={sector.value} value={sector.value}>
                {sector.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {withModules ? (
        <fieldset>
          <legend className="text-sm font-medium text-ink">{t("modulesLabel")}</legend>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {modules.map((module) => (
              <label
                key={module.value}
                className="flex min-h-11 items-center gap-2 text-ink-70"
              >
                <input
                  type="checkbox"
                  name="modules"
                  value={module.value}
                  className="h-4 w-4 accent-[var(--color-red)]"
                />
                {module.label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {t("messageLabel")}{" "}
          <span className="font-normal text-ink-50">({t("optional")})</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="mt-1.5 block w-full rounded-[2px] border border-rule-strong bg-card px-3 py-2.5 leading-relaxed text-ink outline-none transition-colors focus:border-red"
        />
      </div>

      {errorKey ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="border border-red bg-wash px-4 py-3 outline-none"
        >
          <p className="font-medium text-ink">{t("errorTitle")}</p>
          <p className="mt-1 text-sm text-ink-70">{t(errorKey, { phone })}</p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <CtaButton type="submit" disabled={pending}>
          {pending ? t("sending") : submitLabel}
        </CtaButton>
        <p className="max-w-sm text-sm text-ink-50">{t("consent")}</p>
      </div>
    </form>
  );
}
