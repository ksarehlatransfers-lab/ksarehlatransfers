import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Rabigh — destination hub.
 *
 * Intent: journeys between Jeddah (or Makkah) and Rabigh, a coastal
 * governorate north of Jeddah with an industrial and port economy. King
 * Abdullah Economic City lies inside the governorate but is a different trip
 * with a different audience, so it is a clearly separated section rather than
 * a target keyword — and KAEC "entry/gate pass" questions are not ours to
 * answer.
 *
 * Facts (local research folder, makkah-region/01), Saudipedia unless noted:
 * - One of the oldest coastal governorates in Makkah Province; ~6,000 km²;
 *   a 100 km Red Sea waterfront; factories and industrial companies.
 * - KAEC (in al-Qadhimah centre) with King Abdullah Port and a Haramain
 *   station; Royal Greens golf course, Yam Beach, Bay La Sun Marina.
 * - Al-Juhfah miqat nearby; Alia Historical Palace; Al-Juhfa Fort.
 * - Jeddah→Rabigh ~140–165 km, ~2 h by road: estimate (route planners).
 *
 * Deliberately absent: KAEC entry procedures, named companies or sites
 * beyond the above, prices, vehicle models, commuting services.
 */

type B = Bilingual<string>;

export type RabighContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  kaecImageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  facts: { label: B; value: B; note: B }[];
  split: {
    heading: B;
    lead: B;
    columns: { name: B; what: B; tell: B; points: B[] }[];
  };
  journeys: { heading: B; rows: { title: B; detail: B }[] };
  train: { heading: B; paragraphs: B[] };
  heritage: { heading: B; body: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const rabigh: RabighContent = {
  routeKey: "rabigh",
  imageKey: "dest-rabigh",
  kaecImageKey: "rabigh-kaec-waterfront",

  seo: {
    title: {
      en: "Jeddah to Rabigh Private Transfer | Rabigh and KAEC",
      ar: "توصيل من جدة إلى رابغ | رابغ والمدينة الاقتصادية",
    },
    description: {
      en: "Private car between Jeddah and Rabigh, about 150 km north on the Red Sea coast — the town, the industrial area or King Abdullah Economic City. Get a quote.",
      ar: "سيارة خاصة بين جدة ورابغ على بعد نحو 150 كم شمالًا على ساحل البحر الأحمر، إلى المدينة أو المنطقة الصناعية أو مدينة الملك عبدالله الاقتصادية. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Rabigh", ar: "رابغ" },

  hero: {
    eyebrow: { en: "Makkah Region · Red Sea coast", ar: "منطقة مكة المكرمة · ساحل البحر الأحمر" },
    h1: {
      en: "Private transfers between Jeddah and Rabigh",
      ar: "توصيل خاص بين جدة ورابغ",
    },
    lead: {
      en: "Rabigh is one of the oldest coastal governorates in the Makkah Region — a 100 km stretch of Red Sea shore north of Jeddah, with an old town, an industrial economy and, inside its boundaries, King Abdullah Economic City. Whether you are going for work, family or a stay at KAEC, the first thing to tell us is which part you are going to.",
      ar: "رابغ من أقدم المحافظات الساحلية في منطقة مكة المكرمة، تمتد على 100 كم من ساحل البحر الأحمر شمال جدة، وفيها بلدة قديمة واقتصاد صناعي، وتقع ضمن حدودها مدينة الملك عبدالله الاقتصادية. وسواء كانت رحلتك للعمل أو لزيارة الأهل أو للإقامة في المدينة الاقتصادية، فأول ما تخبرنا به هو الجزء الذي تقصده.",
    },
  },

  facts: [
    {
      label: { en: "From Jeddah", ar: "من جدة" },
      value: { en: "~150 km", ar: "~150 كم" },
      note: {
        en: "Route planners give about 140–165 km and roughly two hours, depending on the start and end points.",
        ar: "تذكر أدوات التخطيط نحو 140–165 كم وساعتين تقريبًا، بحسب نقطتي البداية والنهاية.",
      },
    },
    {
      label: { en: "Coastline", ar: "الساحل" },
      value: { en: "100 km", ar: "100 كم" },
      note: { en: "Of Red Sea waterfront within the governorate.", ar: "من الواجهة على البحر الأحمر ضمن المحافظة." },
    },
    {
      label: { en: "Within Rabigh", ar: "ضمن رابغ" },
      value: { en: "KAEC", ar: "المدينة الاقتصادية" },
      note: {
        en: "King Abdullah Economic City, its port and a Haramain station.",
        ar: "مدينة الملك عبدالله الاقتصادية وميناؤها ومحطة لقطار الحرمين.",
      },
    },
  ],

  split: {
    heading: { en: "Rabigh or KAEC? Not the same trip", ar: "رابغ أم المدينة الاقتصادية؟ ليستا الرحلة نفسها" },
    lead: {
      en: "Both sit in Rabigh Governorate, but they are different destinations. Saying which one you need is the first thing that makes the quote right.",
      ar: "كلتاهما ضمن محافظة رابغ، لكنهما وجهتان مختلفتان، وتحديد وجهتك أول ما يجعل عرض السعر دقيقًا.",
    },
    columns: [
      {
        name: { en: "Rabigh town and industry", ar: "مدينة رابغ والمنطقة الصناعية" },
        what: {
          en: "The governorate centre, its old town, and the factories and industrial companies along the coast.",
          ar: "مركز المحافظة وبلدتها القديمة، والمصانع والشركات الصناعية على الساحل.",
        },
        tell: {
          en: "Tell us the site or company address, the gate if you know it, and the shift or meeting time.",
          ar: "أخبرنا بعنوان الموقع أو الشركة، والبوابة إن كنت تعرفها، وموعد الوردية أو الاجتماع.",
        },
        points: [
          { en: "Site and office visits", ar: "زيارات المواقع والمكاتب" },
          { en: "Contractor and project travel", ar: "تنقلات المقاولين والمشاريع" },
          { en: "Family visits in the town", ar: "الزيارات العائلية في المدينة" },
        ],
      },
      {
        name: { en: "King Abdullah Economic City", ar: "مدينة الملك عبدالله الاقتصادية" },
        what: {
          en: "A planned city on the coast with King Abdullah Port, a Haramain railway station, and leisure places such as the Royal Greens golf course, Yam Beach and Bay La Sun Marina.",
          ar: "مدينة مخططة على الساحل فيها ميناء الملك عبدالله ومحطة لقطار الحرمين، وأماكن ترفيه مثل نادي رويال غرينز للغولف وشاطئ يام ومرسى باي لا سن.",
        },
        tell: {
          en: "Tell us the district or address. Any access arrangements inside KAEC are for you to confirm with your host.",
          ar: "أخبرنا بالحي أو العنوان، وأي ترتيبات للدخول داخل المدينة الاقتصادية يؤكدها الطرف المستضيف لك.",
        },
        points: [
          { en: "Port and business visits", ar: "زيارات الميناء والأعمال" },
          { en: "Weekend and leisure stays", ar: "الإقامات الترفيهية ونهاية الأسبوع" },
          { en: "Connections to the Haramain station", ar: "التوصيل من محطة قطار الحرمين وإليها" },
        ],
      },
    ],
  },

  journeys: {
    heading: { en: "The journeys we quote", ar: "الرحلات التي نُسعّرها" },
    rows: [
      {
        title: { en: "Jeddah or King Abdulaziz airport to Rabigh", ar: "من جدة أو مطار الملك عبدالعزيز إلى رابغ" },
        detail: {
          en: "North along the coast. From the airport, send the flight number so the pickup follows the aircraft.",
          ar: "شمالًا على الساحل. ومن المطار أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك.",
        },
      },
      {
        title: { en: "Rabigh back to Jeddah or the airport", ar: "من رابغ إلى جدة أو المطار" },
        detail: {
          en: "For a flight, give us the airline's check-in time and we work backwards from it.",
          ar: "للطيران، أخبرنا بموعد إجراءات شركة الطيران ونبني الرحلة تراجعيًا منه.",
        },
      },
      {
        title: { en: "Makkah to Rabigh", ar: "من مكة إلى رابغ" },
        detail: {
          en: "Via Jeddah and up the coast — for travellers continuing from Makkah to the coast or to KAEC.",
          ar: "عبر جدة ثم شمالًا على الساحل، للمسافرين من مكة إلى الساحل أو المدينة الاقتصادية.",
        },
      },
    ],
  },

  train: {
    heading: { en: "Is there a train from Jeddah to Rabigh?", ar: "هل يوجد قطار من جدة إلى رابغ؟" },
    paragraphs: [
      {
        en: "The Haramain High Speed Railway has a station inside King Abdullah Economic City, one of its two transit stations alongside Jeddah. It serves KAEC rather than Rabigh town, so a train journey to the town or the industrial area still ends with a road leg from the station.",
        ar: "لقطار الحرمين السريع محطة داخل مدينة الملك عبدالله الاقتصادية، وهي إحدى محطتي العبور إلى جانب محطة جدة. وهي تخدم المدينة الاقتصادية لا مدينة رابغ، فتنتهي الرحلة بالقطار إلى المدينة أو المنطقة الصناعية بمرحلة برية من المحطة.",
      },
      {
        en: "We sell no rail tickets; check schedules with the operator. If you are arriving by train, give us the train and its arrival time and we quote the road leg.",
        ar: "ونحن لا نبيع تذاكر القطار، فتحقق من المواعيد لدى المشغّل. وإن كنت قادمًا بالقطار فأخبرنا بالقطار وموعد وصوله ونُسعّر المرحلة البرية.",
      },
    ],
  },

  heritage: {
    heading: { en: "Rabigh beyond work", ar: "رابغ بعيدًا عن العمل" },
    body: {
      en: "Rabigh is an old stop on the coastal route between Makkah and Madinah, with the Al-Juhfah miqat nearby, the Alia Historical Palace and Al-Juhfa Fort among its monuments, and a farming tradition of dates, wheat and watermelons.",
      ar: "رابغ محطة قديمة على الطريق الساحلي بين مكة والمدينة، وقريب منها ميقات الجحفة، ومن معالمها قصر علياء التاريخي وقلعة الجحفة، ولها تقليد زراعي في التمور والقمح والبطيخ.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup and the destination — Rabigh town, a site address, or a district in KAEC — with any gate or entrance you know.",
        ar: "نقطة الانطلاق والوجهة، سواء مدينة رابغ أو عنوان موقع أو حي في المدينة الاقتصادية، مع البوابة أو المدخل إن عرفته.",
      },
      {
        en: "The date and time, how many passengers and how much luggage or equipment.",
        ar: "التاريخ والوقت وعدد الركاب وحجم الأمتعة أو المعدات.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and trip details are confirmed before the booking is accepted. We quote individual journeys and do not run a daily commuting service.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز. ونحن نُسعّر الرحلات الفردية ولا نقدّم خدمة توصيل يومية منتظمة.",
      },
    ],
  },

  faqHeading: { en: "Jeddah and Rabigh: common questions", ar: "جدة ورابغ: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Rabigh from Jeddah?", ar: "رابغ كم تبعد عن جدة؟" },
      answer: {
        en: "About 150 km north along the coast — route planners give roughly 140 to 165 km and about two hours, depending on where in Jeddah you start and where in Rabigh you are going.",
        ar: "نحو 150 كم شمالًا على الساحل، وتذكر أدوات التخطيط ما بين 140 و165 كم تقريبًا ونحو ساعتين، بحسب نقطة انطلاقك في جدة ووجهتك في رابغ.",
      },
    },
    {
      question: { en: "Is King Abdullah Economic City in Rabigh?", ar: "هل مدينة الملك عبدالله الاقتصادية في رابغ؟" },
      answer: {
        en: "Yes — it lies within Rabigh Governorate, in the al-Qadhimah centre. It is a separate destination from Rabigh town, so tell us which one you need.",
        ar: "نعم، تقع ضمن محافظة رابغ في مركز القضيمة، وهي وجهة مستقلة عن مدينة رابغ، فأخبرنا بأيهما تقصد.",
      },
    },
    {
      question: { en: "Can I take the train to Rabigh?", ar: "هل يمكنني الذهاب إلى رابغ بالقطار؟" },
      answer: {
        en: "The Haramain station is in King Abdullah Economic City, not in Rabigh town. For the town or the industrial area, a road leg from the station is still needed — we can quote it.",
        ar: "محطة قطار الحرمين في مدينة الملك عبدالله الاقتصادية لا في مدينة رابغ، فللمدينة أو المنطقة الصناعية لا بد من مرحلة برية من المحطة، ويمكننا تسعيرها.",
      },
    },
    {
      question: { en: "Do you arrange entry to KAEC?", ar: "هل ترتّبون تصريح الدخول إلى المدينة الاقتصادية؟" },
      answer: {
        en: "No. Any access arrangements inside King Abdullah Economic City are for you to confirm with your host or the city. We provide the road journey to the address you give us.",
        ar: "لا. فأي ترتيبات للدخول داخل مدينة الملك عبدالله الاقتصادية يؤكدها الطرف المستضيف لك أو إدارة المدينة، ونحن نوفّر الرحلة البرية إلى العنوان الذي تعطينا إياه.",
      },
    },
    {
      question: { en: "Can you collect me from Jeddah airport for Rabigh?", ar: "هل توفرون التوصيل من مطار جدة إلى رابغ؟" },
      answer: {
        en: "Yes. Send the flight number so the pickup follows your aircraft, plus the address in Rabigh or KAEC and how many passengers and bags.",
        ar: "نعم. أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك، مع العنوان في رابغ أو المدينة الاقتصادية وعدد الركاب والحقائب.",
      },
    },
  ],

  related: [
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "The city most Rabigh journeys start from, and its other destinations.",
        ar: "المدينة التي تبدأ منها معظم رحلات رابغ، ووجهاتها الأخرى.",
      },
    },
    {
      routeKey: "jeddahAirport",
      label: { en: "Jeddah airport transfers", ar: "النقل من مطار جدة" },
      note: {
        en: "Flying in for a Rabigh or KAEC visit: the terminal question and pickups.",
        ar: "قادم جوًّا لزيارة رابغ أو المدينة الاقتصادية: سؤال الصالات والاستقبال.",
      },
    },
    {
      routeKey: "makkah",
      label: { en: "Private transfers in Makkah", ar: "توصيل خاص في مكة المكرمة" },
      note: {
        en: "Arrivals, hotels and onward journeys in the holy city.",
        ar: "الوصول والفنادق والسفر من المدينة المقدسة.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "North along the coast", ar: "شمالًا على الساحل" },
    heading: { en: "Request a Jeddah–Rabigh quotation", ar: "اطلب عرض سعر للتوصيل بين جدة ورابغ" },
    body: {
      en: "The pickup, the destination in Rabigh or KAEC, the date and time and how many of you. We reply with a written price.",
      ar: "نقطة الانطلاق والوجهة في رابغ أو المدينة الاقتصادية والتاريخ والوقت وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Rabigh quote", ar: "اطلب سعر رحلة رابغ" },
  },
};
