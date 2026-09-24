import type { Localized } from "@/lib/content";

export type Prose = { title: string; body: string[] };

export type SimplePage = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  lead: string;
  /** One line under the list heading, where the list needs explaining. */
  listSub?: string;
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
    listSub: "Hər sətirdə modulun nə etdiyi, kimin onunla gündəlik işlədiyi və hansı sənədləri yaratdığı yazılıb. Aşağıdakı etiketlər həmin modulun ən çox işləndiyi sahələri göstərir.",
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
  ru: {
    seoTitle: "Готовые решения — модули ERP",
    seoDescription:
      "Шесть модулей BirSistem: CRM, склад, бухгалтерия, финансы, HR и отчёты. Каждый работает отдельно, а вместе они позволяют вводить документ только один раз.",
    title: "Готовые решения",
    lead: "Шесть модулей работают в одной базе. Начните с любого — остальные позже добавляются поверх тех же данных, без повторного переноса.",
    listSub: "В каждой строке — что делает модуль, кто работает с ним каждый день и какие документы он создаёт. Метки ниже показывают отрасли, где модуль используется чаще всего.",
    sections: [
      {
        title: "Как выбрать модули",
        body: [
          "Начинайте выбор не с того, у какого модуля больше функций, а с того, какой процесс отнимает больше времени. В большинстве компаний это точность складских остатков и скорость оформления документов продаж.",
          "Когда один модуль запущен, добавление следующего занимает несколько дней: контрагенты, номенклатура и план счетов уже в системе.",
        ],
      },
      {
        title: "Как модули работают вместе",
        body: [
          "Документ продажи уменьшает остаток на складе, создаёт проводку в бухгалтерии, отображается в финансах как ожидаемый платёж и попадает в выручку в отчётах. Эту цепочку не нужно выстраивать вручную — её запускает сам документ.",
          "Поэтому не нужно повторно собирать данные для той же операции, и расхождения между отделами исчезают.",
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
  ru: {
    seoTitle: "Отрасли — ERP-решения под вашу сферу",
    seoDescription:
      "Внедрение BirSistem для строительства, ресторанов, оптовой торговли, производства, розницы, логистики, аптек и сферы услуг — с документооборотом каждой отрасли.",
    title: "Отрасли",
    lead: "Те же модули, разные документы. Внедрение строится вокруг операций вашей отрасли — объекта, технологической карты, рейса или серии.",
    sections: [
      {
        title: "Что такое отраслевое решение",
        body: [
          "Отраслевое решение — это не отдельная программа. Это та же система, настроенная под вашу сферу: готовые формы документов, план счетов, разрезы отчётов и роли.",
          "Это сокращает срок внедрения: вместо настройки с нуля мы начинаем с готовой базы и настраиваем только отличия.",
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
  ru: {
    seoTitle: "Бесплатные калькуляторы — НДС, зарплата, ГФСЗ",
    seoDescription:
      "Бесплатные калькуляторы для бизнеса в Азербайджане: НДС, зарплата, взносы в ГФСЗ, отпускные, больничный, ROI от ERP и кредит. Без регистрации.",
    title: "Бесплатные инструменты",
    lead: "Расчёты, которые нужны в ежедневной работе. Без регистрации, данные не отправляются на сервер — расчёт выполняется в вашем браузере.",
    sections: [
      {
        title: "Почему калькуляторов недостаточно",
        body: [
          "Один расчёт по отдельности — это просто. Проблема в том, что таких расчётов каждый месяц сотни и они не связаны с документами.",
          "В системе тот же расчёт автоматически берётся из табеля, накладной или договора — результат получается и быстрым, и прослеживаемым.",
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
  ru: {
    seoTitle: "Сравнение — BirSistem, 1С, Excel и Odoo",
    seoDescription:
      "Чем BirSistem отличается от 1С, Excel и Odoo: срок внедрения, поддержка, адаптация и стоимость владения. Объективные сравнительные таблицы.",
    title: "Сравнение",
    lead: "Обычно выбор стоит между тремя вариантами: остаться в Excel, внедрить 1С или взять международную платформу. У каждого есть сильные стороны — ниже мы открыто описали различия.",
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
  ru: {
    seoTitle: "О нас",
    seoDescription:
      "BirSistem — команда, которая создаёт ERP-систему для бизнеса в Азербайджане. Местный опыт учёта, поддержка на родном языке, внедрение вокруг документооборота.",
    title: "О нас",
    lead: "Мы — команда, которая хорошо знает документооборот азербайджанских компаний. И продукт строим вокруг этих самых документов.",
    sections: [
      {
        title: "Зачем мы это делаем",
        body: [
          "Многие компании вводят одни и те же данные трижды в день: в продажах, на складе и в бухгалтерии. Это отнимает время и порождает расхождения между отделами.",
          "BirSistem создан именно для того, чтобы убрать это дублирование. Цель — не количество новых функций, а то, чтобы документ сам проходил по всей цепочке.",
        ],
      },
      {
        title: "Как мы работаем",
        body: [
          "Каждый проект начинается с разговора: какие документы вы оформляете, кто их оформляет, на каком этапе возникают задержки. Только после этого настраивается система.",
          "На этапе внедрения мы сами переносим ваши данные и проверяем результат сверкой. Работа не считается законченной, пока цифры не сойдутся.",
        ],
      },
      {
        title: "Поддержка",
        body: [
          "Поддержку оказывает команда в Баку, на азербайджанском и русском языках. У каждого обращения есть номер и срок ответа.",
          "Когда меняется законодательство — налоговые ставки, формы отчётности, — обновления применяются централизованно.",
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
  ru: {
    seoTitle: "Контакты",
    seoDescription:
      "Контакты BirSistem: телефон, e-mail, адрес офиса и часы работы. Напишите нам — ответим в течение одного рабочего дня.",
    title: "Контакты",
    lead: "Если есть вопрос — напишите или позвоните. Для запроса демо есть отдельная страница: там мы задаём ещё несколько вопросов, чтобы прийти на встречу подготовленными.",
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
  ru: {
    seoTitle: "Запрос демо",
    seoDescription:
      "Запросите демо BirSistem. Демо-аккаунт настраивается на ваших данных, и мы вместе проходим ваш процесс. Свяжемся в течение одного рабочего дня.",
    title: "Запрос демо",
    lead: "Заполните форму — в течение рабочего дня мы позвоним и назначим короткий разговор. После него демо-аккаунт настраивается на ваших документах.",
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
  ru: {
    seoTitle: "Блог — об ERP, учёте и бизнес-процессах",
    seoDescription:
      "Практические статьи о складском учёте, себестоимости, дебиторской задолженности и переходе на ERP. Повседневные вопросы бизнеса в Азербайджане.",
    title: "Блог",
    lead: "Практические статьи: частые ошибки в учёте, опыт перехода на систему и как читать цифры.",
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
  ru: {
    seoTitle: "Цены и тарифы",
    seoDescription:
      "Тарифы BirSistem: Старт, Бизнес и Корпоративный. Различия по набору модулей, числу пользователей и уровню поддержки. Отправьте запрос на предложение.",
    title: "Цены",
    lead: "Цена зависит от числа пользователей, выбранных модулей и объёма внедрения. Поэтому мы не пишем готовую цифру — смотрим на ваш запрос и готовим конкретное предложение.",
  },
};
