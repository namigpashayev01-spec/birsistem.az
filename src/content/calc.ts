import type { Localized } from "@/lib/content";

/**
 * Labels for the calculators. Authored in Azerbaijani; other locales fall back
 * to it until their copy is written, exactly like the rest of the content.
 */
export type CalcLabels = {
  common: {
    currency: string;
    result: string;
    perMonth: string;
    months: string;
    days: string;
    years: string;
    disclaimer: string;
    ratesNote: string;
  };
  edv: {
    mode: string;
    modeAdd: string;
    modeExtract: string;
    amountAdd: string;
    amountExtract: string;
    rate: string;
    headlineAdd: string;
    headlineExtract: string;
    net: string;
    vat: string;
    gross: string;
  };
  salary: {
    mode: string;
    modeGross: string;
    modeNet: string;
    grossInput: string;
    netInput: string;
    headline: string;
    gross: string;
    incomeTax: string;
    social: string;
    unemployment: string;
    medical: string;
    net: string;
    employerSocial: string;
    employerUnemployment: string;
    employerMedical: string;
    employerCost: string;
  };
  dsmf: {
    gross: string;
    headline: string;
    employeeTotal: string;
    employerTotal: string;
    social: string;
    unemployment: string;
    medical: string;
    grandTotal: string;
  };
  vacation: {
    averageDaily: string;
    averageDailyHint: string;
    days: string;
    headline: string;
    daily: string;
    dayCount: string;
    gross: string;
    net: string;
    deductions: string;
  };
  sick: {
    averageDaily: string;
    days: string;
    service: string;
    serviceUnder8: string;
    serviceFrom8to12: string;
    serviceOver12: string;
    headline: string;
    share: string;
    dailyBenefit: string;
    employerPart: string;
    statePart: string;
    total: string;
  };
  roi: {
    hours: string;
    hoursHint: string;
    hourlyCost: string;
    stockLoss: string;
    overdue: string;
    overdueHint: string;
    monthlyFee: string;
    setupFee: string;
    headline: string;
    savingHours: string;
    savingStock: string;
    savingCash: string;
    monthlySaving: string;
    netMonthly: string;
    payback: string;
    paybackNever: string;
  };
  credit: {
    amount: string;
    rate: string;
    term: string;
    headline: string;
    monthly: string;
    totalInterest: string;
    totalPaid: string;
    firstInterest: string;
  };
};

