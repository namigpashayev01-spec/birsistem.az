import type { Faq, Localized } from "@/lib/content";

export type ComparisonSlug = "1c" | "excel" | "odoo";

export type ComparisonCopy = {
  /** How the alternative is named in running text. */
  rival: string;
  title: string;
  row: string;
  lead: string;
  /** Honest, criterion-by-criterion. The rival column is not a straw man. */
  criteria: { criterion: string; birsistem: string; rival: string }[];
  /** Where the alternative is genuinely the better choice. */
  rivalWins: { title: string; text: string };
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export type ComparisonEntry = {
  slug: ComparisonSlug;
  copy: Localized<ComparisonCopy>;
};

export const COMPARISONS: ComparisonEntry[] = [
  {
    slug: "excel",
    copy: {
      az: {
        rival: "Excel",
        title: "BirSistem və Excel",
        row: "Cədvəldən sistemə keçid nə vaxt lazım olur",
        lead: "Excel pis alət deyil — sadəcə çoxistifadəçili uçot üçün nəzərdə tutulmayıb. Fərq funksiyalarda yox, eyni faylı bir neçə nəfərin eyni vaxtda dəyişməsindədir.",
        criteria: [
          {
            criterion: "Eyni vaxtda bir neçə istifadəçi",
            birsistem: "Hər istifadəçinin öz girişi və hüququ var, dəyişikliklər toqquşmur",
            rival: "Fayl paylaşılır, versiyalar ayrılır, son doğru variant itir",
          },
          {
            criterion: "Kim nəyi dəyişdi",
            birsistem: "Hər sənədin yaradılma və dəyişiklik jurnalı saxlanılır",
            rival: "Dəyişiklik tarixçəsi yoxdur, düstur səhvən silinsə bilinmir",
          },
          {
            criterion: "Anbar qalığı",
            birsistem: "Sənəd yazılan anda qalıq yenilənir, rezerv nəzərə alınır",
            rival: "Qalıq əl ilə düzəldilir, sayım fərqi hər ay təkrarlanır",
          },
          {
            criterion: "Hesabatlar",
            birsistem: "Hazır kəsimlər, ilkin sənədə qayıtmaq imkanı ilə",
            rival: "Hər hesabat üçün yeni cədvəl yığılır, düstur səhvləri gözdən qaçır",
          },
          {
            criterion: "Məlumatın həcmi",
            birsistem: "Yüz minlərlə sətir problem yaratmır",
            rival: "Fayl böyüdükcə ləngiyir və pozulma riski artır",
          },
          {
            criterion: "Qiymət",
            birsistem: "Aylıq abunə və birdəfəlik qurulma xərci",
            rival: "Əlavə xərc yoxdur, amma vaxt və səhv itkisi gizli xərcdir",
          },
        ],
        rivalWins: {
          title: "Excel nə vaxt kifayətdir",
          text: "Bir-iki nəfər işləyirsə, mal çeşidi azdırsa və sənəd dövriyyəsi gündə bir neçə sətirdirsə, Excel tam kifayətdir. Sistemə keçid adətən üçüncü istifadəçi və ya ikinci anbar yaranan anda məna kəsb edir.",
        },
        faq: [
          {
            q: "Excel fayllarımızı köçürə bilərsinizmi?",
            a: "Bəli. Mal kataloqu, kontragentlər, qiymət siyahıları və açılış qalıqları Excel-dən köçürülür. Köçürmədən sonra nəticə üzləşmə ilə yoxlanılır.",
          },
          {
            q: "Excel-i tamamilə tərk etməli olacağıq?",
            a: "Xeyr. Hesabatlar Excel-ə çıxarılır, təhlili orada davam etdirmək olar. Dəyişən şey ilkin məlumatın harada saxlanmasıdır.",
          },
        ],
        seoTitle: "BirSistem və Excel — nə vaxt cədvəldən sistemə keçmək lazımdır",
        seoDescription:
          "Excel ilə ERP arasındakı real fərqlər: çoxistifadəçili iş, dəyişiklik tarixçəsi, anbar qalığı və hesabatlar. Excel-in kifayət etdiyi hallar da göstərilib.",
      },
    },
  },
  {
    slug: "1c",
    copy: {
      az: {
        rival: "1C",
        title: "BirSistem və 1C",
        row: "Quraşdırılan platforma ilə bulud sistemi arasındakı fərq",
        lead: "1C güclü və geniş yayılmış platformadır. Fərq imkanlarda yox, ona sahib olmağın formasında: lisenziya, tərtibatçıdan asılılıq və yeniləmə qaydası.",
        criteria: [
          {
            criterion: "Qurulma müddəti",
            birsistem: "Hazır konfiqurasiya üzərində adətən 2–4 həftə",
            rival: "Konfiqurasiyadan asılı olaraq bir neçə həftədən bir neçə aya qədər",
          },
          {
            criterion: "Dəyişiklik etmək",
            birsistem: "Formalar, marşrutlar və hesabatlar tənzimləmə ilə dəyişilir",
            rival: "Ciddi dəyişikliklər üçün proqramçı və konfiqurasiya dəyişikliyi tələb olunur",
          },
          {
            criterion: "Yeniləmələr",
            birsistem: "Mərkəzi yenilənir, dəyişikliklər itmir",
            rival: "Konfiqurasiya dəyişdirilibsə, yeniləmə ayrıca iş tələb edir",
          },
          {
            criterion: "Giriş",
            birsistem: "Brauzerdən, ayrıca quraşdırma olmadan",
            rival: "Klient proqramı və ya uzaq masaüstü tələb olunur",
          },
          {
            criterion: "Dəstək dili",
            birsistem: "Azərbaycan dilində, yerli komanda",
            rival: "Tərtibatçıdan asılıdır, çox vaxt rus dilində",
          },
          {
            criterion: "Sahiblik xərci",
            birsistem: "Aylıq abunə, server və inzibatçı xərci yoxdur",
            rival: "Lisenziya, server, inzibatçı və müşayiət müqaviləsi",
          },
        ],
        rivalWins: {
          title: "1C nə vaxt daha uyğundur",
          text: "Şirkətin daxilində təcrübəli 1C mütəxəssisi varsa, uçot çox spesifikdirsə və məlumatın mütləq öz serverinizdə qalması tələb olunursa, 1C məntiqli seçimdir. Uzun illər qurulmuş konfiqurasiya da ciddi sərmayədir.",
        },
        faq: [
          {
            q: "1C-dəki məlumatlarımızı köçürmək olurmu?",
            a: "Bəli. Kontragentlər, mal kataloqu, açılış qalıqları və kontragent üzrə borclar köçürülür. Keçmiş dövrlərin nə qədərinin köçürülməsi ayrıca razılaşdırılır.",
          },
          {
            q: "Paralel işləyə bilərikmi?",
            a: "Keçid dövründə bir neçə həftə paralel iş mümkündür. Bu müddətdə hər iki sistemin rəqəmləri tutuşdurulur.",
          },
        ],
        seoTitle: "BirSistem və 1C — qurulma, dəstək və sahiblik xərci",
        seoDescription:
          "1C ilə BirSistem müqayisəsi: qurulma müddəti, dəyişiklik etmək, yeniləmələr, giriş forması, dəstək dili və ümumi sahiblik xərci. 1C-nin üstün olduğu hallar da var.",
      },
    },
  },
  {
    slug: "odoo",
    copy: {
      az: {
        rival: "Odoo",
        title: "BirSistem və Odoo",
        row: "Beynəlxalq platforma ilə yerli həll arasında seçim",
        lead: "Odoo geniş modul ekosistemi olan açıq platformadır. Əsas fərq yerli uçot tələblərinin hazır gəlib-gəlməməsində və dəstəyin kim tərəfindən verilməsindədir.",
        criteria: [
          {
            criterion: "Yerli uçot tələbləri",
            birsistem: "Milli hesablar planı və yerli sənəd formaları hazır gəlir",
            rival: "Lokallaşdırma ayrıca modul və ya xüsusi iş tələb edir",
          },
          {
            criterion: "Elektron qaimə",
            birsistem: "Yerli tələblərə uyğun hazırlanır",
            rival: "Əlavə inteqrasiya işi tələb olunur",
          },
          {
            criterion: "Modul sayı",
            birsistem: "Altı əsas modul, dərin şəkildə qurulmuş",
            rival: "Çox geniş modul kataloqu, keyfiyyət modula görə dəyişir",
          },
          {
            criterion: "Dəstək",
            birsistem: "Birbaşa tərtibatçı komandadan, Azərbaycan dilində",
            rival: "Partnyor şirkət vasitəsilə, səviyyə partnyordan asılıdır",
          },
          {
            criterion: "Uyğunlaşdırma",
            birsistem: "Tənzimləmə ilə, əsas kod paylaşılan qalır",
            rival: "Geniş imkan, amma çox vaxt fərdi inkişaf tələb edir",
          },
          {
            criterion: "Yeniləmə riski",
            birsistem: "Mərkəzi yeniləmə, fərdi dəyişikliklər saxlanılır",
            rival: "Fərdi modullar əsas versiya yenilənəndə sınaqdan keçirilməlidir",
          },
        ],
        rivalWins: {
          title: "Odoo nə vaxt daha uyğundur",
          text: "Bir neçə ölkədə fəaliyyət göstərirsinizsə, çox spesifik proseslər üçün fərdi modul yazmaq niyyətindəsinizsə və daxili IT komandanız varsa, Odoo-nun açıq ekosistemi ciddi üstünlükdür.",
        },
        faq: [
          {
            q: "Odoo-dan köçürmə mümkündürmü?",
            a: "Bəli, məlumat ixracı vasitəsilə. Mal kataloqu, kontragentlər və qalıqlar köçürülür, sonra üzləşmə aparılır.",
          },
          {
            q: "Açıq mənbə üstünlük deyilmi?",
            a: "Açıq mənbə kodu dəyişmək imkanı verir, amma bunun üçün resurs lazımdır. Daxili IT komandası yoxdursa, bu üstünlük praktikada istifadə olunmur.",
          },
        ],
        seoTitle: "BirSistem və Odoo — yerli uçot və dəstək fərqi",
        seoDescription:
          "Odoo ilə BirSistem müqayisəsi: yerli hesablar planı, elektron qaimə, modul dərinliyi, dəstək və yeniləmə riski. Odoo-nun üstün olduğu hallar da göstərilib.",
      },
    },
  },
];

export const COMPARISON_BY_SLUG = new Map(COMPARISONS.map((c) => [c.slug, c]));
