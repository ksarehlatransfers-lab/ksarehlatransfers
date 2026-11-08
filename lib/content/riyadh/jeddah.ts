import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Jeddah.
 *
 * Primary intent: someone who has decided to travel this route by road in a
 * private vehicle and wants to know what the drive involves before asking for
 * a price. The page answers the drive first and sells second.
 *
 * Every figure below is an approximation drawn from public route data and is
 * labelled as such in the UI. Nothing here claims a fixed price, a guaranteed
 * duration, a specific vehicle or an operating licence. Sources are recorded
 * in docs/riyadh-content-research.md.
 */
export const riyadhToJeddah: RoutePageContent = {
  routeKey: "riyadhToJeddah",
  imageKey: "dest-jeddah",

  seo: {
    // 46 characters — brand omitted so the keyword and CTA both survive.
    title: {
      en: "Riyadh to Jeddah Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى جدة | اطلب عرض سعر",
    },
    description: {
      en: "Private car, SUV or van from Riyadh to Jeddah — about 950 km and 9–10 hours by road on Highway 40. Door-to-door, your own vehicle, stops when you want them. Send your details for a quotation.",
      ar: "سيارة خاصة أو دفع رباعي أو ڤان من الرياض إلى جدة — نحو 950 كم و9–10 ساعات برًّا عبر طريق 40. من الباب إلى الباب، بسيارتك وحدك، وتوقف متى شئت. أرسل تفاصيلك للحصول على عرض سعر.",
    },
  },

  crumbLabel: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },

  hero: {
    eyebrow: { en: "Intercity · West", ar: "بين المدن · غربًا" },
    h1: {
      en: "Riyadh to Jeddah private transfer",
      ar: "نقل خاص من الرياض إلى جدة",
    },
    lead: {
      en: "The longest journey most travellers make inside Saudi Arabia: roughly 950 km west across the Najd plateau to the Red Sea coast. One vehicle, one driver, your luggage stays where you put it.",
      ar: "أطول رحلة يقطعها معظم المسافرين داخل المملكة: نحو 950 كم غربًا عبر هضبة نجد حتى ساحل البحر الأحمر. سيارة واحدة وسائق واحد، وحقائبك تبقى حيث وضعتها.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~950 km", ar: "~950 كم" },
      note: {
        en: "Direct routing on Highway 40. Public route planners give figures between about 946 and 1,050 km depending on the start and end points used.",
        ar: "عبر طريق 40 مباشرة. تعطي أدوات تخطيط المسارات أرقامًا بين 946 و1,050 كم تقريبًا حسب نقطتي البداية والنهاية.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "9–10 hours", ar: "9–10 ساعات" },
      note: {
        en: "Without stops. Allow 10–11 hours in practice once breaks, fuel and traffic around both cities are counted.",
        ar: "دون توقف. احسب 10–11 ساعة عمليًا بعد احتساب الاستراحات والتزود بالوقود والازدحام حول المدينتين.",
      },
    },
    {
      label: { en: "Main road", ar: "الطريق الرئيسي" },
      value: { en: "Highway 40", ar: "طريق 40" },
      note: {
        en: "The east–west dual carriageway linking Jeddah, Makkah, Taif, Riyadh and Dammam.",
        ar: "الطريق المزدوج الممتد شرقًا وغربًا بين جدة ومكة والطائف والرياض والدمام.",
      },
    },
    {
      label: { en: "Usual departure", ar: "وقت الانطلاق المعتاد" },
      value: { en: "Early morning", ar: "الصباح الباكر" },
      note: {
        en: "Most passengers leave Riyadh at first light so the drive finishes before dark. Night departures are possible and quoted the same way.",
        ar: "يغادر معظم الركاب الرياض مع أول الضوء لتنتهي الرحلة قبل حلول الظلام. والانطلاق ليلًا ممكن ويُسعّر بالطريقة نفسها.",
      },
    },
  ],

  statsChecked: {
    en: "Distance and driving-time figures last checked November 2026.",
    ar: "آخر تحقق من أرقام المسافة وزمن القيادة: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "What the drive actually involves",
      ar: "ما الذي تتضمنه الرحلة فعليًا",
    },
    paragraphs: [
      {
        en: "Riyadh and Jeddah sit on opposite sides of the country — the capital inland on the Najd plateau, Jeddah on the Red Sea. Flying takes under two hours, so people who choose the road are usually doing it for a reason: a lot of luggage, a family travelling together, freight or equipment that will not go in a hold, a vehicle needed at the other end, or simply a preference for not being processed through two airports.",
        ar: "تقع الرياض وجدة على طرفي البلاد — العاصمة في الداخل على هضبة نجد، وجدة على البحر الأحمر. الطيران يستغرق أقل من ساعتين، لذا فمن يختار الطريق البري عادةً له سبب: حقائب كثيرة، أو عائلة تسافر معًا، أو أمتعة ومعدات لا تُشحن في مقصورة الطائرة، أو حاجة إلى سيارة عند الوصول، أو ببساطة تفضيل عدم المرور بإجراءات مطارين.",
      },
      {
        en: "The route runs almost entirely on Highway 40, a wide dual carriageway that crosses open desert for most of its length. It is a straightforward road rather than a difficult one, but it is long, and the stretches between towns are genuinely empty. That is the main reason this journey is better done with a driver than behind the wheel yourself after a working day.",
        ar: "يسير المسار بأكمله تقريبًا على طريق 40، وهو طريق مزدوج واسع يعبر الصحراء المفتوحة في معظم امتداده. طريق واضح لا صعب، لكنه طويل، والمسافات بين البلدات خالية فعلًا. وهذا السبب الرئيسي لتفضيل القيادة مع سائق بدلًا من أن تقودها بنفسك بعد يوم عمل.",
      },
      {
        en: "A private transfer here means the whole vehicle is yours for the day. There are no other passengers, no pickups along the way, and the schedule is the one you set — including how often you stop and for how long.",
        ar: "النقل الخاص هنا يعني أن السيارة كاملة لك طوال اليوم. لا ركاب آخرين، ولا توقف لالتقاط أحد في الطريق، والجدول هو ما تحدده أنت — بما في ذلك عدد مرات التوقف ومدتها.",
      },
    ],
  },

  stages: {
    heading: { en: "The route, stage by stage", ar: "المسار مرحلة بمرحلة" },
    lead: {
      en: "Approximate positions along Highway 40. Distances are from central Riyadh and are rounded.",
      ar: "مواقع تقريبية على امتداد طريق 40. المسافات محسوبة من وسط الرياض ومقرّبة.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from your address, hotel or King Khalid International Airport. The city's western exit onto Highway 40 is the slowest part of the whole journey in morning traffic, which is one reason early departures are common.",
          ar: "الاستقبال من عنوانك أو فندقك أو مطار الملك خالد الدولي. مخرج المدينة الغربي إلى طريق 40 هو أبطأ أجزاء الرحلة كلها في ازدحام الصباح، وهذا أحد أسباب شيوع الانطلاق المبكر.",
        },
      },
      {
        name: { en: "Al Muzahimiyah", ar: "المزاحمية" },
        km: 60,
        detail: {
          en: "The first town outside Riyadh and the point where the city traffic is finally behind you. Rarely a stop on its own, but a useful marker that the open road has started.",
          ar: "أول بلدة خارج الرياض، والنقطة التي يتلاشى عندها ازدحام المدينة. نادرًا ما تكون محطة توقف بحد ذاتها، لكنها علامة على بدء الطريق المفتوح.",
        },
      },
      {
        name: { en: "Al Quwayiyah", ar: "القويعية" },
        km: 170,
        detail: {
          en: "Roughly two hours in and the usual first break: fuel, coffee and prayer facilities. If you are travelling with children, this is normally where the first real stop happens.",
          ar: "بعد نحو ساعتين، وهي محطة الاستراحة الأولى المعتادة: وقود وقهوة ومصلى. وإن كنت مسافرًا مع أطفال فهنا يكون التوقف الحقيقي الأول عادةً.",
        },
      },
      {
        name: { en: "Afif", ar: "عفيف" },
        km: 480,
        detail: {
          en: "Around the halfway mark on the Najd plateau, and the longest single stretch of empty road sits either side of it. Most drivers plan a proper break and a meal here.",
          ar: "قرابة منتصف الطريق على هضبة نجد، وأطول امتداد خالٍ من العمران يقع على جانبيها. ويخطط معظم السائقين لاستراحة حقيقية ووجبة هنا.",
        },
      },
      {
        name: { en: "Taif junction", ar: "مفترق الطائف" },
        km: 780,
        detail: {
          en: "The highway descends from the plateau towards the coastal plain near Taif. The scenic alternative through Taif itself adds roughly 100 km and a couple of hours; we only take it if you ask for it.",
          ar: "ينحدر الطريق من الهضبة نحو السهل الساحلي قرب الطائف. المسار البديل عبر الطائف يضيف نحو 100 كم وساعتين تقريبًا، ولا نسلكه إلا بطلبك.",
        },
      },
      {
        name: { en: "Jeddah", ar: "جدة" },
        km: 950,
        detail: {
          en: "Arrival at your hotel, address, King Abdulaziz International Airport or the Corniche. If you are continuing to Makkah, say so when you ask for the quote — the turn-off comes before Jeddah and the routing changes.",
          ar: "الوصول إلى فندقك أو عنوانك أو مطار الملك عبدالعزيز الدولي أو الكورنيش. وإن كنت ستكمل إلى مكة المكرمة فاذكر ذلك عند طلب السعر — فالمخرج يسبق جدة ويتغير المسار.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "We collect from any address in Riyadh: a home, an office, a hotel entrance or the arrivals hall at King Khalid International Airport. For an airport start, give us your flight number so the driver tracks the aircraft rather than a clock time.",
        ar: "نستقبلك من أي عنوان في الرياض: منزل أو مكتب أو مدخل فندق أو صالة الوصول في مطار الملك خالد الدولي. وإن كان الانطلاق من المطار فزوّدنا برقم رحلتك ليتابع السائق وصول الطائرة بدل التوقيت الثابت.",
      },
      {
        en: "Because of the length of this drive, departure time matters more than on a short transfer. We will tell you honestly what time you need to leave to arrive when you want to arrive, rather than agreeing to a schedule that only works in theory.",
        ar: "لطول هذه الرحلة، يكون وقت الانطلاق أهم منه في رحلة قصيرة. وسنخبرك بصراحة بالوقت الذي يلزم الانطلاق فيه لتصل في الموعد الذي تريده، بدل الموافقة على جدول لا يصلح إلا نظريًا.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in Jeddah", ar: "الوصول في جدة" },
    paragraphs: [
      {
        en: "Door-to-door to a hotel, a residential address, a business address, the Corniche or King Abdulaziz International Airport. If the journey ends at the airport, tell us the departure time and we will work the schedule back from it.",
        ar: "من الباب إلى الباب: فندق أو عنوان سكني أو موقع عمل أو الكورنيش أو مطار الملك عبدالعزيز الدولي. وإن انتهت الرحلة في المطار فأخبرنا بوقت الإقلاع ونرتّب الجدول بناءً عليه.",
      },
      {
        en: "Travellers continuing to Makkah for Umrah often ask for this leg as part of the same booking. It is a different journey with different timing, so it is quoted separately — mention it in your enquiry and we will price both.",
        ar: "كثيرًا ما يطلب المسافرون المكملون إلى مكة للعمرة هذه المرحلة ضمن الحجز نفسه. وهي رحلة مختلفة بتوقيت مختلف، لذا تُسعَّر على حدة — اذكرها في استفسارك ونُسعّر الرحلتين.",
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
            en: "A sedan suits one to three people on this route, but most parties travelling nine hours choose an SUV or a van for the extra space. Vans seat up to seven and minibuses up to fourteen. Tell us the exact number of travellers and we will suggest the category rather than guess.",
            ar: "السيدان تناسب من واحد إلى ثلاثة أشخاص على هذا المسار، لكن معظم المجموعات التي تسافر تسع ساعات تختار دفعًا رباعيًا أو ڤان لمساحة أكبر. الڤان يتسع حتى سبعة والحافلة الصغيرة حتى أربعة عشر. أخبرنا بالعدد بدقة ونقترح الفئة بدل التخمين.",
          },
        ],
      },
      {
        heading: { en: "Luggage", ar: "الحقائب" },
        paragraphs: [
          {
            en: "This is the main reason people drive it. There is no baggage allowance, no weight limit beyond what the vehicle safely carries, and nothing is handled by anyone but you and the driver. If you are moving an unusual load — boxes, equipment, a pram and a wheelchair together — describe it in the enquiry so the right vehicle is sent.",
            ar: "هذا هو السبب الرئيسي لاختيار الطريق البري. لا حد مسموح للأمتعة ولا قيد وزن سوى ما تحمله السيارة بأمان، ولا يلمس أمتعتك أحد سواك والسائق. وإن كنت تنقل حمولة غير معتادة — صناديق أو معدات أو عربة أطفال وكرسيًا متحركًا معًا — فصفها في الاستفسار لنرسل السيارة المناسبة.",
          },
        ],
      },
      {
        heading: { en: "Stops and breaks", ar: "التوقف والاستراحات" },
        paragraphs: [
          {
            en: "Expect two to three stops on a nine-hour drive, typically near Al Quwayiyah and Afif, for fuel, food and prayer. You set the pace — if you want to stop more often, or push through with one break, say so and the quotation reflects it.",
            ar: "توقع توقفين إلى ثلاثة في رحلة من تسع ساعات، غالبًا قرب القويعية وعفيف، للوقود والطعام والصلاة. وأنت تحدد الإيقاع — فإن أردت التوقف أكثر أو المضيّ باستراحة واحدة فاذكر ذلك وينعكس في عرض السعر.",
          },
        ],
      },
      {
        heading: { en: "Return journeys", ar: "رحلة العودة" },
        paragraphs: [
          {
            en: "Jeddah to Riyadh is quoted as its own journey. If you need both directions, ask for them together — a return is usually easier to arrange than two separate one-way requests made weeks apart, because the same vehicle and driver can be planned around it.",
            ar: "تُسعَّر رحلة جدة إلى الرياض كرحلة مستقلة. وإن احتجت الاتجاهين فاطلبهما معًا — فترتيب الذهاب والعودة عادةً أسهل من طلبين منفصلين بينهما أسابيع، لأن السيارة والسائق نفسيهما يمكن التخطيط لهما حول الرحلتين.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the pickup address in Riyadh, the drop-off in Jeddah, your travel date, the time you would like to leave or arrive, and how many of you are travelling with how much luggage. We reply with a price for that journey and the vehicle category it covers.",
        ar: "أرسل عنوان الانطلاق في الرياض وعنوان الوصول في جدة وتاريخ السفر والوقت الذي تود المغادرة أو الوصول فيه وعدد المسافرين وكمية الحقائب. ونرد بسعر تلك الرحلة وفئة المركبة التي يشملها.",
      },
      {
        en: "Nothing is reserved and no payment is taken until you accept the quotation in writing. If we cannot cover the date you want, we will tell you rather than hold the request open.",
        ar: "لا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق على عرض السعر كتابةً. وإن تعذّر علينا تغطية التاريخ الذي تريده فسنخبرك بدلًا من إبقاء الطلب معلقًا.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Jeddah: common questions",
    ar: "الرياض إلى جدة: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How long does the drive from Riyadh to Jeddah take?",
        ar: "كم تستغرق الرحلة من الرياض إلى جدة؟",
      },
      answer: {
        en: "Around nine to ten hours of driving on the direct Highway 40 route, which is roughly 950 km. In practice most people allow ten to eleven hours door to door once fuel, meals, prayer stops and city traffic at both ends are counted. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "نحو تسع إلى عشر ساعات قيادة على مسار طريق 40 المباشر الذي يبلغ نحو 950 كم. وعمليًا يحسب معظم الناس عشر إلى إحدى عشرة ساعة من الباب إلى الباب بعد احتساب الوقود والوجبات والصلاة وازدحام المدينتين. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Why do different websites give different Riyadh to Jeddah distances?",
        ar: "لماذا تختلف المسافة بين الرياض وجدة من موقع إلى آخر؟",
      },
      answer: {
        en: "Because they are measuring different journeys. Route planners measure centre to centre, which is why published figures for this route run from about 946 km to over 1,000 km, with one outlier higher still. Your journey is address to address: a pickup in north Riyadh and a drop-off in south Jeddah is a longer drive than any headline number, and the Taif routing is longer again. We quote on the two addresses you give us, so the distance in your quotation may not match any route planner exactly.",
        ar: "لأنها تقيس رحلات مختلفة. تقيس أدوات تخطيط المسارات من وسط المدينة إلى وسطها، ولهذا تتراوح الأرقام المنشورة لهذا المسار بين نحو 946 كم وأكثر من 1,000 كم، مع رقم شاذ أعلى من ذلك. أما رحلتك فمن عنوان إلى عنوان: الانطلاق من شمال الرياض والوصول إلى جنوب جدة أطول من أي رقم معلن، والمرور عبر الطائف أطول منه أيضًا. ونحن نُسعّر بناءً على العنوانين اللذين تعطينا إياهما، فقد لا تطابق المسافة في عرض السعر أي أداة تخطيط مسارات تمامًا.",
      },
    },
    {
      question: {
        en: "Is it better to fly or drive between Riyadh and Jeddah?",
        ar: "هل الأفضل الطيران أم السفر برًّا بين الرياض وجدة؟",
      },
      answer: {
        en: "Flying is faster for a person travelling light. Driving makes more sense when you have luggage that exceeds an airline allowance, a family travelling together, items you would rather not check in, or you want a vehicle available at the other end. We arrange the road journey; we do not sell flights and will not pretend the drive is quicker than it is.",
        ar: "الطيران أسرع لمن يسافر بأمتعة خفيفة. أما السفر برًّا فأنسب عند وجود أمتعة تتجاوز حد الطيران، أو عائلة تسافر معًا، أو أغراض تفضّل ألا تشحنها، أو حاجتك لسيارة عند الوصول. نحن نرتّب الرحلة البرية فقط، ولا نبيع تذاكر طيران ولن ندّعي أن الطريق أسرع مما هو عليه.",
      },
    },
    {
      question: {
        en: "Can the driver stop along the way?",
        ar: "هل يمكن للسائق التوقف في الطريق؟",
      },
      answer: {
        en: "Yes. The vehicle is reserved for your party, so stops are yours to decide. Two to three breaks are normal on this route, usually around Al Quwayiyah and Afif. If you want extra stops or a longer meal break, mention it in the enquiry so the time is built into the quotation.",
        ar: "نعم. السيارة محجوزة لمجموعتك، فالتوقف قرارك. ومن المعتاد توقفان إلى ثلاثة على هذا المسار، غالبًا حول القويعية وعفيف. وإن أردت توقفات إضافية أو استراحة طعام أطول فاذكر ذلك في الاستفسار ليُحتسب الوقت في عرض السعر.",
      },
    },
    {
      question: {
        en: "Can one driver cover the whole journey?",
        ar: "هل يغطي سائق واحد الرحلة كاملة؟",
      },
      answer: {
        en: "That depends on the departure time and the hours involved, and it is something we confirm when quoting rather than promise in advance. Where a journey cannot safely be driven by one person, we say so and price it accordingly instead of quietly arranging a longer shift.",
        ar: "يعتمد ذلك على وقت الانطلاق وعدد الساعات، وهو أمر نؤكده عند التسعير لا نعد به مسبقًا. وحين لا يمكن قيادة رحلة بأمان بشخص واحد، نقول ذلك ونُسعّرها وفقًا له بدل ترتيب وردية أطول بصمت.",
      },
    },
    {
      question: {
        en: "Can you take the Taif route instead?",
        ar: "هل يمكن سلوك طريق الطائف بدلًا من ذلك؟",
      },
      answer: {
        en: "Yes, if you ask for it. Going via Taif adds roughly 100 km and a couple of hours, and takes in the Al Hada escarpment. It is a longer and more scenic day rather than a transfer, so it is quoted as such. The direct Highway 40 route is the default.",
        ar: "نعم إن طلبت ذلك. المرور عبر الطائف يضيف نحو 100 كم وساعتين تقريبًا، ويمر بعقبة الهدا. وهو يوم أطول وأجمل منظرًا أكثر من كونه نقلًا، ويُسعَّر على هذا الأساس. والمسار الافتراضي هو طريق 40 المباشر.",
      },
    },
    {
      question: {
        en: "Do you continue from Jeddah to Makkah?",
        ar: "هل تكملون من جدة إلى مكة المكرمة؟",
      },
      answer: {
        en: "Yes, as a separate leg of about 80 to 100 km, depending on where in Jeddah it starts. Mention it in the same enquiry and we will quote both journeys together. Entry to Makkah is restricted to Muslims, and we will not carry a passenger who is not legally permitted to enter on the travel date — our Jeddah to Makkah page sets out the rules. We arrange road transport only — we are not an official Hajj or Umrah operator and do not issue permits or visas.",
        ar: "نعم، كمرحلة منفصلة بطول نحو 80 إلى 100 كم بحسب نقطة الانطلاق في جدة. اذكرها في الاستفسار نفسه ونُسعّر الرحلتين معًا. ودخول مكة مقصور على المسلمين، ولا ننقل راكبًا لا يحق له نظامًا الدخول في تاريخ الرحلة، وتعرض صفحة التوصيل من جدة إلى مكة لدينا هذه الشروط. ونحن نرتّب النقل البري فقط — لسنا مشغّلاً رسميًا للحج أو العمرة ولا نُصدر تصاريح أو تأشيرات.",
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
      routeKey: "jeddah",
      label: { en: "Arriving in Jeddah", ar: "الوصول إلى جدة" },
      note: {
        en: "What happens at the other end: the airport, the road to Makkah and journeys on from the coast.",
        ar: "ما يحدث في الطرف الآخر: المطار والطريق إلى مكة والرحلات من الساحل.",
      },
    },
    {
      routeKey: "jeddahToMakkah",
      label: { en: "Jeddah to Makkah", ar: "من جدة إلى مكة" },
      note: {
        en: "The onward leg for Umrah travellers: the entry rules, the road and hotel drop-off near the Haram.",
        ar: "المرحلة التالية للمعتمرين: شروط الدخول والطريق ومكان النزول عند الفنادق قرب الحرم.",
      },
    },
    {
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "The opposite direction — about 400 km east to the Gulf coast.",
        ar: "الاتجاه المعاكس — نحو 400 كم شرقًا إلى ساحل الخليج.",
      },
    },
    {
      routeKey: "riyadhToAlKhobar",
      label: { en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" },
      note: {
        en: "Also east, continuing past Dammam to the corniche.",
        ar: "شرقًا أيضًا، ويكمل بعد الدمام حتى الكورنيش.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Nine hours, one vehicle", ar: "تسع ساعات، سيارة واحدة" },
    heading: {
      en: "Plan your private journey to Jeddah",
      ar: "خطّط رحلتك الخاصة إلى جدة",
    },
    body: {
      en: "Give us the two addresses and the date. We reply with a price, the vehicle category and a realistic departure time.",
      ar: "أعطنا العنوانين والتاريخ. ونرد بالسعر وفئة المركبة ووقت انطلاق واقعي.",
    },
    button: { en: "Get a Jeddah transfer quote", ar: "اطلب سعر رحلة جدة" },
  },
};
