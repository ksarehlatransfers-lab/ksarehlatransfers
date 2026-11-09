import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Yanbu — destination hub.
 *
 * Yanbu Governorate is three cities, and Saudi searchers name them separately
 * (ينبع البحر / ينبع النخل / ينبع الصناعية). The page keeps them distinct
 * rather than one vague "Yanbu". Owner-confirmed (8 Nov 2026): Yanbu town
 * (Yanbu Al-Bahr), Yanbu airport, public addresses in Yanbu Industrial City,
 * Madinah↔Yanbu. **No port access, secure gate access, permits or worker
 * transport is claimed.**
 *
 * Not confirmed, so not offered (owner review, 8 Nov 2026):
 * - Yanbu Al-Nakhl appears only as geography (one of the three cities), never
 *   as a destination in the airport, quotation or CTA copy.
 * - Jeddah–Yanbu is not a confirmed route here; ~337 km is given only as
 *   distance context. The existing Jeddah hub's own coverage is unchanged.
 *
 * Facts (local research folder, madinah-region/02), Saudipedia unless noted:
 * - On the Red Sea ~200 km west of Madinah; three cities; population 359,631
 *   (2022).
 * - Industrial base: Yanbu Industrial Port, the largest crude-export port on
 *   the Red Sea coast; Yanbu Industrial City under the Royal Commission.
 * - Historic Yanbu ~2,500 years; al-Swar historical district.
 * - Prince Abdulmohsin bin Abdulaziz Airport serves Yanbu (province article).
 * - "Diving capital on the Red Sea" — Visit Saudi.
 * - Jeddah–Yanbu ~337 km (existing Jeddah hub).
 *
 * Deliberately absent: Yanbu al-Nakhl detail beyond its existence (no source
 * read), named companies, port or gate procedures, prices, commuting services.
 */

type B = Bilingual<string>;

