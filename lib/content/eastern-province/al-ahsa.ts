import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Al Ahsa — destination hub (Hofuf and Al-Mubarraz in one page).
 *
 * Owner-confirmed coverage (eastern-province/04, second message supersedes
 * the first): Al-Ahsa International Airport transfers and hotel transfers in
 * Hofuf and Al-Mubarraz. The oasis and heritage places are visitor and
 * geographical context only.
 * Not offered: oasis day journeys, tours, guided visits, tickets, admission,
 * special heritage access, Hofuf station transfers, hourly hire, intercity
 * routes (Dammam–Al Ahsa, Riyadh–Al Ahsa) and any cross-border journey.
 *
 * UNESCO facts — UNESCO's own World Heritage dataset (data.unesco.org,
 * whc001, id 1563), read 9 Nov 2026; whc.unesco.org refused automated access:
 * - Name "Al-Ahsa Oasis, an Evolving Cultural Landscape" / "واحة الأحساء، منظر
 *   ثقافي آخذ بالتغير"; inscribed 2018; criteria (iii)(iv)(v).
 * - A serial property of twelve component parts: gardens, canals, springs,
 *   wells, a drainage lake, historic buildings, urban fabric, archaeological
 *   sites; "With its 2.5 million date palms, it is the largest oasis in the
 *   world" (attributed to UNESCO on the page).
 * - Components include Qasr Ibrahim, Suq al-Qaysariyah, Qasr Khuzam, Qasr
 *   Sahood, Jawatha Mosque, Al-Asfar Lake, the Eastern and Northern Oasis;
 *   the property takes in "a small section of the historic centre of
 *   Al-Hofuf".
 * - Jabal Al-Qarah is NOT among the twelve listed components, so the page
 *   does not call it part of the World Heritage property.
 *
 * Other facts: Al-Ahsa International Airport is one of the province's three
 * passenger airports (Saudipedia); Hofuf has a passenger station on the
 * Riyadh–Dammam line (station as context only).
 */

type B = Bilingual<string>;

