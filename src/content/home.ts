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
    doc: {
      caption: string;
      title: string;
      number: string;
      date: string;
      customer: string;
      lineItem: string;
      quantity: string;
      total: string;
      /** Where that one document lands, in order. */
      steps: { module: string; effect: string }[];
    };
  };

  problems: {
    label: string;
    title: string;
    sub: string;
    items: { text: string; module: ModuleSlug }[];
  };

  modules: {
    label: string;
    title: string;
    sub: string;
  };

  proof: {
    label: string;
    title: string;
    sub: string;
    checks: { title: string; text: string }[];
    note: string;
  };

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
      doc: {
        caption: "Bir qaimə, dörd modul. Məlumat ikinci dəfə yazılmır.",
        title: "Qaimə",
        number: "№ 1042",
        date: "21.09.2026",
        customer: "Alfa Ticarət MMC",
        lineItem: "Kabel NYM 3×2,5",
        quantity: "12 ədəd",
        total: "1 180,00 AZN",
        steps: [
          { module: "Anbar", effect: "qalıq 12 ədəd azalır" },
          { module: "Mühasibat", effect: "yazılış və e-qaimə hazırlanır" },
          { module: "Maliyyə", effect: "gözlənilən ödəniş təqvimə düşür" },
          { module: "Hesabatlar", effect: "gəlir və marja yenilənir" },
        ],
      },
    },

    problems: {
      label: "Problem",
      title: "Problem proqramda deyil, proqramların sayındadır",
      sub: "Aşağıdakılardan biri tanış gəlirsə, məsələ bir modulun çatışmamasında yox, modulların bir-birini görməməsindədir.",
      items: [
        {
          text: "Satış meneceri anbara zəng edib qalıq soruşur, cavab gələnə qədər müştəri gözləyir",
          module: "anbar",
        },
        {
          text: "Eyni qaimə üç dəfə yazılır: satışda, anbarda və mühasibatda",
          module: "muhasibat",
        },
        {
          text: "Kimin nə qədər borcu olduğu yalnız ay sonunda, üzləşmə zamanı bilinir",
          module: "maliyye",
        },
        {
          text: "Rəhbər keçən ayın rəqəmini bu ayın ortasında görür",
          module: "hesabatlar",
        },
      ],
    },

    modules: {
      label: "Hazır həllər",
      title: "Altı modul, bir baza, bir giriş",
      sub: "Hər modul ayrıca işləyə bilər, amma dəyəri birlikdə verir: bir sənəd bütün zəncir boyunca özü hərəkət edir.",
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
