import type { Faq, Feature, Localized } from "@/lib/content";
import type { ModuleSlug } from "./modules";

export type SectorSlug =
  | "tikinti"
  | "restoran"
  | "topdansatis"
  | "istehsal"
  | "perakende"
  | "logistika"
  | "aptek"
  | "xidmet";

export type SectorCopy = {
  name: string;
  title: string;
  /** One line for the sector register. */
  row: string;
  lead: string;
  /** What actually goes wrong in this sector today. */
  problems: string[];
  /** What the setup covers — sector-specific, not generic module names. */
  features: Feature[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export type SectorEntry = {
  slug: SectorSlug;
  modules: ModuleSlug[];
  copy: Localized<SectorCopy>;
};

export const SECTORS: SectorEntry[] = [
  {
    slug: "tikinti",
    modules: ["maliyye", "anbar", "muhasibat", "hesabatlar"],
    copy: {
      az: {
        name: "Tikinti",
        title: "Tikinti şirkətləri üçün ERP",
        row: "Obyekt üzrə smeta, material sərfi və subpodratçı hesablaşması",
        lead: "Tikintidə pulun hara getdiyi obyekt səviyyəsində görünməlidir. Smeta, material sərfi, subpodratçı aktı və faktiki xərc eyni obyekt kartında toplanır.",
        problems: [
          "Smeta Excel-də, faktiki xərc mühasibatda — ikisi heç vaxt üst-üstə düşmür",
          "Obyektə gedən material rəsmi sənədsiz verilir, ay sonunda fərq çıxır",
          "Subpodratçı aktı ilə ödəniş arasında əlaqə yalnız mühasibin yaddaşındadır",
          "Hansı obyektin zərərlə bağlandığı obyekt təhvil veriləndən sonra bilinir",
        ],
        features: [
          {
            title: "Obyekt üzrə uçot",
            text: "Hər obyekt ayrıca maliyyə mərkəzidir. Material, əmək haqqı, texnika və subpodrat xərci obyektə yazılır, gəlirlilik ay ərzində görünür.",
          },
          {
            title: "Smeta və plan-fakt",
            text: "Smeta maddələri sistemə yüklənir, faktiki xərc avtomatik tutuşdurulur. Smetanı aşan maddə dərhal siyahıda görünür.",
          },
          {
            title: "Material tələbnaməsi",
            text: "Obyektdən gələn tələbnamə anbar qalığı ilə tutuşdurulur, çatışmayan hissə üzrə təchizat sifarişi yaradılır.",
          },
          {
            title: "Subpodratçı aktları",
            text: "Görülmüş iş aktı, saxlanma faizi və ödəniş qrafiki müqaviləyə bağlanır. Aktsız ödəniş sistemdən keçmir.",
          },
          {
            title: "Texnika və avadanlıq",
            text: "Texnikanın hansı obyektdə olduğu, iş saatı, yanacaq sərfi və təmir xərci izlənir.",
          },
          {
            title: "Anbar obyektdə",
            text: "Mərkəzi anbar və obyekt anbarı arasında transfer sənədlə aparılır, obyektdəki qalıq real vaxtda görünür.",
          },
        ],
        faq: [
          {
            q: "Neçə obyekti paralel apara bilərik?",
            a: "Obyekt sayına məhdudiyyət yoxdur. Hər obyektin öz smetası, öz anbarı və öz gəlirlilik hesabatı olur.",
          },
          {
            q: "Smetanı öz formatımızda yükləmək olurmu?",
            a: "Bəli, smeta Excel şablonu ilə yüklənir. Şablon qurulma mərhələsində sizin mövcud formanıza uyğunlaşdırılır.",
          },
        ],
        seoTitle: "Tikinti üçün ERP — obyekt uçotu, smeta və material nəzarəti",
        seoDescription:
          "Tikinti şirkətləri üçün BirSistem: obyekt üzrə smeta və plan-fakt, material tələbnaməsi, subpodratçı aktları, texnika xərci və obyekt gəlirliliyi.",
      },
    },
  },
  {
    slug: "restoran",
    modules: ["anbar", "maliyye", "hr", "hesabatlar"],
    copy: {
      az: {
        name: "Restoran",
        title: "Restoran və kafelər üçün ERP",
        row: "Texnoloji xəritə, porsiya maya dəyəri və mətbəx anbarı",
        lead: "Menyudakı hər yeməyin maya dəyəri texnoloji xəritədən hesablanır. Satılan porsiya anbardan xammalı avtomatik silir — ay sonunda sayım fərqi izah oluna bilən rəqəm olur.",
        problems: [
          "Yeməyin real maya dəyəri bilinmir, qiymət təxmini qoyulur",
          "Xammal silinməsi əl ilə aparılır, sayım fərqi hər ay təkrarlanır",
          "Hansı yeməyin pul gətirdiyi, hansının menyunu yüklədiyi ölçülmür",
          "Növbə və əmək haqqı ayrıca cədvəldə saxlanılır",
        ],
        features: [
          {
            title: "Texnoloji xəritə",
            text: "Hər yemək üçün tərkib, çıxım və itki normaları qeyd olunur. Xammal qiyməti dəyişəndə porsiya maya dəyəri özü yenilənir.",
          },
          {
            title: "Avtomatik silinmə",
            text: "Kassada satılan porsiya texnoloji xəritə üzrə anbardan xammalı silir. Mətbəx anbarı real vaxtda azalır.",
          },
          {
            title: "Menyu mühəndisliyi",
            text: "Yeməklər satış həcmi və marja üzrə dörd qrupa bölünür. Hansı mövqeyi saxlamaq, hansını dəyişmək lazım olduğu görünür.",
          },
          {
            title: "Yarımfabrikat",
            text: "Sous, xəmir və digər yarımfabrikatlar ayrıca istehsal sənədi ilə hazırlanır və öz maya dəyəri ilə uçota düşür.",
          },
          {
            title: "Növbə və tabel",
            text: "Növbə qrafiki qurulur, faktiki iş saatı tabelə düşür, əmək haqqı saathesabı hesablanır.",
          },
          {
            title: "Filial müqayisəsi",
            text: "Bir neçə nöqtə varsa, orta çek, gəlirlilik və xammal sərfi filiallar arasında müqayisə olunur.",
          },
        ],
        faq: [
          {
            q: "Mövcud kassa proqramımızla işləyirmi?",
            a: "Kassa sistemindən satış məlumatı inteqrasiya ilə qəbul edilir. Hansı kassa ilə işlədiyinizi demoda dəqiqləşdiririk.",
          },
          {
            q: "Sayım fərqini necə izləyirsiniz?",
            a: "Sistem normativ sərfi hesablayır, sayım isə faktiki qalığı verir. İkisi arasındakı fərq xammal üzrə ayrıca hesabatda göstərilir.",
          },
        ],
        seoTitle: "Restoran üçün ERP — texnoloji xəritə və porsiya maya dəyəri",
        seoDescription:
          "Restoran və kafelər üçün BirSistem: texnoloji xəritə, porsiya maya dəyəri, avtomatik xammal silinməsi, menyu mühəndisliyi və filial müqayisəsi.",
      },
    },
  },
  {
    slug: "topdansatis",
    modules: ["crm", "anbar", "muhasibat", "maliyye"],
    copy: {
      az: {
        name: "Topdan satış",
        title: "Topdan satış üçün ERP",
        row: "Qiymət siyahıları, kredit limiti, marşrut satışı və qaytarma",
        lead: "Yüzlərlə müştəri, fərqli qiymət siyahıları və hər müştərinin öz borcu. Sistem sifarişi qəbul edəndə qalığı, qiyməti və kredit limitini eyni anda yoxlayır.",
        problems: [
          "Hər müştəriyə fərqli qiymət verilir, nəzarət menecerin yaddaşındadır",
          "Borcu olan müştəriyə yeni mal buraxılır, sonra pul yığılmır",
          "Satıcının marşrutu və faktiki səfərləri ölçülmür",
          "Qaytarma və mal dəyişməsi uçotu sənədsiz aparılır",
        ],
        features: [
          {
            title: "Çoxsəviyyəli qiymət siyahısı",
            text: "Müştəri qrupu, həcm və mal qrupu üzrə qiymət və endirim qaydaları. Menecer qaydadan kənara çıxa bilmir.",
          },
          {
            title: "Kredit limiti və blok",
            text: "Hər müştəriyə limit və maksimum gecikmə günü qoyulur. Limit aşılanda yeni sifariş təsdiq tələb edir.",
          },
          {
            title: "Marşrut satışı",
            text: "Satıcının günlük marşrutu planlaşdırılır, mobil tətbiqdən sifariş və qaytarma qeydə alınır.",
          },
          {
            title: "Rezerv və çatdırılma",
            text: "Sifariş rezerv yaradır, yığım vərəqəsi anbarda çap olunur, çatdırılma sürücü üzrə izlənir.",
          },
          {
            title: "Qaytarma və dəyişmə",
            text: "Qaytarılan mal səbəbi ilə qeydə alınır. Təchizatçıya qaytarma ayrıca sənədlə aparılır.",
          },
          {
            title: "Müştəri gəlirliliyi",
            text: "Endirim, çatdırılma xərci və qaytarma nəzərə alınmaqla hər müştərinin real gəlirliliyi hesablanır.",
          },
        ],
        faq: [
          {
            q: "Satıcılar üçün mobil tətbiq varmı?",
            a: "Marşrut, sifariş qəbulu, müştəri borcu və qalıq mobil interfeysdən işləyir. İnternet kəsiləndə sifariş yaddaşda qalır.",
          },
          {
            q: "Neçə qiymət siyahısı qura bilərik?",
            a: "Say məhdud deyil. Qiymət qaydaları bir-birinin üstünə qurulur, sistem hər sifarişdə yekun qiyməti özü hesablayır.",
          },
        ],
        seoTitle: "Topdan satış üçün ERP — qiymət siyahısı, kredit limiti, marşrut",
        seoDescription:
          "Topdan satış şirkətləri üçün BirSistem: çoxsəviyyəli qiymət siyahıları, kredit limiti nəzarəti, marşrut satışı, rezerv, qaytarma və müştəri gəlirliliyi.",
      },
    },
  },
  {
    slug: "istehsal",
    modules: ["anbar", "muhasibat", "hr", "hesabatlar"],
    copy: {
      az: {
        name: "İstehsal",
        title: "İstehsal müəssisələri üçün ERP",
        row: "Resept, istehsal sifarişi, xammal sərfi və məhsul maya dəyəri",
        lead: "İstehsal sifarişi açılanda xammal ehtiyacı hesablanır, sifariş bağlananda hazır məhsulun maya dəyəri özü formalaşır — əmək haqqı və sex xərci daxil olmaqla.",
        problems: [
          "Hazır məhsulun maya dəyəri təxmini hesablanır",
          "Xammal sərfi normadan neçə faiz kənara çıxdığı ölçülmür",
          "İstehsal planı ilə anbar qalığı arasında əlaqə yoxdur",
          "Zay və brak ayrıca uçota alınmır",
        ],
        features: [
          {
            title: "Resept və texnoloji kart",
            text: "Hər məhsul üçün tərkib, normativ sərf və əməliyyat mərhələləri. Versiyalar saxlanılır, köhnə partiyalar öz reseptinə görə hesablanır.",
          },
          {
            title: "İstehsal sifarişi",
            text: "Sifariş açılanda xammal ehtiyacı hesablanır, çatışmayan xammal üzrə təchizat siyahısı yaradılır.",
          },
          {
            title: "Sex üzrə sərf",
            text: "Faktiki xammal sərfi sənədlə yazılır və normativlə tutuşdurulur. Kənarlaşma sex və növbə üzrə göstərilir.",
          },
          {
            title: "Maya dəyərinin formalaşması",
            text: "Xammal, birbaşa əmək haqqı və sex qaimə xərci hazır məhsula paylanır. Məhsul üzrə real gəlirlilik görünür.",
          },
          {
            title: "Zay və brak",
            text: "Zay səbəbi ilə qeydə alınır, təkrar emala gedən hissə ayrıca izlənir.",
          },
          {
            title: "Yarımfabrikat mərhələləri",
            text: "Çoxmərhələli istehsalda hər mərhələnin öz çıxımı və maya dəyəri olur.",
          },
        ],
        faq: [
          {
            q: "Çoxmərhələli istehsal dəstəklənirmi?",
            a: "Bəli. Yarımfabrikat hər mərhələdə ayrıca uçota düşür və növbəti mərhələyə öz maya dəyəri ilə keçir.",
          },
          {
            q: "Sex qaimə xərcini necə paylayırsınız?",
            a: "Paylama bazası sizin uçot siyasətinizə görə seçilir: istehsal həcmi, maşın saatı və ya birbaşa əmək haqqı.",
          },
        ],
        seoTitle: "İstehsal üçün ERP — resept, istehsal sifarişi, maya dəyəri",
        seoDescription:
          "İstehsal müəssisələri üçün BirSistem: resept və texnoloji kart, istehsal sifarişi, normativ və faktiki xammal sərfi, zay uçotu, məhsul maya dəyəri.",
      },
    },
  },
  {
    slug: "perakende",
    modules: ["anbar", "crm", "maliyye", "hesabatlar"],
    copy: {
      az: {
        name: "Pərakəndə",
        title: "Pərakəndə şəbəkələr üçün ERP",
        row: "Mağaza qalığı, kassa uçotu, endirim və loyallıq",
        lead: "Bütün mağazaların qalığı, satışı və kassası mərkəzdə bir yerdə görünür. Mal mərkəzdən mağazaya sənədlə gedir, mağazadan müştəriyə çeklə.",
        problems: [
          "Mağazadakı real qalıq mərkəzdən görünmür",
          "Hansı mağazanın hansı malı satdığı gecikmə ilə bilinir",
          "Endirim kampaniyasının gəlirliliyə təsiri ölçülmür",
          "İnventarizasiya aylarla gecikir",
        ],
        features: [
          {
            title: "Mərkəz və mağaza",
            text: "Mərkəzi anbardan mağazaya transfer sənədlə aparılır. Hər mağazanın qalığı və dövriyyəsi mərkəzdən görünür.",
          },
          {
            title: "Kassa uçotu",
            text: "Kassa növbəsinin açılışı, bağlanışı, nağd və kartla ödənişlər uçota düşür. Kassa fərqi növbə üzrə izlənir.",
          },
          {
            title: "Endirim və aksiyalar",
            text: "Mövsümi endirim, komplekt təklifi və vaxt məhdudiyyətli aksiya qurulur. Kampaniyanın marjaya təsiri ayrıca hesablanır.",
          },
          {
            title: "Loyallıq və müştəri",
            text: "Müştəri kartı, bonus toplanması və alış tarixçəsi. Təkrar alış tezliyi hesabatda görünür.",
          },
          {
            title: "Ölçü və rəng şəbəkəsi",
            text: "Geyim və ayaqqabı üçün model, rəng və ölçü matrisi. Hansı ölçünün qurtardığı bir cədvəldə görünür.",
          },
          {
            title: "Sürətli inventarizasiya",
            text: "Mağaza sayımı barkodla aparılır, fərq sənədi avtomatik hazırlanır.",
          },
        ],
        faq: [
          {
            q: "Neçə mağaza bağlaya bilərik?",
            a: "Mağaza sayına məhdudiyyət yoxdur. Yeni mağaza açılanda şablon üzrə bir neçə dəqiqəyə qurulur.",
          },
          {
            q: "Mağazada internet kəsiləndə satış dayanırmı?",
            a: "Kassa oflayn rejimdə işləməyə davam edir, əlaqə bərpa olunanda məlumat mərkəzə göndərilir.",
          },
        ],
        seoTitle: "Pərakəndə üçün ERP — mağaza qalığı, kassa və loyallıq",
        seoDescription:
          "Pərakəndə şəbəkələr üçün BirSistem: mərkəz-mağaza transferi, kassa uçotu, endirim kampaniyaları, loyallıq, ölçü-rəng matrisi və sürətli inventarizasiya.",
      },
    },
  },
  {
    slug: "logistika",
    modules: ["maliyye", "anbar", "muhasibat", "hesabatlar"],
    copy: {
      az: {
        name: "Logistika",
        title: "Logistika və daşınma üçün ERP",
        row: "Reys uçotu, yanacaq sərfi, gömrük xərci və reys gəlirliliyi",
        lead: "Hər reysin öz gəliri və öz xərci var: yanacaq, sürücü, gömrük, yol haqqı. Reys bağlananda gəlirlilik dərhal görünür.",
        problems: [
          "Reysin faktiki gəlirliliyi ay sonunda, ümumi rəqəmin içində itir",
          "Yanacaq sərfi norması ilə faktiki sərf tutuşdurulmur",
          "Gömrük və əlavə xərclər sonradan yada düşür",
          "Sifarişçiyə hesab gec çıxarılır, ödəniş gecikir",
        ],
        features: [
          {
            title: "Reys kartı",
            text: "Marşrut, nəqliyyat vasitəsi, sürücü, yük və sifarişçi bir kartda. Bütün xərclər reysə yazılır.",
          },
          {
            title: "Yanacaq nəzarəti",
            text: "Normativ və faktiki sərf tutuşdurulur, yanacaq kartları üzrə əməliyyatlar yüklənir.",
          },
          {
            title: "Gömrük və əlavə xərclər",
            text: "Gömrük rüsumu, sığorta, yol haqqı və gözləmə xərci reysin maya dəyərinə daxil edilir.",
          },
          {
            title: "Nəqliyyat parkı",
            text: "Texniki baxış, sığorta müddəti və təmir tarixçəsi maşın üzrə saxlanılır.",
          },
          {
            title: "Sifarişçi ilə hesablaşma",
            text: "Reys bağlanan kimi hesab-faktura formalaşır, ödəniş qrafiki izlənir.",
          },
          {
            title: "Reys gəlirliliyi",
            text: "Marşrut, sifarişçi və nəqliyyat vasitəsi üzrə gəlirlilik müqayisəsi.",
          },
        ],
        faq: [
          {
            q: "Beynəlxalq və daxili daşınma bir yerdə aparıla bilərmi?",
            a: "Bəli. Hər daşınma növünün öz sənəd dəsti və xərc maddələri qurulur, hesabat isə ümumi verilir.",
          },
          {
            q: "GPS izləmə sistemi ilə inteqrasiya varmı?",
            a: "Əsas GPS platformaları ilə inteqrasiya qurulur — yerləşmə və yanacaq məlumatı reys kartına düşür.",
          },
        ],
        seoTitle: "Logistika üçün ERP — reys uçotu, yanacaq və gəlirlilik",
        seoDescription:
          "Logistika şirkətləri üçün BirSistem: reys kartı, yanacaq nəzarəti, gömrük və əlavə xərclər, nəqliyyat parkı, sifarişçi hesablaşması və reys gəlirliliyi.",
      },
    },
  },
  {
    slug: "aptek",
    modules: ["anbar", "muhasibat", "maliyye", "hesabatlar"],
    copy: {
      az: {
        name: "Aptek",
        title: "Aptek şəbəkələri üçün ERP",
        row: "Seriya və yararlılıq müddəti, resept uçotu, qiymət nəzarəti",
        lead: "Hər preparatın seriyası və son istifadə tarixi izlənir. Müddəti yaxınlaşan mal satışa çıxmazdan əvvəl siyahıya düşür.",
        problems: [
          "Yararlılıq müddəti bitən preparat rəfdə qalır",
          "Seriya üzrə uçot aparılmır, geri çağırış zamanı mal tapılmır",
          "Şəbəkə daxilində qalıq balanssız paylanır",
          "Qiymət tənzimləmələrinə riayət əl ilə yoxlanılır",
        ],
        features: [
          {
            title: "Seriya və müddət uçotu",
            text: "Hər daxilolma seriya və son istifadə tarixi ilə qeydə alınır. Satışda ən erkən müddətli seriya təklif olunur.",
          },
          {
            title: "Müddət xəbərdarlığı",
            text: "Müddəti 90, 60 və 30 gün qalan mallar ayrıca siyahılarda toplanır, qaytarma və ya aksiya qərarı vaxtında verilir.",
          },
          {
            title: "Şəbəkə daxilində balanslaşdırma",
            text: "Bir aptekdə çox, digərində az qalan mal üzrə transfer təklifi hazırlanır.",
          },
          {
            title: "Qiymət nəzarəti",
            text: "Tənzimlənən qiymətlər siyahısı sistemdə saxlanılır, həddi aşan qiymət satışa buraxılmır.",
          },
          {
            title: "Resept və xüsusi uçot",
            text: "Reseptlə buraxılan preparatlar ayrıca jurnalda qeydə alınır.",
          },
          {
            title: "Təchizatçı müqayisəsi",
            text: "Eyni preparat üzrə təchizatçı qiymətləri, çatdırılma müddəti və qaytarma şərtləri müqayisə olunur.",
          },
        ],
        faq: [
          {
            q: "Geri çağırılan seriyanı tapmaq nə qədər çəkir?",
            a: "Seriya nömrəsi ilə axtarış bütün apteklərdəki qalığı və satılmış miqdarı dərhal göstərir.",
          },
          {
            q: "Neçə aptek bağlamaq olar?",
            a: "Şəbəkə ölçüsünə məhdudiyyət yoxdur. Hər aptekin öz qalığı, öz kassası və öz hesabatı olur.",
          },
        ],
        seoTitle: "Aptek üçün ERP — seriya, yararlılıq müddəti, qalıq nəzarəti",
        seoDescription:
          "Aptek şəbəkələri üçün BirSistem: seriya və son istifadə tarixi uçotu, müddət xəbərdarlığı, şəbəkə daxilində balanslaşdırma, qiymət nəzarəti və resept jurnalı.",
      },
    },
  },
  {
    slug: "xidmet",
    modules: ["crm", "maliyye", "hr", "hesabatlar"],
    copy: {
      az: {
        name: "Xidmət",
        title: "Xidmət şirkətləri üçün ERP",
        row: "Müqavilə, iş saatı, layihə gəlirliliyi və abunə hesablaşması",
        lead: "Xidmətdə satılan şey vaxtdır. Kimin hansı layihəyə neçə saat sərf etdiyi və həmin saatın nə qədər gəlir gətirdiyi ölçülür.",
        problems: [
          "Layihəyə sərf olunan real vaxt bilinmir",
          "Müqavilə üzrə mərhələli ödənişlər əl ilə izlənir",
          "Abunə xidmətlərində hesab çıxarmaq unudulur",
          "Hansı müştərinin komandanı yüklədiyi, amma pul gətirmədiyi görünmür",
        ],
        features: [
          {
            title: "Layihə və mərhələlər",
            text: "Hər müqavilə layihəyə çevrilir, mərhələlər və təhvil tarixləri qeyd olunur.",
          },
          {
            title: "İş saatının uçotu",
            text: "Əməkdaş öz saatını layihəyə yazır. Saatın maya dəyəri və satış dəyəri ayrıca saxlanılır.",
          },
          {
            title: "Abunə və təkrar hesablar",
            text: "Aylıq abunə üzrə hesablar avtomatik formalaşır və göndərilir, ödəniş izlənir.",
          },
          {
            title: "Layihə gəlirliliyi",
            text: "Layihənin gəliri, sərf olunan saatın dəyəri və birbaşa xərcləri tutuşdurulur.",
          },
          {
            title: "Xidmət sorğuları",
            text: "Müştəri müraciətləri növbəyə düşür, cavab müddəti ölçülür.",
          },
          {
            title: "Komandanın yüklənməsi",
            text: "Kimin nə qədər yükləndiyi həftəlik cədvəldə görünür — yeni layihə götürmək qərarı rəqəmə əsaslanır.",
          },
        ],
        faq: [
          {
            q: "Saat yazılışı işçi üçün ağır olmurmu?",
            a: "Yazılış gün sonunda bir neçə klikə edilir, təkrarlanan tapşırıqlar şablondan seçilir.",
          },
          {
            q: "Sabit qiymətli və saathesabı layihələr bir yerdə aparıla bilərmi?",
            a: "Bəli. Hər layihə üçün hesablaşma modeli ayrıca seçilir, gəlirlilik hər iki modeldə hesablanır.",
          },
        ],
        seoTitle: "Xidmət şirkətləri üçün ERP — layihə, iş saatı, gəlirlilik",
        seoDescription:
          "Xidmət şirkətləri üçün BirSistem: layihə və mərhələlər, iş saatının uçotu, abunə hesabları, layihə gəlirliliyi və komandanın yüklənməsi hesabatı.",
      },
    },
  },
];

export const SECTOR_BY_SLUG = new Map(SECTORS.map((s) => [s.slug, s]));