export type AlAhsaContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  souqImageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  service: { heading: B; cards: { title: B; paragraphs: B[] }[]; railNote: B };
  grove: {
    heading: B;
    lead: B;
    tiles: { name: B; kind: B; note: B; unesco?: boolean }[];
    unescoNote: B;
  };
  visit: { heading: B; body: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const alAhsa: AlAhsaContent = {
  routeKey: "alAhsa",
  imageKey: "alahsa-qasr-ibrahim",
  souqImageKey: "alahsa-qaysariyah",

  seo: {
    title: {
      en: "Al Ahsa Transfers | Airport and Hotels in Hofuf, Al-Mubarraz",
      ar: "توصيل في الأحساء | المطار والفنادق في الهفوف والمبرز",
    },
    description: {
      en: "Private transfers in Al Ahsa: Al-Ahsa International Airport pickups and hotel transfers in Hofuf and Al-Mubarraz, home of the UNESCO-listed oasis.",
      ar: "توصيل خاص في الأحساء: الاستقبال من مطار الأحساء الدولي والتوصيل من الفنادق وإليها في الهفوف والمبرز، في أرض الواحة المسجلة في قائمة اليونسكو. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Al Ahsa", ar: "الأحساء" },

  hero: {
    eyebrow: { en: "Eastern Province · The oasis", ar: "المنطقة الشرقية · الواحة" },
    h1: { en: "Private transfers in Al Ahsa", ar: "توصيل خاص في الأحساء" },
    lead: {
      en: "Al Ahsa is an oasis region in the east of the Kingdom, and its cities include Hofuf and Al-Mubarraz. UNESCO added Al-Ahsa Oasis to the World Heritage List in 2018 and, with some 2.5 million date palms, describes it as the largest oasis in the world. We meet flights at Al-Ahsa International Airport and take you to and from hotels in Hofuf and Al-Mubarraz.",
      ar: "الأحساء منطقة واحة في شرق المملكة، ومن مدنها الهفوف والمبرز. وقد سجّلت اليونسكو واحة الأحساء في قائمة التراث العالمي عام 2018، وتصفها بأنها أكبر واحات النخيل في العالم بنحو 2.5 مليون نخلة. نستقبل رحلتك في مطار الأحساء الدولي، ونوصلك من الفنادق وإليها في الهفوف والمبرز.",
    },
  },

  service: {
    heading: { en: "What we cover in Al Ahsa", ar: "ما نخدمه في الأحساء" },
    cards: [
      {
        title: { en: "Al-Ahsa International Airport", ar: "مطار الأحساء الدولي" },
        paragraphs: [
          {
            en: "One of the Eastern Province's three passenger airports. Send the flight number and your hotel or address; the pickup follows the aircraft rather than a clock time, and the meeting arrangement is confirmed for your journey.",
            ar: "أحد مطارات الركاب الثلاثة في المنطقة الشرقية. أرسل رقم الرحلة والفندق أو العنوان، ليتبع موعد الاستقبال الطائرة لا توقيت الساعة، ونؤكد لك ترتيبات اللقاء لرحلتك.",
          },
          {
            en: "For a departure, give us the airline's check-in time and we work back from it.",
            ar: "وللمغادرة، أخبرنا بموعد إجراءات شركة الطيران ونحسب الموعد تراجعيًا منه.",
          },
        ],
      },
      {
        title: { en: "Hotels in Hofuf and Al-Mubarraz", ar: "الفنادق في الهفوف والمبرز" },
        paragraphs: [
          {
            en: "Tell us the hotel and which city it is in — Hofuf or Al-Mubarraz — and the entrance if there is more than one.",
            ar: "أخبرنا باسم الفندق والمدينة التي يقع فيها، الهفوف أو المبرز، والمدخل إن كان له أكثر من مدخل.",
          },
          {
            en: "Where the car can wait depends on the hotel and the traffic on the day, so the pickup point is confirmed for each journey.",
            ar: "ويعتمد مكان انتظار السيارة على الفندق وحركة المرور يومها، فنؤكد نقطة الاستقبال لكل رحلة.",
          },
        ],
      },
    ],
    railNote: {
      en: "Hofuf also has a passenger railway station on the line between Riyadh and Dammam. Station pickups and drop-offs are not among the services on this page.",
      ar: "وفي الهفوف أيضًا محطة قطار للركاب على الخط بين الرياض والدمام، لكن الاستقبال والتوصيل من المحطة ليسا ضمن خدمات هذه الصفحة.",
    },
  },

  grove: {
    heading: { en: "Cities, oasis and heritage", ar: "المدن والواحة والتراث" },
    lead: {
      en: "Al Ahsa is the name of the whole oasis region. These are the places within it you are most likely to hear about — given as orientation, not as stops we sell.",
      ar: "الأحساء اسم للمنطقة كلها بواحتها ومدنها، وهذه أبرز الأماكن التي قد تسمع بها فيها، نذكرها للتعريف لا محطاتٍ نبيعها.",
    },
    tiles: [
      {
        name: { en: "Hofuf", ar: "الهفوف" },
        kind: { en: "City", ar: "مدينة" },
        note: {
          en: "UNESCO's listing takes in a small section of Hofuf's historic centre.",
          ar: "يشمل تسجيل اليونسكو جزءًا صغيرًا من وسط الهفوف التاريخي.",
        },
      },
      {
        name: { en: "Al-Mubarraz", ar: "المبرز" },
        kind: { en: "City", ar: "مدينة" },
        note: {
          en: "A city of Al Ahsa alongside Hofuf. Give the district or the hotel.",
          ar: "مدينة من مدن الأحساء إلى جانب الهفوف، فاذكر الحي أو اسم الفندق.",
        },
      },
      {
        name: { en: "The oasis gardens", ar: "بساتين الواحة" },
        kind: { en: "UNESCO component parts", ar: "من مكونات موقع اليونسكو" },
        note: {
          en: "The Eastern and Northern Oasis: palm gardens, canals, springs and wells.",
          ar: "الواحة الشرقية والواحة الشمالية: بساتين النخيل والقنوات والعيون والآبار.",
        },
        unesco: true,
      },
      {
        name: { en: "Qasr Ibrahim", ar: "قصر إبراهيم" },
        kind: { en: "UNESCO component part", ar: "من مكونات موقع اليونسكو" },
        note: { en: "A historic fortress in Hofuf.", ar: "قصر تاريخي في الهفوف." },
        unesco: true,
      },
      {
        name: { en: "Suq al-Qaysariyah", ar: "سوق القيصرية" },
        kind: { en: "UNESCO component part", ar: "من مكونات موقع اليونسكو" },
        note: { en: "The historic market of Hofuf.", ar: "السوق التاريخية في الهفوف." },
        unesco: true,
      },
      {
        name: { en: "Jawatha Mosque", ar: "مسجد جواثا" },
        kind: { en: "UNESCO component part", ar: "من مكونات موقع اليونسكو" },
        note: { en: "Listed by UNESCO alongside a nearby archaeological site.", ar: "تدرجه اليونسكو مع موقع أثري قريب منه." },
        unesco: true,
      },
      {
        name: { en: "Al-Asfar Lake", ar: "بحيرة الأصفر" },
        kind: { en: "UNESCO component part", ar: "من مكونات موقع اليونسكو" },
        note: { en: "The oasis's agricultural drainage lake.", ar: "بحيرة تصريف المياه الزراعية في الواحة." },
        unesco: true,
      },
    ],
    unescoNote: {
      en: "UNESCO lists twelve component parts under “Al-Ahsa Oasis, an Evolving Cultural Landscape”, inscribed in 2018. Source: UNESCO World Heritage data.",
      ar: "تضم قائمة اليونسكو اثني عشر مكونًا تحت اسم «واحة الأحساء، منظر ثقافي آخذ بالتغير»، المسجلة عام 2018. المصدر: بيانات التراث العالمي لليونسكو.",
    },
  },

  visit: {
    heading: { en: "Visiting the oasis and heritage sites", ar: "زيارة الواحة والمواقع التراثية" },
    body: {
      en: "We provide airport and hotel transfers, not visits. We do not offer oasis tours, guided visits or day trips, and we do not sell tickets or arrange admission; opening times and entry are set by each site. Check the site's own information before you go.",
      ar: "نحن نقدّم التوصيل من المطار والفنادق وإليها لا الزيارات. فلا نقدّم جولات في الواحة ولا زيارات مصحوبة بمرشد ولا رحلات يومية، ولا نبيع التذاكر ولا نرتّب الدخول، فأوقات الفتح والدخول يحددها كل موقع. تحقق من معلومات الموقع نفسه قبل الذهاب.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The flight number, or the hotel you are leaving from, and the hotel or address you are going to in Hofuf or Al-Mubarraz.",
        ar: "رقم الرحلة أو الفندق الذي تغادر منه، والفندق أو العنوان الذي تقصده في الهفوف أو المبرز.",
      },
      {
        en: "The date and time, and how many passengers and suitcases.",
        ar: "التاريخ والوقت، وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and journey details are confirmed before the booking is accepted.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز.",
      },
    ],
  },

  faqHeading: { en: "Al Ahsa transfers: common questions", ar: "التوصيل في الأحساء: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Do you meet flights at Al-Ahsa International Airport?", ar: "هل تستقبلون الرحلات في مطار الأحساء الدولي؟" },
      answer: {
        en: "Yes. Send the flight number and your hotel or address in Hofuf or Al-Mubarraz, and the pickup follows the aircraft. Availability and the meeting arrangement are confirmed before the booking is accepted.",
        ar: "نعم. أرسل رقم الرحلة والفندق أو العنوان في الهفوف أو المبرز ليتبع موعد الاستقبال الطائرة، وتُؤكَّد الإتاحة وترتيبات اللقاء قبل قبول الحجز.",
      },
    },
    {
      question: { en: "Are Hofuf and Al-Mubarraz part of Al Ahsa?", ar: "هل الهفوف والمبرز من الأحساء؟" },
      answer: {
        en: "Yes. Both are cities of Al Ahsa, close to each other in the oasis. Tell us which one your hotel is in.",
        ar: "نعم، كلتاهما من مدن الأحساء ومتقاربتان في الواحة، فأخبرنا في أيّهما يقع فندقك.",
      },
    },
    {
      question: { en: "What does the UNESCO listing cover?", ar: "ماذا يشمل تسجيل اليونسكو في الأحساء؟" },
      answer: {
        en: "UNESCO's “Al-Ahsa Oasis, an Evolving Cultural Landscape”, inscribed in 2018, is a serial property of twelve component parts: palm gardens, canals, springs and wells, Al-Asfar Lake, historic buildings such as Qasr Ibrahim and Suq al-Qaysariyah, part of Hofuf's historic centre, and archaeological sites.",
        ar: "يضم موقع «واحة الأحساء، منظر ثقافي آخذ بالتغير» الذي سجّلته اليونسكو عام 2018 اثني عشر مكونًا: بساتين النخيل والقنوات والعيون والآبار، وبحيرة الأصفر، ومباني تاريخية مثل قصر إبراهيم وسوق القيصرية، وجزءًا من وسط الهفوف التاريخي، ومواقع أثرية.",
      },
    },
    {
      question: { en: "Do you offer tours of the oasis or Jabal Al-Qarah?", ar: "هل تقدّمون جولات في الواحة أو جبل القارة؟" },
      answer: {
        en: "No. We provide airport and hotel transfers only — no tours, guided visits, day trips, tickets or admission. Opening times and entry are set by each site.",
        ar: "لا. نقدّم التوصيل من المطار والفنادق وإليها فقط، دون جولات أو زيارات مصحوبة بمرشد أو رحلات يومية أو تذاكر أو ترتيب دخول، فأوقات الفتح والدخول يحددها كل موقع.",
      },
    },
    {
      question: { en: "Do you pick up from Hofuf railway station?", ar: "هل تستقبلون من محطة قطار الهفوف؟" },
      answer: {
        en: "Station pickups and drop-offs are not among the services on this page. We cover Al-Ahsa International Airport and hotels in Hofuf and Al-Mubarraz.",
        ar: "الاستقبال والتوصيل من المحطة ليسا ضمن خدمات هذه الصفحة. ونخدم مطار الأحساء الدولي والفنادق في الهفوف والمبرز.",
      },
    },
  ],

  related: [
    {
      routeKey: "dammam",
      label: { en: "Dammam, Al Khobar and Dhahran", ar: "الدمام والخبر والظهران" },
      note: {
        en: "The Gulf coast: King Fahd International Airport and hotels in the three cities.",
        ar: "ساحل الخليج: مطار الملك فهد الدولي والفنادق في المدن الثلاث.",
      },
    },
    {
      routeKey: "jubail",
      label: { en: "Jubail", ar: "الجبيل" },
      note: {
        en: "North on the coast: the old town and public addresses in the Industrial City.",
        ar: "شمالًا على الساحل: الجبيل البلد والعناوين العامة في الجبيل الصناعية.",
      },
    },
    {
      routeKey: "riyadhRailway",
      label: { en: "Riyadh railway stations", ar: "محطات القطار في الرياض" },
      note: {
        en: "The Riyadh end of the East Train, which calls at Hofuf.",
        ar: "الطرف الرياضي لقطار الشرق الذي يتوقف في الهفوف.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Airport and hotels", ar: "المطار والفنادق" },
    heading: { en: "Request an Al Ahsa transfer quotation", ar: "اطلب عرض سعر للتوصيل في الأحساء" },
    body: {
      en: "Your flight or hotel, where you are going in Hofuf or Al-Mubarraz, the date and how many of you. We reply with a written price.",
      ar: "رحلتك أو فندقك، ووجهتك في الهفوف أو المبرز، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get an Al Ahsa quote", ar: "اطلب سعر التوصيل في الأحساء" },
  },
};
