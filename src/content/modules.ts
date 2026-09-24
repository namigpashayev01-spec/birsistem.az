import type { Faq, Feature, Localized } from "@/lib/content";
import type { StaticPathname } from "@/i18n/routing";

export type ModuleSlug =
  | "crm"
  | "anbar"
  | "muhasibat"
  | "maliyye"
  | "hr"
  | "hesabatlar";

export type ModuleCopy = {
  /** Short brand-level name, used in navigation and register rows. */
  name: string;
  /** Full page heading. */
  title: string;
  /** One line in the register: what this module actually does. */
  row: string;
  /** Who works in it day to day. */
  audience: string;
  /** Which documents it produces — the language a finance director thinks in. */
  documents: string;
  /** Opening paragraph of the module page. */
  lead: string;
  features: Feature[];
  /** The three questions a buyer asks before booking a demo. */
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export type ModuleEntry = {
  slug: ModuleSlug;
  href: StaticPathname;
  relatedSectors: string[];
  copy: Localized<ModuleCopy>;
};

export const MODULES: ModuleEntry[] = [
  {
    slug: "crm",
    href: "/crm",
    relatedSectors: ["topdansatis", "xidmet", "tikinti"],
    copy: {
      az: {
        name: "CRM",
        title: "Satış və müştəri idarəetməsi",
        row: "Lead-dən müqaviləyə qədər bütün satış prosesi bir boru xəttində",
        audience: "Satış meneceri, satış rəhbəri",
        documents: "Kommersiya təklifi, müqavilə, sifariş",
        lead: "Zəng, WhatsApp mesajı, sayt sorğusu və sərgidən gətirilən vizit kartı eyni siyahıya düşür. Hər lead-in sahibi, mərhələsi və növbəti addımı var — müştəri menecerin dəftərində qalmır.",
        features: [
          {
            title: "Satış boru xətti",
            text: "Mərhələləri öz prosesinizə görə qurursunuz: ilk əlaqə, ehtiyacın öyrənilməsi, təklif, razılaşdırma, müqavilə. Hər mərhələdə neçə sövdələşmə və nə qədər məbləğ dayandığı görünür.",
          },
          {
            title: "Bir müştəri kartı",
            text: "Şirkətin bütün əlaqə şəxsləri, keçmiş sifarişləri, ödənilməmiş borcu, anbardakı rezervi və yazışması bir ekranda. Menecer dəyişəndə məlumat şirkətdə qalır.",
          },
          {
            title: "Kommersiya təklifi",
            text: "Təklif birbaşa anbar qalığı və qiymət siyahısından yığılır. Təsdiqlənən təklif bir düymə ilə sifarişə, sifariş isə qaiməyə çevrilir — məlumat ikinci dəfə yazılmır.",
          },
          {
            title: "Tapşırıq və xatırlatma",
            text: "Hər sövdələşməyə növbəti addım bağlanır. Tarixi keçmiş tapşırıqlar rəhbərin panelində ayrıca görünür, ona görə heç bir müştəri unudulmur.",
          },
          {
            title: "Satış planı və bonus",
            text: "Menecer və komanda üzrə aylıq plan qoyulur, faktiki icra real vaxtda hesablanır. Bonus düsturu sistemdə saxlanılır, ay sonunda Excel-də yenidən yığılmır.",
          },
          {
            title: "Əlaqə tarixçəsi",
            text: "Zənglər, e-poçtlar və WhatsApp yazışmaları sövdələşmənin altında toplanır. Mübahisəli məqamda kimin nə vaxt nə söz verdiyi bir baxışda aydın olur.",
          },
        ],
        faq: [
          {
            q: "Mövcud müştəri bazamızı köçürə bilərikmi?",
            a: "Bəli. Excel və ya 1C-dən müştəri, əlaqə şəxsi və keçmiş sifariş tarixçəsi qurulma mərhələsində köçürülür. Köçürmədən sonra nəzarət siyahısı ilə yoxlanılır.",
          },
          {
            q: "Menecer öz müştərilərini başqasından gizlədə bilərmi?",
            a: "Giriş hüquqları rola görə qurulur. Menecer yalnız öz portfelini görür, rəhbər isə hamısını. Menecer şirkətdən ayrılanda portfel bir addımla digərinə keçirilir.",
          },
          {
            q: "Sayt və sosial şəbəkə sorğuları avtomatik düşürmü?",
            a: "Sayt formaları, WhatsApp Business və çağrı mərkəzi inteqrasiya olunur. Sorğu sistemə düşəndə növbə qaydasına görə menecerə təyin edilir.",
          },
        ],
        seoTitle: "CRM sistemi — satış və müştəri idarəetməsi",
        seoDescription:
          "BirSistem CRM: satış boru xətti, müştəri kartı, kommersiya təklifi və satış planı bir yerdə. Anbar və mühasibatla eyni bazada işləyir. Demo sorğusu göndərin.",
      },
      ru: {
        name: "CRM",
        title: "Управление продажами и клиентами",
        row: "Весь процесс продаж от лида до договора в одной воронке",
        audience: "Менеджер по продажам, руководитель отдела продаж",
        documents: "Коммерческое предложение, договор, заказ",
        lead: "Звонок, сообщение в WhatsApp, заявка с сайта и визитка с выставки попадают в один список. У каждого лида есть ответственный, этап и следующий шаг — клиент не остаётся в блокноте менеджера.",
        features: [
          {
            title: "Воронка продаж",
            text: "Этапы настраиваются под ваш процесс: первый контакт, выявление потребности, предложение, согласование, договор. На каждом этапе видно, сколько сделок и на какую сумму там стоит.",
          },
          {
            title: "Единая карточка клиента",
            text: "Все контактные лица компании, прошлые заказы, неоплаченный долг, резерв на складе и переписка — на одном экране. Когда меняется менеджер, информация остаётся в компании.",
          },
          {
            title: "Коммерческое предложение",
            text: "Предложение собирается прямо из складских остатков и прайс-листа. Утверждённое предложение одной кнопкой превращается в заказ, а заказ — в накладную: данные не вводятся повторно.",
          },
          {
            title: "Задачи и напоминания",
            text: "К каждой сделке привязан следующий шаг. Просроченные задачи отдельно видны на панели руководителя, поэтому ни один клиент не забыт.",
          },
          {
            title: "План продаж и бонусы",
            text: "План ставится на месяц по менеджеру и команде, фактическое выполнение считается в реальном времени. Формула бонуса хранится в системе, и в конце месяца её не нужно заново собирать в Excel.",
          },
          {
            title: "История контактов",
            text: "Звонки, письма и переписка в WhatsApp собираются в сделке. В спорный момент сразу видно, кто, когда и что пообещал.",
          },
        ],
        faq: [
          {
            q: "Можно ли перенести нашу клиентскую базу?",
            a: "Да. Клиенты, контактные лица и история прошлых заказов переносятся из Excel или 1С на этапе внедрения. После переноса данные проверяются по контрольному списку.",
          },
          {
            q: "Может ли менеджер скрыть своих клиентов от других?",
            a: "Права доступа настраиваются по ролям. Менеджер видит только свой портфель, руководитель — все. Когда менеджер уходит из компании, портфель передаётся другому в один шаг.",
          },
          {
            q: "Заявки с сайта и из соцсетей попадают автоматически?",
            a: "Интегрируются формы сайта, WhatsApp Business и колл-центр. Когда заявка попадает в систему, она назначается менеджеру по правилу очереди.",
          },
        ],
        seoTitle: "CRM-система — управление продажами и клиентами",
        seoDescription:
          "CRM BirSistem: воронка продаж, карточка клиента, коммерческие предложения и план продаж в одном месте. Работает в одной базе со складом и бухгалтерией.",
      },
    },
  },
  {
    slug: "anbar",
    href: "/anbar",
    relatedSectors: ["topdansatis", "perakende", "logistika"],
    copy: {
      az: {
        name: "Anbar",
        title: "Anbar və mal hərəkəti",
        row: "Qalıq, daxilolma, transfer, rezerv və sayım — real vaxtda",
        audience: "Anbardar, təchizatçı, satış meneceri",
        documents: "Qaimə, daxilolma aktı, transfer, silinmə, sayım aktı",
        lead: "Satış meneceri müştəriyə söz verməzdən əvvəl real qalığı görür. Hər mal hərəkətinin sənədi, vaxtı və məsul şəxsi var, ona görə ay sonunda «mal hara getdi» sualı qalmır.",
        features: [
          {
            title: "Çoxanbarlı qalıq",
            text: "Mərkəzi anbar, mağaza anbarı, yoldakı mal və qaytarma ayrı-ayrı görünür. Hər malın hansı anbarda nə qədər olduğu bir cədvəldədir.",
          },
          {
            title: "Rezerv və satıla bilən qalıq",
            text: "Sifarişə düşən mal avtomatik rezerv olunur. Satış meneceri ekranda ümumi qalığı yox, real satıla bilən qalığı görür — ikiqat satış baş vermir.",
          },
          {
            title: "Barkod və mobil sayım",
            text: "Sayım telefonla və ya terminal ilə aparılır. Fərqlər sənəd kimi qeydə alınır, kim nə vaxt hansı düzəlişi etdiyi jurnalda qalır.",
          },
          {
            title: "Partiya, seriya və yararlılıq müddəti",
            text: "Dərman, qida və ehtiyat hissələri üçün partiya və son istifadə tarixi izlənir. Müddəti yaxınlaşan mal siyahısı avtomatik yığılır.",
          },
          {
            title: "Minimum qalıq və sifariş təklifi",
            text: "Hər mal üçün minimum həddi qoyursunuz. Həddən aşağı düşən mallar üzrə sistem təchizat sifarişi layihəsi hazırlayır.",
          },
          {
            title: "Real maya dəyəri",
            text: "Gömrük, daşınma və digər xərclər daxilolmaya paylanır. Satış anında real maya dəyəri, deməli real gəlirlilik görünür.",
          },
        ],
        faq: [
          {
            q: "Neçə anbar və mağaza bağlaya bilərik?",
            a: "Anbar sayına məhdudiyyət yoxdur. Hər anbarın öz məsul şəxsi, öz giriş hüququ və öz sənəd axını olur.",
          },
          {
            q: "Barkod oxuyucu və etiket printeri işləyirmi?",
            a: "Standart USB və Bluetooth barkod oxuyucuları, etiket printerləri dəstəklənir. Etiket şablonu sizin tələbinizə uyğun qurulur.",
          },
          {
            q: "Sayım zamanı iş dayandırılmalıdırmı?",
            a: "Xeyr. Sayım ayrıca sənəd kimi aparılır, sayım anındakı qalıq sabitlənir və satış davam edir.",
          },
        ],
        seoTitle: "Anbar proqramı — qalıq, sayım və mal hərəkəti",
        seoDescription:
          "BirSistem anbar modulu: çoxanbarlı qalıq, rezerv, barkodla sayım, partiya izləmə və real maya dəyəri. Satış və mühasibatla eyni bazada. Demo sorğusu göndərin.",
      },
      ru: {
        name: "Склад",
        title: "Склад и движение товаров",
        row: "Остатки, поступления, перемещения, резервы и инвентаризация — в реальном времени",
        audience: "Кладовщик, снабженец, менеджер по продажам",
        documents: "Накладная, акт поступления, перемещение, списание, акт инвентаризации",
        lead: "Менеджер видит реальный остаток до того, как пообещать клиенту. У каждого движения товара есть документ, время и ответственный, поэтому в конце месяца не возникает вопроса «куда делся товар».",
        features: [
          {
            title: "Остатки по нескольким складам",
            text: "Центральный склад, склад магазина, товар в пути и возвраты видны раздельно. Сколько каждого товара на каком складе — в одной таблице.",
          },
          {
            title: "Резерв и доступный остаток",
            text: "Товар под заказ резервируется автоматически. Менеджер видит на экране не общий, а реально доступный к продаже остаток — двойных продаж не бывает.",
          },
          {
            title: "Штрихкод и мобильная инвентаризация",
            text: "Инвентаризация проводится с телефона или терминала. Расхождения фиксируются документом, а кто, когда и какую правку внёс — остаётся в журнале.",
          },
          {
            title: "Партии, серии и сроки годности",
            text: "Для лекарств, продуктов и запчастей отслеживаются партии и сроки годности. Список товаров с истекающим сроком собирается автоматически.",
          },
          {
            title: "Минимальный остаток и предложение заказа",
            text: "Для каждого товара задаётся минимальный порог. По товарам ниже порога система готовит проект заказа поставщику.",
          },
          {
            title: "Фактическая себестоимость",
            text: "Таможня, доставка и другие расходы распределяются на поступление. В момент продажи видна фактическая себестоимость, а значит, и реальная рентабельность.",
          },
        ],
        faq: [
          {
            q: "Сколько складов и магазинов можно подключить?",
            a: "Ограничений по числу складов нет. У каждого склада свой ответственный, свои права доступа и свой документооборот.",
          },
          {
            q: "Работают ли сканер штрихкодов и принтер этикеток?",
            a: "Поддерживаются стандартные USB- и Bluetooth-сканеры и принтеры этикеток. Шаблон этикетки настраивается под ваши требования.",
          },
          {
            q: "Нужно ли останавливать работу на время инвентаризации?",
            a: "Нет. Инвентаризация проводится отдельным документом, остаток на момент пересчёта фиксируется, а продажи продолжаются.",
          },
        ],
        seoTitle: "Складская программа — остатки, инвентаризация и движение товаров",
        seoDescription:
          "Склад в BirSistem: остатки по нескольким складам, резервы, инвентаризация по штрихкоду, учёт партий и фактическая себестоимость. В одной базе с продажами.",
      },
    },
  },
  {
    slug: "muhasibat",
    href: "/muhasibat",
    relatedSectors: ["topdansatis", "istehsal", "xidmet"],
    copy: {
      az: {
        name: "Mühasibat",
        title: "Mühasibat və elektron qaimə",
        row: "Faktura, e-qaimə, hesablar planı və ay bağlanışı",
        audience: "Baş mühasib, mühasib",
        documents: "Elektron qaimə-faktura, mühasibat yazılışı, dövriyyə cədvəli",
        lead: "Satış və anbar sənədi yazılan anda mühasibat yazılışı da yaranır. Mühasib ayın sonunu sənəd yığmaqla yox, yoxlamaqla başlayır.",
        features: [
          {
            title: "Avtomatik yazılışlar",
            text: "Qaimə, ödəniş, əmək haqqı və amortizasiya üzrə yazılışlar sənədin özündən qurulur. Əl ilə yazılış yalnız istisna hallar üçün qalır.",
          },
          {
            title: "Elektron qaimə-faktura",
            text: "E-qaimə tələb olunan formatda hazırlanır və göndərilir. Göndərilmiş, qəbul edilmiş və imtina edilmiş sənədlər ayrıca siyahıda izlənir.",
          },
          {
            title: "ƏDV və vergi bazası",
            text: "ƏDV, sadələşdirilmiş vergi və mənfəət vergisi üzrə baza rəqəmləri sistemdə formalaşır. Bəyannaməni hazırlayan şəxs hazır cədvəllə işləyir.",
          },
          {
            title: "Hesablar planı",
            text: "Milli hesablar planı hazır gəlir, subhesablar sizin uçot siyasətinizə görə qurulur. Hər yazılışdan ilkin sənədə bir kliklə qayıtmaq olur.",
          },
          {
            title: "Debitor və kreditor",
            text: "Kontragent üzrə borc, ödəniş qrafiki və üzləşmə aktı sistemdə hazırlanır. Üzləşmə üçün Excel yığmağa ehtiyac qalmır.",
          },
          {
            title: "Ayın bağlanışı",
            text: "Bağlanış nəzarət siyahısı: bağlanmamış sənədlər, balanslaşmayan hesablar və çatışmayan ilkin sənədlər bir ekranda göstərilir.",
          },
        ],
        faq: [
          {
            q: "Uçot siyasətimiz fərqlidir — uyğunlaşdırmaq olurmu?",
            a: "Hesablar planı, subhesab quruluşu və yazılış şablonları qurulma mərhələsində sizin uçot siyasətinizə görə tənzimlənir.",
          },
          {
            q: "İki şirkəti bir bazada apara bilərikmi?",
            a: "Bəli. Hər hüquqi şəxs ayrıca uçot vahididir, ümumi hesabat isə qrup səviyyəsində yığılır.",
          },
          {
            q: "Keçmiş illərin qalıqları necə köçürülür?",
            a: "Açılış qalıqları kontragent, mal və hesab üzrə köçürülür, sonra üzləşmə aktı ilə yoxlanılır. Bu, qurulma paketinə daxildir.",
          },
        ],
        seoTitle: "Mühasibat proqramı — e-qaimə, ƏDV və hesablar planı",
        seoDescription:
          "BirSistem mühasibat modulu: avtomatik yazılışlar, elektron qaimə-faktura, ƏDV bazası, debitor-kreditor və ay bağlanışı nəzarət siyahısı. Demo sorğusu göndərin.",
      },
      ru: {
        name: "Бухгалтерия",
        title: "Бухгалтерия и электронные счета-фактуры",
        row: "Счета, э-счета-фактуры, план счетов и закрытие месяца",
        audience: "Главный бухгалтер, бухгалтер",
        documents: "Электронная счёт-фактура, бухгалтерская проводка, оборотно-сальдовая ведомость",
        lead: "Проводка появляется в тот же момент, когда записан документ продаж или склада. Бухгалтер начинает конец месяца не со сбора документов, а с их проверки.",
        features: [
          {
            title: "Автоматические проводки",
            text: "Проводки по накладным, платежам, зарплате и амортизации строятся из самого документа. Ручные проводки остаются только для исключений.",
          },
          {
            title: "Электронная счёт-фактура",
            text: "Э-счёт-фактура готовится и отправляется в требуемом формате. Отправленные, принятые и отклонённые документы отслеживаются в отдельном списке.",
          },
          {
            title: "НДС и налоговая база",
            text: "Базовые показатели по НДС, упрощённому налогу и налогу на прибыль формируются в системе. Тот, кто готовит декларацию, работает с готовой таблицей.",
          },
          {
            title: "План счетов",
            text: "Национальный план счетов уже встроен, субсчета настраиваются под вашу учётную политику. Из любой проводки можно одним кликом перейти к первичному документу.",
          },
          {
            title: "Дебиторы и кредиторы",
            text: "Долг по контрагенту, график платежей и акт сверки готовятся в системе. Собирать Excel для сверки больше не нужно.",
          },
          {
            title: "Закрытие месяца",
            text: "Чек-лист закрытия: непроведённые документы, несбалансированные счета и недостающие первичные документы — на одном экране.",
          },
        ],
        faq: [
          {
            q: "У нас своя учётная политика — можно ли адаптировать?",
            a: "План счетов, структура субсчетов и шаблоны проводок настраиваются под вашу учётную политику на этапе внедрения.",
          },
          {
            q: "Можно ли вести две компании в одной базе?",
            a: "Да. Каждое юрлицо — отдельная учётная единица, а общий отчёт собирается на уровне группы.",
          },
          {
            q: "Как переносятся остатки прошлых лет?",
            a: "Начальные остатки переносятся по контрагентам, товарам и счетам, затем проверяются актом сверки. Это входит в пакет внедрения.",
          },
        ],
        seoTitle: "Бухгалтерская программа — э-счёт-фактура, НДС и план счетов",
        seoDescription:
          "Бухгалтерия в BirSistem: автоматические проводки, электронные счета-фактуры, база НДС, дебиторы и кредиторы, чек-лист закрытия месяца. Запросите демо.",
      },
    },
  },
  {
    slug: "maliyye",
    href: "/maliyye",
    relatedSectors: ["tikinti", "istehsal", "logistika"],
    copy: {
      az: {
        name: "Maliyyə",
        title: "Maliyyə, kassa və ödənişlər",
        row: "Kassa, bank, borc-alacaq və büdcə icrası",
        audience: "Maliyyə direktoru, kassir, təsisçi",
        documents: "Ödəniş tapşırığı, kassa orderi, büdcə planı",
        lead: "Bu gün hesabda nə qədər pul var, bu həftə kimə nə ödənməlidir və hansı müştəri gecikir — üç sual, bir ekran.",
        features: [
          {
            title: "Ödəniş təqvimi",
            text: "Gözlənilən daxilolmalar və planlaşdırılan ödənişlər eyni təqvimdə. Kassa boşluğu yaranmadan əvvəl görünür.",
          },
          {
            title: "Kassa və bank",
            text: "Nağd kassa, bank hesabları və valyuta hesabları ayrıca aparılır. Bank çıxarışı yüklənir və sənədlərlə uzlaşdırılır.",
          },
          {
            title: "Ödəniş təsdiqi",
            text: "Ödəniş sorğusu marşrut üzrə təsdiqdən keçir. Kim təsdiqlədi, nə vaxt və hansı sənəd əsasında — hamısı jurnalda qalır.",
          },
          {
            title: "Borc-alacaq nəzarəti",
            text: "Kontragent üzrə gecikmə günləri, kredit limiti və yaşlanma cədvəli. Limiti keçən müştəriyə yeni sifariş bloklana bilir.",
          },
          {
            title: "Büdcə və plan-fakt",
            text: "Şöbə və layihə üzrə büdcə qoyulur, faktiki xərc avtomatik tutuşdurulur. Kənarlaşma ay ərzində görünür, ay sonunda yox.",
          },
          {
            title: "Valyuta fərqi",
            text: "Məzənnə mənbədən yenilənir, valyuta fərqi avtomatik hesablanır və mühasibat yazılışına düşür.",
          },
        ],
        faq: [
          {
            q: "Bank inteqrasiyası varmı?",
            a: "Bank çıxarışı fayl formatında yüklənir və sənədlərlə uzlaşdırılır. Bank tərəfi API təqdim edirsə, birbaşa inteqrasiya da qurula bilər.",
          },
          {
            q: "Neçə valyuta ilə işləmək olar?",
            a: "Valyuta sayına məhdudiyyət yoxdur. Uçot valyutası ilə yanaşı hesabatı ikinci valyutada da almaq mümkündür.",
          },
          {
            q: "Ödəniş təsdiqi marşrutunu özümüz qura bilərikmi?",
            a: "Bəli. Məbləğ həddinə, şöbəyə və xərc maddəsinə görə fərqli təsdiq marşrutları qurulur.",
          },
        ],
        seoTitle: "Maliyyə modulu — kassa, ödəniş təqvimi və büdcə",
        seoDescription:
          "BirSistem maliyyə modulu: ödəniş təqvimi, kassa və bank, ödəniş təsdiqi, borc-alacaq nəzarəti, büdcə və plan-fakt hesabatı. Demo sorğusu göndərin.",
      },
      ru: {
        name: "Финансы",
        title: "Финансы, касса и платежи",
        row: "Касса, банк, дебиторка-кредиторка и исполнение бюджета",
        audience: "Финансовый директор, кассир, учредитель",
        documents: "Платёжное поручение, кассовый ордер, бюджет",
        lead: "Сколько сегодня денег на счетах, кому и что нужно заплатить на этой неделе и какой клиент задерживает оплату — три вопроса, один экран.",
        features: [
          {
            title: "Платёжный календарь",
            text: "Ожидаемые поступления и плановые платежи в одном календаре. Кассовый разрыв виден до того, как он возник.",
          },
          {
            title: "Касса и банк",
            text: "Наличная касса, банковские и валютные счета ведутся раздельно. Банковская выписка загружается и сопоставляется с документами.",
          },
          {
            title: "Согласование платежей",
            text: "Заявка на платёж проходит согласование по маршруту. Кто согласовал, когда и на основании какого документа — всё остаётся в журнале.",
          },
          {
            title: "Контроль дебиторки и кредиторки",
            text: "Дни просрочки по контрагенту, кредитный лимит и таблица старения долга. Клиенту, превысившему лимит, можно заблокировать новые заказы.",
          },
          {
            title: "Бюджет и план-факт",
            text: "Бюджет задаётся по отделам и проектам, фактические расходы сравниваются автоматически. Отклонение видно в течение месяца, а не в его конце.",
          },
          {
            title: "Курсовые разницы",
            text: "Курс обновляется из источника, курсовая разница рассчитывается автоматически и попадает в бухгалтерскую проводку.",
          },
        ],
        faq: [
          {
            q: "Есть ли интеграция с банком?",
            a: "Банковская выписка загружается файлом и сопоставляется с документами. Если банк предоставляет API, можно настроить и прямую интеграцию.",
          },
          {
            q: "Со сколькими валютами можно работать?",
            a: "Ограничений по числу валют нет. Помимо валюты учёта, отчёт можно получить и во второй валюте.",
          },
          {
            q: "Можем ли мы сами настроить маршрут согласования платежей?",
            a: "Да. Можно настроить разные маршруты в зависимости от суммы, отдела и статьи расходов.",
          },
        ],
        seoTitle: "Финансовый модуль — касса, платёжный календарь и бюджет",
        seoDescription:
          "Финансы в BirSistem: платёжный календарь, касса и банк, согласование платежей, контроль дебиторки и кредиторки, бюджет и план-факт. Запросите демо.",
      },
    },
  },
  {
    slug: "hr",
    href: "/hr",
    relatedSectors: ["istehsal", "perakende", "xidmet"],
    copy: {
      az: {
        name: "HR",
        title: "İnsan resursları və əmək haqqı",
        row: "Ştat, davamiyyət, məzuniyyət və əmək haqqı hesablaması",
        audience: "HR mütəxəssisi, şöbə rəhbəri, mühasib",
        documents: "Əmr, tabel, əmək haqqı cədvəli, məzuniyyət ərizəsi",
        lead: "Ştat cədvəli, əmrlər, tabel və əmək haqqı eyni məlumat üzərində işləyir. Tabel bağlananda hesablama artıq hazırdır.",
        features: [
          {
            title: "Ştat cədvəli və əmrlər",
            text: "İşə qəbul, yerdəyişmə, vəzifə dəyişikliyi və xitam əmrləri şablonla hazırlanır. Kadr tarixçəsi işçi kartında toplanır.",
          },
          {
            title: "Davamiyyət və tabel",
            text: "Növbə qrafiki, gecikmə, iş vaxtından artıq saatlar və qeyri-iş günləri tabelə düşür. Turniket və ya biometrik cihazdan məlumat oxunur.",
          },
          {
            title: "Məzuniyyət və xəstəlik",
            text: "Qalıq məzuniyyət günləri avtomatik hesablanır, ərizə təsdiq marşrutundan keçir. Xəstəlik vərəqəsi qanunvericiliyə uyğun hesablanır.",
          },
          {
            title: "Əmək haqqı hesablaması",
            text: "Vəzifə maaşı, saathesabı, bonus və tutulmalar bir hesablamada. Gəlir vergisi və sosial ayırmalar cari dərəcələrə görə hesablanır.",
          },
          {
            title: "Bank üçün siyahı",
            text: "Əmək haqqı ödəniş siyahısı sistemdən formalaşır. Hər işçinin hesablama vərəqəsi ayrıca hazırlanır.",
          },
          {
            title: "Kadr hesabatları",
            text: "Ştat doldurulması, işçi axıcılığı, əmək haqqı fondu və şöbə üzrə xərc — rəhbər üçün hazır kəsimlər.",
          },
        ],
        faq: [
          {
            q: "Vergi və sosial ayırma dərəcələri yenilənirmi?",
            a: "Dərəcələr qanunvericilik dəyişəndə sistemdə mərkəzi qaydada yenilənir. Köhnə dövrlərin hesablaması olduğu kimi qalır.",
          },
          {
            q: "Növbəli iş rejimi dəstəklənirmi?",
            a: "Bəli. Sutkalıq, növbəli və sürüşkən qrafiklər qurulur, gecə saatları və bayram günləri ayrıca tarifləşir.",
          },
          {
            q: "İşçi öz məzuniyyət qalığını görə bilərmi?",
            a: "İşçi kabineti vasitəsilə qalıq günləri, hesablama vərəqəsi və ərizələrinin statusu görünür.",
          },
        ],
        seoTitle: "HR və əmək haqqı proqramı — tabel, məzuniyyət, hesablama",
        seoDescription:
          "BirSistem HR modulu: ştat cədvəli, əmrlər, davamiyyət və tabel, məzuniyyət qalığı, əmək haqqı hesablaması və kadr hesabatları. Demo sorğusu göndərin.",
      },
      ru: {
        name: "HR",
        title: "Кадры и заработная плата",
        row: "Штатное расписание, учёт времени, отпуска и расчёт зарплаты",
        audience: "HR-специалист, руководитель отдела, бухгалтер",
        documents: "Приказ, табель, расчётная ведомость, заявление на отпуск",
        lead: "Штатное расписание, приказы, табель и зарплата работают на одних данных. Когда табель закрыт, расчёт уже готов.",
        features: [
          {
            title: "Штатное расписание и приказы",
            text: "Приказы о приёме, переводе, изменении должности и увольнении готовятся по шаблону. Кадровая история собирается в карточке сотрудника.",
          },
          {
            title: "Учёт времени и табель",
            text: "График смен, опоздания, сверхурочные и нерабочие дни попадают в табель. Данные считываются с турникета или биометрического устройства.",
          },
          {
            title: "Отпуска и больничные",
            text: "Остаток отпускных дней считается автоматически, заявление проходит маршрут согласования. Больничный рассчитывается по законодательству.",
          },
          {
            title: "Расчёт зарплаты",
            text: "Оклад, почасовая оплата, бонусы и удержания — в одном расчёте. Подоходный налог и социальные отчисления считаются по действующим ставкам.",
          },
          {
            title: "Ведомость для банка",
            text: "Платёжная ведомость по зарплате формируется в системе. Для каждого сотрудника готовится отдельный расчётный листок.",
          },
          {
            title: "Кадровые отчёты",
            text: "Укомплектованность штата, текучесть кадров, фонд оплаты труда и расходы по отделам — готовые разрезы для руководителя.",
          },
        ],
        faq: [
          {
            q: "Обновляются ли ставки налогов и социальных отчислений?",
            a: "При изменении законодательства ставки обновляются в системе централизованно. Расчёты прошлых периодов остаются без изменений.",
          },
          {
            q: "Поддерживается ли сменный режим работы?",
            a: "Да. Настраиваются суточные, сменные и скользящие графики, ночные часы и праздничные дни тарифицируются отдельно.",
          },
          {
            q: "Может ли сотрудник видеть свой остаток отпуска?",
            a: "В личном кабинете сотрудник видит остаток дней, расчётный листок и статус своих заявлений.",
          },
        ],
        seoTitle: "Программа для HR и зарплаты — табель, отпуска, расчёт",
        seoDescription:
          "HR в BirSistem: штатное расписание, приказы, учёт времени и табель, остаток отпусков, расчёт зарплаты и кадровые отчёты. Запросите демо.",
      },
    },
  },
  {
    slug: "hesabatlar",
    href: "/hesabatlar",
    relatedSectors: ["topdansatis", "perakende", "istehsal"],
    copy: {
      az: {
        name: "Hesabatlar",
        title: "Hesabat və analitika",
        row: "Rəhbər paneli, mənfəətlilik, ABC və yaşlanma hesabatları",
        audience: "Təsisçi, baş direktor, şöbə rəhbəri",
        documents: "Rəhbər paneli, mənfəət-zərər, ABC hesabatı",
        lead: "Hesabat ayrıca yığılmır — sənədlər yazılan kimi rəqəm yenilənir. Rəhbər səhər panelə baxır, ayın onunda gələn hesabatı gözləmir.",
        features: [
          {
            title: "Rəhbər paneli",
            text: "Gəlir, maya dəyəri, ümumi mənfəət, debitor borcu və kassa qalığı bir ekranda. Hər rəqəmdən onu yaradan sənədlərə düşmək olur.",
          },
          {
            title: "Mənfəətlilik kəsimləri",
            text: "Mal, mal qrupu, müştəri, menecer, filial və layihə üzrə gəlirlilik. Hansı satışın həqiqətən pul gətirdiyi görünür.",
          },
          {
            title: "ABC və XYZ analizi",
            text: "Malları dövriyyə və tələbin sabitliyi üzrə qruplaşdırır. Anbarda hansı malın pulu dondurduğu aydın olur.",
          },
          {
            title: "Yaşlanma hesabatları",
            text: "Anbar qalığının və debitor borcunun yaşlanma cədvəli. 90 gündən artıq tərpənməyən mal və gecikən borc ayrıca siyahıda.",
          },
          {
            title: "Plan-fakt",
            text: "Satış planı, büdcə və faktiki icra eyni cədvəldə. Kənarlaşma həm faizlə, həm məbləğlə göstərilir.",
          },
          {
            title: "Avtomatik göndərmə",
            text: "Seçilmiş hesabatlar hər səhər və ya hər bazar ertəsi e-poçta göndərilir. Rəhbərin sistemə girməsi belə tələb olunmur.",
          },
        ],
        faq: [
          {
            q: "Öz hesabatımızı əlavə etmək olurmu?",
            a: "Hazır hesabatların filtrləri və kəsimləri dəyişdirilir, xüsusi tələb üçün isə ayrıca hesabat qurulur və menyuya əlavə olunur.",
          },
          {
            q: "Hesabatı Excel-ə çıxarmaq mümkündürmü?",
            a: "Hər hesabat Excel və PDF formatında yüklənir. Çıxarışda filtr şərtləri və tarix də göstərilir.",
          },
          {
            q: "Rəhbər yalnız hesabatları görə bilərmi?",
            a: "Bəli. Yalnız baxış hüququ olan rol yaradılır — sənəd dəyişmək imkanı olmadan bütün hesabatlara giriş verilir.",
          },
        ],
        seoTitle: "Hesabat və analitika — rəhbər paneli, ABC, mənfəətlilik",
        seoDescription:
          "BirSistem hesabat modulu: real vaxtda rəhbər paneli, mal və müştəri üzrə mənfəətlilik, ABC/XYZ analizi, yaşlanma hesabatları və plan-fakt. Demo sorğusu göndərin.",
      },
      ru: {
        name: "Отчёты",
        title: "Отчётность и аналитика",
        row: "Панель руководителя, рентабельность, ABC-анализ и отчёты по старению",
        audience: "Учредитель, генеральный директор, руководитель отдела",
        documents: "Панель руководителя, отчёт о прибылях и убытках, ABC-отчёт",
        lead: "Отчёт не собирается отдельно — цифры обновляются, как только записаны документы. Руководитель утром смотрит на панель, а не ждёт отчёта к десятому числу.",
        features: [
          {
            title: "Панель руководителя",
            text: "Выручка, себестоимость, валовая прибыль, дебиторская задолженность и остаток в кассе — на одном экране. От любой цифры можно перейти к документам, из которых она сложилась.",
          },
          {
            title: "Разрезы рентабельности",
            text: "Рентабельность по товару, группе товаров, клиенту, менеджеру, филиалу и проекту. Видно, какие продажи действительно приносят деньги.",
          },
          {
            title: "ABC- и XYZ-анализ",
            text: "Группирует товары по обороту и стабильности спроса. Становится ясно, какой товар замораживает деньги на складе.",
          },
          {
            title: "Отчёты по старению",
            text: "Таблицы старения складских остатков и дебиторской задолженности. Товар без движения более 90 дней и просроченные долги — отдельным списком.",
          },
          {
            title: "План-факт",
            text: "План продаж, бюджет и фактическое исполнение в одной таблице. Отклонение показывается и в процентах, и в сумме.",
          },
          {
            title: "Автоматическая рассылка",
            text: "Выбранные отчёты отправляются на e-mail каждое утро или каждый понедельник. Руководителю даже не нужно заходить в систему.",
          },
        ],
        faq: [
          {
            q: "Можно ли добавить свой отчёт?",
            a: "Фильтры и разрезы готовых отчётов меняются, а под особые требования строится отдельный отчёт и добавляется в меню.",
          },
          {
            q: "Можно ли выгрузить отчёт в Excel?",
            a: "Любой отчёт выгружается в Excel и PDF. В выгрузке указываются условия фильтра и дата.",
          },
          {
            q: "Может ли руководитель видеть только отчёты?",
            a: "Да. Создаётся роль только с правом просмотра — доступ ко всем отчётам без возможности менять документы.",
          },
        ],
        seoTitle: "Отчёты и аналитика — панель руководителя, ABC, рентабельность",
        seoDescription:
          "Отчёты в BirSistem: панель руководителя в реальном времени, рентабельность по товарам и клиентам, ABC/XYZ-анализ, отчёты по старению и план-факт.",
      },
    },
  },
];

export const MODULE_BY_SLUG = new Map(MODULES.map((m) => [m.slug, m]));

export function moduleEntry(slug: ModuleSlug): ModuleEntry {
  const entry = MODULE_BY_SLUG.get(slug);
  if (!entry) throw new Error(`Unknown module: ${slug}`);
  return entry;
}
