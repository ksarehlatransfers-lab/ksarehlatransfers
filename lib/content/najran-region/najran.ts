import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Najran — the Najran Region hub.
 *
 * Owner-confirmed coverage (research folder, jazan-najran/04, 10 Nov 2026):
 * - local transfers within Najran city.
 * NOT confirmed, so never offered or implied here: airport pickups and
 * drop-offs, hotel transfers, intercity journeys (Abha, Abha Airport,
 * Jazan, Riyadh, Sharurah), Al-Ukhdood or Hima journeys, sightseeing,
 * and border or restricted areas.
 *
 * Facts (jazan-najran/02):
 * - Najran city is the administrative capital of Najran Province; about
 *   71% of the province's people live there — Saudipedia (F4).
 * - Wadi Najran, ~150 km long, divides the city into northern and southern
 *   parts — Saudipedia (F3).
 * - Imarah (Emirate) Palace, in the heart of the old city, built in 1942 (other sources: 1944, so the page says "early 1940s") as
 *   a fortress with towers at its four corners; Al-Aan Palace, west of the
 *   city, built in 1689 and still inhabited; Najran Dam, inaugurated 1982 —
 *   Saudipedia (F4).
 * - Al-Ukhdood: on the southern bank of the Najran Valley, the remains of
 *   the ancient city of Najran — Saudipedia (F4).
 * - Hima Cultural Area: Thar Governorate, ~130 km north of Najran city;
 *   UNESCO World Heritage List, 24 July 2021; rock art over 557 km² —
 *   Saudipedia (F20), UN in Saudi Arabia (F7).
 * - Sharurah: ~370 km east of Najran, on the edge of the Empty Quarter, with
 *   its own domestic airport — Saudipedia (F21).
 * No Najran airport distance, name or status is published (F5, F13–F14).
 *
 * Controlled-site wording matches the approved standard.
 */

type B = Bilingual<string>;

export type NajranPlace = { id: string; name: B; marker: B; detail: B };

