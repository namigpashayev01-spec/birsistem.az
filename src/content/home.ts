import type { Faq, Localized } from "@/lib/content";
import type { ModuleSlug } from "./modules";

export type HomeCopy = {
  seoTitle: string;
  seoDescription: string;

  hero: {
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    /** Plain sentence, not a row of badges. */
    assurance: string;
    /** Says plainly that the screen holds sample data. */
    screenCaption: string;
  };

  /** One document moving through the system — the product's whole argument. */
  flow: {
    label: string;
    title: string;
    sub: string;
    doc: { title: string; number: string; customer: string; total: string };
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
    screens: { screen: ModuleSlug; title: string; text: string }[];
  };

  /** Facts about the product and the work — never invented customer counts. */
  facts: { value: string; label: string }[];

  sectors: {
    label: string;
    title: string;
    sub: string;
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
      h1: "Satış, anbar və mühasibat bir ERP sistemində",
      lead: "BirSistem sənədi bir dəfə yazdırır. Satış qaiməsi anbardan malı silir, mühasibat yazılışını yaradır və rəhbərin panelindəki rəqəmi eyni anda yeniləyir.",
      primaryCta: "Demo sorğusu göndər",
      secondaryCta: "Hazır həllərə bax",
      assurance:
        "Qurulma adətən 2–4 həftə çəkir, mövcud məlumatın köçürülməsi qiymətə daxildir, dəstək komandası Bakıdadır.",
      screenCaption: "Rəhbər paneli — ekrandakı rəqəmlər nümunə məlumatdır.",
    },

    flow: {
      label: "Necə işləyir",
      title: "Bir qaimə, dörd modul, bir dəfə yazılış",
      sub: "Satış meneceri qaiməni yazır. Ondan sonrakı hər şey sistemin öz işidir — heç kim eyni məlumatı ikinci dəfə daxil etmir.",
      doc: {
        title: "Qaimə",
        number: "№ 1042",
        customer: "Alfa Ticarət MMC",
        total: "1 180,00 AZN",
      },
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
      sub: "Aşağıdakı ekranlar sistemin real interfeysidir. Rəqəmlər nümunədir — demoda onların yerində sizin öz məlumatınız olur.",
      screens: [
        {
          screen: "anbar",
          title: "Anbar qalığı real vaxtda",
          text: "Satış meneceri ümumi qalığı yox, rezervdən sonra satıla bilən qalığı görür. Minimumdan aşağı düşən mal ayrıca siyahıya düşür.",
        },
        {
          screen: "muhasibat",
          title: "E-qaimə və avtomatik yazılış",
          text: "Sənəd yazılan anda mühasibat yazılışı qurulur, e-qaimənin statusu isə göndərildi, qəbul və imtina üzrə izlənir.",
        },
        {
          screen: "maliyye",
          title: "Ödəniş təqvimi",
          text: "Bu həftə nə gələcək, nə ödəniləcək və həftə sonunda kassada nə qalacaq — üç rəqəm bir ekranda.",
        },
      ],
    },

    facts: [
      { value: "6", label: "modul, hamısı eyni bazada" },
      { value: "2–4 həftə", label: "orta qurulma və məlumat köçürülməsi" },
      { value: "1 dəfə", label: "sənəd yazılır, bütün zəncirdə işləyir" },
      { value: "Bakı", label: "qurulma və dəstək komandasının yeri" },
    ],

    sectors: {
      label: "Sektorlar",
      title: "Hər sektorun öz sənədi var",
      sub: "Tikintidə obyekt, restoranda texnoloji xəritə, aptekdə seriya — qurulma sizin sahənin sənəd dövriyyəsinə görə aparılır.",
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
};
