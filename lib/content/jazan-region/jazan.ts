import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Jazan, Sabya and Abu Arish — the Jazan Region hub.
 *
 * Owner-confirmed coverage (research folder, jazan-najran/04, 10 Nov 2026):
 * - local transfers within Jazan city;
 * - local transfers serving Sabya;
 * - local transfers serving Abu Arish.
 * NOT confirmed, so never offered or implied here: airport pickups and
 * drop-offs, hotel transfers, journeys between the three areas (flagged to
 * the owner), intercity routes, the Farasan ferry terminal, Fayfa or any
 * other town, sightseeing, and border or restricted areas.
 *
 * Facts (jazan-najran/02):
 * - Jazan city is the administrative capital of Jazan Province, on the Red
 *   Sea, which borders Yemen — Saudipedia (F1).
 * - Sabya: the province's largest governorate by area and population, its
 *   "cultural and historical center", ~36 km from Jazan city — Saudipedia (F23).
 * - Abu Arish: bordered to the west by the city of Jazan; the historic
 *   al-Qubab Mosque with eighteen domes — Saudipedia (F23).
 * - Jazan Heritage Village: Tihami, mountain and Farasani house styles, no
 *   entry tickets — Visit Saudi (F16).
 * - King Abdullah bin Abdulaziz International Airport (GIZ), ~3 km from the
 *   city centre — Saudipedia (F19). Context only: no operational status, no
 *   terminal, capacity or opening claims (F10–F14).
 * - Farasan Islands: reached by a government ferry from Jazan Port; a
 *   protected area and the Kingdom's first UNESCO Man and the Biosphere site
 *   — Visit Saudi, Zawya (F8). No timetable or crossing time is published.
 * - Fayfa: ~120 km north-east of Jazan, over 1,800 m, on the western slopes
 *   of the Sarawat Mountains — Saudipedia (F22).
 *
 * Controlled-site wording matches the approved standard.
 */

type B = Bilingual<string>;

export type JazanArea = {
  id: "jazan-city" | "sabya" | "abu-arish";
  name: B;
  role: B;
  paragraphs: B[];
  service: B;
};

export type JazanPlace = { id: string; name: B; marker: B; detail: B; note: B };

export type JazanContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  areas: { heading: B; lead: B; sections: JazanArea[] };
  scope: { heading: B; offered: B[]; notOfferedHeading: B; notOffered: B[]; restricted: B };
  context: { heading: B; lead: B; places: JazanPlace[] };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

const service = (en: string, ar: string): B => ({
  en: `Our local drivers take you between addresses in ${en}. Give us the pickup and the destination; where the car can stop is confirmed for each journey.`,
  ar: `ينقلك سائقونا المحليون بين العناوين في ${ar}. زوّدنا بنقطة الانطلاق والوجهة، ونؤكد مكان توقف السيارة لكل رحلة.`,
});

