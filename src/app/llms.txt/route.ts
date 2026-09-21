import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { TOOLS } from "@/content/tools";
import { pick } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * A plain-text map of the site for language models, mirroring the emerging
 * llms.txt convention. Same facts as the pages, without the markup.
 */
export function GET() {
  const line = (label: string, href: Parameters<typeof absoluteUrl>[1], note: string) =>
    `- [${label}](${absoluteUrl("az", href)}): ${note}`;

  const body = [
    `# ${SITE_NAME}`,
    "",
    "> Azərbaycan biznesi üçün ERP sistemi: CRM, anbar, mühasibat, maliyyə, HR və hesabatlar bir bazada işləyir. Sənəd bir dəfə yazılır və bütün modullarda özü hərəkət edir.",
    "",
    "Sayt dilləri: Azərbaycan (əsas). Rus və ingilis versiyaları hazırlanır.",
    `Əlaqə: ${CONTACT.phone}, ${CONTACT.email}`,
    "",
    "## Modullar",
    ...MODULES.map((module) => {
      const copy = pick(module.copy, "az");
      return line(copy.name, module.href, copy.row);
    }),
    "",
    "## Sektor həlləri",
    ...SECTORS.map((sector) => {
      const copy = pick(sector.copy, "az");
      return line(
        copy.name,
        { pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } },
        copy.row,
      );
    }),
    "",
    "## Pulsuz kalkulyatorlar",
    ...TOOLS.map((tool) => {
      const copy = pick(tool.copy, "az");
      return line(
        copy.name,
        { pathname: "/aletler/[alet]", params: { alet: tool.slug } },
        copy.row,
      );
    }),
    "",
    "## Digər səhifələr",
    line("Qiymətlər", "/qiymetler", "Paketlər və nəyin daxil olduğu; qiymət sorğu üzrə verilir."),
    line("Müqayisə", "/muqayise", "1C, Excel və Odoo ilə müqayisə."),
    line("Haqqımızda", "/haqqimizda", "Komanda və iş üsulu."),
    line("Bloq", "/bloq", "Uçot və proseslərə dair praktik yazılar."),
    line("Demo sorğusu", "/demo", "Demo üçün forma."),
    "",
    "## Qeyd",
    "Kalkulyator nəticələri ilkin təsəvvür üçündür və rəsmi hesablamanı əvəz etmir.",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
