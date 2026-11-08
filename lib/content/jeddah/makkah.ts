import type { Bilingual, Locale } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Jeddah → Makkah.
 *
 * ## What this page is for
 *
 * The dominant Jeddah intent, in both languages: a traveller starting at King
 * Abdulaziz airport or somewhere in the city, going to a hotel in Makkah. One
 * consolidated page covers both starting points and the return; there is
 * deliberately no separate airport, hotel, distance or return URL.
 *
 * ## The entry notice is the page's most important content
 *
 * - All year: entry to Makkah is restricted to Muslims (Visit Saudi, the
 *   official tourism site).
 * - Around Hajj, the Ministry of Interior announces further restrictions each
 *   season. The 1447 AH (2026) arrangements are shown **as a dated example
 *   only** — never as a rule for a future season, and no future dates are
 *   projected.
 * - Business policy, approved by the owner: we do not accept or carry a
 *   passenger who may not legally enter Makkah on their travel date.
 *
 * What the page will not do: describe checkpoint procedures, explain permit
 * applications beyond naming the official channel, judge any traveller's
 * eligibility, or claim anything about drivers' permits.
 *
 * ## Owner-approved operational wording
 *
 * Hotel drop-off is hotel-dependent: some hotels allow vehicles to their
 * entrance, others need passengers dropped at the nearest permitted vehicle
 * point. Which applies is confirmed when the journey is arranged.
 *
 * Deliberately absent: prices, vehicle models, waiting allowances, meeting
 * points, rail schedules or fares, train journey times (reported only, not
 * verified), commuter services, and any Hajj or Umrah operator claim.
 *
 * ## Localisation
 *
 * The two languages were written separately. Arabic leads with توصيل, the
 * noun Saudi searchers attach to this journey, and gives the seasonal permit
 * rules the most weight; English gives the all-year rule the most weight.
 * Same facts, same policy. Research: the local research folder,
 * jeddah-to-makkah-*.md (kept outside the repository).
 */

/** An FAQ that may belong to one language only. */
export type LocalisedFaq = ClusterFaq & { only?: Locale };

type TitledPoint = { title: Bilingual<string>; detail: Bilingual<string> };

