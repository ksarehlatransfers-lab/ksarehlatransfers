import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Buraydah — destination guide.
 *
 * Owner-confirmed coverage (research folder qassim/, updated 12 Nov 2026):
 * - local transfers within Buraydah;
 * - pickups and drop-offs at Prince Naif bin Abdulaziz International
 *   Airport (ELQ);
 * - hotel transfers in Buraydah;
 * - Buraydah ↔ Unaizah;
 * - Riyadh → Buraydah (the existing route page, linked from here).
 * NOT confirmed, so not offered: SAR railway-station pickups, sightseeing
 * and excursions, hourly hire, and other routes. No prices, journey times,
 * schedules or vehicle specifications. Public copy says "our local
 * drivers" (never "partners"). A quote request is not a booking.
 *
 * Facts and sources (evidence in the research folder):
 * - Seat of the Emirate of al-Qassim; largest city of the province;
 *   population 677,647 (2022), 50.7% of the province; founded in the 16th
 *   century at the meeting of trade routes between Riyadh, Hail and Madinah;
 *   the Darb Zubaida pilgrim route passes through; 600–650 m elevation —
 *   Saudipedia, buraydah-city.
 * - Buraydah Date Festival at Dates City: Saudipedia calls it the world's
 *   largest date market; figures for the annual festival: ~8 million palm
 *   trees' produce, ~53,000 vehicles, over 57,000 t, more than 45 varieties —
 *   buraydah-city. Qassim has one of the largest date markets in the world
 *   and one of the largest date-palm farms — qassim-province.
 * - Klija: Qassim's official dessert; Klija Festival held annually since
 *   2009, at venues including the King Khalid Cultural Center and the Palm
 *   Center in Dates City — Saudipedia, klija-festival.
 * - UNESCO Creative Cities Network, City of Gastronomy, member since 2021 —
 *   unesco.org/en/creative-cities/buraidah.
 * - King Khalid Cultural Center: a social and cultural centre in Buraydah,
 *   opened 1986 as a venue for events and conferences; indoor theatre, Roman
 *   theatre, lounges and a family garden — Saudipedia,
 *   visual-icons-in-al-qassim-region.
 * - Buraydah Water Tower: golf-ball shaped, 66 m — same Saudipedia page.
 * - King Abdullah National Park: a city park used as an events venue, e.g.
 *   the Buraydah Summer Festival — Qassim Municipality news (qassim.gov.sa).
 *   No size, history or facilities are published.
 * - Prince Naif bin Abdulaziz International Airport (ELQ), west of the city,
 *   the province's only airport; SAR railway station on the North line;
 *   SAPTCO bus station — Saudipedia, buraydah-city and airport article.
 *   Context only.
 *
 * Deliberately NOT published: festival dates, opening hours, admission,
 * sales figures, "Guinness" claims (not verified at source), travel times.
 */

type B = Bilingual<string>;

export type BuraydahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  /** Name of the Service node in structured data: the confirmed services only. */
  serviceName: B;
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B; caption: B };
  services: {
    heading: B;
    lead: B;
    items: { id: string; title: B; detail: B; link?: { routeKey: RouteKey; label: B } }[];
    notOfferedHeading: B;
    notOffered: B[];
  };
  harvest: { heading: B; lead: B; figures: { value: B; label: B }[]; source: B };
  crossroads: { heading: B; paragraphs: B[]; points: { name: B; detail: B }[] };
  culture: {
    heading: B;
    items: { id: string; eyebrow: B; name: B; detail: B }[];
  };
  mosque: { imageKey: SiteImageKey; caption: B };
  practical: { heading: B; items: { name: B; detail: B }[]; note: B };
  enquiry: { heading: B; lead: B; steps: B[]; note: B };
  faqHeading: B;
  faqs: ClusterFaq[];
  relatedHeading: B;
  related: RelatedLink[];
  cta: ClusterCta;
};

