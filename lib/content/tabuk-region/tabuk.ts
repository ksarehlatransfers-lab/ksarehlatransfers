import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Tabuk — destination hub for Tabuk City.
 *
 * Operational coverage: NONE CONFIRMED (owner, 12 Nov 2026; research folder
 * tabuk/). Local transfers, airport pickups and drop-offs, hotel transfers,
 * intercity journeys, NEOM / AMAALA / project sites, sightseeing and hourly
 * service are all unconfirmed. So this page is informational: it offers no
 * service, and its quote section only invites journey details for review —
 * a request is not a booking. When the owner confirms coverage, add a
 * service line, FAQ and quote prompt for exactly what is confirmed.
 *
 * Facts (Saudipedia, retrieved 12 Nov 2026; evidence in the research folder):
 * - Tabuk City: regional centre of Tabuk Province, its largest city;
 *   population 623,665 (2022 census), 70.4% of the province; ~700 km north
 *   of Madinah; on a low-lying plain 600–800 m above sea level; known as
 *   the "Northern Gateway"; dry desert climate.
 * - Tabuk Castle: on the Levant Hajj route between the Levant and Madinah;
 *   beside Ain al-Sukkar; built on the ruins of an older fort, the present
 *   building dating from the 16th century (sources give 1559 and 1568, so
 *   the page says "16th century"); restored several times (17th and 19th
 *   centuries, 1951, 1993); restored in 2013 and opened as the Tabuk
 *   Archaeological Castle Museum; two floors, courtyard, well, mosque on
 *   each floor, watchtowers.
 * - Al-Tawbah Mosque: also called the Prophet's Mosque, because the Prophet
 *   ﷺ prayed there during the Tabuk expedition; first built of clay with a
 *   palm-frond roof; rebuilt by order of King Faisal, closely following the
 *   design of the Prophet's Mosque in Madinah.
 * - Hejaz Railway station: one of the main stations of the line between
 *   Damascus and Madinah, which was put out of service during the First
 *   World War; the first train arrived in Tabuk in 1906; a group of
 *   buildings, recently restored as a landmark.
 * - Ain al-Sukkar: the oldest spring in Tabuk and once its only source of
 *   irrigation; tradition links it to the Prophet's stay during the
 *   expedition (stated as tradition, not fact).
 * - Province: six governorates — Duba (Dhabba), Tayma, Umluj, Al-Wajh,
 *   Haql and Al-Bad' (al-Bida); all coastal except Tayma; Tayma's ancient
 *   inscriptions; Al-Wajh's domestic airport and maritime crafts; Umluj
 *   residents are about an hour from Yanbu's airport; winter snow on Jabal
 *   al-Lawz; NEOM, AMAALA and the Red Sea Project.
 * - Airport: Prince Sultan bin Abdulaziz International Airport (TUU), about
 *   5 km from the city centre. Context only.
 *
 * Deliberately NOT published: the "3,500 years old" castle claim and the
 * Qur'anic "dwellers in the wood" identification (unsupported), opening
 * hours, admission, travel times, and any service or availability wording.
 */

type B = Bilingual<string>;

export type TabukPlace = { name: B; detail: B };

export type TabukContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  facts: { heading: B; items: { label: B; value: B; note: B }[]; source: B };
  about: { heading: B; paragraphs: B[] };
  castle: { eyebrow: B; name: B; paragraphs: B[] };
  spring: { name: B; paragraphs: B[] };
  mosque: { eyebrow: B; name: B; imageKey: SiteImageKey; paragraphs: B[] };
  railway: { name: B; imageKey: SiteImageKey; paragraphs: B[]; caption: B };
  province: { heading: B; lead: B; groups: { heading: B; places: TabukPlace[] }[]; note: B };
  enquiry: { heading: B; lead: B; steps: { title: B; body: B }[]; note: B };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

