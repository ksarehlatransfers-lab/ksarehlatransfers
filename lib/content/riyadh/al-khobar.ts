import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Al Khobar.
 *
 * Shares a road with the Dammam page but not an intent: people heading to Al
 * Khobar are usually going to the corniche, to a hotel on the water, or on
 * towards the King Fahd Causeway. The page is built around the end of the
 * journey rather than the drive, and is explicit about what we do not do at
 * the border.
 *
 * Figures are approximations from public route data. Sources in
 * docs/riyadh-content-research.md.
 */
export const riyadhToAlKhobar: RoutePageContent = {
  routeKey: "riyadhToAlKhobar",
  imageKey: "dest-khobar",

  seo: {
    // 49 characters.
    title: {
      en: "Riyadh to Al Khobar Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى الخبر | اطلب عرض سعر",
    },
    description: {
      en: "Private car or van from Riyadh to Al Khobar — around 420 km and roughly 4 hours east. Corniche hotels, Dhahran, and onward to the King Fahd Causeway. Send your journey details for a price.",
      ar: "سيارة خاصة أو ڤان من الرياض إلى الخبر — نحو 420 كم وقرابة 4 ساعات شرقًا. فنادق الكورنيش والظهران والمتابعة إلى جسر الملك فهد. أرسل تفاصيل رحلتك للحصول على السعر.",
    },
  },

  crumbLabel: { en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" },

  hero: {
    eyebrow: { en: "Intercity · Gulf coast", ar: "بين المدن · ساحل الخليج" },
    h1: {
      en: "Riyadh to Al Khobar private transfer",
      ar: "نقل خاص من الرياض إلى الخبر",
    },
    lead: {
      en: "East to the water. Around 420 km from the capital to the Gulf corniche, with Dhahran on the way in and the causeway to Bahrain a short drive further on.",
      ar: "شرقًا نحو الماء. نحو 420 كم من العاصمة إلى كورنيش الخليج، والظهران في الطريق، وجسر البحرين على مسافة قصيرة بعدها.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~420 km", ar: "~420 كم" },
      note: {
        en: "Route planners give about 416 to 424 km by road, depending on the start and end points used.",
        ar: "تعطي أدوات تخطيط المسارات نحو 416 إلى 424 كم برًّا، حسب نقطتي البداية والنهاية.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "~4 hours", ar: "~4 ساعات" },
      note: {
        en: "Published estimates run from about 3h 35m to 4h 10m. Al Khobar is roughly fifteen to forty-five minutes beyond central Dammam depending on where you are going and the traffic.",
        ar: "تتراوح التقديرات المنشورة بين نحو 3:35 و4:10 ساعة. والخبر تبعد عن وسط الدمام من خمس عشرة إلى خمس وأربعين دقيقة تقريبًا حسب وجهتك والازدحام.",
      },
    },
    {
      label: { en: "Main road", ar: "الطريق الرئيسي" },
      value: { en: "Highway 40", ar: "طريق 40" },
      note: {
        en: "East to the Dammam metropolitan area, then south on the coastal roads into Al Khobar.",
        ar: "شرقًا إلى منطقة الدمام الحضرية، ثم جنوبًا على الطرق الساحلية إلى الخبر.",
      },
    },
    {
      label: { en: "Onward", ar: "المتابعة" },
      value: { en: "King Fahd Causeway", ar: "جسر الملك فهد" },
      note: {
        en: "The land crossing to Bahrain starts just outside Al Khobar. Our journeys end on the Saudi side; the crossing, visas and border formalities are yours to arrange.",
        ar: "يبدأ المعبر البري إلى البحرين خارج الخبر مباشرة. وتنتهي رحلاتنا على الجانب السعودي، أما العبور والتأشيرات وإجراءات الحدود فمسؤوليتك.",
      },
    },
  ],

  statsChecked: {
    en: "Distance and driving-time figures last checked November 2026.",
    ar: "آخر تحقق من أرقام المسافة وزمن القيادة: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "Why people take this one",
      ar: "لماذا يسلك الناس هذا المسار",
    },
    paragraphs: [
      {
        en: "Al Khobar is the Eastern Province at its most relaxed: a long corniche, hotels facing the Gulf, and a weekend city for families from Riyadh. It is also where a good deal of business happens, with Dhahran immediately inland and the causeway to Bahrain a short run up the coast.",
        ar: "الخبر هي الوجه الأكثر استرخاءً للمنطقة الشرقية: كورنيش طويل، وفنادق تطل على الخليج، ومدينة عطلة نهاية الأسبوع لعائلات الرياض. وفيها أيضًا نشاط تجاري واسع، والظهران ملاصقة لها من جهة البر، وجسر البحرين على مسافة قصيرة شمالًا على الساحل.",
      },
      {
        en: "The drive is the same four-hour run east as the Dammam journey for most of its length — the difference is at the end, where the coastal roads take you south into Al Khobar rather than stopping in central Dammam.",
        ar: "الرحلة هي الامتداد الشرقي نفسه الذي يستغرق أربع ساعات في رحلة الدمام في معظمه — والفرق في نهايتها، حيث تأخذك الطرق الساحلية جنوبًا إلى الخبر بدل التوقف في وسط الدمام.",
      },
      {
        en: "Families travelling for a weekend are the most common passengers here, which is why van and SUV requests outnumber sedans on this route. The luggage is different too: beach bags, pushchairs and a cool box rather than a laptop case.",
        ar: "العائلات المسافرة لعطلة نهاية الأسبوع هي الأكثر على هذا المسار، ولهذا تفوق طلبات الڤان والدفع الرباعي طلبات السيدان. والأمتعة مختلفة أيضًا: حقائب شاطئ وعربات أطفال وثلاجة صغيرة بدل حقيبة حاسوب.",
      },
    ],
  },

  stages: {
    heading: { en: "The journey", ar: "الرحلة" },
    lead: {
      en: "Approximate positions east of Riyadh.",
      ar: "مواقع تقريبية شرق الرياض.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from home, hotel or King Khalid International Airport. Families heading to the coast usually leave early on a Thursday or Friday morning; we plan the departure around when you want to be on the corniche, not around a standard slot.",
          ar: "الاستقبال من المنزل أو الفندق أو مطار الملك خالد الدولي. والعائلات المتجهة إلى الساحل تغادر عادةً صباح الخميس أو الجمعة باكرًا، ونرتّب الانطلاق حول الوقت الذي تريد أن تكون فيه على الكورنيش لا حول موعد قياسي.",
        },
      },
      {
        name: { en: "The desert run", ar: "عبور الصحراء" },
        km: 200,
        detail: {
          en: "Open, flat and well served with rest areas. With children in the car this is where most parties take their one proper break.",
          ar: "مفتوح ومستوٍ وبه استراحات جيدة. ومع وجود أطفال في السيارة، هنا تأخذ معظم المجموعات استراحتها الحقيقية الوحيدة.",
        },
      },
      {
        name: { en: "Dhahran", ar: "الظهران" },
        km: 400,
        detail: {
          en: "The approach to the coast passes Dhahran, which is a common destination in its own right. If that is where you are going, the journey ends here and is priced accordingly.",
          ar: "يمر الاقتراب من الساحل بالظهران، وهي وجهة شائعة بحد ذاتها. وإن كانت وجهتك فتنتهي الرحلة هنا وتُسعَّر وفقًا لذلك.",
        },
      },
      {
        name: { en: "Al Khobar", ar: "الخبر" },
        km: 420,
        detail: {
          en: "Drop-off at a corniche hotel, a residential address or a mall entrance. King Fahd International Airport is a short run back north if your journey continues by air.",
          ar: "التوصيل إلى فندق على الكورنيش أو عنوان سكني أو مدخل مركز تجاري. ومطار الملك فهد الدولي على مسافة قصيرة شمالًا إن كانت رحلتك ستكمل جوًّا.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any Riyadh address, including the airport. For weekend travel it is worth booking the pickup earlier than feels necessary — the eastbound road out of the city is busiest exactly when everyone else is also leaving for the coast.",
        ar: "أي عنوان في الرياض، بما في ذلك المطار. ولسفر نهاية الأسبوع يستحق الأمر حجز موعد انطلاق أبكر مما تظن — فالطريق الشرقي للخروج من المدينة يكون في أشد ازدحامه حين يغادر الجميع إلى الساحل في الوقت نفسه.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in Al Khobar", ar: "الوصول في الخبر" },
    paragraphs: [
      {
        en: "Door-to-door to a hotel on the corniche, a residential address, Dhahran or King Fahd International Airport. For a residential compound, drop-off may be possible at an agreed entrance or gate; entry inside the compound is not included, and security permission and internal access are not guaranteed. Give us the specific place rather than just the city — Al Khobar, Dhahran and Dammam run into one another and the last fifteen minutes make a real difference to the timing.",
        ar: "من الباب إلى الباب إلى فندق على الكورنيش أو عنوان سكني أو الظهران أو مطار الملك فهد الدولي. وفي المجمّعات السكنية قد يكون النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى داخل المجمّع، ولا نضمن الإذن الأمني أو الوصول الداخلي. وزوّدنا بالموقع تحديدًا لا باسم المدينة فقط — فالخبر والظهران والدمام متصلة، والدقائق الخمس عشرة الأخيرة تُحدث فرقًا حقيقيًا في التوقيت.",
      },
    ],
  },

  onward: {
    heading: { en: "Going on to Bahrain", ar: "المتابعة إلى البحرين" },
    items: [
      {
        heading: { en: "What we arrange", ar: "ما نرتّبه" },
        paragraphs: [
          {
            en: "We can take you from Riyadh to an agreed drop-off point on the Saudi side of the King Fahd Causeway. Our journey ends there: we do not drive across the causeway or provide transport in Bahrain.",
            ar: "يمكننا نقلك من الرياض إلى نقطة نزول متفق عليها على الجانب السعودي من جسر الملك فهد، وتنتهي رحلتنا هناك؛ فنحن لا نعبر الجسر ولا نقدّم النقل داخل البحرين.",
          },
        ],
      },
      {
        heading: { en: "What we do not do", ar: "ما لا نقوم به" },
        paragraphs: [
          {
            en: "We do not cross the causeway, provide the Bahrain-side journey, issue visas, process border formalities or give immigration advice. The crossing and onward transport in Bahrain are yours to arrange separately, with a service licensed for the crossing, and entry requirements for Bahrain are yours to check and meet.",
            ar: "لا نعبر الجسر ولا نقدّم النقل على الجانب البحريني، ولا نُصدر تأشيرات ولا نُنجز إجراءات الحدود ولا نقدّم استشارات جوازات. والعبور والنقل داخل البحرين ترتّبهما بنفسك مع خدمة مرخّصة للعبور، ومتطلبات دخول البحرين مسؤوليتك في التحقق منها واستيفائها.",
          },
        ],
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Families and children", ar: "العائلات والأطفال" },
        paragraphs: [
          {
            en: "This is a family route more than a business one. If you need child seats, say how many and the ages of the children in your enquiry — seats have to be arranged in advance and we will tell you plainly whether they can be provided for your date.",
            ar: "هذا مسار عائلي أكثر منه مسار عمل. وإن كنت تحتاج مقاعد أطفال فاذكر عددها وأعمار الأطفال في استفسارك — إذ تحتاج المقاعد ترتيبًا مسبقًا، وسنخبرك بوضوح إن كان توفيرها ممكنًا في تاريخك.",
          },
        ],
      },
      {
        heading: { en: "Luggage", ar: "الأمتعة" },
        paragraphs: [
          {
            en: "Weekend luggage takes more space than people expect once pushchairs and beach gear are counted. A van is the usual answer for four or more travellers on this route. Describe what is coming and the vehicle is matched to it.",
            ar: "أمتعة نهاية الأسبوع تأخذ مساحة أكبر مما يتوقع الناس بعد احتساب عربات الأطفال ومستلزمات الشاطئ. والڤان هو الحل المعتاد لأربعة مسافرين فأكثر على هذا المسار. صِف ما سيأتي معك وتُختار السيارة بناءً عليه.",
          },
        ],
      },
      {
        heading: { en: "Stops", ar: "الاستراحات" },
        paragraphs: [
          {
            en: "One or two breaks is normal on a four-hour run, and the road is well supplied with service areas. With small children, plan for two and tell us so the timing is realistic.",
            ar: "استراحة أو اثنتان أمر معتاد في رحلة من أربع ساعات، والطريق مزوّد باستراحات جيدة. ومع الأطفال الصغار خطط لاستراحتين وأخبرنا ليكون التوقيت واقعيًا.",
          },
        ],
      },
      {
        heading: { en: "Coming back", ar: "العودة" },
        paragraphs: [
          {
            en: "Al Khobar to Riyadh is quoted as its own journey. Weekend returns are the busiest time on this road in the other direction, so book the return at the same time as the outbound if your dates are fixed.",
            ar: "تُسعَّر رحلة الخبر إلى الرياض كرحلة مستقلة. وعودة نهاية الأسبوع هي أكثر الأوقات ازدحامًا على هذا الطريق في الاتجاه المعاكس، فاحجز العودة مع الذهاب إن كانت تواريخك محددة.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the Riyadh pickup address, the exact place you are going in Al Khobar or Dhahran, the date and time, and how many passengers and bags. Mention child seats and any plan to continue towards the causeway.",
        ar: "أرسل عنوان الانطلاق في الرياض والمكان المقصود بدقة في الخبر أو الظهران والتاريخ والوقت وعدد الركاب والحقائب. واذكر مقاعد الأطفال وأي نية للمتابعة نحو الجسر.",
      },
      {
        en: "We reply with a written price and the vehicle category. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Al Khobar: common questions",
    ar: "الرياض إلى الخبر: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How far is Al Khobar from Riyadh by road?",
        ar: "كم تبعد الخبر عن الرياض برًّا؟",
      },
      answer: {
        en: "Around 420 km, with published route estimates between about 416 and 424 km. Driving time is roughly four hours, give or take, depending on where in Al Khobar you are going and the traffic leaving Riyadh.",
        ar: "نحو 420 كم، وتتراوح التقديرات المنشورة بين 416 و424 كم تقريبًا. وزمن القيادة قرابة أربع ساعات زيادة أو نقصًا، حسب وجهتك داخل الخبر والحركة المرورية عند الخروج من الرياض.",
      },
    },
    {
      question: {
        en: "Why is the distance to Al Khobar quoted differently in different places?",
        ar: "لماذا تُذكر المسافة إلى الخبر بأرقام مختلفة في أماكن مختلفة؟",
      },
      answer: {
        en: "Because Dammam, Dhahran and Al Khobar are points in one continuous built-up area, and every route planner picks a slightly different point in it — which is why published figures run from about 416 to 424 km. Add the local roads at the far end and your own pickup point in Riyadh, and the real door-to-door distance can sit outside that range altogether. We quote on the addresses rather than on a planner's figure.",
        ar: "لأن الدمام والظهران والخبر نقاط في منطقة عمرانية واحدة متصلة، وكل أداة تخطيط مسارات تختار نقطة مختلفة قليلًا فيها — ولهذا تتراوح الأرقام المنشورة بين نحو 416 و424 كم. وإذا أضفت الطرق الداخلية في الطرف الآخر ونقطة انطلاقك في الرياض، فقد تخرج المسافة الحقيقية من الباب إلى الباب عن هذا النطاق كليًا. ونحن نُسعّر بناءً على العناوين لا على رقم أداة تخطيط.",
      },
    },
    {
      question: {
        en: "What is the difference between the Dammam and Al Khobar journeys?",
        ar: "ما الفرق بين رحلتي الدمام والخبر؟",
      },
      answer: {
        en: "The same road for almost the whole distance. Al Khobar sits south of Dammam on the coast, so it adds a short final stretch — commonly fifteen to forty-five minutes depending on the exact address and the traffic. We quote whichever end point you actually need.",
        ar: "الطريق نفسه في معظم المسافة. فالخبر تقع جنوب الدمام على الساحل، وتضيف امتدادًا أخيرًا قصيرًا — عادةً من خمس عشرة إلى خمس وأربعين دقيقة حسب العنوان بدقة والازدحام. ونحن نُسعّر نقطة الوصول التي تحتاجها فعلًا.",
      },
    },
    {
      question: {
        en: "Can you take us across the King Fahd Causeway to Bahrain?",
        ar: "هل يمكنكم نقلنا عبر جسر الملك فهد إلى البحرين؟",
      },
      answer: {
        en: "No. We can take you from Riyadh to an agreed drop-off point on the Saudi side of the causeway, and our journey ends there. Crossing the causeway and transport in Bahrain are arranged separately by you, with a service licensed for the crossing. Visas and border formalities are yours to arrange — we do not process them and do not give immigration advice.",
        ar: "لا. يمكننا نقلك من الرياض إلى نقطة نزول متفق عليها على الجانب السعودي من الجسر، وتنتهي رحلتنا هناك. أما عبور الجسر والنقل داخل البحرين فترتّبهما بنفسك مع خدمة مرخّصة للعبور. والتأشيرات وإجراءات الحدود مسؤوليتك — فنحن لا ننجزها ولا نقدّم استشارات جوازات.",
      },
    },
    {
      question: {
        en: "Are child seats available?",
        ar: "هل تتوفر مقاعد أطفال؟",
      },
      answer: {
        en: "Ask in your enquiry, giving the number of seats and the children's ages. Child seats have to be arranged in advance rather than assumed, and we will tell you honestly whether they can be provided for your date and vehicle rather than confirming and hoping.",
        ar: "اطلبها في استفسارك مع ذكر عدد المقاعد وأعمار الأطفال. فمقاعد الأطفال تحتاج ترتيبًا مسبقًا لا افتراضًا، وسنخبرك بصراحة إن كان توفيرها ممكنًا لتاريخك ومركبتك بدل التأكيد على أمل.",
      },
    },
    {
      question: {
        en: "Can the driver stay with us for the weekend?",
        ar: "هل يمكن أن يبقى السائق معنا طوال العطلة؟",
      },
      answer: {
        en: "Multi-day hire with the vehicle staying at your disposal can be arranged and is quoted by the day rather than by the journey. Tell us the dates and roughly how you expect to use the vehicle and we will price it properly instead of guessing.",
        ar: "يمكن ترتيب الاستئجار لعدة أيام مع بقاء السيارة تحت تصرفك، ويُسعَّر باليوم لا بالرحلة. أخبرنا بالتواريخ وبالطريقة التي تتوقع استخدام السيارة بها ونُسعّرها بشكل صحيح بدل التخمين.",
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
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "The same road, ending in central Dammam — and the road-or-rail comparison.",
        ar: "الطريق نفسه وينتهي في وسط الدمام — ومعه مقارنة الطريق البري بالقطار.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "West instead — about 950 km to the Red Sea coast.",
        ar: "غربًا بدلًا من ذلك — نحو 950 كم إلى ساحل البحر الأحمر.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Corniche and causeway", ar: "الكورنيش والجسر" },
    heading: {
      en: "Reserve your private ride to Al Khobar",
      ar: "احجز رحلتك الخاصة إلى الخبر",
    },
    body: {
      en: "Tell us the address at the coast, your date and how many are travelling. We reply with a price and a realistic departure time.",
      ar: "أخبرنا بالعنوان على الساحل وتاريخك وعدد المسافرين. ونرد بالسعر وبوقت انطلاق واقعي.",
    },
    button: { en: "Get an Al Khobar quote", ar: "اطلب سعر رحلة الخبر" },
  },
};