export const buraydah: BuraydahContent = {
  routeKey: "buraydah",
  imageKey: "buraydah-date-market",

  seo: {
    title: {
      en: "Buraydah Private Transfers | Airport & Hotels",
      ar: "توصيل خاص في بريدة | المطار والفنادق",
    },
    description: {
      en: "Private transfers in Buraydah: local journeys, Prince Naif bin Abdulaziz International Airport (ELQ), hotels, Unaizah, and the road from Riyadh.",
      ar: "توصيل خاص في بريدة: التنقل داخل المدينة، ومطار الأمير نايف بن عبدالعزيز الدولي، والفنادق، وعنيزة، والطريق من الرياض. اطلب عرض سعر.",
    },
  },

  serviceName: {
    en: "Private transfers in Buraydah: local journeys, Prince Naif bin Abdulaziz International Airport (ELQ) and hotels",
    ar: "التوصيل الخاص في بريدة: داخل المدينة ومطار الأمير نايف بن عبدالعزيز الدولي والفنادق",
  },

  crumbLabel: { en: "Buraydah", ar: "بريدة" },

  hero: {
    eyebrow: { en: "Al-Qassim · Central Saudi Arabia", ar: "القصيم · وسط المملكة" },
    h1: { en: "Buraydah, city of the date harvest", ar: "بريدة، مدينة موسم التمور" },
    lead: {
      en: "The capital and largest city of Al-Qassim, famous for its date market and a UNESCO Creative City of Gastronomy. Our local drivers provide private transfers in the city, at its airport and hotels, and to Unaizah.",
      ar: "عاصمة القصيم وكبرى مدنها، تشتهر بسوق التمور، وهي مدينة مبدعة في فنون الطهي لدى اليونسكو. يقدّم سائقونا المحليون التوصيل الخاص داخل المدينة وفي مطارها وفنادقها، وإلى عنيزة.",
    },
    caption: {
      en: "Buyers and loaded pickups at the date market in Dates City, Buraydah.",
      ar: "مشترون وشاحنات محمّلة في سوق التمور بمدينة التمور في بريدة.",
    },
  },

  services: {
    heading: { en: "Transfers in Buraydah", ar: "التوصيل في بريدة" },
    lead: {
      en: "Our local drivers cover the city, its airport and its hotels, and the roads to Unaizah and from Riyadh. Each journey is confirmed with you before it is booked.",
      ar: "يغطي سائقونا المحليون المدينة ومطارها وفنادقها، والطريق إلى عنيزة ومن الرياض. ونؤكد كل رحلة معك قبل حجزها.",
    },
    items: [
      {
        id: "local-transfers",
        title: { en: "Within Buraydah", ar: "داخل بريدة" },
        detail: {
          en: "Private transfers between addresses in the city — homes, offices, the date market and more. Where the car can stop is confirmed for each journey.",
          ar: "توصيل خاص بين العناوين داخل المدينة، من المنازل والمكاتب إلى سوق التمور وغيرها. ونؤكد مكان توقف السيارة لكل رحلة.",
        },
      },
      {
        id: "airport-transfers",
        title: { en: "Prince Naif bin Abdulaziz International Airport (ELQ)", ar: "مطار الأمير نايف بن عبدالعزيز الدولي (ELQ)" },
        detail: {
          en: "Pickups and drop-offs at Qassim's airport, west of the city. Send the flight number; how and where you meet the driver is confirmed for your journey.",
          ar: "الاستقبال والتوصيل في مطار القصيم غرب المدينة. أرسل رقم الرحلة الجوية، ونؤكد لك طريقة لقاء السائق ومكانه لرحلتك.",
        },
      },
      {
        id: "hotel-transfers",
        title: { en: "Hotels", ar: "الفنادق" },
        detail: {
          en: "Pickups and drop-offs at hotels in Buraydah. Name the hotel and, if it has more than one, the entrance; the pickup point is confirmed for each journey.",
          ar: "الاستقبال والتوصيل من الفنادق وإليها في بريدة. اذكر اسم الفندق والمدخل إن كان له أكثر من مدخل، ونؤكد نقطة الاستقبال لكل رحلة.",
        },
      },
      {
        id: "buraydah-unaizah",
        title: { en: "Buraydah ↔ Unaizah", ar: "بريدة ↔ عنيزة" },
        detail: {
          en: "Journeys in either direction between the two cities of Al-Qassim, about 28 km apart.",
          ar: "رحلات في الاتجاهين بين مدينتي القصيم، اللتين تفصل بينهما نحو 28 كم.",
        },
        link: { routeKey: "unaizah", label: { en: "Transfers in Unaizah", ar: "التوصيل في عنيزة" } },
      },
      {
        id: "riyadh-buraydah",
        title: { en: "Riyadh → Buraydah", ar: "الرياض ← بريدة" },
        detail: {
          en: "A private transfer north from the capital, door to door.",
          ar: "نقل خاص شمالًا من العاصمة، من الباب إلى الباب.",
        },
        link: { routeKey: "riyadhToBuraydah", label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" } },
      },
    ],
    notOfferedHeading: { en: "Not offered on this page at present", ar: "غير متاح في هذه الصفحة حاليًا" },
    notOffered: [
      { en: "Railway-station pickups", ar: "الاستقبال من محطة القطار" },
      { en: "Sightseeing, excursions or hourly hire", ar: "الجولات السياحية والرحلات الاستكشافية والاستئجار بالساعة" },
      { en: "Other intercity routes", ar: "المسارات الأخرى بين المدن" },
    ],
  },

  harvest: {
    heading: { en: "The date harvest", ar: "موسم التمور" },
    lead: {
      en: "Saudipedia describes the Buraydah Date Festival, held each year at Dates City, as the world's largest date market. Its figures for the annual festival give a sense of the scale:",
      ar: "تصف سعوديبيديا مهرجان تمور بريدة، الذي يُقام كل عام في مدينة التمور، بأنه أكبر سوق للتمور في العالم. وأرقامها للمهرجان السنوي تعطي فكرة عن حجمه:",
    },
    figures: [
      { value: { en: "~8 million", ar: "~8 ملايين" }, label: { en: "palm trees whose fruit reaches the festival", ar: "نخلة يصل ثمرها إلى المهرجان" } },
      { value: { en: "~53,000", ar: "~53 ألف" }, label: { en: "vehicles bringing the harvest in", ar: "مركبة تنقل المحصول" } },
      { value: { en: "57,000 t+", ar: "+57 ألف طن" }, label: { en: "of dates", ar: "من التمور" } },
      { value: { en: "45+", ar: "+45" }, label: { en: "date varieties", ar: "صنفًا من التمور" } },
    ],
    source: {
      en: "Figures: Saudipedia, for the annual festival. Dates and programmes change each year.",
      ar: "الأرقام: سعوديبيديا، للمهرجان السنوي. وتتغير المواعيد والبرامج كل عام.",
    },
  },

  crossroads: {
    heading: { en: "A city at the crossroads", ar: "مدينة على مفترق الطرق" },
    paragraphs: [
      {
        en: "Buraydah was founded in the sixteenth century and grew because of where it stands: at the meeting of trade routes between Riyadh, Hail and Madinah. The old Darb Zubaida pilgrim road, which ran from Iraq to Makkah, passes through it too.",
        ar: "تأسست بريدة في القرن السادس عشر، ونمت بفضل موقعها عند ملتقى طرق التجارة بين الرياض وحائل والمدينة المنورة. ويمر بها أيضًا درب زبيدة، طريق الحجاج القديم الممتد من العراق إلى مكة المكرمة.",
      },
      {
        en: "Today it is home to about half of Al-Qassim's people — 677,647 in the 2022 census — and to Qassim University, founded in 2004.",
        ar: "ويسكنها اليوم نحو نصف سكان القصيم، إذ بلغ عددهم 677,647 نسمة في تعداد 2022، وفيها جامعة القصيم التي أُسست عام 2004.",
      },
    ],
    points: [
      { name: { en: "Riyadh", ar: "الرياض" }, detail: { en: "To the south-east", ar: "إلى الجنوب الشرقي" } },
      { name: { en: "Hail", ar: "حائل" }, detail: { en: "To the north", ar: "إلى الشمال" } },
      { name: { en: "Madinah", ar: "المدينة المنورة" }, detail: { en: "To the west", ar: "إلى الغرب" } },
    ],
  },

  culture: {
    heading: { en: "Around the city", ar: "في أرجاء المدينة" },
    items: [
      {
        id: "king-khalid-cultural-center",
        eyebrow: { en: "Since 1986", ar: "منذ 1986" },
        name: { en: "King Khalid Cultural Center", ar: "مركز الملك خالد الحضاري" },
        detail: {
          en: "Buraydah's cultural and social hall, opened in 1986 for events and conferences, with an indoor theatre, an open-air Roman-style theatre and a family garden. Festivals such as Klija have been held here.",
          ar: "مركز بريدة الثقافي والاجتماعي، افتُتح عام 1986 للفعاليات والمؤتمرات، ويضم مسرحًا مغلقًا ومسرحًا رومانيًا مكشوفًا وحديقة عائلية. وقد استضاف مهرجانات منها مهرجان الكليجا.",
        },
      },
      {
        id: "klija",
        eyebrow: { en: "UNESCO City of Gastronomy, 2021", ar: "مدينة اليونسكو للطهي، 2021" },
        name: { en: "Klija", ar: "الكليجا" },
        detail: {
          en: "The official sweet of Al-Qassim. The Klija Festival has been held in Buraydah every year since 2009, and the city's food heritage earned it a place in UNESCO's Creative Cities Network in 2021.",
          ar: "الحلوى الرسمية للقصيم. ويُقام مهرجان الكليجا في بريدة كل عام منذ 2009، وقد منح التراثُ الغذائي المدينةَ مكانًا في شبكة اليونسكو للمدن المبدعة عام 2021.",
        },
      },
      {
        id: "water-tower",
        eyebrow: { en: "66 m", ar: "66 م" },
        name: { en: "Buraydah Water Tower", ar: "برج مياه بريدة" },
        detail: {
          en: "Shaped like a golf ball, with a lounge and restaurant above the reservoir and a viewing deck over the whole city.",
          ar: "على هيئة كرة غولف، وفوق خزان المياه صالة ومطعم، ومن أعلاه منصة تطل على المدينة كلها.",
        },
      },
      {
        id: "king-abdullah-national-park",
        eyebrow: { en: "Events venue", ar: "موقع للفعاليات" },
        name: { en: "King Abdullah National Park", ar: "متنزه الملك عبدالله الوطني" },
        detail: {
          en: "A city park that hosts public events, such as the Buraydah Summer Festival.",
          ar: "متنزه في المدينة يستضيف فعاليات عامة، مثل مهرجان صيف بريدة.",
        },
      },
    ],
  },

  mosque: {
    imageKey: "buraydah-grand-mosque",
    caption: {
      en: "The Grand Mosque of Buraydah, in the sandstone tones of Najdi architecture.",
      ar: "الجامع الكبير في بريدة، بألوان العمارة النجدية الرملية.",
    },
  },

  practical: {
    heading: { en: "Arriving in Buraydah", ar: "الوصول إلى بريدة" },
    items: [
      {
        name: { en: "Prince Naif bin Abdulaziz International Airport (ELQ)", ar: "مطار الأمير نايف بن عبدالعزيز الدولي (ELQ)" },
        detail: { en: "West of the city; the only airport serving Al-Qassim.", ar: "غرب المدينة، وهو المطار الوحيد في منطقة القصيم." },
      },
      {
        name: { en: "SAR railway station", ar: "محطة قطار سار" },
        detail: { en: "A stop on the North line from Riyadh.", ar: "محطة على خط الشمال القادم من الرياض." },
      },
    ],
    note: {
      en: "Airport pickups and drop-offs are among our services (see above). Railway-station pickups are not offered on this page at present.",
      ar: "الاستقبال والتوصيل في المطار من خدماتنا (انظر أعلاه)، أما الاستقبال من محطة القطار فليس متاحًا في هذه الصفحة حاليًا.",
    },
  },

  enquiry: {
    heading: { en: "Request a Buraydah quote", ar: "اطلب عرض سعر في بريدة" },
    lead: {
      en: "A journey in the city, an airport or hotel pickup, a trip to Unaizah or the road from Riyadh — send the details and we reply in writing.",
      ar: "رحلة داخل المدينة، أو استقبال من المطار أو الفندق، أو رحلة إلى عنيزة، أو الطريق من الرياض: أرسل التفاصيل ونرد عليك كتابةً.",
    },
    steps: [
      {
        en: "Send the pickup and destination — with the flight number for an airport journey — the date and time, and how many passengers and suitcases.",
        ar: "أرسل نقطة الانطلاق والوجهة، ورقم الرحلة الجوية إن كانت الرحلة من المطار أو إليه، والتاريخ والوقت، وعدد الركاب والحقائب.",
      },
      { en: "We confirm availability for your date and time and reply to you.", ar: "نؤكد الإتاحة في التاريخ والوقت المطلوبين ونرد عليك." },
      { en: "We send a written price and the vehicle category for you to consider.", ar: "نرسل إليك سعرًا مكتوبًا وفئة المركبة لتنظر فيهما." },
    ],
    note: {
      en: "A quote request is not a booking. Nothing is confirmed or paid until you accept a written quotation.",
      ar: "طلب عرض السعر ليس حجزًا، ولا يُؤكَّد شيء ولا يُدفع حتى توافق على عرض سعر مكتوب.",
    },
  },

  faqHeading: { en: "Buraydah: common questions", ar: "بريدة: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Where is Buraydah?", ar: "أين تقع بريدة؟" },
      answer: {
        en: "In the north-central part of Saudi Arabia. It is the seat of the Emirate of Al-Qassim and stands 600–650 m above sea level, at the meeting of routes between Riyadh, Hail and Madinah.",
        ar: "في الجزء الشمالي من وسط المملكة العربية السعودية، وهي مقر إمارة منطقة القصيم، وترتفع بين 600 و650 م عن سطح البحر، عند ملتقى الطرق بين الرياض وحائل والمدينة المنورة.",
      },
    },
    {
      question: { en: "What is Buraydah known for?", ar: "بماذا تشتهر بريدة؟" },
      answer: {
        en: "Above all its dates: the annual Buraydah Date Festival at Dates City is described by Saudipedia as the world's largest date market. It is also known for klija, Al-Qassim's official sweet, and has been a UNESCO City of Gastronomy since 2021.",
        ar: "بالتمور قبل كل شيء، إذ تصف سعوديبيديا مهرجان تمور بريدة السنوي في مدينة التمور بأنه أكبر سوق للتمور في العالم. وتشتهر أيضًا بالكليجا، الحلوى الرسمية للقصيم، وهي مدينة مبدعة في فنون الطهي لدى اليونسكو منذ 2021.",
      },
    },
    {
      question: { en: "What is klija?", ar: "ما الكليجا؟" },
      answer: {
        en: "A traditional sweet that is Al-Qassim's official dessert. Buraydah has held a Klija Festival every year since 2009, with traditional food and handicrafts from producing families.",
        ar: "حلوى تقليدية هي الحلوى الرسمية لمنطقة القصيم. وتقيم بريدة مهرجان الكليجا كل عام منذ 2009، ويضم الأطعمة التقليدية والحرف اليدوية من الأسر المنتجة.",
      },
    },
    {
      question: { en: "Do you offer private transfers in Buraydah?", ar: "هل تقدّمون التوصيل الخاص في بريدة؟" },
      answer: {
        en: "Yes. Our local drivers provide private transfers within Buraydah, pickups and drop-offs at Prince Naif bin Abdulaziz International Airport (ELQ) and at hotels, and journeys between Buraydah and Unaizah. Send your journey details and we reply with a written quotation.",
        ar: "نعم. يقدّم سائقونا المحليون التوصيل الخاص داخل بريدة، والاستقبال والتوصيل في مطار الأمير نايف بن عبدالعزيز الدولي وفي الفنادق، والرحلات بين بريدة وعنيزة. أرسل تفاصيل رحلتك ونرد بعرض سعر مكتوب.",
      },
    },
    {
      question: { en: "Can you pick me up from Qassim's airport?", ar: "هل يمكنكم استقبالي من مطار القصيم؟" },
      answer: {
        en: "Yes. We provide pickups and drop-offs at Prince Naif bin Abdulaziz International Airport (ELQ), west of Buraydah. Send the flight number with your request; how and where you meet the driver is confirmed for your journey.",
        ar: "نعم. نقدّم الاستقبال والتوصيل في مطار الأمير نايف بن عبدالعزيز الدولي غرب بريدة. أرسل رقم الرحلة الجوية مع طلبك، ونؤكد لك طريقة لقاء السائق ومكانه لرحلتك.",
      },
    },
    {
      question: { en: "Do you drive from Riyadh to Buraydah?", ar: "هل توصلون من الرياض إلى بريدة؟" },
      answer: {
        en: "Yes — a private transfer north from the capital. Our Riyadh to Buraydah page covers the route, including other towns in Al-Qassim. A quote request is not a booking; nothing is confirmed until you accept a written quotation.",
        ar: "نعم، نقل خاص شمالًا من العاصمة. وتشرح صفحة «الرياض إلى بريدة» هذا المسار، بما في ذلك مدن القصيم الأخرى. وطلب عرض السعر ليس حجزًا، ولا يُؤكَّد شيء حتى توافق على عرض سعر مكتوب.",
      },
    },
  ],

  relatedHeading: { en: "More destinations", ar: "وجهات أخرى" },

  related: [
    {
      routeKey: "riyadhToBuraydah",
      label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },
      note: { en: "The private transfer north from the capital into Al-Qassim.", ar: "النقل الخاص شمالًا من العاصمة إلى القصيم." },
    },
    {
      routeKey: "unaizah",
      label: { en: "Transfers in Unaizah", ar: "التوصيل في عنيزة" },
      note: { en: "The caravan town about 28 km away: local journeys and hotels.", ar: "محطة القوافل على بعد نحو 28 كم: التنقل داخل المدينة والفنادق." },
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
    {
      routeKey: "alula",
      label: { en: "AlUla", ar: "العلا" },
      note: { en: "Airport, Old Town and Hegra.", ar: "المطار والبلدة القديمة والحِجر." },
    },
  ],

  cta: {
    eyebrow: { en: "Buraydah", ar: "بريدة" },
    heading: { en: "Request a Buraydah transfer quotation", ar: "اطلب عرض سعر للتوصيل في بريدة" },
    body: {
      en: "The city, the airport, a hotel, Unaizah or the road from Riyadh. We reply with a written price.",
      ar: "المدينة أو المطار أو الفندق أو عنيزة أو الطريق من الرياض. ونرد عليك بسعر مكتوب.",
    },
    button: { en: "Request a quote", ar: "اطلب عرض سعر" },
  },
};
