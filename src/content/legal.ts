import type { Localized } from "@/lib/content";
import type { SimplePage } from "./pages";

/**
 * Template legal text. It describes what this marketing site actually does
 * (a contact form writing to a database), but a lawyer should review it and
 * the company's real registration details must replace the placeholders
 * before launch.
 */
export const PRIVACY_PAGE: Localized<SimplePage & { updated: string }> = {
  az: {
    updated: "2026-09-21",
    seoTitle: "Məxfilik siyasəti",
    seoDescription:
      "BirSistem saytında hansı şəxsi məlumatların toplandığı, necə istifadə olunduğu və nə qədər saxlanıldığı barədə məlumat.",
    title: "Məxfilik siyasəti",
    lead: "Bu sənəd birsistem.az saytında hansı məlumatların toplandığını, nə üçün istifadə olunduğunu və onlarla bağlı hüquqlarınızı izah edir.",
    sections: [
      {
        title: "Hansı məlumatları toplayırıq",
        body: [
          "Sayt yalnız sizin özünüzün formalar vasitəsilə göndərdiyiniz məlumatları toplayır: ad, şirkət adı, telefon nömrəsi, e-poçt ünvanı, işçi sayı, fəaliyyət sahəsi və yazdığınız qeyd.",
          "Bundan əlavə, sorğunun hansı səhifədən göndərildiyi və varsa kampaniya parametrləri qeydə alınır. Bu, sorğunun mənbəyini anlamaq üçündür.",
        ],
      },
      {
        title: "Məlumatlardan necə istifadə edirik",
        body: [
          "Məlumatlar yalnız sizinlə əlaqə saxlamaq, demo təşkil etmək və təklif hazırlamaq üçün istifadə olunur.",
          "Məlumatlarınızı üçüncü şəxslərə satmırıq və reklam məqsədilə ötürmürük.",
        ],
      },
      {
        title: "Saxlanma müddəti",
        body: [
          "Sorğu məlumatları əlaqə prosesi bitdikdən sonra ən çoxu 24 ay saxlanılır, sonra silinir.",
          "Siz istənilən vaxt məlumatlarınızın silinməsini tələb edə bilərsiniz — bunun üçün aşağıdakı ünvana yazmaq kifayətdir.",
        ],
      },
      {
        title: "Kuki və analitika",
        body: [
          "Sayt işləməsi üçün zəruri olan texniki kukilərdən istifadə edir. Analitika alətləri qoşulduqda bu bölmə yenilənəcək və istifadəçi razılığı soruşulacaq.",
          "Kalkulyator səhifələrindəki hesablamalar brauzerinizdə aparılır və serverə göndərilmir.",
        ],
      },
      {
        title: "Hüquqlarınız",
        body: [
          "Sizə aid məlumatlara baxmaq, onları düzəltmək və ya silinməsini tələb etmək hüququnuz var.",
          "Müraciət üçün: salam@birsistem.az. Cavab bir iş günü ərzində verilir.",
        ],
      },
    ],
  },
};

export const TERMS_PAGE: Localized<SimplePage & { updated: string }> = {
  az: {
    updated: "2026-09-21",
    seoTitle: "İstifadə şərtləri",
    seoDescription:
      "birsistem.az saytından istifadə şərtləri: məzmunun statusu, kalkulyatorların məsuliyyət həddi və əlaqə qaydaları.",
    title: "İstifadə şərtləri",
    lead: "Saytdan istifadə etməklə aşağıdakı şərtləri qəbul etmiş olursunuz.",
    sections: [
      {
        title: "Saytın məzmunu",
        body: [
          "Saytdakı məlumatlar məhsulun təqdimatı məqsədi daşıyır və özlüyündə öhdəlik yaradan təklif sayılmır.",
          "Konkret şərtlər — qiymət, müddət və işin həcmi — yalnız yazılı təklif və müqavilə ilə müəyyən olunur.",
        ],
      },
      {
        title: "Kalkulyatorlar",
        body: [
          "Saytdakı kalkulyatorlar ilkin təsəvvür yaratmaq üçündür və rəsmi hesablamanı, mühasibin və ya vergi məsləhətçisinin rəyini əvəz etmir.",
          "Dərəcələr və qaydalar dəyişə bildiyi üçün yekun rəqəmi mütləq mütəxəssislə dəqiqləşdirin. Kalkulyator nəticələrinə əsaslanan qərarlara görə məsuliyyət daşımırıq.",
        ],
      },
      {
        title: "Əqli mülkiyyət",
        body: [
          "Saytdakı mətnlər, dizayn və qrafik elementlər BirSistem-ə məxsusdur.",
          "Mənbə göstərilməklə qısa sitat gətirmək mümkündür; məzmunun tam və ya əhəmiyyətli hissəsinin təkrar dərci yazılı razılıq tələb edir.",
        ],
      },
      {
        title: "Dəyişikliklər",
        body: [
          "Bu şərtlər vaxtaşırı yenilənə bilər. Yenilənmə tarixi səhifənin yuxarısında göstərilir.",
          "Suallar üçün: salam@birsistem.az.",
        ],
      },
    ],
  },
};
