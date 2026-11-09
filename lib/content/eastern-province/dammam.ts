import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Dammam, Al Khobar and Dhahran — the Eastern Province metropolitan hub.
 *
 * One page for three closely connected cities (owner-approved architecture,
 * 8 Nov 2026): Al Khobar and Dhahran are sections with stable anchors
 * (#al-khobar, #dhahran), not separate pages.
 *
 * Owner-confirmed coverage (research folder, eastern-province/04):
 * - King Fahd International Airport pickups and drop-offs; arrangements are
 *   confirmed for each journey.
 * - Local journeys between Dammam, Al Khobar and Dhahran.
 * - Hotel transfers across the three cities.
 * Not offered here: railway-station transfers, hourly hire, tickets, any
 * cross-border journey, controlled-site entry, Qatif/Saihat/Ras Tanura etc.
 *
 * Facts (eastern-province/02):
 * - Dammam is the provincial capital — Saudipedia.
 * - The three cities are "closely connected and just minutes apart by car";
 *   Dammam corniche, Half Moon Beach, Heritage Village; Al Khobar corniche
 *   and waterfront hotels ("social hub"); Ithra in Dhahran, "check events in
 *   advance and book tickets when needed" — Visit Saudi (H).
 * - KFIA ~35.6 km from Dammam, 46.8 km from Dhahran, 57.9 km from Al Khobar;
 *   current name since 1999; managed by Dammam Airports Company since 2017 —
 *   Saudipedia (M). Rounded to whole kilometres on the page.
 * - King Fahd Causeway starts at Aziziyah, south of Al Khobar — Saudipedia.
 * - The Riyadh line starts from Dammam — Saudipedia (station as context only).
 *
 * Compound / controlled-site wording matches the approved Riyadh R4 text.
 */

type B = Bilingual<string>;

export type CitySection = {
  id: "dammam" | "dhahran" | "al-khobar";
  name: B;
  role: B;
  imageKey: SiteImageKey;
  paragraphs: B[];
  note?: B;
};

export type DammamContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  coastline: {
    heading: B;
    stops: { name: B; caption: B; fromAirport?: B; anchor?: CitySection["id"] }[];
    footnote: B;
  };
  airport: { heading: B; paragraphs: B[]; distances: { label: B; value: B }[]; railNote: B };
  cities: { heading: B; lead: B; sections: CitySection[] };
  hotels: { heading: B; paragraphs: B[]; compound: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const dammam: DammamContent = {
  routeKey: "dammam",
  imageKey: "khobar-corniche",

  seo: {
    title: {
      en: "Dammam, Al Khobar and Dhahran Transfers | Airport, Hotels",
      ar: "توصيل في الدمام والخبر والظهران | المطار والفنادق",
    },
    description: {
      en: "Private transfers in Dammam, Al Khobar and Dhahran: King Fahd International Airport pickups, hotel transfers and journeys between the three cities.",
      ar: "توصيل خاص في الدمام والخبر والظهران: الاستقبال من مطار الملك فهد الدولي، والتوصيل من الفنادق وإليها، والتنقل بين المدن الثلاث. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Dammam, Al Khobar & Dhahran", ar: "الدمام والخبر والظهران" },

  hero: {
    eyebrow: { en: "Eastern Province · Gulf coast", ar: "المنطقة الشرقية · ساحل الخليج" },
    h1: {
      en: "Private transfers in Dammam, Al Khobar and Dhahran",
      ar: "توصيل خاص في الدمام والخبر والظهران",
    },
    lead: {
      en: "Dammam is the capital of the Eastern Province, and with Al Khobar and Dhahran it makes up three closely connected cities on the Gulf coast — just minutes apart by car, as Visit Saudi puts it. We meet flights at King Fahd International Airport, take you to and from hotels, and drive between the three cities, with each pickup point confirmed for your journey.",
      ar: "الدمام عاصمة المنطقة الشرقية، وتتصل بها الخبر والظهران اتصالًا وثيقًا على ساحل الخليج، حتى إن روح السعودية تصف المسافة بينها بدقائق بالسيارة. نستقبل رحلتك في مطار الملك فهد الدولي، ونوصلك من الفنادق وإليها، وننقلك بين المدن الثلاث، ونؤكد نقطة الاستقبال لكل رحلة.",
    },
  },

  coastline: {
    heading: { en: "From the airport to the coast", ar: "من المطار إلى الساحل" },
    stops: [
      {
        name: { en: "King Fahd International Airport", ar: "مطار الملك فهد الدولي" },
        caption: { en: "Inland, where most journeys begin", ar: "في الداخل، ومنه تبدأ معظم الرحلات" },
      },
      {
        name: { en: "Dammam", ar: "الدمام" },
        caption: { en: "The provincial capital", ar: "عاصمة المنطقة" },
        fromAirport: { en: "~36 km", ar: "~36 كم" },
        anchor: "dammam",
      },
      {
        name: { en: "Dhahran", ar: "الظهران" },
        caption: { en: "Ithra and the university", ar: "«إثراء» والجامعة" },
        fromAirport: { en: "~47 km", ar: "~47 كم" },
        anchor: "dhahran",
      },
      {
        name: { en: "Al Khobar", ar: "الخبر" },
        caption: { en: "Corniche and waterfront hotels", ar: "الكورنيش والفنادق البحرية" },
        fromAirport: { en: "~58 km", ar: "~58 كم" },
        anchor: "al-khobar",
      },
    ],
    footnote: {
      en: "Distances from the airport are Saudipedia's approximate figures, rounded; your actual pickup and destination decide the journey.",
      ar: "المسافات من المطار أرقام تقريبية من سعوديبيديا بعد التقريب، ونقطة انطلاقك ووجهتك الفعليتان هما ما يحدد الرحلة.",
    },
  },

  airport: {
    heading: { en: "Arriving at King Fahd International Airport", ar: "الوصول إلى مطار الملك فهد الدولي" },
    paragraphs: [
      {
        en: "The airport for the Dammam area sits well inland, so every arrival begins with a road journey to the coast. It has carried its current name since 1999 and has been run by Dammam Airports Company since 2017.",
        ar: "يقع مطار منطقة الدمام في الداخل بعيدًا عن الساحل، فكل وصول يبدأ برحلة برية نحو المدن الساحلية. ويحمل اسمه الحالي منذ عام 1999، وتديره شركة مطارات الدمام منذ عام 2017.",
      },
      {
        en: "Send the flight number and the address you are going to. The pickup follows the aircraft rather than a clock time, and how and where you meet the driver is confirmed for your journey. For a departure, give us the airline's check-in time and we work back from it.",
        ar: "أرسل رقم الرحلة والعنوان الذي تقصده، ليتبع موعد الاستقبال الطائرة لا توقيت الساعة، ونؤكد لك طريقة لقاء السائق ومكانه لرحلتك. وللمغادرة، أخبرنا بموعد إجراءات شركة الطيران ونحسب الموعد تراجعيًا منه.",
      },
    ],
    distances: [
      { label: { en: "To Dammam", ar: "إلى الدمام" }, value: { en: "~36 km", ar: "~36 كم" } },
      { label: { en: "To Dhahran", ar: "إلى الظهران" }, value: { en: "~47 km", ar: "~47 كم" } },
      { label: { en: "To Al Khobar", ar: "إلى الخبر" }, value: { en: "~58 km", ar: "~58 كم" } },
    ],
    railNote: {
      en: "Dammam also has a passenger railway station, at the eastern end of the line to Riyadh. Station pickups and drop-offs are not among the services on this page.",
      ar: "وفي الدمام أيضًا محطة قطار للركاب في الطرف الشرقي من خط الرياض، لكن الاستقبال والتوصيل من المحطة ليسا ضمن خدمات هذه الصفحة.",
    },
  },

  cities: {
    heading: { en: "Three cities, one stretch of coast", ar: "ثلاث مدن على ساحل واحد" },
    lead: {
      en: "People often say “Dammam” for all three, but the address decides the journey. Tell us the city and the exact place.",
      ar: "كثيرًا ما يُقال «الدمام» ويُقصد بها المدن الثلاث، لكن العنوان هو ما يحدد الرحلة، فأخبرنا بالمدينة والمكان تحديدًا.",
    },
    sections: [
      {
        id: "dammam",
        name: { en: "Dammam", ar: "الدمام" },
        role: { en: "The provincial capital", ar: "عاصمة المنطقة الشرقية" },
        imageKey: "dest-dammam",
        paragraphs: [
          {
            en: "The capital of the Eastern Province, on the Gulf. Visit Saudi points visitors to its corniche, to Half Moon Beach nearby and to the Heritage Village.",
            ar: "عاصمة المنطقة الشرقية على الخليج، وتوجّه روح السعودية زوارها إلى كورنيشها وإلى شاطئ نصف القمر القريب منها وإلى القرية الشعبية.",
          },
          {
            en: "Most journeys here start or end at a hotel, a home or an office. Give us the address; where the car can stop is confirmed for the journey.",
            ar: "وتبدأ معظم الرحلات فيها أو تنتهي عند فندق أو منزل أو مكتب. زوّدنا بالعنوان، ونؤكد مكان توقف السيارة لرحلتك.",
          },
        ],
      },
      {
        id: "dhahran",
        name: { en: "Dhahran", ar: "الظهران" },
        role: { en: "Culture, campus and company districts", ar: "الثقافة والجامعة وأحياء الشركات" },
        imageKey: "dhahran-ithra",
        paragraphs: [
          {
            en: "Home to Ithra, the King Abdulaziz Center for World Culture, with its museum, library, cinema and exhibitions. Visit Saudi advises checking events in advance and booking tickets when needed; tickets are booked with Ithra directly, not through us.",
            ar: "فيها «إثراء»، مركز الملك عبدالعزيز الثقافي العالمي، بمتحفه ومكتبته وسينماه ومعارضه. وتنصح روح السعودية بالاطلاع على الفعاليات مسبقًا وحجز التذاكر عند الحاجة، والتذاكر تُحجز مع «إثراء» مباشرة لا عن طريقنا.",
          },
        ],
        note: {
          en: "Parts of Dhahran are gated, access-controlled areas, including company residential districts and the university campus. Drop-off may be possible at an agreed entrance or gate; entry inside is not included, and security permission and internal access are not guaranteed.",
          ar: "وبعض أجزاء الظهران مناطق مسوّرة خاضعة للرقابة، منها أحياء سكنية تابعة لشركات والحرم الجامعي. وقد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى الداخل، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
        },
      },
      {
        id: "al-khobar",
        name: { en: "Al Khobar", ar: "الخبر" },
        role: { en: "The waterfront city", ar: "مدينة الواجهة البحرية" },
        imageKey: "dest-khobar",
        paragraphs: [
          {
            en: "A long corniche and hotels facing the Gulf; Visit Saudi calls it the Eastern Province's social hub and suggests its waterfront hotels for a stay.",
            ar: "كورنيش طويل وفنادق تطل على الخليج، وتصفها روح السعودية بالمركز الاجتماعي للمنطقة الشرقية وتقترح فنادقها البحرية للإقامة.",
          },
          {
            en: "Name the hotel, and the entrance if it has more than one. The drop-off point is confirmed for your journey.",
            ar: "اذكر اسم الفندق، والمدخل إن كان له أكثر من مدخل، ونؤكد لك نقطة النزول لرحلتك.",
          },
        ],
        note: {
          en: "The King Fahd Causeway to Bahrain starts just south of Al Khobar. Our service stays in Saudi Arabia: we do not cross the causeway or provide transport in Bahrain.",
          ar: "ويبدأ جسر الملك فهد إلى البحرين جنوب الخبر مباشرة، وخدمتنا داخل المملكة فقط، فنحن لا نعبر الجسر ولا نقدّم النقل داخل البحرين.",
        },
      },
    ],
  },

  hotels: {
    heading: { en: "Hotel pickups and drop-offs", ar: "الاستقبال والتوصيل من الفنادق" },
    paragraphs: [
      {
        en: "We collect from and deliver to hotels across Dammam, Al Khobar and Dhahran — from the airport, between the three cities, or to another address you give us.",
        ar: "نستقبلك من الفنادق ونوصلك إليها في الدمام والخبر والظهران، سواء من المطار أو بين المدن الثلاث أو إلى عنوان آخر تحدده.",
      },
      {
        en: "Where the car can wait depends on the hotel and the traffic on the day, so the exact pickup point is confirmed for each journey. We do not promise access to every entrance or forecourt.",
        ar: "ويعتمد مكان انتظار السيارة على الفندق وحركة المرور يومها، فنؤكد نقطة الاستقبال لكل رحلة، ولا نَعِد بالوصول إلى كل مدخل أو ساحة أمامية.",
      },
    ],
    compound: {
      en: "For a residential compound, drop-off may be possible at an agreed entrance or gate; entry inside the compound is not included, and security permission and internal access are not guaranteed.",
      ar: "وفي المجمّعات السكنية قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى داخل المجمّع، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup — flight number, hotel or address — and where you are going in Dammam, Al Khobar or Dhahran.",
        ar: "نقطة الانطلاق، سواء رقم الرحلة أو الفندق أو العنوان، ووجهتك في الدمام أو الخبر أو الظهران.",
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

  faqHeading: { en: "Dammam, Al Khobar and Dhahran: common questions", ar: "الدمام والخبر والظهران: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is King Fahd International Airport from Al Khobar?", ar: "كم يبعد مطار الدمام عن الخبر؟" },
      answer: {
        en: "About 58 km by Saudipedia's figure — and about 47 km from Dhahran and 36 km from Dammam. Send the flight number and the address, and the pickup follows the aircraft.",
        ar: "نحو 58 كم وفق سعوديبيديا، ونحو 47 كم عن الظهران و36 كم عن الدمام. أرسل رقم الرحلة والعنوان ليتبع موعد الاستقبال الطائرة.",
      },
    },
    {
      question: { en: "Are Dammam, Al Khobar and Dhahran separate cities?", ar: "هل الدمام والخبر والظهران مدن منفصلة؟" },
      answer: {
        en: "Yes — three cities, closely connected along the coast and only minutes apart by car. A journey between them is short, but the exact address still matters, so tell us the city and the place.",
        ar: "نعم، ثلاث مدن متصلة على الساحل تفصل بينها دقائق بالسيارة. والرحلة بينها قصيرة، لكن العنوان الدقيق يظل مهمًا، فأخبرنا بالمدينة والمكان.",
      },
    },
    {
      question: { en: "Do you pick up from hotels on the Al Khobar corniche?", ar: "هل تستقبلون من فنادق كورنيش الخبر؟" },
      answer: {
        en: "Yes. Name the hotel and, if it has more than one, the entrance. The exact pickup point depends on the hotel and the traffic on the day, and is confirmed for your journey.",
        ar: "نعم. اذكر اسم الفندق والمدخل إن كان له أكثر من مدخل. ويعتمد مكان الاستقبال تحديدًا على الفندق وحركة المرور يومها، ونؤكده لرحلتك.",
      },
    },
    {
      question: { en: "Can you drive into a compound or a company area in Dhahran?", ar: "هل يمكنكم الدخول إلى مجمّع سكني أو حي تابع لشركة في الظهران؟" },
      answer: {
        en: "Entry is not included. Drop-off may be possible at an agreed entrance or gate, but security permission and internal access are controlled by the site, not by us, and are not guaranteed. Tell us the place when you enquire.",
        ar: "الدخول غير مشمول. وقد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، لكن الإذن الأمني والوصول الداخلي يحكمهما الموقع لا نحن، ولا نضمنهما. أخبرنا بالمكان عند الاستفسار.",
      },
    },
    {
      question: { en: "Do you pick up from Dammam railway station?", ar: "هل تستقبلون من محطة قطار الدمام؟" },
      answer: {
        en: "Station pickups and drop-offs are not among the services on this page. We cover King Fahd International Airport, hotels and addresses in Dammam, Al Khobar and Dhahran.",
        ar: "الاستقبال والتوصيل من المحطة ليسا ضمن خدمات هذه الصفحة. ونخدم مطار الملك فهد الدولي والفنادق والعناوين في الدمام والخبر والظهران.",
      },
    },
    {
      question: { en: "Can you take us across the King Fahd Causeway to Bahrain?", ar: "هل يمكنكم نقلنا عبر جسر الملك فهد إلى البحرين؟" },
      answer: {
        en: "No. Our service stays in Saudi Arabia: we do not cross the causeway or provide transport in Bahrain. Visas and border formalities are yours to arrange.",
        ar: "لا. خدمتنا داخل المملكة فقط، فنحن لا نعبر الجسر ولا نقدّم النقل داخل البحرين، والتأشيرات وإجراءات الحدود مسؤوليتك.",
      },
    },
  ],

  related: [
    {
      routeKey: "jubail",
      label: { en: "Jubail", ar: "الجبيل" },
      note: {
        en: "North along the coast: the old town and public addresses in the Industrial City.",
        ar: "شمالًا على الساحل: الجبيل البلد والعناوين العامة في الجبيل الصناعية.",
      },
    },
    {
      routeKey: "alAhsa",
      label: { en: "Al Ahsa", ar: "الأحساء" },
      note: {
        en: "Inland to the oasis: the airport and hotels in Hofuf and Al-Mubarraz.",
        ar: "إلى الواحة في الداخل: المطار والفنادق في الهفوف والمبرز.",
      },
    },
    {
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "About 400 km east from the capital by road, compared with the train.",
        ar: "نحو 400 كم شرقًا من العاصمة برًّا، مع مقارنة بالقطار.",
      },
    },
    {
      routeKey: "riyadhToAlKhobar",
      label: { en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" },
      note: {
        en: "About 420 km from the capital to the corniche.",
        ar: "نحو 420 كم من العاصمة إلى الكورنيش.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Airport, hotels, three cities", ar: "المطار والفنادق والمدن الثلاث" },
    heading: { en: "Request a Dammam, Al Khobar or Dhahran quotation", ar: "اطلب عرض سعر للتوصيل في الدمام والخبر والظهران" },
    body: {
      en: "Your flight or pickup, the address you are going to, the date and how many of you. We reply with a written price.",
      ar: "رحلتك أو نقطة انطلاقك، والعنوان الذي تقصده، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a quote", ar: "اطلب عرض سعر" },
  },
};
