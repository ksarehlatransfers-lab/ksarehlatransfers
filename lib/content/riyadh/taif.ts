import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Taif.
 *
 * The only approved route in batch 2 where the terrain is the story: Riyadh
 * sits a little over 600 m above sea level and Taif at about 1,800 m
 * (Saudipedia; some references give ~1,879 m, unsupported by their cited
 * source — see the Makkah Region research notes),
 * so the journey ends by climbing. That is the page's signature element — an
 * elevation band with real published figures on it.
 *
 * It is also seasonal. Taif is where people go when the rest of the country
 * is at its hottest, so the page is written for summer family travel rather
 * than for business.
 *
 * Deliberately *not* here: any link to or mention of a Makkah route page.
 * Makkah is excluded from this phase, and the fact that the two share a
 * corridor is not a reason to introduce it.
 *
 * Figures are approximations from public route data. Sources in
 * docs/riyadh-content-research.md.
 */
export const riyadhToTaif: RoutePageContent = {
  routeKey: "riyadhToTaif",
  imageKey: "dest-taif",

  seo: {
    // 45 characters.
    title: {
      en: "Riyadh to Taif Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى الطائف | اطلب عرض سعر",
    },
    description: {
      en: "Private transfer from Riyadh to Taif — about 790 km and 8 to 9 hours west, climbing from the Najd plateau to the Hejaz highlands. Door to door for families and summer travel.",
      ar: "نقل خاص من الرياض إلى الطائف — نحو 790 كم و8 إلى 9 ساعات غربًا، صعودًا من هضبة نجد إلى مرتفعات الحجاز. من الباب إلى الباب للعائلات وسفر الصيف.",
    },
  },

  crumbLabel: { en: "Riyadh to Taif", ar: "الرياض إلى الطائف" },

  hero: {
    eyebrow: { en: "Intercity · Hejaz highlands", ar: "بين المدن · مرتفعات الحجاز" },
    h1: {
      en: "Riyadh to Taif private transfer",
      ar: "نقل خاص من الرياض إلى الطائف",
    },
    lead: {
      en: "West across the Najd, then up. Taif sits roughly 1,200 metres higher than Riyadh, which is the whole reason people go there in summer — and the reason the last part of the drive is unlike the first.",
      ar: "غربًا عبر نجد، ثم صعودًا. تقع الطائف على ارتفاع يزيد نحو 1,200 متر عن الرياض، وهذا هو سبب قصدها في الصيف — وسبب اختلاف الجزء الأخير من الرحلة عن أولها.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~790 km", ar: "~790 كم" },
      note: {
        en: "Route planners give between about 788 and 795 km. One calculator gives a much higher figure by adding a margin for curvature rather than measuring the road.",
        ar: "تعطي أدوات تخطيط المسارات بين 788 و795 كم تقريبًا. وتعطي إحدى الحاسبات رقمًا أعلى بكثير لأنها تضيف هامشًا للانحناء بدل قياس الطريق.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "8–9 hours", ar: "8–9 ساعات" },
      note: {
        en: "Published estimates run from about 7h 55m to 8h 50m. Allow nine to ten hours in practice with breaks, and more if you are travelling with children.",
        ar: "تتراوح التقديرات المنشورة بين نحو 7:55 و8:50 ساعة. واحسب تسع إلى عشر ساعات عمليًا مع الاستراحات، وأكثر إن كنت مسافرًا مع أطفال.",
      },
    },
    {
      label: { en: "Elevation gain", ar: "الارتفاع المكتسب" },
      value: { en: "~600 → ~1,800 m", ar: "~600 → ~1,800 م" },
      note: {
        en: "Riyadh is commonly given as 612 m above sea level; Taif as about 1,800 m (Saudipedia), with some references giving up to about 1,880 m. Neither figure states where it is measured. The climb is concentrated in the last part of the journey.",
        ar: "يُذكر ارتفاع الرياض عادةً بـ612 مترًا فوق سطح البحر، والطائف بنحو 1,800 متر (سعوديبيديا)، وتذكر بعض المراجع ما يصل إلى نحو 1,880 مترًا، ولا يحدد أي منهما موضع القياس. والصعود مُركَّز في الجزء الأخير من الرحلة.",
      },
    },
    {
      label: { en: "Rail alternative", ar: "البديل بالقطار" },
      value: { en: "None", ar: "لا يوجد" },
      note: {
        en: "There is no passenger railway to Taif. The road, or a flight into Taif airport, are the options.",
        ar: "لا يوجد قطار ركاب إلى الطائف. فالطريق البري أو الطيران إلى مطار الطائف هما الخيارات.",
      },
    },
  ],

  statsChecked: {
    en: "Distance, driving-time and elevation figures last checked November 2026.",
    ar: "آخر تحقق من أرقام المسافة وزمن القيادة والارتفاع: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "Why people take this one",
      ar: "لماذا يسلك الناس هذا المسار",
    },
    paragraphs: [
      {
        en: "Taif is the summer answer. While the rest of the country is at its hottest, the highlands are measurably cooler, and that single fact explains most of the traffic on this road between roughly June and September: families going up for weeks at a time, with the luggage that implies.",
        ar: "الطائف هي جواب الصيف. فحين تكون بقية البلاد في أشد حرّها تكون المرتفعات أبرد بفرق ملموس، وهذه الحقيقة الواحدة تفسّر معظم الحركة على هذا الطريق بين يونيو وسبتمبر تقريبًا: عائلات تصعد لأسابيع، ومعها ما يترتب على ذلك من أمتعة.",
      },
      {
        en: "It is a long day. Around 790 km and eight to nine hours of driving puts it close to the Jeddah journey in length, and the two share the same road west out of Riyadh for most of the way. The difference is the end: instead of continuing to the coast, you turn and climb.",
        ar: "وهو يوم طويل. فنحو 790 كم وثماني إلى تسع ساعات قيادة تجعله قريبًا من رحلة جدة في الطول، والرحلتان تشتركان في الطريق الغربي نفسه الخارج من الرياض في معظم المسافة. والفرق في النهاية: فبدل المتابعة إلى الساحل تنحرف وتصعد.",
      },
      {
        en: "Because it is a family journey more often than a business one, the vehicle matters more here than on a short hop. Most enquiries on this route are for a van or an SUV, and most are for more luggage than people first estimate. Describe what is coming and the vehicle is matched to it rather than to the passenger count alone.",
        ar: "ولأنها رحلة عائلية أكثر منها رحلة عمل، فإن المركبة هنا أهم منها في رحلة قصيرة. ومعظم الاستفسارات على هذا المسار لڤان أو دفع رباعي، ومعظمها لأمتعة أكثر مما يقدّره الناس أول الأمر. صِف ما سيأتي معك وتُختار السيارة بناءً عليه لا على عدد الركاب وحده.",
      },
    ],
  },

  elevation: {
    heading: { en: "The climb into the highlands", ar: "الصعود إلى المرتفعات" },
    lead: {
      en: "Most of this journey is flat. The character changes near the end, where the road leaves the plateau and gains height quickly. These are published elevations, not measurements of our own.",
      ar: "معظم هذه الرحلة مستوية. وتتغير طبيعتها قرب النهاية، حيث يترك الطريق الهضبة ويكتسب ارتفاعًا بسرعة. وهذه ارتفاعات منشورة لا قياسات خاصة بنا.",
    },
    points: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        metres: 612,
        note: {
          en: "The Najd plateau. Already high by most standards, which is easy to forget.",
          ar: "هضبة نجد. مرتفعة أصلًا بمعايير معظم المدن، وهو ما يسهل نسيانه.",
        },
      },
      {
        name: { en: "The plateau crossing", ar: "عبور الهضبة" },
        metres: 900,
        note: {
          en: "Hours of open, broadly level road west. Height changes gradually and unremarkably here.",
          ar: "ساعات من طريق مفتوح مستوٍ عمومًا غربًا. ويتغير الارتفاع هنا تدريجيًا دون أن يُلاحظ.",
        },
      },
      {
        name: { en: "Taif", ar: "الطائف" },
        metres: 1800,
        note: {
          en: "About 1,800 m above sea level, the figure given by Saudipedia; some references give up to about 1,880 m. This is the cool air people come for.",
          ar: "نحو 1,800 متر فوق سطح البحر وفق سعوديبيديا، وتذكر بعض المراجع ما يصل إلى نحو 1,880 مترًا. وهذا هو الهواء البارد الذي يقصده الناس.",
        },
      },
      {
        name: { en: "Al Hada, above the city", ar: "الهدا فوق المدينة" },
        metres: 2177,
        note: {
          en: "The mountain above Taif, given by the national tourism authority as about 2,177 m. A short drive further up, and a common day trip once you are there.",
          ar: "الجبل المطلّ على الطائف، وتذكره هيئة السياحة الوطنية بنحو 2,177 مترًا. وهو على مسافة قصيرة صعودًا، ورحلة يومية شائعة بعد الوصول.",
        },
      },
    ],
    footnote: {
      en: "Published elevations for Al Hada vary between sources from about 2,000 m to over 2,300 m; the figure above is the one given by the national tourism authority. The band is drawn to scale from these numbers but is a diagram, not a survey.",
      ar: "تتباين الارتفاعات المنشورة للهدا بين المصادر من نحو 2,000 متر إلى أكثر من 2,300 متر؛ والرقم أعلاه هو ما تذكره هيئة السياحة الوطنية. والرسم مُقاس على هذه الأرقام لكنه مخطط توضيحي لا مسح جغرافي.",
    },
  },

  stages: {
    heading: { en: "The journey", ar: "الرحلة" },
    lead: {
      en: "Approximate positions west of Riyadh.",
      ar: "مواقع تقريبية غرب الرياض.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from home, hotel or King Khalid International Airport. On a journey this long the departure is usually at first light, so the drive finishes in daylight.",
          ar: "الاستقبال من المنزل أو الفندق أو مطار الملك خالد الدولي. وفي رحلة بهذا الطول يكون الانطلاق عادةً مع أول الضوء لتنتهي الرحلة في النهار.",
        },
      },
      {
        name: { en: "Al Quwayiyah", ar: "القويعية" },
        km: 170,
        detail: {
          en: "The first substantial town west of the capital and the usual first break. The same stage as the opening of the Jeddah journey, which shares this road.",
          ar: "أول بلدة كبيرة غرب العاصمة، والاستراحة الأولى المعتادة. وهي المرحلة نفسها في بداية رحلة جدة، التي تشترك في هذا الطريق.",
        },
      },
      {
        name: { en: "Across the Najd", ar: "عبر نجد" },
        km: 480,
        detail: {
          en: "Long, open and fast. This is the bulk of the day and where the second and third breaks fall. Fuel and rest areas are regular but the gaps between them are real.",
          ar: "طويل ومفتوح وسريع. وهذا هو جُلّ اليوم، وفيه تقع الاستراحة الثانية والثالثة. والوقود والاستراحات منتظمة لكن المسافات بينها حقيقية.",
        },
      },
      {
        name: { en: "The turn and the climb", ar: "الانحراف والصعود" },
        km: 720,
        detail: {
          en: "The road leaves the westward run and begins gaining height towards the highlands. The temperature drops noticeably over the last hour — this is the part passengers remember.",
          ar: "يترك الطريق امتداده الغربي ويبدأ باكتساب الارتفاع نحو المرتفعات. وتنخفض الحرارة بوضوح في الساعة الأخيرة — وهذا هو الجزء الذي يتذكره الركاب.",
        },
      },
      {
        name: { en: "Taif", ar: "الطائف" },
        km: 790,
        detail: {
          en: "Drop-off at a hotel, a rented house, a residential address, or on up to Al Hada or Al Shafa if that is where you are staying.",
          ar: "التوصيل إلى فندق أو بيت مستأجر أو عنوان سكني، أو صعودًا إلى الهدا أو الشفا إن كان مقامك هناك.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any Riyadh address, including the airport. For a journey of this length an early departure is worth more than it sounds: it keeps the climb at the end in daylight, and it leaves room for the extra break a long day with children always needs.",
        ar: "أي عنوان في الرياض، بما في ذلك المطار. وفي رحلة بهذا الطول يكون الانطلاق المبكر أنفع مما يبدو: فهو يُبقي الصعود في نهايتها في النهار، ويتيح مجالًا للاستراحة الإضافية التي يحتاجها دائمًا يوم طويل مع أطفال.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in Taif", ar: "الوصول في الطائف" },
    paragraphs: [
      {
        en: "Door to door in the city, or on up into the surrounding highlands. A good many summer stays are not in Taif itself but at Al Hada or Al Shafa above it, which adds a mountain road at the end of an already long day — so name the actual place rather than the city, and the time and vehicle are planned for it.",
        ar: "من الباب إلى الباب في المدينة، أو صعودًا إلى المرتفعات المحيطة. وكثير من إقامات الصيف ليست في الطائف نفسها بل في الهدا أو الشفا فوقها، وهذا يضيف طريقًا جبليًا في نهاية يوم طويل أصلًا — فاذكر المكان الفعلي لا اسم المدينة، ويُخطَّط الوقت والمركبة على أساسه.",
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "The mountain roads", ar: "الطرق الجبلية" },
        paragraphs: [
          {
            en: "The approaches above Taif, the Al Hada road in particular, are genuine mountain roads with sustained gradients and many bends. Travel guides report that lorries and large buses are not permitted on the Al Hada road. None of this is a problem for a car or a van with a driver who knows it, but it is a reason to say where you are staying rather than leaving the last half hour to be discovered.",
            ar: "المداخل المرتفعة فوق الطائف، وطريق الهدا خصوصًا، طرق جبلية حقيقية بانحدارات متصلة ومنعطفات كثيرة. وتذكر أدلة السفر أن الشاحنات والحافلات الكبيرة غير مسموح لها بطريق الهدا. ولا شيء من ذلك يمثل مشكلة لسيارة أو ڤان مع سائق يعرف الطريق، لكنه سبب لذكر مكان إقامتك بدل ترك نصف الساعة الأخيرة ليُكتشف.",
          },
        ],
      },
      {
        heading: { en: "Summer is the season", ar: "الصيف هو الموسم" },
        paragraphs: [
          {
            en: "Taif is busiest when the rest of the country is hottest, broadly from June into September. Book further ahead than you would for a routine transfer in those months, and expect the roads up into the highlands to be busy at weekends.",
            ar: "تكون الطائف في أشد ازدحامها حين تكون بقية البلاد في أشد حرّها، من يونيو إلى سبتمبر تقريبًا. فاحجز قبل موعدك بوقت أطول مما تفعل في نقل روتيني في تلك الأشهر، وتوقّع ازدحام الطرق الصاعدة إلى المرتفعات في نهايات الأسبوع.",
          },
        ],
      },
      {
        heading: { en: "Luggage for a long stay", ar: "أمتعة الإقامة الطويلة" },
        paragraphs: [
          {
            en: "A summer move to the highlands is not weekend packing. Families on this route routinely travel with more than a van's nominal capacity, and the single most useful thing you can put in an enquiry is an honest description of the bags. It is the difference between one vehicle and two.",
            ar: "الانتقال الصيفي إلى المرتفعات ليس أمتعة نهاية أسبوع. فالعائلات على هذا المسار تسافر عادةً بأكثر من السعة الاسمية للڤان، وأنفع ما يمكن أن تضعه في استفسارك هو وصف صادق للحقائب. فهذا هو الفرق بين سيارة واحدة واثنتين.",
          },
        ],
      },
      {
        heading: { en: "Breaking the journey", ar: "تقسيم الرحلة" },
        paragraphs: [
          {
            en: "Eight to nine hours of driving is a full day, and some parties would rather not do it in one. The road west is the same one the Jeddah journey uses, so a stop part-way is straightforward to arrange. Say so in the enquiry and it is quoted as planned rather than improvised.",
            ar: "ثماني إلى تسع ساعات قيادة يوم كامل، وبعض المجموعات تفضّل ألا تقطعه مرة واحدة. والطريق الغربي هو نفسه الذي تستخدمه رحلة جدة، فالتوقف في منتصف الطريق سهل الترتيب. اذكر ذلك في الاستفسار ويُسعَّر كخطة لا كارتجال.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the Riyadh pickup address, where you are staying in Taif or above it, the date, the number of passengers, and an honest description of the luggage. Mention child seats and whether you want a stop on the way.",
        ar: "أرسل عنوان الانطلاق في الرياض، ومكان إقامتك في الطائف أو فوقها، والتاريخ، وعدد الركاب، ووصفًا صادقًا للأمتعة. واذكر مقاعد الأطفال وهل تريد توقفًا في الطريق.",
      },
      {
        en: "We reply with a written price and the vehicle category. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Taif: common questions",
    ar: "الرياض إلى الطائف: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How long is the drive from Riyadh to Taif?",
        ar: "كم تستغرق الرحلة من الرياض إلى الطائف؟",
      },
      answer: {
        en: "About eight to nine hours of driving for roughly 790 km. Published estimates run from about 7h 55m to 8h 50m, and in practice most parties allow nine to ten hours once breaks and the climb at the end are counted. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "نحو ثماني إلى تسع ساعات قيادة لمسافة 790 كم تقريبًا. وتتراوح التقديرات المنشورة بين 7:55 و8:50 ساعة، وعمليًا تحسب معظم المجموعات تسع إلى عشر ساعات بعد احتساب الاستراحات والصعود في النهاية. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Is the mountain road to Taif difficult?",
        ar: "هل الطريق الجبلي إلى الطائف صعب؟",
      },
      answer: {
        en: "The main approach is a built highway, not a track, but the roads above the city are genuine mountain roads with long gradients and many bends — travel guides note that lorries and large buses are not permitted on the Al Hada road. For a car or van with a driver who knows the route it is routine. If anyone in your party is uneasy on mountain roads, say so and we plan the stops accordingly.",
        ar: "المدخل الرئيسي طريق مُعبَّد لا مسلك ترابي، لكن الطرق فوق المدينة طرق جبلية حقيقية بانحدارات طويلة ومنعطفات كثيرة — وتذكر أدلة السفر أن الشاحنات والحافلات الكبيرة غير مسموح لها بطريق الهدا. وبالنسبة لسيارة أو ڤان مع سائق يعرف المسار فالأمر روتيني. وإن كان أحد في مجموعتك غير مرتاح على الطرق الجبلية فاذكر ذلك ونرتّب الاستراحات وفقًا له.",
      },
    },
    {
      question: {
        en: "How much cooler is Taif than Riyadh?",
        ar: "كم تكون الطائف أبرد من الرياض؟",
      },
      answer: {
        en: "Enough that it is the reason people go. Taif sits roughly 1,200 metres higher than Riyadh — about 1,800 m against 612 m — and highland air at that elevation is reliably cooler through the summer. We are a transfer service rather than a weather service, so we will not quote you temperatures; check a forecast for your dates.",
        ar: "بما يكفي ليكون هو سبب قصد الناس لها. فالطائف أعلى من الرياض بنحو 1,200 متر — قرابة 1,800 متر مقابل 612 مترًا — وهواء المرتفعات على هذا الارتفاع أبرد باستمرار خلال الصيف. ونحن خدمة نقل لا خدمة أرصاد، فلن نذكر لك درجات حرارة؛ تحقق من توقعات الطقس لتواريخك.",
      },
    },
    {
      question: {
        en: "Can you continue up to Al Hada or Al Shafa?",
        ar: "هل تكملون صعودًا إلى الهدا أو الشفا؟",
      },
      answer: {
        en: "Yes. Both are above the city and both are common places to be staying rather than just to visit. It adds a mountain road at the end of the journey, so name the address when you enquire and the time and the vehicle are planned for it.",
        ar: "نعم. كلتاهما فوق المدينة، وكلتاهما مكان إقامة شائع لا مجرد زيارة. ويضيف ذلك طريقًا جبليًا في نهاية الرحلة، فاذكر العنوان عند الاستفسار ويُخطَّط الوقت والمركبة على أساسه.",
      },
    },
    {
      question: {
        en: "Is there a train from Riyadh to Taif?",
        ar: "هل هناك قطار من الرياض إلى الطائف؟",
      },
      answer: {
        en: "No. There is no passenger railway to Taif, so the choice is the road or a flight into Taif airport. We arrange the road journey and can collect from or deliver to the airport if you fly one leg.",
        ar: "لا. لا يوجد قطار ركاب إلى الطائف، فالخيار هو الطريق البري أو الطيران إلى مطار الطائف. ونحن نرتّب الرحلة البرية، ويمكننا الاستقبال من المطار أو التوصيل إليه إن سافرت إحدى المرحلتين جوًّا.",
      },
    },
    {
      question: {
        en: "Can the journey be split over two days?",
        ar: "هل يمكن تقسيم الرحلة على يومين؟",
      },
      answer: {
        en: "Yes, and on a nine-hour day it is a reasonable thing to want. The road west out of Riyadh is the one the Jeddah journey uses, so a planned overnight part-way is straightforward. Tell us in the enquiry; the driver's hours and the accommodation stop are then part of the quotation rather than an afterthought.",
        ar: "نعم، وفي يوم من تسع ساعات فهذا مطلب معقول. والطريق الغربي الخارج من الرياض هو الذي تستخدمه رحلة جدة، فالمبيت المخطط في منتصف الطريق أمر سهل. اذكر ذلك في الاستفسار؛ فتصبح ساعات السائق وتوقف الإقامة جزءًا من عرض السعر لا أمرًا لاحقًا.",
      },
    },
    {
      question: {
        en: "What size vehicle does a family need for this route?",
        ar: "ما حجم المركبة التي تحتاجها عائلة على هذا المسار؟",
      },
      answer: {
        en: "Describe the party and the bags and we will tell you, rather than you guessing from a seat count. Summer travel to Taif is usually a long stay, and luggage for a long stay regularly exceeds what the passenger number alone would suggest. We would rather match the vehicle properly than arrive with one that does not fit.",
        ar: "صِف المجموعة والحقائب وسنخبرك، بدل أن تخمّن من عدد المقاعد. فالسفر الصيفي إلى الطائف إقامة طويلة عادةً، وأمتعة الإقامة الطويلة تتجاوز بانتظام ما يشير إليه عدد الركاب وحده. ونحن نفضّل مطابقة المركبة بشكل صحيح على الحضور بواحدة لا تكفي.",
      },
    },
  ],

  related: [
    {
      routeKey: "taif",
      label: { en: "Taif transfers", ar: "التوصيل في الطائف" },
      note: {
        en: "Once you arrive: Taif airport, the roads down to Makkah and the Al Hada and Al Shafa highlands.",
        ar: "بعد الوصول: مطار الطائف والطريقان إلى مكة ومرتفعات الهدا والشفا.",
      },
    },
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "Airport, railway, hotel and intercity journeys from the capital.",
        ar: "رحلات المطار والقطار والفنادق وبين المدن انطلاقًا من العاصمة.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "The same road west for most of the way, continuing to the Red Sea coast instead of climbing.",
        ar: "الطريق الغربي نفسه في معظم المسافة، لكنه يكمل إلى ساحل البحر الأحمر بدل الصعود.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Up to the highlands", ar: "صعودًا إلى المرتفعات" },
    heading: {
      en: "Get a price for the Taif journey",
      ar: "احصل على سعر رحلة الطائف",
    },
    body: {
      en: "Tell us where you are staying, your date, how many are travelling and what luggage is coming. We reply with a written price and a realistic departure time.",
      ar: "أخبرنا بمكان إقامتك وتاريخك وعدد المسافرين والأمتعة القادمة معك. ونرد بسعر مكتوب ووقت انطلاق واقعي.",
    },
    button: { en: "Get a Taif quote", ar: "اطلب سعر رحلة الطائف" },
  },
};
