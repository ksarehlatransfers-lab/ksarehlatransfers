import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { ClusterFaq, ClusterBlock } from "@/lib/content/riyadh/types";

/**
 * The Riyadh destination hub.
 *
 * Every page in the cluster links back here, so this page's job is to be a
 * junction: say what transport in Riyadh involves, then route people to the
 * right branch. Branches whose pages are not built yet are listed as text
 * with an honest "not yet published" note rather than as links to nowhere.
 */

type B = Bilingual<string>;

export type HubBranch = {
  title: B;
  summary: B;
  /** Set once the branch has a page; otherwise the card is plain text. */
  routeKey?: RouteKey;
  /** Routes under this branch that do have pages. */
  links?: { routeKey: RouteKey; label: B; meta: B }[];
  /** Named pages planned but not published, listed honestly. */
  planned?: B[];
};

export const riyadhHub = {
  seo: {
    // 54 characters. No ampersand: it escapes to `&amp;` in the rendered
    // <title>, which costs four characters of the display budget for nothing.
    title: {
      en: "Riyadh Private Transfers | Airport and Intercity Quotes",
      ar: "نقل خاص في الرياض: المطار وبين المدن | اطلب عرض سعر",
    } satisfies B,
    description: {
      en: "Private car, SUV and van transfers in and from Riyadh — King Khalid International Airport, hotels, railway stations and seven intercity routes from Jeddah and Dammam to Qassim, Taif, Hail and AlUla.",
      ar: "نقل خاص بالسيارات والدفع الرباعي والڤانات داخل الرياض ومنها — مطار الملك خالد الدولي والفنادق ومحطات القطار وسبعة مسارات بين المدن من جدة والدمام إلى القصيم والطائف وحائل والعُلا.",
    } satisfies B,
  },

  crumbLabel: { en: "Riyadh", ar: "الرياض" } satisfies B,

  hero: {
    eyebrow: { en: "Destination · Riyadh", ar: "وجهة · الرياض" } satisfies B,
    h1: {
      en: "Private transfers in and from Riyadh",
      ar: "نقل خاص داخل الرياض ومنها",
    } satisfies B,
    lead: {
      en: "The capital is where most journeys in the Kingdom begin. Airport arrivals, hotel runs, railway station pickups and the long roads east and west — arranged as one private vehicle with a driver, quoted per journey.",
      ar: "العاصمة هي حيث تبدأ معظم الرحلات في المملكة. الوصول من المطار، والتنقل بين الفنادق، والاستقبال من محطات القطار، والطرق الطويلة شرقًا وغربًا — تُرتَّب كسيارة خاصة واحدة مع سائق، وتُسعَّر لكل رحلة.",
    } satisfies B,
  },

  intro: {
    heading: {
      en: "What transport in Riyadh involves",
      ar: "ما الذي يتضمنه التنقل في الرياض",
    } satisfies B,
    paragraphs: [
      {
        en: "Riyadh is large and spread out. Distances inside the city are real distances, the airport sits well to the north of the centre, and the intercity roads leave from opposite edges of the city. A journey that looks short on a map is often forty minutes of driving.",
        ar: "الرياض مدينة واسعة ومتباعدة الأطراف. المسافات داخلها مسافات حقيقية، والمطار يقع بعيدًا شمال المركز، وطرق السفر بين المدن تخرج من أطراف متقابلة. والرحلة التي تبدو قصيرة على الخريطة كثيرًا ما تستغرق أربعين دقيقة قيادة.",
      },
      {
        en: "A private transfer means one vehicle reserved for your party, a driver who knows where you are going, and a price agreed in writing beforehand. It is not a ride-hailing app and not a shared shuttle: nobody else is picked up, and the vehicle does not leave until you do.",
        ar: "النقل الخاص يعني سيارة واحدة محجوزة لمجموعتك، وسائقًا يعرف وجهتك، وسعرًا متفقًا عليه كتابةً مسبقًا. ليس تطبيق طلب سيارة ولا نقلًا مشتركًا: لا يُلتقط أحد غيركم، ولا تغادر السيارة قبلكم.",
      },
      {
        en: "Below are the four kinds of journey people ask us for in Riyadh. Every one of them now has its own page — the seven intercity routes, the airport, both railway stations and hotel pickups — so each card below is a link rather than a promise.",
        ar: "فيما يلي أربعة أنواع من الرحلات يطلبها الناس منّا في الرياض. ولكل منها الآن صفحته الخاصة — المسارات السبعة بين المدن، والمطار، ومحطتا القطار، والاستقبال من الفنادق — فكل بطاقة أدناه رابط لا وعد.",
      },
    ],
  } satisfies ClusterBlock,

  branchesHeading: {
    en: "Four ways we move people in Riyadh",
    ar: "أربع طرق لنقل الناس في الرياض",
  } satisfies B,

  // Typed explicitly rather than inferred. Every branch now has a page, so
  // no branch carries a `planned` list — and without this annotation
  // TypeScript narrows `planned` out of the inferred union entirely, which
  // breaks the hub page's honest "being written" rendering for any branch
  // added later. The capability belongs in the type, not in whether today's
  // data happens to use it.
  branches: [
    {
      title: { en: "Intercity journeys", ar: "الرحلات بين المدن" },
      summary: {
        en: "The long roads out of the capital. Published routes are below; any other Saudi city is quoted on request.",
        ar: "الطرق الطويلة الخارجة من العاصمة. المسارات المنشورة أدناه، وأي مدينة سعودية أخرى تُسعَّر عند الطلب.",
      },
      links: [
        {
          routeKey: "riyadhToJeddah",
          label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
          meta: { en: "~950 km · 9–10 hrs", ar: "~950 كم · 9–10 ساعات" },
        },
        {
          routeKey: "riyadhToDammam",
          label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
          meta: { en: "~400 km · 3.5–4.5 hrs", ar: "~400 كم · 3.5–4.5 ساعات" },
        },
        {
          routeKey: "riyadhToAlKhobar",
          label: { en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" },
          meta: { en: "~420 km · ~4 hrs", ar: "~420 كم · ~4 ساعات" },
        },
        {
          routeKey: "riyadhToBuraydah",
          label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },
          meta: { en: "~360 km · 3.5–4.5 hrs", ar: "~360 كم · 3.5–4.5 ساعة" },
        },
        {
          routeKey: "riyadhToTaif",
          label: { en: "Riyadh to Taif", ar: "الرياض إلى الطائف" },
          meta: { en: "~790 km · 8–9 hrs", ar: "~790 كم · 8–9 ساعات" },
        },
        {
          routeKey: "riyadhToHail",
          label: { en: "Riyadh to Hail", ar: "الرياض إلى حائل" },
          meta: { en: "~630 km · 5.5–6.5 hrs", ar: "~630 كم · 5.5–6.5 ساعة" },
        },
        {
          routeKey: "riyadhToAlUla",
          label: { en: "Riyadh to AlUla", ar: "الرياض إلى العُلا" },
          meta: { en: "~1,050 km · 10–12 hrs", ar: "~1,050 كم · 10–12 ساعة" },
        },
      ],
      // No `planned` list here any more. The four batch-2 routes above are
      // published, and Riyadh→Makkah and Riyadh→Madinah were withdrawn from
      // this phase by owner decision — naming them as "being written" was
      // true when it was written and is not true now. See
      // docs/riyadh-url-inventory.md.
    },
    {
      title: { en: "Airport transfers", ar: "النقل من وإلى المطار" },
      summary: {
        en: "King Khalid International Airport sits north of the city. Arrivals are met inside the terminal and departures are timed back from your flight.",
        ar: "يقع مطار الملك خالد الدولي شمال المدينة. ويُستقبل القادمون داخل الصالة، وتُحسب رحلات المغادرة تراجعيًا من موعد إقلاعك.",
      },
      // One consolidated page, not three. Arrivals, departures and hotel
      // connections are the same intent read in different directions, so they
      // are H2 sections of /riyadh-airport-transfers/ rather than thin pages
      // competing with each other. Decision recorded in
      // docs/riyadh-url-inventory.md; the page shipped 6 November 2026, so
      // this branch is now a live link rather than a "being written" note.
      routeKey: "riyadhAirport",
      links: [
        {
          routeKey: "riyadhAirport",
          label: {
            en: "Riyadh airport transfers",
            ar: "النقل من مطار الرياض",
          },
          meta: {
            en: "~35 km · arrivals and departures",
            ar: "~35 كم · الوصول والمغادرة",
          },
        },
      ],
    },
    {
      title: { en: "Railway station transfers", ar: "النقل من محطات القطار" },
      summary: {
        en: "Riyadh has more than one station and they serve different lines, so the right one depends on where your train came from or is going.",
        ar: "في الرياض أكثر من محطة، وكل منها يخدم خطوطًا مختلفة، فالمحطة الصحيحة تعتمد على وجهة قطارك أو مصدره.",
      },
      // One page, not three. Riyadh has **two** passenger stations, and
      // "Riyadh East" is the name of the East Train network and of the city
      // station it leaves from — not a third station. Each real station gets
      // a section rather than a thin URL of its own. Validated in
      // docs/research/railway-architecture-validation.md; shipped 6 Nov 2026.
      routeKey: "riyadhRailway",
      links: [
        {
          routeKey: "riyadhRailway",
          label: {
            en: "Riyadh railway station transfers",
            ar: "النقل من محطات قطار الرياض",
          },
          meta: {
            en: "Two stations · which one you need",
            ar: "محطتان · أي واحدة تحتاج",
          },
        },
      ],
    },
    {
      title: { en: "Hotel transfers", ar: "النقل من وإلى الفنادق" },
      summary: {
        en: "Door-to-door between a named hotel entrance and the airport, a station, a meeting or another city.",
        ar: "من الباب إلى الباب بين مدخل فندق محدد والمطار أو محطة أو اجتماع أو مدينة أخرى.",
      },
      // Shipped 6 November 2026, so this branch is a live link.
      routeKey: "riyadhHotel",
      links: [
        {
          routeKey: "riyadhHotel",
          label: {
            en: "Riyadh hotel transfers",
            ar: "النقل من فنادق الرياض",
          },
          meta: {
            en: "A named entrance, not a guess",
            ar: "مدخل محدد لا تخمين",
          },
        },
      ],
    },
  ] satisfies HubBranch[],

  /**
   * Beyond the city: the Riyadh Region destinations with their own hubs.
   * Ordered by distance from the capital. Figures match each hub page.
   */
  region: {
    heading: {
      en: "Beyond the city: around the Riyadh Region",
      ar: "خارج المدينة: وجهات في منطقة الرياض",
    } satisfies B,
    lead: {
      en: "Three places in the Riyadh Region now have their own page — a heritage district on the city's edge, a working city to the south-east and a historic town on the road north-west.",
      ar: "ثلاث وجهات في منطقة الرياض لها الآن صفحاتها الخاصة: حي تراثي على طرف المدينة، ومدينة منتجة في الجنوب الشرقي، وبلدة تاريخية على الطريق شمال غرب العاصمة.",
    } satisfies B,
    items: [
      {
        routeKey: "diriyah",
        label: { en: "Diriyah", ar: "الدرعية" },
        meta: { en: "~20 km north-west", ar: "~20 كم شمال غرب" },
        note: {
          en: "At-Turaif and Bujairi Terrace — planning where you arrive and how you get back.",
          ar: "حي الطريف ومطل البجيري، مع تخطيط مكان الوصول وطريقة العودة.",
        },
      },
      {
        routeKey: "alKharj",
        label: { en: "Al Kharj", ar: "الخرج" },
        meta: { en: "~80 km south-east", ar: "~80 كم جنوب شرق" },
        note: {
          en: "Journeys to and from the city, including from the airport — and the honest answer about the train.",
          ar: "الرحلات من الخرج وإليها، ومنها من المطار، والجواب الصريح عن القطار.",
        },
      },
      {
        routeKey: "shaqra",
        label: { en: "Shaqra and Ushaiqer", ar: "شقراء وأشيقر" },
        meta: { en: "~180 km north-west", ar: "~180 كم شمال غرب" },
        note: {
          en: "A road trip to two heritage towns in Al-Washm, for university, family or a day out.",
          ar: "رحلة برية إلى بلدتين تراثيتين في الوشم، للجامعة أو الأهل أو ليوم تراثي.",
        },
      },
    ] satisfies { routeKey: RouteKey; label: B; meta: B; note: B }[],
  },

  practical: {
    heading: { en: "Practical notes", ar: "ملاحظات عملية" } satisfies B,
    items: [
      {
        heading: { en: "Timing across the city", ar: "التوقيت داخل المدينة" },
        paragraphs: [
          {
            en: "Allow more than you think between the airport and the southern or western districts, particularly in the morning and late afternoon. We build the departure time around when you need to arrive rather than quoting the best case.",
            ar: "احسب وقتًا أطول مما تتوقع بين المطار والأحياء الجنوبية أو الغربية، خصوصًا صباحًا وبعد العصر. ونحن نبني وقت الانطلاق على موعد وصولك المطلوب لا على أفضل الاحتمالات.",
          },
        ],
      },
      {
        heading: { en: "Starting an intercity journey", ar: "بدء رحلة بين المدن" },
        paragraphs: [
          {
            en: "Long routes leave from opposite sides of Riyadh — west for Jeddah, east for Dammam and Al Khobar. Where you are staying affects the departure time more than the distance does, so tell us the pickup address when you enquire, not just the city.",
            ar: "تنطلق المسارات الطويلة من جهتين متقابلتين في الرياض — غربًا إلى جدة، وشرقًا إلى الدمام والخبر. ومكان إقامتك يؤثر في وقت الانطلاق أكثر من المسافة، فأخبرنا بعنوان الاستقبال عند الاستفسار لا باسم المدينة فقط.",
          },
        ],
      },
      {
        heading: { en: "What we do not claim", ar: "ما لا ندّعيه" },
        paragraphs: [
          {
            en: "We publish no prices, no fleet photographs and no customer numbers on this site, because none of those are established yet. Every journey is quoted individually and the vehicle category is confirmed in that quotation.",
            ar: "لا ننشر أسعارًا ولا صور أسطول ولا أعداد عملاء في هذا الموقع، لأن أيًّا منها غير مُثبت بعد. فكل رحلة تُسعَّر على حدة، وتُؤكَّد فئة المركبة في عرض السعر ذاته.",
          },
        ],
      },
    ] satisfies ClusterBlock[],
  },

  faqHeading: {
    en: "Transfers in Riyadh: common questions",
    ar: "النقل في الرياض: أسئلة شائعة",
  } satisfies B,

  faqs: [
    {
      question: {
        en: "Which journeys from Riyadh can you arrange?",
        ar: "ما الرحلات التي يمكنكم ترتيبها من الرياض؟",
      },
      answer: {
        en: "Airport pickups and departures at King Khalid International Airport, hotel and address transfers inside the city, railway station pickups, and intercity routes to any Saudi city. Jeddah, Dammam and Al Khobar have detailed pages; the rest are quoted on request in exactly the same way.",
        ar: "الاستقبال والمغادرة في مطار الملك خالد الدولي، والنقل بين الفنادق والعناوين داخل المدينة، والاستقبال من محطات القطار، والرحلات إلى أي مدينة سعودية. ولجدة والدمام والخبر صفحات مفصلة، أما البقية فتُسعَّر عند الطلب بالطريقة نفسها تمامًا.",
      },
    },
    {
      question: {
        en: "How far is King Khalid International Airport from central Riyadh?",
        ar: "كم يبعد مطار الملك خالد الدولي عن وسط الرياض؟",
      },
      answer: {
        en: "About 35 km north of the city centre. Published airport guidance puts the drive at around half an hour when the roads are clear, but treat that as the best case: the northern approaches at peak hours and the terminal access roads can add a good deal to it, so plan a comfortable margin rather than the optimistic figure. We set the pickup time from your flight number, so an arrival delay does not leave you without a vehicle.",
        ar: "نحو 35 كم شمال وسط المدينة. وتقدّر أدلة المطار المنشورة الرحلة بنصف ساعة تقريبًا عند خلو الطرق، لكن اعتبر ذلك أفضل الاحتمالات: فالمداخل الشمالية في ساعات الذروة وطرق الوصول إلى الصالات قد تضيف إليها الكثير، فخطط لهامش مريح لا للرقم المتفائل. ونحدد موعد الاستقبال من رقم رحلتك حتى لا يتركك تأخر الوصول بلا سيارة.",
      },
    },
    {
      question: {
        en: "Can I hire a car and driver for a full day in Riyadh?",
        ar: "هل يمكنني استئجار سيارة مع سائق ليوم كامل في الرياض؟",
      },
      answer: {
        en: "Yes. Day hire is quoted by the day rather than per journey, with the vehicle staying with you between stops. It suits site visits, a day of meetings across the city, or a trip out to the Tuwaiq escarpment and back. Tell us roughly how you plan to use the day.",
        ar: "نعم. يُسعَّر الاستئجار اليومي باليوم لا بالرحلة، مع بقاء السيارة معك بين التوقفات. وهو يناسب زيارات المواقع أو يوم اجتماعات عبر المدينة أو رحلة إلى حافة طويق والعودة. أخبرنا تقريبًا بكيفية استخدامك لليوم.",
      },
    },
    {
      question: {
        en: "Do you cover the railway stations?",
        ar: "هل تغطّون محطات القطار؟",
      },
      answer: {
        en: "Yes — pickups and drop-offs at Riyadh's railway stations are arranged in the same way as an airport transfer. There are two passenger stations serving different lines, so our railway page explains which one you need; if you are not sure, tell us where your train is going and we will name the station for you.",
        ar: "نعم — يُرتَّب الاستقبال والتوصيل في محطات قطار الرياض كما يُرتَّب النقل من المطار. وهناك محطتان للمسافرين تخدمان خطوطًا مختلفة، وصفحة القطار لدينا توضح أي محطة تحتاج؛ وإن لم تكن متأكدًا فأخبرنا بوجهة قطارك ونسمّي لك المحطة.",
      },
    },
    {
      question: {
        en: "Do you publish fixed prices for Riyadh transfers?",
        ar: "هل تنشرون أسعارًا ثابتة لرحلات الرياض؟",
      },
      answer: {
        en: "No. Every journey is quoted individually because the price depends on the exact route, the timing, the vehicle category and any waiting involved. You get a written price before anything is reserved, and nothing is booked until you accept it.",
        ar: "لا. تُسعَّر كل رحلة على حدة لأن السعر يعتمد على المسار بدقة والتوقيت وفئة المركبة وأي وقت انتظار. وتحصل على سعر مكتوب قبل حجز أي شيء، ولا يُحجز شيء حتى توافق عليه.",
      },
    },
  ] satisfies ClusterFaq[],

  cta: {
    eyebrow: { en: "Start in the capital", ar: "ابدأ من العاصمة" } satisfies B,
    heading: {
      en: "Arrange your Riyadh transfer",
      ar: "رتّب رحلتك من الرياض",
    } satisfies B,
    body: {
      en: "Airport, hotel, station or another city — send the two ends of the journey and the date, and we reply with a price.",
      ar: "مطار أو فندق أو محطة أو مدينة أخرى — أرسل طرفي الرحلة والتاريخ، ونرد عليك بالسعر.",
    } satisfies B,
    button: { en: "Get a Riyadh quote", ar: "اطلب عرض سعر للرياض" } satisfies B,
  },
};
