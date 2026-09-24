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
  /**
   * The argument for a system at all, before any feature list. `changes` is
   * paired one-to-one with `problems`, so the page can set them side by side:
   * the same row today, and the same row once the system is in. Keep the two
   * arrays the same length and in the same order.
   */
  why: {
    title: string;
    lead: string;
    changes: string[];
  };
  /**
   * The words this sector actually uses at work, five of them, set across the
   * foot of the page hero. Cheapest honest way to make a sector page feel like
   * its own sector: a builder and a restaurateur recognise their own vocabulary
   * before they have read a sentence. Optional — a sector without it simply
   * gets no row.
   */
  signature?: string[];

  /**
   * What the setup covers — sector-specific, not generic module names. Grouped
   * because a dozen capabilities in one grid reads as a wall rather than as an
   * answer to "what do I actually get".
   */
  featureGroups: { group: string; note: string; items: Feature[] }[];

  /**
   * What the business gets out of it, as distinct from what the software does.
   * `featureGroups` answers "what is in it"; this answers "what changes for me".
   * Kept free of invented percentages — every line is a structural consequence
   * of the setup, not a claimed statistic. Optional while sectors are written
   * one at a time.
   */
  benefits?: {
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
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
        why: {
          title: "Tikintidə pul obyekt səviyyəsində itir",
          lead: "Tikinti şirkətində mənfəət ümumi dövriyyədə deyil, hər obyektin öz smetasında yaranır. Obyekt təhvil veriləndən sonra hesablanan gəlirlilik isə qərar üçün gecdir: material artıq alınıb, subpodratçıya ödənilib, smetadan çıxış baş verib. Sistemin işi həmin fərqi ay ərzində — hələ düzəliş mümkün olanda — maddə adı ilə göstərməkdir.",
          changes: [
            "Smeta maddəsi ilə faktiki xərc eyni cədvəldə dayanır, kənarlaşma faizi hər gün yenilənir",
            "Material tələbnamə və transfer sənədi ilə gedir, obyekt anbarındakı qalıq mərkəzdən görünür",
            "Ödəniş akta bağlanır — təsdiqlənməmiş iş üzrə ödəniş sənədi ümumiyyətlə açılmır",
            "Obyekt gəlirliliyi cari ayın rəqəmləri ilə hesablanır, zərərə gedən obyekt işin ortasında görünür",
          ],
        },
        signature: [
          "Obyekt",
          "Smeta və plan-fakt",
          "Material tələbnaməsi",
          "Subpodrat aktı",
          "Obyekt gəlirliliyi",
        ],
        featureGroups: [
          {
            group: "Obyekt və smeta",
            note: "Hər obyekt ayrıca maliyyə mərkəzidir — bütün rəqəmlər ona yığılır.",
            items: [
              {
                title: "Obyekt üzrə uçot",
                text: "Material, əmək haqqı, texnika və subpodrat xərci birbaşa obyektə yazılır. Bir əməliyyat eyni anda iki obyektə düşə bilmir.",
              },
              {
                title: "Smeta və plan-fakt",
                text: "Smeta maddələri sistemə yüklənir, faktiki xərc avtomatik tutuşdurulur. Smetanı aşan maddə dərhal ayrıca siyahıda görünür.",
              },
              {
                title: "Əlavə işlər və smeta versiyaları",
                text: "Sifarişçi ilə razılaşdırılan əlavə iş yeni versiya kimi saxlanılır. İlkin smeta ilə yekun arasındakı fərq izlənə bilir.",
              },
              {
                title: "Obyekt gəlirliliyi",
                text: "Hər obyekt üzrə gəlir, xərc və qalan smeta həcmi bir hesabatda. Obyektlər bir-biri ilə müqayisə olunur.",
              },
            ],
          },
          {
            group: "Material, anbar və texnika",
            note: "Obyektə gedən hər şey sənədlə gedir və sənədlə qayıdır.",
            items: [
              {
                title: "Material tələbnaməsi",
                text: "Obyektdən gələn tələbnamə anbar qalığı ilə tutuşdurulur, çatışmayan hissə üzrə təchizat sifarişi yaradılır.",
              },
              {
                title: "Obyekt anbarı",
                text: "Mərkəzi anbar və obyekt anbarı arasında transfer sənədlə aparılır, obyektdəki qalıq real vaxtda görünür.",
              },
              {
                title: "Təchizat və təklif müqayisəsi",
                text: "Eyni material üzrə təchizatçı qiymətləri, çatdırılma müddəti və ödəniş şərti yan-yana müqayisə olunur.",
              },
              {
                title: "Texnika və avadanlıq",
                text: "Texnikanın hansı obyektdə olduğu, iş saatı, yanacaq sərfi və təmir xərci izlənir, xərc obyektə paylanır.",
              },
            ],
          },
          {
            group: "Müqavilə, akt və komanda",
            note: "Ödənişin sənədsiz getməsinin qarşısı sistem səviyyəsində alınır.",
            items: [
              {
                title: "Subpodratçı aktları",
                text: "Görülmüş iş aktı, saxlanma faizi və ödəniş qrafiki müqaviləyə bağlanır. Aktsız ödəniş sistemdən keçmir.",
              },
              {
                title: "Sifarişçiyə görülmüş işlər aktı",
                text: "Obyekt üzrə yerinə yetirilmiş həcm akta çevrilir, hesab-faktura və e-qaimə ondan formalaşır.",
              },
              {
                title: "Briqada və tabel",
                text: "İşçilərin obyekt üzrə tabeli aparılır, əmək haqqı obyektin xərcinə düşür.",
              },
              {
                title: "Sənəd və icazə arxivi",
                text: "Müqavilə, layihə sənədi, icazə və sertifikatlar obyekt kartına bağlanır, müddəti bitənlər xəbərdarlıq verir.",
              },
            ],
          },
        ],
        benefits: {
          title: "Tikinti şirkəti bundan nə qazanır",
          lead: "Aşağıdakılar proqramın funksiyaları deyil — iş qaydasının dəyişməsinin nəticəsidir. Hər biri konkret bir sualın cavabının kimdən və nə vaxt alındığını dəyişir.",
          items: [
            {
              title: "Zərər obyekt bitməmiş görünür",
              text: "Smeta maddəsi ilə faktiki xərc hər gün tutuşdurulduğu üçün kənarlaşma obyektin ortasında üzə çıxır. Material dəyişmək, subpodratçı ilə yenidən danışmaq və ya sifarişçidən əlavə iş almaq hələ mümkün olan mərhələdə qərar verirsiniz — təhvildən sonra yox.",
            },
            {
              title: "Materialın hara getdiyi sualı qapanır",
              text: "Obyektə gedən hər ton sement tələbnamə və transfer sənədi ilə gedir, obyekt anbarındakı qalıq mərkəzdən görünür. «Material getdi, amma harada olduğu bilinmir» vəziyyəti sənəd zəncirində bağlanır.",
            },
            {
              title: "Ödəniş yalnız təsdiqlənmiş işə gedir",
              text: "Subpodratçıya ödəniş sənədi görülmüş iş aktı olmadan sistemdə ümumiyyətlə açılmır. Saxlanma faizi və ödəniş qrafiki müqaviləyə bağlı olduğu üçün ikiqat ödəniş və vaxtından əvvəl ödəniş riski texniki olaraq yox olur.",
            },
            {
              title: "Yeni tenderə keçmiş obyektin faktı ilə çıxırsınız",
              text: "Növbəti obyektin smetasını qurarkən təxminə deyil, oxşar obyektin faktiki maya dəyərinə baxırsınız. Hansı maddədə həmişə aşdığınız görünür və qiymət təklifi həmin fərqi nəzərə alaraq verilir.",
            },
            {
              title: "Rəhbər obyektləri yan-yana görür",
              text: "Bütün obyektlər eyni hesabatda: gəlir, çəkilmiş xərc, qalan smeta həcmi və cari gəlirlilik. Hansı obyektin resurs çəkdiyi, hansının dayandığı bir ekranda müqayisə olunur.",
            },
            {
              title: "Ay bağlanışı gözləmir",
              text: "Sənəd yazılan anda mühasibat yazılışı qurulduğu üçün ay sonunda toplanacaq kağız qalmır. Obyekt üzrə rəqəm mühasibin cədvəli hazır olanda deyil, elə həmin gün mövcuddur.",
            },
          ],
        },
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
      ru: {
        name: "Строительство",
        title: "ERP для строительных компаний",
        row: "Смета по объекту, расход материалов и расчёты с субподрядчиками",
        lead: "В строительстве должно быть видно, куда уходят деньги, на уровне объекта. Смета, расход материалов, акты субподрядчиков и фактические затраты собираются в одной карточке объекта.",
        problems: [
          "Смета в Excel, фактические затраты в бухгалтерии — они никогда не сходятся",
          "Материал на объект выдаётся без официальных документов, в конце месяца выявляется расхождение",
          "Связь между актом субподрядчика и оплатой существует только в памяти бухгалтера",
          "Какой объект закрылся с убытком, становится известно только после сдачи",
        ],
        why: {
          title: "В строительстве деньги теряются на уровне объекта",
          lead: "Прибыль строительной компании возникает не в общем обороте, а в смете каждого объекта. Рентабельность, посчитанная после сдачи объекта, для решений уже запоздала: материал куплен, субподрядчику заплачено, смета превышена. Задача системы — показать это отклонение в течение месяца, пока ещё можно что-то исправить, с названием конкретной статьи.",
          changes: [
            "Статья сметы и фактические затраты стоят в одной таблице, процент отклонения обновляется каждый день",
            "Материал идёт по требованию и документу перемещения, остаток на складе объекта виден из центра",
            "Оплата привязана к акту — платёжный документ по неподтверждённой работе даже не создаётся",
            "Рентабельность объекта считается по цифрам текущего месяца, убыточный объект виден в середине работ",
          ],
        },
        signature: [
          "Объект",
          "Смета и план-факт",
          "Требование на материалы",
          "Акт субподряда",
          "Рентабельность объекта",
        ],
        featureGroups: [
          {
            group: "Объект и смета",
            note: "Каждый объект — отдельный финансовый центр, все цифры собираются на нём.",
            items: [
              {
                title: "Учёт по объектам",
                text: "Затраты на материалы, зарплату, технику и субподряд записываются прямо на объект. Одна операция не может попасть на два объекта сразу.",
              },
              {
                title: "Смета и план-факт",
                text: "Статьи сметы загружаются в систему, фактические затраты сравниваются автоматически. Статья, превысившая смету, сразу попадает в отдельный список.",
              },
              {
                title: "Дополнительные работы и версии сметы",
                text: "Согласованные с заказчиком дополнительные работы сохраняются как новая версия. Разницу между первоначальной и итоговой сметой можно отследить.",
              },
              {
                title: "Рентабельность объекта",
                text: "Доходы, затраты и остаток сметного объёма по каждому объекту — в одном отчёте. Объекты сравниваются между собой.",
              },
            ],
          },
          {
            group: "Материалы, склад и техника",
            note: "Всё, что уходит на объект, уходит с документом и возвращается с документом.",
            items: [
              {
                title: "Требование на материалы",
                text: "Требование с объекта сверяется со складским остатком, на недостающую часть создаётся заказ поставщику.",
              },
              {
                title: "Склад объекта",
                text: "Перемещения между центральным складом и складом объекта оформляются документом, остаток на объекте виден в реальном времени.",
              },
              {
                title: "Снабжение и сравнение предложений",
                text: "Цены поставщиков, сроки поставки и условия оплаты по одному материалу сравниваются рядом.",
              },
              {
                title: "Техника и оборудование",
                text: "Отслеживается, на каком объекте техника, моточасы, расход топлива и затраты на ремонт; затраты распределяются на объект.",
              },
            ],
          },
          {
            group: "Договоры, акты и команда",
            note: "Оплата без документа блокируется на уровне системы.",
            items: [
              {
                title: "Акты субподрядчиков",
                text: "Акт выполненных работ, процент удержания и график платежей привязываются к договору. Оплата без акта через систему не проходит.",
              },
              {
                title: "Акт выполненных работ для заказчика",
                text: "Выполненный объём по объекту превращается в акт, из него формируются счёт-фактура и э-счёт-фактура.",
              },
              {
                title: "Бригады и табель",
                text: "Табель работников ведётся по объектам, зарплата относится на затраты объекта.",
              },
              {
                title: "Архив документов и разрешений",
                text: "Договоры, проектная документация, разрешения и сертификаты привязываются к карточке объекта; по истекающим приходит предупреждение.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает строительная компания",
          lead: "Ниже — не функции программы, а результат изменения порядка работы. Каждый пункт меняет то, от кого и когда вы получаете ответ на конкретный вопрос.",
          items: [
            {
              title: "Убыток виден до окончания объекта",
              text: "Статья сметы и фактические затраты сверяются каждый день, поэтому отклонение проявляется в середине работ. Вы принимаете решение, пока ещё можно заменить материал, пересмотреть условия с субподрядчиком или согласовать с заказчиком дополнительные работы, — а не после сдачи.",
            },
            {
              title: "Вопрос «куда делся материал» закрыт",
              text: "Каждая тонна цемента уходит на объект по требованию и документу перемещения, остаток на складе объекта виден из центра. Ситуация «материал ушёл, но неизвестно, где он» закрывается цепочкой документов.",
            },
            {
              title: "Оплачивается только подтверждённая работа",
              text: "Платёжный документ субподрядчику без акта выполненных работ в системе даже не создаётся. Процент удержания и график платежей привязаны к договору, поэтому риск двойной или досрочной оплаты технически исчезает.",
            },
            {
              title: "На новый тендер вы идёте с фактом прошлого объекта",
              text: "Составляя смету следующего объекта, вы опираетесь не на прикидку, а на фактическую себестоимость похожего объекта. Видно, по каким статьям вы всегда выходите за рамки, и коммерческое предложение учитывает эту разницу.",
            },
            {
              title: "Руководитель видит объекты рядом",
              text: "Все объекты в одном отчёте: доходы, понесённые затраты, остаток сметы и текущая рентабельность. Какой объект тянет ресурсы, а какой стоит, сравнивается на одном экране.",
            },
            {
              title: "Закрытие месяца не ждёт",
              text: "Проводка формируется в момент записи документа, поэтому в конце месяца не остаётся бумаг для сбора. Цифра по объекту есть в тот же день, а не когда будет готова таблица бухгалтера.",
            },
          ],
        },
        faq: [
          {
            q: "Сколько объектов можно вести параллельно?",
            a: "Ограничений по числу объектов нет. У каждого объекта своя смета, свой склад и свой отчёт о рентабельности.",
          },
          {
            q: "Можно ли загрузить смету в нашем формате?",
            a: "Да, смета загружается по шаблону Excel. На этапе внедрения шаблон адаптируется под вашу текущую форму.",
          },
        ],
        seoTitle: "ERP для строительства — учёт по объектам, смета и контроль материалов",
        seoDescription:
          "BirSistem для строительных компаний: смета и план-факт по объекту, требования на материалы, акты субподрядчиков, затраты на технику и рентабельность объекта.",
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
        why: {
          title: "Restoranda marja qramla itir",
          lead: "Restoranda mənfəət çekdə deyil, texnoloji xəritədə yaranır. Porsiyanın tərkibi bir neçə qram sürüşəndə və ya xammal qiyməti qalxanda menyu qiyməti yerində qalırsa, itki hər satışda təkrarlanır və ay sonunda ümumi rəqəmin içində görünmür. Sistem normativ sərflə faktiki qalıq arasındakı fərqi hər gün, konkret xammal adı ilə göstərir.",
          changes: [
            "Porsiya maya dəyəri texnoloji xəritədən hesablanır, xammal qiyməti dəyişən kimi özü yenilənir",
            "Satılan porsiya xammalı avtomatik silir, sayım fərqi konkret mal üzrə izah olunan rəqəmə çevrilir",
            "Hər mövqe satış həcmi və marja üzrə qruplaşır — menyudan çıxarılası yemək siyahı ilə görünür",
            "Növbə qrafiki, tabel və saathesabı əmək haqqı eyni sistemdə, satış rəqəmi ilə yan-yana hesablanır",
          ],
        },
        signature: [
          "Texnoloji xəritə",
          "Porsiya maya dəyəri",
          "Avtomatik silinmə",
          "Sayım fərqi",
          "Menyu mühəndisliyi",
        ],
        featureGroups: [
          {
            group: "Menyu və maya dəyəri",
            note: "Qiymət qərarı təxminə deyil, hesablanmış rəqəmə söykənir.",
            items: [
              {
                title: "Texnoloji xəritə",
                text: "Hər yemək üçün tərkib, çıxım və itki normaları qeyd olunur. Xammal qiyməti dəyişəndə porsiya maya dəyəri özü yenilənir.",
              },
              {
                title: "Yarımfabrikat",
                text: "Sous, xəmir və digər yarımfabrikatlar ayrıca istehsal sənədi ilə hazırlanır və öz maya dəyəri ilə uçota düşür.",
              },
              {
                title: "Qiymət və marja nəzarəti",
                text: "Hər mövqenin maya dəyəri, satış qiyməti və marjası bir cədvəldə. Marjası həddən aşağı düşən yemək işarələnir.",
              },
              {
                title: "Menyu mühəndisliyi",
                text: "Yeməklər satış həcmi və marja üzrə dörd qrupa bölünür. Hansı mövqeyi saxlamaq, hansını dəyişmək lazım olduğu görünür.",
              },
            ],
          },
          {
            group: "Mətbəx və anbar",
            note: "Xammalın hərəkəti satışdan avtomatik doğur.",
            items: [
              {
                title: "Avtomatik silinmə",
                text: "Kassada satılan porsiya texnoloji xəritə üzrə anbardan xammalı silir. Mətbəx anbarı real vaxtda azalır.",
              },
              {
                title: "Sayım və fərq hesabatı",
                text: "Sistem normativ sərfi, sayım isə faktiki qalığı verir. Fərq hər xammal üzrə ayrıca göstərilir.",
              },
              {
                title: "Xammal sifarişi və təchizatçı",
                text: "Qalıq minimuma düşəndə sifariş siyahısı hazırlanır, təchizatçı qiymətləri və çatdırılma tarixçəsi saxlanılır.",
              },
              {
                title: "Yararlılıq və zay",
                text: "Xammalın son istifadə tarixi izlənir, zay səbəbi ilə yazılır və maya dəyərinə təsiri görünür.",
              },
            ],
          },
          {
            group: "Zal, kassa və komanda",
            note: "Satış nöqtəsindən gələn məlumat uçota özü düşür.",
            items: [
              {
                title: "Kassa ilə inteqrasiya",
                text: "Kassa sistemindən satış məlumatı qəbul edilir: çek, mövqe, ödəniş növü və ləğv edilmiş çeklər.",
              },
              {
                title: "Növbə və tabel",
                text: "Növbə qrafiki qurulur, faktiki iş saatı tabelə düşür, əmək haqqı saathesabı hesablanır.",
              },
              {
                title: "Çatdırılma və aqreqatorlar",
                text: "Zal, özün götür və çatdırılma kanalları ayrıca uçota düşür, hər kanalın öz marjası hesablanır.",
              },
              {
                title: "Filial müqayisəsi",
                text: "Bir neçə nöqtə varsa, orta çek, gəlirlilik və xammal sərfi filiallar arasında müqayisə olunur.",
              },
            ],
          },
        ],
        benefits: {
          title: "Restoran bundan nə qazanır",
          lead: "Restoranda qərarların çoxu gündəlikdir: qiyməti qaldırmaq, mövqeyi menyudan çıxarmaq, təchizatçını dəyişmək. Aşağıdakılar həmin qərarları təxminlə deyil, öz rəqəminizlə verməyin nəticəsidir.",
          items: [
            {
              title: "Qiyməti hesablanmış rəqəmlə qoyursunuz",
              text: "Hər mövqenin maya dəyəri texnoloji xəritədən çıxır və xammal qiyməti dəyişən kimi özü yenilənir. Təchizatçı qiyməti qalxanda hansı yeməyin marjasının sıfıra yaxınlaşdığı elə həmin gün siyahı ilə görünür.",
            },
            {
              title: "Sayım fərqi izah olunan rəqəmə çevrilir",
              text: "Sistem normativ sərfi, sayım isə faktiki qalığı verir. Fərq ümumi məbləğ kimi deyil, konkret xammal adı ilə çıxır — porsiyanın çəkisindəmi, zaydamı, yoxsa uçotdamı problem olduğu ayrılır.",
            },
            {
              title: "Menyu hissi ilə deyil, rəqəmlə qısalır",
              text: "Yeməklər satış həcmi və marja üzrə qruplaşdırılır. Çox satılan amma pul gətirməyən mövqe ilə az satılan amma marjalı mövqe ayrılır — menyudan nəyi çıxarmaq, nəyin qiymətini dəyişmək qərarı siyahı ilə verilir.",
            },
            {
              title: "Mətbəx anbarı əl ilə saxlanılmır",
              text: "Kassada satılan porsiya xammalı texnoloji xəritə üzrə özü silir. Axşam kassa bağlananda anbar qalığı onsuz da yenilənmiş olur, heç kim gün sonunda cədvəl doldurmur.",
            },
            {
              title: "Kanalların hansının pul gətirdiyi görünür",
              text: "Zal, özün götür və çatdırılma ayrıca uçota düşür. Aqreqator komissiyası və qablaşdırma xərci nəzərə alınandan sonra çatdırılmanın real marjası ortaya çıxır — çox vaxt zalın rəqəmindən köklü fərqlənir.",
            },
            {
              title: "Növbə ilə satış yan-yana dayanır",
              text: "Növbə qrafiki, tabel və saathesabı əmək haqqı eyni sistemdədir. Hansı növbədə nə qədər satış olduğu və həmin növbəyə nə qədər əmək haqqı getdiyi bir cədvəldə müqayisə olunur.",
            },
          ],
        },
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
      ru: {
        name: "Рестораны",
        title: "ERP для ресторанов и кафе",
        row: "Технологические карты, себестоимость порции и склад кухни",
        lead: "Себестоимость каждого блюда в меню рассчитывается по технологической карте. Проданная порция автоматически списывает сырьё со склада — расхождение при инвентаризации в конце месяца становится объяснимой цифрой.",
        problems: [
          "Реальная себестоимость блюда неизвестна, цена ставится на глаз",
          "Списание сырья ведётся вручную, расхождения при инвентаризации повторяются каждый месяц",
          "Не измеряется, какое блюдо приносит деньги, а какое только перегружает меню",
          "Смены и зарплата ведутся в отдельной таблице",
        ],
        why: {
          title: "В ресторане маржа теряется граммами",
          lead: "Прибыль ресторана возникает не в чеке, а в технологической карте. Когда состав порции уходит на несколько граммов или дорожает сырьё, а цена в меню остаётся прежней, потеря повторяется с каждой продажей и в конце месяца теряется в общей цифре. Система каждый день показывает разницу между нормативным расходом и фактическим остатком — с названием конкретного продукта.",
          changes: [
            "Себестоимость порции считается по технологической карте и сама обновляется при изменении цены сырья",
            "Проданная порция автоматически списывает сырьё, расхождение превращается в объяснимую цифру по конкретному продукту",
            "Каждая позиция группируется по объёму продаж и марже — блюда на вывод из меню видны списком",
            "График смен, табель и почасовая зарплата — в той же системе, рядом с цифрами продаж",
          ],
        },
        signature: [
          "Технологическая карта",
          "Себестоимость порции",
          "Автоматическое списание",
          "Расхождения инвентаризации",
          "Меню-инжиниринг",
        ],
        featureGroups: [
          {
            group: "Меню и себестоимость",
            note: "Решение о цене опирается на рассчитанную цифру, а не на прикидку.",
            items: [
              {
                title: "Технологическая карта",
                text: "Для каждого блюда фиксируются состав, выход и нормы потерь. При изменении цены сырья себестоимость порции обновляется сама.",
              },
              {
                title: "Полуфабрикаты",
                text: "Соусы, тесто и другие полуфабрикаты готовятся отдельным документом производства и учитываются по своей себестоимости.",
              },
              {
                title: "Контроль цены и маржи",
                text: "Себестоимость, цена продажи и маржа каждой позиции — в одной таблице. Блюдо с маржой ниже порога помечается.",
              },
              {
                title: "Меню-инжиниринг",
                text: "Блюда делятся на четыре группы по объёму продаж и марже. Видно, какую позицию оставить, а какую изменить.",
              },
            ],
          },
          {
            group: "Кухня и склад",
            note: "Движение сырья автоматически следует из продаж.",
            items: [
              {
                title: "Автоматическое списание",
                text: "Проданная на кассе порция списывает сырьё со склада по технологической карте. Склад кухни уменьшается в реальном времени.",
              },
              {
                title: "Инвентаризация и отчёт о расхождениях",
                text: "Система даёт нормативный расход, инвентаризация — фактический остаток. Расхождение показывается отдельно по каждому продукту.",
              },
              {
                title: "Заказ сырья и поставщики",
                text: "Когда остаток падает до минимума, готовится список заказа; цены поставщиков и история поставок сохраняются.",
              },
              {
                title: "Сроки годности и брак",
                text: "Отслеживается срок годности сырья, брак списывается с указанием причины, и видно его влияние на себестоимость.",
              },
            ],
          },
          {
            group: "Зал, касса и команда",
            note: "Данные с точки продаж сами попадают в учёт.",
            items: [
              {
                title: "Интеграция с кассой",
                text: "Из кассовой системы принимаются данные о продажах: чеки, позиции, способы оплаты и отменённые чеки.",
              },
              {
                title: "Смены и табель",
                text: "Строится график смен, фактическое рабочее время попадает в табель, зарплата считается почасово.",
              },
              {
                title: "Доставка и агрегаторы",
                text: "Зал, самовывоз и доставка учитываются отдельно, по каждому каналу считается своя маржа.",
              },
              {
                title: "Сравнение филиалов",
                text: "Если точек несколько, средний чек, рентабельность и расход сырья сравниваются между филиалами.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает ресторан",
          lead: "Большинство решений в ресторане ежедневные: поднять цену, убрать позицию из меню, сменить поставщика. Ниже — результат того, что эти решения принимаются не на глаз, а по вашим собственным цифрам.",
          items: [
            {
              title: "Цена ставится по рассчитанной цифре",
              text: "Себестоимость каждой позиции берётся из технологической карты и сама обновляется при изменении цены сырья. Когда поставщик поднимает цену, в тот же день видно списком, у каких блюд маржа приближается к нулю.",
            },
            {
              title: "Расхождение становится объяснимой цифрой",
              text: "Система даёт нормативный расход, инвентаризация — фактический остаток. Расхождение выходит не общей суммой, а по конкретному продукту — видно, в чём проблема: в весе порции, в браке или в учёте.",
            },
            {
              title: "Меню сокращается по цифрам, а не по ощущениям",
              text: "Блюда группируются по объёму продаж и марже. Хорошо продаваемая, но не приносящая денег позиция отделяется от редкой, но маржинальной — решение, что убрать из меню и где менять цену, принимается по списку.",
            },
            {
              title: "Склад кухни не ведётся вручную",
              text: "Проданная на кассе порция сама списывает сырьё по технологической карте. Когда вечером закрывается касса, складской остаток уже обновлён — никто не заполняет таблицы в конце дня.",
            },
            {
              title: "Видно, какой канал приносит деньги",
              text: "Зал, самовывоз и доставка учитываются отдельно. После учёта комиссии агрегатора и упаковки проявляется реальная маржа доставки — часто она кардинально отличается от цифры зала.",
            },
            {
              title: "Смены и продажи стоят рядом",
              text: "График смен, табель и почасовая зарплата — в одной системе. Сколько продано в какую смену и сколько зарплаты ушло на эту смену, сравнивается в одной таблице.",
            },
          ],
        },
        faq: [
          {
            q: "Работает ли система с нашей кассовой программой?",
            a: "Данные о продажах принимаются из кассовой системы через интеграцию. С какой кассой вы работаете, уточним на демо.",
          },
          {
            q: "Как вы отслеживаете расхождения при инвентаризации?",
            a: "Система рассчитывает нормативный расход, а инвентаризация даёт фактический остаток. Разница между ними показывается в отдельном отчёте по каждому продукту.",
          },
        ],
        seoTitle: "ERP для ресторана — технологические карты и себестоимость порции",
        seoDescription:
          "BirSistem для ресторанов и кафе: технологические карты, себестоимость порции, автоматическое списание сырья, меню-инжиниринг и сравнение филиалов.",
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
        why: {
          title: "Topdan satışda dövriyyə yox, yığılan pul vacibdir",
          lead: "Topdan satışda satış həcmini artırmaq çətin deyil — çətin olan həmin satışın pula çevrilməsidir. Borcu olan müştəriyə növbəti maşın buraxılanda risk artır, endirim isə marjanı satış anında deyil, ay sonunda yeyir. Sistem sifarişi qəbul edən anda üç şeyi eyni vaxtda yoxlayır: qalıq var, qiymət qaydaya uyğun, müştərinin limiti kifayət edir.",
          changes: [
            "Qiymət və endirim qayda ilə hesablanır, menecer qaydadan kənara öz istəyi ilə çıxa bilmir",
            "Limit aşılanda və ya gecikmə həddi keçiləndə yeni sifariş avtomatik təsdiqə düşür",
            "Marşrut planlaşdırılır, faktiki səfər və sifariş mobil tətbiqdən qeydə alınır",
            "Qaytarma və dəyişmə səbəbi ilə sənədləşir, müştərinin real gəlirliliyinə düşür",
          ],
        },
        signature: [
          "Qiymət siyahısı",
          "Kredit limiti",
          "Marşrut satışı",
          "Debitor yaşlanması",
          "Müştəri gəlirliliyi",
        ],
        featureGroups: [
          {
            group: "Qiymət, sifariş və müştəri",
            note: "Sifariş qəbulu qayda ilə idarə olunur, yaddaşla yox.",
            items: [
              {
                title: "Çoxsəviyyəli qiymət siyahısı",
                text: "Müştəri qrupu, həcm və mal qrupu üzrə qiymət və endirim qaydaları bir-birinin üstünə qurulur, yekun qiyməti sistem hesablayır.",
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
                title: "Müştəri kartı və tarixçə",
                text: "Alış tarixçəsi, ödəniş intizamı, müqavilə şərti və əlaqə qeydləri bir kartda toplanır.",
              },
            ],
          },
          {
            group: "Anbar və çatdırılma",
            note: "Sifarişdən çatdırılmaya qədər hər addım sənədlidir.",
            items: [
              {
                title: "Rezerv və yığım",
                text: "Sifariş rezerv yaradır, yığım vərəqəsi anbarda çap olunur, yığılmış miqdar sifarişlə tutuşdurulur.",
              },
              {
                title: "Çatdırılma və sürücü",
                text: "Yüklənmə sənədi, marşrut və sürücü üzrə çatdırılma izlənir, təhvil qeydi mobil cihazdan alınır.",
              },
              {
                title: "Qaytarma və dəyişmə",
                text: "Qaytarılan mal səbəbi ilə qeydə alınır. Təchizatçıya qaytarma ayrıca sənədlə aparılır.",
              },
              {
                title: "Partiya və müddət",
                text: "Lazım olan mal qrupları üzrə partiya və son istifadə tarixi izlənir, erkən müddətli partiya əvvəl satışa gedir.",
              },
            ],
          },
          {
            group: "Borc, hesablaşma və gəlirlilik",
            note: "Hansı satışın pul gətirdiyi rəqəmlə cavablanır.",
            items: [
              {
                title: "Debitor borcu və yaşlanma",
                text: "Borc müddətə görə qruplaşır, 90 günü keçən məbləğ ayrıca göstərilir, inkasso işi növbəyə düşür.",
              },
              {
                title: "E-qaimə və sənəd dövriyyəsi",
                text: "Satış qaiməsindən elektron qaimə-faktura formalaşır, statusu sistemdən izlənir.",
              },
              {
                title: "Müştəri gəlirliliyi",
                text: "Endirim, çatdırılma xərci və qaytarma nəzərə alınmaqla hər müştərinin real gəlirliliyi hesablanır.",
              },
              {
                title: "Satıcı üzrə plan və bonus",
                text: "Satış planı, faktiki icra və bonus düsturu sistemdə saxlanılır, ay sonunda özü hesablanır.",
              },
            ],
          },
        ],
        benefits: {
          title: "Topdan satış şirkəti bundan nə qazanır",
          lead: "Topdan satışda qərarlar sifariş qəbul edilən anda verilir — endirim, kredit, buraxılış. Aşağıdakılar həmin anın qaydaya bağlanmasının nəticəsidir.",
          items: [
            {
              title: "Endirim satış anında nəzarətə düşür",
              text: "Qiymət və endirim müştəri qrupu, həcm və mal qrupu üzrə qaydalarla hesablanır — menecer qaydadan kənara öz istəyi ilə çıxa bilmir. «Marja ay sonunda hardan yeyildi» sualı bağlanır.",
            },
            {
              title: "Pul yığılmayan satışın qarşısı alınır",
              text: "Hər müştəriyə kredit limiti və maksimum gecikmə günü qoyulur. Hədd keçiləndə növbəti sifariş avtomatik təsdiqə düşür — borcu böyüyən müştəriyə növbəti maşın «adət üzrə» getmir.",
            },
            {
              title: "Kimin real pul gətirdiyi görünür",
              text: "Müştəri gəlirliliyi endirim, çatdırılma xərci və qaytarma nəzərə alınmaqla hesablanır. Bu siyahı dövriyyə siyahısından tez-tez fərqlənir: ən çox alan müştəri ən gəlirli müştəri olmaya bilər.",
            },
            {
              title: "Satıcının günü ölçülən hala düşür",
              text: "Marşrut əvvəlcədən planlaşdırılır, faktiki səfər və sifariş mobil tətbiqdən qeydə alınır. Plan ilə fakt arasındakı fərq ay sonunda deyil, həmin gün görünür.",
            },
            {
              title: "Qaytarma gizli xərc olmaqdan çıxır",
              text: "Qaytarılan və dəyişdirilən mal səbəbi ilə sənədləşir və müştərinin gəlirliliyinə düşür. Hansı müştərinin, hansı malın daim qayıtdığı siyahı ilə çıxır.",
            },
            {
              title: "Anbardan səhv mal çıxmır",
              text: "Sifariş rezerv yaradır, yığım vərəqəsi anbarda çap olunur, yığılmış miqdar sifarişlə tutuşdurulur. Çatdırılmadan sonra üzə çıxan çatışmazlıq və artıq hallar azalır.",
            },
          ],
        },
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
      ru: {
        name: "Оптовая торговля",
        title: "ERP для оптовой торговли",
        row: "Прайс-листы, кредитные лимиты, маршрутные продажи и возвраты",
        lead: "Сотни клиентов, разные прайс-листы и у каждого клиента свой долг. Принимая заказ, система одновременно проверяет остаток, цену и кредитный лимит.",
        problems: [
          "Каждому клиенту даётся своя цена, а контроль — только в памяти менеджера",
          "Клиенту с долгом отгружают новый товар, а потом деньги не собрать",
          "Маршрут торгового представителя и фактические визиты не измеряются",
          "Возвраты и обмены товара учитываются без документов",
        ],
        why: {
          title: "В опте важен не оборот, а собранные деньги",
          lead: "Нарастить объём продаж в опте несложно — сложно превратить эти продажи в деньги. Когда клиенту с долгом отгружают очередную машину, риск растёт, а скидка съедает маржу не в момент продажи, а в конце месяца. Принимая заказ, система одновременно проверяет три вещи: остаток есть, цена соответствует правилам, лимита клиента хватает.",
          changes: [
            "Цена и скидка считаются по правилам, менеджер не может выйти за их рамки по своему желанию",
            "При превышении лимита или порога просрочки новый заказ автоматически уходит на согласование",
            "Маршрут планируется, фактические визиты и заказы фиксируются в мобильном приложении",
            "Возвраты и обмены оформляются с указанием причины и учитываются в реальной рентабельности клиента",
          ],
        },
        signature: [
          "Прайс-лист",
          "Кредитный лимит",
          "Маршрутные продажи",
          "Старение дебиторки",
          "Рентабельность клиента",
        ],
        featureGroups: [
          {
            group: "Цены, заказы и клиенты",
            note: "Приём заказов управляется правилами, а не памятью.",
            items: [
              {
                title: "Многоуровневые прайс-листы",
                text: "Правила цен и скидок по группе клиентов, объёму и группе товаров накладываются друг на друга, итоговую цену считает система.",
              },
              {
                title: "Кредитный лимит и блокировка",
                text: "Каждому клиенту задаются лимит и максимальное число дней просрочки. При превышении лимита новый заказ требует согласования.",
              },
              {
                title: "Маршрутные продажи",
                text: "Планируется ежедневный маршрут торгового представителя, заказы и возвраты фиксируются в мобильном приложении.",
              },
              {
                title: "Карточка и история клиента",
                text: "История покупок, платёжная дисциплина, условия договора и заметки о контактах собраны в одной карточке.",
              },
            ],
          },
          {
            group: "Склад и доставка",
            note: "Каждый шаг от заказа до доставки подтверждён документом.",
            items: [
              {
                title: "Резерв и сборка",
                text: "Заказ создаёт резерв, на складе печатается лист сборки, собранное количество сверяется с заказом.",
              },
              {
                title: "Доставка и водители",
                text: "Отслеживаются погрузочный документ, маршрут и доставка по водителю, отметка о передаче фиксируется с мобильного устройства.",
              },
              {
                title: "Возвраты и обмены",
                text: "Возвращённый товар фиксируется с причиной. Возврат поставщику оформляется отдельным документом.",
              },
              {
                title: "Партии и сроки",
                text: "По нужным группам товаров отслеживаются партии и сроки годности, партия с более ранним сроком уходит в продажу первой.",
              },
            ],
          },
          {
            group: "Долги, расчёты и рентабельность",
            note: "На вопрос, какие продажи приносят деньги, отвечают цифры.",
            items: [
              {
                title: "Дебиторка и старение",
                text: "Долг группируется по срокам, суммы старше 90 дней показываются отдельно, работа по взысканию ставится в очередь.",
              },
              {
                title: "Э-счёт-фактура и документооборот",
                text: "Из накладной на продажу формируется электронная счёт-фактура, её статус отслеживается в системе.",
              },
              {
                title: "Рентабельность клиента",
                text: "Реальная рентабельность каждого клиента считается с учётом скидок, затрат на доставку и возвратов.",
              },
              {
                title: "План и бонусы по торговым представителям",
                text: "План продаж, фактическое выполнение и формула бонуса хранятся в системе и считаются автоматически в конце месяца.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает оптовая компания",
          lead: "В опте решения принимаются в момент приёма заказа — скидка, кредит, отгрузка. Ниже — результат того, что этот момент подчинён правилам.",
          items: [
            {
              title: "Скидка под контролем в момент продажи",
              text: "Цена и скидка считаются по правилам для группы клиентов, объёма и группы товаров — менеджер не может выйти за них по своему желанию. Вопрос «куда в конце месяца делась маржа» закрыт.",
            },
            {
              title: "Продажи без оплаты предотвращаются",
              text: "Каждому клиенту задаются кредитный лимит и максимальный срок просрочки. При превышении порога следующий заказ автоматически уходит на согласование — клиенту с растущим долгом очередная машина «по привычке» не уходит.",
            },
            {
              title: "Видно, кто на самом деле приносит деньги",
              text: "Рентабельность клиента считается с учётом скидок, доставки и возвратов. Этот список часто отличается от списка по обороту: самый крупный покупатель может оказаться не самым прибыльным.",
            },
            {
              title: "День торгового представителя становится измеримым",
              text: "Маршрут планируется заранее, фактические визиты и заказы фиксируются в мобильном приложении. Разница между планом и фактом видна в тот же день, а не в конце месяца.",
            },
            {
              title: "Возвраты перестают быть скрытым расходом",
              text: "Возвращённый и обменённый товар оформляется с причиной и учитывается в рентабельности клиента. Какие клиенты и какие товары постоянно возвращаются, видно списком.",
            },
            {
              title: "Со склада не уходит не тот товар",
              text: "Заказ создаёт резерв, лист сборки печатается на складе, собранное количество сверяется с заказом. Недостачи и излишки, обнаруженные после доставки, случаются реже.",
            },
          ],
        },
        faq: [
          {
            q: "Есть ли мобильное приложение для торговых представителей?",
            a: "Маршрут, приём заказов, долг клиента и остатки работают в мобильном интерфейсе. Если пропал интернет, заказ сохраняется в памяти устройства.",
          },
          {
            q: "Сколько прайс-листов можно создать?",
            a: "Количество не ограничено. Правила цен накладываются друг на друга, и система сама считает итоговую цену в каждом заказе.",
          },
        ],
        seoTitle: "ERP для оптовой торговли — прайс-листы, кредитный лимит, маршруты",
        seoDescription:
          "BirSistem для оптовых компаний: многоуровневые прайс-листы, контроль кредитного лимита, маршрутные продажи, резервы, возвраты и рентабельность клиентов.",
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
        why: {
          title: "İstehsalda səhv maya dəyəri bütün qiymətləri səhv edir",
          lead: "Hazır məhsulun maya dəyəri təxmini hesablananda səhv bir yerdə qalmır: qiymət səhv qoyulur, endirim həddi səhv müəyyən edilir, hansı məhsulun gəlir gətirdiyi bilinmir. Xammal, birbaşa əmək haqqı və sex qaimə xərci hazır məhsula düzgün paylananda isə hər partiyanın öz real dəyəri olur — və normadan kənara çıxan sex həmin ay görünür.",
          changes: [
            "Maya dəyəri xammal, əmək haqqı və sex xərcindən avtomatik formalaşır, partiya üzrə saxlanılır",
            "Faktiki sərf normativlə tutuşdurulur, kənarlaşma sex və növbə üzrə faizlə göstərilir",
            "İstehsal sifarişi açılanda xammal ehtiyacı hesablanır və anbar qalığı ilə tutuşdurulur",
            "Zay və brak səbəbi ilə yazılır, təkrar emala gedən hissə ayrıca izlənir",
          ],
        },
        signature: [
          "Resept və texnoloji kart",
          "İstehsal sifarişi",
          "Sex üzrə sərf",
          "Zay və brak",
          "Məhsul maya dəyəri",
        ],
        featureGroups: [
          {
            group: "Resept və planlaşdırma",
            note: "İstehsal başlamazdan əvvəl nəyin çatmadığı bilinir.",
            items: [
              {
                title: "Resept və texnoloji kart",
                text: "Hər məhsul üçün tərkib, normativ sərf və əməliyyat mərhələləri. Versiyalar saxlanılır, köhnə partiyalar öz reseptinə görə hesablanır.",
              },
              {
                title: "İstehsal sifarişi",
                text: "Sifariş açılanda xammal ehtiyacı hesablanır, çatışmayan xammal üzrə təchizat siyahısı yaradılır.",
              },
              {
                title: "İstehsal planı",
                text: "Həftəlik və aylıq plan sifarişlərə və proqnoza görə qurulur, sex yüklənməsi əvvəlcədən görünür.",
              },
              {
                title: "Yarımfabrikat mərhələləri",
                text: "Çoxmərhələli istehsalda hər mərhələnin öz çıxımı və maya dəyəri olur, növbəti mərhələyə həmin dəyərlə keçir.",
              },
            ],
          },
          {
            group: "Sex, sərf və keyfiyyət",
            note: "Normadan kənara çıxış sex səviyyəsində görünür.",
            items: [
              {
                title: "Sex üzrə sərf",
                text: "Faktiki xammal sərfi sənədlə yazılır və normativlə tutuşdurulur. Kənarlaşma sex və növbə üzrə göstərilir.",
              },
              {
                title: "Zay və brak",
                text: "Zay səbəbi ilə qeydə alınır, təkrar emala gedən hissə ayrıca izlənir və maya dəyərinə təsiri hesablanır.",
              },
              {
                title: "Partiya və izlənilmə",
                text: "Hazır məhsulun hansı xammal partiyasından çıxdığı saxlanılır — geri çağırış zamanı zəncir bərpa olunur.",
              },
              {
                title: "Avadanlıq və təmir",
                text: "Avadanlığın iş saatı, planlı baxış və dayanma vaxtı izlənir, dayanmanın səbəbi qeyd olunur.",
              },
            ],
          },
          {
            group: "Maya dəyəri və nəticə",
            note: "Hər məhsulun real gəlirliliyi ayın içində görünür.",
            items: [
              {
                title: "Maya dəyərinin formalaşması",
                text: "Xammal, birbaşa əmək haqqı və sex qaimə xərci hazır məhsula paylanır. Paylama bazası uçot siyasətinizə görə seçilir.",
              },
              {
                title: "Məhsul gəlirliliyi",
                text: "Hər məhsul və partiya üzrə gəlir, maya dəyəri və marja müqayisə olunur.",
              },
              {
                title: "Anbar və hazır məhsul",
                text: "Xammal, yarımfabrikat və hazır məhsul anbarları ayrıca aparılır, qalıqlar real vaxtda görünür.",
              },
              {
                title: "Sex əmək haqqı",
                text: "İstehsal həcminə və ya saata bağlı əmək haqqı hesablanır, birbaşa maya dəyərinə düşür.",
              },
            ],
          },
        ],
        benefits: {
          title: "İstehsal müəssisəsi bundan nə qazanır",
          lead: "İstehsalda bir səhv rəqəm bir yerdə qalmır — maya dəyəri səhv olanda qiymət, endirim həddi və çeşid qərarı da səhv olur. Aşağıdakılar həmin rəqəmin dəqiqləşməsinin nəticəsidir.",
          items: [
            {
              title: "Qiymət real maya dəyərinin üstündən qoyulur",
              text: "Xammal, birbaşa əmək haqqı və sex qaimə xərci hazır məhsula paylandığı üçün hər partiyanın öz faktiki dəyəri olur. Təxminlə qoyulmuş qiymət isə endirim həddini də, çeşid qərarını da özü ilə birlikdə səhv edir.",
            },
            {
              title: "İstehsal başlamazdan əvvəl nəyin çatmadığı bilinir",
              text: "Sifariş açılanda resept üzrə xammal ehtiyacı hesablanır və anbar qalığı ilə tutuşdurulur. Çatışmayan hissə üzrə təchizat sifarişi əvvəlcədən yaradılır — xətt xammal gözlədiyi üçün dayanmır.",
            },
            {
              title: "Normadan kənara çıxan sex həmin ay görünür",
              text: "Faktiki sərf normativ sərflə sex səviyyəsində tutuşdurulur. Fərqin harada yarandığı — resepdə, avadanlıqda, yoxsa uçotda — ayrıla bilir.",
            },
            {
              title: "Zay səbəbi ilə ölçülür",
              text: "Brak və zay səbəb kodu ilə yazılır, maya dəyərinə təsiri hesablanır. «Normal itki» adı altında illərlə davam edən problemlər rəqəmlə üzə çıxır.",
            },
            {
              title: "Hansı məhsulu saxlamaq lazım olduğu rəqəmlə cavablanır",
              text: "Hər məhsulun gəlirliliyi ayın içində hesablanır. Ən çox istehsal olunan məhsulun ən gəlirli məhsul olmadığı tez-tez ortaya çıxır.",
            },
            {
              title: "Partiya geriyə doğru izlənir",
              text: "Hazır məhsulun hansı xammal partiyasından çıxdığı saxlanılır. Şikayət və ya geri çağırış olanda əhatə dairəsi bütün seriya yox, konkret partiya ilə məhdudlaşır.",
            },
          ],
        },
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
      ru: {
        name: "Производство",
        title: "ERP для производственных предприятий",
        row: "Рецептуры, производственные заказы, расход сырья и себестоимость продукции",
        lead: "При открытии производственного заказа рассчитывается потребность в сырье, а при закрытии сама формируется себестоимость готовой продукции — с учётом зарплаты и цеховых расходов.",
        problems: [
          "Себестоимость готовой продукции считается приблизительно",
          "Не измеряется, на сколько процентов расход сырья отклоняется от нормы",
          "Производственный план не связан со складскими остатками",
          "Брак не учитывается отдельно",
        ],
        why: {
          title: "Неверная себестоимость в производстве искажает все цены",
          lead: "Когда себестоимость готовой продукции считается приблизительно, ошибка не остаётся в одном месте: неверно ставится цена, неверно определяется порог скидки, неизвестно, какой продукт приносит прибыль. А когда сырьё, прямая зарплата и цеховые накладные расходы правильно распределяются на готовую продукцию, у каждой партии появляется своя реальная стоимость — и цех, вышедший за нормы, виден в том же месяце.",
          changes: [
            "Себестоимость автоматически складывается из сырья, зарплаты и цеховых расходов и хранится по партиям",
            "Фактический расход сравнивается с нормативом, отклонение показывается в процентах по цехам и сменам",
            "При открытии производственного заказа рассчитывается потребность в сырье и сверяется со складским остатком",
            "Брак фиксируется с причиной, часть на переработку отслеживается отдельно",
          ],
        },
        signature: [
          "Рецептура и техкарта",
          "Производственный заказ",
          "Расход по цехам",
          "Брак",
          "Себестоимость продукции",
        ],
        featureGroups: [
          {
            group: "Рецептуры и планирование",
            note: "Чего не хватает, известно ещё до начала производства.",
            items: [
              {
                title: "Рецептура и техкарта",
                text: "Для каждого продукта — состав, нормативный расход и этапы операций. Версии сохраняются, старые партии считаются по своей рецептуре.",
              },
              {
                title: "Производственный заказ",
                text: "При открытии заказа рассчитывается потребность в сырье, по недостающему сырью создаётся список закупки.",
              },
              {
                title: "Производственный план",
                text: "Недельный и месячный план строится по заказам и прогнозу, загрузка цехов видна заранее.",
              },
              {
                title: "Этапы полуфабрикатов",
                text: "В многоэтапном производстве у каждого этапа свой выход и своя себестоимость, и на следующий этап он переходит по этой стоимости.",
              },
            ],
          },
          {
            group: "Цех, расход и качество",
            note: "Отклонение от нормы видно на уровне цеха.",
            items: [
              {
                title: "Расход по цехам",
                text: "Фактический расход сырья фиксируется документом и сравнивается с нормативом. Отклонение показывается по цехам и сменам.",
              },
              {
                title: "Брак",
                text: "Брак фиксируется с причиной, часть на переработку отслеживается отдельно, влияние на себестоимость рассчитывается.",
              },
              {
                title: "Партии и прослеживаемость",
                text: "Сохраняется, из какой партии сырья выпущена готовая продукция, — при отзыве цепочка восстанавливается.",
              },
              {
                title: "Оборудование и ремонт",
                text: "Отслеживаются моточасы оборудования, плановые осмотры и простои, причина простоя фиксируется.",
              },
            ],
          },
          {
            group: "Себестоимость и результат",
            note: "Реальная рентабельность каждого продукта видна в течение месяца.",
            items: [
              {
                title: "Формирование себестоимости",
                text: "Сырьё, прямая зарплата и цеховые накладные расходы распределяются на готовую продукцию. База распределения выбирается по вашей учётной политике.",
              },
              {
                title: "Рентабельность продукции",
                text: "По каждому продукту и партии сравниваются выручка, себестоимость и маржа.",
              },
              {
                title: "Склад и готовая продукция",
                text: "Склады сырья, полуфабрикатов и готовой продукции ведутся раздельно, остатки видны в реальном времени.",
              },
              {
                title: "Зарплата цеха",
                text: "Зарплата рассчитывается от объёма производства или по часам и относится прямо на себестоимость.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает производственное предприятие",
          lead: "В производстве одна неверная цифра не остаётся на месте — если себестоимость ошибочна, ошибочны и цена, и порог скидки, и решение по ассортименту. Ниже — результат того, что эта цифра становится точной.",
          items: [
            {
              title: "Цена ставится от реальной себестоимости",
              text: "Сырьё, прямая зарплата и цеховые накладные расходы распределяются на готовую продукцию, поэтому у каждой партии своя фактическая стоимость. А цена, поставленная на глаз, тянет за собой ошибку и в пороге скидки, и в решении по ассортименту.",
            },
            {
              title: "Чего не хватает, известно до начала производства",
              text: "При открытии заказа по рецептуре рассчитывается потребность в сырье и сверяется со складским остатком. Заказ на недостающее создаётся заранее — линия не стоит в ожидании сырья.",
            },
            {
              title: "Цех, вышедший за нормы, виден в том же месяце",
              text: "Фактический расход сравнивается с нормативом на уровне цеха. Можно разделить, где возникла разница — в рецептуре, в оборудовании или в учёте.",
            },
            {
              title: "Брак измеряется с причиной",
              text: "Брак фиксируется с кодом причины, его влияние на себестоимость рассчитывается. Проблемы, годами жившие под названием «нормальные потери», выходят наружу в цифрах.",
            },
            {
              title: "Какой продукт оставить — отвечают цифры",
              text: "Рентабельность каждого продукта рассчитывается в течение месяца. Часто оказывается, что самый массовый продукт — не самый прибыльный.",
            },
            {
              title: "Партия прослеживается в обратную сторону",
              text: "Сохраняется, из какой партии сырья выпущена готовая продукция. При жалобе или отзыве круг затронутых ограничивается конкретной партией, а не всей серией.",
            },
          ],
        },
        faq: [
          {
            q: "Поддерживается ли многоэтапное производство?",
            a: "Да. Полуфабрикат учитывается отдельно на каждом этапе и переходит на следующий этап по своей себестоимости.",
          },
          {
            q: "Как вы распределяете цеховые накладные расходы?",
            a: "База распределения выбирается по вашей учётной политике: объём производства, машино-часы или прямая зарплата.",
          },
        ],
        seoTitle: "ERP для производства — рецептуры, производственные заказы, себестоимость",
        seoDescription:
          "BirSistem для производственных предприятий: рецептуры и техкарты, производственные заказы, нормативный и фактический расход сырья, учёт брака и себестоимость.",
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
        why: {
          title: "Şəbəkədə görmədiyiniz qalıq satılmamış puldur",
          lead: "Pərakəndədə eyni mal bir mağazada tükənir, digərində rəfdə qalır. Mərkəz qalığı gecikmə ilə görəndə hər iki tərəf itirir: birində satış imkanı əldən gedir, digərində pul mal şəklində donur. Sistemin işi bütün mağazaların qalığını, satışını və kassasını eyni anda göstərmək və mal hərəkətini sənədə bağlamaqdır.",
          changes: [
            "Bütün mağazaların qalığı mərkəzdə real vaxtda görünür, transfer sənədlə aparılır",
            "Hansı mağazanın hansı malı sataraq nə qazandığı gün ərzində hesabatda olur",
            "Kampaniyanın marjaya təsiri ayrıca hesablanır, zərərlə gedən aksiya vaxtında dayandırılır",
            "Sayım barkodla aparılır, fərq sənədi avtomatik hazırlanır — inventarizasiya günlərlə çəkmir",
          ],
        },
        signature: [
          "Mağaza qalığı",
          "Kassa uçotu",
          "Transfer",
          "Endirim və loyallıq",
          "Çeşid təhlili",
        ],
        featureGroups: [
          {
            group: "Mağaza şəbəkəsi",
            note: "Mərkəz bütün nöqtələri eyni cədvəldə görür.",
            items: [
              {
                title: "Mərkəz və mağaza",
                text: "Mərkəzi anbardan mağazaya transfer sənədlə aparılır. Hər mağazanın qalığı və dövriyyəsi mərkəzdən görünür.",
              },
              {
                title: "Mağazalararası transfer",
                text: "Bir mağazada artıq, digərində çatışmayan mal üzrə transfer təklifi hazırlanır.",
              },
              {
                title: "Sürətli inventarizasiya",
                text: "Mağaza sayımı barkodla aparılır, fərq sənədi avtomatik hazırlanır və təsdiqə göndərilir.",
              },
              {
                title: "Mağaza gəlirliliyi",
                text: "Kirayə, əmək haqqı və kommunal xərc mağazaya yazılır, hər nöqtənin öz nəticəsi görünür.",
              },
            ],
          },
          {
            group: "Kassa və satış",
            note: "Satış nöqtəsi uçotdan ayrı işləmir.",
            items: [
              {
                title: "Kassa uçotu",
                text: "Kassa növbəsinin açılışı, bağlanışı, nağd və kartla ödənişlər uçota düşür. Kassa fərqi növbə üzrə izlənir.",
              },
              {
                title: "Oflayn rejim",
                text: "İnternet kəsiləndə kassa işləməyə davam edir, əlaqə bərpa olunanda məlumat mərkəzə göndərilir.",
              },
              {
                title: "Endirim və aksiyalar",
                text: "Mövsümi endirim, komplekt təklifi və vaxt məhdudiyyətli aksiya qurulur, marjaya təsiri ayrıca hesablanır.",
              },
              {
                title: "Qaytarma və dəyişmə",
                text: "Çek üzrə qaytarma qeydə alınır, səbəb statistikası mal və mağaza üzrə toplanır.",
              },
            ],
          },
          {
            group: "Çeşid və müştəri",
            note: "Nəyin alınacağı satış tarixçəsindən çıxır.",
            items: [
              {
                title: "Ölçü və rəng matrisi",
                text: "Geyim və ayaqqabı üçün model, rəng və ölçü şəbəkəsi. Hansı ölçünün qurtardığı bir cədvəldə görünür.",
              },
              {
                title: "Çeşid və təkrar sifariş",
                text: "Satış sürətinə görə minimum qalıq hesablanır, təkrar sifariş siyahısı hazırlanır.",
              },
              {
                title: "Loyallıq və müştəri",
                text: "Müştəri kartı, bonus toplanması və alış tarixçəsi. Təkrar alış tezliyi hesabatda görünür.",
              },
              {
                title: "Çeşid təhlili",
                text: "Hansı qrupun dövriyyəni, hansının marjanı gətirdiyi ABC təhlili ilə göstərilir.",
              },
            ],
          },
        ],
        benefits: {
          title: "Pərakəndə şəbəkə bundan nə qazanır",
          lead: "Şəbəkədə itki iki tərəfdən gəlir: bir nöqtədə satılmayan mal, digərində satıla bilməyən müştəri. Aşağıdakılar bütün nöqtələrin eyni anda görünməsinin nəticəsidir.",
          items: [
            {
              title: "Bir mağazada tükənən mal digərində rəfdə qalmır",
              text: "Bütün nöqtələrin qalığı mərkəzdə eyni cədvəldədir, transfer isə sənədlə aparılır. Əldən gedən satış da, mal şəklində donmuş pul da eyni anda azalır.",
            },
            {
              title: "Kassa uçotdan ayrı işləmir",
              text: "Çek, ödəniş növü, ləğv və qaytarma mərkəzə axır. Gün sonunda kassanın göstərdiyi rəqəmlə anbarın göstərdiyi rəqəm arasında izahsız fərq qalmır.",
            },
            {
              title: "Endirim mərkəzdən idarə olunur",
              text: "Aksiya və endirim qaydası mərkəzdə qurulur və bütün nöqtələrdə eyni tətbiq olunur. Mağaza səviyyəsində «əldən» verilən endirim marjadan çıxmır.",
            },
            {
              title: "İnternet kəsiləndə satış dayanmır",
              text: "Kassa oflayn rejimdə işləməyə davam edir; əlaqə bərpa olunanda çeklər mərkəzə göndərilir və qalıq öz-özünə tutuşdurulur.",
            },
            {
              title: "Sifariş tarixçədən çıxır, hissdən yox",
              text: "Təkrar sifariş hər mövqenin satış sürətinə görə hesablanır. Rəfi tutan ölü çeşid də, daim tükənən mövqe də ayrıca siyahı ilə görünür.",
            },
            {
              title: "Hansı mağazanın pul qazandığı görünür",
              text: "Hər nöqtənin gəlirliliyi icarə, əmək haqqı və itki nəzərə alınmaqla hesablanır və mağazalar yan-yana müqayisə olunur.",
            },
          ],
        },
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
      ru: {
        name: "Розница",
        title: "ERP для розничных сетей",
        row: "Остатки магазинов, кассовый учёт, скидки и лояльность",
        lead: "Остатки, продажи и кассы всех магазинов видны в центре в одном месте. Товар идёт из центра в магазин с документом, из магазина к покупателю — с чеком.",
        problems: [
          "Реальный остаток в магазине не виден из центра",
          "Какой магазин какой товар продаёт, становится известно с опозданием",
          "Влияние акций на рентабельность не измеряется",
          "Инвентаризация откладывается месяцами",
        ],
        why: {
          title: "Остаток, которого вы не видите в сети, — это непроданные деньги",
          lead: "В рознице один и тот же товар заканчивается в одном магазине и лежит на полке в другом. Когда центр видит остатки с опозданием, теряют обе стороны: в одном месте упущена продажа, в другом деньги заморожены в товаре. Задача системы — одновременно показывать остатки, продажи и кассы всех магазинов и привязывать движение товара к документу.",
          changes: [
            "Остатки всех магазинов видны в центре в реальном времени, перемещения оформляются документом",
            "Какой магазин сколько заработал на каком товаре, видно в отчёте в течение дня",
            "Влияние акции на маржу считается отдельно, убыточная акция останавливается вовремя",
            "Инвентаризация идёт по штрихкоду, документ о расхождениях готовится автоматически — она не занимает дни",
          ],
        },
        signature: [
          "Остаток магазина",
          "Кассовый учёт",
          "Перемещения",
          "Скидки и лояльность",
          "Анализ ассортимента",
        ],
        featureGroups: [
          {
            group: "Сеть магазинов",
            note: "Центр видит все точки в одной таблице.",
            items: [
              {
                title: "Центр и магазин",
                text: "Перемещение с центрального склада в магазин оформляется документом. Остаток и оборот каждого магазина видны из центра.",
              },
              {
                title: "Перемещения между магазинами",
                text: "По товару, которого в одном магазине с избытком, а в другом не хватает, готовится предложение на перемещение.",
              },
              {
                title: "Быстрая инвентаризация",
                text: "Инвентаризация в магазине проводится по штрихкоду, документ о расхождениях готовится автоматически и отправляется на утверждение.",
              },
              {
                title: "Рентабельность магазина",
                text: "Аренда, зарплата и коммунальные расходы относятся на магазин, виден собственный результат каждой точки.",
              },
            ],
          },
          {
            group: "Касса и продажи",
            note: "Точка продаж не работает отдельно от учёта.",
            items: [
              {
                title: "Кассовый учёт",
                text: "Открытие и закрытие кассовой смены, оплаты наличными и картой попадают в учёт. Расхождения в кассе отслеживаются по сменам.",
              },
              {
                title: "Офлайн-режим",
                text: "Когда пропадает интернет, касса продолжает работать, а при восстановлении связи данные отправляются в центр.",
              },
              {
                title: "Скидки и акции",
                text: "Настраиваются сезонные скидки, комплекты и акции с ограничением по времени, влияние на маржу считается отдельно.",
              },
              {
                title: "Возвраты и обмены",
                text: "Возврат фиксируется по чеку, статистика причин собирается по товарам и магазинам.",
              },
            ],
          },
          {
            group: "Ассортимент и покупатели",
            note: "Что закупать, следует из истории продаж.",
            items: [
              {
                title: "Размерно-цветовая матрица",
                text: "Для одежды и обуви — сетка моделей, цветов и размеров. Какой размер закончился, видно в одной таблице.",
              },
              {
                title: "Ассортимент и дозаказ",
                text: "Минимальный остаток рассчитывается по скорости продаж, готовится список для дозаказа.",
              },
              {
                title: "Лояльность и покупатели",
                text: "Карта покупателя, начисление бонусов и история покупок. Частота повторных покупок видна в отчёте.",
              },
              {
                title: "Анализ ассортимента",
                text: "ABC-анализ показывает, какая группа даёт оборот, а какая — маржу.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает розничная сеть",
          lead: "Потери в сети приходят с двух сторон: товар, который не продался в одной точке, и покупатель, которому не смогли продать в другой. Ниже — результат того, что все точки видны одновременно.",
          items: [
            {
              title: "Товар, закончившийся в одном магазине, не залёживается в другом",
              text: "Остатки всех точек — в одной таблице в центре, а перемещения оформляются документом. Одновременно сокращаются и упущенные продажи, и деньги, замороженные в товаре.",
            },
            {
              title: "Касса не работает отдельно от учёта",
              text: "Чеки, способы оплаты, отмены и возвраты поступают в центр. В конце дня между цифрой кассы и цифрой склада не остаётся необъяснимой разницы.",
            },
            {
              title: "Скидками управляет центр",
              text: "Правила акций и скидок настраиваются в центре и одинаково применяются во всех точках. Скидки, данные «от себя» на уровне магазина, не съедают маржу.",
            },
            {
              title: "Продажи не останавливаются без интернета",
              text: "Касса продолжает работать офлайн; при восстановлении связи чеки уходят в центр, а остатки сверяются сами.",
            },
            {
              title: "Заказ следует из истории, а не из ощущений",
              text: "Дозаказ рассчитывается по скорости продаж каждой позиции. И мёртвый ассортимент, занимающий полку, и постоянно заканчивающиеся позиции видны отдельными списками.",
            },
            {
              title: "Видно, какой магазин зарабатывает",
              text: "Рентабельность каждой точки считается с учётом аренды, зарплаты и потерь, магазины сравниваются рядом.",
            },
          ],
        },
        faq: [
          {
            q: "Сколько магазинов можно подключить?",
            a: "Ограничений по числу магазинов нет. Новый магазин настраивается по шаблону за несколько минут.",
          },
          {
            q: "Останавливаются ли продажи, если в магазине пропал интернет?",
            a: "Касса продолжает работать офлайн, а при восстановлении связи данные отправляются в центр.",
          },
        ],
        seoTitle: "ERP для розницы — остатки магазинов, касса и лояльность",
        seoDescription:
          "BirSistem для розничных сетей: перемещения центр–магазин, кассовый учёт, акции и скидки, лояльность, размерно-цветовая матрица и быстрая инвентаризация.",
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
        why: {
          title: "Logistikada gəlirlilik reysdə hesablanır, ayda yox",
          lead: "Daşınmada ümumi aylıq rəqəm sağlam görünə bilər, halbuki içində zərərlə getmiş reyslər var. Yanacaq, sürücü, gömrük, yol haqqı və gözləmə — bunlar reysdən sonra yada düşəndə artıq qiymət razılaşdırılıb. Sistem hər reysi öz gəliri və öz xərci olan ayrıca kart kimi aparır və reys bağlanan kimi nəticəni göstərir.",
          changes: [
            "Hər reysin gəliri və xərci öz kartında toplanır, gəlirlilik reys bağlanan kimi görünür",
            "Normativ və faktiki yanacaq sərfi tutuşdurulur, kənarlaşma maşın və sürücü üzrə çıxır",
            "Gömrük, sığorta, yol haqqı və gözləmə xərci reysin maya dəyərinə daxil olur",
            "Reys bağlanan kimi hesab-faktura formalaşır, ödəniş qrafiki izlənir",
          ],
        },
        signature: [
          "Reys kartı",
          "Yanacaq sərfi",
          "Gömrük xərci",
          "Boş yürüş",
          "Reys gəlirliliyi",
        ],
        featureGroups: [
          {
            group: "Reys və marşrut",
            note: "Reys uçotun əsas vahididir.",
            items: [
              {
                title: "Reys kartı",
                text: "Marşrut, nəqliyyat vasitəsi, sürücü, yük və sifarişçi bir kartda. Bütün xərclər reysə yazılır.",
              },
              {
                title: "Sifariş və yük",
                text: "Sifarişçidən gələn yük sifarişi reysə bağlanır, yükləmə və boşaltma nöqtələri qeyd olunur.",
              },
              {
                title: "Gömrük və əlavə xərclər",
                text: "Gömrük rüsumu, sığorta, yol haqqı və gözləmə xərci reysin maya dəyərinə daxil edilir.",
              },
              {
                title: "Sənəd dəsti",
                text: "CMR, yol vərəqəsi və müşayiət sənədləri reysə bağlanır, çatışmayan sənəd bağlanışa mane olur.",
              },
            ],
          },
          {
            group: "Nəqliyyat parkı və yanacaq",
            note: "Maşının saxlanma dəyəri reysə paylanır.",
            items: [
              {
                title: "Yanacaq nəzarəti",
                text: "Normativ və faktiki sərf tutuşdurulur, yanacaq kartları üzrə əməliyyatlar yüklənir.",
              },
              {
                title: "Nəqliyyat parkı",
                text: "Texniki baxış, sığorta müddəti və təmir tarixçəsi maşın üzrə saxlanılır, müddəti bitənlər xəbərdarlıq verir.",
              },
              {
                title: "Təmir və ehtiyat hissə",
                text: "Təmir işləri və işlənən ehtiyat hissələr maşına yazılır, maşının saxlanma dəyəri hesablanır.",
              },
              {
                title: "GPS inteqrasiyası",
                text: "Əsas GPS platformaları ilə inteqrasiya qurulur — yerləşmə və yanacaq məlumatı reys kartına düşür.",
              },
            ],
          },
          {
            group: "Sürücü, sifarişçi və nəticə",
            note: "Hansı marşrutun pul gətirdiyi müqayisə ilə cavablanır.",
            items: [
              {
                title: "Sürücü hesablaşması",
                text: "Reys üzrə sürücü haqqı, avans və gündəlik xərc hesablanır, verilən avans reysdə bağlanır.",
              },
              {
                title: "Sifarişçi ilə hesablaşma",
                text: "Reys bağlanan kimi hesab-faktura formalaşır, ödəniş qrafiki və borc izlənir.",
              },
              {
                title: "Reys gəlirliliyi",
                text: "Marşrut, sifarişçi və nəqliyyat vasitəsi üzrə gəlirlilik yan-yana müqayisə olunur.",
              },
              {
                title: "Boş yürüş təhlili",
                text: "Yüklü və boş məsafə nisbəti ölçülür, boş qayıdışın dəyəri marşruta yazılır.",
              },
            ],
          },
        ],
        benefits: {
          title: "Logistika şirkəti bundan nə qazanır",
          lead: "Daşınmada aylıq ümumi rəqəm sağlam görünə bilər, halbuki içində zərərlə getmiş reyslər var. Aşağıdakılar uçotun reys səviyyəsinə enməsinin nəticəsidir.",
          items: [
            {
              title: "Zərərlə gedən reys ümumi rəqəmin içində gizlənmir",
              text: "Hər reys öz gəliri və öz xərci olan ayrıca kartdır — reys bağlanan kimi nəticə görünür. Ay yaxşı bağlansa da, içindəki zərərli marşrutlar ayrıca çıxır.",
            },
            {
              title: "Qiymət keçmiş reysin faktı ilə verilir",
              text: "Yeni sifariş üçün qiymət razılaşdırarkən eyni marşrutun faktiki xərcinə baxırsınız: yanacaq, gömrük, yol haqqı və gözləmə daxil olmaqla.",
            },
            {
              title: "Yanacaq sərfi norma ilə tutuşdurulur",
              text: "Hər maşının normativ və faktiki sərfi müqayisə olunur. Kənarlaşma maşın və sürücü üzrə ayrıca görünür, ümumi məbləğin içində əriyib getmir.",
            },
            {
              title: "Maşının saxlanma dəyəri reysə düşür",
              text: "Təmir, ehtiyat hissə və amortizasiya xərci reyslərə paylanır. Köhnə maşının əslində ucuz olmadığı rəqəmlə ortaya çıxır.",
            },
            {
              title: "Boş yürüş ölçülən hala düşür",
              text: "Yüklü və boş məsafə ayrıca hesablanır. Geri yüklə dolmayan istiqamətlər görünür və planlaşdırma ona görə dəyişir.",
            },
            {
              title: "Sürücü hesablaşması mübahisəsiz olur",
              text: "Reys, kilometr, gündəlik və avans eyni kartda toplanır. Ay sonunda hesablaşma yaddaşdan deyil, sistemdən çıxır.",
            },
          ],
        },
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
      ru: {
        name: "Логистика",
        title: "ERP для логистики и перевозок",
        row: "Учёт рейсов, расход топлива, таможенные расходы и рентабельность рейса",
        lead: "У каждого рейса свои доходы и свои расходы: топливо, водитель, таможня, дорожные сборы. Когда рейс закрыт, его рентабельность видна сразу.",
        problems: [
          "Фактическая рентабельность рейса теряется в общей цифре конца месяца",
          "Норма расхода топлива не сравнивается с фактическим расходом",
          "Таможенные и дополнительные расходы вспоминаются задним числом",
          "Счёт заказчику выставляется поздно, оплата задерживается",
        ],
        why: {
          title: "В логистике рентабельность считается по рейсу, а не по месяцу",
          lead: "В перевозках общая месячная цифра может выглядеть здоровой, хотя внутри есть убыточные рейсы. Топливо, водитель, таможня, дорожные сборы и простой — когда о них вспоминают после рейса, цена уже согласована. Система ведёт каждый рейс как отдельную карточку со своими доходами и расходами и показывает результат, как только рейс закрыт.",
          changes: [
            "Доходы и расходы каждого рейса собираются в его карточке, рентабельность видна сразу после закрытия рейса",
            "Нормативный и фактический расход топлива сравниваются, отклонение выводится по машине и водителю",
            "Таможня, страховка, дорожные сборы и простой входят в себестоимость рейса",
            "Как только рейс закрыт, формируется счёт-фактура, график оплаты отслеживается",
          ],
        },
        signature: [
          "Карточка рейса",
          "Расход топлива",
          "Таможенные расходы",
          "Холостой пробег",
          "Рентабельность рейса",
        ],
        featureGroups: [
          {
            group: "Рейс и маршрут",
            note: "Рейс — основная единица учёта.",
            items: [
              {
                title: "Карточка рейса",
                text: "Маршрут, транспортное средство, водитель, груз и заказчик — в одной карточке. Все расходы записываются на рейс.",
              },
              {
                title: "Заказ и груз",
                text: "Заявка заказчика на перевозку привязывается к рейсу, фиксируются точки погрузки и разгрузки.",
              },
              {
                title: "Таможня и дополнительные расходы",
                text: "Таможенные пошлины, страховка, дорожные сборы и простой включаются в себестоимость рейса.",
              },
              {
                title: "Комплект документов",
                text: "CMR, путевой лист и сопроводительные документы привязываются к рейсу, отсутствие документа не даёт закрыть рейс.",
              },
            ],
          },
          {
            group: "Автопарк и топливо",
            note: "Стоимость содержания машины распределяется на рейсы.",
            items: [
              {
                title: "Контроль топлива",
                text: "Нормативный и фактический расход сравниваются, операции по топливным картам загружаются.",
              },
              {
                title: "Автопарк",
                text: "Техосмотр, срок страховки и история ремонтов хранятся по каждой машине, по истекающим срокам приходит предупреждение.",
              },
              {
                title: "Ремонт и запчасти",
                text: "Ремонтные работы и израсходованные запчасти записываются на машину, рассчитывается стоимость её содержания.",
              },
              {
                title: "Интеграция с GPS",
                text: "Настраивается интеграция с основными GPS-платформами — данные о местоположении и топливе попадают в карточку рейса.",
              },
            ],
          },
          {
            group: "Водители, заказчики и результат",
            note: "Какой маршрут приносит деньги, показывает сравнение.",
            items: [
              {
                title: "Расчёты с водителями",
                text: "По рейсу рассчитываются оплата водителя, аванс и суточные, выданный аванс закрывается в рейсе.",
              },
              {
                title: "Расчёты с заказчиком",
                text: "Как только рейс закрыт, формируется счёт-фактура, отслеживаются график оплаты и долг.",
              },
              {
                title: "Рентабельность рейсов",
                text: "Рентабельность сравнивается рядом по маршрутам, заказчикам и транспортным средствам.",
              },
              {
                title: "Анализ холостого пробега",
                text: "Измеряется соотношение гружёного и порожнего пробега, стоимость порожнего возврата записывается на маршрут.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает логистическая компания",
          lead: "В перевозках общая месячная цифра может выглядеть здоровой, хотя внутри есть убыточные рейсы. Ниже — результат того, что учёт опускается до уровня рейса.",
          items: [
            {
              title: "Убыточный рейс не прячется в общей цифре",
              text: "Каждый рейс — отдельная карточка со своими доходами и расходами, результат виден сразу после закрытия. Даже если месяц закрылся хорошо, убыточные маршруты внутри него видны отдельно.",
            },
            {
              title: "Цена даётся по факту прошлого рейса",
              text: "Согласовывая цену нового заказа, вы смотрите на фактические расходы по тому же маршруту: с топливом, таможней, дорожными сборами и простоем.",
            },
            {
              title: "Расход топлива сверяется с нормой",
              text: "По каждой машине сравниваются нормативный и фактический расход. Отклонение видно отдельно по машине и водителю и не растворяется в общей сумме.",
            },
            {
              title: "Стоимость содержания машины ложится на рейс",
              text: "Ремонт, запчасти и амортизация распределяются на рейсы. В цифрах становится видно, что старая машина на самом деле не дешёвая.",
            },
            {
              title: "Холостой пробег становится измеримым",
              text: "Гружёный и порожний пробег считаются отдельно. Видны направления, где обратная загрузка не набирается, и планирование меняется с учётом этого.",
            },
            {
              title: "Расчёт с водителем без споров",
              text: "Рейс, километраж, суточные и аванс собраны в одной карточке. В конце месяца расчёт берётся из системы, а не из памяти.",
            },
          ],
        },
        faq: [
          {
            q: "Можно ли вести международные и внутренние перевозки в одном месте?",
            a: "Да. Для каждого вида перевозок настраиваются свой комплект документов и статьи расходов, а отчёт даётся общий.",
          },
          {
            q: "Есть ли интеграция с системой GPS-мониторинга?",
            a: "Настраивается интеграция с основными GPS-платформами — данные о местоположении и топливе попадают в карточку рейса.",
          },
        ],
        seoTitle: "ERP для логистики — учёт рейсов, топливо и рентабельность",
        seoDescription:
          "BirSistem для логистических компаний: карточка рейса, контроль топлива, таможенные и дополнительные расходы, автопарк, расчёты с заказчиком и рентабельность рейсов.",
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
        why: {
          title: "Aptekdə seriya və müddət uçotun özüdür",
          lead: "Aptekdə mal sadəcə qalıq deyil — hər qutunun öz seriyası və öz son istifadə tarixi var. Müddəti bitən preparat həm birbaşa zərərdir, həm risk; geri çağırış elan olunanda isə həmin seriyanın hansı aptekdə, hansı rəfdə olduğu dəqiqələr içində tapılmalıdır. Sistem bu iki suala hər zaman cavab verə bilmək üçün qurulur.",
          changes: [
            "Müddəti yaxınlaşan mal satışa çıxmazdan əvvəl siyahıya düşür, qərar vaxtında verilir",
            "Hər daxilolma seriya ilə qeydə alınır, geri çağırışda seriya bir axtarışla tapılır",
            "Şəbəkə daxilində balanssız qalıq üzrə transfer təklifi avtomatik hazırlanır",
            "Tənzimlənən qiymət həddi sistemdə saxlanılır, həddi aşan qiymət satışa buraxılmır",
          ],
        },
        signature: [
          "Seriya uçotu",
          "Yararlılıq müddəti",
          "Geri çağırış",
          "Resept uçotu",
          "Qiymət nəzarəti",
        ],
        featureGroups: [
          {
            group: "Seriya və yararlılıq müddəti",
            note: "Hər qutunun tarixçəsi daxilolmadan satışa qədər saxlanılır.",
            items: [
              {
                title: "Seriya və müddət uçotu",
                text: "Hər daxilolma seriya və son istifadə tarixi ilə qeydə alınır. Satışda ən erkən müddətli seriya təklif olunur.",
              },
              {
                title: "Müddət xəbərdarlığı",
                text: "Müddəti 90, 60 və 30 gün qalan mallar ayrıca siyahılarda toplanır, qaytarma və ya aksiya qərarı vaxtında verilir.",
              },
              {
                title: "Geri çağırış axtarışı",
                text: "Seriya nömrəsi ilə axtarış bütün apteklərdəki qalığı və satılmış miqdarı dərhal göstərir.",
              },
              {
                title: "Silinmə və utilizasiya",
                text: "Müddəti bitən mal sənədlə silinir, səbəb və məbləğ ayrıca hesabatda toplanır.",
              },
            ],
          },
          {
            group: "Şəbəkə və təchizat",
            note: "Qalıq apteklər arasında bərabərləşdirilir.",
            items: [
              {
                title: "Şəbəkə daxilində balanslaşdırma",
                text: "Bir aptekdə çox, digərində az qalan mal üzrə transfer təklifi hazırlanır.",
              },
              {
                title: "Təchizatçı müqayisəsi",
                text: "Eyni preparat üzrə təchizatçı qiymətləri, çatdırılma müddəti və qaytarma şərtləri müqayisə olunur.",
              },
              {
                title: "Sifariş və defisit",
                text: "Satış sürətinə görə minimum qalıq hesablanır; tapılmayan preparat üzrə müştəri sorğusu qeydə alınır.",
              },
              {
                title: "Daxilolma və qaytarma",
                text: "Təchizatçıdan daxilolma seriya ilə yoxlanılır, uyğunsuzluq və qaytarma sənədlə aparılır.",
              },
            ],
          },
          {
            group: "Satış, qiymət və uyğunluq",
            note: "Qayda pozuntusunun qarşısı satış anında alınır.",
            items: [
              {
                title: "Qiymət nəzarəti",
                text: "Tənzimlənən qiymətlər siyahısı sistemdə saxlanılır, həddi aşan qiymət satışa buraxılmır.",
              },
              {
                title: "Resept və xüsusi uçot",
                text: "Reseptlə buraxılan preparatlar ayrıca jurnalda qeydə alınır, uçotu ayrı aparılan qruplar işarələnir.",
              },
              {
                title: "Aptek kassası",
                text: "Növbə üzrə nağd və kartla ödənişlər, qaytarma və kassa fərqi uçota düşür.",
              },
              {
                title: "Analoq və əvəzedici",
                text: "Tapılmayan preparat üçün analoqlar göstərilir, satış itkisi qeydə alınır.",
              },
            ],
          },
        ],
        benefits: {
          title: "Aptek şəbəkəsi bundan nə qazanır",
          lead: "Aptekdə uçotun vahidi qutudur, qalıq deyil: hər qutunun öz seriyası və öz müddəti var. Aşağıdakılar həmin səviyyədə uçot aparmağın nəticəsidir.",
          items: [
            {
              title: "Müddəti bitən mal zərərə çevrilməmiş görünür",
              text: "Son istifadə tarixi yaxınlaşan partiyalar əvvəlcədən siyahıya düşür. Malı satmaq, başqa aptekə köçürmək və ya təchizatçıya qaytarmaq hələ mümkün olanda qərar verirsiniz.",
            },
            {
              title: "Geri çağırışa dəqiqələr içində cavab verilir",
              text: "Seriya nömrəsi ilə axtarış həmin partiyanın hansı aptekdə, nə qədər qalıqla olduğunu verir. Cavab günlərlə hazırlanmır.",
            },
            {
              title: "Qiymət qaydası satış anında yoxlanılır",
              text: "Tənzimlənən preparatlar üzrə qiymət həddi sistemdə saxlanılır və həddi aşan satış kassadan keçmir. Uyğunsuzluğun qarşısı yoxlama zamanı deyil, elə satış anında alınır.",
            },
            {
              title: "Defisit apteklər arasında bərabərləşir",
              text: "Bir nöqtədə tükənən preparatın digərində qalığı görünür, transfer sənədlə aparılır. Müştəri «yoxdur» cavabını daha az eşidir.",
            },
            {
              title: "Resept və xüsusi uçot sənədləşir",
              text: "Resept əsasında buraxılan preparatlar ayrıca uçota düşür. Yoxlama zamanı tələb olunan arayış əl ilə yığılmır, sistemdən çıxır.",
            },
            {
              title: "Sifariş təxminlə deyil, satış sürəti ilə verilir",
              text: "Hər preparatın satış sürəti və qalıq günü hesablanır, sifariş siyahısı ona görə formalaşır. Həm defisit, həm artıq qalıq azalır.",
            },
          ],
        },
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
      ru: {
        name: "Аптеки",
        title: "ERP для аптечных сетей",
        row: "Серии и сроки годности, рецептурный учёт, контроль цен",
        lead: "По каждому препарату отслеживаются серия и срок годности. Товар с истекающим сроком попадает в список ещё до выхода в продажу.",
        problems: [
          "Препарат с истёкшим сроком годности остаётся на полке",
          "Учёт по сериям не ведётся, при отзыве товар не найти",
          "Остатки внутри сети распределены несбалансированно",
          "Соблюдение ценового регулирования проверяется вручную",
        ],
        why: {
          title: "В аптеке серия и срок — это и есть учёт",
          lead: "В аптеке товар — не просто остаток: у каждой упаковки своя серия и свой срок годности. Просроченный препарат — и прямой убыток, и риск; а когда объявлен отзыв, нужно за минуты найти, в какой аптеке и на какой полке лежит эта серия. Система настраивается так, чтобы на эти два вопроса всегда был ответ.",
          changes: [
            "Товар с истекающим сроком попадает в список ещё до продажи, решение принимается вовремя",
            "Каждое поступление фиксируется с серией, при отзыве серия находится одним поиском",
            "По несбалансированным остаткам внутри сети автоматически готовится предложение на перемещение",
            "Предельная регулируемая цена хранится в системе, цена выше предела в продажу не пропускается",
          ],
        },
        signature: [
          "Учёт серий",
          "Срок годности",
          "Отзыв",
          "Рецептурный учёт",
          "Контроль цен",
        ],
        featureGroups: [
          {
            group: "Серии и сроки годности",
            note: "История каждой упаковки хранится от поступления до продажи.",
            items: [
              {
                title: "Учёт серий и сроков",
                text: "Каждое поступление фиксируется с серией и сроком годности. При продаже предлагается серия с самым ранним сроком.",
              },
              {
                title: "Предупреждение о сроках",
                text: "Товары, у которых до конца срока осталось 90, 60 и 30 дней, собираются в отдельные списки, решение о возврате или акции принимается вовремя.",
              },
              {
                title: "Поиск при отзыве",
                text: "Поиск по номеру серии сразу показывает остаток во всех аптеках и проданное количество.",
              },
              {
                title: "Списание и утилизация",
                text: "Просроченный товар списывается документом, причины и суммы собираются в отдельном отчёте.",
              },
            ],
          },
          {
            group: "Сеть и снабжение",
            note: "Остатки выравниваются между аптеками.",
            items: [
              {
                title: "Балансировка внутри сети",
                text: "По товару, которого в одной аптеке много, а в другой мало, готовится предложение на перемещение.",
              },
              {
                title: "Сравнение поставщиков",
                text: "По одному препарату сравниваются цены поставщиков, сроки поставки и условия возврата.",
              },
              {
                title: "Заказ и дефектура",
                text: "Минимальный остаток рассчитывается по скорости продаж; запрос покупателя на отсутствующий препарат фиксируется.",
              },
              {
                title: "Поступления и возвраты",
                text: "Поступление от поставщика проверяется по сериям, несоответствия и возвраты оформляются документом.",
              },
            ],
          },
          {
            group: "Продажи, цены и соответствие требованиям",
            note: "Нарушение правил предотвращается в момент продажи.",
            items: [
              {
                title: "Контроль цен",
                text: "Список регулируемых цен хранится в системе, цена выше предела в продажу не пропускается.",
              },
              {
                title: "Рецептурный и особый учёт",
                text: "Препараты, отпускаемые по рецепту, фиксируются в отдельном журнале, группы с особым учётом помечаются.",
              },
              {
                title: "Аптечная касса",
                text: "Оплаты наличными и картой по сменам, возвраты и расхождения в кассе попадают в учёт.",
              },
              {
                title: "Аналоги и заменители",
                text: "Для отсутствующего препарата показываются аналоги, упущенная продажа фиксируется.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает аптечная сеть",
          lead: "В аптеке единица учёта — упаковка, а не остаток: у каждой упаковки своя серия и свой срок. Ниже — результат учёта на этом уровне.",
          items: [
            {
              title: "Истекающий товар виден до того, как стал убытком",
              text: "Партии с приближающимся сроком годности заранее попадают в список. Вы принимаете решение, пока товар ещё можно продать, переместить в другую аптеку или вернуть поставщику.",
            },
            {
              title: "На отзыв отвечаете за минуты",
              text: "Поиск по номеру серии показывает, в какой аптеке и сколько осталось этой партии. Ответ не готовится днями.",
            },
            {
              title: "Правило цены проверяется в момент продажи",
              text: "Предельная цена по регулируемым препаратам хранится в системе, и продажа выше предела не проходит через кассу. Несоответствие предотвращается не при проверке, а прямо в момент продажи.",
            },
            {
              title: "Дефицит выравнивается между аптеками",
              text: "Остаток препарата, закончившегося в одной точке, виден в другой, перемещение оформляется документом. Покупатель реже слышит «нет в наличии».",
            },
            {
              title: "Рецептурный и особый учёт документируется",
              text: "Препараты, отпущенные по рецепту, учитываются отдельно. Справка, нужная при проверке, не собирается вручную, а берётся из системы.",
            },
            {
              title: "Заказ по скорости продаж, а не на глаз",
              text: "Для каждого препарата рассчитываются скорость продаж и запас в днях, список заказа формируется по ним. Уменьшаются и дефицит, и избыточные остатки.",
            },
          ],
        },
        faq: [
          {
            q: "Сколько времени занимает найти отозванную серию?",
            a: "Поиск по номеру серии сразу показывает остаток во всех аптеках и проданное количество.",
          },
          {
            q: "Сколько аптек можно подключить?",
            a: "Ограничений по размеру сети нет. У каждой аптеки свои остатки, своя касса и свой отчёт.",
          },
        ],
        seoTitle: "ERP для аптеки — серии, сроки годности, контроль остатков",
        seoDescription:
          "BirSistem для аптечных сетей: учёт серий и сроков годности, предупреждения о сроках, балансировка остатков в сети, контроль цен и рецептурный журнал.",
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
        why: {
          title: "Xidmətdə satılan şey vaxtdır — ölçülmürsə, satılmır",
          lead: "Xidmət şirkətində xərcin böyük hissəsi əmək haqqıdır, gəlir isə həmin komandanın vaxtından çıxır. Kimin hansı layihəyə neçə saat verdiyi ölçülmürsə, layihənin gəlirli olub-olmadığı da bilinmir — və komandanı ən çox yükləyən müştəri çox vaxt ən az pul gətirən olur. Sistem saatı uçot vahidinə çevirir və hər layihənin nəticəsini rəqəmlə verir.",
          changes: [
            "Əməkdaş saatını layihəyə yazır, saatın maya dəyəri və satış dəyəri ayrıca saxlanılır",
            "Müqavilə mərhələləri və ödəniş qrafiki sistemdə izlənir, gecikən mərhələ görünür",
            "Abunə üzrə hesablar avtomatik formalaşır və göndərilir — unudulma ehtimalı aradan qalxır",
            "Hər müştərinin sərf etdirdiyi saat və gətirdiyi gəlir yan-yana müqayisə olunur",
          ],
        },
        signature: [
          "Layihə və mərhələ",
          "İş saatı",
          "Saatın dəyəri",
          "Abunə hesabları",
          "Layihə gəlirliliyi",
        ],
        featureGroups: [
          {
            group: "Müqavilə və layihə",
            note: "Müqavilə imzalanan kimi izlənə bilən layihəyə çevrilir.",
            items: [
              {
                title: "Layihə və mərhələlər",
                text: "Hər müqavilə layihəyə çevrilir, mərhələlər, təhvil tarixləri və məsul şəxs qeyd olunur.",
              },
              {
                title: "Müqavilə və ödəniş qrafiki",
                text: "Mərhələli ödənişlər müqaviləyə bağlanır, çatan ödəniş tarixi xəbərdarlıq verir.",
              },
              {
                title: "Xidmət sorğuları",
                text: "Müştəri müraciətləri növbəyə düşür, cavab müddəti və həll müddəti ölçülür.",
              },
              {
                title: "Sənəd və təhvil aktı",
                text: "Təhvil aktı və hesab-faktura layihə mərhələsindən formalaşır, e-qaimə ona bağlanır.",
              },
            ],
          },
          {
            group: "Vaxt və komanda",
            note: "Saat yazılışı gündəlik işin bir hissəsidir, ayrıca iş deyil.",
            items: [
              {
                title: "İş saatının uçotu",
                text: "Əməkdaş öz saatını layihəyə yazır; yazılış gün sonunda bir neçə klikə, təkrarlanan tapşırıqlar şablondan seçilir.",
              },
              {
                title: "Saatın dəyəri",
                text: "Hər vəzifə üçün saatın maya dəyəri və satış dəyəri ayrıca saxlanılır, layihəyə həmin dərəcə ilə düşür.",
              },
              {
                title: "Komandanın yüklənməsi",
                text: "Kimin nə qədər yükləndiyi həftəlik cədvəldə görünür — yeni layihə götürmək qərarı rəqəmə əsaslanır.",
              },
              {
                title: "Məzuniyyət və davamiyyət",
                text: "Məzuniyyət, ezamiyyət və xəstəlik günləri plana düşür, layihə qrafikinə təsiri əvvəlcədən görünür.",
              },
            ],
          },
          {
            group: "Hesablaşma və gəlirlilik",
            note: "Hansı işi götürmək qərarı keçmiş layihələrin nəticəsindən çıxır.",
            items: [
              {
                title: "Abunə və təkrar hesablar",
                text: "Aylıq abunə üzrə hesablar avtomatik formalaşır və göndərilir, ödəniş izlənir.",
              },
              {
                title: "Hesablaşma modelləri",
                text: "Sabit qiymətli, saathesabı və abunə layihələr bir yerdə aparılır, gəlirlilik hər üç modeldə hesablanır.",
              },
              {
                title: "Layihə gəlirliliyi",
                text: "Layihənin gəliri, sərf olunan saatın dəyəri və birbaşa xərcləri tutuşdurulur.",
              },
              {
                title: "Müştəri gəlirliliyi",
                text: "Müştərinin sərf etdirdiyi ümumi saat və gətirdiyi gəlir müqayisə olunur.",
              },
            ],
          },
        ],
        benefits: {
          title: "Xidmət şirkəti bundan nə qazanır",
          lead: "Xidmətdə xərcin böyük hissəsi əmək haqqı, gəlir isə komandanın vaxtıdır. Aşağıdakılar saatı uçot vahidinə çevirməyin nəticəsidir.",
          items: [
            {
              title: "Layihənin gəlirli olub-olmadığı təhvildən əvvəl bilinir",
              text: "Yazılan saatlar öz dəyəri ilə layihəyə düşür. Sərf olunan vaxt büdcəni ötməyə başlayanda bu, iş hələ davam edərkən görünür — həcmi dəqiqləşdirmək və ya əlavə iş razılaşdırmaq hələ mümkündür.",
            },
            {
              title: "Ən çox yükləyən müştəri ilə ən çox ödəyən müştəri ayrılır",
              text: "Müştəri gəlirliliyi onun bütün layihələrinin saatını və xərcini toplayır. Praktikada bu iki siyahının başı çox vaxt eyni adla başlamır.",
            },
            {
              title: "Təklif keçmiş layihənin saatı ilə verilir",
              text: "Oxşar işə real olaraq neçə saat getdiyi tarixçədə qalır. Yeni təklif bazarın ortalaması ilə deyil, öz faktınızla qurulur.",
            },
            {
              title: "Komandanın yüklənməsi əvvəlcədən görünür",
              text: "Kimin növbəti həftələrdə nə qədər sərbəst vaxtı olduğu planda görünür. Yeni işi götürmək və ya təxirə salmaq qərarı buna baxaraq verilir.",
            },
            {
              title: "Abunə hesabları unudulmur",
              text: "Təkrarlanan hesablar qrafik üzrə özü formalaşır, ödənilməyənlər ayrıca siyahıya düşür. Aylıq gəlirin bir hissəsi sadəcə yaddan çıxdığı üçün itmir.",
            },
            {
              title: "Saat yazılışı ayrıca iş olmaqdan çıxır",
              text: "Vaxt uçotu gündəlik işin içində aparılır, ay sonunda yaddaşdan bərpa edilmir. Məhz buna görə rəqəmlər real olur — sonradan bərpa edilmiş tabel həmişə gerçəkdən gözəl görünür.",
            },
          ],
        },
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
      ru: {
        name: "Услуги",
        title: "ERP для сервисных компаний",
        row: "Договоры, рабочее время, рентабельность проектов и расчёты по подписке",
        lead: "В сфере услуг продаётся время. Измеряется, кто сколько часов потратил на какой проект и сколько дохода принёс этот час.",
        problems: [
          "Реальное время, потраченное на проект, неизвестно",
          "Поэтапные оплаты по договору отслеживаются вручную",
          "По абонентским услугам забывают выставить счёт",
          "Не видно, какой клиент загружает команду, но не приносит денег",
        ],
        why: {
          title: "В услугах продаётся время — не измеряете, не продаёте",
          lead: "В сервисной компании бо́льшая часть расходов — зарплата, а доход берётся из времени этой команды. Если не измерять, кто сколько часов отдал какому проекту, неизвестно и то, прибылен ли проект, — а клиент, который больше всех загружает команду, часто приносит меньше всего денег. Система превращает час в единицу учёта и даёт результат каждого проекта в цифрах.",
          changes: [
            "Сотрудник записывает часы на проект, себестоимость и продажная стоимость часа хранятся отдельно",
            "Этапы договора и график оплат отслеживаются в системе, просроченный этап виден",
            "Счета по подписке формируются и отправляются автоматически — вероятность забыть исчезает",
            "Потраченные на клиента часы и принесённый им доход сравниваются рядом",
          ],
        },
        signature: [
          "Проект и этапы",
          "Рабочие часы",
          "Стоимость часа",
          "Счета по подписке",
          "Рентабельность проекта",
        ],
        featureGroups: [
          {
            group: "Договор и проект",
            note: "Как только договор подписан, он становится отслеживаемым проектом.",
            items: [
              {
                title: "Проект и этапы",
                text: "Каждый договор становится проектом, фиксируются этапы, сроки сдачи и ответственный.",
              },
              {
                title: "Договор и график оплат",
                text: "Поэтапные оплаты привязываются к договору, о наступающей дате оплаты приходит напоминание.",
              },
              {
                title: "Сервисные заявки",
                text: "Обращения клиентов попадают в очередь, измеряются время ответа и время решения.",
              },
              {
                title: "Документы и акт сдачи",
                text: "Акт сдачи и счёт-фактура формируются из этапа проекта, к ним привязывается э-счёт-фактура.",
              },
            ],
          },
          {
            group: "Время и команда",
            note: "Запись часов — часть ежедневной работы, а не отдельная задача.",
            items: [
              {
                title: "Учёт рабочего времени",
                text: "Сотрудник записывает свои часы на проект; в конце дня это несколько кликов, повторяющиеся задачи выбираются из шаблона.",
              },
              {
                title: "Стоимость часа",
                text: "Для каждой должности отдельно хранятся себестоимость и продажная стоимость часа, на проект часы ложатся по этой ставке.",
              },
              {
                title: "Загрузка команды",
                text: "Кто насколько загружен, видно в недельной таблице — решение взять новый проект опирается на цифры.",
              },
              {
                title: "Отпуска и посещаемость",
                text: "Отпуска, командировки и больничные попадают в план, их влияние на график проекта видно заранее.",
              },
            ],
          },
          {
            group: "Расчёты и рентабельность",
            note: "Решение, какую работу брать, следует из результатов прошлых проектов.",
            items: [
              {
                title: "Подписки и регулярные счета",
                text: "Счета по ежемесячной подписке формируются и отправляются автоматически, оплата отслеживается.",
              },
              {
                title: "Модели расчётов",
                text: "Проекты с фиксированной ценой, почасовой оплатой и по подписке ведутся в одном месте, рентабельность считается во всех трёх моделях.",
              },
              {
                title: "Рентабельность проекта",
                text: "Доход проекта сравнивается со стоимостью затраченных часов и прямыми расходами.",
              },
              {
                title: "Рентабельность клиента",
                text: "Сравниваются общее число часов, потраченных на клиента, и принесённый им доход.",
              },
            ],
          },
        ],
        benefits: {
          title: "Что получает сервисная компания",
          lead: "В услугах бо́льшая часть расходов — зарплата, а доход — время команды. Ниже — результат того, что час становится единицей учёта.",
          items: [
            {
              title: "Прибыльность проекта известна до сдачи",
              text: "Записанные часы ложатся на проект по своей стоимости. Когда затраченное время начинает превышать бюджет, это видно, пока работа ещё идёт, — ещё можно уточнить объём или согласовать дополнительные работы.",
            },
            {
              title: "Самый загружающий клиент отделяется от самого платящего",
              text: "Рентабельность клиента суммирует часы и расходы по всем его проектам. На практике эти два списка часто начинаются с разных имён.",
            },
            {
              title: "Предложение строится по часам прошлого проекта",
              text: "Сколько часов реально ушло на похожую работу, остаётся в истории. Новое предложение строится не по среднему по рынку, а по вашему собственному факту.",
            },
            {
              title: "Загрузка команды видна заранее",
              text: "Сколько свободного времени у кого будет в ближайшие недели, видно в плане. Решение взять новую работу или отложить её принимается с учётом этого.",
            },
            {
              title: "Счета по подписке не забываются",
              text: "Регулярные счета формируются сами по графику, неоплаченные попадают в отдельный список. Часть месячного дохода не теряется просто потому, что о ней забыли.",
            },
            {
              title: "Запись часов перестаёт быть отдельной работой",
              text: "Учёт времени ведётся в ходе ежедневной работы, а не восстанавливается по памяти в конце месяца. Именно поэтому цифры реальны — восстановленный задним числом табель всегда выглядит лучше действительности.",
            },
          ],
        },
        faq: [
          {
            q: "Не будет ли запись часов обременительной для сотрудников?",
            a: "Запись в конце дня занимает несколько кликов, повторяющиеся задачи выбираются из шаблона.",
          },
          {
            q: "Можно ли вести проекты с фиксированной ценой и почасовые в одном месте?",
            a: "Да. Для каждого проекта отдельно выбирается модель расчётов, рентабельность считается в обеих моделях.",
          },
        ],
        seoTitle: "ERP для сервисных компаний — проекты, рабочее время, рентабельность",
        seoDescription:
          "BirSistem для сервисных компаний: проекты и этапы, учёт рабочего времени, счета по подписке, рентабельность проектов и отчёт о загрузке команды.",
      },
    },
  },
];

export const SECTOR_BY_SLUG = new Map(SECTORS.map((s) => [s.slug, s]));