export type YanbuContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  three: {
    heading: B;
    lead: B;
    cities: { name: B; arName: string; role: B; detail: B; tell: B }[];
  };
  industrial: { heading: B; paragraphs: B[]; limit: B };
  airport: { heading: B; paragraphs: B[] };
  routes: { heading: B; rows: { from: B; distance: B; note: B; link?: { routeKey: RouteKey; label: B } }[]; footnote: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const yanbu: YanbuContent = {
  routeKey: "yanbu",
  imageKey: "yanbu-old-town",

  seo: {
    title: {
      en: "Yanbu Private Transfers | Town, Airport, Industrial City",
      ar: "التوصيل في ينبع | ينبع البحر والمطار والمدينة الصناعية",
    },
    description: {
      en: "Private transfers in Yanbu: Yanbu Al-Bahr, Yanbu airport and public addresses in the Industrial City, plus journeys from Madinah. Request a written quotation.",
      ar: "توصيل خاص في ينبع: ينبع البحر ومطار ينبع والعناوين العامة في ينبع الصناعية، والرحلات من المدينة المنورة إلى ساحل البحر الأحمر. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Yanbu", ar: "ينبع" },

  hero: {
    eyebrow: { en: "Madinah Region · Red Sea coast", ar: "منطقة المدينة المنورة · ساحل البحر الأحمر" },
    h1: {
      en: "Private transfers in Yanbu",
      ar: "التوصيل الخاص في ينبع",
    },
    lead: {
      en: "Yanbu sits on the Red Sea about 200 km west of Madinah — a historic port with some 2,500 years behind it, one of the Kingdom's main industrial bases, and a coast Visit Saudi calls the country's diving capital. It is really three cities; we cover Yanbu Al-Bahr, the airport and public addresses in Yanbu Industrial City.",
      ar: "تقع ينبع على البحر الأحمر على بعد نحو 200 كم غرب المدينة المنورة، وهي ميناء تاريخي عمره نحو 2,500 عام، وإحدى أهم القواعد الصناعية في المملكة، وساحل تصفه روح السعودية بعاصمة الغوص. وهي في الحقيقة ثلاث مدن، ونحن نخدم ينبع البحر والمطار والعناوين العامة في ينبع الصناعية.",
    },
  },

  three: {
    heading: { en: "Three cities, one name", ar: "ثلاث مدن باسم واحد" },
    lead: {
      en: "Yanbu Governorate's urban area is made up of three cities, far enough apart that the right one decides the journey. Our confirmed coverage is Yanbu Al-Bahr, Yanbu airport and public addresses in Yanbu Industrial City.",
      ar: "تتكوّن المنطقة الحضرية لمحافظة ينبع من ثلاث مدن متباعدة بما يكفي لأن يحدد اختيار المدينة الصحيحة الرحلة. والتغطية المؤكدة لدينا هي ينبع البحر ومطار ينبع والعناوين العامة في ينبع الصناعية.",
    },
    cities: [
      {
        name: { en: "Yanbu Al-Bahr", ar: "ينبع البحر" },
        arName: "ينبع البحر",
        role: { en: "The town on the sea", ar: "المدينة على البحر" },
        detail: {
          en: "The town on the sea and the old port, with the historic al-Swar district on its southern side and the waterfront.",
          ar: "المدينة على البحر والميناء القديم، وفيها حي الصور التاريخي في جهتها الجنوبية والواجهة البحرية.",
        },
        tell: { en: "Name the hotel or address.", ar: "اذكر اسم الفندق أو العنوان." },
      },
      {
        name: { en: "Yanbu Al-Nakhl", ar: "ينبع النخل" },
        arName: "ينبع النخل",
        role: { en: "The second town", ar: "المدينة الثانية" },
        detail: {
          en: "A separate town within the governorate, distinct from Yanbu Al-Bahr on the coast.",
          ar: "مدينة مستقلة ضمن المحافظة، تختلف عن ينبع البحر الواقعة على الساحل.",
        },
        tell: { en: "Shown for orientation only — not part of the coverage confirmed on this page.", ar: "مذكورة للتعريف فقط، وليست ضمن التغطية المؤكدة في هذه الصفحة." },
      },
      {
        name: { en: "Yanbu Industrial City", ar: "ينبع الصناعية" },
        arName: "ينبع الصناعية",
        role: { en: "The industrial city", ar: "المدينة الصناعية" },
        detail: {
          en: "The planned industrial city under the Royal Commission at Yanbu, home to dozens of major industrial complexes.",
          ar: "المدينة الصناعية المخططة التابعة للهيئة الملكية بينبع، وتضم عشرات المجمعات الصناعية الكبرى.",
        },
        tell: { en: "Give the district or public address you are going to.", ar: "زوّدنا بالحي أو العنوان العام الذي تقصده." },
      },
    ],
  },

  industrial: {
    heading: { en: "Business travel to the Industrial City", ar: "رحلات العمل إلى ينبع الصناعية" },
    paragraphs: [
      {
        en: "Yanbu is one of the Kingdom's main industrial clusters: the Industrial City hosts dozens of major industrial complexes, and Yanbu's industrial port is the largest crude-oil export port on the Red Sea coast. The port is a separate, secured facility, not a destination we serve.",
        ar: "ينبع من أهم التجمعات الصناعية في المملكة، إذ تضم المدينة الصناعية عشرات المجمعات الصناعية الكبرى، وميناء ينبع الصناعي أكبر ميناء لتصدير النفط الخام على ساحل البحر الأحمر. والميناء منشأة مستقلة مؤمّنة وليس وجهة نخدمها.",
      },
      {
        en: "We take you to the address you give us — a hotel, an office, a residential district or a meeting place in the Industrial City.",
        ar: "ونوصلك إلى العنوان الذي تعطينا إياه: فندق أو مكتب أو حي سكني أو مكان اجتماع في المدينة الصناعية.",
      },
    ],
    limit: {
      en: "We do not claim access to the port, secured industrial sites or company gates, and we do not run worker transport. Any site access is arranged by your host; tell us the meeting point outside it.",
      ar: "ولا ندّعي الدخول إلى الميناء أو المواقع الصناعية المؤمّنة أو بوابات الشركات، ولا نقدّم نقلًا للعمال. وأي دخول إلى موقع يرتّبه الطرف المستضيف، فأخبرنا بنقطة اللقاء خارجه.",
    },
  },

  airport: {
    heading: { en: "Yanbu airport", ar: "مطار ينبع" },
    paragraphs: [
      {
        en: "Prince Abdulmohsin bin Abdulaziz Airport serves Yanbu. Send the flight number and the address — in Yanbu Al-Bahr or a public address in the Industrial City — and the pickup follows the aircraft.",
        ar: "يخدم مطار الأمير عبدالمحسن بن عبدالعزيز محافظة ينبع. أرسل رقم الرحلة والعنوان، في ينبع البحر أو عنوانًا عامًا في ينبع الصناعية، ليتبع موعد الاستقبال الطائرة.",
      },
      {
        en: "For the flight home, give us the airline's check-in time and we work backwards from it.",
        ar: "ولرحلة العودة، أخبرنا بموعد إجراءات شركة الطيران ونبني الرحلة تراجعيًا منه.",
      },
    ],
  },

  routes: {
    heading: { en: "Getting to Yanbu by road", ar: "الوصول إلى ينبع برًّا" },
    rows: [
      {
        from: { en: "From Madinah", ar: "من المدينة المنورة" },
        distance: { en: "~200 km", ar: "~200 كم" },
        note: { en: "West to the coast — the most common long journey into Yanbu.", ar: "غربًا إلى الساحل، وهي أكثر الرحلات الطويلة إلى ينبع شيوعًا." },
        link: { routeKey: "madinah", label: { en: "Madinah transfers", ar: "التوصيل في المدينة المنورة" } },
      },
      {
        from: { en: "From Jeddah", ar: "من جدة" },
        distance: { en: "~337 km", ar: "~337 كم" },
        note: {
          en: "North along the coast, past Rabigh. Given as distance context only; Jeddah to Yanbu is not a journey quoted on this page.",
          ar: "شمالًا على الساحل مرورًا برابغ. وتُذكر المسافة للتعريف فقط، فالرحلة من جدة إلى ينبع ليست ضمن ما تُسعّره هذه الصفحة.",
        },
      },
    ],
    footnote: {
      en: "Approximate published figures; whether you are going to Yanbu Al-Bahr or the Industrial City changes the distance.",
      ar: "أرقام منشورة تقريبية، وتتغير المسافة بحسب وجهتك: ينبع البحر أو ينبع الصناعية.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup and where you are going — Yanbu Al-Bahr, Yanbu airport or a public address in the Industrial City — with the address.",
        ar: "نقطة الانطلاق ووجهتك، ينبع البحر أو مطار ينبع أو عنوان عام في ينبع الصناعية، مع العنوان.",
      },
      {
        en: "The date and time, the flight number if you are flying, and how many passengers and suitcases.",
        ar: "التاريخ والوقت، ورقم الرحلة إن كنت مسافرًا جوًّا، وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and journey details are confirmed before the booking is accepted. We quote individual journeys, not commuting contracts.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز. ونحن نُسعّر الرحلات الفردية لا عقود التوصيل اليومي.",
      },
    ],
  },

  faqHeading: { en: "Yanbu transfers: common questions", ar: "التوصيل في ينبع: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Yanbu from Madinah?", ar: "من المدينة إلى ينبع كم كيلو؟" },
      answer: {
        en: "About 200 km west, by Saudipedia's figure. Whether you are going to Yanbu Al-Bahr or the Industrial City changes the exact distance; we quote on your actual addresses.",
        ar: "نحو 200 كم غربًا وفق سعوديبيديا، وتتغير المسافة الدقيقة بحسب وجهتك: ينبع البحر أو ينبع الصناعية، ونحن نُسعّر على عناوينك الفعلية.",
      },
    },
    {
      question: { en: "What is the difference between Yanbu Al-Bahr and Yanbu Industrial City?", ar: "ما الفرق بين ينبع البحر وينبع الصناعية؟" },
      answer: {
        en: "Yanbu Al-Bahr is the historic town on the sea. Yanbu Industrial City is the separate planned industrial city under the Royal Commission. Tell us which one you need.",
        ar: "ينبع البحر هي المدينة التاريخية على البحر، أما ينبع الصناعية فمدينة صناعية مخططة مستقلة تابعة للهيئة الملكية. فأخبرنا بأيهما تقصد.",
      },
    },
    {
      question: { en: "Can you take me into the port or an industrial site?", ar: "هل توصلونني إلى داخل الميناء أو موقع صناعي؟" },
      answer: {
        en: "No — we do not claim access to the port, secured sites or company gates. We take you to the address or meeting point you give us; any site access is arranged by your host.",
        ar: "لا. فنحن لا ندّعي الدخول إلى الميناء أو المواقع المؤمّنة أو بوابات الشركات، ونوصلك إلى العنوان أو نقطة اللقاء التي تحددها، وأي دخول إلى موقع يرتّبه الطرف المستضيف.",
      },
    },
    {
      question: { en: "Do you meet flights at Yanbu airport?", ar: "هل تستقبلون الرحلات في مطار ينبع؟" },
      answer: {
        en: "Yes. Send the flight number and the address in Yanbu, and the pickup follows the aircraft. Availability is confirmed before the booking is accepted.",
        ar: "نعم. أرسل رقم الرحلة والعنوان في ينبع ليتبع موعد الاستقبال الطائرة، وتُؤكَّد الإتاحة قبل قبول الحجز.",
      },
    },
    {
      question: { en: "How far is Yanbu from Jeddah?", ar: "كم تبعد ينبع عن جدة؟" },
      answer: {
        en: "About 337 km, north of Jeddah along the coast and past Rabigh. That figure is given for orientation only; the road journey quoted on this page is from Madinah.",
        ar: "نحو 337 كم شمال جدة على الساحل مرورًا برابغ. ويُذكر هذا الرقم للتعريف فقط، والرحلة البرية التي تُسعّرها هذه الصفحة هي من المدينة المنورة.",
      },
    },
  ],

  related: [
    {
      routeKey: "madinah",
      label: { en: "Private transfers in Madinah", ar: "توصيل خاص في المدينة المنورة" },
      note: {
        en: "Airport, Haramain station, hotels and the road west to Yanbu.",
        ar: "المطار ومحطة قطار الحرمين والفنادق والطريق غربًا إلى ينبع.",
      },
    },
    {
      routeKey: "rabigh",
      label: { en: "Rabigh and KAEC", ar: "رابغ والمدينة الاقتصادية" },
      note: {
        en: "Further south on the same coast, between Yanbu and Jeddah.",
        ar: "جنوبًا على الساحل نفسه بين ينبع وجدة.",
      },
    },
    {
      routeKey: "alula",
      label: { en: "AlUla", ar: "العلا" },
      note: {
        en: "Inland to the north-west: the oasis, Old Town and Hegra.",
        ar: "إلى الداخل شمالًا غربًا: الواحة والبلدة القديمة والحِجر.",
      },
    },
    {
      routeKey: "jubail",
      label: { en: "Jubail", ar: "الجبيل" },
      note: {
        en: "Yanbu's sister industrial city on the Gulf coast, under the same Royal Commission.",
        ar: "المدينة الصناعية الشقيقة لينبع على ساحل الخليج، تحت الهيئة الملكية نفسها.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Which Yanbu?", ar: "أيّ ينبع؟" },
    heading: { en: "Request a Yanbu transfer quotation", ar: "اطلب عرض سعر للتوصيل في ينبع" },
    body: {
      en: "The pickup, whether you are going to Yanbu Al-Bahr, the airport or the Industrial City, the date and how many of you. We reply with a written price.",
      ar: "نقطة الانطلاق، ووجهتك بين ينبع البحر والمطار وينبع الصناعية، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Yanbu quote", ar: "اطلب سعر رحلة ينبع" },
  },
};
