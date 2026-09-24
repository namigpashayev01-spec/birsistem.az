import type { Faq, Localized } from "@/lib/content";

export type ToolSlug =
  | "edv-kalkulyatoru"
  | "emek-haqqi-kalkulyatoru"
  | "dsmf-kalkulyatoru"
  | "mezuniyyet-pulu-kalkulyatoru"
  | "xestelik-vereqesi-kalkulyatoru"
  | "roi-kalkulyatoru"
  | "kredit-kalkulyatoru";

export type ToolCopy = {
  name: string;
  title: string;
  /** One line in the tools register. */
  row: string;
  lead: string;
  /** Short explainer under the calculator — this is what search engines rank. */
  explainer: { title: string; body: string }[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export type ToolEntry = {
  slug: ToolSlug;
  /** Which module of the product this tool naturally leads into. */
  relatedModule: string;
  copy: Localized<ToolCopy>;
};

export const TOOLS: ToolEntry[] = [
  {
    slug: "edv-kalkulyatoru",
    relatedModule: "muhasibat",
    copy: {
      az: {
        name: "ƏDV kalkulyatoru",
        title: "ƏDV kalkulyatoru",
        row: "Məbləğə ƏDV əlavə edin və ya qiymətin içindən ayırın",
        lead: "Qiymətin üstünə ƏDV gəlirsə bir, qiymət ƏDV-ni artıq içinə alıbsa başqa düstur işləyir. Hər iki halı aşağıda hesablayın.",
        explainer: [
          {
            title: "ƏDV məbləğin üstünə necə hesablanır",
            body: "ƏDV-siz məbləğ dərəcəyə vurulur və əsas məbləğə əlavə olunur. 1 000 manatlıq mal üçün 18 faiz dərəcə ilə ƏDV 180 manat, yekun məbləğ 1 180 manat olur.",
          },
          {
            title: "ƏDV qiymətin içindən necə ayrılır",
            body: "Qiymət artıq ƏDV-ni daxil edirsə, yekun məbləğ 1,18-ə bölünür — alınan rəqəm ƏDV-siz dəyərdir, fərq isə ƏDV məbləğidir.",
          },
          {
            title: "Uçotda hansı fərqi yaradır",
            body: "Alışda ödənilən ƏDV əvəzləşdirilir, satışda hesablanan ƏDV isə ödənilir. Sənədlər sistemdə saxlanmırsa, əvəzləşdirmə hüququ itə bilər.",
          },
        ],
        faq: [
          {
            q: "Hansı dərəcəni seçməliyəm?",
            a: "Kalkulyatorda standart dərəcə ilə yanaşı sıfır dərəcə də seçilə bilər. Konkret əməliyyatın hansı dərəcəyə düşdüyünü mühasibinizlə dəqiqləşdirin.",
          },
          {
            q: "Nəticəni sənədə köçürmək olurmu?",
            a: "Hesablamanı kopyalaya bilərsiniz. BirSistem-də isə ƏDV sənədin özündə hesablanır və mühasibat yazılışına avtomatik düşür.",
          },
        ],
        seoTitle: "ƏDV kalkulyatoru — məbləğə əlavə et və ya içindən ayır",
        seoDescription:
          "Pulsuz ƏDV kalkulyatoru: məbləğin üstünə ƏDV hesablayın və ya ƏDV daxil qiymətin içindən ayırın. Düstur və uçot izahı ilə birlikdə.",
      },
      ru: {
        name: "Калькулятор НДС",
        title: "Калькулятор НДС",
        row: "Начислите НДС на сумму или выделите его из цены",
        lead: "Если НДС начисляется сверху цены, работает одна формула, если цена уже включает НДС — другая. Посчитайте оба случая ниже.",
        explainer: [
          {
            title: "Как начислить НДС на сумму",
            body: "Сумма без НДС умножается на ставку и прибавляется к основной сумме. Для товара стоимостью 1 000 манатов при ставке 18 % НДС составит 180 манатов, итоговая сумма — 1 180 манатов.",
          },
          {
            title: "Как выделить НДС из цены",
            body: "Если цена уже включает НДС, итоговая сумма делится на 1,18 — получается стоимость без НДС, а разница и есть сумма НДС.",
          },
          {
            title: "Что это меняет в учёте",
            body: "НДС, уплаченный при покупке, принимается к зачёту, а НДС, начисленный при продаже, уплачивается в бюджет. Если документы не хранятся в системе, право на зачёт можно потерять.",
          },
        ],
        faq: [
          {
            q: "Какую ставку выбрать?",
            a: "Помимо стандартной ставки в калькуляторе можно выбрать нулевую. Под какую ставку попадает конкретная операция, уточните у своего бухгалтера.",
          },
          {
            q: "Можно ли перенести результат в документ?",
            a: "Расчёт можно скопировать. А в BirSistem НДС рассчитывается прямо в документе и автоматически попадает в бухгалтерскую проводку.",
          },
        ],
        seoTitle: "Калькулятор НДС в Азербайджане — начислить или выделить",
        seoDescription:
          "Бесплатный калькулятор НДС (ƏDV): начислите НДС на сумму или выделите его из цены с НДС. С формулой и пояснением для учёта.",
      },
    },
  },
  {
    slug: "emek-haqqi-kalkulyatoru",
    relatedModule: "hr",
    copy: {
      az: {
        name: "Əmək haqqı kalkulyatoru",
        title: "Əmək haqqı kalkulyatoru",
        row: "Gross məbləğdən əlinizə gələni, və ya əksinə hesablayın",
        lead: "Müqavilədə yazılan məbləğ ilə karta düşən məbləğ eyni deyil. Aradakı fərqi — gəlir vergisi, sosial sığorta, işsizlikdən sığorta və icbari tibbi sığortanı — burada görün.",
        explainer: [
          {
            title: "Gross və net nə deməkdir",
            body: "Gross — tutulmalara qədərki hesablanmış əmək haqqıdır. Net — bütün tutulmalardan sonra işçinin əlinə çatan məbləğ.",
          },
          {
            title: "İşəgötürənin real xərci",
            body: "İşəgötürən işçinin gross əmək haqqından əlavə öz payına düşən sosial ayırmaları da ödəyir. Ona görə bir işçinin şirkətə maya dəyəri gross məbləğdən yüksəkdir.",
          },
          {
            title: "Niyə əl ilə hesablamaq risklidir",
            body: "Dərəcələr və hədlər dəyişir, hər ay fərqli bonus və tutulma olur. Hesablama sistemdə aparılanda tabel, əmr və ödəniş siyahısı eyni rəqəmə söykənir.",
          },
        ],
        faq: [
          {
            q: "Bonus və əlavə ödənişlər nəzərə alınırmı?",
            a: "Kalkulyatora aylıq ümumi hesablanmış məbləği daxil edin — bonus da bu məbləğə daxildir.",
          },
          {
            q: "Neft-qaz və qeyri-neft sektoru üçün fərq varmı?",
            a: "Bəli, tutulma qaydaları sektora və şirkətin statusuna görə fərqlənə bilər. Hesablamanı mühasibinizlə təsdiqləyin.",
          },
        ],
        seoTitle: "Əmək haqqı kalkulyatoru — gross-net hesablama",
        seoDescription:
          "Pulsuz əmək haqqı kalkulyatoru: gross məbləğdən net, və ya net məbləğdən gross hesablayın. Gəlir vergisi və sosial ayırmalar ayrıca göstərilir.",
      },
      ru: {
        name: "Калькулятор зарплаты",
        title: "Калькулятор зарплаты",
        row: "Посчитайте сумму «на руки» из gross или наоборот",
        lead: "Сумма в договоре и сумма, которая приходит на карту, — не одно и то же. Здесь видна разница: подоходный налог, социальное страхование, страхование от безработицы и обязательное медицинское страхование.",
        explainer: [
          {
            title: "Что такое gross и net",
            body: "Gross — начисленная зарплата до удержаний. Net — сумма, которую сотрудник получает на руки после всех удержаний.",
          },
          {
            title: "Реальные расходы работодателя",
            body: "Сверх gross-зарплаты работодатель платит и свою долю социальных отчислений. Поэтому сотрудник обходится компании дороже gross-суммы.",
          },
          {
            title: "Почему считать вручную рискованно",
            body: "Ставки и пороги меняются, каждый месяц бывают разные бонусы и удержания. Когда расчёт ведётся в системе, табель, приказ и платёжная ведомость опираются на одну и ту же цифру.",
          },
        ],
        faq: [
          {
            q: "Учитываются ли бонусы и доплаты?",
            a: "Введите в калькулятор общую начисленную сумму за месяц — бонус тоже входит в неё.",
          },
          {
            q: "Есть ли разница для нефтегазового и ненефтяного сектора?",
            a: "Да, правила удержаний могут отличаться в зависимости от сектора и статуса компании. Подтвердите расчёт у своего бухгалтера.",
          },
        ],
        seoTitle: "Калькулятор зарплаты в Азербайджане — gross и net",
        seoDescription:
          "Бесплатный калькулятор зарплаты: рассчитайте net из gross или gross из net. Подоходный налог и социальные отчисления показаны отдельно.",
      },
    },
  },
  {
    slug: "dsmf-kalkulyatoru",
    relatedModule: "hr",
    copy: {
      az: {
        name: "DSMF kalkulyatoru",
        title: "Sosial sığorta (DSMF) kalkulyatoru",
        row: "İşçi və işəgötürən payına düşən sosial ayırmaları ayırın",
        lead: "Sosial ayırmanın bir hissəsini işçi, bir hissəsini işəgötürən ödəyir. Hansı payın nə qədər olduğunu və şirkətin ümumi yükünü burada hesablayın.",
        explainer: [
          {
            title: "İki tərəfli ödəniş",
            body: "Məcburi dövlət sosial sığorta haqqı işçinin əmək haqqından tutulan pay və işəgötürənin öz üzərinə düşən paydan ibarətdir.",
          },
          {
            title: "Həddən asılı dərəcələr",
            body: "Əmək haqqının müəyyən həddə qədərki hissəsi ilə həddən yuxarı hissəsi fərqli dərəcə ilə hesablanır. Kalkulyator bu bölgünü avtomatik aparır.",
          },
          {
            title: "Hesabatla əlaqəsi",
            body: "Aylıq hesabat üçün rəqəmlər tabeldən gəlir. Sistemdə tabel bağlananda ayırmalar artıq hesablanmış olur.",
          },
        ],
        faq: [
          {
            q: "İşsizlikdən sığorta və tibbi sığorta da daxildirmi?",
            a: "Kalkulyator sosial sığorta ilə yanaşı işsizlikdən sığorta və icbari tibbi sığorta ayırmalarını da ayrıca göstərir.",
          },
          {
            q: "Fərdi sahibkar üçün də işləyirmi?",
            a: "Bu kalkulyator muzdlu işlə bağlı ayırmalar üçündür. Fərdi sahibkarın ödənişləri fərqli qaydada hesablanır.",
          },
        ],
        seoTitle: "DSMF kalkulyatoru — sosial sığorta ayırmaları",
        seoDescription:
          "Pulsuz DSMF kalkulyatoru: əmək haqqından tutulan və işəgötürənin ödədiyi sosial sığorta, işsizlikdən sığorta və tibbi sığorta ayırmalarını hesablayın.",
      },
      ru: {
        name: "Калькулятор ГФСЗ",
        title: "Калькулятор соцстрахования (ГФСЗ / DSMF)",
        row: "Разделите социальные отчисления на долю работника и работодателя",
        lead: "Часть социальных отчислений платит работник, часть — работодатель. Посчитайте здесь, сколько приходится на каждую долю и какова общая нагрузка на компанию.",
        explainer: [
          {
            title: "Платёж с двух сторон",
            body: "Обязательный государственный взнос на социальное страхование состоит из доли, удерживаемой из зарплаты работника, и доли, которую платит сам работодатель.",
          },
          {
            title: "Ставки зависят от порога",
            body: "Часть зарплаты до определённого порога и часть сверх него облагаются по разным ставкам. Калькулятор делает это разделение автоматически.",
          },
          {
            title: "Связь с отчётностью",
            body: "Цифры для ежемесячного отчёта берутся из табеля. В системе к моменту закрытия табеля отчисления уже рассчитаны.",
          },
        ],
        faq: [
          {
            q: "Входят ли страхование от безработицы и медицинское страхование?",
            a: "Помимо социального страхования калькулятор отдельно показывает отчисления на страхование от безработицы и обязательное медицинское страхование.",
          },
          {
            q: "Подходит ли для индивидуального предпринимателя?",
            a: "Этот калькулятор — для отчислений по найму. Платежи индивидуального предпринимателя рассчитываются по другим правилам.",
          },
        ],
        seoTitle: "Калькулятор ГФСЗ (DSMF) — отчисления на соцстрахование",
        seoDescription:
          "Бесплатный калькулятор ГФСЗ: рассчитайте взносы на соцстрахование, страхование от безработицы и медстрахование — долю работника и работодателя.",
      },
    },
  },
  {
    slug: "mezuniyyet-pulu-kalkulyatoru",
    relatedModule: "hr",
    copy: {
      az: {
        name: "Məzuniyyət pulu kalkulyatoru",
        title: "Məzuniyyət pulu kalkulyatoru",
        row: "Orta əmək haqqı əsasında məzuniyyət haqqını hesablayın",
        lead: "Məzuniyyət pulu son aylar üzrə orta günlük qazancdan hesablanır. Neçə gün məzuniyyət və hansı orta məbləğ — iki rəqəm kifayətdir.",
        explainer: [
          {
            title: "Orta günlük qazanc",
            body: "Hesablama dövrünün ümumi qazancı həmin dövrün təqvim günlərinə bölünür. Alınan rəqəm məzuniyyət günlərinin sayına vurulur.",
          },
          {
            title: "Hansı ödənişlər daxildir",
            body: "Vəzifə maaşı ilə yanaşı müntəzəm xarakterli əlavələr də orta qazanca daxil edilir. Birdəfəlik ödənişlər adətən çıxarılır.",
          },
          {
            title: "Qalıq günlərin izlənməsi",
            body: "İstifadə olunmamış günlər ildən ilə keçir. Sistemdə hər işçinin qalıq günü avtomatik hesablanır, ərizə isə təsdiq marşrutundan keçir.",
          },
        ],
        faq: [
          {
            q: "İş stajına görə əlavə günlər nəzərə alınırmı?",
            a: "Əlavə məzuniyyət günlərini ümumi gün sayına əlavə edib daxil edin — kalkulyator hesablamanı gün sayına görə aparır.",
          },
          {
            q: "İşdən çıxarkən kompensasiya necə hesablanır?",
            a: "Prinsip eynidir: istifadə olunmamış günlər orta günlük qazanca vurulur. Dəqiq hesablama üçün son haqq-hesab sənədinə baxın.",
          },
        ],
        seoTitle: "Məzuniyyət pulu kalkulyatoru — orta qazancla hesablama",
        seoDescription:
          "Pulsuz məzuniyyət pulu kalkulyatoru: orta günlük qazanc və məzuniyyət günlərinin sayı əsasında məzuniyyət haqqını hesablayın.",
      },
      ru: {
        name: "Калькулятор отпускных",
        title: "Калькулятор отпускных",
        row: "Рассчитайте отпускные по средней зарплате",
        lead: "Отпускные считаются из среднего дневного заработка за последние месяцы. Сколько дней отпуска и какой средний заработок — достаточно двух цифр.",
        explainer: [
          {
            title: "Средний дневной заработок",
            body: "Общий заработок за расчётный период делится на число календарных дней этого периода. Полученная цифра умножается на количество дней отпуска.",
          },
          {
            title: "Какие выплаты учитываются",
            body: "Помимо оклада в средний заработок включаются регулярные надбавки. Разовые выплаты обычно исключаются.",
          },
          {
            title: "Учёт остатка дней",
            body: "Неиспользованные дни переходят на следующий год. В системе остаток дней каждого сотрудника считается автоматически, а заявление проходит маршрут согласования.",
          },
        ],
        faq: [
          {
            q: "Учитываются ли дополнительные дни за стаж?",
            a: "Прибавьте дополнительные дни отпуска к общему числу дней — калькулятор считает по количеству дней.",
          },
          {
            q: "Как рассчитывается компенсация при увольнении?",
            a: "Принцип тот же: неиспользованные дни умножаются на средний дневной заработок. Точный расчёт смотрите в документе окончательного расчёта.",
          },
        ],
        seoTitle: "Калькулятор отпускных — расчёт по среднему заработку",
        seoDescription:
          "Бесплатный калькулятор отпускных: рассчитайте сумму отпускных по среднему дневному заработку и количеству дней отпуска.",
      },
    },
  },
  {
    slug: "xestelik-vereqesi-kalkulyatoru",
    relatedModule: "hr",
    copy: {
      az: {
        name: "Xəstəlik vərəqəsi kalkulyatoru",
        title: "Xəstəlik vərəqəsi kalkulyatoru",
        row: "Staja və orta qazanca görə müavinəti hesablayın",
        lead: "Xəstəlik müavinətinin məbləği sığorta stajından və orta qazancdan asılıdır. İlk günləri işəgötürən, qalanını isə sosial sığorta ödəyir.",
        explainer: [
          {
            title: "Stajın rolu",
            body: "Sığorta stajı artdıqca orta qazancdan ödənilən faiz də artır. Kalkulyatorda staj aralığını seçirsiniz.",
          },
          {
            title: "Kim nə qədərini ödəyir",
            body: "Xəstəliyin ilk günləri işəgötürənin hesabına, sonrakı günlər sosial sığorta hesabına ödənilir. Hesablamada iki hissə ayrıca göstərilir.",
          },
          {
            title: "Sənədləşmə",
            body: "Vərəqə tabelə düşməlidir, əks halda əmək haqqı yanlış hesablanır. Sistemdə vərəqə tabellə bağlanır və hesablama avtomatik düzəlir.",
          },
        ],
        faq: [
          {
            q: "Əmək qabiliyyətinin uzunmüddətli itirilməsi necə hesablanır?",
            a: "Uzunmüddətli hallarda ödəniş qaydası fərqlidir. Bu kalkulyator adi müvəqqəti əmək qabiliyyətsizliyi üçündür.",
          },
          {
            q: "Uşağa qulluq vərəqəsi də eyni hesablanırmı?",
            a: "Qulluqla bağlı vərəqələrdə gün limitləri və faizlər fərqlənir, hesablamanı kadr şöbəsi ilə dəqiqləşdirin.",
          },
        ],
        seoTitle: "Xəstəlik vərəqəsi kalkulyatoru — müavinətin hesablanması",
        seoDescription:
          "Pulsuz xəstəlik vərəqəsi kalkulyatoru: sığorta stajı, orta günlük qazanc və xəstəlik günlərinə görə müavinət məbləğini hesablayın.",
      },
      ru: {
        name: "Калькулятор больничного",
        title: "Калькулятор больничного листа",
        row: "Рассчитайте пособие по стажу и среднему заработку",
        lead: "Размер пособия по болезни зависит от страхового стажа и среднего заработка. Первые дни оплачивает работодатель, остальные — социальное страхование.",
        explainer: [
          {
            title: "Роль стажа",
            body: "Чем больше страховой стаж, тем выше процент среднего заработка, который выплачивается. В калькуляторе вы выбираете диапазон стажа.",
          },
          {
            title: "Кто сколько платит",
            body: "Первые дни болезни оплачиваются за счёт работодателя, последующие — за счёт социального страхования. В расчёте обе части показаны отдельно.",
          },
          {
            title: "Оформление",
            body: "Больничный должен попасть в табель, иначе зарплата будет рассчитана неверно. В системе больничный связан с табелем, и расчёт корректируется автоматически.",
          },
        ],
        faq: [
          {
            q: "Как рассчитывается длительная потеря трудоспособности?",
            a: "В длительных случаях порядок выплаты другой. Этот калькулятор — для обычной временной нетрудоспособности.",
          },
          {
            q: "Больничный по уходу за ребёнком считается так же?",
            a: "У листов по уходу другие лимиты дней и проценты, уточните расчёт в отделе кадров.",
          },
        ],
        seoTitle: "Калькулятор больничного — расчёт пособия",
        seoDescription:
          "Бесплатный калькулятор больничного: рассчитайте сумму пособия по страховому стажу, среднему дневному заработку и дням болезни.",
      },
    },
  },
  {
    slug: "roi-kalkulyatoru",
    relatedModule: "hesabatlar",
    copy: {
      az: {
        name: "ERP ROI kalkulyatoru",
        title: "ERP-nin özünü ödəməsi (ROI) kalkulyatoru",
        row: "Sistemin neçə aya özünü ödədiyini rəqəmlə görün",
        lead: "ERP qərarı hissə görə verilmir. İtirilən iş saatı, anbar fərqi və gecikən debitor borcunu daxil edin — sistemin aylıq qaytarımı və özünü ödəmə müddəti hesablansın.",
        explainer: [
          {
            title: "Qənaət haradan gəlir",
            body: "Üç yerdən: təkrar məlumat yığılışına gedən iş saatından, anbar fərqi və zay maldan, gecikən ödənişlərin dondurduğu vəsaitdən.",
          },
          {
            title: "Özünü ödəmə müddəti",
            body: "Aylıq qənaət sistemin aylıq xərcini üstələyəndən sonra keçən müddət. Orta ölçülü şirkətdə bu, adətən aylarla ölçülür, illərlə yox.",
          },
          {
            title: "Rəqəmləri haradan götürmək",
            body: "Ehtiyatlı olun: real sayım fərqi və debitor yaşlanma cədvəli ən yaxşı mənbədir. Təxmini rəqəmlə hesablama da istiqamət verir.",
          },
        ],
        faq: [
          {
            q: "Hesablama nə qədər dəqiqdir?",
            a: "Nəticə daxil etdiyiniz rəqəmlər qədər dəqiqdir. Demo zamanı öz sənədlərinizlə birlikdə daha dəqiq hesablama aparırıq.",
          },
          {
            q: "Qurulma xərci nəzərə alınırmı?",
            a: "Bəli, birdəfəlik qurulma xərci ayrıca sahədə daxil edilir və özünü ödəmə müddətinə təsir göstərir.",
          },
        ],
        seoTitle: "ERP ROI kalkulyatoru — sistem neçə aya özünü ödəyir",
        seoDescription:
          "ERP ROI kalkulyatoru: itirilən iş saatı, anbar fərqi və gecikən debitor borcu əsasında aylıq qənaəti və özünü ödəmə müddətini hesablayın.",
      },
      ru: {
        name: "Калькулятор ROI от ERP",
        title: "Калькулятор окупаемости (ROI) ERP",
        row: "Узнайте в цифрах, за сколько месяцев окупится система",
        lead: "Решение об ERP не принимают на глаз. Введите потерянные рабочие часы, складские расхождения и просроченную дебиторку — калькулятор посчитает ежемесячную отдачу и срок окупаемости.",
        explainer: [
          {
            title: "Откуда берётся экономия",
            body: "Из трёх источников: рабочих часов на повторный ввод данных, складских расхождений и брака, а также денег, замороженных в просроченных платежах.",
          },
          {
            title: "Срок окупаемости",
            body: "Время, после которого ежемесячная экономия превышает ежемесячные расходы на систему. В компании среднего размера он обычно измеряется месяцами, а не годами.",
          },
          {
            title: "Где взять цифры",
            body: "Будьте осторожны: лучший источник — реальные расхождения инвентаризации и таблица старения дебиторки. Расчёт на примерных цифрах тоже даёт ориентир.",
          },
        ],
        faq: [
          {
            q: "Насколько точен расчёт?",
            a: "Результат точен настолько, насколько точны введённые цифры. На демо мы вместе делаем более точный расчёт на ваших документах.",
          },
          {
            q: "Учитывается ли стоимость внедрения?",
            a: "Да, разовая стоимость внедрения вводится в отдельное поле и влияет на срок окупаемости.",
          },
        ],
        seoTitle: "Калькулятор ROI ERP — за сколько месяцев окупится система",
        seoDescription:
          "Калькулятор ROI от ERP: рассчитайте ежемесячную экономию и срок окупаемости по потерянным часам, складским расхождениям и просроченной дебиторке.",
      },
    },
  },
  {
    slug: "kredit-kalkulyatoru",
    relatedModule: "maliyye",
    copy: {
      az: {
        name: "Kredit kalkulyatoru",
        title: "Biznes krediti kalkulyatoru",
        row: "Annuitet ödənişi, ümumi faiz və ödəniş qrafiki",
        lead: "Kredit məbləği, illik faiz və müddət — aylıq ödənişiniz və ödəyəcəyiniz ümumi faiz dərhal görünsün. Ödəniş qrafiki də aylar üzrə açılır.",
        explainer: [
          {
            title: "Annuitet nə deməkdir",
            body: "Aylıq ödəniş sabit qalır, amma daxilindəki faiz və əsas borc nisbəti dəyişir. İlk aylarda faizin payı daha böyükdür.",
          },
          {
            title: "Ümumi faiz yükü",
            body: "Müddət uzandıqca aylıq ödəniş azalır, amma ümumi ödənilən faiz artır. Qrafikdə hər iki təsir görünür.",
          },
          {
            title: "Kassa axını ilə əlaqəsi",
            body: "Kredit ödənişi ödəniş təqvimində planlaşdırılmalıdır. BirSistem-də qrafik maliyyə moduluna yazılır və kassa boşluğu əvvəlcədən görünür.",
          },
        ],
        faq: [
          {
            q: "Güzəşt dövrü nəzərə alınırmı?",
            a: "Bu kalkulyator sadə annuitet üçündür. Güzəşt dövrü və dəyişkən faiz üçün bankın qrafiki əsas götürülməlidir.",
          },
          {
            q: "Komissiyalar daxildirmi?",
            a: "Xeyr. Birdəfəlik komissiyaları ümumi xərcə ayrıca əlavə edin — effektiv dərəcə bir qədər yüksək çıxacaq.",
          },
        ],
        seoTitle: "Kredit kalkulyatoru — aylıq ödəniş və faiz qrafiki",
        seoDescription:
          "Pulsuz biznes kredit kalkulyatoru: annuitet aylıq ödənişi, ümumi faiz məbləği və ay-ay ödəniş qrafiki. Kassa planlaması üçün.",
      },
      ru: {
        name: "Кредитный калькулятор",
        title: "Калькулятор кредита для бизнеса",
        row: "Аннуитетный платёж, общая сумма процентов и график платежей",
        lead: "Сумма кредита, годовая ставка и срок — и сразу видно ежемесячный платёж и общую сумму процентов. График платежей раскрывается по месяцам.",
        explainer: [
          {
            title: "Что такое аннуитет",
            body: "Ежемесячный платёж остаётся постоянным, но соотношение процентов и основного долга внутри него меняется. В первые месяцы доля процентов больше.",
          },
          {
            title: "Общая процентная нагрузка",
            body: "Чем длиннее срок, тем меньше ежемесячный платёж, но тем больше общая сумма процентов. На графике видны оба эффекта.",
          },
          {
            title: "Связь с денежным потоком",
            body: "Платежи по кредиту нужно планировать в платёжном календаре. В BirSistem график записывается в модуль финансов, и кассовый разрыв виден заранее.",
          },
        ],
        faq: [
          {
            q: "Учитывается ли льготный период?",
            a: "Этот калькулятор — для простого аннуитета. Для льготного периода и плавающей ставки ориентируйтесь на график банка.",
          },
          {
            q: "Входят ли комиссии?",
            a: "Нет. Разовые комиссии добавьте к общим расходам отдельно — эффективная ставка получится немного выше.",
          },
        ],
        seoTitle: "Кредитный калькулятор — ежемесячный платёж и график",
        seoDescription:
          "Бесплатный кредитный калькулятор для бизнеса: аннуитетный ежемесячный платёж, общая сумма процентов и помесячный график платежей.",
      },
    },
  },
];

export const TOOL_BY_SLUG = new Map(TOOLS.map((t) => [t.slug, t]));
