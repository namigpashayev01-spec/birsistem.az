# Sektor illüstrasiyaları

Hər sektorun hero-sundakı 3D şəkil bu qovluqdan gəlir. Fayl adı sektorun
slug-ı ilə eyni olmalıdır:

    tikinti.png      restoran.png     topdansatis.png   istehsal.png
    perakende.png    logistika.png    aptek.png         xidmet.png

Tələblər:

- **PNG, şəffaf fon.** Şəkil açıq boz panelin (`--color-cloud`, #f1eeef)
  üstündə dayanır, ona görə ağ fonlu fayl panelin içində kvadrat ləkə kimi
  görünəcək.
- **Kvadrat (1:1).** Panel kvadrat nisbətə görə qurulub.
- Təxminən 720×720 px kifayətdir; Next.js qalanını özü ölçür və
  AVIF/WebP-ə çevirir.

Fayl olmayanda `sektorlar/[sektor]/page.tsx` içindəki `sectorImage()` onu
tapmır və hero sadəcə mətn variantında render olunur — sınıq şəkil qutusu
çıxmır. Yeni fayl əlavə edəndə kod dəyişikliyi lazım deyil, yalnız yenidən
build.
