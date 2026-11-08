import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Dammam.
 *
 * Distinct intent from the Jeddah page: this is a business corridor with a
 * real rail alternative, so the page's job is to help someone choose between
 * road and train honestly — including saying when the train is the better
 * answer — rather than to argue for the car.
 *
 * Figures are approximations from public route and rail data, labelled as
 * such. Sources in docs/riyadh-content-research.md.
 */
export const riyadhToDammam: RoutePageContent = {
  routeKey: "riyadhToDammam",
  imageKey: "dest-dammam",

  seo: {
    // 46 characters.
    title: {
      en: "Riyadh to Dammam Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى الدمام | اطلب عرض سعر",
    },
    description: {
      en: "Private transfer from Riyadh to Dammam — about 400 km and 3.5–4.5 hours east on Highway 40. Door-to-door for families, business travel and luggage the train cannot take. Request a quotation.",
      ar: "نقل خاص من الرياض إلى الدمام — نحو 400 كم و3.5–4.5 ساعات شرقًا عبر طريق 40. من الباب إلى الباب للعائلات ورحلات العمل والأمتعة التي لا يستوعبها القطار. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },

  hero: {
    eyebrow: { en: "Intercity · East", ar: "بين المدن · شرقًا" },
    h1: {
      en: "Riyadh to Dammam private transfer",
      ar: "نقل خاص من الرياض إلى الدمام",
    },
    lead: {
      en: "Four hours east on Highway 40 to the Gulf coast. The busiest business corridor in the Kingdom, and the one journey where a private car and the train are genuinely competing options.",
      ar: "أربع ساعات شرقًا عبر طريق 40 إلى ساحل الخليج. أكثر ممرات الأعمال ازدحامًا في المملكة، والرحلة الوحيدة التي تتنافس فيها السيارة الخاصة والقطار بجدية.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~400 km", ar: "~400 كم" },
      note: {
        en: "Route planners give between about 402 and 418 km by road, depending on the start and end points used.",
        ar: "تعطي أدوات تخطيط المسارات بين 402 و418 كم تقريبًا برًّا، حسب نقطتي البداية والنهاية.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "3.5–4.5 hours", ar: "3.5–4.5 ساعات" },
      note: {
        en: "Published estimates range from about 3h 30m to 4h 40m. Traffic leaving Riyadh and arriving in the Dammam metropolitan area accounts for most of the spread.",
        ar: "تتراوح التقديرات المنشورة بين نحو 3:30 و4:40 ساعة. ويعود معظم هذا الفارق إلى الحركة المرورية عند الخروج من الرياض والوصول إلى منطقة الدمام الحضرية.",
      },
    },
    {
      label: { en: "Main road", ar: "الطريق الرئيسي" },
      value: { en: "Highway 40", ar: "طريق 40" },
      note: {
        en: "The eastern arm of the same highway that runs west to Jeddah, ending in Dammam.",
        ar: "الامتداد الشرقي للطريق نفسه الذي يتجه غربًا إلى جدة، وينتهي في الدمام.",
      },
    },
    {
      label: { en: "Rail alternative", ar: "البديل بالقطار" },
      value: { en: "~449 km line", ar: "خط بطول ~449 كم" },
      note: {
        en: "The Dammam–Riyadh railway runs via Abqaiq and Hofuf. Services and times are set by the operator, not by us — check them directly.",
        ar: "يمر خط سكة حديد الدمام–الرياض عبر بقيق والهفوف. والمواعيد والخدمات يحددها المشغّل لا نحن — تحقق منها مباشرة.",
      },
    },
  ],

  statsChecked: {
    en: "Road, rail and driving-time figures last checked November 2026.",
    ar: "آخر تحقق من أرقام الطريق والقطار وزمن القيادة: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "The Kingdom's working corridor",
      ar: "ممر العمل في المملكة",
    },
    paragraphs: [
      {
        en: "Riyadh to Dammam is the route people travel for work. It links the capital to the Eastern Province — the ports, the industrial sites, Dhahran and the Gulf coast — and unlike the long haul to Jeddah it is comfortably a half-day trip. Many people do it and come back the same week, some the same day.",
        ar: "الرياض إلى الدمام هو المسار الذي يسلكه الناس للعمل. يربط العاصمة بالمنطقة الشرقية — الموانئ والمواقع الصناعية والظهران وساحل الخليج — وعلى خلاف الرحلة الطويلة إلى جدة فهو رحلة نصف يوم مريحة. كثيرون يقطعونه ويعودون في الأسبوع نفسه، وبعضهم في اليوم نفسه.",
      },
      {
        en: "That changes what matters. On a nine-hour drive the question is endurance; here it is timing. People want to arrive before a meeting, leave after one, or get a family to the coast without building the day around a departure board.",
        ar: "وهذا يغيّر ما يهم. ففي رحلة من تسع ساعات يكون السؤال عن التحمّل، أما هنا فعن التوقيت. يريد الناس الوصول قبل اجتماع، أو المغادرة بعده، أو إيصال عائلة إلى الساحل دون بناء اليوم كله حول لوحة المغادرة.",
      },
      {
        en: "It is also the one intercity route on this site where we will openly tell you the train may suit you better. If you are one or two people travelling light between the two city centres, it often does.",
        ar: "وهو أيضًا المسار الوحيد بين المدن في هذا الموقع الذي نقول فيه صراحةً إن القطار قد يناسبك أكثر. فإن كنتما شخصًا أو شخصين تسافران بأمتعة خفيفة بين وسطي المدينتين، فغالبًا يناسبكما.",
      },
    ],
  },

  comparison: {
    heading: { en: "Private car or the train?", ar: "سيارة خاصة أم القطار؟" },
    lead: {
      en: "An honest comparison. We arrange the road journey and have no stake in the railway, but sending someone on a four-hour drive they did not need helps nobody.",
      ar: "مقارنة صادقة. نحن نرتّب الرحلة البرية ولا مصلحة لنا في سكة الحديد، لكن إرسال أحدهم في رحلة أربع ساعات لم يكن بحاجة إليها لا يفيد أحدًا.",
    },
    columns: [
      {
        title: { en: "A private car makes sense when", ar: "السيارة الخاصة أنسب عندما" },
        points: [
          {
            en: "You are a family or a group — one vehicle costs the same whether two or six people are in it.",
            ar: "تكون عائلة أو مجموعة — فسعر السيارة واحد سواء كان فيها اثنان أو ستة.",
          },
          {
            en: "You have real luggage, equipment or boxes, with no allowance to worry about.",
            ar: "لديك أمتعة حقيقية أو معدات أو صناديق، دون قلق من حد مسموح.",
          },
          {
            en: "Your start or end point is not a city centre — the gate of an industrial site or compound, or a site visit.",
            ar: "لا تكون نقطة البداية أو النهاية في وسط المدينة — بوابة موقع صناعي أو مجمّع سكني، أو زيارة ميدانية.",
          },
          {
            en: "Your timing is your own rather than built around a published departure.",
            ar: "يكون توقيتك ملكك لا مبنيًا على موعد مغادرة معلن.",
          },
          {
            en: "You want the same vehicle to wait and bring you back.",
            ar: "تريد السيارة نفسها أن تنتظرك وتعيدك.",
          },
        ],
      },
      {
        title: { en: "The train probably suits you better when", ar: "القطار غالبًا أنسب عندما" },
        points: [
          {
            en: "You are travelling alone or as a pair with hand luggage only.",
            ar: "تسافر وحدك أو مع شخص واحد بأمتعة يد فقط.",
          },
          {
            en: "Both ends of your journey are near a station.",
            ar: "يكون طرفا رحلتك قريبين من محطة.",
          },
          {
            en: "You want to work, read or sleep rather than sit in a vehicle.",
            ar: "تريد العمل أو القراءة أو النوم بدل الجلوس في سيارة.",
          },
          {
            en: "A fixed departure time suits your plans.",
            ar: "يناسب خططك موعد مغادرة ثابت.",
          },
        ],
      },
    ],
    footnote: {
      en: "Train schedules, fares and availability are set by the rail operator and change — check them on the operator's own channels. We do not sell rail tickets and do not quote for them.",
      ar: "مواعيد القطار وأسعاره وتوفره يحددها مشغّل السكة وتتغير — تحقق منها عبر قنوات المشغّل الرسمية. نحن لا نبيع تذاكر القطار ولا نُسعّرها.",
    },
  },

  stages: {
    heading: { en: "What the drive is like", ar: "كيف تبدو الرحلة" },
    lead: {
      en: "Approximate positions east of Riyadh along Highway 40.",
      ar: "مواقع تقريبية شرق الرياض على امتداد طريق 40.",
    },
    items: [
      {
        name: { en: "Leaving Riyadh", ar: "الخروج من الرياض" },
        km: 0,
        detail: {
          en: "Pickup from your address, office, hotel or King Khalid International Airport. The eastern exit is quickest outside the morning and late-afternoon peaks; we plan the departure around whichever matters more to you.",
          ar: "الاستقبال من عنوانك أو مكتبك أو فندقك أو مطار الملك خالد الدولي. المخرج الشرقي أسرع خارج ذروتي الصباح وبعد العصر، ونرتّب موعد الانطلاق حسب الأهم بالنسبة لك.",
        },
      },
      {
        name: { en: "The open stretch", ar: "الامتداد المفتوح" },
        km: 150,
        detail: {
          en: "A long, flat, straightforward run across the desert. Service areas appear regularly, so a break is a choice rather than a necessity on this route.",
          ar: "امتداد طويل مستوٍ وواضح عبر الصحراء. والاستراحات متوفرة بانتظام، فالتوقف هنا اختيار لا ضرورة.",
        },
      },
      {
        name: { en: "Abqaiq area", ar: "منطقة بقيق" },
        km: 320,
        detail: {
          en: "The highway passes the industrial heart of the Eastern Province. If your destination is an industrial site rather than a city address, this is often where the routing changes — tell us the exact site when you enquire. A drop-off at a public address or an agreed gate may be possible, subject to confirmation; entry into controlled facilities is not included or guaranteed.",
          ar: "يمر الطريق بالقلب الصناعي للمنطقة الشرقية. وإن كانت وجهتك موقعًا صناعيًا لا عنوانًا في المدينة فهنا يتغير المسار غالبًا — أخبرنا بالموقع بدقة عند الاستفسار. وقد يكون النزول ممكنًا عند عنوان عام أو بوابة متفق عليها بعد التأكيد، أما دخول المنشآت الخاضعة للرقابة فغير مشمول ولا مضمون.",
        },
      },
      {
        name: { en: "Dammam", ar: "الدمام" },
        km: 400,
        detail: {
          en: "Arrival at your hotel, address, King Fahd International Airport or the Dammam corniche. Dhahran and Al Khobar are a short continuation south — they are quoted as the same journey with a different end point.",
          ar: "الوصول إلى فندقك أو عنوانك أو مطار الملك فهد الدولي أو كورنيش الدمام. والظهران والخبر امتداد قصير جنوبًا — وتُسعَّر كالرحلة نفسها بنقطة وصول مختلفة.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any address in Riyadh, including King Khalid International Airport arrivals. For business travel the common pattern is an early pickup from a hotel or home so the first meeting in Dammam is comfortably reachable; we work the departure time back from the hour you need to be there.",
        ar: "أي عنوان في الرياض، بما في ذلك صالة الوصول في مطار الملك خالد الدولي. والنمط الشائع في رحلات العمل هو استقبال مبكر من الفندق أو المنزل ليكون أول اجتماع في الدمام في المتناول براحة، ونحسب وقت الانطلاق تراجعيًا من الساعة التي يجب أن تصل فيها.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in the Eastern Province", ar: "الوصول في المنطقة الشرقية" },
    paragraphs: [
      {
        en: "Door-to-door in Dammam, and equally to Dhahran, Al Khobar or King Fahd International Airport — the three sit close together and the drive between them is short. Give us the precise destination. For a residential compound or an industrial site, drop-off may be possible at an agreed entrance or gate; entry inside is not included, and security permission and internal access are not guaranteed.",
        ar: "من الباب إلى الباب في الدمام، وكذلك إلى الظهران أو الخبر أو مطار الملك فهد الدولي — فالثلاثة متقاربة والمسافة بينها قصيرة. وزوّدنا بالوجهة بدقة. وفي المجمّعات السكنية أو المواقع الصناعية قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى الداخل، ولا نضمن الإذن الأمني أو الوصول الداخلي.",
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Passengers", ar: "الركاب" },
        paragraphs: [
          {
            en: "A sedan is comfortable for one to three people on a four-hour run. Groups of four or more usually take an SUV or a van; the cost of the vehicle does not change with the number of people in it, which is why this route works out well for teams travelling together.",
            ar: "السيدان مريحة لواحد إلى ثلاثة أشخاص في رحلة من أربع ساعات. ومجموعات أربعة فأكثر تأخذ عادةً دفعًا رباعيًا أو ڤان، وسعر السيارة لا يتغير بعدد ركابها، ولهذا يناسب هذا المسار فرق العمل المسافرة معًا.",
          },
        ],
      },
      {
        heading: { en: "Luggage and equipment", ar: "الأمتعة والمعدات" },
        paragraphs: [
          {
            en: "No allowance and no weight limit beyond what the vehicle safely carries. Site visits often involve cases, samples or tools — describe what is coming with you and we will match the vehicle rather than discover the problem at the kerb.",
            ar: "لا حد مسموح ولا قيد وزن سوى ما تحمله السيارة بأمان. وزيارات المواقع غالبًا ما ترافقها حقائب أو عينات أو أدوات — صِف ما سيأتي معك ونختار السيارة المناسبة بدل اكتشاف المشكلة عند الرصيف.",
          },
        ],
      },
      {
        heading: { en: "Waiting and same-day returns", ar: "الانتظار والعودة في اليوم نفسه" },
        paragraphs: [
          {
            en: "A common request on this route is for the vehicle to wait and bring you back the same day. That is arranged as a day booking rather than two transfers, and the waiting hours are priced in the quotation so there is no surprise at the end.",
            ar: "من الطلبات الشائعة على هذا المسار أن تنتظر السيارة وتعيدك في اليوم نفسه. ويُرتَّب ذلك كحجز يوم كامل لا كرحلتي نقل، وتُحتسب ساعات الانتظار في عرض السعر فلا مفاجآت في النهاية.",
          },
        ],
      },
      {
        heading: { en: "Return journeys", ar: "رحلة العودة" },
        paragraphs: [
          {
            en: "Dammam to Riyadh is quoted as its own journey, or as the return leg of a day booking. Ask for both directions together and the same vehicle and driver can be planned around your schedule.",
            ar: "تُسعَّر رحلة الدمام إلى الرياض كرحلة مستقلة أو كمرحلة عودة ضمن حجز يوم كامل. واطلب الاتجاهين معًا ليمكن التخطيط للسيارة والسائق نفسيهما حول جدولك.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the pickup address, the exact destination in the Eastern Province, the date, the time you need to arrive, and the number of passengers and bags. Say whether you need the vehicle to wait or to return the same day — it changes the quotation.",
        ar: "أرسل عنوان الانطلاق والوجهة بدقة في المنطقة الشرقية والتاريخ والوقت الذي يجب أن تصل فيه وعدد الركاب والحقائب. وأخبرنا إن كنت تحتاج أن تنتظر السيارة أو أن تعود في اليوم نفسه — فذلك يغيّر عرض السعر.",
      },
      {
        en: "You receive a written price before anything is reserved. No payment is taken to get a quotation and nothing is booked until you accept it.",
        ar: "تستلم سعرًا مكتوبًا قبل حجز أي شيء. ولا يُدفع أي مبلغ للحصول على عرض السعر، ولا يُحجز شيء حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Dammam: common questions",
    ar: "الرياض إلى الدمام: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How long is the drive from Riyadh to Dammam?",
        ar: "كم تستغرق الرحلة من الرياض إلى الدمام؟",
      },
      answer: {
        en: "About three and a half to four and a half hours for roughly 400 km on Highway 40. Published estimates range from around 3h 30m to 4h 40m, with traffic at either end explaining most of the difference. We quote a realistic departure time for the arrival you need rather than the fastest figure.",
        ar: "نحو ثلاث ساعات ونصف إلى أربع ساعات ونصف لمسافة 400 كم تقريبًا على طريق 40. وتتراوح التقديرات المنشورة بين 3:30 و4:40 ساعة، ويفسر الازدحام عند الطرفين معظم الفارق. ونحن نحدد وقت انطلاق واقعيًا للوصول الذي تحتاجه لا الرقم الأسرع.",
      },
    },
    {
      question: {
        en: "Why does the Riyadh to Dammam distance differ between websites?",
        ar: "لماذا تختلف المسافة بين الرياض والدمام بين المواقع؟",
      },
      answer: {
        en: "They are not measuring the same thing. Published road figures for this corridor sit between roughly 402 and 418 km because each route planner picks its own city-centre reference point. The railway is a different 449 km again, because it runs via Abqaiq and Hofuf rather than along the highway. The only distance that affects your journey is the one between your two actual addresses, and that is what we quote on.",
        ar: "لأنها لا تقيس الشيء نفسه. تتراوح الأرقام المنشورة للطريق في هذا الممر بين 402 و418 كم تقريبًا، لأن كل أداة تخطيط مسارات تختار نقطة مرجعية مختلفة في وسط المدينة. أما سكة الحديد فطولها 449 كم، لأنها تمر عبر بقيق والهفوف لا على امتداد الطريق السريع. والمسافة الوحيدة التي تؤثر في رحلتك هي التي بين عنوانيك الفعليين، وعليها نُسعّر.",
      },
    },
    {
      question: {
        en: "Is the train faster than driving to Dammam?",
        ar: "هل القطار أسرع من السيارة إلى الدمام؟",
      },
      answer: {
        en: "Between the two city centres the train is competitive and can be quicker. The honest comparison is on this page: the train usually wins for one or two people travelling light station to station, and the car wins for groups, heavy luggage, addresses away from a station, or when you want to set your own departure time. Check schedules and fares with the rail operator — we do not sell rail tickets.",
        ar: "بين وسطي المدينتين يكون القطار منافسًا وقد يكون أسرع. والمقارنة الصادقة موجودة في هذه الصفحة: القطار يتفوق عادةً لشخص أو شخصين بأمتعة خفيفة من محطة إلى محطة، والسيارة تتفوق للمجموعات والأمتعة الثقيلة والعناوين البعيدة عن المحطات أو حين تريد تحديد وقت مغادرتك. وتحقق من المواعيد والأسعار لدى مشغّل السكة — فنحن لا نبيع تذاكر قطار.",
      },
    },
    {
      question: {
        en: "Can the driver wait and take me back the same day?",
        ar: "هل يمكن للسائق الانتظار وإعادتي في اليوم نفسه؟",
      },
      answer: {
        en: "Yes. That is arranged as a day booking rather than two separate transfers. Tell us roughly how many hours you expect to need at the destination and the waiting time is included in the quoted price.",
        ar: "نعم. ويُرتَّب ذلك كحجز يوم كامل لا كرحلتي نقل منفصلتين. أخبرنا تقريبًا بعدد الساعات التي تتوقع أن تحتاجها في الوجهة ويُدرَج وقت الانتظار ضمن السعر المعروض.",
      },
    },
    {
      question: {
        en: "Do you drop off at King Fahd International Airport?",
        ar: "هل توصلون إلى مطار الملك فهد الدولي؟",
      },
      answer: {
        en: "Yes. Give us your departure time and we plan the journey back from it, allowing for traffic entering the Dammam area. Arriving passengers can be met at the airport for the journey in the other direction.",
        ar: "نعم. زوّدنا بوقت إقلاعك ونرتّب الرحلة تراجعيًا منه مع احتساب الحركة المرورية عند دخول منطقة الدمام. ويمكن استقبال القادمين في المطار للرحلة في الاتجاه المعاكس.",
      },
    },
    {
      question: {
        en: "Can you take me to an industrial site rather than a city address?",
        ar: "هل يمكن إيصالي إلى موقع صناعي بدل عنوان في المدينة؟",
      },
      answer: {
        en: "A drop-off at a public address, or at an agreed entrance or gate, may be possible, subject to confirmation when you enquire — tell us the exact site. Entry to controlled industrial facilities is not included or guaranteed: security access, gate permissions, passes and escorts are controlled by the site operator, not by us, and are yours to arrange.",
        ar: "قد يكون النزول ممكنًا عند عنوان عام أو عند مدخل أو بوابة متفق عليها، بعد التأكيد عند الاستفسار، فأخبرنا بالموقع بدقة. أما دخول المنشآت الصناعية الخاضعة للرقابة فغير مشمول ولا مضمون، إذ يتحكم مشغّل الموقع لا نحن في الدخول الأمني وأذونات البوابات والتصاريح والمرافقة، وترتيبها مسؤوليتك.",
      },
    },
    {
      question: {
        en: "Is Al Khobar the same journey?",
        ar: "هل الخبر هي الرحلة نفسها؟",
      },
      answer: {
        en: "Almost. Al Khobar sits a short drive south of Dammam, so it is the same road with a different end point and a little more time. It has its own page because what people want at that end — the corniche, the causeway to Bahrain — is different.",
        ar: "تقريبًا. تقع الخبر على مسافة قصيرة جنوب الدمام، فهي الطريق نفسه بنقطة وصول مختلفة ووقت إضافي يسير. ولها صفحة خاصة لأن ما يقصده الناس هناك — الكورنيش وجسر البحرين — مختلف.",
      },
    },
  ],

  related: [
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "Airport, railway, hotel and intercity journeys from the capital.",
        ar: "رحلات المطار والقطار والفنادق وبين المدن انطلاقًا من العاصمة.",
      },
    },
    {
      routeKey: "riyadhToAlKhobar",
      label: { en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" },
      note: {
        en: "The same road, continuing south past Dammam to the corniche.",
        ar: "الطريق نفسه، ويكمل جنوبًا بعد الدمام حتى الكورنيش.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "The opposite direction — about 950 km west to the Red Sea.",
        ar: "الاتجاه المعاكس — نحو 950 كم غربًا إلى البحر الأحمر.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Half a day, door to door", ar: "نصف يوم، من الباب إلى الباب" },
    heading: {
      en: "Get your Dammam transfer quote",
      ar: "احصل على سعر رحلتك إلى الدمام",
    },
    body: {
      en: "Tell us where you are starting, the exact destination in the Eastern Province and when you need to be there.",
      ar: "أخبرنا من أين تبدأ وما وجهتك بدقة في المنطقة الشرقية ومتى يجب أن تكون هناك.",
    },
    button: { en: "Request a Dammam quotation", ar: "اطلب عرض سعر للدمام" },
  },
};
