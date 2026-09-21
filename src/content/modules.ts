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
    },
  },
];

export const MODULE_BY_SLUG = new Map(MODULES.map((m) => [m.slug, m]));

export function moduleEntry(slug: ModuleSlug): ModuleEntry {
  const entry = MODULE_BY_SLUG.get(slug);
  if (!entry) throw new Error(`Unknown module: ${slug}`);
  return entry;
}
