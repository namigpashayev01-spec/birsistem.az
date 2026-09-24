import type { Faq, Localized } from "@/lib/content";
import type { ModuleSlug } from "./modules";

export type HomeCopy = {
  seoTitle: string;
  seoDescription: string;

  hero: {
    /** Short marker above the headline, set beside the gold star. */
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    /** The one figure surfaced on the hero itself, in the accent pill. */
    badgeValue: string;
    badgeLabel: string;
  };

  /** Three short promises directly under the hero. */
  highlights: { title: string; text: string }[];

  /** One document moving through the system — the product's whole argument. */
  flow: {
    label: string;
    title: string;
    sub: string;
    doc: { title: string; number: string; customer: string; totalLabel: string; total: string };
    /** Line under the document: the only thing a person types. */
    docNote: string;
    steps: { module: ModuleSlug; name: string; effect: string }[];
  };

  problems: {
    label: string;
    title: string;
    sub: string;
    items: { title: string; text: string; module: ModuleSlug }[];
  };

  modules: {
    label: string;
    title: string;
    sub: string;
  };

  /** The dark band: three real screens with a line of explanation each. */
  tour: {
    label: string;
    title: string;
    sub: string;
    screens: { screen: ModuleSlug; chip: string; title: string; text: string; checks: string[] }[];
  };

  sectors: {
    label: string;
    title: string;
    sub: string;
  };

  /** The band that meets a buyer where they already work: Excel, 1C or Odoo. */
  migration: {
    label: string;
    title: string;
    sub: string;
    /** The link under each alternative, e.g. "BirSistem ilə müqayisə". */
    linkLabel: string;
  };

  steps: {
    label: string;
    title: string;
    sub: string;
    items: { title: string; text: string; duration: string }[];
  };

  proof: {
    label: string;
    title: string;
    sub: string;
    checks: { title: string; text: string }[];
    note: string;
  };

  faq: {
    label: string;
    title: string;
    items: Faq[];
  };

  close: {
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    stamp: string;
  };
};

