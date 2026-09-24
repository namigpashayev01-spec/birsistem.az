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
      ru: {
        rival: "Excel",
        title: "BirSistem и Excel",
        row: "Когда пора переходить с таблиц на систему",
        lead: "Excel — неплохой инструмент, просто он не предназначен для многопользовательского учёта. Разница не в функциях, а в том, что один файл одновременно меняют несколько человек.",
        criteria: [
          {
            criterion: "Несколько пользователей одновременно",
            birsistem: "У каждого пользователя свой вход и права, изменения не конфликтуют",
            rival: "Файл пересылается, версии расходятся, последняя верная версия теряется",
          },
          {
            criterion: "Кто что изменил",
            birsistem: "Для каждого документа хранится журнал создания и изменений",
            rival: "Истории изменений нет; если формулу случайно удалили, этого никто не узнает",
          },
          {
            criterion: "Складские остатки",
            birsistem: "Остаток обновляется в момент записи документа, резерв учитывается",
            rival: "Остаток правится вручную, расхождения инвентаризации повторяются каждый месяц",
          },
          {
            criterion: "Отчёты",
            birsistem: "Готовые разрезы с переходом к первичному документу",
            rival: "Под каждый отчёт собирается новая таблица, ошибки в формулах остаются незамеченными",
          },
          {
            criterion: "Объём данных",
            birsistem: "Сотни тысяч строк — не проблема",
            rival: "С ростом файла он тормозит и растёт риск повреждения",
          },
          {
            criterion: "Цена",
            birsistem: "Ежемесячная подписка и разовая стоимость внедрения",
            rival: "Дополнительных расходов нет, но потери времени и ошибки — скрытая цена",
          },
        ],
        rivalWins: {
          title: "Когда Excel достаточно",
          text: "Если работают один-два человека, ассортимент небольшой, а документооборот — несколько строк в день, Excel вполне достаточно. Переход на систему обычно имеет смысл, когда появляется третий пользователь или второй склад.",
        },
        faq: [
          {
            q: "Сможете перенести наши файлы Excel?",
            a: "Да. Каталог товаров, контрагенты, прайс-листы и начальные остатки переносятся из Excel. После переноса результат проверяется сверкой.",
          },
          {
            q: "Придётся полностью отказаться от Excel?",
            a: "Нет. Отчёты выгружаются в Excel, и анализ можно продолжать там. Меняется лишь то, где хранятся исходные данные.",
          },
        ],
        seoTitle: "BirSistem и Excel — когда переходить с таблиц на систему",
        seoDescription:
          "Реальные различия между Excel и ERP: многопользовательская работа, история изменений, складские остатки и отчёты. Показаны и случаи, когда Excel достаточно.",
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
      ru: {
        rival: "1С",
        title: "BirSistem и 1С",
        row: "Чем устанавливаемая платформа отличается от облачной системы",
        lead: "1С — мощная и широко распространённая платформа. Разница не в возможностях, а в форме владения: лицензии, зависимость от разработчика и порядок обновлений.",
        criteria: [
          {
            criterion: "Срок внедрения",
            birsistem: "Обычно 2–4 недели на готовой конфигурации",
            rival: "От нескольких недель до нескольких месяцев в зависимости от конфигурации",
          },
          {
            criterion: "Внесение изменений",
            birsistem: "Формы, маршруты и отчёты меняются настройкой",
            rival: "Для серьёзных изменений нужен программист и изменение конфигурации",
          },
          {
            criterion: "Обновления",
            birsistem: "Обновляется централизованно, доработки не теряются",
            rival: "Если конфигурация изменена, обновление требует отдельной работы",
          },
          {
            criterion: "Доступ",
            birsistem: "Из браузера, без установки",
            rival: "Нужен клиент или удалённый рабочий стол",
          },
          {
            criterion: "Поддержка",
            birsistem: "Местная команда разработчика, на азербайджанском и русском",
            rival: "Зависит от партнёра-внедренца",
          },
          {
            criterion: "Стоимость владения",
            birsistem: "Ежемесячная подписка, без расходов на сервер и администратора",
            rival: "Лицензии, сервер, администратор и договор сопровождения",
          },
        ],
        rivalWins: {
          title: "Когда 1С подходит лучше",
          text: "Если в компании есть опытный специалист по 1С, учёт очень специфичен и данные обязательно должны оставаться на вашем сервере, 1С — логичный выбор. Конфигурация, которую настраивали годами, — тоже серьёзная инвестиция.",
        },
        faq: [
          {
            q: "Можно ли перенести наши данные из 1С?",
            a: "Да. Переносятся контрагенты, каталог товаров, начальные остатки и задолженности по контрагентам. Сколько прошлых периодов переносить, согласуется отдельно.",
          },
          {
            q: "Можно ли работать параллельно?",
            a: "В переходный период возможна параллельная работа в течение нескольких недель. За это время цифры обеих систем сверяются.",
          },
        ],
        seoTitle: "BirSistem и 1С — внедрение, поддержка и стоимость владения",
        seoDescription:
          "Сравнение 1С и BirSistem: срок внедрения, доработки, обновления, способ доступа, поддержка и полная стоимость владения. Есть и случаи, где 1С сильнее.",
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
      ru: {
        rival: "Odoo",
        title: "BirSistem и Odoo",
        row: "Выбор между международной платформой и местным решением",
        lead: "Odoo — открытая платформа с широкой экосистемой модулей. Главное различие — есть ли из коробки поддержка местных требований учёта и кто оказывает поддержку.",
        criteria: [
          {
            criterion: "Местные требования учёта",
            birsistem: "Национальный план счетов и местные формы документов уже встроены",
            rival: "Локализация требует отдельного модуля или доработки",
          },
          {
            criterion: "Электронная счёт-фактура",
            birsistem: "Готовится по местным требованиям",
            rival: "Нужна дополнительная интеграция",
          },
          {
            criterion: "Количество модулей",
            birsistem: "Шесть основных модулей, глубоко проработанных",
            rival: "Очень широкий каталог модулей, качество зависит от модуля",
          },
          {
            criterion: "Поддержка",
            birsistem: "Напрямую от команды разработчика, на азербайджанском и русском",
            rival: "Через партнёрскую компанию, уровень зависит от партнёра",
          },
          {
            criterion: "Адаптация",
            birsistem: "Настройкой, основной код остаётся общим",
            rival: "Широкие возможности, но часто нужна индивидуальная разработка",
          },
          {
            criterion: "Риск при обновлении",
            birsistem: "Централизованное обновление, индивидуальные настройки сохраняются",
            rival: "Собственные модули нужно тестировать при каждом обновлении основной версии",
          },
        ],
        rivalWins: {
          title: "Когда Odoo подходит лучше",
          text: "Если вы работаете в нескольких странах, планируете писать собственные модули под очень специфичные процессы и у вас есть своя IT-команда, открытая экосистема Odoo — серьёзное преимущество.",
        },
        faq: [
          {
            q: "Возможен ли перенос из Odoo?",
            a: "Да, через экспорт данных. Переносятся каталог товаров, контрагенты и остатки, затем проводится сверка.",
          },
          {
            q: "Разве открытый код — не преимущество?",
            a: "Открытый код даёт возможность менять систему, но для этого нужны ресурсы. Если собственной IT-команды нет, на практике это преимущество не используется.",
          },
        ],
        seoTitle: "BirSistem и Odoo — местный учёт и поддержка",
        seoDescription:
          "Сравнение Odoo и BirSistem: местный план счетов, электронная счёт-фактура, глубина модулей, поддержка и риски обновлений. Показано, где Odoo сильнее.",
      },
    },
  },
];

export const COMPARISON_BY_SLUG = new Map(COMPARISONS.map((c) => [c.slug, c]));
