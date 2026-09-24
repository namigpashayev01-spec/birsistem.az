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

## Admin panel

Saytdakı demo, əlaqə və qiymət formalarından gələn sorğular **`/admin`**
ünvanında idarə olunur (məs. <https://birsistem.az/admin>):

- sorğuların siyahısı, statusa görə tablar (Yeni → Əlaqə saxlanılıb → Uyğundur → Müştəri oldu / İtirildi / Spam);
- ad, şirkət, telefon, e-poçt üzrə axtarış və növə görə filtr;
- hər sorğunun tam məlumatı, zəng və WhatsApp linki, status dəyişmək və komanda üçün qeyd;
- seçilmiş filtrə görə **CSV yükləmə** (Excel-də birbaşa açılır).

Giriş bir ümumi parolla olur. Serverdə iki dəyişən təyin olunmalıdır:

| Dəyişən | Dəyər |
|---|---|
| `ADMIN_PASSWORD` | Admin parolu — uzun və təsadüfi olsun. |
| `ADMIN_SESSION_SECRET` | Ən azı 32 simvolluq təsadüfi sətir: `openssl rand -base64 32`. Dəyişdirsəniz, hamı sistemdən çıxır. |

Bunlar təyin olunmayıbsa, panel heç kimi içəri buraxmır. Sessiya 12 saat
qüvvədədir; 15 dəqiqədə 10 uğursuz cəhddən sonra giriş müvəqqəti bağlanır.
Panel axtarış sistemlərindən gizlidir (`noindex`, `robots.txt`).

Terminaldan son sorğulara baxmaq da mümkündür: `npm run check:leads`.

## Quruluş

| Qovluq | Nə var |
|---|---|
| `src/content/` | **Saytın bütün mətnləri.** Modullar, sektorlar, kalkulyatorlar, qiymət paketləri, bloq yazıları, hüquqi mətnlər. Mətni dəyişmək üçün yalnız bu qovluğa toxunmaq lazımdır. |
| `src/messages/` | Düymə, menyu və forma yazıları (az / ru). |
| `src/app/[locale]/` | Səhifələr. |
| `src/components/` | Təkrar istifadə olunan hissələr (registr sətirləri, formalar, kalkulyatorlar). |
| `src/lib/rates.ts` | **Vergi və sosial ayırma dərəcələri.** Qanunvericilik dəyişəndə yalnız bu fayl yenilənir. |
| `src/lib/seo.ts` | Canonical, hreflang, OpenGraph — hər səhifə buradan keçir. |
| `src/lib/site.ts` | Domen, əlaqə məlumatları, nəşr olunmuş dillər. |
| `prisma/schema.prisma` | Baza strukturu (sorğular). |

## Dillər

Sayt iki dildədir: Azərbaycan dili prefiksiz kökdədir (`/crm`), rus dili
prefikslədir və öz slug-ları var (`/ru/sklad`, `/ru/otrasli/tikinti`).
Hər mətn `src/content/` fayllarında `az` və `ru` açarları ilə yanaşı yazılıb.

URL-lər hər dildə öz sözləri ilədir: `/elaqe` ↔ `/ru/kontakty`,
`/sektorlar/tikinti` ↔ `/ru/otrasli/stroitelstvo`. Sabit səhifələrin tərcüməsi
`src/i18n/routing.ts`-də, sektor / kalkulyator / bloq slug-larının tərcüməsi
`src/i18n/slugs.ts`-dədir. Kodda həmişə azərbaycanca slug yazılır — linklər,
canonical, hreflang və sitemap onu dilə uyğun özləri çevirir. Yeni sektor və ya
bloq yazısı əlavə edəndə onun rusca slug-ını `slugs.ts`-ə yazmağı unutmayın.

Hər iki dil indekslənir: hər səhifədə canonical, `az` / `ru` / `x-default`
hreflang cütləri, dilə uyğun `og:locale` və OG şəkli var; sitemap hər iki dilin
URL-lərini alternativləri ilə birlikdə verir.

## Serverə yerləşdirmək (deploy)

Sayt adi Node.js tətbiqidir (`npm run build` + `npm run start`); Vercel və ya
Node 20+ işlədən istənilən serverdə işləyir.

Serverdə təyin olunmalı mühit dəyişənləri:

| Dəyişən | Dəyər |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://birsistem.az` — canonical, hreflang və sitemap bu ünvandan qurulur. **`localhost` qalmamalıdır.** |
| `DATABASE_URL` | Postgres bağlantısı (formalar buraya yazır). |
| `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` | Admin panelə giriş üçün (yuxarıya baxın). |

Addımlar:

1. `npm install` — `postinstall` Prisma klientini özü yaradır.
2. `npx prisma db push` — bazada `Lead` cədvəlini yaradır (bir dəfə).
3. `npm run build` və `npm run start`.
4. `public/` qovluğu (sektor şəkilləri) git-ə əlavə olunmalıdır — əks halda serverdə şəkillər olmayacaq.

### Yalnız `https://birsistem.az` (www və http yoxdur)

Axtarış sistemləri üçün hər səhifənin bir ünvanı var: `https://birsistem.az/...`.
Tətbiq özü yönləndirir (308, bir addımda, yol və parametrlər saxlanılır):

- `www.birsistem.az/...` → `https://birsistem.az/...`
- `http://...` → `https://birsistem.az/...` — hosting proksisi `X-Forwarded-Proto`
  başlığını göndərəndə (Vercel və əksər hostinqlər göndərir).

`NEXT_PUBLIC_SITE_URL` `www` və ya `http` ilə yazılsa, build dayanır — canonical
və sitemap səhvən başqa ünvana keçə bilməz. Brauzerlər HSTS başlığı ilə ilk
girişdən sonra saytı həmişə https ilə açır.

Hosting tərəfində lazım olanlar:

- DNS-də **`www` yazısı da** eyni serverə yönəlsin, SSL sertifikatı həm
  `birsistem.az`, həm də `www.birsistem.az` üçün olsun — əks halda `www` ünvanı
  yönləndirməyə çatmadan xəta verər.
- Öz serverinizdə nginx işlədirsinizsə, 80-ci portu https-ə yönləndirin və
  proksi başlığını ötürün:

  ```nginx
  server {
    listen 80;
    server_name birsistem.az www.birsistem.az;
    return 301 https://birsistem.az$request_uri;
  }
  # 443 blokunda, location / içində:
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-Proto $scheme;
  ```

- Vercel-də `www.birsistem.az` domenini əlavə edib "Redirect to birsistem.az" seçin.
- Google Search Console-da `https://birsistem.az` mülkünü (və ya bütün domen
  üçün "Domain" mülkünü) əlavə edin.

Yerləşdirmədən sonra:

- Google Search Console və Yandex Webmaster-ə saytı əlavə edib `https://birsistem.az/sitemap.xml` göndərin.
- `https://birsistem.az/ru` və bir-iki daxili səhifəni Rich Results Test ilə yoxlayın.

## İstifadəyə verməzdən əvvəl

- [ ] `src/lib/site.ts` — real telefon, e-poçt, ünvan, sosial şəbəkə linkləri
- [ ] `src/lib/rates.ts` — vergi dərəcələrini mühasiblə təsdiqləyin
- [ ] `src/content/legal.ts` — hüquqi mətnləri hüquqşünas yoxlasın
- [ ] Rus mətnlərini doğma dilli redaktor oxusun
- [ ] Logo faylı (hazırda tipoqrafik loqotipdir)

## Baza

```bash
npm run db:push       # sxemi bazaya tətbiq etmək
npm run db:generate   # Prisma klientini yeniləmək
```

Bağlantı sətri `.env` faylındadır (`DATABASE_URL`). Nümunə: `.env.example`.
