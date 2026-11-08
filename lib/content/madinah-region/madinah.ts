import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Madinah — destination hub.
 *
 * Intent: private transfers in and from Madinah — airport, Haramain station,
 * hotels, Ziyarat and onward journeys. Owner-confirmed services (8 Nov 2026):
 * airport pickups and drop-offs, station transfers, hotel transfers, Ziyarat,
 * Madinah↔Makkah, Madinah↔Jeddah, Madinah↔AlUla, Madinah↔Yanbu,
 * Madinah↔Khaybar. Separate airport/station/hotel/Ziyarat/route pages are
 * deferred by decision; this hub covers them.
 *
 * Facts (local research folder, madinah-region/02):
 * - Visit Saudi: Madinah welcomes visitors; access to certain sacred areas,
 *   including Al Masjid an Nabawi, is restricted to Muslims. Al Rawdah
 *   requires a Nusuk permit. **No Makkah-style city rule is applied here.**
 * - MED airport ~20 km from the Prophet's Mosque, ~25 min — Saudipedia.
 * - Haramain station ~7 km from the Prophet's Mosque, Knowledge Economic
 *   City — Saudipedia. Makkah↔Madinah by train: published figures from about
 *   2 h 15 min (SAR via PEP, 1447 season) to 2 h 45 min (Saudipedia).
 * - Quba Mosque (first mosque in Islam); Mount Uhud ~4 km from the Prophet's
 *   Mosque; Makkah 442 km — Saudipedia. Shown site-wide as "approximately
 *   440–450 km" (owner-approved), since the road distance depends on the
 *   pickup and hotel.
 * - Central-area vehicle access: no official rule found; pickup and drop-off
 *   points vary and are confirmed per journey.
 *
 * Deliberately absent: prices, vehicle models, waiting allowances, guide or
 * entry claims for any site, permit procedures, partner wording.
 */

type B = Bilingual<string>;

