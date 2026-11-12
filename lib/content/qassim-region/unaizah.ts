import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Unaizah — destination guide.
 *
 * Owner-confirmed coverage (research folder qassim/, updated 12 Nov 2026):
 * - local transfers within Unaizah;
 * - hotel transfers in Unaizah;
 * - Buraydah ↔ Unaizah;
 * - Riyadh → Unaizah via the existing Riyadh → Buraydah route page, which
 *   lists Unaizah as a destination (linked as a related journey).
 * NOT confirmed for Unaizah, so not offered: airport journeys to or from
 * Unaizah addresses (ELQ pickups are confirmed for Buraydah only — flagged
 * to the owner), sightseeing, hourly hire, other routes. Public copy says
 * "our local drivers" (never "partners"). A quote request is not a booking.
 *
 * Facts (Saudipedia, retrieved 12 Nov 2026; evidence in the research folder):
 * - Category (A) governorate of al-Qassim, second-largest by population;
 *   184,644 people (2022), 13.8% of the province; area ~1,800 km²; about
 *   28 km from Buraydah — unaizah-governorate.
 * - On the Najd plateau south of Wadi al-Rummah, with the al-Ghumais sands to
 *   the north and west; a transit point for pilgrim and trade caravans from
 *   Iraq to Makkah, with surviving stopover remains — unaizah-governorate.
 * - Al-Bassam Heritage House, west of the city, Najdi architecture, holds
 *   historical archives — unaizah-governorate; traditional Najdi lighting and
 *   ventilation, ~3,500 m² — visual-icons-in-al-qassim-region. The build year
 *   conflicts (1958 vs 1955), so the page says "the 1950s".
 * - Al-Musawkaf Traditional Market and the heritage village of al-Ghada,
 *   west of Unaizah, host cultural performances and festivals; the al-Ghada
 *   Festival (the ghada tree as a symbol, farming, young people's work);
 *   the al-Hanaini Festival at al-Musawkaf (al-Hanini, a date-based winter
 *   snack made by productive families) — unaizah-governorate.
 * - Nearest airport: Prince Naif bin Abdulaziz International Airport in
 *   Buraydah, ~43 km — unaizah-governorate. Context only.
 *
 * Deliberately NOT published: "the oldest governorate in the Kingdom" and
 * other superlatives, opening hours, admission, festival dates.
 */

type B = Bilingual<string>;

export type UnaizahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  /** Name of the Service node in structured data: the confirmed services only. */
  serviceName: B;
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  services: {
    heading: B;
    lead: B;
    items: { id: string; title: B; detail: B; link?: { routeKey: RouteKey; label: B } }[];
    notOfferedHeading: B;
    notOffered: B[];
  };
  facts: { label: B; value: B }[];
  factsSource: B;
  caravan: { heading: B; paragraphs: B[] };
  musawkaf: { eyebrow: B; heading: B; paragraphs: B[]; festival: { name: B; detail: B } };
  ghada: { eyebrow: B; heading: B; paragraphs: B[] };
  architecture: { heading: B; lead: B; items: { name: B; detail: B }[] };
  practical: { heading: B; items: { label: B; value: B; detail: B }[]; note: B };
  enquiry: { heading: B; lead: B; steps: B[]; note: B };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

export const unaizah: UnaizahContent = {
  routeKey: "unaizah",
  imageKey: "unaizah-al-gadhi-mosque",

  seo: {
    title: {
      en: "Unaizah Private Transfers | Local, Hotels & Buraydah",
      ar: "توصيل خاص في عنيزة | داخل المدينة والفنادق وبريدة",
    },
    description: {
      en: "Private transfers in Unaizah, Al-Qassim: local journeys, hotel pickups and the road to Buraydah, with a guide to Al-Musawkaf, Al-Ghada and Najdi heritage.",
      ar: "توصيل خاص في عنيزة بالقصيم: التنقل داخل المدينة، والفنادق، والطريق إلى بريدة، مع دليل إلى سوق المسوكف والغضا والتراث النجدي.",
    },
  },

  serviceName: {
    en: "Private transfers in Unaizah: local journeys, hotels and Buraydah ↔ Unaizah",
    ar: "التوصيل الخاص في عنيزة: داخل المدينة والفنادق وبين بريدة وعنيزة",
  },

  crumbLabel: { en: "Unaizah", ar: "عنيزة" },

  hero: {
    eyebrow: { en: "Al-Qassim · The Najd plateau", ar: "القصيم · هضبة نجد" },
    h1: { en: "Unaizah, the caravan town of Qassim", ar: "عنيزة، محطة القوافل في القصيم" },
    lead: {
      en: "South of Wadi al-Rummah and ringed by sand, Unaizah grew as a stop for pilgrim and trade caravans heading from Iraq to Makkah. Our local drivers provide private transfers in the town, to and from its hotels, and on the road to Buraydah.",
      ar: "جنوب وادي الرمة، وتحيط بها الرمال، نشأت عنيزة محطةً لقوافل الحجاج والتجارة القادمة من العراق إلى مكة المكرمة. ويقدّم سائقونا المحليون التوصيل الخاص داخل المدينة، ومن فنادقها وإليها، وعلى الطريق إلى بريدة.",
    },
  },

  services: {
    heading: { en: "Transfers in Unaizah", ar: "التوصيل في عنيزة" },
    lead: {
      en: "Three services, all arranged by our local drivers. Each journey is confirmed with you before it is booked.",
      ar: "ثلاث خدمات يقدّمها سائقونا المحليون، ونؤكد كل رحلة معك قبل حجزها.",
    },
    items: [
      {
        id: "local-transfers",
        title: { en: "Within Unaizah", ar: "داخل عنيزة" },
        detail: {
          en: "Private transfers between addresses in the town — homes, offices, Al-Musawkaf market and more. Where the car can stop is confirmed for each journey.",
          ar: "توصيل خاص بين العناوين داخل المدينة، من المنازل والمكاتب إلى سوق المسوكف وغيرها. ونؤكد مكان توقف السيارة لكل رحلة.",
        },
      },
      {
        id: "hotel-transfers",
        title: { en: "Hotels", ar: "الفنادق" },
        detail: {
          en: "Pickups and drop-offs at hotels in Unaizah. Name the hotel and the entrance if there is more than one; the pickup point is confirmed for each journey.",
          ar: "الاستقبال والتوصيل من الفنادق وإليها في عنيزة. اذكر اسم الفندق والمدخل إن كان له أكثر من مدخل، ونؤكد نقطة الاستقبال لكل رحلة.",
        },
      },
      {
        id: "buraydah-unaizah",
        title: { en: "Unaizah ↔ Buraydah", ar: "عنيزة ↔ بريدة" },
        detail: {
          en: "Journeys in either direction to the regional capital, about 28 km away.",
          ar: "رحلات في الاتجاهين إلى مقر الإمارة على بعد نحو 28 كم.",
        },
        link: { routeKey: "buraydah", label: { en: "Transfers in Buraydah", ar: "التوصيل في بريدة" } },
      },
    ],
    notOfferedHeading: { en: "Not offered on this page at present", ar: "غير متاح في هذه الصفحة حاليًا" },
    notOffered: [
      { en: "Airport journeys to or from Unaizah", ar: "رحلات المطار من عنيزة أو إليها" },
      { en: "Sightseeing, excursions or hourly hire", ar: "الجولات السياحية والرحلات الاستكشافية والاستئجار بالساعة" },
      { en: "Other intercity routes", ar: "المسارات الأخرى بين المدن" },
    ],
  },

  facts: [
    { label: { en: "Population (2022)", ar: "السكان (2022)" }, value: { en: "184,644", ar: "184,644" } },
    { label: { en: "Within Al-Qassim", ar: "في القصيم" }, value: { en: "2nd-largest governorate", ar: "ثاني أكبر محافظة" } },
    { label: { en: "From Buraydah", ar: "عن بريدة" }, value: { en: "~28 km", ar: "~28 كم" } },
  ],
  factsSource: { en: "Figures: Saudipedia.", ar: "الأرقام: سعوديبيديا." },

  caravan: {
    heading: { en: "A stop on the pilgrim road", ar: "محطة على طريق الحجاج" },
    paragraphs: [
      {
        en: "Unaizah sits on the north-central Najd plateau, just south of Wadi al-Rummah, with the al-Ghumais sands to its north and west. That position made it a meeting point for caravans carrying pilgrims and goods from Iraq towards Makkah.",
        ar: "تقع عنيزة على هضبة نجد في شمالها الأوسط، جنوب وادي الرمة مباشرة، وتمتد رمال الغميس شمالها وغربها. وجعلها هذا الموقع ملتقى للقوافل التي تحمل الحجاج والبضائع من العراق نحو مكة المكرمة.",
      },
      {
        en: "Traces of those stopovers survive at sites such as al-Ayariyah, al-Qaryatain and Ramah. Today Unaizah is the second-largest governorate in Al-Qassim, about 28 km from Buraydah.",
        ar: "وما زالت آثار تلك المحطات باقية في مواقع مثل العيارية والقريتين ورامة. وعنيزة اليوم ثاني أكبر محافظات القصيم سكانًا، على بعد نحو 28 كم من بريدة.",
      },
    ],
  },

  musawkaf: {
    eyebrow: { en: "The market", ar: "السوق" },
    heading: { en: "Al-Musawkaf Traditional Market", ar: "سوق المسوكف الشعبي" },
    paragraphs: [
      {
        en: "Unaizah's traditional market is more than a place to shop: it is one of the town's main venues for cultural performances and festivals.",
        ar: "ليس سوق عنيزة الشعبي مكانًا للتسوق فحسب، بل هو من أبرز ساحات المدينة للعروض الثقافية والمهرجانات.",
      },
    ],
    festival: {
      name: { en: "Al-Hanaini Festival", ar: "مهرجان الحنيني" },
      detail: {
        en: "Held at Al-Musawkaf, it supports productive families and small producers, and celebrates al-hanini — a winter snack made from dates that Qassim is known for.",
        ar: "يُقام في المسوكف لدعم الأسر المنتجة ورواد الأعمال، ويحتفي بالحنيني، الأكلة الشتوية المصنوعة من التمر التي تشتهر بها القصيم.",
      },
    },
  },

  ghada: {
    eyebrow: { en: "West of the town", ar: "غرب المدينة" },
    heading: { en: "Al-Ghada", ar: "الغضا" },
    paragraphs: [
      {
        en: "West of Unaizah lies the heritage village of Al-Ghada, named after the ghada, a desert tree of the region's sands. Like Al-Musawkaf, it hosts cultural performances and festivals.",
        ar: "غرب عنيزة تقع قرية الغضا التراثية، التي تحمل اسم شجرة الغضا من أشجار رمال المنطقة. وتستضيف، مثل المسوكف، عروضًا ثقافية ومهرجانات.",
      },
      {
        en: "Its best-known event is the Al-Ghada Festival, which promotes local tourism, presents the ghada tree as a national symbol, encourages farming and gives young people a stage for their work and talents.",
        ar: "وأشهر فعالياتها مهرجان الغضا، الذي يشجع السياحة الداخلية، ويقدّم شجرة الغضا رمزًا للمملكة، ويحث على الزراعة، ويمنح الشباب منبرًا لأعمالهم ومواهبهم.",
      },
    ],
  },

  architecture: {
    heading: { en: "Najdi heritage", ar: "التراث النجدي" },
    lead: {
      en: "The town keeps its history in its buildings as well as its archives.",
      ar: "تحفظ المدينة تاريخها في مبانيها كما في محفوظاتها.",
    },
    items: [
      {
        name: { en: "Al-Bassam Heritage House", ar: "بيت البسام التراثي" },
        detail: {
          en: "In the west of the city, built in the 1950s with traditional Najdi lighting and ventilation, over some 3,500 m², and one of the places where Unaizah keeps its historical archives.",
          ar: "في غرب المدينة، بُني في خمسينيات القرن الماضي بأساليب الإضاءة والتهوية النجدية التقليدية على مساحة نحو 3,500 م²، وهو من الأماكن التي تحفظ فيها عنيزة محفوظاتها التاريخية.",
        },
      },
      {
        name: { en: "Caravan stopovers", ar: "محطات القوافل" },
        detail: {
          en: "At al-Ayariyah, al-Qaryatain and Ramah, archaeological remains survive of the stopovers used by pilgrim and trade caravans.",
          ar: "في العيارية والقريتين ورامة بقيت آثار للمحطات التي كانت تنزلها قوافل الحجاج والتجارة.",
        },
      },
    ],
  },

  practical: {
    heading: { en: "Getting your bearings", ar: "معلومات تهمّك" },
    items: [
      {
        label: { en: "Buraydah", ar: "بريدة" },
        value: { en: "~28 km", ar: "~28 كم" },
        detail: { en: "The regional capital, to the north.", ar: "مقر الإمارة، إلى الشمال." },
      },
      {
        label: { en: "Nearest airport", ar: "أقرب مطار" },
        value: { en: "~43 km", ar: "~43 كم" },
        detail: {
          en: "Prince Naif bin Abdulaziz International Airport, in Buraydah.",
          ar: "مطار الأمير نايف بن عبدالعزيز الدولي في بريدة.",
        },
      },
    ],
    note: {
      en: "Journeys between Unaizah and Buraydah are among our services (see above). Airport journeys to or from Unaizah are not offered on this page at present.",
      ar: "الرحلات بين عنيزة وبريدة من خدماتنا (انظر أعلاه)، أما رحلات المطار من عنيزة أو إليها فليست متاحة في هذه الصفحة حاليًا.",
    },
  },

  enquiry: {
    heading: { en: "Request an Unaizah quote", ar: "اطلب عرض سعر في عنيزة" },
    lead: {
      en: "A journey in the town, a hotel pickup or a trip to Buraydah — send the details and we reply in writing.",
      ar: "رحلة داخل المدينة، أو استقبال من الفندق، أو رحلة إلى بريدة: أرسل التفاصيل ونرد عليك كتابةً.",
    },
    steps: [
      { en: "Send the pickup and destination, the date and time, and how many passengers and suitcases.", ar: "أرسل نقطة الانطلاق والوجهة، والتاريخ والوقت، وعدد الركاب والحقائب." },
      { en: "We confirm availability for your date and time and reply to you.", ar: "نؤكد الإتاحة في التاريخ والوقت المطلوبين ونرد عليك." },
      { en: "We send a written price and the vehicle category for you to consider.", ar: "نرسل إليك سعرًا مكتوبًا وفئة المركبة لتنظر فيهما." },
    ],
    note: {
      en: "A quote request is not a booking. Nothing is confirmed or paid until you accept a written quotation.",
      ar: "طلب عرض السعر ليس حجزًا، ولا يُؤكَّد شيء ولا يُدفع حتى توافق على عرض سعر مكتوب.",
    },
  },

  faqHeading: { en: "Unaizah: common questions", ar: "عنيزة: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Where is Unaizah?", ar: "أين تقع عنيزة؟" },
      answer: {
        en: "In Al-Qassim, in the north-central Najd, about 28 km from Buraydah. It lies just south of Wadi al-Rummah, with sand dunes to its north and west.",
        ar: "في منطقة القصيم وسط نجد الشمالي، على بعد نحو 28 كم من بريدة، جنوب وادي الرمة مباشرة، وتحيط بها الكثبان الرملية من الشمال والغرب.",
      },
    },
    {
      question: { en: "What is Unaizah known for?", ar: "بماذا تشتهر عنيزة؟" },
      answer: {
        en: "Its history as a caravan stop on the road from Iraq to Makkah, its Najdi heritage buildings such as Al-Bassam Heritage House, Al-Musawkaf Traditional Market and the heritage village of Al-Ghada, both of which host festivals.",
        ar: "بتاريخها محطةً للقوافل على الطريق من العراق إلى مكة المكرمة، وبمبانيها التراثية النجدية مثل بيت البسام، وبسوق المسوكف الشعبي وقرية الغضا التراثية اللذين يستضيفان المهرجانات.",
      },
    },
    {
      question: { en: "What is al-hanini?", ar: "ما الحنيني؟" },
      answer: {
        en: "A winter snack made from dates, well known in Al-Qassim and made by local productive families. Al-Musawkaf market hosts a festival named after it.",
        ar: "أكلة شتوية مصنوعة من التمر، معروفة في القصيم وتصنعها الأسر المنتجة، ويستضيف سوق المسوكف مهرجانًا يحمل اسمها.",
      },
    },
    {
      question: { en: "Do you offer private transfers in Unaizah?", ar: "هل تقدّمون التوصيل الخاص في عنيزة؟" },
      answer: {
        en: "Yes. Our local drivers provide private transfers within Unaizah, pickups and drop-offs at its hotels, and journeys between Unaizah and Buraydah. Send your journey details and we reply with a written quotation. A request is not a booking.",
        ar: "نعم. يقدّم سائقونا المحليون التوصيل الخاص داخل عنيزة، والاستقبال والتوصيل من فنادقها وإليها، والرحلات بين عنيزة وبريدة. أرسل تفاصيل رحلتك ونرد بعرض سعر مكتوب. والطلب ليس حجزًا.",
      },
    },
    {
      question: { en: "Can I travel to Unaizah from Riyadh?", ar: "هل يمكنني السفر إلى عنيزة من الرياض؟" },
      answer: {
        en: "Yes. Our Riyadh to Buraydah page covers the private transfer from the capital into Al-Qassim, including Unaizah. Name Unaizah and the address when you request a quote.",
        ar: "نعم. تشرح صفحة «الرياض إلى بريدة» النقل الخاص من العاصمة إلى القصيم، بما في ذلك عنيزة. اذكر عنيزة والعنوان عند طلب عرض السعر.",
      },
    },
  ],

  relatedHeading: { en: "More destinations", ar: "وجهات أخرى" },

  related: [
    {
      routeKey: "buraydah",
      label: { en: "Transfers in Buraydah", ar: "التوصيل في بريدة" },
      note: { en: "The regional capital, about 28 km away: city, airport and hotels.", ar: "مقر الإمارة على بعد نحو 28 كم: المدينة والمطار والفنادق." },
    },
    {
      routeKey: "riyadhToBuraydah",
      label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },
      note: { en: "The private transfer from the capital into Al-Qassim, including Unaizah.", ar: "النقل الخاص من العاصمة إلى القصيم، بما في ذلك عنيزة." },
    },
    {
      routeKey: "riyadh",
      label: { en: "Riyadh", ar: "الرياض" },
      note: { en: "Airport, hotels and journeys from the capital.", ar: "المطار والفنادق والرحلات من العاصمة." },
    },
    {
      routeKey: "madinah",
      label: { en: "Madinah", ar: "المدينة المنورة" },
      note: { en: "Airport, station, hotels and Ziyarat.", ar: "المطار والقطار والفنادق والمزارات." },
    },
  ],

  cta: {
    eyebrow: { en: "Unaizah", ar: "عنيزة" },
    heading: { en: "Request an Unaizah transfer quotation", ar: "اطلب عرض سعر للتوصيل في عنيزة" },
    body: {
      en: "The town, a hotel or the road to Buraydah. We reply with a written price.",
      ar: "المدينة أو الفندق أو الطريق إلى بريدة. ونرد عليك بسعر مكتوب.",
    },
    button: { en: "Request a quote", ar: "اطلب عرض سعر" },
  },
};