export const tabuk: TabukContent = {
  routeKey: "tabuk",
  imageKey: "tabuk-castle",

  seo: {
    title: {
      en: "Tabuk Private Transfers | Request a Quote",
      ar: "خدمات النقل الخاص في تبوك | اطلب عرض سعر",
    },
    description: {
      en: "A guide to Tabuk in north-west Saudi Arabia: its castle, Al-Tawbah Mosque, the Hejaz Railway station and Ain al-Sukkar. Send journey details for a quote.",
      ar: "دليل إلى تبوك في شمال غرب المملكة: قلعتها ومسجد التوبة ومحطة سكة حديد الحجاز وعين السكر. أرسل تفاصيل رحلتك لطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Tabuk", ar: "تبوك" },

  hero: {
    eyebrow: { en: "Tabuk Province · North-west Saudi Arabia", ar: "منطقة تبوك · شمال غرب المملكة" },
    h1: { en: "Tabuk, the northern gateway", ar: "تبوك، بوابة الشمال" },
    lead: {
      en: "The largest city in Tabuk Province, on the old road from the Levant to Madinah. A castle beside an ancient spring, a mosque tied to the Prophet's expedition, and a station from the Hejaz Railway — all in one city.",
      ar: "كبرى مدن منطقة تبوك، على الطريق القديم بين الشام والمدينة المنورة. قلعة بجوار عين قديمة، ومسجد يرتبط بغزوة تبوك، ومحطة من محطات سكة حديد الحجاز، في مدينة واحدة.",
    },
  },

  facts: {
    heading: { en: "Tabuk at a glance", ar: "تبوك في سطور" },
    items: [
      {
        label: { en: "Regional centre", ar: "مقر المنطقة" },
        value: { en: "Tabuk Province", ar: "منطقة تبوك" },
        note: { en: "Its largest city, by area and by population.", ar: "كبرى مدنها مساحةً وسكانًا." },
      },
      {
        label: { en: "Population", ar: "عدد السكان" },
        value: { en: "623,665", ar: "623,665" },
        note: { en: "About 70% of the province's people (2022 census).", ar: "نحو 70% من سكان المنطقة (تعداد 2022)." },
      },
      {
        label: { en: "Elevation", ar: "الارتفاع" },
        value: { en: "600–800 m", ar: "600–800 م" },
        note: { en: "A low-lying plain, with a dry desert climate.", ar: "سهل منبسط ذو مناخ صحراوي جاف." },
      },
      {
        label: { en: "From Madinah", ar: "من المدينة المنورة" },
        value: { en: "~700 km north", ar: "~700 كم شمالًا" },
        note: { en: "Hence its name, the Northern Gateway.", ar: "ومن هنا لُقّبت ببوابة الشمال." },
      },
    ],
    source: { en: "Figures: Saudipedia.", ar: "الأرقام: سعوديبيديا." },
  },

  about: {
    heading: { en: "A city on the pilgrim road", ar: "مدينة على طريق الحجاج" },
    paragraphs: [
      {
        en: "Tabuk sits in the north-west of the Kingdom and is the administrative centre of Tabuk Province. For centuries it lay on the route that caravans and pilgrims followed south from the Levant to Madinah, and it remained the peninsula's gateway towards the Levant after the Prophet's expedition here.",
        ar: "تقع تبوك في شمال غرب المملكة، وهي المقر الإداري لمنطقة تبوك. ظلت قرونًا على الطريق الذي سلكته القوافل والحجاج جنوبًا من الشام إلى المدينة المنورة، وبقيت بوابة الجزيرة العربية نحو الشام بعد غزوة تبوك.",
      },
      {
        en: "Today it is a large modern city — home to the University of Tabuk, founded in 2006 — while its oldest landmarks stand close together near the historic centre.",
        ar: "وهي اليوم مدينة حديثة كبيرة تضم جامعة تبوك التي أُسست عام 2006، فيما تتقارب معالمها الأقدم قرب وسطها التاريخي.",
      },
    ],
  },

  castle: {
    eyebrow: { en: "Side by side in the old centre", ar: "متجاوران في الوسط القديم" },
    name: { en: "Tabuk Castle", ar: "قلعة تبوك" },
    paragraphs: [
      {
        en: "A two-storey fort that served as a station on the Levant Hajj route. The present building dates from the Ottoman sixteenth century, raised on the ruins of an older fort, and has been restored several times since.",
        ar: "حصن من طابقين كان محطة على طريق الحج الشامي. يعود البناء الحالي إلى القرن السادس عشر الميلادي في العهد العثماني، وقد شُيّد على أنقاض حصن أقدم، ورُمّم مرات عدة منذ ذلك الحين.",
      },
      {
        en: "Inside are an open courtyard with a well, rooms on two floors, a mosque on each floor and watchtowers. After a restoration completed in 2013 it opened as the Tabuk Archaeological Castle Museum.",
        ar: "وفي داخله فناء مكشوف به بئر، وغرف على طابقين، ومسجد في كل طابق، وأبراج للمراقبة. وبعد ترميم اكتمل عام 2013 افتُتح متحفًا باسم متحف قلعة تبوك الأثرية.",
      },
    ],
  },

  spring: {
    name: { en: "Ain al-Sukkar", ar: "عين السكر" },
    paragraphs: [
      {
        en: "The spring beside the castle is the oldest in Tabuk, and for a long time it was the town's only source of water for its crops.",
        ar: "العين المجاورة للقلعة هي أقدم عيون تبوك، وظلت زمنًا طويلًا المصدر الوحيد لري مزروعات البلدة.",
      },
      {
        en: "Tradition holds that the Prophet ﷺ and his companions camped near it during the expedition of Tabuk.",
        ar: "ويُروى أن النبي ﷺ وأصحابه نزلوا قربها في غزوة تبوك.",
      },
    ],
  },

  mosque: {
    eyebrow: { en: "The Prophet's Mosque of Tabuk", ar: "المسجد النبوي في تبوك" },
    name: { en: "Al-Tawbah Mosque", ar: "مسجد التوبة" },
    imageKey: "tabuk-al-tawbah-mosque",
    paragraphs: [
      {
        en: "Also known as the Prophet's Mosque, because the Prophet ﷺ prayed on this site during the expedition of Tabuk. It was first built of clay with a roof of palm fronds.",
        ar: "ويُعرف أيضًا بالمسجد النبوي، لأن النبي ﷺ صلّى في موضعه خلال غزوة تبوك. وقد بُني أول مرة من الطين وسُقف بجريد النخل.",
      },
      {
        en: "It was rebuilt by order of King Faisal, closely following the design of the Prophet's Mosque in Madinah.",
        ar: "ثم أُعيد بناؤه بأمر الملك فيصل على طراز قريب من المسجد النبوي في المدينة المنورة.",
      },
    ],
  },

  railway: {
    name: { en: "The Hejaz Railway in Tabuk", ar: "سكة حديد الحجاز في تبوك" },
    imageKey: "tabuk-hejaz-railway-1906",
    paragraphs: [
      {
        en: "The first train reached Tabuk in 1906. The town was one of the main stations on the line between Damascus and Madinah, which was put out of action during the First World War.",
        ar: "وصل أول قطار إلى تبوك عام 1906، وكانت من المحطات الرئيسية على الخط الممتد بين دمشق والمدينة المنورة، الذي توقف خلال الحرب العالمية الأولى.",
      },
      {
        en: "The station's group of buildings in the city has been restored as a landmark of the province.",
        ar: "وقد رُمّمت مباني المحطة في المدينة لتصبح معلمًا من معالم المنطقة.",
      },
    ],
    caption: {
      en: "Laying track near Tabuk, 1906. Photograph: Bernhard Moritz (public domain, US Library of Congress).",
      ar: "مدّ القضبان قرب تبوك عام 1906. تصوير برنهارد موريتس (ملكية عامة، مكتبة الكونغرس الأمريكية).",
    },
  },

  province: {
    heading: { en: "The wider province", ar: "المنطقة الأوسع" },
    lead: {
      en: "Tabuk City is one part of a large province that reaches the Gulf of Aqaba and the Red Sea. Besides the city, it has six governorates — five with a coastline and one inland — and in winter snow falls on the peaks of Jabal al-Lawz.",
      ar: "مدينة تبوك جزء من منطقة واسعة تطل على خليج العقبة والبحر الأحمر. وتضم إلى جانب المدينة ست محافظات، خمس منها ساحلية وواحدة في الداخل، وفي الشتاء تكسو الثلوج قمم جبل اللوز.",
    },
    groups: [
      {
        heading: { en: "On the coast", ar: "على الساحل" },
        places: [
          {
            name: { en: "Haql · Al-Bad' · Duba", ar: "حقل · البدع · ضباء" },
            detail: { en: "Coastal governorates on the province's shores along the Gulf of Aqaba and the Red Sea.", ar: "محافظات ساحلية على شواطئ المنطقة الممتدة على خليج العقبة والبحر الأحمر." },
          },
          {
            name: { en: "Al-Wajh", ar: "الوجه" },
            detail: { en: "Known in the past for shipbuilding and fishing crafts; it has a domestic airport.", ar: "اشتهرت قديمًا بصناعة السفن وأدوات الصيد، ولها مطار داخلي." },
          },
          {
            name: { en: "Umluj", ar: "أملج" },
            detail: { en: "In the south of the province, near its boundary with the Madinah region.", ar: "في جنوب المنطقة قرب حدودها مع منطقة المدينة المنورة." },
          },
        ],
      },
      {
        heading: { en: "Inland", ar: "في الداخل" },
        places: [
          {
            name: { en: "Tayma", ar: "تيماء" },
            detail: { en: "The one governorate without a coastline, known for its ancient inscriptions and archaeological sites.", ar: "المحافظة الوحيدة بلا ساحل، وتشتهر بنقوشها القديمة ومواقعها الأثرية." },
          },
        ],
      },
    ],
    note: {
      en: "The province is also home to the NEOM, AMAALA and Red Sea developments. These places are described for context only: transfers to them, and to the governorates above, are not confirmed, so this page does not offer them.",
      ar: "وتحتضن المنطقة كذلك مشروعات نيوم وأمالا والبحر الأحمر. نذكر هذه الأماكن للتعريف فقط، فالتوصيل إليها وإلى المحافظات المذكورة غير مؤكد، ولذلك لا تعرضه هذه الصفحة.",
    },
  },

  enquiry: {
    heading: { en: "How a Tabuk enquiry works", ar: "كيف يُعالَج طلبك في تبوك" },
    lead: {
      en: "We have not yet confirmed which journeys we can arrange in Tabuk. You are welcome to send your journey details, and we will review them.",
      ar: "لم نؤكد بعدُ الرحلات التي يمكننا ترتيبها في تبوك. يسعدنا أن ترسل تفاصيل رحلتك لنراجعها.",
    },
    steps: [
      {
        title: { en: "Send the details", ar: "أرسل التفاصيل" },
        body: {
          en: "Where the journey starts and ends, the date and time, and how many passengers and suitcases.",
          ar: "مكان بداية الرحلة ونهايتها، والتاريخ والوقت، وعدد الركاب والحقائب.",
        },
      },
      {
        title: { en: "We review it", ar: "نراجع الطلب" },
        body: {
          en: "We check whether we can arrange that journey and reply to tell you.",
          ar: "نتحقق مما إذا كان بإمكاننا ترتيب هذه الرحلة، ونرد عليك بالنتيجة.",
        },
      },
      {
        title: { en: "A written price, if we can", ar: "سعر مكتوب إن أمكن" },
        body: {
          en: "If we can arrange it, we send a written price for you to consider.",
          ar: "إن أمكننا ترتيبها، نرسل إليك سعرًا مكتوبًا لتنظر فيه.",
        },
      },
    ],
    note: {
      en: "A quote request is not a booking. Nothing is confirmed or paid until you accept a written quotation.",
      ar: "طلب عرض السعر ليس حجزًا، ولا يُؤكَّد شيء ولا يُدفع حتى توافق على عرض سعر مكتوب.",
    },
  },

  faqHeading: { en: "Tabuk: common questions", ar: "تبوك: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Where is Tabuk?", ar: "أين تقع تبوك؟" },
      answer: {
        en: "In the north-west of Saudi Arabia, about 700 km north of Madinah. It is the administrative centre of Tabuk Province and stands on a plain 600–800 m above sea level.",
        ar: "في شمال غرب المملكة العربية السعودية، على بعد نحو 700 كم شمال المدينة المنورة. وهي المقر الإداري لمنطقة تبوك، وتقع على سهل يرتفع بين 600 و800 م عن سطح البحر.",
      },
    },
    {
      question: { en: "What is Tabuk known for?", ar: "بماذا تشتهر تبوك؟" },
      answer: {
        en: "Its place in early Islamic history as the site of the expedition of Tabuk, and the landmarks that recall it: Tabuk Castle on the old Levant Hajj route, Al-Tawbah Mosque, Ain al-Sukkar and the Hejaz Railway station.",
        ar: "بمكانتها في التاريخ الإسلامي المبكر موضعًا لغزوة تبوك، وبالمعالم التي تذكّر بها: قلعة تبوك على طريق الحج الشامي القديم، ومسجد التوبة، وعين السكر، ومحطة سكة حديد الحجاز.",
      },
    },
    {
      question: { en: "Which places are in the wider Tabuk region?", ar: "ما الأماكن التي تضمها منطقة تبوك؟" },
      answer: {
        en: "Besides Tabuk City, the province has six governorates: Duba, Haql, Al-Bad', Al-Wajh and Umluj on the coast, and Tayma inland. We describe them for context only; transfers to them are not confirmed.",
        ar: "تضم المنطقة إلى جانب مدينة تبوك ست محافظات: ضباء وحقل والبدع والوجه وأملج على الساحل، وتيماء في الداخل. نذكرها للتعريف فقط، والتوصيل إليها غير مؤكد.",
      },
    },
    {
      question: { en: "How can I request a transfer quote in Tabuk?", ar: "كيف أطلب عرض سعر للتوصيل في تبوك؟" },
      answer: {
        en: "Use the quote form to send the pickup and destination, the date and time, and the number of passengers. We review the request and reply to say whether we can arrange it. A request is not a booking.",
        ar: "استخدم نموذج طلب عرض السعر لإرسال نقطة الانطلاق والوجهة، والتاريخ والوقت، وعدد الركاب. نراجع الطلب ونرد عليك لنخبرك إن كان بإمكاننا ترتيبه. والطلب ليس حجزًا.",
      },
    },
    {
      question: { en: "Do you offer airport or intercity transfers in Tabuk?", ar: "هل تقدّمون التوصيل من المطار أو بين المدن في تبوك؟" },
      answer: {
        en: "Not at present. Tabuk's airport is Prince Sultan bin Abdulaziz International Airport, about 5 km from the city centre, but airport pickups, intercity journeys and other specific services in the region are not confirmed. You are welcome to send your journey details for review.",
        ar: "ليس حاليًا. مطار تبوك هو مطار الأمير سلطان بن عبدالعزيز الدولي على بعد نحو 5 كم من وسط المدينة، لكن الاستقبال من المطار والرحلات بين المدن وغيرها من الخدمات في المنطقة غير مؤكدة. ويسعدنا أن ترسل تفاصيل رحلتك لنراجعها.",
      },
    },
  ],

  relatedHeading: { en: "Destinations we cover", ar: "وجهات نخدمها" },

  related: [
    {
      routeKey: "madinah",
      label: { en: "Madinah", ar: "المدينة المنورة" },
      note: {
        en: "The end of the old pilgrim road south from Tabuk: airport, station, hotels and Ziyarat.",
        ar: "نهاية طريق الحجاج القديم جنوبًا من تبوك: المطار والقطار والفنادق والمزارات.",
      },
    },
    {
      routeKey: "alula",
      label: { en: "AlUla", ar: "العلا" },
      note: {
        en: "Another north-western destination: airport, Old Town and Hegra.",
        ar: "وجهة أخرى في الشمال الغربي: المطار والبلدة القديمة والحِجر.",
      },
    },
    {
      routeKey: "riyadh",
      label: { en: "Riyadh", ar: "الرياض" },
      note: {
        en: "Airport, hotels and journeys from the capital.",
        ar: "المطار والفنادق والرحلات من العاصمة.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "Jeddah", ar: "جدة" },
      note: {
        en: "Airport, hotels and city journeys on the Red Sea coast.",
        ar: "المطار والفنادق والتنقل في المدينة على ساحل البحر الأحمر.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Tabuk", ar: "تبوك" },
    heading: { en: "Send your journey details", ar: "أرسل تفاصيل رحلتك" },
    body: {
      en: "We review each request and reply to say whether we can arrange it.",
      ar: "نراجع كل طلب ونرد عليك لنخبرك إن كان بإمكاننا ترتيبه.",
    },
    button: { en: "Request a quote", ar: "اطلب عرض سعر" },
  },
};
