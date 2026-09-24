import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin/session";
import { STATUS_LABEL, STATUS_TONE, TYPE_LABEL, formatWhen } from "@/lib/admin/labels";
import { MODULE_BY_SLUG, type ModuleSlug } from "@/content/modules";
import { SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";
import { SITE_URL } from "@/lib/site";
import { LeadEditor } from "./LeadEditor";

export const metadata: Metadata = { title: "Sorğu" };

type Props = { params: Promise<{ id: string }> };

export default async function LeadPage({ params }: Props) {
  await requireAdmin();

  const { id } = await params;
  const lead = await db.lead.findUnique({ where: { id } });
  if (!lead) notFound();

  const sector = lead.sector
    ? (SECTOR_BY_SLUG.get(lead.sector as SectorSlug)?.copy.az.name ?? lead.sector)
    : null;
  const modules = lead.modules
    .map((slug) => MODULE_BY_SLUG.get(slug as ModuleSlug)?.copy.az.name ?? slug)
    .join(", ");
  const utm = [lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(" / ");
  const phoneHref = lead.phone.replace(/[^\d+]/g, "");
  const whatsapp = phoneHref.replace(/^\+/, "");

  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: "Telefon",
      value: (
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href={`tel:${phoneHref}`} className="font-mono text-ink hover:text-brand-ink">
            {lead.phone}
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-brand-ink underline decoration-brand-ink/30 underline-offset-4 hover:decoration-brand-ink"
          >
            WhatsApp-da yaz
          </a>
        </span>
      ),
    },
    {
      label: "E-poçt",
      value: lead.email ? (
        <a href={`mailto:${lead.email}`} className="text-ink hover:text-brand-ink">
          {lead.email}
        </a>
      ) : null,
    },
    { label: "Şirkət", value: lead.company },
    { label: "İşçi sayı", value: lead.employees },
    { label: "Sektor", value: sector },
    { label: "Maraqlandığı modullar", value: modules || null },
    {
      label: "Mesaj",
      value: lead.message ? (
        <span className="whitespace-pre-line leading-relaxed">{lead.message}</span>
      ) : null,
    },
    {
      label: "Göndərildiyi səhifə",
      value: (
        <a
          href={`${SITE_URL}${lead.sourcePath}`}
          target="_blank"
          rel="noreferrer"
          className="break-all font-mono text-xs text-ink-70 hover:text-brand-ink"
        >
          {lead.sourcePath}
        </a>
      ),
    },
    { label: "Saytın dili", value: lead.locale === "ru" ? "Rus" : "Azərbaycan" },
    { label: "Reklam kampaniyası (UTM)", value: utm || null },
    { label: "Göndərilib", value: <span className="font-mono text-sm">{formatWhen(lead.createdAt)}</span> },
    {
      label: "Son dəyişiklik",
      value: <span className="font-mono text-sm">{formatWhen(lead.updatedAt)}</span>,
    },
  ];

  return (
    <>
      <Link
        href="/admin"
        className="inline-flex min-h-10 items-center text-sm font-bold text-brand-ink underline decoration-brand-ink/30 underline-offset-4 hover:decoration-brand-ink"
      >
        Bütün sorğular
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-h1 font-extrabold text-ink">{lead.name}</h1>
        <span className={`rounded-pill px-3 py-1 text-sm font-bold ${STATUS_TONE[lead.status]}`}>
          {STATUS_LABEL[lead.status]}
        </span>
      </div>
      <p className="mt-2 text-ink-70">
        {TYPE_LABEL[lead.type]} sorğusu{lead.company ? `, ${lead.company}` : ""}
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <section aria-label="Sorğunun məlumatları" className="rounded-md bg-paper p-6 shadow-card md:p-8">
          <dl className="divide-y divide-rule">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
                <dt className="text-sm text-ink-50">{row.label}</dt>
                <dd className="min-w-0 text-ink">{row.value ?? <span className="text-ink-50">—</span>}</dd>
              </div>
            ))}
          </dl>
        </section>

        <LeadEditor id={lead.id} status={lead.status} note={lead.note ?? ""} />
      </div>
    </>
  );
}
