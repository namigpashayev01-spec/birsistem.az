import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { TOOLS } from "@/content/tools";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

type Href = Parameters<typeof absoluteUrl>[1];

const LABELS: Record<
  Locale,
  {
    heading: string;
    modules: string;
    sectors: string;
    tools: string;
    other: string;
    pages: [string, Href, string][];
  }
> = {
  az: {
    heading: "Azərbaycan dilində",
    modules: "Modullar",
    sectors: "Sektor həlləri",
    tools: "Pulsuz kalkulyatorlar",
    other: "Digər səhifələr",
    pages: [
      ["Qiymətlər", "/qiymetler", "Paketlər və nəyin daxil olduğu; qiymət sorğu üzrə verilir."],
      ["Müqayisə", "/muqayise", "1C, Excel və Odoo ilə müqayisə."],
      ["Haqqımızda", "/haqqimizda", "Komanda və iş üsulu."],
      ["Bloq", "/bloq", "Uçot və proseslərə dair praktik yazılar."],
      ["Demo sorğusu", "/demo", "Demo üçün forma."],
    ],
  },
  ru: {
    heading: "На русском языке",
    modules: "Модули",
    sectors: "Отраслевые решения",
    tools: "Бесплатные калькуляторы",
    other: "Другие страницы",
    pages: [
      ["Цены", "/qiymetler", "Тарифы и что в них входит; цена — по запросу."],
      ["Сравнение", "/muqayise", "Сравнение с 1С, Excel и Odoo."],
      ["О нас", "/haqqimizda", "Команда и подход к работе."],
      ["Блог", "/bloq", "Практические статьи об учёте и процессах."],
      ["Запрос демо", "/demo", "Форма запроса демо."],
    ],
  },
};

function section(locale: Locale) {
  const labels = LABELS[locale];
  const line = (label: string, href: Href, note: string) =>
    `- [${label}](${absoluteUrl(locale, href)}): ${note}`;

  return [
    `## ${labels.heading}`,
    "",
    `### ${labels.modules}`,
    ...MODULES.map((module) => {
      const copy = pick(module.copy, locale);
      return line(copy.name, module.href, copy.row);
    }),
    "",
    `### ${labels.sectors}`,
    ...SECTORS.map((sector) => {
      const copy = pick(sector.copy, locale);
      return line(
        copy.name,
        { pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } },
        copy.row,
      );
    }),
    "",
    `### ${labels.tools}`,
    ...TOOLS.map((tool) => {
      const copy = pick(tool.copy, locale);
      return line(
        copy.name,
        { pathname: "/aletler/[alet]", params: { alet: tool.slug } },
        copy.row,
      );
    }),
    "",
    `### ${labels.other}`,
    ...labels.pages.map(([label, href, note]) => line(label, href, note)),
    "",
  ];
}

/**
 * A plain-text map of the site for language models, mirroring the emerging
 * llms.txt convention. Same facts as the pages, without the markup.
 */
export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    "> Azərbaycan biznesi üçün ERP sistemi: CRM, anbar, mühasibat, maliyyə, HR və hesabatlar bir bazada işləyir. Sənəd bir dəfə yazılır və bütün modullarda özü hərəkət edir.",
    "> ERP-система для бизнеса в Азербайджане: CRM, склад, бухгалтерия, финансы, HR и отчёты в одной базе.",
    "",
    "Sayt dilləri / Языки сайта: az (əsas), ru.",
    `Əlaqə / Контакты: ${CONTACT.phone}, ${CONTACT.email}`,
    "",
    ...section("az"),
    ...section("ru"),
    "## Qeyd / Примечание",
    "Kalkulyator nəticələri ilkin təsəvvür üçündür və rəsmi hesablamanı əvəz etmir.",
    "Результаты калькуляторов ориентировочные и не заменяют официальный расчёт.",
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
