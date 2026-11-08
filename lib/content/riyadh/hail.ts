import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to Hail.
 *
 * The preparation page. Long enough to need planning — around 630 km and five
 * and a half to six and a half hours — but short enough to do in one day,
 * which puts it in a different category from the AlUla journey it leads to.
 *
 * Two signature elements, both earned by the facts rather than invented for
 * variety. First a genuine preparation checklist, because this is the first
 * route in the cluster where the gaps between services are long enough to
 * matter. Second a route-choice comparison: the Transport General Authority
 * describes two ways to Hail, and "which way do you go" is a real question
 * with a real answer that nobody else on this market answers.
 *
 * A'arif Fort appears in the hero photograph. **Publish no date for it** —
 * sources conflict between the 1840s and the seventeenth century, and a
 * transfer company has no business settling that.
 *
 * Figures are approximations from public route data. Sources in
 * docs/riyadh-content-research.md.
 */
export const riyadhToHail: RoutePageContent = {
  routeKey: "riyadhToHail",
  imageKey: "dest-hail",

  seo: {
    // 45 characters.
    title: {
      en: "Riyadh to Hail Private Transfer | Get a Quote",
      ar: "نقل خاص من الرياض إلى حائل | اطلب عرض سعر",
    },
    description: {
      en: "Private transfer from Riyadh to Hail — about 630 km and 5.5 to 6.5 hours north via Qassim on Highway 65. How to plan the day, which route, and onward to AlUla.",
      ar: "نقل خاص من الرياض إلى حائل — نحو 630 كم و5.5 إلى 6.5 ساعة شمالًا عبر القصيم على طريق 65. كيف تخطط اليوم، وأي مسار، والمتابعة إلى العُلا.",
    },
  },

  crumbLabel: { en: "Riyadh to Hail", ar: "الرياض إلى حائل" },

  hero: {
    eyebrow: { en: "Intercity · the north", ar: "بين المدن · الشمال" },
    h1: {
      en: "Riyadh to Hail private transfer",
      ar: "نقل خاص من الرياض إلى حائل",
    },
    lead: {
      en: "Six hours north through Qassim. Long enough that the day needs planning, short enough to do in one — and the natural overnight stage for anyone carrying on to AlUla.",
      ar: "ست ساعات شمالًا عبر القصيم. طويلة بما يجعل اليوم يحتاج تخطيطًا، وقصيرة بما يكفي لقطعها في يوم واحد — وهي المرحلة الطبيعية للمبيت لمن يكمل إلى العُلا.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~630 km", ar: "~630 كم" },
      note: {
        en: "About 627 km by the fastest route, which runs through Al Zulfi, Buraydah and Al Shanan. A second published route is longer — see the route comparison below.",
        ar: "نحو 627 كم على أسرع مسار، وهو الذي يمر بالزلفي وبريدة والشنان. وهناك مسار منشور ثانٍ أطول — انظر مقارنة المسارات أدناه.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "5.5–6.5 hours", ar: "5.5–6.5 ساعة" },
      note: {
        en: "Published estimates start around 5h 30m. Allow the upper end once leaving Riyadh, two breaks and arrival are counted.",
        ar: "تبدأ التقديرات المنشورة من نحو 5:30 ساعة. واحسب الحد الأعلى بعد احتساب الخروج من الرياض واستراحتين والوصول.",
      },
    },
    {
      label: { en: "Main road", ar: "الطريق الرئيسي" },
      value: { en: "Highway 65", ar: "طريق 65" },
      note: {
        en: "The same north–south route that serves Qassim, continuing beyond Buraydah towards Hail and the north.",
        ar: "الطريق نفسه الممتد شمالًا وجنوبًا الذي يخدم القصيم، ويكمل بعد بريدة نحو حائل والشمال.",
      },
    },
    {
      label: { en: "Rail alternative", ar: "البديل بالقطار" },
      value: { en: "SAR North line", ar: "قطار الشمال" },
      note: {
        en: "Hail is a station on the Riyadh–Qurayyat line. Services, times and fares are the operator's to publish, not ours.",
        ar: "حائل محطة على خط الرياض – القريات. والرحلات والمواعيد والأسعار من شأن المشغّل أن ينشرها لا نحن.",
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
        en: "Hail is the north's regional centre, sitting between the Aja and Salma mountains with a fort on the hill above the city. People travel there for family, for business, for the agriculture that surrounds it, and increasingly as the first long stage of a journey to AlUla.",
        ar: "حائل هي مركز الشمال الإقليمي، تقع بين جبلي أجا وسلمى وفوقها قلعة على الهضبة المطلّة على المدينة. ويسافر الناس إليها للعائلة وللعمل وللزراعة المحيطة بها، وبصورة متزايدة كأول مرحلة طويلة في رحلة إلى العُلا.",
      },
      {
        en: "Six hours is the hinge of this page. It is a day's drive, not a hop, and the stretch beyond Qassim has longer gaps between towns and services than anything on the Dammam or Buraydah roads. That does not make it difficult — it makes it a journey worth preparing for rather than setting off on.",
        ar: "الست ساعات هي محور هذه الصفحة. فهي رحلة يوم لا تنقّلًا قصيرًا، والامتداد بعد القصيم فيه مسافات أطول بين البلدات والخدمات من أي شيء على طريقي الدمام أو بريدة. وهذا لا يجعلها صعبة — بل يجعلها رحلة تستحق الاستعداد لها لا الانطلاق فيها مباشرة.",
      },
      {
        en: "It is also the one route here with a real choice of road. Two ways to Hail are published by the transport authority, they differ by around a hundred kilometres, and which one suits you depends on whether you have a reason to stop in Qassim. That comparison is on this page because nobody else seems to have written it down.",
        ar: "وهي أيضًا المسار الوحيد هنا الذي فيه خيار حقيقي للطريق. فهناك طريقان منشوران إلى حائل من هيئة النقل، يفترقان بنحو مئة كيلومتر، وأيهما يناسبك يعتمد على ما إن كان لديك سبب للتوقف في القصيم. وهذه المقارنة في هذه الصفحة لأن أحدًا غيرنا لم يكتبها، على ما يبدو.",
      },
    ],
  },

  routeChoice: {
    heading: { en: "Two roads to Hail", ar: "طريقان إلى حائل" },
    lead: {
      en: "The transport authority describes two routes north. We default to the first unless you have a reason to prefer the other, and we will tell you which one is in the quotation.",
      ar: "تصف هيئة النقل طريقين شمالًا. ونعتمد الأول افتراضيًا إلا إن كان لديك سبب لتفضيل الآخر، وسنخبرك بأيهما في عرض السعر.",
    },
    options: [
      {
        name: { en: "Via Qassim", ar: "عبر القصيم" },
        via: {
          en: "Al Zulfi · Buraydah · Al Shanan",
          ar: "الزلفي · بريدة · الشنان",
        },
        distance: { en: "~627 km", ar: "~627 كم" },
        duration: { en: "from about 5h 30m", ar: "من نحو 5:30 ساعة" },
        note: {
          en: "The faster of the two and our default. It also passes through Buraydah, so it is the route to take if you want a proper stop, a meal, or an errand in Qassim on the way.",
          ar: "الأسرع من الطريقين وخيارنا الافتراضي. وهو يمر أيضًا ببريدة، فهو الطريق الذي تسلكه إن أردت توقفًا حقيقيًا أو وجبة أو مهمة في القصيم على الطريق.",
        },
      },
      {
        name: { en: "The western route", ar: "الطريق الغربي" },
        via: {
          en: "Al Muzahimiyah · Shaqra · Al Nabhaniyah",
          ar: "المزاحمية · شقراء · النبهانية",
        },
        distance: { en: "~730 km", ar: "~730 كم" },
        duration: { en: "longer", ar: "أطول" },
        note: {
          en: "Around a hundred kilometres further and correspondingly slower. Worth it only if one of the towns on it is somewhere you actually need to be, or if conditions on the day make it the better road.",
          ar: "أطول بنحو مئة كيلومتر وأبطأ تبعًا لذلك. ولا يستحق إلا إن كانت إحدى بلداته مكانًا تحتاج الوصول إليه فعلًا، أو إن جعلته ظروف اليوم الطريق الأفضل.",
        },
      },
    ],
    footnote: {
      en: "Distances are published approximations and the time for the western route is given as “longer” rather than a figure, because we did not find one we trust. If you need a precise comparison for your own addresses, ask and we will work it out for the actual journey.",
      ar: "المسافات تقديرات منشورة، وزمن الطريق الغربي مذكور بأنه «أطول» لا برقم، لأننا لم نجد رقمًا نثق به. وإن احتجت مقارنة دقيقة لعنوانيك فاطلبها ونحسبها للرحلة الفعلية.",
    },
  },

  checklist: {
    heading: { en: "Planning a six-hour drive", ar: "التخطيط لرحلة ست ساعات" },
    lead: {
      en: "None of this is difficult, and all of it is easier decided now than at four in the afternoon somewhere past Buraydah.",
      ar: "لا شيء من هذا صعب، وكله أسهل أن يُقرَّر الآن من أن يُقرَّر في الرابعة عصرًا في مكان ما بعد بريدة.",
    },
    items: [
      {
        title: { en: "Leave early", ar: "انطلق باكرًا" },
        detail: {
          en: "An early start is the single most useful decision on this route. It puts the whole drive in daylight, leaves room for an unplanned break, and gets you into Hail with the day still usable.",
          ar: "الانطلاق المبكر هو أنفع قرار على هذا المسار. فهو يجعل الرحلة كلها في النهار، ويتيح مجالًا لاستراحة غير مخططة، ويوصلك إلى حائل واليوم ما زال قابلًا للاستخدام.",
        },
      },
      {
        title: { en: "Know where the stops are", ar: "اعرف مواضع الاستراحات" },
        detail: {
          en: "Qassim, roughly at the halfway point, is the one substantial stop with everything you might want. Beyond Buraydah the towns thin out. Two breaks is normal: one before Qassim and one in it.",
          ar: "القصيم، في منتصف الطريق تقريبًا، هي التوقف الكبير الوحيد الذي فيه كل ما قد تحتاجه. وبعد بريدة تتباعد البلدات. واستراحتان أمر معتاد: واحدة قبل القصيم وواحدة فيه.",
        },
      },
      {
        title: { en: "Carry water, not just a bottle", ar: "احمل ماءً لا قارورة واحدة" },
        detail: {
          en: "On any long desert road the sensible margin is more water than you expect to drink. This is ordinary advice for the region rather than a warning specific to this route.",
          ar: "على أي طريق صحراوي طويل، الهامش المعقول هو ماء أكثر مما تتوقع شربه. وهذه نصيحة عادية للمنطقة لا تحذيرًا خاصًا بهذا المسار.",
        },
      },
      {
        title: { en: "Think about night driving", ar: "فكّر في القيادة الليلية" },
        detail: {
          en: "Travel sources advise against night driving on unlit stretches of road in the region, because loose livestock near the carriageway is a real hazard after dark. We pass that on as the advice it is rather than as a rule, but it is the main reason we suggest an early departure. If your plans require arriving at night, say so and the route and timing are planned around it.",
          ar: "تنصح مصادر السفر بتجنب القيادة الليلية على الامتدادات غير المضاءة من الطريق في المنطقة، لأن الماشية السائبة قرب المسار خطر حقيقي بعد الغروب. وننقل ذلك كنصيحة لا كقاعدة، لكنه السبب الرئيسي في اقتراحنا الانطلاق المبكر. وإن اقتضت خططك الوصول ليلًا فاذكر ذلك ويُخطَّط المسار والتوقيت على أساسه.",
        },
      },
      {
        title: { en: "Decide the return before you go", ar: "حدد العودة قبل أن تذهب" },
        detail: {
          en: "Six hours each way means a same-day return is a twelve-hour day of driving, which we would rather plan properly than agree to casually. Most parties stay the night. Tell us the shape you want and the driver's hours are part of the quotation.",
          ar: "ست ساعات في كل اتجاه تعني أن العودة في اليوم نفسه يوم قيادة من اثنتي عشرة ساعة، ونحن نفضّل تخطيطه بشكل صحيح على الموافقة عليه عرضًا. ومعظم المجموعات تبيت ليلة. أخبرنا بالشكل الذي تريده وتصبح ساعات السائق جزءًا من عرض السعر.",
        },
      },
    ],
  },

  stages: {
    heading: { en: "The journey", ar: "الرحلة" },
    lead: {
      en: "Approximate positions north of Riyadh on the Qassim route.",
      ar: "مواقع تقريبية شمال الرياض على مسار القصيم.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from any address, or King Khalid International Airport. Early, for the reasons on the checklist above.",
          ar: "الاستقبال من أي عنوان أو من مطار الملك خالد الدولي. وباكرًا، للأسباب المذكورة في القائمة أعلاه.",
        },
      },
      {
        name: { en: "Al Zulfi", ar: "الزلفي" },
        km: 260,
        detail: {
          en: "North on Highway 65 and the first named stage of the faster route. Open, fast road with services.",
          ar: "شمالًا على طريق 65، وهي أول مرحلة مسماة على المسار الأسرع. طريق مفتوح وسريع وفيه خدمات.",
        },
      },
      {
        name: { en: "Buraydah", ar: "بريدة" },
        km: 360,
        detail: {
          en: "Roughly the halfway point and the practical stop. Everything you might need is here, and it is the last place on the route where that is true.",
          ar: "منتصف الطريق تقريبًا والتوقف العملي. وكل ما قد تحتاجه موجود هنا، وهو آخر موضع على المسار يصح فيه ذلك.",
        },
      },
      {
        name: { en: "Al Shanan", ar: "الشنان" },
        km: 530,
        detail: {
          en: "The long northern stretch beyond Qassim. Fewer towns, longer gaps, and the part of the day the early start was for.",
          ar: "الامتداد الشمالي الطويل بعد القصيم. بلدات أقل ومسافات أطول، وهو جزء اليوم الذي كان الانطلاق المبكر من أجله.",
        },
      },
      {
        name: { en: "Hail", ar: "حائل" },
        km: 630,
        detail: {
          en: "Arrival between the mountains. Drop-off at a hotel, a residential address, the university or the airport — or an overnight stop if AlUla is where you are really going.",
          ar: "الوصول بين الجبال. التوصيل إلى فندق أو عنوان سكني أو الجامعة أو المطار — أو مبيت إن كانت العُلا وجهتك الحقيقية.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any Riyadh address, including the airport and the railway stations. If you are arriving on a flight and continuing north the same day, give us the flight number — on a six-hour onward drive the margin between a delayed arrival and a sensible departure matters more than usual.",
        ar: "أي عنوان في الرياض، بما في ذلك المطار ومحطات القطار. وإن كنت قادمًا برحلة جوية وتكمل شمالًا في اليوم نفسه فزوّدنا برقم الرحلة — فعلى رحلة برية تالية من ست ساعات يكون الهامش بين وصول متأخر وانطلاق معقول أهم من المعتاد.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in Hail", ar: "الوصول في حائل" },
    paragraphs: [
      {
        en: "Door to door in the city: a hotel, a residential address, the university, a farm, or Hail Regional Airport. If the stop is an overnight on the way to AlUla, say so — it changes how the following morning is planned and it is better in the quotation than sprung on the day.",
        ar: "من الباب إلى الباب في المدينة: فندق أو عنوان سكني أو الجامعة أو مزرعة أو مطار حائل الإقليمي. وإن كان التوقف مبيتًا في الطريق إلى العُلا فاذكر ذلك — فهو يغيّر كيفية تخطيط الصباح التالي، ووجوده في عرض السعر أفضل من طرحه في اليوم نفسه.",
      },
    ],
  },

  onward: {
    heading: { en: "Hail as a stage to AlUla", ar: "حائل كمرحلة إلى العُلا" },
    items: [
      {
        heading: { en: "Why the stop makes sense", ar: "لماذا يكون التوقف منطقيًا" },
        paragraphs: [
          {
            en: "The fastest road from Riyadh to AlUla runs through Qassim and Hail, which makes Hail the natural place to break a journey that is otherwise ten to twelve hours in one day. Two manageable days instead of one long one is the usual answer, and it is why these two pages belong together.",
            ar: "أسرع طريق من الرياض إلى العُلا يمر بالقصيم وحائل، وهذا يجعل حائل المكان الطبيعي لتقسيم رحلة هي من عشر إلى اثنتي عشرة ساعة في يوم واحد لو لم تُقسَّم. ويومان محتملان بدل يوم واحد طويل هو الجواب المعتاد، ولهذا تنتمي هاتان الصفحتان إلى بعضهما.",
          },
        ],
      },
      {
        heading: { en: "How we quote it", ar: "كيف نُسعّرها" },
        paragraphs: [
          {
            en: "As one journey over two days rather than two unrelated transfers, with the overnight stop named in the quotation. We do not book your hotel; we plan the driving around where you are staying. If you would rather fly to AlUla and skip the second day entirely, that is often the better answer and the AlUla page says so plainly.",
            ar: "كرحلة واحدة على يومين لا كرحلتي نقل غير مرتبطتين، مع ذكر توقف المبيت في عرض السعر. ونحن لا نحجز فندقك؛ بل نخطط القيادة حول مكان إقامتك. وإن فضّلت الطيران إلى العُلا وتجاوز اليوم الثاني كليًا فذلك غالبًا هو الجواب الأفضل، وصفحة العُلا تقول ذلك بصراحة.",
          },
        ],
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Hail airport", ar: "مطار حائل" },
        paragraphs: [
          {
            en: "Hail Regional Airport is served by domestic flights and we collect from it or deliver to it like any other address. Published flight times between Riyadh and Hail are around an hour and twenty minutes, so flying one leg and driving the other is a realistic plan — tell us if that is the shape you want.",
            ar: "يخدم مطار حائل الإقليمي رحلات داخلية، ونستقبل منه أو نوصل إليه كأي عنوان آخر. وأزمنة الرحلات المنشورة بين الرياض وحائل نحو ساعة وعشرين دقيقة، فالطيران في مرحلة والسيارة في الأخرى خطة واقعية — أخبرنا إن كان هذا هو الشكل الذي تريده.",
          },
        ],
      },
      {
        heading: { en: "The train", ar: "القطار" },
        paragraphs: [
          {
            en: "Hail is a station on the Riyadh–Qurayyat railway, so the train is a genuine option for one or two people travelling light to the city centre. We arrange the road journey and sell no rail tickets, so check services, times and fares with the operator directly — we publish none of their figures because they change.",
            ar: "حائل محطة على خط الرياض – القريات، فالقطار خيار حقيقي لشخص أو شخصين بأمتعة خفيفة إلى وسط المدينة. ونحن نرتّب الرحلة البرية ولا نبيع تذاكر قطار، فتحقق من الرحلات والمواعيد والأسعار لدى المشغّل مباشرة — ولا ننشر أرقامهم لأنها تتغير.",
          },
        ],
      },
      {
        heading: { en: "Coming back", ar: "العودة" },
        paragraphs: [
          {
            en: "The return is quoted as its own journey. A same-day return means twelve hours of driving, which we will arrange if that is genuinely what you need but will not pretend is a comfortable day. Most parties either stay the night or fly one direction.",
            ar: "تُسعَّر العودة كرحلة مستقلة. والعودة في اليوم نفسه تعني اثنتي عشرة ساعة قيادة، وسنرتّبها إن كانت حاجتك الفعلية، لكننا لن نتظاهر بأنها يوم مريح. ومعظم المجموعات إما تبيت ليلة أو تسافر جوًّا في أحد الاتجاهين.",
          },
        ],
      },
      {
        heading: { en: "What is there", ar: "ما يوجد هناك" },
        paragraphs: [
          {
            en: "The city sits below A'arif Fort, which is the building in the photograph at the top of this page, with the Aja mountains to the west. We are a transfer service and not a guide, so we will take you to the places you name rather than telling you what they are worth.",
            ar: "تقع المدينة أسفل قلعة عارف، وهي البناء الظاهر في الصورة أعلى هذه الصفحة، وجبال أجا إلى الغرب. ونحن خدمة نقل لا دليل سياحي، فسننقلك إلى الأماكن التي تسمّيها لا أن نخبرك بما تستحقه.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Send the Riyadh pickup address, the address in Hail, the date and time, how many passengers and bags, and whether this is a one-way journey, a return, or the first stage of a trip to AlUla.",
        ar: "أرسل عنوان الانطلاق في الرياض، والعنوان في حائل، والتاريخ والوقت، وعدد الركاب والحقائب، وهل هذه رحلة باتجاه واحد أم ذهابًا وعودة أم المرحلة الأولى من رحلة إلى العُلا.",
      },
      {
        en: "We reply with a written price, the vehicle category and which of the two routes the quotation is based on. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة وأي المسارين بُني عليه عرض السعر. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to Hail: common questions",
    ar: "الرياض إلى حائل: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How long is the drive from Riyadh to Hail?",
        ar: "كم تستغرق الرحلة من الرياض إلى حائل؟",
      },
      answer: {
        en: "About five and a half to six and a half hours for roughly 630 km north via Qassim. Published estimates start around 5h 30m; the upper end is what it takes once leaving Riyadh, two breaks and arrival are counted. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "نحو خمس ساعات ونصف إلى ست ساعات ونصف لمسافة 630 كم تقريبًا شمالًا عبر القصيم. وتبدأ التقديرات المنشورة من نحو 5:30 ساعة؛ والحد الأعلى هو ما تستغرقه بعد احتساب الخروج من الرياض واستراحتين والوصول. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Which route do you take to Hail?",
        ar: "أي مسار تسلكون إلى حائل؟",
      },
      answer: {
        en: "The faster one, through Al Zulfi, Buraydah and Al Shanan — about 627 km. A second published route runs west through Al Muzahimiyah, Shaqra and Al Nabhaniyah and is roughly a hundred kilometres longer. We default to the first unless one of the towns on the second is somewhere you need to be, and the quotation says which one it is based on.",
        ar: "الأسرع، عبر الزلفي وبريدة والشنان — نحو 627 كم. وهناك مسار منشور ثانٍ يتجه غربًا عبر المزاحمية وشقراء والنبهانية وهو أطول بنحو مئة كيلومتر. ونعتمد الأول افتراضيًا إلا إن كانت إحدى بلدات الثاني مكانًا تحتاج الوصول إليه، ويذكر عرض السعر أيهما بُني عليه.",
      },
    },
    {
      question: {
        en: "Is it advisable to drive to Hail at night?",
        ar: "هل يُنصح بالسفر إلى حائل ليلًا؟",
      },
      answer: {
        en: "Travel sources advise against night driving on unlit stretches in this region, because loose livestock near the carriageway is a genuine hazard after dark. We pass that on as advice rather than as a rule — it is the main reason we suggest leaving early. If your plans require a night arrival we will still arrange the journey and plan the route and timing around it.",
        ar: "تنصح مصادر السفر بتجنب القيادة الليلية على الامتدادات غير المضاءة في هذه المنطقة، لأن الماشية السائبة قرب المسار خطر حقيقي بعد الغروب. وننقل ذلك كنصيحة لا كقاعدة — وهو السبب الرئيسي في اقتراحنا الانطلاق باكرًا. وإن اقتضت خططك وصولًا ليليًا فسنرتّب الرحلة ونخطط المسار والتوقيت على أساسه.",
      },
    },
    {
      question: {
        en: "Can you continue from Hail to AlUla?",
        ar: "هل تكملون من حائل إلى العُلا؟",
      },
      answer: {
        en: "Yes, and that is the most common reason for an overnight here. The fastest road from Riyadh to AlUla runs through Qassim and Hail, so splitting it into two days with a night in Hail turns a ten-to-twelve-hour day into two reasonable ones. It is quoted as one journey over two days. Flying to AlUla instead is often the better answer, and the AlUla page compares the two honestly.",
        ar: "نعم، وهذا هو السبب الأكثر شيوعًا للمبيت هنا. فأسرع طريق من الرياض إلى العُلا يمر بالقصيم وحائل، وتقسيمه إلى يومين بليلة في حائل يحوّل يومًا من عشر إلى اثنتي عشرة ساعة إلى يومين معقولين. ويُسعَّر كرحلة واحدة على يومين. والطيران إلى العُلا بدلًا من ذلك هو الجواب الأفضل غالبًا، وصفحة العُلا تقارن بينهما بصدق.",
      },
    },
    {
      question: {
        en: "Is the train to Hail an option?",
        ar: "هل القطار إلى حائل خيار؟",
      },
      answer: {
        en: "Yes. Hail is a station on the Riyadh–Qurayyat line, and for one or two people travelling light to the city centre it is a reasonable choice. The car suits groups, luggage, addresses away from the station, multiple stops, and anyone who wants to set their own departure. Check schedules and fares with the rail operator — we do not sell rail tickets.",
        ar: "نعم. حائل محطة على خط الرياض – القريات، ولشخص أو شخصين بأمتعة خفيفة إلى وسط المدينة فهو خيار معقول. أما السيارة فتناسب المجموعات والأمتعة والعناوين البعيدة عن المحطة وتعدد التوقفات، وكل من يريد تحديد وقت مغادرته. وتحقق من المواعيد والأسعار لدى مشغّل السكة — فنحن لا نبيع تذاكر قطار.",
      },
    },
    {
      question: {
        en: "Can you collect me from Hail airport?",
        ar: "هل يمكنكم استقبالي من مطار حائل؟",
      },
      answer: {
        en: "Yes, in either direction. Hail Regional Airport is handled like any other address, and published Riyadh–Hail flight times are around an hour and twenty minutes. Flying one leg and driving the other is a realistic plan on this route and both can be quoted together.",
        ar: "نعم، في كلا الاتجاهين. يُتعامل مع مطار حائل الإقليمي كأي عنوان آخر، وأزمنة الرحلات المنشورة بين الرياض وحائل نحو ساعة وعشرين دقيقة. والطيران في مرحلة والسيارة في الأخرى خطة واقعية على هذا المسار، ويمكن تسعيرهما معًا.",
      },
    },
    {
      question: {
        en: "Can I go up and come back the same day?",
        ar: "هل يمكنني الذهاب والعودة في اليوم نفسه؟",
      },
      answer: {
        en: "We will arrange it if that is what you need, but it is twelve hours of driving and we would rather say so than let you find out. Where a day cannot safely be driven by one person we price a second driver in rather than quietly arranging a longer shift. Most parties on this route either stay the night or fly one direction.",
        ar: "سنرتّبها إن كانت حاجتك، لكنها اثنتا عشرة ساعة قيادة ونفضّل قول ذلك على أن تكتشفه بنفسك. وحين لا يمكن قيادة يوم بأمان بشخص واحد نُسعّر سائقًا ثانيًا بدل ترتيب وردية أطول بصمت. ومعظم المجموعات على هذا المسار إما تبيت ليلة أو تسافر جوًّا في أحد الاتجاهين.",
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
      routeKey: "riyadhToBuraydah",
      label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },
      note: {
        en: "The halfway point on this road, and a journey in its own right.",
        ar: "منتصف الطريق على هذا المسار، ورحلة قائمة بذاتها.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Six hours north", ar: "ست ساعات شمالًا" },
    heading: {
      en: "Plan the Hail journey properly",
      ar: "خطط رحلة حائل كما ينبغي",
    },
    body: {
      en: "Tell us the date, the address, and whether Hail is the destination or the first night of a longer trip. We reply with a written price and the route it is based on.",
      ar: "أخبرنا بالتاريخ والعنوان وهل حائل هي الوجهة أم أول ليلة في رحلة أطول. ونرد بسعر مكتوب وبالمسار الذي بُني عليه.",
    },
    button: { en: "Get a Hail quote", ar: "اطلب سعر رحلة حائل" },
  },
};
