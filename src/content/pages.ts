import type { Localized } from "@/lib/content";

export type Prose = { title: string; body: string[] };

export type SimplePage = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  lead: string;
  /** Optional long-form body, rendered as sections in the register grid. */
  sections?: Prose[];
};

export const SOLUTIONS_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Hazır həllər — ERP modulları",
    seoDescription:
      "BirSistem-in altı modulu: CRM, anbar, mühasibat, maliyyə, HR və hesabatlar. Hər biri ayrıca işləyir, birlikdə isə sənədi bir dəfə yazdırır.",
    title: "Hazır həllər",
    lead: "Altı modul bir bazada işləyir. İstədiyiniz moduldan başlayın — qalanları sonradan eyni məlumatın üzərinə əlavə olunur, köçürmə təkrarlanmır.",
    sections: [
      {
        title: "Modulları necə seçmək lazımdır",
        body: [
          "Seçimə hansı modulun daha çox funksiyası olduğundan yox, hansı prosesin daha çox vaxt apardığından başlayın. Şirkətlərin əksəriyyətində bu, anbar qalığının dəqiqliyi və satış sənədlərinin sürətidir.",
          "Bir modul işə düşəndən sonra növbətisini əlavə etmək bir neçə gün çəkir, çünki kontragentlər, mallar və hesablar planı artıq sistemdədir.",
        ],
      },
      {
        title: "Modullar bir-biri ilə necə işləyir",
        body: [
          "Satış sənədi anbarda qalığı azaldır, mühasibatda yazılış yaradır, maliyyədə gözlənilən ödəniş kimi görünür və hesabatda gəlirə düşür. Bu zəncir əl ilə qurulmur — sənədin özü onu işə salır.",
          "Ona görə eyni əməliyyat üçün ikinci dəfə məlumat yığmağa ehtiyac qalmır və şöbələr arasındakı fərqlər yox olur.",
        ],
      },
    ],
  },
};

export const SECTORS_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Sektorlar — sahəyə uyğun ERP həlləri",
    seoDescription:
      "Tikinti, restoran, topdan satış, istehsal, pərakəndə, logistika, aptek və xidmət sahələri üçün BirSistem qurulması: hər sahənin öz sənəd dövriyyəsi ilə.",
    title: "Sektorlar",
    lead: "Eyni modullar, fərqli sənədlər. Qurulma sizin sahənizin əməliyyatlarına — obyektə, texnoloji xəritəyə, reysə və ya seriyaya — görə aparılır.",
    sections: [
      {
        title: "Sektor həlli nə deməkdir",
        body: [
          "Sektor həlli ayrıca proqram deyil. Eyni sistemin sizin sahənizə uyğun qurulmuş halıdır: hazır sənəd formaları, hesablar planı, hesabat kəsimləri və rollar.",
          "Bu, qurulma müddətini qısaldır, çünki sıfırdan qurmaq əvəzinə hazır bazadan başlayıb yalnız fərqləri tənzimləyirik.",
        ],
      },
    ],
  },
};

export const TOOLS_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Pulsuz kalkulyatorlar — ƏDV, əmək haqqı, DSMF",
    seoDescription:
      "Biznes üçün pulsuz kalkulyatorlar: ƏDV, əmək haqqı, DSMF, məzuniyyət pulu, xəstəlik vərəqəsi, ERP ROI və kredit. Qeydiyyat tələb olunmur.",
    title: "Pulsuz alətlər",
    lead: "Gündəlik işdə lazım olan hesablamalar. Qeydiyyat yoxdur, məlumat serverə göndərilmir — hesablama brauzerinizdə aparılır.",
    sections: [
      {
        title: "Kalkulyatorlar niyə kifayət etmir",
        body: [
          "Bir hesablama tək halda asandır. Problem hər ay yüzlərlə belə hesablamanın təkrarlanmasında və onların sənədlərlə bağlanmamasındadır.",
          "Sistemdə isə eyni hesablama tabeldən, qaimədən və ya müqavilədən avtomatik gəlir — nəticə həm sürətli, həm də izlənə bilən olur.",
        ],
      },
    ],
  },
};

export const COMPARISON_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Müqayisə — BirSistem, 1C, Excel və Odoo",
    seoDescription:
      "BirSistem ilə 1C, Excel və Odoo arasındakı fərqlər: qurulma müddəti, dəstək, uyğunlaşdırma və sahiblik xərci. Obyektiv müqayisə cədvəlləri.",
    title: "Müqayisə",
    lead: "Seçim adətən üç variant arasında olur: mövcud Excel-də qalmaq, 1C qurmaq və ya beynəlxalq platforma götürmək. Hər birinin güclü tərəfi var — aşağıda fərqləri açıq yazmışıq.",
  },
};

