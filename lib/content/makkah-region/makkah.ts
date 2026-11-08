import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Makkah — destination hub.
 *
 * Intent: private transfers **in and from** Makkah — how people arrive (there
 * is no Makkah airport), getting between hotels, the Haramain station and the
 * sites, and the onward journeys. The Jeddah→Makkah journey itself belongs to
 * its own page; this hub links to it and does not repeat its distance, rail
 * comparison or seasonal detail.
 *
 * Facts (local research folder, makkah-region/01):
 * - Muslims only — Visit Saudi. Seasonal Hajj-period rules are announced each
 *   year; the 1447 AH example and the official link live on Jeddah→Makkah.
 * - Haramain station in al-Rusaifa, ~3 km from the Grand Mosque; Makkah↔Madinah
 *   2 h 45 min by train — Saudipedia.
 * - Taif International Airport ~27 km north-east of central Taif — Saudipedia.
 * - Hotel-dependent drop-off: owner-approved wording.
 *
 * Deliberately absent: a Makkah airport, prices, vehicle models, waiting
 * allowances, checkpoint procedures, permits, operator status, named Ziyarat
 * itineraries or site access rules.
 */

type B = Bilingual<string>;

export type MakkahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  trainImageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B; answer: B };
  arrivals: {
    heading: B;
    lead: B;
    ways: { id: string; label: B; title: B; detail: B; link?: { routeKey?: RouteKey; anchor?: string; label: B } }[];
  };
  entry: { heading: B; allYear: B; seasonal: B; policy: B; linkLabel: B; officialLabel: B; officialUrl: string; officialNote: B };
  station: { heading: B; paragraphs: B[] };
  hotels: { heading: B; lead: B; options: { title: B; detail: B }[]; note: B };
  within: { heading: B; items: { title: B; detail: B }[] };
  onward: {
    heading: B;
    lead: B;
    rows: { to: B; distance: B; note: B; link?: { routeKey: RouteKey; label: B } }[];
    footnote: B;
  };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const makkah: MakkahContent = {
  routeKey: "makkah",
  imageKey: "makkah-region-night",
  trainImageKey: "makkah-haramain-train",

  seo: {
    title: {
      en: "Makkah Private Transfers | Hotels, Train Station, Taif",
      ar: "نقل خاص في مكة المكرمة | الفنادق ومحطة القطار والطائف",
    },
    description: {
      en: "Private transfers in and from Makkah: arrivals via Jeddah or Taif airport, the Haramain station, hotel runs and onward to Taif or Madinah. Get a written quote.",
      ar: "توصيل خاص داخل مكة المكرمة ومنها: الوصول عبر مطار جدة أو الطائف، ومحطة قطار الحرمين في الرصيفة، والتنقل بين الفنادق، والسفر إلى الطائف أو المدينة. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Makkah", ar: "مكة المكرمة" },

  hero: {
    eyebrow: { en: "Makkah Region · Makkah", ar: "منطقة مكة المكرمة · مكة" },
    h1: {
      en: "Private transfers in and from Makkah",
      ar: "نقل خاص في مكة المكرمة ومنها",
    },
    lead: {
      en: "Makkah has no airport of its own, so every visit begins somewhere else — King Abdulaziz airport in Jeddah, Taif airport in the highlands, or the Haramain train. We coordinate the road journeys around that: arrival, hotel runs inside the city, and the drive onward.",
      ar: "لا مطار في مكة المكرمة، فكل زيارة تبدأ من مكان آخر: مطار الملك عبدالعزيز في جدة، أو مطار الطائف في المرتفعات، أو قطار الحرمين. ونحن نرتّب الرحلات البرية حول ذلك: الوصول، والتنقل بين الفنادق داخل المدينة، والسفر بعدها.",
    },
    answer: {
      en: "Entry to Makkah is restricted to Muslims, and further restrictions are announced around the Hajj season. We only accept journeys into Makkah for passengers who may legally enter on the travel date.",
      ar: "دخول مكة المكرمة مقصور على المسلمين، وتُعلَن حول موسم الحج قيود إضافية. ولا نقبل رحلات إلى مكة إلا لركاب يحق لهم دخولها نظامًا في تاريخ الرحلة.",
    },
  },

  arrivals: {
    heading: { en: "Three ways into Makkah", ar: "ثلاث طرق للوصول إلى مكة المكرمة" },
    lead: {
      en: "Almost every arrival comes through one of these. Each starts a different kind of road journey.",
      ar: "يأتي كل الواصلين تقريبًا عبر إحدى هذه الطرق، ولكل منها رحلة برية مختلفة.",
    },
    ways: [
      {
        id: "jed",
        label: { en: "By air, west", ar: "جوًّا من الغرب" },
        title: { en: "King Abdulaziz airport, Jeddah", ar: "مطار الملك عبدالعزيز بجدة" },
        detail: {
          en: "The most common way in. The drive to a Makkah hotel is covered in full on its own page — distance, timing, the train comparison and the seasonal rules.",
          ar: "الطريقة الأكثر شيوعًا. ورحلة التوصيل إلى فنادق مكة مشروحة كاملة في صفحتها الخاصة: المسافة والتوقيت والمقارنة بالقطار وقيود الموسم.",
        },
        link: { routeKey: "jeddahToMakkah", label: { en: "Jeddah Airport to Makkah", ar: "من مطار جدة إلى مكة" } },
      },
      {
        id: "tif",
        label: { en: "By air, east", ar: "جوًّا من الشرق" },
        title: { en: "Taif International Airport", ar: "مطار الطائف الدولي" },
        detail: {
          en: "About 27 km north-east of central Taif — so a Makkah arrival through Taif crosses the city first, then comes down the mountain road.",
          ar: "يقع على بعد نحو 27 كم شمال شرق وسط الطائف، فيعبر الواصل إلى مكة عبره المدينة أولًا ثم ينزل الطريق الجبلي.",
        },
        link: { routeKey: "taif", label: { en: "Taif transfers and the two roads down", ar: "التوصيل في الطائف والطريقان إلى مكة" } },
      },
      {
        id: "train",
        label: { en: "By rail", ar: "بالقطار" },
        title: { en: "Haramain station, al-Rusaifa", ar: "محطة قطار الحرمين في الرصيفة" },
        detail: {
          en: "Makkah's Haramain station is about 3 km from the Grand Mosque. The last leg to your hotel is a short road transfer.",
          ar: "تقع محطة قطار الحرمين في مكة على بعد نحو 3 كم من المسجد الحرام، والمرحلة الأخيرة إلى فندقك توصيل بري قصير.",
        },
        link: { anchor: "makkah-station", label: { en: "From the station to your hotel", ar: "من المحطة إلى فندقك" } },
      },
    ],
  },

  entry: {
    heading: { en: "Before any journey into Makkah", ar: "قبل أي رحلة إلى مكة المكرمة" },
    allYear: {
      en: "All year, entry to Makkah is restricted to Muslims, and entry requirements are enforced at checkpoints on the roads into the city.",
      ar: "دخول مكة المكرمة مقصور على المسلمين طوال العام، وتُطبَّق شروط الدخول عند نقاط التفتيش على الطرق المؤدية إليها.",
    },
    seasonal: {
      en: "Around the Hajj season the Ministry of Interior announces further restrictions, which have included entry permits for residents and a bar on visit-visa holders. They change from season to season — check the current official announcement for your travel date.",
      ar: "وحول موسم الحج تعلن وزارة الداخلية قيودًا إضافية، وقد شملت اشتراط تصريح دخول للمقيمين ومنع حاملي تأشيرات الزيارة. وتتغير من موسم إلى آخر، فتحقق من الإعلان الرسمي الساري لتاريخ رحلتك.",
    },
    policy: {
      en: "We will not accept or carry a passenger who is not legally permitted to enter Makkah on their travel date. We arrange road transport only and are not an official Hajj or Umrah operator.",
      ar: "لا نقبل ولا ننقل أي راكب لا يحق له نظامًا دخول مكة المكرمة في تاريخ رحلته. ونحن نرتّب النقل البري فقط، ولسنا مشغّلاً رسميًا للحج أو العمرة.",
    },
    linkLabel: {
      en: "The seasonal rules in full, with the 1447 AH example",
      ar: "قيود الموسم كاملة مع مثال موسم 1447هـ",
    },
    officialLabel: {
      en: "Ministry of Interior arrangements for 1447 AH (in Arabic)",
      ar: "ترتيبات وزارة الداخلية لموسم 1447هـ",
    },
    officialUrl: "https://pep.gov.sa/ar/news/926",
    officialNote: {
      en: "Published by the Pilgrim Experience Program, a Saudi government programme — an example of how each season is announced.",
      ar: "منشورة على موقع برنامج خدمة ضيوف الرحمن الحكومي، مثالًا على طريقة إعلان كل موسم.",
    },
  },

  station: {
    heading: { en: "From the Haramain station to your hotel", ar: "من محطة قطار الحرمين إلى فندقك" },
    paragraphs: [
      {
        en: "Makkah's Haramain station is in al-Rusaifa, about 3 km from the Grand Mosque. Trains connect it with Jeddah, King Abdulaziz airport, King Abdullah Economic City and Madinah — the journey to Madinah takes about two hours and forty-five minutes.",
        ar: "تقع محطة قطار الحرمين في مكة بحي الرصيفة، على بعد نحو 3 كم من المسجد الحرام. وتربطها القطارات بجدة ومطار الملك عبدالعزيز ومدينة الملك عبدالله الاقتصادية والمدينة المنورة، والرحلة إلى المدينة نحو ساعتين وخمس وأربعين دقيقة.",
      },
      {
        en: "A train ends at a station, so the last stretch to a hotel is by road. Tell us the train and its arrival time, the hotel, and how many passengers and suitcases. For a departure, give us the train time and we set the hotel pickup from it.",
        ar: "ينتهي القطار عند المحطة، فتكون المسافة الأخيرة إلى الفندق برًّا. أخبرنا بالقطار وموعد وصوله والفندق وعدد الركاب والحقائب. وللمغادرة، أخبرنا بموعد القطار ونحدد موعد الاستقبال من الفندق بناءً عليه.",
      },
    ],
  },

  hotels: {
    heading: { en: "Hotel drop-off and pickup near the Haram", ar: "النزول والاستقبال عند فنادق الحرم" },
    lead: {
      en: "Vehicle access around the Grand Mosque is controlled, and it is not the same for every hotel.",
      ar: "دخول المركبات حول المسجد الحرام منظَّم، ولا يتساوى فيه كل الفنادق.",
    },
    options: [
      {
        title: { en: "At the hotel entrance", ar: "عند مدخل الفندق" },
        detail: {
          en: "Some hotels allow vehicles to reach their entrance, and the car comes to the door.",
          ar: "بعض الفنادق تسمح بوصول المركبات إلى مدخلها، فتصل السيارة إلى الباب.",
        },
      },
      {
        title: { en: "At the nearest permitted point", ar: "عند أقرب نقطة مسموح بها" },
        detail: {
          en: "Others can only be reached on foot from the nearest point vehicles are permitted, so drop-off and pickup happen there.",
          ar: "وفنادق أخرى لا يُوصَل إليها إلا مشيًا من أقرب نقطة يُسمح للمركبات بالوصول إليها، فيكون النزول والاستقبال هناك.",
        },
      },
    ],
    note: {
      en: "Which one applies depends on the hotel and the access restrictions at the time, and it is confirmed when the journey is arranged — for arrivals and for return pickups alike.",
      ar: "ويعتمد أيّهما ينطبق على الفندق وعلى قيود الدخول السارية حينها، ويُؤكَّد ذلك عند ترتيب الرحلة، للوصول ولرحلات العودة على حد سواء.",
    },
  },

  within: {
    heading: { en: "Journeys inside Makkah", ar: "التنقل داخل مكة المكرمة" },
    items: [
      {
        title: { en: "Hotel to hotel", ar: "من فندق إلى فندق" },
        detail: {
          en: "Moving between hotels during a stay, with the family and the luggage together. Name both hotels.",
          ar: "الانتقال بين الفنادق أثناء الإقامة مع العائلة والأمتعة معًا. اذكر اسم الفندقين.",
        },
      },
      {
        title: { en: "Train station to hotel", ar: "من محطة القطار إلى الفندق" },
        detail: {
          en: "The short road leg after a train arrival, or before a departure.",
          ar: "المرحلة البرية القصيرة بعد الوصول بالقطار أو قبل المغادرة.",
        },
      },
      {
        title: { en: "Ziyarat", ar: "الزيارة" },
        detail: {
          en: "A private vehicle for visiting sites around Makkah. Send the places you want to visit and the time you have; we quote the journey, and we do not act as a guide.",
          ar: "سيارة خاصة لزيارة المواقع حول مكة المكرمة. أرسل الأماكن التي تريد زيارتها والوقت المتاح لك، ونُسعّر الرحلة، ولسنا مرشدين.",
        },
      },
    ],
  },

  onward: {
    heading: { en: "Onward from Makkah", ar: "السفر من مكة المكرمة" },
    lead: {
      en: "The journeys people most often make next — each with the page that covers it in detail where one exists.",
      ar: "الرحلات التي يقوم بها الناس غالبًا بعد مكة، ومع كل منها الصفحة التي تشرحها بالتفصيل إن وُجدت.",
    },
    rows: [
      {
        to: { en: "Jeddah and King Abdulaziz airport", ar: "جدة ومطار الملك عبدالعزيز" },
        distance: { en: "80–100 km", ar: "80–100 كم" },
        note: {
          en: "The return to the airport or the city. For a flight, we work back from the airline's check-in time.",
          ar: "العودة إلى المطار أو المدينة، وللطيران نحسب الموعد تراجعيًا من موعد إجراءات شركة الطيران.",
        },
        link: { routeKey: "jeddahToMakkah", label: { en: "Makkah to Jeddah, both directions", ar: "بين مكة وجدة في الاتجاهين" } },
      },
      {
        to: { en: "Taif", ar: "الطائف" },
        distance: { en: "~90 km via Al Hada", ar: "~90 كم عبر الهدا" },
        note: {
          en: "Up the mountain road to the highlands, or the longer road via Al Sail.",
          ar: "صعودًا عبر الطريق الجبلي إلى المرتفعات، أو الطريق الأطول عبر السيل.",
        },
        link: { routeKey: "taif", label: { en: "Makkah to Taif private transfers", ar: "التوصيل من مكة إلى الطائف" } },
      },
      {
        to: { en: "Madinah", ar: "المدينة المنورة" },
        distance: { en: "~450 km", ar: "~450 كم" },
        note: {
          en: "A long drive north. The Haramain train covers it in about 2 h 45 min and is often the better answer for one or two people travelling light.",
          ar: "رحلة طويلة شمالًا، ويقطعها قطار الحرمين في نحو ساعتين و45 دقيقة، وهو غالبًا الخيار الأفضل لشخص أو شخصين بأمتعة خفيفة.",
        },
      },
      {
        to: { en: "Rabigh", ar: "رابغ" },
        distance: { en: "North along the coast", ar: "شمالًا على الساحل" },
        note: {
          en: "Via Jeddah, to the coast and King Abdullah Economic City.",
          ar: "عبر جدة إلى الساحل ومدينة الملك عبدالله الاقتصادية.",
        },
        link: { routeKey: "rabigh", label: { en: "Rabigh and KAEC", ar: "رابغ ومدينة الملك عبدالله الاقتصادية" } },
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
        en: "Where the journey starts — airport and flight number, train and arrival time, or a hotel — and where it ends.",
        ar: "نقطة الانطلاق، سواء المطار ورقم الرحلة أو القطار وموعد وصوله أو الفندق، ونقطة الوصول.",
      },
      {
        en: "The date and time, and how many passengers and suitcases.",
        ar: "التاريخ والوقت وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and the trip details are confirmed before the booking is accepted; nothing is paid until you accept.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز، ولا يُدفع شيء حتى توافق.",
      },
    ],
  },

  faqHeading: { en: "Makkah transfers: common questions", ar: "النقل في مكة المكرمة: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "Is there an airport in Makkah?", ar: "هل يوجد مطار في مكة المكرمة؟" },
      answer: {
        en: "No. Most visitors fly into King Abdulaziz International Airport in Jeddah; some use Taif International Airport, about 27 km north-east of central Taif. The Haramain train also reaches Makkah from Jeddah, the Jeddah airport and Madinah.",
        ar: "لا. يصل معظم الزوار عبر مطار الملك عبدالعزيز الدولي في جدة، ويستخدم بعضهم مطار الطائف الدولي الواقع على بعد نحو 27 كم شمال شرق وسط الطائف. كما يصل قطار الحرمين إلى مكة من جدة ومطارها ومن المدينة المنورة.",
      },
    },
    {
      question: { en: "How far is Makkah train station from the Haram?", ar: "كم تبعد محطة قطار مكة عن الحرم؟" },
      answer: {
        en: "About 3 km. The station is in al-Rusaifa, and the last stretch to a hotel is by road; tell us the train and the hotel and we quote that leg.",
        ar: "نحو 3 كم. فالمحطة في حي الرصيفة، والمسافة الأخيرة إلى الفندق برًّا. أخبرنا بالقطار والفندق ونُسعّر هذه المرحلة.",
      },
    },
    {
      question: { en: "Will the car take us to our hotel door?", ar: "هل توصلنا السيارة إلى باب الفندق؟" },
      answer: {
        en: "It depends on the hotel. Some allow vehicles to their entrance; others are reached on foot from the nearest permitted vehicle point. It is confirmed when the journey is arranged, for return pickups too.",
        ar: "يعتمد ذلك على الفندق. فبعضها يسمح بوصول المركبات إلى مدخله، وأخرى يُوصَل إليها مشيًا من أقرب نقطة مسموح بها للمركبات، ويُؤكَّد ذلك عند ترتيب الرحلة، وكذلك في رحلات العودة.",
      },
    },
    {
      question: { en: "Can you take us from Makkah to Madinah by car?", ar: "هل توفرون التوصيل من مكة إلى المدينة المنورة بالسيارة؟" },
      answer: {
        en: "Yes, as a private road journey of roughly 450 km. For one or two people travelling light the Haramain train, about 2 h 45 min, is often the better answer; the car suits families, real luggage and door-to-door plans.",
        ar: "نعم، رحلة برية خاصة بطول نحو 450 كم. ولشخص أو شخصين بأمتعة خفيفة يكون قطار الحرمين، نحو ساعتين و45 دقيقة، الخيار الأفضل غالبًا، أما السيارة فتناسب العائلات والأمتعة الفعلية والتوصيل من الباب إلى الباب.",
      },
    },
    {
      question: { en: "Do you arrange Ziyarat in Makkah?", ar: "هل ترتّبون الزيارة في مكة المكرمة؟" },
      answer: {
        en: "We provide the private vehicle. Send the sites you want to visit and how long you have, and we quote the journey. We do not act as guides and make no claims about access to any site.",
        ar: "نوفّر السيارة الخاصة. أرسل المواقع التي تريد زيارتها والمدة المتاحة، ونُسعّر الرحلة. ولسنا مرشدين ولا ندّعي شيئًا بشأن الدخول إلى أي موقع.",
      },
    },
    {
      question: { en: "Can non-Muslims travel to Makkah?", ar: "هل يمكن لغير المسلمين دخول مكة؟" },
      answer: {
        en: "No. Entry to Makkah is restricted to Muslims all year, and we will not carry a passenger who is not permitted to enter. Jeddah, Taif and the coast are open to everyone.",
        ar: "لا. دخول مكة المكرمة مقصور على المسلمين طوال العام، ولا ننقل راكبًا لا يحق له الدخول. أما جدة والطائف والساحل فمتاحة للجميع.",
      },
    },
  ],

  related: [
    {
      routeKey: "jeddahToMakkah",
      label: { en: "Jeddah to Makkah", ar: "من جدة إلى مكة" },
      note: {
        en: "The arrival in full: airport or city pickup, the 80–100 km road and the seasonal rules.",
        ar: "الوصول كاملًا: الاستقبال من المطار أو المدينة، وطريق 80–100 كم، وقيود الموسم.",
      },
    },
    {
      routeKey: "jeddahAirport",
      label: { en: "Jeddah airport transfers", ar: "النقل من مطار جدة" },
      note: {
        en: "King Abdulaziz in detail: terminals, both directions and the railway station at the airport.",
        ar: "مطار الملك عبدالعزيز بالتفصيل: الصالات والاتجاهان ومحطة القطار في المطار.",
      },
    },
    {
      routeKey: "taif",
      label: { en: "Taif", ar: "الطائف" },
      note: {
        en: "The mountain city above Makkah: Taif airport, Al Hada and Al Shafa.",
        ar: "المدينة الجبلية فوق مكة: مطار الطائف والهدا والشفا.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "Where else to go from the Red Sea coast.",
        ar: "إلى أين تتجه أيضًا من ساحل البحر الأحمر.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Arrive, stay, move on", ar: "الوصول والإقامة والسفر" },
    heading: { en: "Request a Makkah transfer quotation", ar: "اطلب عرض سعر للتوصيل في مكة المكرمة" },
    body: {
      en: "Where you start, where you are going, the date and how many of you. We reply with a written price.",
      ar: "من أين تنطلق وإلى أين تتجه والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Makkah quote", ar: "اطلب سعر التوصيل في مكة" },
  },
};
