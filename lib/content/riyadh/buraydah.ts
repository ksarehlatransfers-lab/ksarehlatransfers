import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Buraydah.
 *
 * The shortest route in batch 2 and the most practical. At three and a half
 * to four and a half hours it is the one journey in the set where "wait for
 * me and drive me back today" is the natural product rather than an unusual
 * request — the same pattern that already works on the Dammam page.
 *
 * Two things shape the page. First, the region matters more than the city:
 * people searching for Qassim often want Unaizah or Ar Rass, so the satellite
 * towns get their own block. Second, Qassim is a station on the SAR North
 * line, so this route has a genuine rail alternative and gets the same honest
 * comparison the Dammam page carries. No schedule or fare is published — those
 * are the operator's to state and ours to get wrong.
 *
 * Figures are approximations from public route data. Sources in
 * docs/riyadh-content-research.md.
 */
export const riyadhToBuraydah: RoutePageContent = {
  routeKey: "riyadhToBuraydah",
  imageKey: "dest-buraydah",

  seo: {
    // 49 characters.
    title: {
      en: "Riyadh to Buraydah Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى بريدة والقصيم | عرض سعر",
    },
    description: {
      en: "Private transfer from Riyadh to Buraydah and the Qassim region — about 360 km and 3.5 to 4.5 hours north on Highway 65. Door to door, or weighed honestly against the train.",
      ar: "نقل خاص من الرياض إلى بريدة ومنطقة القصيم — نحو 360 كم و3.5 إلى 4.5 ساعة شمالًا على طريق 65. من الباب إلى الباب، أو مقارنة صادقة مع القطار.",
    },
  },

  crumbLabel: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },

  hero: {
    eyebrow: { en: "Intercity · Qassim region", ar: "بين المدن · منطقة القصيم" },
    h1: {
      en: "Riyadh to Buraydah private transfer",
      ar: "نقل خاص من الرياض إلى بريدة",
    },
    lead: {
      en: "North on Highway 65 into Qassim. Short enough to go and come back in a day, which makes this the one route where the vehicle waiting for you is usually the better answer.",
      ar: "شمالًا على طريق 65 إلى القصيم. قصيرة بما يكفي للذهاب والعودة في يوم واحد، ولهذا فهي المسار الذي يكون فيه انتظار السيارة لك هو الحل الأفضل عادةً.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~360 km", ar: "~360 كم" },
      note: {
        en: "Published figures run from about 358 km to over 400 km. Some of the higher ones come from calculators that add a margin for road curvature rather than measuring the road, so the lower end is the more realistic.",
        ar: "تتراوح الأرقام المنشورة بين نحو 358 كم وأكثر من 400 كم. وبعض الأرقام الأعلى يأتي من حاسبات تضيف هامشًا لانحناء الطريق بدل قياس الطريق نفسه، فالحد الأدنى هو الأقرب إلى الواقع.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "3.5–4.5 hours", ar: "3.5–4.5 ساعة" },
      note: {
        en: "About three and a half hours at open-road speeds, and nearer four and a half once leaving Riyadh, a break and arrival traffic are counted.",
        ar: "نحو ثلاث ساعات ونصف بسرعات الطريق المفتوح، وتقترب من أربع ساعات ونصف بعد احتساب الخروج من الرياض واستراحة وحركة الوصول.",
      },
    },
    {
      label: { en: "Main road", ar: "الطريق الرئيسي" },
      value: { en: "Highway 65", ar: "طريق 65" },
      note: {
        en: "The north–south route through the centre of the country. The Riyadh to Qassim section is a dual-carriageway expressway.",
        ar: "الطريق الممتد شمالًا وجنوبًا عبر وسط البلاد. والقسم بين الرياض والقصيم طريق سريع مزدوج.",
      },
    },
    {
      label: { en: "Rail alternative", ar: "البديل بالقطار" },
      value: { en: "SAR North line", ar: "قطار الشمال" },
      note: {
        en: "Qassim is a station on the Riyadh–Qurayyat line. Services, times and fares are set by the operator — check them directly rather than here.",
        ar: "القصيم محطة على خط الرياض – القريات. والرحلات والمواعيد والأسعار يحددها المشغّل — تحقق منها لديه مباشرة لا من هنا.",
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
        en: "Qassim is close enough to Riyadh to be an errand and far enough to be a journey. Most of the traffic on this road is people with a reason rather than tourists: family visits, agricultural business, a hospital appointment, a university term, a day of meetings in Buraydah or Unaizah.",
        ar: "القصيم قريبة من الرياض بما يكفي لتكون مهمة عارضة، وبعيدة بما يكفي لتكون رحلة. ومعظم الحركة على هذا الطريق لأصحاب حاجات لا للسياح: زيارات عائلية، وأعمال زراعية، وموعد في مستشفى، وفصل جامعي، ويوم اجتماعات في بريدة أو عنيزة.",
      },
      {
        en: "That shapes what the journey needs to be. Three and a half hours each way means a same-day return is realistic, so the most common booking here is not a one-way transfer at all — it is a vehicle that takes you up, waits while you do what you came for, and brings you home the same evening.",
        ar: "وهذا يحدد ما ينبغي أن تكون عليه الرحلة. فثلاث ساعات ونصف في كل اتجاه تجعل العودة في اليوم نفسه واقعية، ولهذا فإن الحجز الأكثر شيوعًا هنا ليس نقلًا باتجاه واحد أصلًا — بل سيارة تنقلك شمالًا وتنتظرك حتى تنجز ما جئت له وتعيدك المساء نفسه.",
      },
      {
        en: "Qassim is also farming country, and the date harvest is the one time of year the region's traffic changes character. Buraydah's date market is among the largest anywhere, and around August and September the roads into the city carry a great deal of produce. If you are travelling then, say so and the timing is planned around it.",
        ar: "والقصيم أرض زراعية أيضًا، وموسم جذاذ النخيل هو الوقت الوحيد في السنة الذي تتغير فيه طبيعة الحركة في المنطقة. فسوق التمور في بريدة من أكبر الأسواق في أي مكان، وحول أغسطس وسبتمبر تحمل الطرق المؤدية إلى المدينة كميات كبيرة من المحصول. وإن كنت مسافرًا في ذلك الحين فاذكره ويُخطَّط التوقيت على أساسه.",
      },
    ],
  },

  region: {
    heading: { en: "Buraydah, and the towns around it", ar: "بريدة والمدن حولها" },
    lead: {
      en: "Qassim is a region, not a single city, and plenty of journeys booked as “to Buraydah” actually end somewhere else in it. All of these are quoted the same way — tell us the town and we price to it.",
      ar: "القصيم منطقة لا مدينة واحدة، وكثير من الرحلات التي تُحجز إلى «بريدة» تنتهي في مكان آخر فيها. وكلها تُسعَّر بالطريقة نفسها — أخبرنا بالمدينة ونُسعّر إليها.",
    },
    centre: {
      name: { en: "Buraydah", ar: "بريدة" },
      note: {
        en: "The regional centre and the usual destination: hospitals, Qassim University, the date market and most of the hotels.",
        ar: "مركز المنطقة والوجهة المعتادة: المستشفيات وجامعة القصيم وسوق التمور ومعظم الفنادق.",
      },
    },
    satellites: [
      {
        name: { en: "Unaizah", ar: "عنيزة" },
        note: {
          en: "A short drive south-west of Buraydah and a destination in its own right. Commonly asked for by name rather than as part of a Buraydah trip.",
          ar: "على مسافة قصيرة جنوب غرب بريدة، ووجهة بحد ذاتها. ويُطلب غالبًا باسمه لا كجزء من رحلة إلى بريدة.",
        },
      },
      {
        name: { en: "Ar Rass", ar: "الرس" },
        note: {
          en: "Further south-west again. The journey is a little longer than Buraydah and is quoted to the address, not to the region.",
          ar: "أبعد جنوب غربًا. والرحلة أطول قليلًا من بريدة، وتُسعَّر إلى العنوان لا إلى المنطقة.",
        },
      },
      {
        name: { en: "Al Bukayriyah", ar: "البكيرية" },
        note: {
          en: "West of Buraydah, often combined with Unaizah in one day of visits. If you need more than one stop, say so and the waiting time goes into the price.",
          ar: "غرب بريدة، وتُجمع غالبًا مع عنيزة في يوم زيارات واحد. وإن احتجت أكثر من توقف فاذكره ويُدرَج وقت الانتظار في السعر.",
        },
      },
    ],
  },

  comparison: {
    heading: { en: "Car or the North train?", ar: "بالسيارة أم بقطار الشمال؟" },
    lead: {
      en: "Qassim is a station on the Riyadh–Qurayyat railway, so unlike most routes in this cluster you have a real choice. Here is the honest version of it. We arrange the road journey and sell no rail tickets, so there is nothing in this for us either way.",
      ar: "القصيم محطة على خط الرياض – القريات، فخلافًا لمعظم المسارات في هذه المجموعة لديك خيار حقيقي. وهذه نسخته الصادقة. نحن نرتّب الرحلة البرية ولا نبيع تذاكر قطار، فلا مصلحة لنا في أي من الخيارين.",
    },
    columns: [
      {
        title: { en: "The train suits you if", ar: "القطار يناسبك إذا" },
        points: [
          {
            en: "You are one or two people travelling light.",
            ar: "كنت مسافرًا بمفردك أو باثنين بأمتعة خفيفة.",
          },
          {
            en: "Your destination is central and you are happy to arrange local transport at the other end.",
            ar: "كانت وجهتك في المركز ولا يضايقك ترتيب نقل محلي عند الوصول.",
          },
          {
            en: "A fixed departure time suits your plans better than choosing your own.",
            ar: "كان وقت مغادرة محدد أنسب لخططك من اختيار وقتك بنفسك.",
          },
          {
            en: "You would rather read or work than sit in a car.",
            ar: "كنت تفضّل القراءة أو العمل على الجلوس في سيارة.",
          },
        ],
      },
      {
        title: { en: "The car suits you if", ar: "السيارة تناسبك إذا" },
        points: [
          {
            en: "You are a family or a group, or you have real luggage.",
            ar: "كنت عائلة أو مجموعة، أو لديك أمتعة فعلية.",
          },
          {
            en: "You are going to Unaizah, Ar Rass, Al Bukayriyah or a farm address rather than central Buraydah.",
            ar: "كانت وجهتك عنيزة أو الرس أو البكيرية أو عنوان مزرعة بدل وسط بريدة.",
          },
          {
            en: "You want to go up, do what you came for, and come back the same day without watching a timetable.",
            ar: "أردت الصعود شمالًا وإنجاز ما جئت له والعودة في اليوم نفسه دون مراقبة جدول مواعيد.",
          },
          {
            en: "You have several stops, or you do not yet know exactly when you will be free.",
            ar: "كان لديك عدة توقفات، أو لم تعرف بعد بدقة متى ستكون متفرغًا.",
          },
        ],
      },
    ],
    footnote: {
      en: "Rail schedules and fares change, so we publish none of them. Check the operator directly, then decide.",
      ar: "مواعيد القطار وأسعاره تتغير، فلا ننشر شيئًا منها. تحقق من المشغّل مباشرة ثم قرر.",
    },
  },

  stages: {
    heading: { en: "The journey", ar: "الرحلة" },
    lead: {
      en: "Approximate positions north of Riyadh.",
      ar: "مواقع تقريبية شمال الرياض.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from any address in the city, or King Khalid International Airport. For a same-day return the departure is usually early, so the working part of the day is not spent on the road.",
          ar: "الاستقبال من أي عنوان في المدينة أو من مطار الملك خالد الدولي. وللعودة في اليوم نفسه يكون الانطلاق باكرًا عادةً حتى لا يُستهلك الجزء المفيد من اليوم على الطريق.",
        },
      },
      {
        name: { en: "North out of the city", ar: "شمالًا خارج المدينة" },
        km: 60,
        detail: {
          en: "Highway 65 leaves Riyadh northwards and opens out quickly. This first stretch is where the city traffic is, and the main reason the journey time is quoted as a range rather than a number.",
          ar: "يخرج طريق 65 من الرياض شمالًا وينفتح سريعًا. وهذا الامتداد الأول هو موضع ازدحام المدينة، والسبب الرئيسي في ذكر زمن الرحلة كنطاق لا كرقم.",
        },
      },
      {
        name: { en: "Open country", ar: "الأرض المفتوحة" },
        km: 200,
        detail: {
          en: "Flat, fast and well served with fuel and rest stops. One break is normal on this route, two if there are children in the car.",
          ar: "مستوية وسريعة ومزوّدة جيدًا بالوقود والاستراحات. واستراحة واحدة أمر معتاد على هذا المسار، واثنتان إن كان في السيارة أطفال.",
        },
      },
      {
        name: { en: "Buraydah", ar: "بريدة" },
        km: 360,
        detail: {
          en: "Arrival into Qassim. Drop-off at a hospital, the university, a hotel, a residential address, or onward to Unaizah, Ar Rass or Al Bukayriyah if that is where you are actually going.",
          ar: "الوصول إلى القصيم. التوصيل إلى مستشفى أو الجامعة أو فندق أو عنوان سكني، أو المتابعة إلى عنيزة أو الرس أو البكيرية إن كانت وجهتك الفعلية.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any Riyadh address, including the airport and the railway stations. If you are connecting from a flight or a train, give us the number and we plan the pickup from it rather than from a guess.",
        ar: "أي عنوان في الرياض، بما في ذلك المطار ومحطات القطار. وإن كنت قادمًا من رحلة جوية أو قطار فزوّدنا بالرقم ونرتّب الاستقبال على أساسه لا على تخمين.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in Qassim", ar: "الوصول في القصيم" },
    paragraphs: [
      {
        en: "Door to door anywhere in the region: a Buraydah hotel, Qassim University, King Fahd Specialist Hospital, a farm or a residential address, or any of the surrounding towns. Give the specific place rather than the region — Unaizah and Ar Rass are a meaningful distance beyond Buraydah and that affects both the timing and the price.",
        ar: "من الباب إلى الباب في أي مكان بالمنطقة: فندق في بريدة، أو جامعة القصيم، أو مستشفى الملك فهد التخصصي، أو مزرعة أو عنوان سكني، أو أي من المدن المحيطة. وزوّدنا بالموقع تحديدًا لا باسم المنطقة — فعنيزة والرس على مسافة معتبرة بعد بريدة، وهذا يؤثر في التوقيت والسعر.",
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Going and returning the same day", ar: "الذهاب والعودة في اليوم نفسه" },
        paragraphs: [
          {
            en: "This is the shortest intercity route we run and the one where a same-day return genuinely works. It is quoted as one day booking rather than two separate transfers, with the waiting time included. Tell us roughly how long you expect to need in Qassim — an estimate is fine, and it is better than booking two one-way journeys and hoping they line up.",
            ar: "هذا أقصر مسار بين المدن نشغّله، وهو الذي تنجح فيه العودة في اليوم نفسه فعلًا. ويُسعَّر كحجز يوم واحد لا كرحلتي نقل منفصلتين، مع إدراج وقت الانتظار. أخبرنا تقريبًا بالمدة التي تتوقع أن تحتاجها في القصيم — والتقدير يكفي، وهو أفضل من حجز رحلتين باتجاه واحد والأمل في توافقهما.",
          },
        ],
      },
      {
        heading: { en: "Several stops in one day", ar: "عدة توقفات في يوم واحد" },
        paragraphs: [
          {
            en: "Buraydah, Unaizah and Al Bukayriyah are close enough together that visiting two or three in a day is a common request. List them in your enquiry in the order you want them and the route and the time are planned around that rather than improvised on the day.",
            ar: "بريدة وعنيزة والبكيرية قريبة بعضها من بعض بما يجعل زيارة اثنتين أو ثلاث في يوم طلبًا شائعًا. اذكرها في استفسارك بالترتيب الذي تريده ويُخطَّط المسار والوقت على أساسه لا على الارتجال في اليوم نفسه.",
          },
        ],
      },
      {
        heading: { en: "The date season", ar: "موسم التمور" },
        paragraphs: [
          {
            en: "The harvest and Buraydah's date festival fall around August and September, and the exact festival dates change from year to year. The city is busier then and the approaches carry more heavy traffic. It is not a reason to avoid travelling — just a reason to allow more time and to say that is when you are going.",
            ar: "يقع الجذاذ ومهرجان تمور بريدة حول أغسطس وسبتمبر، وتتغير مواعيد المهرجان بدقة من سنة إلى أخرى. والمدينة أكثر ازدحامًا حينها، وتحمل مداخلها حركة شاحنات أكبر. وهذا ليس سببًا لتجنب السفر — بل سبب لإتاحة وقت أكبر ولذكر أنك مسافر في ذلك الموسم.",
          },
        ],
      },
      {
        heading: { en: "Qassim airport", ar: "مطار القصيم" },
        paragraphs: [
          {
            en: "Prince Nayef bin Abdulaziz Regional Airport serves the region and we collect from it or deliver to it like any other address. That is often the useful combination on this route: fly one way, drive the other.",
            ar: "يخدم مطار الأمير نايف بن عبدالعزيز الإقليمي المنطقة، ونستقبل منه أو نوصل إليه كأي عنوان آخر. وهذا غالبًا هو المزج المفيد على هذا المسار: الطيران في اتجاه والسيارة في الآخر.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the Riyadh pickup address, the town and address in Qassim, the date and time, how many passengers and bags, and whether you want the vehicle to wait and bring you back the same day.",
        ar: "أرسل عنوان الانطلاق في الرياض، والمدينة والعنوان في القصيم، والتاريخ والوقت، وعدد الركاب والحقائب، وهل تريد أن تنتظرك السيارة وتعيدك في اليوم نفسه.",
      },
      {
        en: "We reply with a written price and the vehicle category. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Buraydah: common questions",
    ar: "الرياض إلى بريدة: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How long is the drive from Riyadh to Buraydah?",
        ar: "كم تستغرق الرحلة من الرياض إلى بريدة؟",
      },
      answer: {
        en: "About three and a half to four and a half hours for roughly 360 km north on Highway 65. The lower figure is open-road driving; the higher one is what it actually takes once you add leaving Riyadh, one break and arriving in the city. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "نحو ثلاث ساعات ونصف إلى أربع ساعات ونصف لمسافة 360 كم تقريبًا شمالًا على طريق 65. الرقم الأدنى هو القيادة على الطريق المفتوح، والأعلى هو ما تستغرقه فعلًا بعد إضافة الخروج من الرياض واستراحة واحدة والوصول إلى المدينة. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Why do published Riyadh to Buraydah distances vary so much?",
        ar: "لماذا تتباعد المسافات المنشورة بين الرياض وبريدة إلى هذا الحد؟",
      },
      answer: {
        en: "Because some of them are not measuring the road. Figures from about 358 km to over 400 km are all published for this pair; the higher ones generally come from calculators that take a straight line and add a percentage for curvature, or that assume a fixed average speed. The road figure is nearer the bottom of that range. We quote on your two actual addresses, which is the only distance that affects your journey.",
        ar: "لأن بعضها لا يقيس الطريق. فالأرقام المنشورة لهذا الزوج تتراوح بين نحو 358 كم وأكثر من 400 كم؛ والأعلى منها يأتي عادةً من حاسبات تأخذ خطًا مستقيمًا وتضيف نسبة للانحناء، أو تفترض متوسط سرعة ثابتًا. ورقم الطريق أقرب إلى أسفل هذا النطاق. ونحن نُسعّر على عنوانيك الفعليين، وهي المسافة الوحيدة التي تؤثر في رحلتك.",
      },
    },
    {
      question: {
        en: "Is the train to Qassim better than driving?",
        ar: "هل القطار إلى القصيم أفضل من السيارة؟",
      },
      answer: {
        en: "For one or two people travelling light to central Buraydah, often yes — Qassim is a station on the Riyadh–Qurayyat line and the comparison on this page is written honestly. The car wins for families, for real luggage, for Unaizah or Ar Rass or a farm address, and for anyone who wants to return the same day without a timetable. Check schedules and fares with the rail operator; we do not sell rail tickets and publish none of their figures.",
        ar: "لشخص أو شخصين بأمتعة خفيفة إلى وسط بريدة، نعم في الغالب — فالقصيم محطة على خط الرياض – القريات، والمقارنة في هذه الصفحة مكتوبة بصدق. أما السيارة فتتفوق للعائلات وللأمتعة الفعلية ولعنيزة أو الرس أو عنوان مزرعة، ولكل من يريد العودة في اليوم نفسه دون جدول مواعيد. وتحقق من المواعيد والأسعار لدى مشغّل السكة؛ فنحن لا نبيع تذاكر قطار ولا ننشر أرقامهم.",
      },
    },
    {
      question: {
        en: "Can you take me to Unaizah or Ar Rass instead?",
        ar: "هل يمكنكم نقلي إلى عنيزة أو الرس بدلًا من ذلك؟",
      },
      answer: {
        en: "Yes. Both are quoted the same way as Buraydah, just to a different address and over a slightly longer distance. Give the town and the specific address in your enquiry and the price reflects where you are actually going rather than the region as a whole.",
        ar: "نعم. كلتاهما تُسعَّر بالطريقة نفسها كبريدة، فقط إلى عنوان مختلف وعلى مسافة أطول قليلًا. اذكر المدينة والعنوان تحديدًا في استفسارك ويعكس السعر وجهتك الفعلية لا المنطقة ككل.",
      },
    },
    {
      question: {
        en: "Can the driver wait and bring me back the same day?",
        ar: "هل يمكن للسائق الانتظار وإعادتي في اليوم نفسه؟",
      },
      answer: {
        en: "Yes, and on this route that is the usual booking rather than the unusual one. It is arranged as a day booking with the waiting time included in the quoted price, not as two separate transfers. Tell us roughly how many hours you expect to need in Qassim.",
        ar: "نعم، وعلى هذا المسار يكون ذلك هو الحجز المعتاد لا الاستثنائي. ويُرتَّب كحجز يوم واحد مع إدراج وقت الانتظار في السعر المعروض، لا كرحلتي نقل منفصلتين. أخبرنا تقريبًا بعدد الساعات التي تتوقع أن تحتاجها في القصيم.",
      },
    },
    {
      question: {
        en: "Can you collect me from Qassim airport?",
        ar: "هل يمكنكم استقبالي من مطار القصيم؟",
      },
      answer: {
        en: "Yes. Prince Nayef bin Abdulaziz Regional Airport is handled like any other address, in either direction. Flying one way and driving the other is a common arrangement on this route, and both legs can be quoted together.",
        ar: "نعم. يُتعامل مع مطار الأمير نايف بن عبدالعزيز الإقليمي كأي عنوان آخر، في كلا الاتجاهين. والطيران في اتجاه والسيارة في الآخر ترتيب شائع على هذا المسار، ويمكن تسعير المرحلتين معًا.",
      },
    },
    {
      question: {
        en: "Is the date season a bad time to travel?",
        ar: "هل موسم التمور وقت سيئ للسفر؟",
      },
      answer: {
        en: "No, but it is a busier one. The harvest and the Buraydah date festival fall around August and September, with the festival dates changing each year, and the roads into the city carry more heavy traffic then. Say that is when you are travelling and we build the extra time into the plan rather than discovering it on the day.",
        ar: "لا، لكنه وقت أكثر ازدحامًا. فالجذاذ ومهرجان تمور بريدة يقعان حول أغسطس وسبتمبر، وتتغير مواعيد المهرجان كل سنة، وتحمل الطرق المؤدية إلى المدينة حركة شاحنات أكبر حينها. اذكر أنك مسافر في ذلك الوقت ونُدرج الوقت الإضافي في الخطة بدل اكتشافه في اليوم نفسه.",
      },
    },
  ],

  related: [
    {
      routeKey: "buraydah",
      label: { en: "Transfers in Buraydah", ar: "التوصيل في بريدة" },
      note: {
        en: "Once you arrive: local journeys, Prince Naif bin Abdulaziz International Airport and hotels.",
        ar: "بعد الوصول: التنقل داخل المدينة، ومطار الأمير نايف بن عبدالعزيز الدولي، والفنادق.",
      },
    },
    {
      routeKey: "unaizah",
      label: { en: "Transfers in Unaizah", ar: "التوصيل في عنيزة" },
      note: {
        en: "South-west of Buraydah: local journeys, hotels and the road between the two cities.",
        ar: "جنوب غرب بريدة: التنقل داخل المدينة، والفنادق، والطريق بين المدينتين.",
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
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "East instead, and the other route where the train is a genuine alternative.",
        ar: "شرقًا بدلًا من ذلك، والمسار الآخر الذي يكون القطار فيه بديلًا حقيقيًا.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Up and back in a day", ar: "ذهابًا وعودة في يوم" },
    heading: {
      en: "Get a price for Buraydah or Qassim",
      ar: "احصل على سعر لبريدة أو القصيم",
    },
    body: {
      en: "Tell us the town, the date, and whether you want the vehicle to wait for you. We reply with a written price and a realistic departure time.",
      ar: "أخبرنا بالمدينة والتاريخ وهل تريد أن تنتظرك السيارة. ونرد بسعر مكتوب ووقت انطلاق واقعي.",
    },
    button: { en: "Get a Buraydah quote", ar: "اطلب سعر رحلة بريدة" },
  },
};