export const ABOUT_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Haqqımızda",
    seoDescription:
      "BirSistem — Azərbaycan biznesi üçün ERP sistemi hazırlayan komanda. Yerli uçot təcrübəsi, Azərbaycan dilində dəstək, sənəd dövriyyəsinə əsaslanan qurulma.",
    title: "Haqqımızda",
    lead: "Biz Azərbaycan şirkətlərinin sənəd dövriyyəsini yaxından tanıyan komandayıq. Məhsulu da elə həmin sənədlərin ətrafında qururuq.",
    sections: [
      {
        title: "Niyə bu işi görürük",
        body: [
          "Bir çox şirkət eyni məlumatı gündə üç dəfə yazır: satışda, anbarda və mühasibatda. Bu təkrar həm vaxt aparır, həm də şöbələr arasında uyğunsuzluq yaradır.",
          "BirSistem məhz bu təkrarı aradan qaldırmaq üçün qurulub. Məqsəd yeni funksiya sayı deyil — bir sənədin bütün zəncir boyunca özü hərəkət etməsidir.",
        ],
      },
      {
        title: "Necə işləyirik",
        body: [
          "Hər layihə söhbətlə başlayır: hansı sənədləri yazırsınız, kim yazır, hansı mərhələdə gecikmə olur. Yalnız bundan sonra sistem qurulur.",
          "Qurulma mərhələsində məlumatınızı özümüz köçürürük və nəticəni üzləşmə ilə yoxlayırıq. Rəqəmlər tutuşmayana qədər iş bitmiş sayılmır.",
        ],
      },
      {
        title: "Dəstək",
        body: [
          "Dəstək Azərbaycan dilindədir və Bakıdakı komanda tərəfindən verilir. Hər müraciətin nömrəsi və cavab müddəti var.",
          "Qanunvericilik dəyişəndə — vergi dərəcələri, hesabat formaları — yeniləmələr mərkəzi qaydada tətbiq olunur.",
        ],
      },
    ],
  },
};

export const CONTACT_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Əlaqə",
    seoDescription:
      "BirSistem ilə əlaqə: telefon, e-poçt, ofis ünvanı və iş saatları. Sualınızı yazın, bir iş günü ərzində cavab verək.",
    title: "Əlaqə",
    lead: "Sualınız varsa yazın və ya zəng edin. Demo sorğusu üçün ayrıca səhifə var — orada bir neçə sual daha soruşuruq ki, görüşə hazır gələk.",
  },
};

export const DEMO_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Demo sorğusu",
    seoDescription:
      "BirSistem demosu üçün sorğu göndərin. Demo hesabı sizin məlumatınızla qurulur, prosesinizi birlikdə keçirik. Bir iş günü ərzində əlaqə saxlayırıq.",
    title: "Demo sorğusu",
    lead: "Formanı doldurun — bir iş günü ərzində zəng edib qısa söhbət təyin edirik. Söhbətdən sonra demo hesabı sizin sənədlərinizlə qurulur.",
  },
};

export const BLOG_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Bloq — ERP, uçot və biznes proseslərinə dair",
    seoDescription:
      "Anbar uçotu, maya dəyəri, debitor borcu və ERP-yə keçid haqqında praktik yazılar. Azərbaycan biznesinin gündəlik məsələləri.",
    title: "Bloq",
    lead: "Praktik yazılar: uçotda tez-tez rast gəlinən səhvlər, sistemə keçid təcrübəsi və rəqəmlərin necə oxunması.",
  },
};

export const PRICING_PAGE: Localized<SimplePage> = {
  az: {
    seoTitle: "Qiymətlər və paketlər",
    seoDescription:
      "BirSistem paketləri: Başlanğıc, Biznes və Müəssisə. Modul dəsti, istifadəçi sayı və dəstək səviyyəsi üzrə fərqlər. Təklif üçün sorğu göndərin.",
    title: "Qiymətlər",
    lead: "Qiymət istifadəçi sayından, seçilən modullardan və qurulmanın həcmindən asılıdır. Ona görə hazır rəqəm yazmırıq — sorğunuza baxıb konkret təklif hazırlayırıq.",
  },
};
