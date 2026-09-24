import type { Faq, Localized } from "@/lib/content";

export type PricingCopy = {
  tiers: {
    name: string;
    forWhom: string;
    summary: string;
    includes: string[];
  }[];
  /** Feature matrix — the same rows for every tier so they can be compared. */
  matrix: {
    group: string;
    rows: { feature: string; values: [string, string, string] }[];
  }[];
  included: { title: string; text: string }[];
  faq: Faq[];
  formTitle: string;
  formLead: string;
};

export const PRICING: Localized<PricingCopy> = {
  az: {
    tiers: [
      {
        name: "Başlanğıc",
        forWhom: "1–10 istifadəçi, bir anbar",
        summary:
          "Excel-dən ilk keçid üçün. Satış və anbar sənədləri, əsas hesabatlar və bir filial.",
        includes: [
          "CRM və anbar modulları",
          "Bir anbar, bir filial",
          "Standart sənəd formaları",
          "E-poçt dəstəyi",
        ],
      },
      {
        name: "Biznes",
        forWhom: "10–50 istifadəçi, bir neçə anbar",
        summary:
          "Ən çox seçilən paket. Mühasibat və maliyyə də qoşulur, təsdiq marşrutları və rol sistemi işə düşür.",
        includes: [
          "Altı modulun hamısı",
          "Çoxanbarlı və çoxfiliallı iş",
          "Təsdiq marşrutları və rollar",
          "Telefon və yazışma dəstəyi",
        ],
      },
      {
        name: "Müəssisə",
        forWhom: "50+ istifadəçi, qrup şirkətlər",
        summary:
          "Bir neçə hüquqi şəxs, konsolidasiya edilmiş hesabat və fərdi inteqrasiyalar.",
        includes: [
          "Bir neçə hüquqi şəxs və konsolidasiya",
          "Fərdi inteqrasiyalar və API",
          "Öz serverinizdə quraşdırma imkanı",
          "Ayrıca müşayiətçi və prioritet dəstək",
        ],
      },
    ],
    matrix: [
      {
        group: "Modullar",
        rows: [
          { feature: "CRM və satış", values: ["Var", "Var", "Var"] },
          { feature: "Anbar", values: ["Var", "Var", "Var"] },
          { feature: "Mühasibat və e-qaimə", values: ["Əlavə", "Var", "Var"] },
          { feature: "Maliyyə və ödəniş təqvimi", values: ["Əlavə", "Var", "Var"] },
          { feature: "HR və əmək haqqı", values: ["Əlavə", "Var", "Var"] },
          { feature: "Hesabat və analitika", values: ["Əsas kəsimlər", "Tam", "Tam və fərdi"] },
        ],
      },
      {
        group: "Struktur",
        rows: [
          { feature: "Anbar sayı", values: ["1", "Məhdudiyyətsiz", "Məhdudiyyətsiz"] },
          { feature: "Filial sayı", values: ["1", "Məhdudiyyətsiz", "Məhdudiyyətsiz"] },
          { feature: "Hüquqi şəxs sayı", values: ["1", "2-yə qədər", "Məhdudiyyətsiz"] },
          { feature: "Rol və giriş hüquqları", values: ["Sadə", "Tam", "Tam və fərdi"] },
        ],
      },
      {
        group: "Qurulma və dəstək",
        rows: [
          { feature: "Məlumatın köçürülməsi", values: ["Var", "Var", "Var"] },
          { feature: "Komandanın təlimi", values: ["Onlayn", "Onlayn və yerində", "Yerində"] },
          { feature: "Dəstək kanalı", values: ["E-poçt", "Telefon və yazışma", "Prioritet xətt"] },
          { feature: "Fərdi inteqrasiyalar", values: ["Yox", "Razılaşma ilə", "Var"] },
        ],
      },
    ],
    included: [
      {
        title: "Qurulma və köçürmə",
        text: "Hesablar planı, anbarlar, qiymət siyahıları və açılış qalıqları bizim tərəfimizdən köçürülür. Nəticə üzləşmə ilə yoxlanılır.",
      },
      {
        title: "Təlim",
        text: "Komanda öz rolu üzrə təlim keçir. Təlim materialı sizdə qalır, yeni işçi gələndə təkrar istifadə olunur.",
      },
      {
        title: "Yeniləmələr",
        text: "Qanunvericilik dəyişiklikləri və məhsul yeniləmələri abunəyə daxildir, ayrıca ödəniş tələb olunmur.",
      },
      {
        title: "Ehtiyat nüsxə",
        text: "Məlumatın gündəlik ehtiyat nüsxəsi götürülür. Bərpa tələbi dəstək xidməti vasitəsilə icra olunur.",
      },
    ],
    faq: [
      {
        q: "Niyə qiymət saytda yazılmır?",
        a: "Qiymət istifadəçi sayından, seçilən modullardan və köçürüləcək məlumatın həcmindən asılıdır. Eyni paket iki şirkət üçün fərqli qiymətə düşə bilər, ona görə hazır rəqəm yazmaq yanıldıcı olardı.",
      },
      {
        q: "Təklif nə qədər vaxta hazırlanır?",
        a: "Qısa söhbətdən sonra bir-iki iş günü ərzində yazılı təklif göndəririk. Təklifdə aylıq abunə, birdəfəlik qurulma xərci və müddət ayrıca göstərilir.",
      },
      {
        q: "Sonradan paket dəyişdirilə bilərmi?",
        a: "Bəli. Modul və istifadəçi əlavə etmək istənilən vaxt mümkündür, məlumat yerində qalır və yenidən köçürmə tələb olunmur.",
      },
      {
        q: "Müqavilə müddəti nə qədərdir?",
        a: "Standart müqavilə bir illikdir. Daha qısa müddət də mümkündür, bu halda aylıq abunə bir qədər yüksək olur.",
      },
    ],
    formTitle: "Təklif üçün sorğu",
    formLead:
      "Bir neçə sual — şirkətin ölçüsü, sahəsi və hansı modulların lazım olduğu. Cavablara baxıb konkret təklif hazırlayırıq.",
  },

  ru: {
    tiers: [
      {
        name: "Старт",
        forWhom: "1–10 пользователей, один склад",
        summary:
          "Для первого перехода с Excel. Документы продаж и склада, основные отчёты и один филиал.",
        includes: [
          "Модули CRM и склад",
          "Один склад, один филиал",
          "Стандартные формы документов",
          "Поддержка по e-mail",
        ],
      },
      {
        name: "Бизнес",
        forWhom: "10–50 пользователей, несколько складов",
        summary:
          "Самый популярный тариф. Подключаются бухгалтерия и финансы, работают маршруты согласования и система ролей.",
        includes: [
          "Все шесть модулей",
          "Несколько складов и филиалов",
          "Маршруты согласования и роли",
          "Поддержка по телефону и в переписке",
        ],
      },
      {
        name: "Корпоративный",
        forWhom: "50+ пользователей, группы компаний",
        summary:
          "Несколько юридических лиц, консолидированная отчётность и индивидуальные интеграции.",
        includes: [
          "Несколько юрлиц и консолидация",
          "Индивидуальные интеграции и API",
          "Возможность установки на вашем сервере",
          "Персональный менеджер и приоритетная поддержка",
        ],
      },
    ],
    matrix: [
      {
        group: "Модули",
        rows: [
          { feature: "CRM и продажи", values: ["Есть", "Есть", "Есть"] },
          { feature: "Склад", values: ["Есть", "Есть", "Есть"] },
          { feature: "Бухгалтерия и э-счёт-фактура", values: ["Опция", "Есть", "Есть"] },
          { feature: "Финансы и платёжный календарь", values: ["Опция", "Есть", "Есть"] },
          { feature: "HR и зарплата", values: ["Опция", "Есть", "Есть"] },
          { feature: "Отчёты и аналитика", values: ["Основные разрезы", "Полные", "Полные и свои"] },
        ],
      },
      {
        group: "Структура",
        rows: [
          { feature: "Число складов", values: ["1", "Без ограничений", "Без ограничений"] },
          { feature: "Число филиалов", values: ["1", "Без ограничений", "Без ограничений"] },
          { feature: "Число юрлиц", values: ["1", "До 2", "Без ограничений"] },
          { feature: "Роли и права доступа", values: ["Простые", "Полные", "Полные и свои"] },
        ],
      },
      {
        group: "Внедрение и поддержка",
        rows: [
          { feature: "Перенос данных", values: ["Есть", "Есть", "Есть"] },
          { feature: "Обучение команды", values: ["Онлайн", "Онлайн и на месте", "На месте"] },
          { feature: "Канал поддержки", values: ["E-mail", "Телефон и переписка", "Приоритетная линия"] },
          { feature: "Индивидуальные интеграции", values: ["Нет", "По согласованию", "Есть"] },
        ],
      },
    ],
    included: [
      {
        title: "Настройка и перенос",
        text: "План счетов, склады, прайс-листы и начальные остатки переносим мы. Результат проверяется сверкой.",
      },
      {
        title: "Обучение",
        text: "Каждый сотрудник обучается под свою роль. Учебные материалы остаются у вас и пригодятся, когда придёт новый сотрудник.",
      },
      {
        title: "Обновления",
        text: "Изменения законодательства и обновления продукта входят в подписку и не оплачиваются отдельно.",
      },
      {
        title: "Резервное копирование",
        text: "Ежедневно создаётся резервная копия данных. Восстановление выполняется по запросу через службу поддержки.",
      },
    ],
    faq: [
      {
        q: "Почему на сайте не указана цена?",
        a: "Цена зависит от числа пользователей, выбранных модулей и объёма переносимых данных. Один и тот же тариф для двух компаний может стоить по-разному, поэтому готовая цифра вводила бы в заблуждение.",
      },
      {
        q: "Сколько времени готовится предложение?",
        a: "После короткого разговора мы отправляем письменное предложение в течение одного-двух рабочих дней. В нём отдельно указаны ежемесячная подписка, разовая стоимость внедрения и сроки.",
      },
      {
        q: "Можно ли потом сменить тариф?",
        a: "Да. Добавить модули и пользователей можно в любой момент: данные остаются на месте, повторный перенос не нужен.",
      },
      {
        q: "На какой срок заключается договор?",
        a: "Стандартный договор — на один год. Возможен и более короткий срок, в этом случае ежемесячная подписка немного выше.",
      },
    ],
    formTitle: "Запрос предложения",
    formLead:
      "Несколько вопросов — размер компании, отрасль и какие модули нужны. По ответам мы подготовим конкретное предложение.",
  },
};