export type NajranContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  valley: { heading: B; north: B; south: B; caption: B; service: B };
  city: { id: "najran-city"; heading: B; role: B; imageKey: SiteImageKey; paragraphs: B[]; landmarks: { name: B; detail: B }[]; service: B };
  scope: { heading: B; offered: B[]; notOfferedHeading: B; notOffered: B[]; restricted: B };
  context: { heading: B; lead: B; places: NajranPlace[]; footnote: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

export const najran: NajranContent = {
  routeKey: "najran",
  imageKey: "najran-imarah-palace",

  seo: {
    title: {
      en: "Najran Private Transfers | Local Journeys in the City",
      ar: "توصيل خاص في نجران | تنقلات داخل المدينة",
    },
    description: {
      en: "Private local transfers within Najran city with our local drivers, on both sides of the Najran Valley. Send your addresses for a written quotation.",
      ar: "توصيل خاص داخل مدينة نجران مع سائقينا المحليين، على ضفتي وادي نجران. أرسل عنوان الانطلاق والوجهة واحصل على عرض سعر مكتوب.",
    },
  },

  crumbLabel: { en: "Najran", ar: "نجران" },

  hero: {
    eyebrow: { en: "Najran Region · The southern valley", ar: "منطقة نجران · الوادي الجنوبي" },
    h1: {
      en: "Private transfers in Najran",
      ar: "توصيل خاص في نجران",
    },
    lead: {
      en: "Najran is the capital of its province, and about seven in ten of the province's people live in the city. Our local drivers provide private transfers within Najran city, between the addresses you give us, with the pickup point confirmed for every journey.",
      ar: "نجران عاصمة منطقتها، ويسكن المدينة نحو سبعة من كل عشرة من سكان المنطقة. يقدّم سائقونا المحليون التوصيل الخاص داخل مدينة نجران بين العناوين التي تحددها، ونؤكد نقطة الاستقبال لكل رحلة.",
    },
  },

  valley: {
    heading: { en: "One city, two banks", ar: "مدينة واحدة على ضفتين" },
    north: { en: "North of the valley", ar: "شمال الوادي" },
    south: { en: "South of the valley", ar: "جنوب الوادي" },
    caption: {
      en: "Wadi Najran, one of the Kingdom's largest valleys, runs about 150 km and divides the city into northern and southern parts.",
      ar: "وادي نجران من أكبر أودية المملكة، يمتد نحو 150 كم ويقسم المدينة إلى قسمين شمالي وجنوبي.",
    },
    service: {
      en: "Local transfers within Najran city, on either side of the valley",
      ar: "التوصيل داخل مدينة نجران على جانبي الوادي",
    },
  },

  city: {
    id: "najran-city",
    heading: { en: "Najran city", ar: "مدينة نجران" },
    role: { en: "The provincial capital", ar: "عاصمة المنطقة" },
    imageKey: "najran-mud-tower",
    paragraphs: [
      {
        en: "Najran's character comes from its mud architecture: tall houses raised in courses of clay on foundations of clay mixed with stone, with small windows. The old city, the palms along the valley and the newer districts sit close together.",
        ar: "تستمد نجران طابعها من عمارتها الطينية: بيوت عالية تُرفع طبقات من الطين فوق أساس من الطين المخلوط بالحجارة، بنوافذ صغيرة. ويتجاور فيها البلد القديم ونخيل الوادي والأحياء الأحدث.",
      },
    ],
    landmarks: [
      {
        name: { en: "Imarah (Emirate) Palace", ar: "قصر الإمارة" },
        detail: {
          en: "In the heart of the old city; built in the early 1940s as a fortress, with a round watchtower at each of its four corners.",
          ar: "في قلب البلد القديم، بُني في أوائل الأربعينيات الميلادية على هيئة حصن بأبراج مراقبة دائرية في أركانه الأربعة.",
        },
      },
      {
        name: { en: "Al-Aan Palace", ar: "قصر العان" },
        detail: {
          en: "West of the city; built in 1689 and still lived in.",
          ar: "غرب المدينة، بُني عام 1689 وما زال مأهولًا.",
        },
      },
      {
        name: { en: "Najran Dam", ar: "سد نجران" },
        detail: {
          en: "Inaugurated in 1982.",
          ar: "افتُتح عام 1982.",
        },
      },
    ],
    service: {
      en: "Our local drivers take you between addresses in Najran city. Give us the pickup and the destination; where the car can stop is confirmed for each journey.",
      ar: "ينقلك سائقونا المحليون بين العناوين داخل مدينة نجران. زوّدنا بنقطة الانطلاق والوجهة، ونؤكد مكان توقف السيارة لكل رحلة.",
    },
  },

  scope: {
    heading: { en: "What we offer here", ar: "ما نقدّمه هنا" },
    offered: [{ en: "Local transfers within Najran city", ar: "التوصيل داخل مدينة نجران" }],
    notOfferedHeading: { en: "Not offered on this page at present", ar: "غير متاح في هذه الصفحة حاليًا" },
    notOffered: [
      { en: "Pickups and drop-offs at Najran's airport", ar: "الاستقبال والتوصيل في مطار نجران" },
      { en: "Hotel transfers", ar: "التوصيل من الفنادق وإليها" },
      { en: "Journeys to Al-Ukhdood, Hima, Sharurah or other towns", ar: "الرحلات إلى الأخدود أو حمى أو شرورة أو المدن الأخرى" },
      { en: "Journeys between Najran and Abha, Jazan, Riyadh or other cities", ar: "الرحلات بين نجران وأبها أو جازان أو الرياض أو المدن الأخرى" },
      { en: "Sightseeing or touring", ar: "الجولات السياحية" },
    ],
    restricted: {
      en: "Najran Province borders Yemen. We do not offer journeys to border crossings or restricted areas. Where a site is gated or controlled, drop-off may be possible at an agreed entrance or gate; entry inside is not included, and security permission and internal access are not guaranteed.",
      ar: "تحد منطقة نجران اليمن، ولا نقدّم رحلات إلى المنافذ الحدودية أو المناطق المقيّدة. وفي المواقع المسوّرة أو الخاضعة للرقابة قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى الداخل، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
    },
  },

  context: {
    heading: { en: "Beyond the city", ar: "خارج المدينة" },
    lead: {
      en: "Places you will hear about in the province. They are described for context; journeys to them are not among the services on this page.",
      ar: "أماكن ستسمع عنها في المنطقة، نذكرها للتعريف فقط، والرحلات إليها ليست ضمن خدمات هذه الصفحة.",
    },
    places: [
      {
        id: "al-ukhdood",
        name: { en: "Al-Ukhdood", ar: "الأخدود" },
        marker: { en: "South bank of the valley", ar: "الضفة الجنوبية للوادي" },
        detail: {
          en: "The remains of the ancient city of Najran, with ruins of houses and ancient graves.",
          ar: "بقايا مدينة نجران القديمة، وفيها أطلال بيوت وقبور قديمة.",
        },
      },
      {
        id: "hima",
        name: { en: "Hima Cultural Area", ar: "منطقة حمى الثقافية" },
        marker: { en: "~130 km north · UNESCO 2021", ar: "~130 كم شمالًا · اليونسكو 2021" },
        detail: {
          en: "One of the world's largest rock-art areas, over 557 km² in Thar Governorate, with ancient wells on the old caravan routes. Inscribed on UNESCO's World Heritage List in July 2021.",
          ar: "من أكبر مواقع الفنون الصخرية في العالم، على مساحة تزيد على 557 كم² في محافظة ثار، وفيها آبار قديمة على طرق القوافل. أُدرجت في قائمة التراث العالمي لليونسكو في يوليو 2021.",
        },
      },
      {
        id: "sharurah",
        name: { en: "Sharurah", ar: "شرورة" },
        marker: { en: "~370 km east", ar: "~370 كم شرقًا" },
        detail: {
          en: "A governorate of the province on the edge of the Empty Quarter, with its own domestic airport.",
          ar: "محافظة في المنطقة على أطراف الربع الخالي، ولها مطارها الداخلي.",
        },
      },
    ],
    footnote: {
      en: "Distances are Saudipedia's approximate figures from Najran city.",
      ar: "المسافات أرقام تقريبية من سعوديبيديا، محسوبة من مدينة نجران.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup and destination addresses in Najran city.",
        ar: "عنوانا الانطلاق والوجهة داخل مدينة نجران.",
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

  faqHeading: { en: "Najran: common questions", ar: "نجران: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Do you provide private transfers in Najran?", ar: "هل تقدّمون التوصيل الخاص في نجران؟" },
      answer: {
        en: "Yes. Our local drivers provide private transfers within Najran city, on either side of the valley. Send the pickup and destination addresses, and we reply with a written quotation.",
        ar: "نعم. يقدّم سائقونا المحليون التوصيل الخاص داخل مدينة نجران على جانبي الوادي. أرسل عنواني الانطلاق والوجهة، ونرد بعرض سعر مكتوب.",
      },
    },
    {
      question: { en: "Do you pick up from Najran's airport?", ar: "هل تستقبلون من مطار نجران؟" },
      answer: {
        en: "Airport pickups and drop-offs are not among the services on this page at present. This page covers local transfers within Najran city.",
        ar: "الاستقبال والتوصيل في المطار ليسا ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل داخل مدينة نجران.",
      },
    },
    {
      question: { en: "Can you take us to Al-Ukhdood or Hima?", ar: "هل يمكنكم نقلنا إلى الأخدود أو حمى؟" },
      answer: {
        en: "Journeys to Al-Ukhdood, Hima and other sites outside the city are not among the services on this page at present. We do not arrange tours, tickets or admission.",
        ar: "الرحلات إلى الأخدود وحمى والمواقع الأخرى خارج المدينة ليست ضمن خدمات هذه الصفحة حاليًا، ولا نرتّب جولات سياحية ولا تذاكر أو دخولًا.",
      },
    },
    {
      question: { en: "Do you drive from Najran to Abha, Jazan or Riyadh?", ar: "هل توصلون من نجران إلى أبها أو جازان أو الرياض؟" },
      answer: {
        en: "Long-distance journeys from Najran are not among the services on this page at present. This page covers local transfers within Najran city.",
        ar: "الرحلات الطويلة من نجران ليست ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل داخل مدينة نجران.",
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
        en: "The Asir highlands to the west: local transfers in both cities.",
        ar: "مرتفعات عسير غربًا: التوصيل داخل المدينتين.",
      },
    },
    {
      routeKey: "jazan",
      label: { en: "Jazan, Sabya & Abu Arish", ar: "جازان وصبيا وأبو عريش" },
      note: {
        en: "Local transfers in three areas on the Red Sea side of the south.",
        ar: "التوصيل في ثلاث مناطق على جانب البحر الأحمر من الجنوب.",
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
    {
      routeKey: "dammam",
      label: { en: "Dammam, Al Khobar & Dhahran", ar: "الدمام والخبر والظهران" },
      note: {
        en: "Airport, hotels and three cities on the Gulf coast.",
        ar: "المطار والفنادق وثلاث مدن على ساحل الخليج.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Najran city", ar: "مدينة نجران" },
    heading: { en: "Request a Najran transfer quotation", ar: "اطلب عرض سعر للتوصيل في نجران" },
    body: {
      en: "The pickup and destination addresses in the city, the date and how many of you. We reply with a written price.",
      ar: "عنوانا الانطلاق والوجهة داخل المدينة، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a quote", ar: "اطلب عرض سعر" },
  },
};
