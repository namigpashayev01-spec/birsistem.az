import { db } from "@/lib/db";
import { isAdmin } from "@/lib/admin/session";
import { parseFilters, whereFor } from "@/lib/admin/leads";
import { STATUS_LABEL, TYPE_LABEL, formatWhen } from "@/lib/admin/labels";

/**
 * Formula injection: a visitor controls these fields, and a cell starting with
 * "=" or "@" runs as a formula when the file is opened in Excel. A phone number
 * like "+994…" is left alone — only a sign followed by something other than a
 * digit is treated as a formula.
 */
function cell(value: string | null | undefined) {
  let text = (value ?? "").replace(/\r?\n/g, " ");
  if (/^[=@\t\r]/.test(text) || /^[+-][^\d\s]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET(request: Request) {
  if (!(await isAdmin())) return new Response("Unauthorized", { status: 401 });

  const params = Object.fromEntries(new URL(request.url).searchParams);
  const filters = parseFilters(params);
  const leads = await db.lead.findMany({
    where: whereFor(filters),
    orderBy: { createdAt: "desc" },
    take: 10_000,
  });

  const header = [
    "Tarix", "Status", "Növ", "Ad", "Şirkət", "Telefon", "E-poçt", "İşçi sayı",
    "Sektor", "Modullar", "Mesaj", "Qeyd", "Dil", "Səhifə", "UTM source", "UTM medium", "UTM campaign",
  ];
  const lines = leads.map((lead) =>
    [
      formatWhen(lead.createdAt),
      STATUS_LABEL[lead.status],
      TYPE_LABEL[lead.type],
      lead.name,
      lead.company,
      lead.phone,
      lead.email,
      lead.employees,
      lead.sector,
      lead.modules.join(", "),
      lead.message,
      lead.note,
      lead.locale,
      lead.sourcePath,
      lead.utmSource,
      lead.utmMedium,
      lead.utmCampaign,
    ]
      .map(cell)
      .join(";"),
  );

  // Semicolons and a BOM: what Excel expects under the az and ru regional
  // settings, so the file opens in columns with the letters intact.
  const body = "﻿" + [header.map(cell).join(";"), ...lines].join("\r\n");
  const date = new Date().toISOString().slice(0, 10);

  return new Response(body, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="birsistem-sorgular-${date}.csv"`,
      "cache-control": "no-store",
    },
  });
}
