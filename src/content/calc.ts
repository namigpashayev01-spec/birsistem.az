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
};