export type JeddahMakkahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
    figures: { label: Bilingual<string>; value: Bilingual<string> }[];
    entryLink: Bilingual<string>;
  };
  entry: {
    eyebrow: Bilingual<string>;
    heading: Bilingual<string>;
    /** The all-year rule — weighted heavily in English, one line in Arabic. */
    allYear: TitledPoint;
    seasonal: TitledPoint;
    example: {
      heading: Bilingual<string>;
      lead: Bilingual<string>;
      months: Bilingual<string>[];
      residents: { when: Bilingual<string>; what: Bilingual<string> };
      visas: { when: Bilingual<string>; what: Bilingual<string> };
      caveat: Bilingual<string>;
    };
    policy: { heading: Bilingual<string>; body: Bilingual<string>; why: Bilingual<string> };
    limit: Bilingual<string>;
    official: { url: string; label: Bilingual<string>; note: Bilingual<string> };
  };
  approach: {
    eyebrow: Bilingual<string>;
    lead: Bilingual<string>;
    checkpoint: Bilingual<string>;
  };
  airport: {
    tag: Bilingual<string>;
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    points: TitledPoint[];
    umrah: Bilingual<string>;
    link: Bilingual<string>;
  };
  city: {
    tag: Bilingual<string>;
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    points: TitledPoint[];
  };
  road: {
    heading: Bilingual<string>;
    figures: { label: Bilingual<string>; value: Bilingual<string>; note: Bilingual<string> }[];
    considerations: TitledPoint[];
    footnote: Bilingual<string>;
  };
  dropoff: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    options: TitledPoint[];
    or: Bilingual<string>;
    note: Bilingual<string>;
  };
  train: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    rows: { mode: Bilingual<string>; legs: Bilingual<string>[]; verdict: Bilingual<string> }[];
    legsLabel: Bilingual<string>;
    footnote: Bilingual<string>;
  };
  returnTrip: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    start: TitledPoint;
    branches: TitledPoint[];
    together: TitledPoint;
  };
  quotation: { heading: Bilingual<string>; lead: Bilingual<string>; items: Bilingual<string>[] };
  faqHeading: Bilingual<string>;
  faqs: LocalisedFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const jeddahMakkah: JeddahMakkahContent = {
  routeKey: "jeddahToMakkah",
  imageKey: "dest-makkah",

  seo: {
    // EN 50 characters; AR 55.
    title: {
      en: "Jeddah to Makkah Private Transfer | Airport & City",
      ar: "توصيل من جدة إلى مكة بسيارة خاصة | من المطار أو المدينة",
    },
    description: {
      en: "Private car from Jeddah airport or any Jeddah address to your hotel in Makkah, about 80–100 km. Read the entry rules first, then request a written quotation.",
      ar: "نقل خاص من مطار جدة أو أي عنوان في جدة إلى فندقك في مكة المكرمة، نحو 80 إلى 100 كم. اطّلع على شروط الدخول وقيود موسم الحج أولًا، ثم اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Jeddah to Makkah", ar: "من جدة إلى مكة" },

  hero: {
    eyebrow: { en: "Jeddah · The road to Makkah", ar: "جدة · الطريق إلى مكة المكرمة" },
    h1: {
      en: "Jeddah to Makkah private transfers",
      ar: "نقل خاص من جدة إلى مكة المكرمة",
    },
    lead: {
      en: "Two ways in — King Abdulaziz airport or anywhere in Jeddah — and one road up to Makkah. A private car to your hotel, about 80 to 100 km and usually an hour to an hour and a half. Before anything else, read who can enter Makkah.",
      ar: "توصيل من مطار جدة أو من أي عنوان في جدة إلى فندقك في مكة المكرمة بسيارة خاصة، على مسافة 80 إلى 100 كم تقريبًا وفي ساعة إلى ساعة ونصف غالبًا. ودخول مكة مقصور على المسلمين، وتُعلَن حول موسم الحج قيود إضافية على التصاريح والتأشيرات، فاطّلع عليها قبل الحجز.",
    },
    figures: [
      { label: { en: "Distance", ar: "المسافة" }, value: { en: "80–100 km", ar: "80–100 كم" } },
      { label: { en: "Driving time", ar: "مدة القيادة" }, value: { en: "1–1.5 hrs", ar: "1–1.5 ساعة" } },
    ],
    entryLink: { en: "Who can enter Makkah", ar: "شروط الدخول وموسم الحج" },
  },

  entry: {
    eyebrow: { en: "Read this first", ar: "قبل الحجز" },
    heading: {
      en: "Who can enter Makkah — and the journeys we will not take",
      ar: "موسم الحج وتصاريح دخول مكة",
    },
    allYear: {
      title: { en: "All year: Muslims only", ar: "طوال العام: الدخول للمسلمين فقط" },
      detail: {
        en: "Entry to Makkah is restricted to Muslims. This is not a seasonal rule — it applies every day of the year, and entry requirements are enforced at checkpoints on the roads into the city, including the road from Jeddah.",
        ar: "دخول مكة المكرمة مقصور على المسلمين في كل أيام السنة، وتُطبَّق شروط الدخول عند نقاط التفتيش على الطرق المؤدية إليها، ومنها طريق جدة.",
      },
    },
    seasonal: {
      title: {
        en: "In officially announced Hajj periods: further restrictions",
        ar: "في فترات الحج المعلنة رسميًا: قيود إضافية",
      },
      detail: {
        en: "Around the Hajj season the Ministry of Interior announces additional entry arrangements. They have included entry permits for residents and a bar on visit-visa holders entering Makkah. They are announced afresh each season and can change, so the only reliable answer for your travel date is the current official announcement.",
        ar: "تعلن وزارة الداخلية حول موسم الحج ترتيبات إضافية لدخول مكة، وقد شملت اشتراط تصريح دخول للمقيمين ومنع حاملي تأشيرات الزيارة من الدخول. وتُعلَن هذه الترتيبات من جديد في كل موسم وقد تتغير، فالجواب الموثوق لتاريخ رحلتك هو الإعلان الرسمي الساري.",
      },
    },
    example: {
      heading: {
        en: "An example: the 1447 AH (2026) season",
        ar: "مثال: ما أعلنته وزارة الداخلية لموسم حج 1447هـ (2026م)",
      },
      lead: {
        en: "Shown to make the pattern concrete, not as a rule for next year. These are the arrangements the Ministry of Interior announced for 2026.",
        ar: "نعرضه لتوضيح الصورة لا بوصفه قاعدة للعام القادم. هذه هي الترتيبات التي أعلنتها وزارة الداخلية لعام 2026م.",
      },
      months: [
        { en: "Shawwal", ar: "شوال" },
        { en: "Dhu al-Qa'dah", ar: "ذو القعدة" },
        { en: "Dhu al-Hijjah", ar: "ذو الحجة" },
      ],
      residents: {
        when: { en: "From 25 Shawwal 1447 · 13 April 2026", ar: "من 25 شوال 1447هـ · 13 أبريل 2026م" },
        what: {
          en: "Residents needed an official permit to enter Makkah — issued electronically through Absher and the Muqeem portal — unless they held a Makkah-issued residence ID, a Hajj permit or a holy-sites work permit.",
          ar: "اشتُرط على المقيمين الحصول على تصريح رسمي لدخول مكة، يُصدَر إلكترونيًا عبر «أبشر» وبوابة «مقيم»، باستثناء من يحمل هوية مقيم صادرة من مكة المكرمة أو تصريح حج أو تصريح عمل في المشاعر المقدسة.",
        },
      },
      visas: {
        when: {
          en: "1 Dhu al-Qa'dah – 14 Dhu al-Hijjah 1447 · 18 April – 31 May 2026",
          ar: "من 1 ذي القعدة إلى 14 ذي الحجة 1447هـ · 18 أبريل – 31 مايو 2026م",
        },
        what: {
          en: "Holders of every visa type except a Hajj visa could not enter or stay in Makkah, and Umrah permits on the Nusuk platform were paused.",
          ar: "مُنع حاملو التأشيرات بأنواعها كافة، باستثناء تأشيرة الحج، من دخول مكة أو البقاء فيها، وأُوقف إصدار تصاريح العمرة عبر منصة «نسك».",
        },
      },
      caveat: {
        en: "Dates follow the Hijri calendar and are announced each season, and the arrangements themselves can change. Check the current announcement for your travel date — not this example.",
        ar: "تتبع المواعيد التقويم الهجري وتُعلَن في كل موسم، وقد تتغير الترتيبات نفسها. فتحقق من الإعلان الساري لتاريخ رحلتك، لا من هذا المثال.",
      },
    },
    policy: {
      heading: { en: "Our policy", ar: "سياستنا" },
      body: {
        en: "We will not accept or carry a passenger who is not legally permitted to enter Makkah on their travel date. If anyone in your group may not be able to enter on that day — because of the all-year rule or a seasonal restriction — tell us before you book, and we will quote the parts of your trip that are open to you instead.",
        ar: "لا نقبل ولا ننقل أي راكب لا يحق له نظامًا دخول مكة المكرمة في تاريخ رحلته. فإن كان أحد أفراد مجموعتك قد لا يستطيع الدخول في ذلك اليوم، بسبب القاعدة الدائمة أو قيد موسمي، فأخبرنا قبل الحجز ونُسعّر لك بدلًا من ذلك أجزاء رحلتك المتاحة لك.",
      },
      why: {
        en: "It protects you as well as us. For the 1447 AH season the Ministry of Interior announced penalties, including fines and confiscation of the vehicle, for transporting visit-visa holders into Makkah during the restriction period.",
        ar: "وهذا يحميك ويحمينا معًا. ففي موسم 1447هـ أعلنت وزارة الداخلية عقوبات، منها الغرامة ومصادرة وسيلة النقل، بحق من ينقل حاملي تأشيرات الزيارة إلى مكة خلال فترة القيود.",
      },
    },
    limit: {
      en: "What we will not do is explain how checkpoints operate, issue or arrange permits, or judge whether a particular traveller will be admitted. We arrange road transport only and are not an official Hajj or Umrah operator.",
      ar: "وما لن نفعله هو شرح كيفية عمل نقاط التفتيش، أو إصدار التصاريح أو ترتيبها، أو الحكم بما إن كان مسافر بعينه سيُسمح له بالدخول. نحن نرتّب النقل البري فقط، ولسنا مشغّلاً رسميًا للحج أو العمرة.",
    },
    official: {
      url: "https://pep.gov.sa/ar/news/926",
      label: {
        en: "Ministry of Interior arrangements for the 1447 AH Hajj season (in Arabic)",
        ar: "ترتيبات وزارة الداخلية لموسم حج 1447هـ",
      },
      note: {
        en: "Published by the Pilgrim Experience Program, a Saudi government programme. Look for the current season's announcement before you travel.",
        ar: "منشورة على موقع برنامج خدمة ضيوف الرحمن. ابحث عن إعلان الموسم الحالي قبل السفر.",
      },
    },
  },

  approach: {
    eyebrow: { en: "Two roads in, one road up", ar: "نقطتا انطلاق وطريق واحد إلى مكة" },
    lead: {
      en: "Whether you start at the airport or at an address in the city, every journey joins the same road east to Makkah. What changes is what we need from you at the start.",
      ar: "سواء انطلقت من المطار أو من عنوان في المدينة، تلتقي كل رحلة على الطريق نفسه شرقًا إلى مكة. وما يختلف هو ما نحتاجه منك عند الانطلاق.",
    },
    checkpoint: {
      en: "Entry checkpoint · Muslims only",
      ar: "نقطة تفتيش · الدخول للمسلمين فقط",
    },
  },

  airport: {
    tag: { en: "Road one", ar: "الانطلاق الأول" },
    heading: { en: "Jeddah airport to Makkah", ar: "من مطار جدة إلى مكة" },
    lead: {
      en: "The journey most people landing at King Abdulaziz International Airport are making.",
      ar: "الرحلة التي يقوم بها معظم القادمين إلى مطار الملك عبدالعزيز الدولي.",
    },
    points: [
      {
        title: { en: "Send the flight number", ar: "أرسل رقم الرحلة" },
        detail: {
          en: "It tells us the terminal and lets the pickup follow your aircraft rather than a clock time, so a delay moves the pickup with it.",
          ar: "فهو يخبرنا بالصالة ويجعل موعد الاستقبال يتبع طائرتك لا توقيت الساعة، فإن تأخرت الرحلة تحرّك الموعد معها.",
        },
      },
      {
        title: { en: "Name the hotel", ar: "اذكر اسم الفندق" },
        detail: {
          en: "The hotel name is enough to quote on. You do not need a street address in Makkah.",
          ar: "اسم الفندق يكفي للتسعير، ولا تحتاج إلى عنوان تفصيلي في مكة.",
        },
      },
      {
        title: { en: "Passengers and suitcases", ar: "عدد الركاب والحقائب" },
        detail: {
          en: "They decide the size of vehicle, so give us the real numbers, children included.",
          ar: "فهي التي تحدد حجم المركبة، فاذكر الأعداد الفعلية بمن فيهم الأطفال.",
        },
      },
    ],
    umrah: {
      en: "Travelling for Umrah? Umrah permits are issued through the Nusuk platform and are yours to arrange. Questions about Ihram belong to the Ministry of Hajj and Umrah or your group organiser, not to a transport company.",
      ar: "قادم للعمرة؟ تُصدَر تصاريح العمرة عبر منصة «نسك» وترتيبها عليك. ومسائل الإحرام من شأن وزارة الحج والعمرة أو منظّم حملتك، لا من شأن شركة النقل.",
    },
    link: {
      en: "Arriving at King Abdulaziz, in detail",
      ar: "تفاصيل الوصول إلى مطار الملك عبدالعزيز",
    },
  },

  city: {
    tag: { en: "Road two", ar: "الانطلاق الثاني" },
    heading: { en: "From a Jeddah hotel or address", ar: "من أي فندق أو عنوان في جدة" },
    lead: {
      en: "Any address in the city, at the time you choose.",
      ar: "من أي عنوان في المدينة، في الوقت الذي تختاره.",
    },
    points: [
      {
        title: { en: "The address, not the district", ar: "العنوان لا الحي" },
        detail: {
          en: "Jeddah runs a long way along the coast, so where you start changes the distance more than people expect.",
          ar: "تمتد جدة مسافة طويلة على الساحل، فنقطة انطلاقك تغيّر المسافة أكثر مما يُتوقع.",
        },
      },
      {
        title: { en: "For a hotel, the entrance", ar: "وللفندق، المدخل" },
        detail: {
          en: "Large hotels have more than one door. Tell us which one you will be waiting at.",
          ar: "للفنادق الكبيرة أكثر من باب، فأخبرنا عند أيّها ستنتظر.",
        },
      },
      {
        title: { en: "A time that allows for the day", ar: "وقت يراعي ظروف اليوم" },
        detail: {
          en: "A city pickup runs to the time you set. If you are travelling at a busy period, set it earlier rather than later.",
          ar: "الاستقبال من المدينة يكون في الوقت الذي تحدده، فإن كنت مسافرًا في وقت مزدحم فاجعله أبكر لا أأخر.",
        },
      },
    ],
  },

  road: {
    heading: {
      en: "Distance, driving time and the road",
      ar: "المسافة بين جدة ومكة، وكم تستغرق الرحلة",
    },
    figures: [
      {
        label: { en: "Distance", ar: "المسافة" },
        value: { en: "80–100 km", ar: "80–100 كم" },
        note: {
          en: "About 80 km from central Jeddah; closer to 100 km from the airport, which lies north of the city.",
          ar: "نحو 80 كم من وسط جدة، وأقرب إلى 100 كم من المطار الواقع شمال المدينة.",
        },
      },
      {
        label: { en: "Driving time", ar: "مدة القيادة" },
        value: { en: "1–1.5 hrs", ar: "1–1.5 ساعة" },
        note: {
          en: "In normal traffic. Longer at busy times.",
          ar: "في الحركة المعتادة، وأطول في أوقات الذروة.",
        },
      },
    ],
    considerations: [
      {
        title: { en: "Why published figures differ", ar: "لماذا تختلف الأرقام المنشورة" },
        detail: {
          en: "Sources measure from different points in Jeddah to different points in Makkah, so they disagree by up to about 20 km. We quote on your actual pickup and hotel.",
          ar: "تقيس المصادر من نقاط مختلفة في جدة إلى نقاط مختلفة في مكة، فتتفاوت بنحو 20 كم. ونحن نُسعّر على نقطة انطلاقك وفندقك الفعليين.",
        },
      },
      {
        title: { en: "When it takes longer", ar: "متى تطول الرحلة" },
        detail: {
          en: "Peak Umrah periods — Ramadan especially — and the streets around the Haram near prayer times push the journey to the upper end of the range, or past it.",
          ar: "في مواسم العمرة المزدحمة، ولا سيما رمضان، وفي الشوارع المحيطة بالحرم قرب أوقات الصلاة، تقترب الرحلة من الحد الأعلى أو تتجاوزه.",
        },
      },
      {
        title: { en: "The checkpoint", ar: "نقطة التفتيش" },
        detail: {
          en: "Every journey passes an entry checkpoint on the way into Makkah, so allow time for it. We do not publish how it operates.",
          ar: "تمر كل رحلة بنقطة تفتيش عند دخول مكة، فاحسب لها وقتًا. ولا ننشر كيفية عملها.",
        },
      },
    ],
    footnote: {
      en: "Estimates from public route data, not a guaranteed arrival time.",
      ar: "تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
    },
  },

  dropoff: {
    heading: {
      en: "Arriving at your hotel near the Haram",
      ar: "التوصيل للحرم: أين تنزل عند فندقك؟",
    },
    lead: {
      en: "Where you are dropped depends on the hotel. Vehicle access around the Haram is controlled, and it is not the same for every hotel.",
      ar: "يعتمد مكان النزول على الفندق، فدخول المركبات حول الحرم منظَّم ولا يتساوى فيه كل الفنادق.",
    },
    options: [
      {
        title: { en: "At the hotel entrance", ar: "عند مدخل الفندق" },
        detail: {
          en: "Some hotels allow vehicles to reach their entrance, and the car takes you to the door.",
          ar: "بعض الفنادق تسمح بوصول المركبات إلى مدخلها، فتوصلك السيارة إلى الباب.",
        },
      },
      {
        title: { en: "At the nearest permitted point", ar: "عند أقرب نقطة مسموح بها" },
        detail: {
          en: "Others can only be reached on foot from the nearest point vehicles are permitted, so you are dropped there and walk the last stretch.",
          ar: "وفنادق أخرى لا يُوصَل إليها إلا مشيًا من أقرب نقطة يُسمح للمركبات بالوصول إليها، فتنزل هناك وتكمل المسافة الأخيرة سيرًا.",
        },
      },
    ],
    or: { en: "or", ar: "أو" },
    note: {
      en: "Which one applies depends on your hotel and on the access restrictions in force at the time, and we confirm it when the journey is arranged. If you have a lot of luggage, or someone with you cannot walk far, tell us when you ask for the quotation.",
      ar: "ويعتمد أيّهما ينطبق على فندقك وعلى قيود الدخول السارية حينها، ونؤكد ذلك عند ترتيب الرحلة. وإن كانت معك أمتعة كثيرة أو يرافقك من لا يستطيع المشي طويلًا فأخبرنا عند طلب عرض السعر.",
    },
  },

  train: {
    heading: { en: "Car or Haramain train?", ar: "السيارة أم قطار الحرمين؟" },
    lead: {
      en: "The Haramain high-speed line has a station at King Abdulaziz airport and reaches Makkah, and for some travellers it is the better answer. We sell no rail tickets, so there is nothing in this for us either way.",
      ar: "لقطار الحرمين السريع محطة في مطار الملك عبدالعزيز ويصل إلى مكة، وهو لبعض المسافرين الخيار الأفضل. ونحن لا نبيع تذاكر قطار، فلا مصلحة لنا في أي الخيارين.",
    },
    legsLabel: { en: "legs", ar: "مراحل" },
    rows: [
      {
        mode: { en: "By train", ar: "بالقطار" },
        legs: [
          { en: "To the station", ar: "إلى المحطة" },
          { en: "Train to Makkah", ar: "القطار إلى مكة" },
          { en: "Station to hotel", ar: "من المحطة إلى الفندق" },
        ],
        verdict: {
          en: "Usually the better answer for one or two people travelling light.",
          ar: "غالبًا الخيار الأفضل لشخص أو شخصين بأمتعة خفيفة.",
        },
      },
      {
        mode: { en: "By car", ar: "بالسيارة" },
        legs: [{ en: "Pickup to hotel", ar: "من نقطة الانطلاق إلى الفندق" }],
        verdict: {
          en: "Better for families, real luggage, late arrivals, a city pickup away from a station, or anyone who would rather not change mode after a flight.",
          ar: "أفضل للعائلات والأمتعة الفعلية والوصول المتأخر والانطلاق من عنوان بعيد عن محطة، ولمن يفضّل ألا يغيّر وسيلته بعد رحلة جوية.",
        },
      },
    ],
    footnote: {
      en: "Check rail schedules and fares with the operator; we publish neither.",
      ar: "تحقق من مواعيد القطار وأسعاره لدى المشغّل؛ فنحن لا ننشر أيًّا منهما.",
    },
  },

  returnTrip: {
    heading: { en: "Makkah to Jeddah: the return journey", ar: "من مكة إلى جدة: رحلة العودة" },
    lead: {
      en: "The same road the other way — one start in Makkah, then the airport or the city.",
      ar: "الطريق نفسه في الاتجاه المعاكس: انطلاق واحد من مكة، ثم المطار أو المدينة.",
    },
    start: {
      title: { en: "Pickup at your hotel in Makkah", ar: "الاستقبال من فندقك في مكة" },
      detail: {
        en: "The arrival rule applies in reverse: depending on the hotel, pickup is at its entrance or at the nearest permitted vehicle point, confirmed when the journey is arranged.",
        ar: "تنطبق قاعدة الوصول بالعكس: بحسب الفندق يكون الاستقبال عند مدخله أو عند أقرب نقطة مسموح بها للمركبات، ويُؤكَّد ذلك عند ترتيب الرحلة.",
      },
    },
    branches: [
      {
        title: { en: "To Jeddah airport for a flight", ar: "إلى مطار جدة للحاق برحلتك" },
        detail: {
          en: "Ask your airline how early you need to be at the desk and give us that time. We build the journey backwards from it, allowing for the upper end of the driving time.",
          ar: "اسأل شركة طيرانك عن موعد الوصول اللازم إلى مكتب الإجراءات وأخبرنا به، ونبني الرحلة تراجعيًا منه مع احتساب الحد الأعلى لمدة القيادة.",
        },
      },
      {
        title: { en: "To an address in Jeddah", ar: "إلى عنوان في جدة" },
        detail: {
          en: "Give us the address and, for a hotel, the entrance — the same detail that makes an outbound pickup work.",
          ar: "زوّدنا بالعنوان، وللفندق بالمدخل، فهي التفاصيل نفسها التي تُنجح الاستقبال في رحلة الذهاب.",
        },
      },
    ],
    together: {
      title: { en: "Both legs in one enquiry", ar: "الرحلتان في استفسار واحد" },
      detail: {
        en: "If you already know your dates, send the outbound and the return together and both are quoted at once.",
        ar: "إن كنت تعرف مواعيدك، فأرسل الذهاب والعودة معًا وتُسعَّر الرحلتان مرة واحدة.",
      },
    },
  },

  quotation: {
    heading: {
      en: "How the quotation and the arrangements work",
      ar: "كيف نُعدّ عرض السعر ونرتّب الرحلة",
    },
    lead: {
      en: "No prices are published here, because the journey is priced on your details. This is what happens instead.",
      ar: "لا ننشر أسعارًا هنا، لأن الرحلة تُسعَّر بحسب تفاصيلك. وهذا ما يحدث بدلًا من ذلك.",
    },
    items: [
      {
        en: "You send the pickup, the hotel in Makkah, the date and time, how many passengers and suitcases, and the flight number if you are landing.",
        ar: "ترسل نقطة الانطلاق وفندقك في مكة والتاريخ والوقت وعدد الركاب والحقائب، ورقم الرحلة إن كنت قادمًا جوًّا.",
      },
      {
        en: "We reply with a written price and the vehicle category.",
        ar: "نرد بسعر مكتوب وفئة المركبة.",
      },
      {
        en: "Nothing is reserved and no payment is taken until you accept it — and nothing is added afterwards.",
        ar: "ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه، ولا يُضاف شيء بعد ذلك.",
      },
      {
        en: "The drop-off point at your hotel is confirmed when the journey is arranged.",
        ar: "ويُؤكَّد مكان النزول عند فندقك عند ترتيب الرحلة.",
      },
      {
        en: "We only accept journeys into Makkah for passengers who may legally enter on the travel date.",
        ar: "ولا نقبل رحلات إلى مكة إلا لركاب يحق لهم دخولها نظامًا في تاريخ الرحلة.",
      },
      {
        en: "We arrange road transport only — not visas, permits, rail tickets or packages.",
        ar: "ونرتّب النقل البري فقط، لا التأشيرات ولا التصاريح ولا تذاكر القطار ولا البرامج.",
      },
    ],
  },

  faqHeading: {
    en: "Jeddah to Makkah: questions before you book",
    ar: "التوصيل من جدة إلى مكة: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How far is Jeddah from Makkah by road?",
        ar: "كم كيلو بين جدة ومكة؟",
      },
      answer: {
        en: "About 80 to 100 km. From central Jeddah it is roughly 80 km; from King Abdulaziz airport, which lies north of the city, it is closer to 100 km. Published figures disagree because they measure between different points, so we quote on your actual pickup and hotel.",
        ar: "بين 80 و100 كم تقريبًا. فمن وسط جدة نحو 80 كم، ومن مطار الملك عبدالعزيز الواقع شمال المدينة أقرب إلى 100 كم. وتختلف الأرقام المنشورة لأنها تقيس بين نقاط مختلفة، ولهذا نُسعّر على نقطة انطلاقك وفندقك الفعليين.",
      },
    },
    {
      question: {
        en: "How long does the drive from Jeddah to Makkah take?",
        ar: "كم تستغرق الرحلة من جدة إلى مكة بالسيارة؟",
      },
      answer: {
        en: "Usually an hour to an hour and a half in normal traffic. Peak Umrah periods, Ramadan in particular, the entry checkpoint and the streets around the Haram near prayer times can all add to it. These are estimates, not a guaranteed arrival time.",
        ar: "ساعة إلى ساعة ونصف غالبًا في الحركة المعتادة. وقد تطول في مواسم العمرة المزدحمة ولا سيما رمضان، وعند نقطة التفتيش، وفي الشوارع المحيطة بالحرم قرب أوقات الصلاة. وهذه تقديرات لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "How much does a private transfer from Jeddah to Makkah cost?",
        ar: "كم سعر التوصيل من جدة إلى مكة؟",
      },
      answer: {
        en: "We do not publish a fixed price, because it depends on your details: the pickup point, the hotel, the date and time, and how many passengers and suitcases, which decide the vehicle. Send those and we reply with a written price. Nothing is reserved or paid until you accept it.",
        ar: "لا ننشر سعرًا ثابتًا لأنه يعتمد على تفاصيلك: نقطة الانطلاق والفندق والتاريخ والوقت وعدد الركاب والحقائب التي تحدد المركبة. أرسلها ونرد بسعر مكتوب، ولا يُحجز شيء ولا يُدفع حتى توافق عليه.",
      },
    },
    {
      question: {
        en: "Can you meet me at Jeddah airport and take me to my hotel in Makkah?",
        ar: "هل توفرون التوصيل من مطار جدة إلى فندقي في مكة مباشرة؟",
      },
      answer: {
        en: "Yes — it is the journey people ask us for most in Jeddah. Send the flight number, so the pickup follows your aircraft, and the name of the hotel. Please read who can enter Makkah first: we only accept the journey for passengers permitted to enter on the travel date.",
        ar: "نعم، وهي أكثر رحلة يطلبها الناس منا في جدة. أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك، واسم الفندق. ويُرجى الاطلاع أولًا على شروط دخول مكة: فلا نقبل الرحلة إلا لركاب يحق لهم الدخول في تاريخها.",
      },
    },
    {
      question: {
        en: "Will the car take me to the door of my hotel near the Haram?",
        ar: "هل توصلوننا إلى باب الفندق أو إلى الحرم مباشرة؟",
      },
      answer: {
        en: "It depends on the hotel. Some allow vehicles to their entrance; others can only be reached on foot from the nearest permitted vehicle point, so you are dropped there. Which applies depends on the hotel and the access restrictions at the time, and we confirm it when the journey is arranged.",
        ar: "يعتمد ذلك على الفندق. فبعض الفنادق تسمح بوصول المركبات إلى مدخلها، وأخرى لا يُوصَل إليها إلا مشيًا من أقرب نقطة مسموح بها للمركبات فتنزل عندها. وكذلك التوصيل للحرم: نوصلك إلى أقرب نقطة يُسمح للمركبات بالوصول إليها. ويعتمد ما ينطبق على الفندق وقيود الدخول السارية حينها، ونؤكده عند ترتيب الرحلة.",
      },
    },
    {
      question: {
        en: "Can non-Muslims travel to Makkah?",
        ar: "هل يمكن لغير المسلمين دخول مكة؟",
      },
      answer: {
        en: "No. Entry to Makkah is restricted to Muslims all year, and entry requirements are enforced at checkpoints on the roads into the city. We will not accept or carry a journey into Makkah for a passenger who is not permitted to enter. Jeddah, Taif and the coast are open to everyone, and we are glad to quote those.",
        // Not rendered: in Arabic the rule is one plain line in the lead and
        // the notice, the localised emphasis agreed for the Jeddah cluster.
        ar: "لا. دخول مكة المكرمة مقصور على المسلمين طوال العام، ولا نقبل ولا ننقل إلى مكة راكبًا لا يحق له دخولها.",
      },
      only: "en",
    },
    {
      question: {
        en: "Can I travel to Makkah on a tourist or visit visa?",
        ar: "هل يمكن لحامل تأشيرة الزيارة أو السياحة دخول مكة في موسم الحج؟",
      },
      answer: {
        en: "Outside the restriction periods announced around Hajj, the all-year rule applies: Makkah is open to Muslims. During those periods the rules have barred holders of visas other than a Hajj visa — in the 1447 AH (2026) season, from 1 Dhu al-Qa'dah to 14 Dhu al-Hijjah. Each season's dates and rules are announced by the Ministry of Interior, so check the current announcement for your travel date. If you are not permitted to enter on that date, we cannot take you.",
        ar: "في فترات القيود التي تُعلَن حول موسم الحج مُنع حاملو التأشيرات غير تأشيرة الحج من دخول مكة؛ ففي موسم 1447هـ (2026م) امتد المنع من 1 ذي القعدة إلى 14 ذي الحجة. وتعلن وزارة الداخلية مواعيد كل موسم وترتيباته، فتحقق من الإعلان الساري لتاريخ رحلتك. ولا يمكننا نقل من لا يحق له الدخول في ذلك التاريخ، ومن ذلك أقاربك القادمون بتأشيرة زيارة.",
      },
    },
    {
      question: {
        en: "Do I need a permit to enter Makkah?",
        ar: "هل أحتاج إلى تصريح لدخول مكة؟",
      },
      answer: {
        en: "It depends on who you are and when you travel. In the restriction periods announced around Hajj, residents have needed an official entry permit — in the 1447 AH season from 25 Shawwal, issued electronically through Absher and the Muqeem portal. Umrah permits are issued through the Nusuk platform. We do not issue or arrange permits; check the current official announcement for your date.",
        ar: "يعتمد ذلك على صفتك وموعد سفرك. ففي فترات القيود التي تُعلَن حول موسم الحج احتاج المقيمون إلى تصريح رسمي لدخول مكة، وفي موسم 1447هـ بدأ ذلك من 25 شوال وصدرت التصاريح إلكترونيًا عبر «أبشر» وبوابة «مقيم»، مع استثناء من يحمل هوية مقيم صادرة من مكة. أما تصاريح العمرة فتُصدَر عبر منصة «نسك». ونحن لا نُصدر التصاريح ولا نرتّبها، فتحقق من الإعلان الرسمي الساري لتاريخك.",
      },
    },
    {
      question: {
        en: "Is the Haramain train better than a car to Makkah?",
        ar: "أيهما أفضل: السيارة أم قطار الحرمين؟",
      },
      answer: {
        en: "Often, for one or two people travelling light — the line has a station at King Abdulaziz airport and reaches Makkah. It ends at a station, though, so there is another ride to the hotel. The car wins for families, real luggage, late arrivals and city pickups away from a station. We sell no rail tickets, so check schedules and fares with the operator.",
        ar: "غالبًا القطار لشخص أو شخصين بأمتعة خفيفة، فللخط محطة في مطار الملك عبدالعزيز ويصل إلى مكة. لكنه ينتهي عند محطة، فتبقى رحلة أخرى إلى الفندق. أما السيارة فأفضل للعائلات والأمتعة الفعلية والوصول المتأخر والانطلاق من عنوان بعيد عن محطة. ونحن لا نبيع تذاكر قطار، فتحقق من المواعيد والأسعار لدى المشغّل.",
      },
    },
    {
      question: {
        en: "Can you take me from Makkah back to Jeddah airport?",
        ar: "هل توفرون التوصيل من مكة إلى مطار جدة؟",
      },
      answer: {
        en: "Yes. Ask your airline how early you need to be at the desk, give us that time and the hotel, and we work the pickup out backwards. Pickup is at the hotel entrance or the nearest permitted vehicle point, depending on the hotel. If you know your dates, send both legs in one enquiry.",
        ar: "نعم. اسأل شركة طيرانك عن موعد الوصول اللازم إلى مكتب الإجراءات، وأخبرنا به وباسم الفندق، ونحسب موعد الاستقبال تراجعيًا. ويكون الاستقبال عند مدخل الفندق أو عند أقرب نقطة مسموح بها للمركبات بحسب الفندق. وإن كنت تعرف مواعيدك فأرسل الرحلتين في استفسار واحد.",
      },
    },
    {
      question: {
        en: "Do you arrange Umrah permits or packages?",
        ar: "هل تُصدرون تصاريح العمرة أو تقدّمون برامج؟",
      },
      answer: {
        en: "No. We arrange road transport only and are not an official Hajj or Umrah operator, so we do not issue visas or permits and we do not sell packages. Umrah permits are issued through the Nusuk platform.",
        ar: "لا. نحن نرتّب النقل البري فقط ولسنا مشغّلاً رسميًا للحج أو العمرة، فلا نُصدر تأشيرات ولا تصاريح ولا نبيع برامج. وتُصدَر تصاريح العمرة عبر منصة «نسك».",
      },
    },
  ],

  related: [
    {
      routeKey: "makkah",
      label: { en: "Private transfers in Makkah", ar: "توصيل خاص في مكة المكرمة" },
      note: {
        en: "After the arrival: moving between hotels, the Haramain station, Ziyarat and journeys onward.",
        ar: "بعد الوصول: التنقل بين الفنادق ومحطة قطار الحرمين والزيارة والسفر بعدها.",
      },
    },
    {
      routeKey: "taif",
      label: { en: "Makkah to Taif", ar: "من مكة إلى الطائف" },
      note: {
        en: "Up the mountain road via Al Hada, or the longer way via Al Sail.",
        ar: "صعودًا عبر طريق الهدا الجبلي، أو الطريق الأطول عبر السيل.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "Where else to go from Jeddah — Madinah, Taif, Yanbu and Riyadh — with distances and caveats.",
        ar: "إلى أين تتجه أيضًا من جدة: المدينة المنورة والطائف وينبع والرياض، مع المسافات والتنبيهات.",
      },
    },
    {
      routeKey: "jeddahAirport",
      label: { en: "Jeddah airport transfers", ar: "النقل من مطار جدة" },
      note: {
        en: "Arriving at King Abdulaziz in detail: the terminal question, both directions and the railway station.",
        ar: "الوصول إلى مطار الملك عبدالعزيز بالتفصيل: سؤال الصالات، والاتجاهان، ومحطة القطار.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "If your trip starts in the capital: the 950 km road west, before the leg up to Makkah.",
        ar: "إن بدأت رحلتك من العاصمة: طريق 950 كم غربًا، قبل المرحلة إلى مكة.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "One road up", ar: "طريق واحد إلى مكة" },
    heading: {
      en: "Request a Jeddah to Makkah quotation",
      ar: "اطلب عرض سعر للتوصيل من جدة إلى مكة",
    },
    body: {
      en: "Your pickup — the airport and flight number, or a Jeddah address — the hotel in Makkah, the date, and how many of you. We reply with a written price.",
      ar: "نقطة الانطلاق، سواء المطار ورقم الرحلة أو عنوان في جدة، وفندقك في مكة والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Makkah transfer quote", ar: "اطلب سعر التوصيل إلى مكة" },
  },
};
