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

  ru: {
    updated: "2026-09-21",
    seoTitle: "Политика конфиденциальности",
    seoDescription:
      "Какие персональные данные собирает сайт BirSistem, как они используются и сколько хранятся.",
    title: "Политика конфиденциальности",
    lead: "Этот документ объясняет, какие данные собираются на сайте birsistem.az, для чего они используются и какие у вас есть права.",
    sections: [
      {
        title: "Какие данные мы собираем",
        body: [
          "Сайт собирает только те данные, которые вы сами отправляете через формы: имя, название компании, номер телефона, e-mail, число сотрудников, сферу деятельности и ваш комментарий.",
          "Кроме того, фиксируется, с какой страницы отправлена заявка, и, если есть, параметры кампании. Это нужно, чтобы понимать источник заявки.",
        ],
      },
      {
        title: "Как мы используем данные",
        body: [
          "Данные используются только для того, чтобы связаться с вами, организовать демо и подготовить предложение.",
          "Мы не продаём ваши данные третьим лицам и не передаём их в рекламных целях.",
        ],
      },
      {
        title: "Срок хранения",
        body: [
          "Данные заявки хранятся не более 24 месяцев после завершения общения, затем удаляются.",
          "Вы можете в любой момент потребовать удалить свои данные — для этого достаточно написать на адрес ниже.",
        ],
      },
      {
        title: "Cookie и аналитика",
        body: [
          "Сайт использует технические cookie, необходимые для его работы. Когда будут подключены инструменты аналитики, этот раздел обновится и у пользователя будет запрошено согласие.",
          "Расчёты на страницах калькуляторов выполняются в вашем браузере и не отправляются на сервер.",
        ],
      },
      {
        title: "Ваши права",
        body: [
          "Вы вправе ознакомиться со своими данными, исправить их или потребовать их удаления.",
          "Для обращений: salam@birsistem.az. Ответ — в течение одного рабочего дня.",
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

  ru: {
    updated: "2026-09-21",
    seoTitle: "Условия использования",
    seoDescription:
      "Условия использования сайта birsistem.az: статус материалов, пределы ответственности за калькуляторы и порядок связи.",
    title: "Условия использования",
    lead: "Пользуясь сайтом, вы принимаете приведённые ниже условия.",
    sections: [
      {
        title: "Материалы сайта",
        body: [
          "Информация на сайте носит ознакомительный характер и сама по себе не является офертой, создающей обязательства.",
          "Конкретные условия — цена, сроки и объём работ — определяются только письменным предложением и договором.",
        ],
      },
      {
        title: "Калькуляторы",
        body: [
          "Калькуляторы на сайте дают предварительное представление и не заменяют официальный расчёт, заключение бухгалтера или налогового консультанта.",
          "Поскольку ставки и правила могут меняться, обязательно уточняйте итоговую цифру у специалиста. Мы не несём ответственности за решения, принятые на основе результатов калькуляторов.",
        ],
      },
      {
        title: "Интеллектуальная собственность",
        body: [
          "Тексты, дизайн и графические элементы сайта принадлежат BirSistem.",
          "Короткое цитирование со ссылкой на источник допускается; полная или существенная перепечатка материалов требует письменного согласия.",
        ],
      },
      {
        title: "Изменения",
        body: [
          "Эти условия могут периодически обновляться. Дата обновления указывается вверху страницы.",
          "По вопросам: salam@birsistem.az.",
        ],
      },
    ],
  },
};
