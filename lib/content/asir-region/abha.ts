import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Abha and Khamis Mushait — the Asir Region hub.
 *
 * One page for two neighbouring cities with equal billing (owner-approved
 * architecture, 10 Nov 2026): #abha and #khamis-mushait are sections with
 * stable anchors, not separate pages. Rijal Almaa, Al Soudah and the towns
 * further afield are context only.
 *
 * Owner-confirmed coverage (research folder, asir-region/04, 10 Nov 2026):
 * - local transfers within Abha and within Khamis Mushait, by our local
 *   drivers.
 * NOT confirmed, so never offered or implied here: Abha International
 * Airport pickups and drop-offs, hotel transfers, journeys between the two
 * cities (flagged to the owner), Rijal Almaa or Al Soudah journeys, Bisha or
 * any other town, and long-distance routes (Jeddah, Riyadh, Makkah, Taif).
 * When the owner confirms one of these, add its paragraph, FAQ and quote
 * prompt here and remove it from `scope.notOffered`.
 *
 * Facts (asir-region/02, "Final figures"):
 * - Abha is the capital of the Asir region; "Bride of the Mountain"; no
 *   elevation figure is published for the city — Saudipedia (S5).
 * - Khamis Mushait: the region's traditional trading centre and "the third
 *   commercial city in Saudi Arabia" — Saudipedia (S8); 29.7% of the
 *   province's population against 20.9% in Abha — Saudipedia (S1).
 *   Traditional markets — Visit Saudi (E2).
 * - Cable cars over Abha to the Green Mountain and Abha Dam; Al-Muftaha
 *   village — Saudipedia (S3, S6), Visit Saudi (E2). Context only.
 * - Airport "about 22 km from Abha", between the two cities — Saudipedia
 *   (S7). No operator named.
 * - Rijal Almaa ~45 km west via Aqabat Al-Samma; six-storey stone palaces
 *   above the Kussan Valley — Saudipedia (S9), Visit Saudi (E7); a UN Tourism
 *   Best Tourism Village, 2021 (E9). NOT a UNESCO World Heritage Site.
 * - Al Soudah 3,015 m, west of Abha — Saudipedia (S2). The only height on
 *   the page.
 * - Bisha ~300 km, Al-Namas ~140 km, Tanomah ~119 km — Saudipedia
 *   (S10–S12). Geography only.
 *
 * Controlled-site wording matches the approved standard (Q7).
 */

type B = Bilingual<string>;

export type AsirCity = {
  id: "abha" | "khamis-mushait";
  name: B;
  role: B;
  imageKey: SiteImageKey;
  paragraphs: B[];
  service: B;
  note?: B;
};

export type AsirPlace = { name: B; distance?: B; detail: B };

