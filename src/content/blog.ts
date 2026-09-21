import type { Localized } from "@/lib/content";
import type { ModuleSlug } from "./modules";

export type PostBlock = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type PostCopy = {
  title: string;
  excerpt: string;
  /** Shown above the body; also the meta description. */
  seoTitle: string;
  seoDescription: string;
  blocks: PostBlock[];
};

export type PostEntry = {
  slug: string;
  /** ISO dates; used for Article schema and the sitemap. */
  published: string;
  updated: string;
  readingMinutes: number;
  relatedModule: ModuleSlug;
  copy: Localized<PostCopy>;
};

export const AUTHOR = "BirSistem redaksiyası";

export const POSTS: PostEntry[] = [
  {
    slug: "anbar-sayim-ferqi",
    published: "2026-06-12",
    updated: "2026-09-02",
    readingMinutes: 6,
    relatedModule: "anbar",
    copy: {
      az: {
        title: "Anbar sayımında fərq niyə hər ay təkrarlanır",
        excerpt:
          "Sayım fərqi təsadüf deyil — onun adətən dörd konkret mənbəyi olur. Hər birini necə tapmaq və bağlamaq olar.",
        seoTitle: "Anbar sayımında fərq niyə yaranır və necə aradan qaldırılır",
        seoDescription:
          "Anbar sayım fərqinin dörd əsas səbəbi: sənədsiz hərəkət, ölçü vahidi, qaytarma və zay. Hər biri üçün praktik həll yolu.",
        blocks: [
          {
            paragraphs: [
              "Sayım bitir, fərq çıxır, fərq akt ilə bağlanır — və növbəti ay eyni şey təkrarlanır. Fərqin özü problem deyil; problem onun səbəbinin tapılmamasıdır. Təcrübədə fərqin böyük hissəsi dörd mənbədən gəlir.",
            ],
          },
          {
            heading: "1. Sənədsiz mal hərəkəti",
            paragraphs: [
              "Ən çox rast gəlinən səbəb budur: mal anbardan çıxıb, amma sənəd sabaha saxlanılıb. Satış təcili olub, sürücü gözləyib, anbardar «sonra yazaram» deyib.",
              "Həlli texniki deyil, inzibatidir: mal sənədsiz çıxa bilməməlidir. Sistemdə bunu tətbiq etməyin yolu yığım vərəqəsidir — mal yalnız çap olunmuş vərəqə üzrə buraxılır və vərəqə avtomatik sənədə bağlanır.",
            ],
          },
          {
            heading: "2. Ölçü vahidi qarışıqlığı",
            paragraphs: [
              "Eyni mal kiloqramla alınır, ədədlə satılır; qutu ilə gəlir, dənə ilə verilir. Çevirmə əmsalı bir yerdə yazılmayıbsa, fərq riyazi olaraq qaçılmazdır.",
              "Hər mal üçün əsas ölçü vahidi və çevirmə əmsalları kataloqda saxlanılmalıdır. Sənəd yazılanda sistem özü çevirir, insan yaddaşı işə qarışmır.",
            ],
          },
          {
            heading: "3. Qaytarma və dəyişmə",
            paragraphs: [
              "Müştəri malı qaytarır, satıcı onu rəfə qoyur, amma uçotda heç nə dəyişmir. Ya da əksinə: qaytarma yazılır, mal isə anbara qayıtmır.",
              "Qaytarma ayrıca sənəd növü olmalıdır və səbəb kodu ilə qeydə alınmalıdır. Səbəb kodları bir neçə aydan sonra özü-özlüyündə dəyərli hesabata çevrilir.",
            ],
          },
          {
            heading: "4. Zay, sınıq və yararsız mal",
            paragraphs: [
              "Zay mal çox vaxt heç yerdə yazılmır — sadəcə yoxa çıxır. Ay sonunda isə sayım fərqi kimi görünür və «oğurluq» kimi izah edilir.",
              "Silinmə sənədi rəsmiləşdirilməlidir, hətta məbləğ kiçik olsa belə. Zayın səbəb və miqdar üzrə hesabatı çox vaxt təchizatçı və ya saxlanma şəraiti ilə bağlı problemi üzə çıxarır.",
            ],
          },
          {
            heading: "Fərqi necə ölçmək lazımdır",
            paragraphs: [
              "Ümumi fərq məbləği az şey deyir. Faydalı olan iki göstəricidir: mal qrupu üzrə fərq faizi və fərqin sənəd növünə görə bölgüsü.",
              "Birinci göstərici hansı qrupda nəzarətin zəif olduğunu, ikincisi isə prosesin hansı nöqtəsində itkinin yarandığını göstərir. İkisi birlikdə növbəti ayın planını verir.",
            ],
          },
          {
            heading: "Nədən başlamaq",
            list: [
              "Bir ay ərzində bütün mal hərəkətlərini sənədləşdirin — istisnasız",
              "Ölçü vahidlərini və çevirmə əmsallarını kataloqda təsbit edin",
              "Qaytarma və silinmə üçün səbəb kodları tətbiq edin",
              "Sayımı bir neçə mal qrupu üzrə həftəlik aparın, ildə bir dəfə yox",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "maya-deyeri-hesablamasi",
    published: "2026-07-08",
    updated: "2026-08-20",
    readingMinutes: 7,
    relatedModule: "muhasibat",
    copy: {
      az: {
        title: "Maya dəyərini düz hesablamağın dörd şərti",
        excerpt:
          "Alış qiyməti maya dəyəri deyil. Gömrük, daşınma, valyuta fərqi və zay nəzərə alınmayanda marja olduğundan yüksək görünür.",
        seoTitle: "Maya dəyəri necə hesablanır — dörd əsas şərt",
        seoDescription:
          "Real maya dəyəri: əlavə xərclərin paylanması, valyuta fərqi, partiya uçotu və zay. Marjanın niyə olduğundan yüksək göründüyü izah edilir.",
        blocks: [
          {
            paragraphs: [
              "Şirkətlərin çoxunda maya dəyəri kimi alış qiyməti götürülür. Bu, hesablamanı sadələşdirir, amma nəticəni sistematik şəkildə səhv edir — həmişə eyni istiqamətdə: marja olduğundan yüksək görünür.",
            ],
          },
          {
            heading: "1. Əlavə xərclər daxilolmaya paylanmalıdır",
            paragraphs: [
              "Gömrük rüsumu, daşınma, sığorta, yükləmə-boşaltma və saxlanma xərci malın dəyərinin bir hissəsidir. Bunlar ümumi xərc kimi yazılanda malın özü ucuz görünür.",
              "Paylama bazası məntiqli seçilməlidir: daşınma üçün çəki və ya həcm, gömrük üçün dəyər. Bir baza bütün xərclərə uyğun gəlmir.",
            ],
          },
          {
            heading: "2. Valyuta fərqi vaxtında bağlanmalıdır",
            paragraphs: [
              "Mal valyuta ilə alınıb, manatla satılırsa, ödəniş tarixi ilə daxilolma tarixi arasındakı məzənnə fərqi maya dəyərinə təsir edir.",
              "Fərq ay sonunda toplu şəkildə yazılanda hansı malın nə qədər bahalaşdığı itir. Fərq sənəd səviyyəsində bağlanmalıdır.",
            ],
          },
          {
            heading: "3. Partiya uçotu",
            paragraphs: [
              "Eyni mal müxtəlif vaxtlarda fərqli qiymətə alınır. Orta qiymət ilə işləmək asandır, amma qiymət tez dəyişən mallarda nəticəni əhəmiyyətli dərəcədə təhrif edir.",
              "Partiya üzrə uçot daha dəqiqdir və qaytarma, geri çağırış, yararlılıq müddəti kimi məsələləri də eyni anda həll edir.",
            ],
          },
          {
            heading: "4. Zay maya dəyərinə daxildir",
            paragraphs: [
              "Satılan hər malın üzərində satılmayan malın payı var. Zay, sınıq və müddəti keçmiş mal ayrıca uçota alınmırsa, real maya dəyəri gizli qalır.",
              "Praktik yanaşma: zay faizini mal qrupu üzrə ölçün və qiymətqoyma zamanı nəzərə alın. Bu, qiyməti qaldırmaq demək deyil — düzgün qiymət qoymaq deməkdir.",
            ],
          },
          {
            heading: "Nəticə necə yoxlanılır",
            paragraphs: [
              "Yoxlama sadədir: bir ay ərzində satılmış malların maya dəyərini toplayın və mühasibatdakı satışın maya dəyəri ilə tutuşdurun. İki rəqəm arasındakı fərq hesablamanızın dəqiqliyini göstərir.",
              "Fərq beş faizdən çoxdursa, yuxarıdakı dörd bənddən ən azı biri işləmir.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "debitor-borcu-yaslanma",
    published: "2026-08-04",
    updated: "2026-09-10",
    readingMinutes: 5,
    relatedModule: "maliyye",
    copy: {
      az: {
        title: "Debitor borcu: yaşlanma cədvəli və 90 gün həddi",
        excerpt:
          "Ümumi borc məbləği heç nə demir. Borcun yaşı və müştəri üzrə bölgüsü hansı pulun geri gələcəyini göstərir.",
        seoTitle: "Debitor borcunun yaşlanma cədvəli necə oxunur",
        seoDescription:
          "Debitor borcunun yaşlanma cədvəli, kredit limiti və 90 gün həddi. Hansı borcun geri qayıtma ehtimalının azaldığını necə görmək olar.",
        blocks: [
          {
            paragraphs: [
              "«Müştərilər bizə 180 min manat borcludur» cümləsi özlüyündə məlumat daşımır. Həmin məbləğin 20 mini bu həftə ödəniləcək, 40 mini isə iki ildir yerində durur — bunlar tamamilə fərqli rəqəmlərdir.",
            ],
          },
          {
            heading: "Yaşlanma cədvəli nədir",
            paragraphs: [
              "Yaşlanma cədvəli borcu ödəmə müddətindən keçən günlərə görə qruplaşdırır: müddəti çatmamış, 1–30 gün, 31–60, 61–90 və 90 gündən çox.",
              "Cədvəl bir baxışda iki şeyi göstərir: pulun nə vaxt gələcəyini və hansı hissəsinin artıq risk zonasında olduğunu.",
            ],
          },
          {
            heading: "Niyə məhz 90 gün",
            paragraphs: [
              "90 gün universal qayda deyil, amma praktikada dönüş nöqtəsidir. Bu həddi keçən borcun geri qayıtma ehtimalı nəzərəçarpacaq dərəcədə azalır, çünki həmin müddətdə müştərinin maliyyə vəziyyəti və ya münasibət dəyişmiş olur.",
              "Ona görə 90 günü hesabat həddi kimi yox, hərəkət həddi kimi qoymaq lazımdır: bu nöqtədə satış dayandırılır və məsələ rəhbər səviyyəsinə qalxır.",
            ],
          },
          {
            heading: "Kredit limiti necə qurulur",
            list: [
              "Hər müştəriyə maksimum borc məbləği və maksimum gecikmə günü təyin edin",
              "Limit aşılanda yeni sifariş avtomatik təsdiq tələb etsin",
              "Limiti satış həcminə yox, ödəniş intizamına görə artırın",
              "Limitə yalnız rəhbər dəyişiklik edə bilsin, satış meneceri yox",
            ],
          },
          {
            heading: "Ölçülməli iki göstərici",
            paragraphs: [
              "Birincisi — borcun orta yığılma müddəti: ümumi debitor borcunun gündəlik satışa nisbəti. Bu rəqəm artırsa, satış artsa belə pul azalır.",
              "İkincisi — 90 gündən artıq borcun ümumi borcdakı payı. Bu pay vaxtla artırsa, problem ayrı-ayrı müştərilərdə yox, satış qaydalarındadır.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "excel-den-erp-e-kecid",
    published: "2026-09-01",
    updated: "2026-09-15",
    readingMinutes: 8,
    relatedModule: "crm",
    copy: {
      az: {
        title: "Excel-dən ERP-yə keçid: 30 günlük real plan",
        excerpt:
          "Keçidin çətin hissəsi proqram deyil, məlumatın təmizlənməsi və komandanın vərdişləridir. Həftə-həftə nə etmək lazımdır.",
        seoTitle: "Excel-dən ERP-yə keçid — 30 günlük plan",
        seoDescription:
          "Excel-dən ERP sisteminə keçidin həftə-həftə planı: kataloqun təmizlənməsi, açılış qalıqları, paralel iş və komandanın hazırlanması.",
        blocks: [
          {
            paragraphs: [
              "Keçid layihələrinin əksəriyyəti proqramın imkanlarına görə yox, hazırlığın çatışmamasına görə uzanır. Aşağıdakı plan orta ölçülü ticarət şirkəti üçün realdır və həftələrə bölünüb.",
            ],
          },
          {
            heading: "Birinci həftə: kataloqun təmizlənməsi",
            paragraphs: [
              "Excel-dəki mal siyahısı demək olar ki, həmişə dublikatlarla doludur: eyni mal fərqli adla iki-üç dəfə yazılır. Bu siyahı olduğu kimi köçürülsə, problem yeni sistemə də keçir.",
              "Bu həftədə mal adları vahid formata salınır, dublikatlar birləşdirilir, ölçü vahidləri və çevirmə əmsalları təsbit edilir. Eyni iş kontragent siyahısı üçün də aparılır.",
            ],
          },
          {
            heading: "İkinci həftə: struktur və qaydalar",
            paragraphs: [
              "Anbarlar, filiallar, qiymət siyahıları, endirim qaydaları və istifadəçi rolları qurulur. Bu mərhələdə əsas sual «kim nəyi görə bilər» sualıdır.",
              "Burada vaxt itirməyə dəyər: sonradan rolları dəyişmək asandır, amma səhv qurulmuş rol strukturu ilə bir ay işləmək məlumat keyfiyyətini pozur.",
            ],
          },
          {
            heading: "Üçüncü həftə: açılış qalıqları",
            paragraphs: [
              "Anbar qalıqları, kontragent borcları, kassa və bank qalıqları köçürülür. Köçürmədən dərhal sonra üzləşmə aparılır — rəqəmlər Excel-dəki ilə tutuşmalıdır.",
              "Bu həftənin sonunda sistem artıq işə hazır olur, amma hələ də köhnə üsul davam edir.",
            ],
          },
          {
            heading: "Dördüncü həftə: paralel iş",
            paragraphs: [
              "Bir-iki həftə hər iki sistemdə paralel işləmək məntiqlidir. Bu, komandaya vərdiş qazandırır və fərqləri erkən üzə çıxarır.",
              "Paralel işin müddətini uzatmaq isə səhvdir: bir aydan çox davam edəndə komanda iki sistemi də yarımçıq aparmağa başlayır.",
            ],
          },
          {
            heading: "Keçidi çətinləşdirən üç şey",
            list: [
              "Kataloqu təmizləmədən köçürmək — dublikatlar bütün hesabatları pozur",
              "Rolları «hamı hər şeyi görsün» prinsipi ilə qurmaq",
              "Köhnə Excel fayllarını paralel saxlamağa davam etmək",
            ],
          },
          {
            heading: "Uğurun ölçüsü",
            paragraphs: [
              "Keçidin uğurlu sayılması üçün bir meyar kifayətdir: ayın sonunda hesabatı yığmaq üçün heç kimin Excel açmasına ehtiyac qalmamalıdır.",
              "Bu meyar ödənməyibsə, sistem quraşdırılıb, amma işə düşməyib.",
            ],
          },
        ],
      },
    },
  },
];

export const POST_BY_SLUG = new Map(POSTS.map((post) => [post.slug, post]));

/** Newest first, for the blog index and the sitemap. */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) =>
  b.published.localeCompare(a.published),
);
