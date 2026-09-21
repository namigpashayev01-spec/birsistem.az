# birsistem.az

Azərbaycan biznesi üçün ERP sisteminin marketinq saytı. Next.js 16 (App Router),
server-side render, Tailwind v4, Postgres + Prisma.

## Saytı işə salmaq

Ən sadə yol — qovluqdakı **`basla.bat`** faylına iki dəfə klikləmək. Sayt yığılır,
brauzer açılır: <http://localhost:3000>

Terminaldan:

```bash
npm run dev     # inkişaf rejimi (dəyişikliklər dərhal görünür)
npm run build   # istehsal üçün yığmaq
npm run start   # yığılmış saytı işə salmaq
```

## Gələn sorğulara baxmaq

Demo və əlaqə formaları Postgres bazasına yazılır:

```bash
npm run check:leads
```

## Quruluş

| Qovluq | Nə var |
|---|---|
| `src/content/` | **Saytın bütün mətnləri.** Modullar, sektorlar, kalkulyatorlar, qiymət paketləri, bloq yazıları, hüquqi mətnlər. Mətni dəyişmək üçün yalnız bu qovluğa toxunmaq lazımdır. |
| `src/messages/` | Düymə, menyu və forma yazıları (az / ru / en). |
| `src/app/[locale]/` | Səhifələr. |
| `src/components/` | Təkrar istifadə olunan hissələr (registr sətirləri, formalar, kalkulyatorlar). |
| `src/lib/rates.ts` | **Vergi və sosial ayırma dərəcələri.** Qanunvericilik dəyişəndə yalnız bu fayl yenilənir. |
| `src/lib/seo.ts` | Canonical, hreflang, OpenGraph — hər səhifə buradan keçir. |
| `src/lib/site.ts` | Domen, əlaqə məlumatları, nəşr olunmuş dillər. |
| `prisma/schema.prisma` | Baza strukturu (sorğular). |

## Dillər

Azərbaycan dili prefiksiz kökdədir (`/crm`), rus və ingilis dilləri prefikslə
(`/ru/crm`, `/en/crm`). Marşrutlar və hreflang hazırdır, amma RU/EN **məzmunu
hələ yazılmayıb** — ona görə həmin dillər `noindex` verilir və sitemap-a düşmür.

Tərcümələr hazır olanda `src/lib/site.ts` faylında:

```ts
export const PUBLISHED_LOCALES: readonly Locale[] = ["az", "ru", "en"];
```

Bundan sonra hreflang cütləri, sitemap və dil keçidi avtomatik işə düşür.

## İstifadəyə verməzdən əvvəl

- [ ] `src/lib/site.ts` — real telefon, e-poçt, ünvan, sosial şəbəkə linkləri
- [ ] `src/lib/rates.ts` — vergi dərəcələrini mühasiblə təsdiqləyin
- [ ] `src/content/legal.ts` — hüquqi mətnləri hüquqşünas yoxlasın
- [ ] `.env` faylında `NEXT_PUBLIC_SITE_URL="https://birsistem.az"`
- [ ] Logo faylı (hazırda tipoqrafik loqotipdir)

## Baza

```bash
npm run db:push       # sxemi bazaya tətbiq etmək
npm run db:generate   # Prisma klientini yeniləmək
```

Bağlantı sətri `.env` faylındadır (`DATABASE_URL`). Nümunə: `.env.example`.
