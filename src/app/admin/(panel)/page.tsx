import type { Metadata } from "next";
import Link from "next/link";

import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin/session";
import { PAGE_SIZE, parseFilters, queryFor, whereFor } from "@/lib/admin/leads";
import {
  STATUS_LABEL,
  STATUS_ORDER,
  STATUS_TONE,
  TYPE_LABEL,
  TYPE_ORDER,
  formatWhen,
} from "@/lib/admin/labels";
import { SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";

export const metadata: Metadata = { title: "Sorğular" };

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function LeadsPage({ searchParams }: Props) {
  await requireAdmin();

  const filters = parseFilters(await searchParams);
  const where = whereFor(filters);

  // Counts per status honour the other filters, so the tabs always add up to
  // what the search and type narrowing would show.
  const [leads, total, byStatus] = await Promise.all([
    db.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (filters.page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    db.lead.count({ where }),
    db.lead.groupBy({
      by: ["status"],
      where: whereFor(filters, { withStatus: false }),
      _count: { _all: true },
    }),
  ]);

  const counts = new Map(byStatus.map((row) => [row.status, row._count._all]));
  const all = byStatus.reduce((sum, row) => sum + row._count._all, 0);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const newCount = counts.get("NEW") ?? 0;

  const tab =
    "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-pill px-4 text-sm font-bold transition-colors";

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-h1 font-extrabold text-ink">Sorğular</h1>
          <p className="mt-2 text-ink-70">
            {newCount > 0
              ? `${newCount} yeni sorğu cavab gözləyir.`
              : "Cavab gözləyən yeni sorğu yoxdur."}
          </p>
        </div>
        <a
          href={`/admin/export${queryFor({ ...filters, page: 1 })}`}
          className="inline-flex min-h-11 items-center rounded-pill border border-rule-strong bg-paper px-5 text-sm font-bold text-ink hover:bg-cloud"
        >
          CSV yüklə
        </a>
      </div>

      {/* Status tabs: the pipeline, left to right. */}
      <nav aria-label="Status" className="-mx-3 mt-8 overflow-x-auto px-3">
        <ul className="flex w-max gap-1 rounded-pill bg-paper p-1 shadow-card">
          {[undefined, ...STATUS_ORDER].map((status) => {
            const active = filters.status === status;
            const count = status ? (counts.get(status) ?? 0) : all;
            return (
              <li key={status ?? "all"}>
                <Link
                  href={`/admin${queryFor({ ...filters, status, page: 1 })}`}
                  aria-current={active ? "page" : undefined}
                  className={`${tab} ${active ? "bg-ink text-paper" : "text-ink-70 hover:bg-cloud hover:text-ink"}`}
                >
                  {status ? STATUS_LABEL[status] : "Hamısı"}
                  <span
                    className={`font-mono text-xs ${
                      status === "NEW" && count > 0 && !active
                        ? "rounded-pill bg-brand px-1.5 text-white"
                        : active
                          ? "text-paper/70"
                          : "text-ink-50"
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <form action="/admin" className="mt-4 flex flex-wrap gap-2">
        {filters.status ? <input type="hidden" name="status" value={filters.status} /> : null}
        <label className="sr-only" htmlFor="q">
          Axtarış
        </label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={filters.q}
          placeholder="Ad, şirkət, telefon və ya e-poçt"
          className="h-11 min-w-0 flex-1 basis-64 rounded-pill border border-rule-strong bg-paper px-5 text-sm text-ink outline-none focus:border-brand-ink"
        />
        <label className="sr-only" htmlFor="type">
          Sorğunun növü
        </label>
        <select
          id="type"
          name="type"
          defaultValue={filters.type ?? ""}
          className="h-11 rounded-pill border border-rule-strong bg-paper px-4 text-sm text-ink outline-none focus:border-brand-ink"
        >
          <option value="">Bütün növlər</option>
          {TYPE_ORDER.map((type) => (
            <option key={type} value={type}>
              {TYPE_LABEL[type]}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="h-11 rounded-pill bg-brand px-6 text-sm font-bold text-white hover:bg-brand-deep"
        >
          Axtar
        </button>
        {filters.q || filters.type ? (
          <Link
            href={`/admin${queryFor({ status: filters.status })}`}
            className="inline-flex h-11 items-center px-3 text-sm font-bold text-brand-ink underline decoration-brand-ink/30 underline-offset-4 hover:decoration-brand-ink"
          >
            Təmizlə
          </Link>
        ) : null}
      </form>

      <div className="mt-6 overflow-hidden rounded-md bg-paper shadow-card">
        {leads.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-bold text-ink">
              {all === 0 ? "Hələ heç bir sorğu yoxdur." : "Bu filtrə uyğun sorğu tapılmadı."}
            </p>
            <p className="mt-2 text-sm text-ink-70">
              {all === 0
                ? "Saytdakı demo, əlaqə və qiymət formalarından gələn sorğular burada görünəcək."
                : "Filtri dəyişin və ya axtarışı təmizləyin."}
            </p>
          </div>
        ) : (
          <>
          {/* On a phone the table would scroll sideways and hide the number,
              which is the one thing a salesperson opens this for — so below md
              each lead is a card with the call link in plain reach. */}
          <ul className="divide-y divide-rule md:hidden">
            {leads.map((lead) => (
              <li key={lead.id} className="px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/admin/leads/${lead.id}`}
                    className="min-w-0 font-bold text-ink hover:text-brand-ink"
                  >
                    {lead.name}
                    {lead.company ? (
                      <span className="block text-xs font-normal text-ink-50">{lead.company}</span>
                    ) : null}
                  </Link>
                  <span
                    className={`shrink-0 whitespace-nowrap rounded-pill px-2.5 py-1 text-xs font-bold ${STATUS_TONE[lead.status]}`}
                  >
                    {STATUS_LABEL[lead.status]}
                  </span>
                </div>
                <a
                  href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 inline-flex min-h-10 items-center font-mono text-ink hover:text-brand-ink"
                >
                  {lead.phone}
                </a>
                <p className="text-xs text-ink-50">
                  {TYPE_LABEL[lead.type]} · {lead.locale.toUpperCase()} ·{" "}
                  <span className="font-mono">{formatWhen(lead.createdAt)}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[52rem] text-left text-sm">
              <thead className="border-b border-rule text-ink-50">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">Tarix</th>
                  <th scope="col" className="px-5 py-3 font-medium">Kim</th>
                  <th scope="col" className="px-5 py-3 font-medium">Telefon</th>
                  <th scope="col" className="px-5 py-3 font-medium">Növ</th>
                  <th scope="col" className="px-5 py-3 font-medium">Sektor</th>
                  <th scope="col" className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-rule last:border-0 hover:bg-cloud/60"
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-ink-70">
                      {formatWhen(lead.createdAt)}
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-bold text-ink hover:text-brand-ink hover:underline"
                      >
                        {lead.name}
                      </Link>
                      {lead.company ? (
                        <span className="block text-xs text-ink-50">{lead.company}</span>
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <a
                        href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                        className="font-mono text-ink hover:text-brand-ink"
                      >
                        {lead.phone}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-ink-70">
                      {TYPE_LABEL[lead.type]}
                      <span className="ml-1.5 text-xs uppercase text-ink-50">{lead.locale}</span>
                    </td>
                    <td className="px-5 py-3.5 text-ink-70">
                      {lead.sector
                        ? (SECTOR_BY_SLUG.get(lead.sector as SectorSlug)?.copy.az.name ?? lead.sector)
                        : "—"}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex whitespace-nowrap rounded-pill px-2.5 py-1 text-xs font-bold ${STATUS_TONE[lead.status]}`}
                      >
                        {STATUS_LABEL[lead.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
        )}
      </div>

      {pages > 1 ? (
        <nav aria-label="Səhifələr" className="mt-6 flex items-center justify-between text-sm">
          <span className="text-ink-50">
            {total} sorğudan {(filters.page - 1) * PAGE_SIZE + 1}–
            {Math.min(filters.page * PAGE_SIZE, total)}
          </span>
          <div className="flex gap-2">
            {filters.page > 1 ? (
              <Link
                href={`/admin${queryFor({ ...filters, page: filters.page - 1 })}`}
                className="inline-flex min-h-10 items-center rounded-pill border border-rule-strong bg-paper px-4 font-bold text-ink hover:bg-cloud"
              >
                Əvvəlki
              </Link>
            ) : null}
            {filters.page < pages ? (
              <Link
                href={`/admin${queryFor({ ...filters, page: filters.page + 1 })}`}
                className="inline-flex min-h-10 items-center rounded-pill border border-rule-strong bg-paper px-4 font-bold text-ink hover:bg-cloud"
              >
                Növbəti
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}
    </>
  );
}