export const jazan: JazanContent = {
  routeKey: "jazan",
  imageKey: "jazan-coast-sunset",

  seo: {
    title: {
      en: "Jazan, Sabya & Abu Arish Private Transfers | Local Journeys",
      ar: "توصيل خاص في جازان وصبيا وأبو عريش | تنقلات محلية",
    },
    description: {
      en: "Private local transfers in Jazan city, Sabya and Abu Arish with our local drivers. Send the pickup and destination addresses for a written quotation.",
      ar: "توصيل خاص محلي في مدينة جازان وصبيا وأبو عريش مع سائقينا المحليين. أرسل عنوان الانطلاق والوجهة واحصل على عرض سعر مكتوب.",
    },
  },

  crumbLabel: { en: "Jazan, Sabya & Abu Arish", ar: "جازان وصبيا وأبو عريش" },

  hero: {
    eyebrow: { en: "Jazan Region · Red Sea coast", ar: "منطقة جازان · ساحل البحر الأحمر" },
    h1: {
      en: "Private transfers in Jazan, Sabya and Abu Arish",
      ar: "توصيل خاص في جازان وصبيا وأبو عريش",
    },
    lead: {
      en: "Jazan city is the capital of Jazan Province on the Red Sea coast. Sabya, to the north, is the province's largest governorate, and Abu Arish lies inland to the east. Our local drivers provide private transfers in each of the three, between the addresses you give us, with the pickup point confirmed for every journey.",
      ar: "مدينة جازان عاصمة منطقة جازان على ساحل البحر الأحمر، وصبيا شمالها أكبر محافظات المنطقة، وأبو عريش في الداخل إلى الشرق. يقدّم سائقونا المحليون التوصيل الخاص في كل منها بين العناوين التي تحددها، ونؤكد نقطة الاستقبال لكل رحلة.",
    },
  },

  areas: {
    heading: { en: "Three areas we serve", ar: "ثلاث مناطق نخدمها" },
    lead: {
      en: "Tell us which of the three your journey is in, and the exact addresses.",
      ar: "أخبرنا في أي منها تكون رحلتك، وبالعناوين بدقة.",
    },
    sections: [
      {
        id: "jazan-city",
        name: { en: "Jazan city", ar: "مدينة جازان" },
        role: { en: "The provincial capital, on the coast", ar: "عاصمة المنطقة على الساحل" },
        paragraphs: [
          {
            en: "The seat of the province's emirate, facing the Red Sea. Its Heritage Village gathers the region's three building traditions — coastal Tihami, mountain and Farasani houses — and Visit Saudi notes that it has no entry tickets.",
            ar: "مقر إمارة المنطقة، ويطل على البحر الأحمر. وتجمع القرية التراثية فيها أنماط البناء الثلاثة في المنطقة: البيوت التهامية الساحلية والجبلية والفرسانية، وتذكر روح السعودية أنها بلا تذاكر دخول.",
          },
        ],
        service: service("Jazan city", "مدينة جازان"),
      },
      {
        id: "sabya",
        name: { en: "Sabya", ar: "صبيا" },
        role: { en: "The province's largest governorate", ar: "أكبر محافظات المنطقة" },
        paragraphs: [
          {
            en: "About 36 km from Jazan city, Sabya is the largest governorate in the province by both area and population, and Saudipedia describes it as the province's cultural and historical centre, with more than a hundred villages under its administration.",
            ar: "على بعد نحو 36 كم من مدينة جازان، وهي أكبر محافظات المنطقة مساحةً وسكانًا، وتصفها سعوديبيديا بالمركز الثقافي والتاريخي للمنطقة، ويتبعها إداريًا أكثر من مئة قرية.",
          },
        ],
        service: service("Sabya", "صبيا"),
      },
      {
        id: "abu-arish",
        name: { en: "Abu Arish", ar: "أبو عريش" },
        role: { en: "Inland, east of Jazan city", ar: "في الداخل شرق مدينة جازان" },
        paragraphs: [
          {
            en: "Bordered to the west by the city of Jazan, Abu Arish is home to some of the province's historic mosques, among them al-Qubab, named for its eighteen domes.",
            ar: "تحدها مدينة جازان من الغرب، وفيها بعض المساجد التاريخية في المنطقة، ومنها مسجد القباب الذي سُمّي بقبابه الثماني عشرة.",
          },
        ],
        service: service("Abu Arish", "أبو عريش"),
      },
    ],
  },

  scope: {
    heading: { en: "What we offer here", ar: "ما نقدّمه هنا" },
    offered: [
      { en: "Local transfers in Jazan city", ar: "التوصيل داخل مدينة جازان" },
      { en: "Local transfers in Sabya", ar: "التوصيل في صبيا" },
      { en: "Local transfers in Abu Arish", ar: "التوصيل في أبو عريش" },
    ],
    notOfferedHeading: { en: "Not offered on this page at present", ar: "غير متاح في هذه الصفحة حاليًا" },
    notOffered: [
      { en: "Pickups and drop-offs at Jazan's airport", ar: "الاستقبال والتوصيل في مطار جازان" },
      { en: "Hotel transfers", ar: "التوصيل من الفنادق وإليها" },
      { en: "Journeys between Jazan city, Sabya and Abu Arish", ar: "الرحلات بين مدينة جازان وصبيا وأبو عريش" },
      { en: "The Farasan ferry, Fayfa or other towns in the province", ar: "عبّارة فرسان أو فيفاء أو المدن الأخرى في المنطقة" },
      { en: "Long-distance journeys to other cities", ar: "الرحلات الطويلة إلى المدن الأخرى" },
    ],
    restricted: {
      en: "Jazan Province borders Yemen. We do not offer journeys to border crossings or restricted areas. Where a site is gated or controlled, drop-off may be possible at an agreed entrance or gate; entry inside is not included, and security permission and internal access are not guaranteed.",
      ar: "تحد منطقة جازان اليمن، ولا نقدّم رحلات إلى المنافذ الحدودية أو المناطق المقيّدة. وفي المواقع المسوّرة أو الخاضعة للرقابة قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى الداخل، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
    },
  },

  context: {
    heading: { en: "The coast, the islands and the mountains", ar: "الساحل والجزر والجبال" },
    lead: {
      en: "Places you will hear about in the province. They are described for context; journeys to them are not among the services on this page.",
      ar: "أماكن ستسمع عنها في المنطقة، نذكرها للتعريف فقط، والرحلات إليها ليست ضمن خدمات هذه الصفحة.",
    },
    places: [
      {
        id: "airport",
        name: { en: "King Abdullah bin Abdulaziz International Airport", ar: "مطار الملك عبدالله بن عبدالعزيز الدولي" },
        marker: { en: "~3 km from the city centre", ar: "~3 كم من وسط المدينة" },
        detail: {
          en: "Jazan's airport (GIZ), on the edge of the city.",
          ar: "مطار جازان (GIZ)، على أطراف المدينة.",
        },
        note: {
          en: "Airport pickups and drop-offs are not among the services on this page.",
          ar: "الاستقبال والتوصيل في المطار ليسا ضمن خدمات هذه الصفحة.",
        },
      },
      {
        id: "farasan",
        name: { en: "Farasan Islands", ar: "جزر فرسان" },
        marker: { en: "Offshore", ar: "في البحر" },
        detail: {
          en: "An archipelago in the Red Sea, reached by a government ferry from Jazan Port. The islands are a protected area and, as Visit Saudi notes, the Kingdom's first site in UNESCO's Man and the Biosphere programme.",
          ar: "أرخبيل في البحر الأحمر يُوصل إليه بعبّارة حكومية من ميناء جازان. والجزر محمية طبيعية، وتذكر روح السعودية أنها أول موقع في المملكة ضمن برنامج اليونسكو للإنسان والمحيط الحيوي.",
        },
        note: {
          en: "The ferry is booked with its operator, not with us, and journeys to the ferry terminal are not among the services on this page.",
          ar: "العبّارة تُحجز مع مشغّلها لا عن طريقنا، والرحلات إلى محطة العبّارة ليست ضمن خدمات هذه الصفحة.",
        },
      },
      {
        id: "fayfa",
        name: { en: "Fayfa", ar: "فيفاء" },
        marker: { en: "~120 km north-east", ar: "~120 كم شمال شرق" },
        detail: {
          en: "A mountain governorate on the western slopes of the Sarawat range, at more than 1,800 m — the highest part of the province.",
          ar: "محافظة جبلية على السفوح الغربية لجبال السروات، على ارتفاع يزيد على 1,800 م، في أعلى أجزاء المنطقة.",
        },
        note: {
          en: "Journeys to Fayfa are not among the services on this page.",
          ar: "الرحلات إلى فيفاء ليست ضمن خدمات هذه الصفحة.",
        },
      },
    ],
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The area — Jazan city, Sabya or Abu Arish — and the pickup and destination addresses within it.",
        ar: "المنطقة، مدينة جازان أو صبيا أو أبو عريش، وعنوانا الانطلاق والوجهة فيها.",
      },
      {
        en: "The date and time, and how many passengers and suitcases.",
        ar: "التاريخ والوقت، وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and journey details are confirmed before the booking is accepted; nothing is paid until you accept.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز، ولا يُدفع شيء حتى توافق.",
      },
    ],
  },

  faqHeading: { en: "Jazan, Sabya and Abu Arish: common questions", ar: "جازان وصبيا وأبو عريش: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Which areas of Jazan do you cover?", ar: "ما المناطق التي تخدمونها في جازان؟" },
      answer: {
        en: "Our local drivers provide private transfers in Jazan city, in Sabya and in Abu Arish. Tell us which of the three your journey is in and the pickup and destination addresses, and we reply with a written quotation.",
        ar: "يقدّم سائقونا المحليون التوصيل الخاص في مدينة جازان وفي صبيا وفي أبو عريش. أخبرنا في أي منها تكون رحلتك وبعنواني الانطلاق والوجهة، ونرد بعرض سعر مكتوب.",
      },
    },
    {
      question: { en: "Do you pick up from Jazan's airport?", ar: "هل تستقبلون من مطار جازان؟" },
      answer: {
        en: "Airport pickups and drop-offs are not among the services on this page at present. This page covers local transfers in Jazan city, Sabya and Abu Arish.",
        ar: "الاستقبال والتوصيل في المطار ليسا ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل في مدينة جازان وصبيا وأبو عريش.",
      },
    },
    {
      question: { en: "Can you take us to the Farasan ferry or to Fayfa?", ar: "هل يمكنكم نقلنا إلى عبّارة فرسان أو إلى فيفاء؟" },
      answer: {
        en: "Journeys to the ferry terminal, to Fayfa and to other towns in the province are not among the services on this page at present. The Farasan ferry itself is booked with its operator. We do not arrange tours or excursions.",
        ar: "الرحلات إلى محطة العبّارة وإلى فيفاء والمدن الأخرى في المنطقة ليست ضمن خدمات هذه الصفحة حاليًا، وعبّارة فرسان تُحجز مع مشغّلها. ولا نرتّب جولات سياحية أو رحلات استكشافية.",
      },
    },
    {
      question: { en: "Do you drive from Jazan to Abha, Najran or Riyadh?", ar: "هل توصلون من جازان إلى أبها أو نجران أو الرياض؟" },
      answer: {
        en: "Long-distance journeys from the Jazan region are not among the services on this page at present. This page covers local transfers in Jazan city, Sabya and Abu Arish.",
        ar: "الرحلات الطويلة من منطقة جازان ليست ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل في مدينة جازان وصبيا وأبو عريش.",
      },
    },
    {
      question: { en: "Can you drive into a gated, military or border area?", ar: "هل يمكنكم الدخول إلى منطقة مسوّرة أو عسكرية أو حدودية؟" },
      answer: {
        en: "We do not offer journeys to border crossings or restricted areas. For a gated or controlled site, drop-off may be possible at an agreed entrance or gate, but security permission and internal access are controlled by the site, not by us, and are not guaranteed.",
        ar: "لا نقدّم رحلات إلى المنافذ الحدودية أو المناطق المقيّدة. وفي المواقع المسوّرة أو الخاضعة للرقابة قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، لكن الإذن الأمني والوصول الداخلي يحكمهما الموقع لا نحن، ولا نضمنهما.",
      },
    },
  ],

  relatedHeading: { en: "Other cities we serve", ar: "مدن أخرى نخدمها" },

  related: [
    {
      routeKey: "abha",
      label: { en: "Abha & Khamis Mushait", ar: "أبها وخميس مشيط" },
      note: {
        en: "The Asir highlands to the north: local transfers in both cities.",
        ar: "مرتفعات عسير شمالًا: التوصيل داخل المدينتين.",
      },
    },
    {
      routeKey: "najran",
      label: { en: "Najran", ar: "نجران" },
      note: {
        en: "Local transfers within Najran city, inland to the east.",
        ar: "التوصيل داخل مدينة نجران، في الداخل شرقًا.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "Jeddah", ar: "جدة" },
      note: {
        en: "Airport, hotels and city journeys further up the Red Sea coast.",
        ar: "المطار والفنادق والتنقل في المدينة شمالًا على ساحل البحر الأحمر.",
      },
    },
    {
      routeKey: "taif",
      label: { en: "Taif", ar: "الطائف" },
      note: {
        en: "The highland city at the top of the Al Hada road.",
        ar: "المدينة الجبلية في أعلى طريق الهدا.",
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
  ],

  cta: {
    eyebrow: { en: "Jazan · Sabya · Abu Arish", ar: "جازان · صبيا · أبو عريش" },
    heading: { en: "Request a local transfer quotation", ar: "اطلب عرض سعر للتوصيل المحلي" },
    body: {
      en: "The area, the pickup and destination addresses, the date and how many of you. We reply with a written price.",
      ar: "المنطقة، وعنوانا الانطلاق والوجهة، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a quote", ar: "اطلب عرض سعر" },
  },
};
