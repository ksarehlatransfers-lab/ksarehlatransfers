import type { StationPageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh railway station transfers — the consolidated page.
 *
 * ## Why one page
 *
 * Riyadh has **two** passenger railway stations, not the three the roadmap
 * originally proposed. "Riyadh East" is the name of the *East Train network*
 * and of the city station it leaves from — not a separate building. The
 * validated architecture is one page with a substantial section per real
 * station, and the aliases used naturally in the copy. Evidence in
 * docs/research/railway-architecture-validation.md.
 *
 * ## What is confirmed by the operator, and what is not
 *
 * SAR's own site returns HTTP 401 to automated requests and the Internet
 * Archive is unreachable from here, so **nothing on this page was read from
 * SAR directly.** The project owner confirmed from SAR's indexed network
 * pages that the operator itself names **Riyadh East** under the East Train
 * network and **Riyadh North** under the Northern Train network. Everything
 * else — districts, opening years, platform counts, line stop sequences —
 * comes from the English Wikipedia station articles and seat61, and is
 * labelled as such in the research document.
 *
 * ## What is deliberately absent
 *
 * No schedule, no fare, no station facility, no meeting point, no claim about
 * where a car may wait or whether we can collect from inside a concourse.
 * None of that is officially documented, and the concourse question is one
 * for our driver partners — the same class as the facts blocking the
 * private-driver-hire page. The page says so rather than leaving a gap the
 * reader has to notice.
 *
 * The straight-line distances are computed from the coordinates published in
 * the two station articles. They are labelled as straight-line, because road
 * distances would be longer and we did not measure them.
 */
export const riyadhRailway: StationPageContent = {
  routeKey: "riyadhRailway",
  imageKey: "station-riyadh",

  seo: {
    // 56 characters.
    title: {
      en: "Riyadh Railway Station Transfers | Both Stations",
      ar: "نقل خاص من محطات قطار الرياض | اطلب عرض سعر",
    },
    description: {
      en: "Private transfers to and from both of Riyadh's railway stations — Riyadh East on the Dammam line and Riyadh North at Thumamah on the northern line. Which one you need, and a quotation.",
      ar: "نقل خاص من محطتي قطار الرياض وإليهما — الرياض الشرقية على خط الدمام، ومحطة الشمال في الثمامة. أي محطة تحتاج، وعرض سعر مكتوب.",
    },
  },

  crumbLabel: { en: "Railway stations", ar: "محطات القطار" },

  hero: {
    eyebrow: { en: "Riyadh · both stations", ar: "الرياض · المحطتان" },
    h1: {
      en: "Riyadh railway station transfers",
      ar: "نقل خاص من محطات قطار الرياض",
    },
    lead: {
      en: "Riyadh has two passenger stations, 23 km apart, and which one you need depends entirely on where your train is going. Start here, then we take you door to platform.",
      ar: "في الرياض محطتان للمسافرين تفصل بينهما 23 كم، وأي واحدة تحتاجها يعتمد كليًّا على وجهة قطارك. ابدأ من هنا، ثم ننقلك من الباب إلى الرصيف.",
    },
  },

  board: {
    caption: {
      en: "Destinations only. We publish no departure times or fares — those are the operator's to state and ours to get wrong.",
      ar: "الوجهات فقط. لا ننشر مواعيد مغادرة ولا أسعارًا — فهي من شأن المشغّل أن يذكرها، ومن شأننا أن نخطئ فيها.",
    },
    rows: [
      {
        station: { en: "Riyadh East", ar: "الرياض الشرقية" },
        line: { en: "East Train", ar: "قطار الشرق" },
        towards: {
          en: "Hofuf · Abqaiq · Dammam",
          ar: "الهفوف · بقيق · الدمام",
        },
      },
      {
        station: { en: "Riyadh North", ar: "محطة الشمال" },
        line: { en: "North Train", ar: "قطار الشمال" },
        towards: {
          en: "Majmaah · Qassim · Hail · Al-Jouf · Qurayyat",
          ar: "المجمعة · القصيم · حائل · الجوف · القريات",
        },
      },
    ],
  },

  stats: [
    {
      label: { en: "Passenger stations", ar: "محطات المسافرين" },
      value: { en: "Two", ar: "اثنتان" },
      note: {
        en: "Not three. “Riyadh East” is the name of a network and of the city station it serves, not a separate building — a confusion worth clearing up before you book a car to the wrong one.",
        ar: "لا ثلاث. فـ«الرياض الشرقية» اسم شبكة والمحطة التي تخدمها في المدينة، لا مبنى منفصلًا — وهو التباس يستحق التوضيح قبل أن تحجز سيارة إلى المحطة الخطأ.",
      },
    },
    {
      label: { en: "Between the two", ar: "بين المحطتين" },
      value: { en: "~23 km", ar: "~23 كم" },
      note: {
        en: "Straight-line distance computed from the stations' published coordinates. By road it is further. Going to the wrong one is not a short mistake.",
        ar: "مسافة مستقيمة محسوبة من الإحداثيات المنشورة للمحطتين. وهي أطول بالطريق. فالوصول إلى المحطة الخطأ ليس خطأً قصيرًا.",
      },
    },
    {
      label: { en: "Corridors served", ar: "الممرات المخدومة" },
      value: { en: "Two", ar: "اثنان" },
      note: {
        en: "East to the Gulf coast, and north through Qassim and Hail towards the Jordanian border. One station each.",
        ar: "شرقًا إلى ساحل الخليج، وشمالًا عبر القصيم وحائل نحو الحدود الأردنية. محطة واحدة لكل منهما.",
      },
    },
    {
      label: { en: "Schedules and fares", ar: "المواعيد والأسعار" },
      value: { en: "Not here", ar: "ليست هنا" },
      note: {
        en: "Check the operator directly. We arrange the road journey to and from the platform and sell no rail tickets.",
        ar: "تحقق منها لدى المشغّل مباشرة. ونحن نرتّب الرحلة البرية إلى الرصيف ومنه، ولا نبيع تذاكر قطار.",
      },
    },
  ],

  statsChecked: {
    en: "Station facts last checked November 2026.",
    ar: "آخر تحقق من معلومات المحطات: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "Which station do you need?",
      ar: "أي محطة تحتاج؟",
    },
    paragraphs: [
      {
        en: "It depends on one thing: the direction your train is going. If you are heading east to the Gulf coast, you want the city station — the one most people and most timetables call Riyadh East. If you are heading north towards Qassim, Hail or beyond, you want Riyadh North, which is a long way out of the centre near the airport.",
        ar: "يعتمد ذلك على شيء واحد: اتجاه قطارك. فإن كنت متجهًا شرقًا إلى ساحل الخليج فمحطتك هي محطة المدينة — التي يسميها معظم الناس ومعظم الجداول «الرياض الشرقية». وإن كنت متجهًا شمالًا نحو القصيم أو حائل أو ما بعدهما فمحطتك هي محطة الشمال، وهي بعيدة عن المركز قرب المطار.",
      },
      {
        en: "The names are the hard part. One station appears in print as Riyadh railway station, Riyadh East, Riyadh SRO station and the SAR Riyadh–Dammam station, and one travel guide calls it Malaz station. The other is Riyadh North, locally Thumamah, and sometimes the Riyadh airport station. That is five names for one building and three for the other, which is exactly how people end up at the wrong one.",
        ar: "والأسماء هي الجزء الصعب. فمحطة واحدة ترد في المطبوعات باسم محطة قطار الرياض، والرياض الشرقية، ومحطة سار الرياض – الدمام، ويسميها أحد أدلة السفر محطة الملز. والأخرى هي محطة الشمال، وتُعرف محليًّا بالثمامة، وأحيانًا بمحطة مطار الرياض. فهذه خمسة أسماء لمبنى واحد وثلاثة للآخر، وهكذا بالضبط يصل الناس إلى المحطة الخطأ.",
      },
      {
        en: "So we ask for the destination rather than the station. Tell us where your train is going and we will name the station, put it in writing, and plan the pickup to it — the same approach we take to airport terminals, and for the same reason.",
        ar: "لذلك نسأل عن الوجهة لا عن المحطة. أخبرنا بوجهة قطارك ونسمّي لك المحطة ونرسلها مكتوبة ونخطط الاستقبال إليها — وهو النهج نفسه الذي نتبعه مع صالات المطار، وللسبب نفسه.",
      },
    ],
  },

  corridors: {
    heading: { en: "The two corridors", ar: "الممران" },
    lead: {
      en: "Find your destination, and you have found your station. Stop sequences as published; we are not the operator and this is not a timetable.",
      ar: "اعرف وجهتك فتعرف محطتك. وتسلسل المحطات كما هو منشور؛ ونحن لسنا المشغّل وهذا ليس جدول مواعيد.",
    },
    lines: [
      {
        name: { en: "East Train", ar: "قطار الشرق" },
        from: { en: "Riyadh East", ar: "الرياض الشرقية" },
        stops: [
          { en: "Hofuf", ar: "الهفوف" },
          { en: "Abqaiq", ar: "بقيق" },
          { en: "Dammam", ar: "الدمام" },
        ],
        note: {
          en: "The older line, running east across the country since 1981. If your ticket says Dammam or Hofuf, this is your corridor and the city station is your station.",
          ar: "الخط الأقدم، ويمتد شرقًا عبر البلاد منذ 1981. فإن كانت تذكرتك إلى الدمام أو الهفوف فهذا ممرك، ومحطة المدينة هي محطتك.",
        },
      },
      {
        name: { en: "North Train", ar: "قطار الشمال" },
        from: { en: "Riyadh North", ar: "محطة الشمال" },
        stops: [
          { en: "Majmaah", ar: "المجمعة" },
          { en: "Qassim", ar: "القصيم" },
          { en: "Hail", ar: "حائل" },
          { en: "Al-Jouf", ar: "الجوف" },
          { en: "Qurayyat", ar: "القريات" },
        ],
        note: {
          en: "The newer line, opened in 2017, running north towards the Jordanian border. Qassim is the station for Buraydah. If your ticket names any of these, you need Riyadh North — not the city station.",
          ar: "الخط الأحدث، افتُتح عام 2017، ويمتد شمالًا نحو الحدود الأردنية. ومحطة القصيم هي محطة بريدة. فإن ذكرت تذكرتك أيًّا من هذه فأنت تحتاج محطة الشمال — لا محطة المدينة.",
        },
      },
    ],
    footnote: {
      en: "Both corridors have a road alternative we also run, and our route pages compare the two honestly rather than talking you out of the train.",
      ar: "لكل من الممرين بديل بري نشغّله أيضًا، وصفحات مساراتنا تقارن بينهما بصدق لا لتثنيك عن القطار.",
    },
  },

  stations: [
    {
      heading: {
        en: "Riyadh railway station — the East Train, towards Dammam",
        ar: "محطة قطار الرياض — قطار الشرق نحو الدمام",
      },
      aliases: {
        en: "Also published as Riyadh East, Riyadh SRO station, the SAR Riyadh–Dammam station, and Malaz station",
        ar: "وترد أيضًا باسم الرياض الشرقية، ومحطة سار الرياض – الدمام، ومحطة الملز",
      },
      lead: {
        en: "The city station, and the one you want for the Gulf coast.",
        ar: "محطة المدينة، وهي التي تحتاجها للتوجه إلى ساحل الخليج.",
      },
      facts: [
        {
          label: { en: "District", ar: "الحي" },
          value: { en: "Sinaiyah Qadeem", ar: "الصناعية القديمة" },
        },
        {
          label: { en: "Line", ar: "الخط" },
          value: {
            en: "Western terminus, Dammam–Riyadh",
            ar: "الطرف الغربي لخط الدمام – الرياض",
          },
        },
        { label: { en: "Opened", ar: "سنة الافتتاح" }, value: { en: "1981", ar: "1981" } },
        { label: { en: "Platforms", ar: "الأرصفة" }, value: { en: "Six", ar: "ستة" } },
      ],
      paragraphs: [
        {
          en: "This is the station inside the city, and the practical consequence is that a transfer to it is an ordinary Riyadh journey: a run across town from a hotel, a home or an office, priced on the addresses like any other. It is the station the East Train leaves from, which is why so much printed material simply calls it Riyadh East.",
          ar: "هذه هي المحطة داخل المدينة، والنتيجة العملية أن النقل إليها رحلة رياضية عادية: مشوار عبر المدينة من فندق أو منزل أو مكتب، يُسعَّر على العنوانين كأي رحلة أخرى. وهي المحطة التي ينطلق منها قطار الشرق، ولهذا تسميها كثير من المطبوعات ببساطة «الرياض الشرقية».",
        },
        {
          en: "If you are arriving on the East Train and going on into the city, give us the arrival and your destination address and we will be there for it. If you are catching it, tell us the departure time you need to be there for and we plan the pickup backwards from that — we will not invent a check-in rule, because the operator sets that and we could not read it.",
          ar: "وإن كنت قادمًا على قطار الشرق ومتابعًا إلى داخل المدينة فزوّدنا بموعد الوصول وعنوان وجهتك ونكون هناك له. وإن كنت مسافرًا عليه فأخبرنا بالوقت الذي تريد أن تكون فيه هناك ونخطط الاستقبال تراجعيًا منه — ولن نختلق قاعدة لإجراءات الصعود، فالمشغّل هو من يحددها ولم نتمكن من قراءتها.",
        },
      ],
      links: [
        {
          routeKey: "riyadhToDammam",
          label: { en: "Riyadh to Dammam by road", ar: "الرياض إلى الدمام برًّا" },
          note: {
            en: "The same corridor by car — about 400 km, with an honest road-or-rail comparison on the page.",
            ar: "الممر نفسه بالسيارة — نحو 400 كم، ومعه مقارنة صادقة بين الطريق والقطار في الصفحة.",
          },
        },
        {
          routeKey: "riyadhToAlKhobar",
          label: { en: "Riyadh to Al Khobar by road", ar: "الرياض إلى الخبر برًّا" },
          note: {
            en: "Beyond Dammam on the coast, where the train does not reach directly.",
            ar: "بعد الدمام على الساحل، حيث لا يصل القطار مباشرة.",
          },
        },
      ],
      imageKey: "station-riyadh-interior",
    },
    {
      heading: {
        en: "Riyadh North station — the North Train, towards Qassim and Hail",
        ar: "محطة قطار الشمال — قطار الشمال نحو القصيم وحائل",
      },
      aliases: {
        en: "Locally Thumamah station; sometimes published as the Riyadh airport station",
        ar: "وتُعرف محليًّا بمحطة الثمامة، وترد أحيانًا باسم محطة مطار الرياض",
      },
      lead: {
        en: "A long way north of the centre, and the one most people underestimate.",
        ar: "بعيدة شمال المركز، وهي التي يقلّل معظم الناس من شأن بعدها.",
      },
      facts: [
        {
          label: { en: "Address", ar: "العنوان" },
          value: {
            en: "Al Thumamah Road, King Khalid International Airport",
            ar: "طريق الثمامة، مطار الملك خالد الدولي",
          },
        },
        {
          label: { en: "Line", ar: "الخط" },
          value: {
            en: "Southern terminus, Riyadh–Qurayyat",
            ar: "الطرف الجنوبي لخط الرياض – القريات",
          },
        },
        {
          label: { en: "Opened", ar: "سنة الافتتاح" },
          value: { en: "February 2017", ar: "فبراير 2017" },
        },
        { label: { en: "Platforms", ar: "الأرصفة" }, value: { en: "Two", ar: "اثنان" } },
      ],
      paragraphs: [
        {
          en: "This station carries the airport's postal address, and that misleads people. It is in the airport's northern area, but it is a separate site roughly 13 km from the passenger terminals in a straight line — you cannot walk between them, and a transfer from a terminal to this station is a real journey, not a hop. Plan for it as you would any out-of-town run.",
          ar: "تحمل هذه المحطة العنوان البريدي للمطار، وهذا يضلّل الناس. فهي في المنطقة الشمالية للمطار، لكنها موقع منفصل يبعد نحو 13 كم عن صالات المسافرين بخط مستقيم — ولا يمكن المشي بينهما، والنقل من صالة إلى هذه المحطة رحلة حقيقية لا تنقّلًا قصيرًا. فخطط له كما تخطط لأي مشوار خارج المدينة.",
        },
        {
          en: "From the centre of Riyadh it is further still. That is the single most useful thing to know about this station: allow properly for the drive, and leave earlier than the distance suggests if you are travelling at a busy hour, because the northern approaches carry the airport's traffic as well as its own.",
          ar: "ومن وسط الرياض تكون أبعد من ذلك. وهذا أنفع ما يمكن معرفته عن هذه المحطة: احسب للطريق حسابه، وانطلق أبكر مما تشير إليه المسافة إن كنت مسافرًا في ساعة مزدحمة، فالمداخل الشمالية تحمل حركة المطار إلى جانب حركتها.",
        },
        {
          en: "Because it sits in the airport's area, the useful combination here is a flight one way and the train the other — or a flight in and a car on to the station. Both legs can be quoted together, and our airport page handles the terminal side.",
          ar: "ولأنها تقع في منطقة المطار، فإن المزج المفيد هنا هو الطيران في اتجاه والقطار في الآخر — أو الوصول جوًّا ثم السيارة إلى المحطة. ويمكن تسعير المرحلتين معًا، وصفحة المطار لدينا تتولى الجانب المتعلق بالصالات.",
        },
      ],
      links: [
        {
          routeKey: "riyadhToBuraydah",
          label: { en: "Riyadh to Buraydah by road", ar: "الرياض إلى بريدة برًّا" },
          note: {
            en: "Qassim is this line's station for Buraydah; the route page weighs car against train for that journey.",
            ar: "محطة القصيم هي محطة بريدة على هذا الخط؛ وصفحة المسار توازن بين السيارة والقطار لتلك الرحلة.",
          },
        },
        {
          routeKey: "riyadhToHail",
          label: { en: "Riyadh to Hail by road", ar: "الرياض إلى حائل برًّا" },
          note: {
            en: "The same corridor by car, about 630 km, with the preparation a six-hour drive needs.",
            ar: "الممر نفسه بالسيارة، نحو 630 كم، ومعه الاستعداد الذي تحتاجه رحلة من ست ساعات.",
          },
        },
        {
          routeKey: "riyadhAirport",
          label: { en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" },
          note: {
            en: "The terminals are about 13 km from this station. Fly one way, take the train the other.",
            ar: "الصالات تبعد نحو 13 كم عن هذه المحطة. سافر جوًّا في اتجاه وبالقطار في الآخر.",
          },
        },
      ],
    },
  ],

  limits: {
    heading: {
      en: "What we can tell you, and what we will not guess",
      ar: "ما نستطيع إخبارك به وما لن نخمّنه",
    },
    lead: {
      en: "The railway operator's website is not readable by us, so this page is built from published station references rather than from the operator's own pages. That shapes what belongs here. Our side of the journey — the car, the timing, the price — is ours to state; the station's side is not.",
      ar: "موقع مشغّل السكة غير متاح لنا للقراءة، فهذه الصفحة مبنية على مراجع منشورة عن المحطات لا على صفحات المشغّل نفسه. وهذا يحدد ما ينتمي إلى هنا. فجانبنا من الرحلة — السيارة والتوقيت والسعر — من شأننا أن نذكره؛ وجانب المحطة ليس كذلك.",
    },
    items: [
      {
        en: "No departure times or frequencies. Check the operator.",
        ar: "لا مواعيد مغادرة ولا عدد رحلات. تحقق من المشغّل.",
      },
      {
        en: "No ticket prices, and we do not sell rail tickets.",
        ar: "لا أسعار تذاكر، ونحن لا نبيع تذاكر قطار.",
      },
      {
        en: "No claims about station facilities, lounges, security or baggage handling.",
        ar: "لا ادعاءات عن مرافق المحطات أو الصالات أو التفتيش أو مناولة الأمتعة.",
      },
      {
        en: "No named meeting point inside a station, and no claim that a car may wait in a particular place. We confirm the arrangement for your booking instead of printing one we have not verified.",
        ar: "لا نقطة لقاء محددة داخل محطة، ولا ادعاء بأن السيارة يمكن أن تنتظر في موضع معين. بل نؤكد الترتيب لحجزك بدل طباعة ترتيب لم نتحقق منه.",
      },
      {
        en: "What we do state: the station, the pickup time, the vehicle and the total price, in writing, before anything is reserved.",
        ar: "وما نذكره فعلًا: المحطة وموعد الاستقبال والمركبة والسعر الإجمالي، مكتوبة، قبل حجز أي شيء.",
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Tell us the destination, not the station", ar: "أخبرنا بالوجهة لا بالمحطة" },
        paragraphs: [
          {
            en: "It is the one instruction that prevents the expensive mistake. With five published names for one station and three for the other, a booking that names a station can be ambiguous; a booking that names Dammam or Hail never is. Give us the destination and we will name the station back to you in writing.",
            ar: "هذه هي التوجيه الوحيد الذي يمنع الخطأ المكلف. فمع خمسة أسماء منشورة لمحطة وثلاثة للأخرى، قد يكون الحجز الذي يذكر محطة ملتبسًا؛ أما الحجز الذي يذكر الدمام أو حائل فلا يكون كذلك أبدًا. أعطنا الوجهة ونسمّي لك المحطة مكتوبة.",
          },
        ],
      },
      {
        heading: { en: "Allow for the north station's distance", ar: "احسب لبعد محطة الشمال" },
        paragraphs: [
          {
            en: "Riyadh North is far enough out that treating it as a city address is the commonest planning error on this page. It is roughly 23 km from the other station in a straight line and further by road, and the traffic on the northern approaches is the airport's traffic. Leave earlier than the map suggests.",
            ar: "محطة الشمال بعيدة بما يجعل التعامل معها كعنوان داخل المدينة أشيع خطأ تخطيطي في هذه الصفحة. فهي تبعد نحو 23 كم عن المحطة الأخرى بخط مستقيم وأكثر بالطريق، وحركة المداخل الشمالية هي حركة المطار. فانطلق أبكر مما تشير إليه الخريطة.",
          },
        ],
      },
      {
        heading: { en: "Arriving late at night", ar: "الوصول في وقت متأخر" },
        paragraphs: [
          {
            en: "A pre-booked car matters more for a late arrival at either station than it does at the airport, simply because there is less of everything around a station at night. Give us the arrival and we will be there for it rather than you looking for a ride when you get off.",
            ar: "السيارة المحجوزة مسبقًا أهم للوصول المتأخر إلى أي من المحطتين منها في المطار، لأن ما يحيط بالمحطة ليلًا أقل من كل شيء. زوّدنا بموعد الوصول ونكون هناك له بدل أن تبحث عن وسيلة نقل عند نزولك.",
          },
        ],
      },
      {
        heading: { en: "Luggage", ar: "الأمتعة" },
        paragraphs: [
          {
            en: "Describe the bags rather than only the passenger count, as on every page here. Rail travellers often carry more than they would on a short flight, and the vehicle is matched to what is actually coming.",
            ar: "صِف الحقائب لا عدد الركاب فقط، كما في كل صفحة هنا. فمسافرو القطار يحملون غالبًا أكثر مما يحملونه في رحلة جوية قصيرة، وتُختار المركبة بحسب ما سيأتي فعلًا.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book a station transfer", ar: "كيف تحجز نقلًا من المحطة" },
    paragraphs: [
      {
        en: "Send the direction (to the station or from it), where your train is going or coming from, the date and time, your address in Riyadh, and how many passengers and bags.",
        ar: "أرسل الاتجاه (إلى المحطة أم منها)، ووجهة قطارك أو مصدره، والتاريخ والوقت، وعنوانك في الرياض، وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price, the vehicle category, and the station named explicitly so there is no doubt which one we are taking you to. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة، والمحطة مذكورة صريحة فلا يبقى شك في أي محطة ننقلك إليها. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh railway stations: common questions",
    ar: "محطات قطار الرياض: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How many railway stations does Riyadh have?",
        ar: "كم محطة قطار في الرياض؟",
      },
      answer: {
        en: "Two passenger stations. The city station serves the East Train towards Hofuf, Abqaiq and Dammam, and Riyadh North at Thumamah serves the North Train towards Majmaah, Qassim, Hail, Al-Jouf and Qurayyat. There is also a dry port in Riyadh, but that is freight and not somewhere you catch a train.",
        ar: "محطتان للمسافرين. محطة المدينة تخدم قطار الشرق نحو الهفوف وبقيق والدمام، ومحطة الشمال في الثمامة تخدم قطار الشمال نحو المجمعة والقصيم وحائل والجوف والقريات. وهناك أيضًا ميناء جاف في الرياض، لكنه للشحن ولا تستقل منه قطارًا.",
      },
    },
    {
      question: {
        en: "Is Riyadh East a different station from Riyadh railway station?",
        ar: "هل الرياض الشرقية محطة مختلفة عن محطة قطار الرياض؟",
      },
      answer: {
        en: "No — they are the same place. “East” is the name of the network and of the train that runs east to Dammam, so the station it leaves from gets called Riyadh East in timetables and signage. You will also see it as Riyadh SRO station, the SAR Riyadh–Dammam station and even Malaz station. One building, several names.",
        ar: "لا — هما المكان نفسه. فـ«الشرقية» اسم الشبكة والقطار المتجه شرقًا إلى الدمام، فتُسمّى المحطة التي ينطلق منها «الرياض الشرقية» في الجداول واللوحات. وستجدها أيضًا باسم محطة سار الرياض – الدمام، وحتى محطة الملز. مبنى واحد وأسماء عدة.",
      },
    },
    {
      question: {
        en: "Is Riyadh North station at the airport?",
        ar: "هل محطة الشمال داخل المطار؟",
      },
      answer: {
        en: "It carries the airport's address and sits in the airport's northern area, but it is a separate site about 13 km from the passenger terminals in a straight line. You cannot walk between them. If you are connecting between a flight and the North Train, that leg is a proper transfer and we quote it as one.",
        ar: "تحمل عنوان المطار وتقع في منطقته الشمالية، لكنها موقع منفصل يبعد نحو 13 كم عن صالات المسافرين بخط مستقيم. ولا يمكن المشي بينهما. فإن كنت تنتقل بين رحلة جوية وقطار الشمال فتلك المرحلة نقل حقيقي ونُسعّرها كذلك.",
      },
    },
    {
      question: {
        en: "Which station do I use for Qassim or Buraydah?",
        ar: "أي محطة أستخدم للقصيم أو بريدة؟",
      },
      answer: {
        en: "Riyadh North. Qassim is a station on the northern line and it is the station for Buraydah. The city station will not help you — it faces the other way. If the road suits you better for that journey, our Riyadh to Buraydah page compares the two without trying to win the argument.",
        ar: "محطة الشمال. فالقصيم محطة على الخط الشمالي وهي محطة بريدة. ولن تفيدك محطة المدينة — فهي تتجه إلى الجهة الأخرى. وإن كان الطريق البري أنسب لك في تلك الرحلة فصفحة الرياض إلى بريدة تقارن بينهما دون أن تحاول كسب الجدال.",
      },
    },
    {
      question: {
        en: "What are the train times and ticket prices?",
        ar: "ما مواعيد القطارات وأسعار التذاكر؟",
      },
      answer: {
        en: "We do not publish either, and we would rather say so than give you a figure that has moved. Schedules and fares are the operator's to state and they change; check them directly before you plan around them. What we handle is the road journey to and from the platform, quoted on your addresses.",
        ar: "لا ننشر أيًّا منهما، ونفضّل قول ذلك على أن نعطيك رقمًا تغيّر. فالمواعيد والأسعار من شأن المشغّل أن يذكرها وهي تتغير؛ تحقق منها مباشرة قبل أن تبني خططك عليها. وما نتولاه هو الرحلة البرية إلى الرصيف ومنه، مُسعَّرة على عنوانيك.",
      },
    },
    {
      question: {
        en: "Where exactly will the driver meet me at the station?",
        ar: "أين سيلتقيني السائق بالضبط في المحطة؟",
      },
      answer: {
        en: "We confirm that for your booking rather than publishing a meeting point here, because no official source we could read documents where cars may wait at either station, and we are not going to invent one. What you get in writing before the day is the station, the time and the arrangement we have actually confirmed for you.",
        ar: "نؤكد ذلك لحجزك بدل نشر نقطة لقاء هنا، لأن أي مصدر رسمي أمكننا قراءته لا يوثّق أين يمكن للسيارات الانتظار في أي من المحطتين، ولن نختلق واحدة. وما تحصل عليه مكتوبًا قبل اليوم هو المحطة والوقت والترتيب الذي أكدناه لك فعلًا.",
      },
    },
    {
      question: {
        en: "Can you take me between the two stations?",
        ar: "هل يمكنكم نقلي بين المحطتين؟",
      },
      answer: {
        en: "Yes, and it is a real journey rather than a short hop — about 23 km apart in a straight line and further by road. It comes up when someone arrives on one line and continues on the other, and it is quoted like any other city transfer.",
        ar: "نعم، وهي رحلة حقيقية لا تنقّلًا قصيرًا — نحو 23 كم بينهما بخط مستقيم وأكثر بالطريق. وتحدث حين يصل أحدهم على خط ويكمل على الآخر، وتُسعَّر كأي نقل داخل المدينة.",
      },
    },
  ],

  related: [
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "The hub: airport, railway, hotel and every intercity route from the capital.",
        ar: "الصفحة الرئيسية: المطار والقطار والفنادق وكل مسار بين المدن من العاصمة.",
      },
    },
    {
      routeKey: "riyadhAirport",
      label: { en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" },
      note: {
        en: "King Khalid International, about 13 km from the north station — the pairing that comes up most.",
        ar: "الملك خالد الدولي، على نحو 13 كم من محطة الشمال — وهو الاقتران الأكثر تكرارًا.",
      },
    },
    {
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "The East Train's corridor by road, with the comparison written honestly.",
        ar: "ممر قطار الشرق برًّا، ومعه المقارنة مكتوبة بصدق.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Door to platform", ar: "من الباب إلى الرصيف" },
    heading: {
      en: "Tell us where your train is going",
      ar: "أخبرنا بوجهة قطارك",
    },
    body: {
      en: "We will name the station, put it in writing, and quote the journey to it. No guessing which building, and no surprises on the day.",
      ar: "نسمّي لك المحطة ونرسلها مكتوبة ونُسعّر الرحلة إليها. فلا تخمين لأي مبنى، ولا مفاجآت في اليوم نفسه.",
    },
    button: { en: "Get a station transfer quote", ar: "اطلب سعر النقل من المحطة" },
  },
};