export const HOME: Localized<HomeCopy> = {
  az: {
    seoTitle: "BirSistem — Azərbaycan biznesi üçün ERP sistemi",
    seoDescription:
      "Satış, anbar, mühasibat, maliyyə və HR bir ERP sistemində. Sənəd bir dəfə yazılır, bütün modullarda işləyir. Yerli komanda, 2–4 həftəyə qurulma. Demo sorğusu göndərin.",

    hero: {
      eyebrow: "Azərbaycan biznesi üçün ERP",
      h1: "Satış, anbar və mühasibat bir ERP sistemində",
      lead: "BirSistem sənədi bir dəfə yazdırır. Satış qaiməsi anbardan malı silir, mühasibat yazılışını yaradır və rəhbərin panelindəki rəqəmi eyni anda yeniləyir.",
      primaryCta: "Demo sorğusu göndər",
      secondaryCta: "Hazır həllərə bax",
      badgeValue: "6",
      badgeLabel: "modul, bir baza",
    },

    highlights: [
      {
        title: "Öyrənmək asandır",
        text: "İnterfeys Azərbaycan dilindədir və gündəlik işin ardıcıllığına görə qurulub. Komanda bir neçə gündə öyrəşir.",
      },
      {
        title: "Hər yerdən giriş",
        text: "Brauzerdən işləyir — ofisdə, anbarda və ya yolda. Ayrıca proqram quraşdırmağa ehtiyac yoxdur.",
      },
      {
        title: "Bir baza, bir həqiqət",
        text: "Satış, anbar və mühasibat eyni məlumatı görür. Şöbələr arasında uyğunsuzluq yaranmır.",
      },
    ],

    flow: {
      label: "Necə işləyir",
      title: "Bir qaimə, dörd modul, bir dəfə yazılış",
      sub: "Satış meneceri qaiməni yazır. Ondan sonrakı hər şey sistemin öz işidir — heç kim eyni məlumatı ikinci dəfə daxil etmir.",
      doc: {
        title: "Qaimə",
        number: "№ 1042",
        customer: "Alfa Ticarət MMC",
        totalLabel: "Cəmi",
        total: "1 180,00 AZN",
      },
      docNote: "Menecer yalnız bunu yazır. Aşağıdakı dörd nəticə sistemin öz işidir.",
      steps: [
        { module: "anbar", name: "Anbar", effect: "Qalıq 12 ədəd azalır, rezerv bağlanır" },
        { module: "muhasibat", name: "Mühasibat", effect: "Yazılış qurulur, e-qaimə hazırlanır" },
        { module: "maliyye", name: "Maliyyə", effect: "Gözlənilən ödəniş təqvimə düşür" },
        { module: "hesabatlar", name: "Hesabatlar", effect: "Gəlir və marja yenilənir" },
      ],
    },

    problems: {
      label: "Problem",
      title: "Problem proqramda deyil, proqramların sayındadır",
      sub: "Aşağıdakılardan biri tanış gəlirsə, məsələ bir modulun çatışmamasında yox, modulların bir-birini görməməsindədir.",
      items: [
        {
          title: "Qalıq telefonla soruşulur",
          text: "Satış meneceri anbara zəng edir, cavab gələnə qədər müştəri xəttdə gözləyir.",
          module: "anbar",
        },
        {
          title: "Eyni qaimə üç dəfə yazılır",
          text: "Satışda bir dəfə, anbarda bir dəfə, mühasibatda bir dəfə. Üç rəqəm heç vaxt tam üst-üstə düşmür.",
          module: "muhasibat",
        },
        {
          title: "Borc ay sonunda üzə çıxır",
          text: "Kimin nə qədər borcu olduğu yalnız üzləşmə zamanı bilinir, pul isə artıq donub.",
          module: "maliyye",
        },
        {
          title: "Hesabat gecikir",
          text: "Rəhbər keçən ayın rəqəmini bu ayın ortasında görür — qərar vermək üçün gec olur.",
          module: "hesabatlar",
        },
      ],
    },

    modules: {
      label: "Hazır həllər",
      title: "Altı modul, bir baza, bir giriş",
      sub: "Hər modul ayrıca işləyə bilər, amma dəyəri birlikdə verir: bir sənəd bütün zəncir boyunca özü hərəkət edir.",
    },

    tour: {
      label: "Sistemin içi",
      title: "Gündəlik iş belə görünür",
      sub: "Sistemin ən işlək üç modulu. Solda modulun həll etdiyi iş, sağda onun sizə hazır verdiyi sənəd və hesabatlar.",
      screens: [
        {
          screen: "anbar",
          chip: "Anbar",
          title: "Anbar qalığı real vaxtda",
          text: "Satış meneceri ümumi qalığı yox, rezervdən sonra satıla bilən qalığı görür. Minimumdan aşağı düşən mal ayrıca siyahıya düşür.",
          checks: [
            "Çoxanbarlı qalıq və transfer",
            "Barkodla sayım",
            "Partiya və yararlılıq müddəti",
            "Real maya dəyəri",
          ],
        },
        {
          screen: "muhasibat",
          chip: "Mühasibat",
          title: "E-qaimə və avtomatik yazılış",
          text: "Sənəd yazılan anda mühasibat yazılışı qurulur, e-qaimənin statusu isə göndərildi, qəbul və imtina üzrə izlənir.",
          checks: [
            "Elektron qaimə-faktura",
            "Avtomatik mühasibat yazılışı",
            "ƏDV bazasının formalaşması",
            "Ay bağlanışı nəzarət siyahısı",
          ],
        },
        {
          screen: "maliyye",
          chip: "Maliyyə",
          title: "Ödəniş təqvimi bir ekranda",
          text: "Bu həftə nə gələcək, nə ödəniləcək və həftə sonunda kassada nə qalacaq — üç rəqəm, bir baxış.",
          checks: [
            "Kassa və bank hesabları",
            "Ödəniş təsdiqi marşrutu",
            "Borc-alacaq və kredit limiti",
            "Büdcə və plan-fakt",
          ],
        },
      ],
    },

    sectors: {
      label: "Sektorlar",
      title: "Sahənizi seçin — qurulma ona görə aparılır",
      sub: "Tikintidə obyekt, restoranda texnoloji xəritə, aptekdə seriya. Eyni modullar, amma sizin sənəd dövriyyənizə uyğun qurulmuş halda.",
    },

    migration: {
      label: "Keçid",
      title: "Excel-dən, yoxsa 1C-dən gəlirsiniz?",
      sub: "Keçidin nəyi dəyişdiyini əvvəlcədən bilin. Hər müqayisə həm də alternativin sizin üçün daha yaxşı qaldığı halları göstərir.",
      linkLabel: "Müqayisəyə bax",
    },

    steps: {
      label: "Necə başlayır",
      title: "Sorğudan işlək sistemə dörd addım",
      sub: "Addımlar ardıcıl gedir və hər birinin sonunda sizdə əlinizdə qalan konkret bir nəticə olur.",
      items: [
        {
          title: "Sorğu və söhbət",
          text: "30 dəqiqəlik söhbətdə hazırkı proseslərinizi və hansı sənədlərlə işlədiyinizi öyrənirik.",
          duration: "1 gün",
        },
        {
          title: "Demo, sizin sənədlərinizlə",
          text: "Sizin məlumatınızla qurulmuş demo hesabda prosesinizi birlikdə keçirik.",
          duration: "3–5 gün",
        },
        {
          title: "Qurulma və köçürmə",
          text: "Hesablar planı, anbarlar, qiymət siyahıları və açılış qalıqları köçürülür, rollar təyin edilir.",
          duration: "2–4 həftə",
        },
        {
          title: "İşə salma və dəstək",
          text: "Komanda təlim keçir, ilk ay sıx müşayiət olunur, sonra daimi dəstəyə keçilir.",
          duration: "davamlı",
        },
      ],
    },

    proof: {
      label: "Yoxlama",
      title: "Sözə yox, öz sənədinizə baxın",
      sub: "Demo zamanı hazır nümunə göstərmirik. Sizin real qaimənizi, real qiymət siyahınızı və real anbar qalığınızı sistemə salıb birlikdə yoxlayırıq.",
      checks: [
        {
          title: "Öz qaimənizi yazın",
          text: "Adi bir satış sənədinizi sistemdə yaradın və anbar qalığının, mühasibat yazılışının necə dəyişdiyini görün.",
        },
        {
          title: "Öz hesabatınızı çıxarın",
          text: "Hazırda Excel-də yığdığınız hesabatı sistemdən alın və rəqəmləri tutuşdurun.",
        },
        {
          title: "Ən çətin halınızı verin",
          text: "Qaytarma, valyuta fərqi, endirim və ya çoxanbarlı transfer — prosesinizin ən dolaşıq yerini demoda yoxlayın.",
        },
      ],
      note: "Demo hesabı sizin məlumatınızla qurulur və istifadədən sonra silinir.",
    },

    faq: {
      label: "Suallar",
      title: "Tez-tez verilən suallar",
      items: [
        {
          q: "1C-dən və ya Excel-dən keçid nə qədər çəkir?",
          a: "Orta ölçülü şirkətdə qurulma və məlumat köçürülməsi adətən 2–4 həftə çəkir. Müddət anbar sayından, məhsul kataloqunun həcmindən və keçmiş dövrlərin nə qədərinin köçürülməsindən asılıdır.",
        },
        {
          q: "Məlumatlarımız harada saxlanılır?",
          a: "Standart variant bulud hostinqidir. Tələb olunarsa, sistem sizin öz serverinizdə də qurula bilər — bu halda texniki tələblər əvvəlcədən razılaşdırılır.",
        },
        {
          q: "Bütün modulları birdən almaq mütləqdirmi?",
          a: "Xeyr. Adətən ən ağrılı sahədən başlanır — çox vaxt anbar və satışdan — qalan modullar sonradan eyni bazaya əlavə olunur.",
        },
        {
          q: "Sistem bizim prosesimizə uyğunlaşdırıla bilirmi?",
          a: "Sənəd formaları, təsdiq marşrutları, hesablar planı və hesabat kəsimləri qurulma mərhələsində tənzimlənir. Daha dərin dəyişikliklər ayrıca iş kimi qiymətləndirilir.",
        },
        {
          q: "İnternet kəsiləndə iş dayanırmı?",
          a: "Kassa və satış nöqtələri oflayn rejimdə işləməyə davam edir, əlaqə bərpa olunanda məlumat mərkəzə göndərilir. Ofis işi üçün internet tələb olunur.",
        },
        {
          q: "Dəstək necə işləyir?",
          a: "Dəstək Azərbaycan dilindədir, telefon və yazışma ilə. Hər müraciətin nömrəsi və cavab müddəti var, təcili hallar üçün ayrıca kanal verilir.",
        },
      ],
    },

    close: {
      title: "Prosesinizi demoda yoxlayın",
      text: "Bir söhbət və bir demo — sonra sistemin sizə uyğun olub-olmadığını rəqəmlərlə özünüz görəcəksiniz.",
      primaryCta: "Demo sorğusu göndər",
      secondaryCta: "Qiymət təklifi alın",
      stamp: "Yerli komanda",
    },
  },

  ru: {
    seoTitle: "BirSistem — ERP-система для бизнеса в Азербайджане",
    seoDescription:
      "Продажи, склад, бухгалтерия, финансы и HR в одной ERP-системе. Документ вводится один раз и работает во всех модулях. Местная команда, внедрение за 2–4 недели.",

    hero: {
      eyebrow: "ERP для бизнеса в Азербайджане",
      h1: "Продажи, склад и бухгалтерия в одной ERP-системе",
      lead: "В BirSistem документ вводится один раз. Накладная на продажу списывает товар со склада, создаёт бухгалтерскую проводку и одновременно обновляет цифру на панели руководителя.",
      primaryCta: "Запросить демо",
      secondaryCta: "Смотреть решения",
      badgeValue: "6",
      badgeLabel: "модулей, одна база",
    },

    highlights: [
      {
        title: "Легко освоить",
        text: "Интерфейс выстроен по порядку ежедневной работы. Команда осваивается за несколько дней.",
      },
      {
        title: "Доступ откуда угодно",
        text: "Работает в браузере — в офисе, на складе или в дороге. Ничего устанавливать не нужно.",
      },
      {
        title: "Одна база — одна правда",
        text: "Продажи, склад и бухгалтерия видят одни и те же данные. Расхождений между отделами не возникает.",
      },
    ],

    flow: {
      label: "Как это работает",
      title: "Одна накладная, четыре модуля, один ввод",
      sub: "Менеджер по продажам выписывает накладную. Всё остальное система делает сама — никто не вводит те же данные второй раз.",
      doc: {
        title: "Накладная",
        number: "№ 1042",
        customer: "Alfa Ticarət MMC",
        totalLabel: "Итого",
        total: "1 180,00 AZN",
      },
      docNote: "Менеджер вводит только это. Четыре результата ниже система делает сама.",
      steps: [
        { module: "anbar", name: "Склад", effect: "Остаток уменьшается на 12 шт., резерв закрывается" },
        { module: "muhasibat", name: "Бухгалтерия", effect: "Формируется проводка, готовится э-счёт-фактура" },
        { module: "maliyye", name: "Финансы", effect: "Ожидаемый платёж попадает в календарь" },
        { module: "hesabatlar", name: "Отчёты", effect: "Обновляются выручка и маржа" },
      ],
    },

    problems: {
      label: "Проблема",
      title: "Проблема не в программе, а в количестве программ",
      sub: "Если что-то из этого знакомо, дело не в нехватке модуля, а в том, что модули не видят друг друга.",
      items: [
        {
          title: "Остаток узнают по телефону",
          text: "Менеджер звонит на склад, а клиент ждёт на линии, пока не придёт ответ.",
          module: "anbar",
        },
        {
          title: "Одну накладную вводят трижды",
          text: "Один раз в продажах, один раз на складе, один раз в бухгалтерии. Три цифры никогда полностью не совпадают.",
          module: "muhasibat",
        },
        {
          title: "Долги всплывают в конце месяца",
          text: "Кто сколько должен, выясняется только при сверке, а деньги к тому времени уже заморожены.",
          module: "maliyye",
        },
        {
          title: "Отчёт опаздывает",
          text: "Руководитель видит цифры прошлого месяца в середине текущего — для решения уже поздно.",
          module: "hesabatlar",
        },
      ],
    },

    modules: {
      label: "Готовые решения",
      title: "Шесть модулей, одна база, один вход",
      sub: "Каждый модуль может работать отдельно, но ценность дают вместе: один документ сам проходит по всей цепочке.",
    },

    tour: {
      label: "Внутри системы",
      title: "Так выглядит ежедневная работа",
      sub: "Три самых востребованных модуля. Слева — задача, которую решает модуль, справа — готовые документы и отчёты, которые он даёт.",
      screens: [
        {
          screen: "anbar",
          chip: "Склад",
          title: "Складские остатки в реальном времени",
          text: "Менеджер видит не общий остаток, а доступный к продаже после резерва. Товар ниже минимума попадает в отдельный список.",
          checks: [
            "Остатки по нескольким складам и перемещения",
            "Инвентаризация по штрихкоду",
            "Партии и сроки годности",
            "Фактическая себестоимость",
          ],
        },
        {
          screen: "muhasibat",
          chip: "Бухгалтерия",
          title: "Э-счёт-фактура и автоматические проводки",
          text: "Проводка формируется в момент записи документа, а статус э-счёт-фактуры отслеживается: отправлена, принята, отклонена.",
          checks: [
            "Электронная счёт-фактура",
            "Автоматические бухгалтерские проводки",
            "Формирование базы НДС",
            "Чек-лист закрытия месяца",
          ],
        },
        {
          screen: "maliyye",
          chip: "Финансы",
          title: "Платёжный календарь на одном экране",
          text: "Что поступит на этой неделе, что нужно оплатить и сколько останется в кассе к концу недели — три цифры, один взгляд.",
          checks: [
            "Кассы и банковские счета",
            "Маршрут согласования платежей",
            "Дебиторка, кредиторка и кредитный лимит",
            "Бюджет и план-факт",
          ],
        },
      ],
    },

    sectors: {
      label: "Отрасли",
      title: "Выберите отрасль — внедрение идёт под неё",
      sub: "В строительстве — объект, в ресторане — технологическая карта, в аптеке — серия. Те же модули, но настроенные под ваш документооборот.",
    },

    migration: {
      label: "Переход",
      title: "Переходите с Excel или с 1С?",
      sub: "Узнайте заранее, что изменит переход. Каждое сравнение показывает и случаи, когда альтернатива остаётся для вас лучшим выбором.",
      linkLabel: "Смотреть сравнение",
    },

    steps: {
      label: "Как начать",
      title: "Четыре шага от заявки до рабочей системы",
      sub: "Шаги идут по порядку, и после каждого у вас на руках остаётся конкретный результат.",
      items: [
        {
          title: "Заявка и разговор",
          text: "За 30 минут разговора узнаём ваши текущие процессы и документы, с которыми вы работаете.",
          duration: "1 день",
        },
        {
          title: "Демо на ваших документах",
          text: "Проходим ваш процесс вместе в демо-аккаунте, настроенном на ваших данных.",
          duration: "3–5 дней",
        },
        {
          title: "Настройка и перенос данных",
          text: "Переносим план счетов, склады, прайс-листы и начальные остатки, назначаем роли.",
          duration: "2–4 недели",
        },
        {
          title: "Запуск и поддержка",
          text: "Команда проходит обучение, первый месяц мы плотно сопровождаем работу, затем — постоянная поддержка.",
          duration: "постоянно",
        },
      ],
    },

    proof: {
      label: "Проверка",
      title: "Верьте не словам, а своим документам",
      sub: "На демо мы не показываем готовый пример. Мы загружаем в систему вашу реальную накладную, реальный прайс-лист и реальные остатки и проверяем вместе.",
      checks: [
        {
          title: "Выпишите свою накладную",
          text: "Создайте в системе обычный документ продажи и посмотрите, как меняются складской остаток и проводка.",
        },
        {
          title: "Получите свой отчёт",
          text: "Выгрузите из системы отчёт, который сейчас собираете в Excel, и сверьте цифры.",
        },
        {
          title: "Дайте самый сложный случай",
          text: "Возврат, курсовая разница, скидка или перемещение между складами — проверьте на демо самое запутанное место процесса.",
        },
      ],
      note: "Демо-аккаунт настраивается на ваших данных и удаляется после использования.",
    },

    faq: {
      label: "Вопросы",
      title: "Частые вопросы",
      items: [
        {
          q: "Сколько занимает переход с 1С или Excel?",
          a: "В компании среднего размера настройка и перенос данных обычно занимают 2–4 недели. Срок зависит от количества складов, объёма номенклатуры и того, сколько прошлых периодов нужно перенести.",
        },
        {
          q: "Где хранятся наши данные?",
          a: "Стандартный вариант — облачный хостинг. При необходимости систему можно развернуть на вашем собственном сервере — технические требования в этом случае согласуются заранее.",
        },
        {
          q: "Нужно ли покупать все модули сразу?",
          a: "Нет. Обычно начинают с самого болезненного участка — чаще всего со склада и продаж, — а остальные модули позже добавляются в ту же базу.",
        },
        {
          q: "Можно ли адаптировать систему под наш процесс?",
          a: "Формы документов, маршруты согласования, план счетов и разрезы отчётов настраиваются на этапе внедрения. Более глубокие изменения оцениваются как отдельная работа.",
        },
        {
          q: "Останавливается ли работа, если пропал интернет?",
          a: "Кассы и точки продаж продолжают работать офлайн, а при восстановлении связи данные отправляются в центр. Для офисной работы нужен интернет.",
        },
        {
          q: "Как работает поддержка?",
          a: "Поддержка на азербайджанском и русском языках, по телефону и в переписке. У каждого обращения есть номер и срок ответа, для срочных случаев выделен отдельный канал.",
        },
      ],
    },

    close: {
      title: "Проверьте свой процесс на демо",
      text: "Один разговор и одно демо — и вы сами по цифрам увидите, подходит ли вам система.",
      primaryCta: "Запросить демо",
      secondaryCta: "Получить предложение",
      stamp: "Местная команда",
    },
  },
};
