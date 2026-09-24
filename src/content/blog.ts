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

export const AUTHOR: Localized<string> = {
  az: "BirSistem redaksiyası",
  ru: "Редакция BirSistem",
};

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
      ru: {
        title: "Почему расхождения при инвентаризации повторяются каждый месяц",
        excerpt:
          "Расхождение при инвентаризации — не случайность: у него обычно четыре конкретных источника. Как найти и закрыть каждый из них.",
        seoTitle: "Расхождения при инвентаризации склада: причины и как их устранить",
        seoDescription:
          "Четыре главные причины расхождений при инвентаризации: движение без документов, единицы измерения, возвраты и брак. Практическое решение для каждой.",
        blocks: [
          {
            paragraphs: [
              "Инвентаризация закончена, выявлено расхождение, его закрывают актом — и в следующем месяце всё повторяется. Проблема не в самом расхождении, а в том, что не найдена его причина. На практике большая часть расхождений возникает из четырёх источников.",
            ],
          },
          {
            heading: "1. Движение товара без документов",
            paragraphs: [
              "Самая частая причина: товар ушёл со склада, а документ отложили на завтра. Продажа была срочной, водитель ждал, кладовщик сказал «потом оформлю».",
              "Решение не техническое, а административное: товар не должен уходить без документа. В системе это обеспечивает лист подбора — товар отпускается только по распечатанному листу, и лист автоматически привязывается к документу.",
            ],
          },
          {
            heading: "2. Путаница в единицах измерения",
            paragraphs: [
              "Один и тот же товар закупают в килограммах, а продают в штуках; приходит коробками, а отпускается поштучно. Если коэффициент пересчёта нигде не записан, расхождение математически неизбежно.",
              "Для каждого товара в каталоге должны храниться базовая единица измерения и коэффициенты пересчёта. При записи документа система пересчитывает сама, память человека не участвует.",
            ],
          },
          {
            heading: "3. Возвраты и обмены",
            paragraphs: [
              "Клиент возвращает товар, продавец ставит его на полку, а в учёте ничего не меняется. Или наоборот: возврат оформлен, а товар на склад не вернулся.",
              "Возврат должен быть отдельным видом документа с кодом причины. Через несколько месяцев коды причин сами по себе превращаются в ценный отчёт.",
            ],
          },
          {
            heading: "4. Брак, бой и непригодный товар",
            paragraphs: [
              "Бракованный товар часто нигде не фиксируется — он просто исчезает. А в конце месяца проявляется как расхождение при инвентаризации и объясняется «кражей».",
              "Списание нужно оформлять документом, даже если сумма небольшая. Отчёт по браку с причинами и количеством часто выявляет проблему с поставщиком или условиями хранения.",
            ],
          },
          {
            heading: "Как измерять расхождения",
            paragraphs: [
              "Общая сумма расхождения говорит немного. Полезны два показателя: процент расхождения по группам товаров и распределение расхождений по видам документов.",
              "Первый показывает, в какой группе слабый контроль, второй — в какой точке процесса возникают потери. Вместе они дают план на следующий месяц.",
            ],
          },
          {
            heading: "С чего начать",
            list: [
              "В течение месяца оформляйте документами все движения товара — без исключений",
              "Зафиксируйте в каталоге единицы измерения и коэффициенты пересчёта",
              "Введите коды причин для возвратов и списаний",
              "Проводите инвентаризацию по нескольким группам товаров еженедельно, а не раз в год",
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
      ru: {
        title: "Четыре условия правильного расчёта себестоимости",
        excerpt:
          "Цена закупки — это не себестоимость. Если не учитывать таможню, доставку, курсовые разницы и брак, маржа выглядит выше, чем есть.",
        seoTitle: "Как рассчитать себестоимость — четыре главных условия",
        seoDescription:
          "Реальная себестоимость: распределение дополнительных расходов, курсовые разницы, партионный учёт и брак. Почему маржа кажется выше, чем на самом деле.",
        blocks: [
          {
            paragraphs: [
              "Во многих компаниях за себестоимость берут цену закупки. Это упрощает расчёт, но систематически искажает результат — и всегда в одну сторону: маржа выглядит выше, чем есть.",
            ],
          },
          {
            heading: "1. Дополнительные расходы нужно распределять на поступление",
            paragraphs: [
              "Таможенная пошлина, доставка, страховка, погрузка-разгрузка и хранение — часть стоимости товара. Когда их записывают как общие расходы, сам товар выглядит дешевле.",
              "База распределения должна быть логичной: для доставки — вес или объём, для таможни — стоимость. Одна база не подходит для всех расходов.",
            ],
          },
          {
            heading: "2. Курсовые разницы нужно закрывать вовремя",
            paragraphs: [
              "Если товар закуплен в валюте, а продаётся в манатах, разница курса между датой оплаты и датой поступления влияет на себестоимость.",
              "Когда разницу списывают общей суммой в конце месяца, теряется информация о том, какой товар насколько подорожал. Разницу нужно закрывать на уровне документа.",
            ],
          },
          {
            heading: "3. Партионный учёт",
            paragraphs: [
              "Один и тот же товар закупается в разное время по разной цене. Работать со средней ценой просто, но для товаров с быстро меняющейся ценой это заметно искажает результат.",
              "Партионный учёт точнее и одновременно решает вопросы возвратов, отзывов и сроков годности.",
            ],
          },
          {
            heading: "4. Брак входит в себестоимость",
            paragraphs: [
              "На каждом проданном товаре лежит доля непроданного. Если брак, бой и просроченный товар не учитываются отдельно, реальная себестоимость остаётся скрытой.",
              "Практический подход: измерьте процент брака по группам товаров и учитывайте его при ценообразовании. Это не значит поднимать цену — это значит ставить правильную цену.",
            ],
          },
          {
            heading: "Как проверить результат",
            paragraphs: [
              "Проверка простая: сложите себестоимость проданных за месяц товаров и сравните с себестоимостью продаж в бухгалтерии. Разница между двумя цифрами показывает точность вашего расчёта.",
              "Если разница больше пяти процентов, как минимум один из четырёх пунктов выше не работает.",
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
      ru: {
        title: "Дебиторская задолженность: таблица старения и порог 90 дней",
        excerpt:
          "Общая сумма долга ничего не говорит. Возраст долга и его разбивка по клиентам показывают, какие деньги вернутся.",
        seoTitle: "Как читать таблицу старения дебиторской задолженности",
        seoDescription:
          "Таблица старения дебиторской задолженности, кредитный лимит и порог 90 дней. Как увидеть, по какому долгу снижаются шансы на возврат.",
        blocks: [
          {
            paragraphs: [
              "Фраза «клиенты должны нам 180 тысяч манатов» сама по себе ничего не сообщает. Если 20 тысяч из этой суммы оплатят на этой неделе, а 40 тысяч лежат без движения два года — это совершенно разные цифры.",
            ],
          },
          {
            heading: "Что такое таблица старения",
            paragraphs: [
              "Таблица старения группирует долг по числу дней после срока оплаты: срок не наступил, 1–30 дней, 31–60, 61–90 и более 90 дней.",
              "С одного взгляда таблица показывает две вещи: когда придут деньги и какая их часть уже в зоне риска.",
            ],
          },
          {
            heading: "Почему именно 90 дней",
            paragraphs: [
              "90 дней — не универсальное правило, но на практике это переломный момент. Вероятность возврата долга после этого порога заметно снижается, потому что за это время у клиента меняется финансовое положение или отношения.",
              "Поэтому 90 дней стоит ставить не как порог отчёта, а как порог действия: в этой точке продажи останавливаются, а вопрос поднимается на уровень руководителя.",
            ],
          },
          {
            heading: "Как настроить кредитный лимит",
            list: [
              "Назначьте каждому клиенту максимальную сумму долга и максимальное число дней просрочки",
              "При превышении лимита новый заказ должен автоматически требовать согласования",
              "Увеличивайте лимит по платёжной дисциплине, а не по объёму продаж",
              "Менять лимит может только руководитель, а не менеджер по продажам",
            ],
          },
          {
            heading: "Два показателя, которые нужно измерять",
            paragraphs: [
              "Первый — средний срок погашения: отношение общей дебиторской задолженности к дневным продажам. Если эта цифра растёт, денег становится меньше, даже когда продажи растут.",
              "Второй — доля долга старше 90 дней в общем долге. Если эта доля со временем растёт, проблема не в отдельных клиентах, а в правилах продаж.",
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
      ru: {
        title: "Переход с Excel на ERP: реальный план на 30 дней",
        excerpt:
          "Сложная часть перехода — не программа, а очистка данных и привычки команды. Что делать неделя за неделей.",
        seoTitle: "Переход с Excel на ERP — план на 30 дней",
        seoDescription:
          "План перехода с Excel на ERP-систему по неделям: очистка каталога, начальные остатки, параллельная работа и подготовка команды.",
        blocks: [
          {
            paragraphs: [
              "Большинство проектов перехода затягиваются не из-за возможностей программы, а из-за недостаточной подготовки. План ниже реалистичен для торговой компании среднего размера и разбит по неделям.",
            ],
          },
          {
            heading: "Первая неделя: очистка каталога",
            paragraphs: [
              "Список товаров в Excel почти всегда полон дублей: один и тот же товар записан два-три раза под разными названиями. Если перенести его как есть, проблема перейдёт и в новую систему.",
              "На этой неделе названия товаров приводятся к единому формату, дубли объединяются, фиксируются единицы измерения и коэффициенты пересчёта. То же самое делается со списком контрагентов.",
            ],
          },
          {
            heading: "Вторая неделя: структура и правила",
            paragraphs: [
              "Настраиваются склады, филиалы, прайс-листы, правила скидок и роли пользователей. Главный вопрос этого этапа — «кто что может видеть».",
              "Здесь стоит не торопиться: роли потом легко изменить, но месяц работы с неправильно выстроенной структурой ролей портит качество данных.",
            ],
          },
          {
            heading: "Третья неделя: начальные остатки",
            paragraphs: [
              "Переносятся складские остатки, долги контрагентов, остатки кассы и банка. Сразу после переноса проводится сверка — цифры должны совпасть с Excel.",
              "К концу этой недели система готова к работе, но старый способ пока продолжает действовать.",
            ],
          },
          {
            heading: "Четвёртая неделя: параллельная работа",
            paragraphs: [
              "Одну-две недели имеет смысл работать параллельно в обеих системах. Это помогает команде привыкнуть и рано выявляет расхождения.",
              "А вот затягивать параллельную работу — ошибка: если она длится больше месяца, команда начинает вести обе системы наполовину.",
            ],
          },
          {
            heading: "Три вещи, которые усложняют переход",
            list: [
              "Переносить каталог без очистки — дубли ломают все отчёты",
              "Настраивать роли по принципу «пусть все видят всё»",
              "Продолжать параллельно вести старые файлы Excel",
            ],
          },
          {
            heading: "Мерило успеха",
            paragraphs: [
              "Чтобы считать переход успешным, достаточно одного критерия: в конце месяца никому не нужно открывать Excel, чтобы собрать отчёт.",
              "Если этот критерий не выполнен, система установлена, но не заработала.",
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
