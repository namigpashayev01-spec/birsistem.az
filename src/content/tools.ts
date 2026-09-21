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
    },
  },
];

export const TOOL_BY_SLUG = new Map(TOOLS.map((t) => [t.slug, t]));