export const CALC: Localized<CalcLabels> = {
  az: {
    common: {
      currency: "AZN",
      result: "Nəticə",
      perMonth: "ay",
      months: "ay",
      days: "gün",
      years: "il",
      disclaimer:
        "Hesablama ilkin təsəvvür üçündür və rəsmi hesablamanı əvəz etmir. Yekun rəqəmi mühasibinizlə dəqiqləşdirin.",
      ratesNote: "Dərəcələr {year} ili üçün tətbiq olunan qaydalara əsaslanır.",
    },
    edv: {
      mode: "Hesablama növü",
      modeAdd: "Üstünə əlavə et",
      modeExtract: "İçindən ayır",
      amountAdd: "ƏDV-siz məbləğ",
      amountExtract: "ƏDV daxil məbləğ",
      rate: "ƏDV dərəcəsi",
      headlineAdd: "ƏDV daxil yekun məbləğ",
      headlineExtract: "ƏDV-siz məbləğ",
      net: "ƏDV-siz məbləğ",
      vat: "ƏDV məbləği",
      gross: "ƏDV daxil məbləğ",
    },
    salary: {
      mode: "Hesablama istiqaməti",
      modeGross: "Gross-dan net-ə",
      modeNet: "Net-dən gross-a",
      grossInput: "Hesablanmış aylıq əmək haqqı (gross)",
      netInput: "Əlinizə çatan məbləğ (net)",
      headline: "İşçinin əlinə çatan məbləğ",
      gross: "Hesablanmış əmək haqqı",
      incomeTax: "Gəlir vergisi",
      social: "Sosial sığorta (işçi)",
      unemployment: "İşsizlikdən sığorta (işçi)",
      medical: "İcbari tibbi sığorta (işçi)",
      net: "Əlinə çatan (net)",
      employerSocial: "Sosial sığorta (işəgötürən)",
      employerUnemployment: "İşsizlikdən sığorta (işəgötürən)",
      employerMedical: "İcbari tibbi sığorta (işəgötürən)",
      employerCost: "İşəgötürənin ümumi xərci",
    },
    dsmf: {
      gross: "Hesablanmış aylıq əmək haqqı",
      headline: "Ümumi ayırmalar",
      employeeTotal: "İşçidən tutulan",
      employerTotal: "İşəgötürənin ödədiyi",
      social: "Sosial sığorta",
      unemployment: "İşsizlikdən sığorta",
      medical: "İcbari tibbi sığorta",
      grandTotal: "Cəmi ayırma",
    },
    vacation: {
      averageDaily: "Orta günlük qazanc",
      averageDailyHint:
        "Hesablama dövrünün ümumi qazancını həmin dövrün təqvim günlərinə bölün.",
      days: "Məzuniyyət günlərinin sayı",
      headline: "Məzuniyyət haqqı (gross)",
      daily: "Orta günlük qazanc",
      dayCount: "Gün sayı",
      gross: "Hesablanmış məbləğ",
      net: "Tutulmalardan sonra təxmini",
      deductions: "Tutulmalar (təxmini)",
    },
    sick: {
      averageDaily: "Orta günlük qazanc",
      days: "Xəstəlik günlərinin sayı",
      service: "Sığorta stajı",
      serviceUnder8: "8 ildən az",
      serviceFrom8to12: "8–12 il",
      serviceOver12: "12 il və daha çox",
      headline: "Ümumi müavinət",
      share: "Orta qazancdan faiz",
      dailyBenefit: "Günlük müavinət",
      employerPart: "İşəgötürənin hesabına (ilk 14 gün)",
      statePart: "Sosial sığorta hesabına",
      total: "Cəmi müavinət",
    },
    roi: {
      hours: "Təkrar məlumat yığılışına gedən aylıq saat",
      hoursHint:
        "Eyni məlumatın ikinci dəfə yazılması, üzləşmə və hesabat yığılışı üçün sərf olunan vaxt.",
      hourlyCost: "Bir iş saatının orta dəyəri",
      stockLoss: "Aylıq anbar fərqi və zay",
      overdue: "Gecikmiş debitor borcu",
      overdueHint:
        "Vaxtında yığılsaydı dövriyyədə işləyəcək məbləğ. Aylıq faydası təxminən 2 faiz kimi götürülür.",
      monthlyFee: "Sistemin aylıq xərci",
      setupFee: "Birdəfəlik qurulma xərci",
      headline: "Sistem özünü neçə aya ödəyir",
      savingHours: "Vaxt qənaəti",
      savingStock: "Anbar itkisinin azalması",
      savingCash: "Dondurulmuş vəsaitin faydası",
      monthlySaving: "Aylıq ümumi qənaət",
      netMonthly: "Aylıq xalis fayda",
      payback: "Özünü ödəmə müddəti",
      paybackNever: "Bu rəqəmlərlə özünü ödəmir",
    },
    credit: {
      amount: "Kredit məbləği",
      rate: "İllik faiz dərəcəsi",
      term: "Müddət",
      headline: "Aylıq ödəniş",
      monthly: "Aylıq ödəniş",
      totalInterest: "Ümumi faiz",
      totalPaid: "Ümumi ödəniş",
      firstInterest: "İlk ayın faiz hissəsi",
    },
  },

  ru: {
    common: {
      currency: "AZN",
      result: "Результат",
      perMonth: "мес.",
      months: "мес.",
      days: "дн.",
      years: "лет",
      disclaimer:
        "Расчёт носит ориентировочный характер и не заменяет официальный расчёт. Итоговую цифру уточните у своего бухгалтера.",
      ratesNote: "Ставки основаны на правилах, действующих в {year} году.",
    },
    edv: {
      mode: "Тип расчёта",
      modeAdd: "Начислить сверху",
      modeExtract: "Выделить из суммы",
      amountAdd: "Сумма без НДС",
      amountExtract: "Сумма с НДС",
      rate: "Ставка НДС",
      headlineAdd: "Итоговая сумма с НДС",
      headlineExtract: "Сумма без НДС",
      net: "Сумма без НДС",
      vat: "Сумма НДС",
      gross: "Сумма с НДС",
    },
    salary: {
      mode: "Направление расчёта",
      modeGross: "Из gross в net",
      modeNet: "Из net в gross",
      grossInput: "Начисленная зарплата за месяц (gross)",
      netInput: "Сумма на руки (net)",
      headline: "Сумма на руки",
      gross: "Начисленная зарплата",
      incomeTax: "Подоходный налог",
      social: "Соцстрахование (работник)",
      unemployment: "Страхование от безработицы (работник)",
      medical: "Обязательное медстрахование (работник)",
      net: "На руки (net)",
      employerSocial: "Соцстрахование (работодатель)",
      employerUnemployment: "Страхование от безработицы (работодатель)",
      employerMedical: "Обязательное медстрахование (работодатель)",
      employerCost: "Общие расходы работодателя",
    },
    dsmf: {
      gross: "Начисленная зарплата за месяц",
      headline: "Общие отчисления",
      employeeTotal: "Удерживается с работника",
      employerTotal: "Платит работодатель",
      social: "Социальное страхование",
      unemployment: "Страхование от безработицы",
      medical: "Обязательное медстрахование",
      grandTotal: "Всего отчислений",
    },
    vacation: {
      averageDaily: "Средний дневной заработок",
      averageDailyHint:
        "Разделите общий заработок за расчётный период на число календарных дней этого периода.",
      days: "Количество дней отпуска",
      headline: "Отпускные (gross)",
      daily: "Средний дневной заработок",
      dayCount: "Количество дней",
      gross: "Начисленная сумма",
      net: "Ориентировочно после удержаний",
      deductions: "Удержания (ориентировочно)",
    },
    sick: {
      averageDaily: "Средний дневной заработок",
      days: "Количество дней болезни",
      service: "Страховой стаж",
      serviceUnder8: "Менее 8 лет",
      serviceFrom8to12: "8–12 лет",
      serviceOver12: "12 лет и более",
      headline: "Общая сумма пособия",
      share: "Процент от среднего заработка",
      dailyBenefit: "Пособие за день",
      employerPart: "За счёт работодателя (первые 14 дней)",
      statePart: "За счёт соцстрахования",
      total: "Всего пособие",
    },
    roi: {
      hours: "Часов в месяц на повторный ввод данных",
      hoursHint:
        "Время на повторный ввод тех же данных, сверки и сбор отчётов.",
      hourlyCost: "Средняя стоимость рабочего часа",
      stockLoss: "Складские расхождения и брак за месяц",
      overdue: "Просроченная дебиторская задолженность",
      overdueHint:
        "Сумма, которая работала бы в обороте, если бы её собрали вовремя. Ежемесячная выгода принимается примерно за 2 %.",
      monthlyFee: "Ежемесячная стоимость системы",
      setupFee: "Разовая стоимость внедрения",
      headline: "За сколько месяцев окупится система",
      savingHours: "Экономия времени",
      savingStock: "Снижение складских потерь",
      savingCash: "Выгода от высвобожденных средств",
      monthlySaving: "Общая экономия в месяц",
      netMonthly: "Чистая выгода в месяц",
      payback: "Срок окупаемости",
      paybackNever: "При этих цифрах не окупается",
    },
    credit: {
      amount: "Сумма кредита",
      rate: "Годовая процентная ставка",
      term: "Срок",
      headline: "Ежемесячный платёж",
      monthly: "Ежемесячный платёж",
      totalInterest: "Всего процентов",
      totalPaid: "Всего выплат",
      firstInterest: "Проценты в первом месяце",
    },
  },
};