export type AbhaContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B; peak: { value: B; label: B } };
  pair: { heading: B; cities: { id: AsirCity["id"]; name: B; line: B }[]; footnote: B };
  cities: { heading: B; lead: B; sections: AsirCity[] };
  scope: { heading: B; offered: B[]; notOfferedHeading: B; notOffered: B[] };
  context: { heading: B; lead: B; airport: AsirPlace; rijal: AsirPlace; soudah: AsirPlace; furtherHeading: B; further: AsirPlace[]; footnote: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

const controlledSite: B = {
  en: "Some sites around Khamis Mushait are gated, access-controlled or military areas. Drop-off may be possible at an agreed entrance or gate; entry inside is not included, and security permission and internal access are not guaranteed.",
  ar: "وبعض المواقع حول خميس مشيط مناطق مسوّرة أو خاضعة للرقابة أو عسكرية. وقد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى الداخل، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
};

export const abha: AbhaContent = {
  routeKey: "abha",
  imageKey: "dest-abha",

  seo: {
    title: {
      en: "Abha and Khamis Mushait Private Transfers | Local Journeys",
      ar: "توصيل خاص في أبها وخميس مشيط | تنقلات داخل المدينتين",
    },
    description: {
      en: "Private local transfers in Abha and in Khamis Mushait with our local drivers. Send the pickup and destination addresses and receive a written quotation.",
      ar: "توصيل خاص داخل أبها وداخل خميس مشيط مع سائقينا المحليين. أرسل عنوان الانطلاق والوجهة واحصل على عرض سعر مكتوب.",
    },
  },

  crumbLabel: { en: "Abha & Khamis Mushait", ar: "أبها وخميس مشيط" },

  hero: {
    eyebrow: { en: "Asir Region · Southern highlands", ar: "منطقة عسير · المرتفعات الجنوبية" },
    h1: {
      en: "Private transfers in Abha and Khamis Mushait",
      ar: "توصيل خاص في أبها وخميس مشيط",
    },
    lead: {
      en: "Abha, the capital of the Asir region, and Khamis Mushait, its largest city and trading centre, are neighbours in the mountains of the south. Our local drivers provide private transfers within each city, between the addresses you give us, with the pickup point confirmed for every journey.",
      ar: "أبها عاصمة منطقة عسير، وخميس مشيط أكبر مدنها ومركزها التجاري، وهما مدينتان متجاورتان في جبال الجنوب. يقدّم سائقونا المحليون التوصيل الخاص داخل كل مدينة منهما بين العناوين التي تحددها، ونؤكد نقطة الاستقبال لكل رحلة.",
    },
    peak: {
      value: { en: "3,015 m", ar: "3,015 م" },
      label: { en: "Al Soudah, the region's highest peak", ar: "جبل السودة، أعلى قمم المنطقة" },
    },
  },

  pair: {
    heading: { en: "Two cities, one service", ar: "مدينتان وخدمة واحدة" },
    cities: [
      {
        id: "abha",
        name: { en: "Abha", ar: "أبها" },
        line: { en: "Local transfers within Abha", ar: "التوصيل داخل أبها" },
      },
      {
        id: "khamis-mushait",
        name: { en: "Khamis Mushait", ar: "خميس مشيط" },
        line: { en: "Local transfers within Khamis Mushait", ar: "التوصيل داخل خميس مشيط" },
      },
    ],
    footnote: {
      en: "Tell us the city and the exact addresses; each journey is confirmed before it is booked.",
      ar: "أخبرنا بالمدينة وبالعناوين بدقة، ونؤكد كل رحلة قبل حجزها.",
    },
  },

  cities: {
    heading: { en: "Abha and Khamis Mushait", ar: "أبها وخميس مشيط" },
    lead: {
      en: "Neighbouring cities with different characters: the regional capital in the mountains, and the larger city that grew as a market town.",
      ar: "مدينتان متجاورتان لكل منهما طابعها: عاصمة المنطقة في الجبال، والمدينة الأكبر التي نشأت سوقًا تجارية.",
    },
    sections: [
      {
        id: "abha",
        name: { en: "Abha", ar: "أبها" },
        role: { en: "The capital of the Asir region", ar: "عاصمة منطقة عسير" },
        imageKey: "abha-cable-car",
        paragraphs: [
          {
            en: "A mountain city high in the Sarawat range, known in Arabic as the “Bride of the Mountain”. Visitors come for the cool highland air, the Al-Muftaha arts village and the cable cars that run over the city towards the Green Mountain and Abha Dam.",
            ar: "مدينة جبلية في أعالي سلسلة السروات، تُلقَّب «عروس الجبل». ويقصدها الزوار لهوائها المعتدل وقرية المفتاحة الفنية، وللتلفريك الذي يعبر فوق المدينة نحو الجبل الأخضر وسد أبها.",
          },
        ],
        service: {
          en: "Our local drivers take you between addresses in Abha. Give us the pickup and the destination; where the car can stop is confirmed for each journey.",
          ar: "ينقلك سائقونا المحليون بين العناوين داخل أبها. زوّدنا بنقطة الانطلاق والوجهة، ونؤكد مكان توقف السيارة لكل رحلة.",
        },
      },
      {
        id: "khamis-mushait",
        name: { en: "Khamis Mushait", ar: "خميس مشيط" },
        role: { en: "The region's largest city", ar: "كبرى مدن المنطقة" },
        imageKey: "khamis-mosque",
        paragraphs: [
          {
            en: "The region's traditional trading centre, described by Saudipedia as the third commercial city in Saudi Arabia, and home to more of Asir's population than any other governorate. Visit Saudi points visitors to its traditional markets.",
            ar: "المركز التجاري التقليدي للمنطقة، وتصفها سعوديبيديا بثالث مدينة تجارية في المملكة، ويسكن محافظتها أكبر نصيب من سكان عسير. وتوجّه روح السعودية زوارها إلى أسواقها الشعبية.",
          },
        ],
        service: {
          en: "Our local drivers take you between addresses in Khamis Mushait. Give us the pickup and the destination; where the car can stop is confirmed for each journey.",
          ar: "ينقلك سائقونا المحليون بين العناوين داخل خميس مشيط. زوّدنا بنقطة الانطلاق والوجهة، ونؤكد مكان توقف السيارة لكل رحلة.",
        },
        note: controlledSite,
      },
    ],
  },

  scope: {
    heading: { en: "What we offer here", ar: "ما نقدّمه هنا" },
    offered: [
      { en: "Local transfers within Abha", ar: "التوصيل داخل أبها" },
      { en: "Local transfers within Khamis Mushait", ar: "التوصيل داخل خميس مشيط" },
    ],
    notOfferedHeading: { en: "Not offered on this page at present", ar: "غير متاح في هذه الصفحة حاليًا" },
    notOffered: [
      { en: "Pickups and drop-offs at Abha International Airport", ar: "الاستقبال والتوصيل في مطار أبها الدولي" },
      { en: "Hotel transfers", ar: "التوصيل من الفنادق وإليها" },
      { en: "Journeys between Abha and Khamis Mushait", ar: "الرحلات بين أبها وخميس مشيط" },
      { en: "Journeys to Rijal Almaa, Al Soudah or other towns", ar: "الرحلات إلى رجال ألمع أو السودة أو المدن الأخرى" },
      { en: "Long-distance journeys to other cities", ar: "الرحلات الطويلة إلى المدن الأخرى" },
    ],
  },

  context: {
    heading: { en: "Around Abha", ar: "حول أبها" },
    lead: {
      en: "Places you will hear about in the region. They are described for context; journeys to them are not among the services on this page.",
      ar: "أماكن ستسمع عنها في المنطقة، نذكرها للتعريف فقط، والرحلات إليها ليست ضمن خدمات هذه الصفحة.",
    },
    airport: {
      name: { en: "Abha International Airport", ar: "مطار أبها الدولي" },
      distance: { en: "~22 km from Abha", ar: "~22 كم من أبها" },
      detail: {
        en: "The region's airport, between Abha and Khamis Mushait. Airport pickups and drop-offs are not among the services on this page.",
        ar: "مطار المنطقة، ويقع بين أبها وخميس مشيط. والاستقبال والتوصيل في المطار ليسا ضمن خدمات هذه الصفحة.",
      },
    },
    rijal: {
      name: { en: "Rijal Almaa", ar: "رجال ألمع" },
      distance: { en: "~45 km west", ar: "~45 كم غربًا" },
      detail: {
        en: "A heritage village of stone palaces up to six storeys high, on the slopes above the Kussan Valley, reached from Abha by the steep Aqabat Al-Samma road. It was named one of UN Tourism's Best Tourism Villages in 2021.",
        ar: "قرية تراثية من قصور حجرية يبلغ ارتفاع بعضها ستة طوابق على سفوح تطل على وادي كسان، ويُوصل إليها من أبها عبر عقبة الصماء شديدة الانحدار. واختارتها منظمة الأمم المتحدة للسياحة ضمن أفضل القرى السياحية عام 2021.",
      },
    },
    soudah: {
      name: { en: "Al Soudah", ar: "السودة" },
      distance: { en: "3,015 m", ar: "3,015 م" },
      detail: {
        en: "The highest peak in the region, west of Abha. A cable car runs from Al Soudah down towards Rijal Almaa.",
        ar: "أعلى قمم المنطقة، غرب أبها، ومنها ينزل تلفريك نحو رجال ألمع.",
      },
    },
    furtherHeading: { en: "Further afield", ar: "أبعد من ذلك" },
    further: [
      {
        name: { en: "Tanomah", ar: "تنومة" },
        distance: { en: "~119 km north", ar: "~119 كم شمالًا" },
        detail: { en: "A mountain town in the north of the region.", ar: "بلدة جبلية في شمال المنطقة." },
      },
      {
        name: { en: "Al-Namas", ar: "النماص" },
        distance: { en: "~140 km", ar: "~140 كم" },
        detail: { en: "Up on the Sarawat Mountains.", ar: "على قمم جبال السروات." },
      },
      {
        name: { en: "Bisha", ar: "بيشة" },
        distance: { en: "~300 km", ar: "~300 كم" },
        detail: { en: "On the inland side, with its own domestic airport.", ar: "في الجهة الداخلية، ولها مطارها الداخلي." },
      },
    ],
    footnote: {
      en: "Distances are Saudipedia's approximate figures from Abha.",
      ar: "المسافات أرقام تقريبية من سعوديبيديا، محسوبة من أبها.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The city — Abha or Khamis Mushait — and the pickup and destination addresses within it.",
        ar: "المدينة، أبها أو خميس مشيط، وعنوانا الانطلاق والوجهة داخلها.",
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

  faqHeading: { en: "Abha and Khamis Mushait: common questions", ar: "أبها وخميس مشيط: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Do you provide transfers in Khamis Mushait as well as Abha?", ar: "هل تقدّمون التوصيل في خميس مشيط كما في أبها؟" },
      answer: {
        en: "Yes. Our local drivers provide private transfers within Abha and within Khamis Mushait. Tell us the city and the pickup and destination addresses, and we reply with a written quotation.",
        ar: "نعم. يقدّم سائقونا المحليون التوصيل الخاص داخل أبها وداخل خميس مشيط. أخبرنا بالمدينة وبعنواني الانطلاق والوجهة، ونرد بعرض سعر مكتوب.",
      },
    },
    {
      question: { en: "Do you pick up from Abha International Airport?", ar: "هل تستقبلون من مطار أبها الدولي؟" },
      answer: {
        en: "Airport pickups and drop-offs are not among the services on this page at present. This page covers local transfers within Abha and within Khamis Mushait.",
        ar: "الاستقبال والتوصيل في المطار ليسا ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل داخل أبها وداخل خميس مشيط.",
      },
    },
    {
      question: { en: "Can you take us to Rijal Almaa or Al Soudah?", ar: "هل يمكنكم نقلنا إلى رجال ألمع أو السودة؟" },
      answer: {
        en: "Journeys to Rijal Almaa, Al Soudah and other towns are not among the services on this page at present. We do not arrange tours, cable-car tickets or admission.",
        ar: "الرحلات إلى رجال ألمع والسودة والمدن الأخرى ليست ضمن خدمات هذه الصفحة حاليًا، ولا نرتّب جولات سياحية ولا تذاكر التلفريك أو الدخول.",
      },
    },
    {
      question: { en: "Can you drive into a gated or military site near Khamis Mushait?", ar: "هل يمكنكم الدخول إلى موقع مسوّر أو عسكري قرب خميس مشيط؟" },
      answer: {
        en: "Entry is not included. Drop-off may be possible at an agreed entrance or gate, but security permission and internal access are controlled by the site, not by us, and are not guaranteed. Tell us the place when you enquire.",
        ar: "الدخول غير مشمول. وقد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، لكن الإذن الأمني والوصول الداخلي يحكمهما الموقع لا نحن، ولا نضمنهما. أخبرنا بالمكان عند الاستفسار.",
      },
    },
    {
      question: { en: "Do you drive from Abha to Jeddah, Riyadh or other cities?", ar: "هل توصلون من أبها إلى جدة أو الرياض أو مدن أخرى؟" },
      answer: {
        en: "Long-distance journeys from the Asir region are not among the services on this page at present. This page covers local transfers within Abha and within Khamis Mushait.",
        ar: "الرحلات الطويلة من منطقة عسير ليست ضمن خدمات هذه الصفحة حاليًا، فهي تغطي التوصيل داخل أبها وداخل خميس مشيط.",
      },
    },
  ],

  relatedHeading: { en: "Other cities we serve", ar: "مدن أخرى نخدمها" },

  related: [
    {
      routeKey: "taif",
      label: { en: "Taif", ar: "الطائف" },
      note: {
        en: "The other highland city, at the top of the Al Hada road.",
        ar: "المدينة الجبلية الأخرى، في أعلى طريق الهدا.",
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
      routeKey: "riyadh",
      label: { en: "Riyadh", ar: "الرياض" },
      note: {
        en: "Airport, hotels and journeys from the capital.",
        ar: "المطار والفنادق والرحلات من العاصمة.",
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
    eyebrow: { en: "Abha · Khamis Mushait", ar: "أبها · خميس مشيط" },
    heading: { en: "Request a local transfer quotation", ar: "اطلب عرض سعر للتوصيل داخل المدينة" },
    body: {
      en: "The city, the pickup and destination addresses, the date and how many of you. We reply with a written price.",
      ar: "المدينة، وعنوانا الانطلاق والوجهة، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a quote", ar: "اطلب عرض سعر" },
  },
};