export type MadinahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B; compassTitle: B; compass: { label: B; value: B }[]; compassNote: B };
  visitors: { heading: B; points: B[]; linkLabel: B };
  arrivals: { heading: B; lead: B; columns: { title: B; paragraphs: B[] }[] };
  central: { heading: B; paragraphs: B[] };
  ziyarat: { heading: B; lead: B; sites: { name: B; note: B }[]; limit: B };
  onward: {
    heading: B;
    lead: B;
    cards: { to: B; distance: B; note: B; link?: { routeKey: RouteKey; label: B } }[];
    footnote: B;
  };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const madinah: MadinahContent = {
  routeKey: "madinah",
  imageKey: "madinah-quba",

  seo: {
    title: {
      en: "Madinah Private Transfers | Airport, Station and Hotels",
      ar: "توصيل خاص في المدينة المنورة | المطار والقطار والفنادق",
    },
    description: {
      en: "Private transfers in Madinah: airport and Haramain station pickups, hotel runs, Ziyarat, and journeys to Makkah, Jeddah, AlUla and Yanbu. Get a written quote.",
      ar: "توصيل خاص في المدينة المنورة: الاستقبال من المطار ومحطة قطار الحرمين، والتنقل بين الفنادق، والمزارات، والسفر إلى مكة وجدة والعلا وينبع. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Madinah", ar: "المدينة المنورة" },

  hero: {
    eyebrow: { en: "Madinah Region · Madinah", ar: "منطقة المدينة المنورة · المدينة" },
    h1: {
      en: "Private transfers in Madinah",
      ar: "توصيل خاص في المدينة المنورة",
    },
    lead: {
      en: "Madinah is home to the Prophet's Mosque and to Quba, the first mosque built in Islam. Most visits begin at the airport or the Haramain station and end at a hotel in the central area; many go on to Makkah. Our local drivers cover each of those journeys, quoted in writing first.",
      ar: "في المدينة المنورة المسجد النبوي ومسجد قباء، أول مسجد بُني في الإسلام. وتبدأ معظم الزيارات من المطار أو محطة قطار الحرمين وتنتهي بفندق في المنطقة المركزية، ويتجه كثيرون بعدها إلى مكة. ويتولى سائقونا المحليون هذه الرحلات كلها بعرض سعر مكتوب أولًا.",
    },
    compassTitle: { en: "From the Prophet's Mosque", ar: "المسافة من المسجد النبوي" },
    compass: [
      { label: { en: "Madinah airport", ar: "مطار المدينة" }, value: { en: "~20 km", ar: "~20 كم" } },
      { label: { en: "Haramain station", ar: "محطة قطار الحرمين" }, value: { en: "~7 km", ar: "~7 كم" } },
      { label: { en: "Mount Uhud", ar: "جبل أحد" }, value: { en: "~4 km", ar: "~4 كم" } },
      { label: { en: "Makkah", ar: "مكة المكرمة" }, value: { en: "~440–450 km", ar: "~440–450 كم" } },
    ],
    compassNote: {
      en: "Published approximate figures; your actual pickup and hotel decide the distance.",
      ar: "أرقام منشورة تقريبية، ونقطة انطلاقك وفندقك الفعليان هما ما يحدد المسافة.",
    },
  },

  visitors: {
    heading: { en: "Visiting Madinah", ar: "زيارة المدينة المنورة" },
    points: [
      {
        en: "Madinah welcomes visitors from around the world. Access to certain sacred areas, including Al Masjid an Nabawi, is restricted to Muslims.",
        ar: "ترحّب المدينة المنورة بالزوار من أنحاء العالم، ويقتصر دخول بعض الأماكن المقدسة، ومنها المسجد النبوي، على المسلمين.",
      },
      {
        en: "Visiting Al Rawdah Al Sharifah requires a permit booked in advance through Nusuk. We do not issue or arrange permits.",
        ar: "وتتطلب زيارة الروضة الشريفة تصريحًا يُحجز مسبقًا عبر «نسك»، ونحن لا نُصدر التصاريح ولا نرتّبها.",
      },
      {
        en: "Around the Hajj season, check current official announcements for any seasonal arrangements on your travel dates.",
        ar: "وحول موسم الحج، تحقق من الإعلانات الرسمية السارية لأي ترتيبات موسمية في مواعيد سفرك.",
      },
    ],
    linkLabel: { en: "Source: Visit Saudi, Madinah", ar: "المصدر: روح السعودية، المدينة المنورة" },
  },

  arrivals: {
    heading: { en: "Arriving: the airport or the station", ar: "الوصول: المطار أو محطة القطار" },
    lead: {
      en: "Both are some distance from the central area, and both end with a road leg to your hotel.",
      ar: "كلاهما على مسافة من المنطقة المركزية، وكلاهما ينتهي بمرحلة برية إلى فندقك.",
    },
    columns: [
      {
        title: { en: "Prince Mohammad bin Abdulaziz International Airport", ar: "مطار الأمير محمد بن عبدالعزيز الدولي" },
        paragraphs: [
          {
            en: "About 20 km from the Prophet's Mosque — around 25 minutes by published estimates, longer at busy times.",
            ar: "على بعد نحو 20 كم من المسجد النبوي، أي نحو 25 دقيقة وفق التقديرات المنشورة، وأطول في أوقات الذروة.",
          },
          {
            en: "Send the flight number: the pickup follows your aircraft rather than a clock time. For a departure, give us the airline's check-in time and we work backwards from it.",
            ar: "أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك لا توقيت الساعة. وللمغادرة، أخبرنا بموعد إجراءات شركة الطيران ونبني الرحلة تراجعيًا منه.",
          },
        ],
      },
      {
        title: { en: "Haramain High Speed Railway station", ar: "محطة قطار الحرمين السريع" },
        paragraphs: [
          {
            en: "About 7 km from the Prophet's Mosque, in Knowledge Economic City. The train is run by Saudi Arabia Railways, an independent operator — we provide the road leg, not the rail ticket.",
            ar: "على بعد نحو 7 كم من المسجد النبوي في مدينة المعرفة الاقتصادية. ويشغّل القطار الخطوط الحديدية السعودية جهةً مستقلة، ونحن نوفّر المرحلة البرية لا تذكرة القطار.",
          },
          {
            en: "Tell us the train and its arrival time, the hotel, and how many passengers and suitcases.",
            ar: "أخبرنا بالقطار وموعد وصوله والفندق وعدد الركاب والحقائب.",
          },
        ],
      },
    ],
  },

  central: {
    heading: { en: "Hotels in the central area", ar: "الفنادق في المنطقة المركزية" },
    paragraphs: [
      {
        en: "Most visitors stay close to the Prophet's Mosque, where streets carry heavy pedestrian traffic and vehicle movement is managed, especially around prayer times and in busy seasons.",
        ar: "يقيم معظم الزوار قرب المسجد النبوي، حيث تزدحم الشوارع بالمشاة وتُنظَّم حركة المركبات، خصوصًا قرب أوقات الصلاة وفي المواسم المزدحمة.",
      },
      {
        en: "The exact pickup and drop-off point depends on the hotel and the traffic arrangements on the day, and it is confirmed for each journey. We do not promise vehicle access to the mosque grounds, pedestrian areas or any hotel forecourt.",
        ar: "ويعتمد مكان الاستقبال والنزول تحديدًا على الفندق والترتيبات المرورية يومها، ويُؤكَّد لكل رحلة. ولا نَعِد بوصول المركبات إلى ساحات المسجد أو مناطق المشاة أو مدخل أي فندق.",
      },
    ],
  },

  ziyarat: {
    heading: { en: "Ziyarat around Madinah", ar: "المزارات في المدينة المنورة" },
    lead: {
      en: "A private vehicle for visiting the sites, at your pace. Send the places you want to visit and the time you have, and we quote the journey.",
      ar: "سيارة خاصة لزيارة المعالم بالوتيرة التي تناسبك. أرسل الأماكن التي تريد زيارتها والوقت المتاح لك، ونُسعّر الرحلة.",
    },
    sites: [
      {
        name: { en: "Quba Mosque", ar: "مسجد قباء" },
        note: { en: "The first mosque built in Islam.", ar: "أول مسجد بُني في الإسلام." },
      },
      {
        name: { en: "Mount Uhud", ar: "جبل أحد" },
        note: { en: "About 4 km from the Prophet's Mosque; site of the Battle of Uhud.", ar: "على بعد نحو 4 كم من المسجد النبوي، وموقع غزوة أحد." },
      },
      {
        name: { en: "Your own list", ar: "قائمتك الخاصة" },
        note: { en: "Any other places you want to include, in the order you choose.", ar: "أي أماكن أخرى تريد إضافتها بالترتيب الذي تختاره." },
      },
    ],
    limit: {
      en: "We provide the vehicle and driver, not a guide, and we make no claims about entry to any site. The time spent at each stop is agreed in the quotation for your journey.",
      ar: "نحن نوفّر السيارة والسائق لا مرشدًا، ولا ندّعي شيئًا بشأن الدخول إلى أي موقع. ويُتفق على الوقت عند كل محطة في عرض السعر لرحلتك.",
    },
  },

  onward: {
    heading: { en: "Onward from Madinah", ar: "السفر من المدينة المنورة" },
    lead: {
      en: "The long journeys people make from Madinah, each quoted as a private road transfer.",
      ar: "الرحلات الطويلة التي يقوم بها الناس من المدينة المنورة، وتُسعَّر كل منها رحلةً برية خاصة.",
    },
    cards: [
      {
        to: { en: "Makkah", ar: "مكة المكرمة" },
        distance: { en: "~440–450 km", ar: "~440–450 كم" },
        note: {
          en: "South by road, or by Haramain train in about 2¼ to 2¾ hours by published figures. Entry to Makkah is restricted to Muslims.",
          ar: "جنوبًا برًّا، أو بقطار الحرمين في نحو ساعتين وربع إلى ساعتين وثلاثة أرباع وفق الأرقام المنشورة. ودخول مكة مقصور على المسلمين.",
        },
        link: { routeKey: "makkah", label: { en: "Private transfers in Makkah", ar: "توصيل خاص في مكة المكرمة" } },
      },
      {
        to: { en: "Jeddah", ar: "جدة" },
        distance: { en: "405–450 km", ar: "405–450 كم" },
        note: {
          en: "To the city or King Abdulaziz airport; for a flight we work back from check-in.",
          ar: "إلى المدينة أو مطار الملك عبدالعزيز، وللطيران نحسب الموعد تراجعيًا من موعد الإجراءات.",
        },
        link: { routeKey: "jeddah", label: { en: "Jeddah transfers", ar: "التوصيل في جدة" } },
      },
      {
        to: { en: "AlUla", ar: "العلا" },
        distance: { en: "~300 km", ar: "~300 كم" },
        note: {
          en: "North-west to the heritage oasis — around three hours by Visit Saudi's estimate.",
          ar: "شمال غرب المدينة إلى الواحة التراثية، في نحو ثلاث ساعات وفق تقدير روح السعودية.",
        },
        link: { routeKey: "alula", label: { en: "AlUla transfers", ar: "التوصيل في العلا" } },
      },
      {
        to: { en: "Yanbu", ar: "ينبع" },
        distance: { en: "~200 km", ar: "~200 كم" },
        note: {
          en: "West to the Red Sea coast — the town, the airport or the industrial city.",
          ar: "غربًا إلى ساحل البحر الأحمر: ينبع البحر أو المطار أو المدينة الصناعية.",
        },
        link: { routeKey: "yanbu", label: { en: "Yanbu transfers", ar: "التوصيل في ينبع" } },
      },
      {
        to: { en: "Khaybar", ar: "خيبر" },
        distance: { en: "~165 km from the airport", ar: "~165 كم من المطار" },
        note: {
          en: "North to the governorate known for its historic forts.",
          ar: "شمالًا إلى المحافظة المعروفة بحصونها التاريخية.",
        },
      },
    ],
    footnote: {
      en: "Distances are approximate published figures; we quote on your actual pickup and destination.",
      ar: "المسافات أرقام منشورة تقريبية، ونحن نُسعّر على نقطة انطلاقك ووجهتك الفعليتين.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup — flight number, train and arrival time, or hotel — and the destination.",
        ar: "نقطة الانطلاق، سواء رقم الرحلة أو القطار وموعد وصوله أو الفندق، والوجهة.",
      },
      {
        en: "The date and time, how many passengers and suitcases, and for Ziyarat the places and the time you have.",
        ar: "التاريخ والوقت وعدد الركاب والحقائب، وللمزارات الأماكن والوقت المتاح.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and journey details are confirmed before the booking is accepted; nothing is paid until you accept.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز، ولا يُدفع شيء حتى توافق.",
      },
    ],
  },

  faqHeading: { en: "Madinah transfers: common questions", ar: "التوصيل في المدينة المنورة: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Madinah airport from the Prophet's Mosque?", ar: "كم يبعد مطار المدينة عن المسجد النبوي؟" },
      answer: {
        en: "About 20 km — around 25 minutes by published estimates, longer at busy times. Send the flight number and the hotel, and the pickup follows your aircraft.",
        ar: "نحو 20 كم، أي نحو 25 دقيقة وفق التقديرات المنشورة، وأطول في أوقات الذروة. أرسل رقم الرحلة والفندق ليتبع موعد الاستقبال طائرتك.",
      },
    },
    {
      question: { en: "How far is Madinah train station from the Haram?", ar: "كم تبعد محطة قطار المدينة عن الحرم؟" },
      answer: {
        en: "About 7 km. The Haramain station is in Knowledge Economic City, so the last stretch to a hotel near the Prophet's Mosque is by road.",
        ar: "نحو 7 كم. فمحطة قطار الحرمين في مدينة المعرفة الاقتصادية، والمسافة الأخيرة إلى فندق قرب المسجد النبوي برًّا.",
      },
    },
    {
      question: { en: "Can non-Muslims visit Madinah?", ar: "هل يمكن لغير المسلمين زيارة المدينة المنورة؟" },
      answer: {
        en: "Visit Saudi says Madinah welcomes visitors from around the world, and that access to certain sacred areas, including Al Masjid an Nabawi, is restricted to Muslims. Check current official guidance for your dates.",
        ar: "تذكر روح السعودية أن المدينة المنورة ترحّب بالزوار من أنحاء العالم، وأن دخول بعض الأماكن المقدسة، ومنها المسجد النبوي، مقصور على المسلمين. وتحقق من الإرشادات الرسمية السارية لمواعيدك.",
      },
    },
    {
      question: { en: "Will the car take us to our hotel door?", ar: "هل توصلنا السيارة إلى باب الفندق؟" },
      answer: {
        en: "It depends on the hotel and the traffic arrangements on the day. The exact pickup and drop-off point is confirmed for each journey; we do not promise access to the mosque grounds, pedestrian areas or hotel forecourts.",
        ar: "يعتمد ذلك على الفندق والترتيبات المرورية يومها، ويُؤكَّد مكان الاستقبال والنزول لكل رحلة، ولا نَعِد بالوصول إلى ساحات المسجد أو مناطق المشاة أو مداخل الفنادق.",
      },
    },
    {
      question: { en: "How long does Madinah to Makkah take?", ar: "كم تستغرق الرحلة من المدينة إلى مكة؟" },
      answer: {
        en: "By road the journey is approximately 440–450 km. By Haramain train, published figures range from about 2 h 15 min to 2 h 45 min. We provide the road journey; entry to Makkah is restricted to Muslims.",
        ar: "برًّا تبلغ الرحلة نحو 440–450 كم، وبقطار الحرمين تتراوح الأرقام المنشورة بين ساعتين و15 دقيقة وساعتين و45 دقيقة تقريبًا. ونحن نوفّر الرحلة البرية، ودخول مكة مقصور على المسلمين.",
      },
    },
    {
      question: { en: "Do you arrange Ziyarat in Madinah?", ar: "هل ترتّبون المزارات في المدينة المنورة؟" },
      answer: {
        en: "Yes, with a private vehicle and driver. Send the sites and the time you have; the time at each stop is agreed in the quotation. We are not guides and make no claims about entry to any site.",
        ar: "نعم، بسيارة خاصة وسائق. أرسل المواقع والوقت المتاح لك، ويُتفق على الوقت عند كل محطة في عرض السعر. ولسنا مرشدين ولا ندّعي شيئًا بشأن الدخول إلى أي موقع.",
      },
    },
  ],

  related: [
    {
      routeKey: "makkah",
      label: { en: "Private transfers in Makkah", ar: "توصيل خاص في مكة المكرمة" },
      note: {
        en: "The other holy city: arrivals, hotel access and the Haramain station.",
        ar: "المدينة المقدسة الأخرى: الوصول والدخول إلى الفنادق ومحطة قطار الحرمين.",
      },
    },
    {
      routeKey: "alula",
      label: { en: "AlUla", ar: "العلا" },
      note: {
        en: "North-west of Madinah: the airport, the Old Town, Hegra and Elephant Rock.",
        ar: "شمال غرب المدينة: المطار والبلدة القديمة والحِجر وصخرة الفيل.",
      },
    },
    {
      routeKey: "yanbu",
      label: { en: "Yanbu", ar: "ينبع" },
      note: {
        en: "West to the Red Sea: the town, the airport and the industrial city.",
        ar: "غربًا إلى البحر الأحمر: ينبع البحر والمطار والمدينة الصناعية.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "The airport most international visitors fly into, and journeys from the coast.",
        ar: "المطار الذي يصل عبره معظم الزوار الدوليين، والرحلات من الساحل.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Arrive, visit, travel on", ar: "الوصول والزيارة والسفر" },
    heading: { en: "Request a Madinah transfer quotation", ar: "اطلب عرض سعر للتوصيل في المدينة المنورة" },
    body: {
      en: "Where you start, where you are going, the date and how many of you. We reply with a written price.",
      ar: "من أين تنطلق وإلى أين تتجه والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Madinah quote", ar: "اطلب سعر التوصيل في المدينة" },
  },
};
