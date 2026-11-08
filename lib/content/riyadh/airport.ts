import type { AirportPageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh airport transfers — the consolidated page.
 *
 * One URL for both directions, approved in docs/riyadh-url-inventory.md.
 * "Airport to hotel" and "hotel to airport" are the same journey read two
 * ways: same airport, same terminals, same hotels, same vehicles. Two pages
 * there would be two thin pages competing for one intent.
 *
 * ## What is published here, and from where
 *
 * The airport's own site (kkia.sa) and its operator's site
 * (riyadhairports.com) both refuse automated requests, so nothing here is
 * attributed to the airport itself. The facts below come from Saudipedia
 * (published by the Ministry of Media) and the English Wikipedia article, and
 * both are named in docs/riyadh-content-research.md.
 *
 * ## What is deliberately NOT published here
 *
 * **No terminal map.** Published sources contradict each other about which
 * terminal serves which airline — Saudipedia has the fifth terminal as
 * domestic for all carriers, Wikipedia has it as international for all
 * foreign carriers, and assignments have demonstrably changed over time.
 * Printing a map we cannot stand behind could send a passenger to the wrong
 * building, so the page answers "which terminal" from the flight number
 * instead. That is a better answer as well as an honest one.
 *
 * **No list of inclusions.** What a transfer includes — waiting time, meet
 * and greet, tolls, child seats — is operational information nobody has
 * confirmed. The "what your quotation covers" section therefore describes the
 * process we can vouch for rather than asserting inclusions we cannot.
 *
 * **No official check-in advice.** No airport source was readable, so the
 * page sends departing passengers to their airline and confines itself to the
 * part we do control: when the vehicle arrives.
 */
export const riyadhAirport: AirportPageContent = {
  routeKey: "riyadhAirport",
  imageKey: "kkia-central",

  seo: {
    // 52 characters.
    title: {
      en: "Riyadh Airport Transfers | King Khalid | Get a Quote",
      ar: "نقل خاص من مطار الرياض | اطلب عرض سعر",
    },
    description: {
      en: "Private transfers at King Khalid International Airport — arrivals met inside the terminal, departures timed back from your flight, hotel and intercity connections. Request a quotation.",
      ar: "نقل خاص في مطار الملك خالد الدولي — استقبال القادمين داخل الصالة، ومواعيد المغادرة محسوبة تراجعيًا من رحلتك، وربط الفنادق والمدن. اطلب عرض سعر.",
    },
  },

  crumbLabel: { en: "Airport transfers", ar: "النقل من المطار" },

  hero: {
    eyebrow: { en: "Riyadh · King Khalid International", ar: "الرياض · الملك خالد الدولي" },
    h1: {
      en: "Riyadh airport transfers",
      ar: "نقل خاص من مطار الرياض",
    },
    lead: {
      en: "Both directions, one page. Arrivals met inside the terminal, departures timed backwards from your flight, and the terminal confirmed from your flight number rather than guessed from a chart.",
      ar: "الاتجاهان في صفحة واحدة. استقبال القادمين داخل الصالة، ومواعيد المغادرة محسوبة تراجعيًا من رحلتك، والصالة تُحدَّد من رقم رحلتك لا بالتخمين من جدول.",
    },
  },

  stats: [
    {
      label: { en: "From the city centre", ar: "من وسط المدينة" },
      value: { en: "~35 km", ar: "~35 كم" },
      note: {
        en: "Saudipedia gives 35 km north-east of the centre; the English Wikipedia article gives about 35 km north. The distance agrees; the compass bearing does not.",
        ar: "تذكر السعودية بيديا 35 كم شمال شرق المركز، وتذكر ويكيبيديا الإنجليزية نحو 35 كم شمالًا. فالمسافة متفق عليها، والاتجاه لا.",
      },
    },
    {
      label: { en: "Passenger terminals", ar: "صالات المسافرين" },
      value: { en: "Five", ar: "خمس" },
      note: {
        en: "Five main terminals, plus a Royal Terminal and private-aviation terminals. Which airline uses which is not published here — see the terminal question below.",
        ar: "خمس صالات رئيسية، إضافة إلى الصالة الملكية وصالات الطيران الخاص. أما أي شركة تستخدم أي صالة فلا يُنشر هنا — انظر سؤال الصالات أدناه.",
      },
    },
    {
      label: { en: "Typical drive", ar: "زمن الرحلة المعتاد" },
      value: { en: "~30 min", ar: "~30 دقيقة" },
      note: {
        en: "Published airport guidance for clear roads. Treat it as the best case: the northern approaches at peak hours and the terminal access roads add to it.",
        ar: "تقدير منشور في أدلة المطار لطرق خالية. اعتبره أفضل الاحتمالات: فالمداخل الشمالية في ساعات الذروة وطرق الوصول إلى الصالات تضيف إليه.",
      },
    },
    {
      label: { en: "Metro", ar: "المترو" },
      value: { en: "Line 4", ar: "المسار 4" },
      note: {
        en: "Riyadh Metro's yellow line opened in December 2024 and serves the airport terminals. A real alternative for a light traveller; we sell no tickets for it.",
        ar: "افتُتح المسار الأصفر لمترو الرياض في ديسمبر 2024 ويخدم صالات المطار. وهو بديل حقيقي لمسافر بأمتعة خفيفة، ولا نبيع تذاكره.",
      },
    },
  ],

  statsChecked: {
    en: "Airport figures last checked November 2026.",
    ar: "آخر تحقق من أرقام المطار: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "Why this is one page and not two",
      ar: "لماذا هذه صفحة واحدة لا صفحتان",
    },
    paragraphs: [
      {
        en: "People search for this journey in two directions — “airport to hotel” and “hotel to airport” — but it is one journey with one answer. Same airport, same terminals, same roads, same vehicles. The only real difference is which end you are anxious about, so this page answers both and says plainly which parts differ.",
        ar: "يبحث الناس عن هذه الرحلة في اتجاهين — «من المطار إلى الفندق» و«من الفندق إلى المطار» — لكنها رحلة واحدة بجواب واحد. المطار نفسه والصالات نفسها والطرق نفسها والمركبات نفسها. والفرق الحقيقي الوحيد هو أي الطرفين يقلقك، فهذه الصفحة تجيب عن الاتجاهين وتوضح بصراحة ما يختلف بينهما.",
      },
      {
        en: "King Khalid International Airport sits around 35 km from the centre of Riyadh and has five main passenger terminals, plus a Royal Terminal and terminals for private aviation. It is operated by the Riyadh Airports Company and opened in 1983; the fifth terminal was added in 2016.",
        ar: "يقع مطار الملك خالد الدولي على نحو 35 كم من وسط الرياض، وفيه خمس صالات رئيسية للمسافرين، إضافة إلى الصالة الملكية وصالات للطيران الخاص. وتُشغّله شركة مطارات الرياض، وافتُتح عام 1983، وأُضيفت الصالة الخامسة عام 2016.",
      },
      {
        en: "The size is the reason the terminal matters so much here. Getting the building right is most of getting the pickup right, and it is the one detail a printed chart is most likely to get wrong — which is why we take it from your flight number instead.",
        ar: "والحجم هو سبب أهمية الصالة هنا. فمعرفة المبنى الصحيح هي معظم نجاح الاستقبال، وهي التفصيل الأكثر عرضة للخطأ في أي جدول مطبوع — ولهذا نأخذها من رقم رحلتك بدلًا من ذلك.",
      },
    ],
  },

  directions: {
    lead: {
      en: "The two directions, side by side, because you are probably only interested in one of them.",
      ar: "الاتجاهان جنبًا إلى جنب، لأنك على الأرجح مهتم بأحدهما فقط.",
    },
    panels: [
      {
        heading: {
          en: "Arrivals at King Khalid International Airport",
          ar: "الوصول إلى مطار الملك خالد الدولي",
        },
        lead: {
          en: "You are landing and you want to know that someone is actually there.",
          ar: "أنت على وشك الهبوط وتريد أن تطمئن إلى وجود من يستقبلك فعلًا.",
        },
        steps: [
          {
            title: { en: "Give us the flight number", ar: "زوّدنا برقم الرحلة" },
            detail: {
              en: "Not just a time. The flight number tells us the terminal and lets us follow the aircraft rather than the clock.",
              ar: "لا الوقت فقط. فرقم الرحلة يخبرنا بالصالة ويتيح لنا متابعة الطائرة لا الساعة.",
            },
          },
          {
            title: { en: "We confirm the meeting point", ar: "نؤكد نقطة اللقاء" },
            detail: {
              en: "Before the day, not on it. You get the terminal and the meeting arrangement in writing so there is nothing to work out while you are tired and holding bags.",
              ar: "قبل اليوم لا فيه. تحصل على الصالة وترتيب اللقاء مكتوبين، فلا يبقى شيء تحسبه وأنت متعب وتحمل الحقائب.",
            },
          },
          {
            title: { en: "You are met inside the terminal", ar: "يُستقبل داخل الصالة" },
            detail: {
              en: "Inside the building, not at a distant kerb you have to find. If the plan has to change for your terminal, we tell you in advance rather than on arrival.",
              ar: "داخل المبنى لا على رصيف بعيد تبحث عنه. وإن اضطرت الخطة للتغيير بسبب صالتك فسنخبرك مسبقًا لا عند الوصول.",
            },
          },
          {
            title: { en: "A delay is our problem, not yours", ar: "التأخير مشكلتنا لا مشكلتك" },
            detail: {
              en: "Because the pickup is set from the flight, a late aircraft moves the pickup with it. You do not need to call ahead or rebook.",
              ar: "لأن موعد الاستقبال محدد من الرحلة، فتأخر الطائرة يحرّك الموعد معها. ولا تحتاج إلى الاتصال مسبقًا أو إعادة الحجز.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Departures from Riyadh",
          ar: "المغادرة من الرياض",
        },
        lead: {
          en: "You are flying out and you want to reach the right terminal with time to spare.",
          ar: "أنت مسافر وتريد الوصول إلى الصالة الصحيحة ولديك وقت كافٍ.",
        },
        steps: [
          {
            title: { en: "We work backwards from the flight", ar: "نحسب تراجعيًا من موعد الرحلة" },
            detail: {
              en: "You give us the departure time and the flight number; we set the pickup from them rather than asking you to pick an hour and hope.",
              ar: "تزوّدنا بوقت الإقلاع ورقم الرحلة، ونحدد موعد الاستقبال منهما بدل أن نطلب منك اختيار ساعة وتأمل الأفضل.",
            },
          },
          {
            title: { en: "The terminal comes from the flight too", ar: "والصالة تُؤخذ من الرحلة أيضًا" },
            detail: {
              en: "Dropping at the wrong terminal costs a shuttle ride and a lot of nerves at an airport this size. The flight number removes the guess.",
              ar: "فالتوصيل إلى الصالة الخطأ يكلفك رحلة نقل داخلي وكثيرًا من القلق في مطار بهذا الحجم. ورقم الرحلة يُلغي التخمين.",
            },
          },
          {
            title: { en: "Check-in timing is your airline's call", ar: "توقيت إجراءات السفر قرار شركتك" },
            detail: {
              en: "How early you should be at the desk is advice we are not qualified to give and no airport source we could read states it. Check with your airline, tell us the time you want to be there, and we build the journey to it.",
              ar: "أما مدى التبكير اللازم للوصول إلى مكتب الإجراءات فنصيحة لسنا مؤهلين لتقديمها، ولم يذكرها أي مصدر مطار أمكننا الوصول إليه. راجع شركة طيرانك، وأخبرنا بالوقت الذي تريد أن تكون فيه هناك، ونبني الرحلة عليه.",
            },
          },
          {
            title: { en: "Traffic is built in, not hoped away", ar: "الازدحام محسوب لا متجاهَل" },
            detail: {
              en: "The northern approaches are busiest at the times most people fly. The quoted departure allows for that rather than assuming the clear-road figure in the band above.",
              ar: "المداخل الشمالية في أشد ازدحامها في الأوقات التي يسافر فيها معظم الناس. ووقت الانطلاق المعروض يحتسب ذلك لا يفترض رقم الطريق الخالي المذكور أعلاه.",
            },
          },
        ],
      },
    ],
  },

  flightNumber: {
    eyebrow: { en: "Why we ask for it", ar: "لماذا نطلبه" },
    heading: {
      en: "The flight number does two jobs",
      ar: "رقم الرحلة يؤدي مهمتين",
    },
    paragraphs: [
      {
        en: "It tells us the terminal, and it lets the pickup follow the aircraft instead of the clock. Those are the two things that go wrong with airport transfers, and one piece of information fixes both.",
        ar: "يخبرنا بالصالة، ويتيح لموعد الاستقبال أن يتبع الطائرة بدل الساعة. وهذان هما الأمران اللذان يفسدان رحلات المطار، ومعلومة واحدة تصلحهما.",
      },
      {
        en: "It matters more at this airport than at most. With five main terminals, the difference between the right building and the wrong one is a shuttle ride you had not planned. Terminals here are reassigned from time to time, so we work from your live flight rather than from a printed list that may already be out of date.",
        ar: "وهو أهم في هذا المطار منه في معظم المطارات. فمع خمس صالات رئيسية، يكون الفرق بين المبنى الصحيح والخطأ رحلة نقل داخلي لم تكن في خطتك. وتوزيع الصالات هنا يُعاد ترتيبه من وقت إلى آخر، فنعمل من رحلتك الحيّة لا من قائمة مطبوعة قد تكون متقادمة أصلًا.",
      },
      {
        en: "If you do not have the number yet, book anyway and send it when you do. What we will not do is take a time, assume a terminal, and leave you to discover the result.",
        ar: "وإن لم يكن الرقم بحوزتك بعد فاحجز على أي حال وأرسله حين يتوفر. أما ما لن نفعله فهو أن نأخذ وقتًا ونفترض صالة ونتركك تكتشف النتيجة.",
      },
    ],
  },

  hotels: {
    heading: { en: "Hotel connections", ar: "ربط الفنادق" },
    paragraphs: [
      {
        en: "Most airport journeys here end, or begin, at a hotel. We go door to door to any address in Riyadh — a hotel entrance in Olaya, a serviced apartment, a compound gate or a private house — and the hotel name is enough; you do not need to find a street address for us.",
        ar: "معظم رحلات المطار هنا تنتهي، أو تبدأ، عند فندق. ونحن ننقل من الباب إلى الباب إلى أي عنوان في الرياض — مدخل فندق في العليا، أو شقة مخدومة، أو بوابة مجمّع، أو منزل خاص — واسم الفندق يكفي؛ ولا تحتاج إلى البحث عن عنوان شارع لنا.",
      },
      {
        en: "For a departure, give us the hotel and the flight and we will tell you the pickup time rather than asking you to work it out. For an arrival, the hotel name is what we need to quote; where the hotel is matters to the price, and a long run to the south of the city is not the same journey as one to a tower on King Fahd Road.",
        ar: "وللمغادرة، زوّدنا بالفندق وبيانات الرحلة ونخبرك بموعد الاستقبال بدل أن نطلب منك حسابه. وللوصول، اسم الفندق هو ما نحتاجه للتسعير؛ فموقع الفندق يؤثر في السعر، ورحلة طويلة إلى جنوب المدينة ليست الرحلة نفسها إلى برج على طريق الملك فهد.",
      },
      {
        en: "There is more to say about the hotel end of a journey than belongs on an airport page — which entrance, several transfers across a stay, a day of meetings — and our hotel transfers page covers it. For an airport run, the hotel name is enough to quote on.",
        ar: "وهناك ما يُقال عن جانب الفندق في الرحلة أكثر مما ينتمي إلى صفحة مطار — أي مدخل، وعدة رحلات خلال إقامة، ويوم اجتماعات — وصفحتنا للنقل من الفنادق تغطيه. أما لرحلة المطار فاسم الفندق يكفي للتسعير.",
      },
    ],
  },

  onward: {
    heading: {
      en: "Onward intercity connections from the airport",
      ar: "الربط بين المدن انطلاقًا من المطار",
    },
    lead: {
      en: "Plenty of people land in Riyadh and do not stay in it. Every one of these journeys can start at the terminal door instead of a city hotel, and is quoted from the airport rather than from the centre.",
      ar: "كثير من الناس يهبطون في الرياض ولا يبقون فيها. وكل واحدة من هذه الرحلات يمكن أن تبدأ من باب الصالة بدل فندق في المدينة، وتُسعَّر من المطار لا من المركز.",
    },
    links: [
      {
        routeKey: "riyadhToJeddah",
        label: { en: "Airport to Jeddah", ar: "من المطار إلى جدة" },
        note: {
          en: "About 950 km west. A full day's drive, so landing and setting straight off needs planning — the route page explains it.",
          ar: "نحو 950 كم غربًا. رحلة يوم كامل، فالهبوط والانطلاق مباشرة يحتاج تخطيطًا — وصفحة المسار تشرحه.",
        },
      },
      {
        routeKey: "riyadhToDammam",
        label: { en: "Airport to Dammam", ar: "من المطار إلى الدمام" },
        note: {
          en: "About 400 km east, three and a half to four and a half hours. The most common onward run from this airport.",
          ar: "نحو 400 كم شرقًا، من ثلاث ساعات ونصف إلى أربع ساعات ونصف. وهي أكثر رحلة تالية شيوعًا من هذا المطار.",
        },
      },
      {
        routeKey: "riyadhToAlKhobar",
        label: { en: "Airport to Al Khobar", ar: "من المطار إلى الخبر" },
        note: {
          en: "About 420 km east to the Gulf coast, and on towards the King Fahd Causeway if that is where you are going.",
          ar: "نحو 420 كم شرقًا إلى ساحل الخليج، ومتابعة نحو جسر الملك فهد إن كانت وجهتك.",
        },
      },
      {
        routeKey: "riyadhToBuraydah",
        label: { en: "Airport to Buraydah", ar: "من المطار إلى بريدة" },
        note: {
          en: "About 360 km north into Qassim. Short enough that a same-day return from the airport is realistic.",
          ar: "نحو 360 كم شمالًا إلى القصيم. قصيرة بما يجعل العودة إلى المطار في اليوم نفسه واقعية.",
        },
      },
      {
        routeKey: "riyadhToTaif",
        label: { en: "Airport to Taif", ar: "من المطار إلى الطائف" },
        note: {
          en: "About 790 km west and then up into the highlands. Eight to nine hours, so it is a next-morning departure more often than a same-day one.",
          ar: "نحو 790 كم غربًا ثم صعودًا إلى المرتفعات. من ثماني إلى تسع ساعات، فهي انطلاق صباح اليوم التالي أكثر منها في اليوم نفسه.",
        },
      },
      {
        routeKey: "riyadhToHail",
        label: { en: "Airport to Hail", ar: "من المطار إلى حائل" },
        note: {
          en: "About 630 km north through Qassim. The route page has the preparation this day actually needs.",
          ar: "نحو 630 كم شمالًا عبر القصيم. وصفحة المسار فيها الاستعداد الذي يحتاجه هذا اليوم فعلًا.",
        },
      },
      {
        routeKey: "riyadhToAlUla",
        label: { en: "Airport to AlUla", ar: "من المطار إلى العُلا" },
        note: {
          en: "About 1,050 km. If you have just landed, the route page will probably talk you into a connecting flight instead — honestly.",
          ar: "نحو 1,050 كم. وإن كنت قد هبطت للتو فستقنعك صفحة المسار على الأرجح برحلة جوية متصلة بدلًا من ذلك — بصدق.",
        },
      },
    ],
  },

  quotation: {
    heading: { en: "What your quotation covers", ar: "ما يشمله عرض السعر" },
    lead: {
      en: "We would rather tell you how the price works than publish a list of inclusions we have not confirmed. So: here is what the written quotation states, and here is what we will not pretend to know before you ask.",
      ar: "نفضّل أن نخبرك بكيفية عمل السعر على أن ننشر قائمة بما يشمله لم نتحقق منها. فإليك ما يذكره عرض السعر المكتوب، وما لن نتظاهر بمعرفته قبل أن تسأل.",
    },
    stated: [
      {
        en: "The vehicle category you are getting, not just “a car”.",
        ar: "فئة المركبة التي ستحصل عليها، لا «سيارة» فقط.",
      },
      {
        en: "The terminal and the meeting arrangement, confirmed before the day.",
        ar: "الصالة وترتيب اللقاء، مؤكدين قبل اليوم.",
      },
      {
        en: "The pickup time, derived from your flight rather than chosen by you.",
        ar: "موعد الاستقبال، مستخرجًا من رحلتك لا مختارًا منك.",
      },
      {
        en: "The total price, in writing, before anything is reserved.",
        ar: "السعر الإجمالي، مكتوبًا، قبل حجز أي شيء.",
      },
      {
        en: "Nothing added afterwards. If a quotation turns out to be wrong, that is ours to absorb, not yours to pay.",
        ar: "ولا شيء يُضاف بعد ذلك. وإن تبيّن خطأ في عرض السعر فتحمّله علينا لا عليك.",
      },
    ],
    withheld: [
      {
        en: "Waiting time, meet-and-greet arrangements, tolls and child seats: confirmed in your quotation for your booking, not stated as blanket policy here.",
        ar: "وقت الانتظار وترتيبات الاستقبال والرسوم ومقاعد الأطفال: تُؤكَّد في عرض سعرك لحجزك، ولا تُذكر هنا كسياسة عامة.",
      },
      {
        en: "A terminal chart. Assignments change, so we confirm yours from your flight and your airline confirms it too.",
        ar: "جدول الصالات. فالتوزيع يتغير، لذا نؤكد صالتك من رحلتك، وتؤكدها شركة طيرانك أيضًا.",
      },
      {
        en: "A fixed price list. Every journey is quoted on its own addresses and timing.",
        ar: "قائمة أسعار ثابتة. فكل رحلة تُسعَّر على عنوانيها وتوقيتها.",
      },
      {
        en: "Check-in and security advice. That is your airline's to give and the airport's to set.",
        ar: "نصائح إجراءات السفر والتفتيش الأمني. فهي من شأن شركة طيرانك والمطار.",
      },
    ],
    footnote: {
      en: "This is deliberate. Publishing a confident list of inclusions we had not verified with our driver partners would be the easiest thing on this page to get wrong, and the costliest for you.",
      ar: "وهذا متعمّد. فنشر قائمة واثقة بما يشمله السعر دون التحقق منها مع شركائنا من السائقين هو أسهل ما يمكن أن نخطئ فيه في هذه الصفحة، وأكثره تكلفة عليك.",
    },
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Which terminal", ar: "أي صالة" },
        paragraphs: [
          {
            en: "We tell you from your flight number, in writing, before the day — and your airline's confirmation or app will say the same thing. Check it again on the day if your flight was booked a long way out: terminals get reassigned, which is exactly why we work from the live flight rather than a published list.",
            ar: "نخبرك بها من رقم رحلتك، مكتوبة، قبل اليوم — وتأكيد شركة طيرانك أو تطبيقها سيذكر الشيء نفسه. وتحقق منها مرة أخرى في اليوم نفسه إن كان حجزك قديمًا: فالصالات يُعاد توزيعها، ولهذا تحديدًا نعمل من الرحلة الحيّة لا من قائمة منشورة.",
          },
        ],
      },
      {
        heading: { en: "Luggage and vehicle size", ar: "الأمتعة وحجم المركبة" },
        paragraphs: [
          {
            en: "Describe the bags, not just the passenger count. Four people returning from a long trip and four people on a business day need different vehicles, and the airport is the worst possible place to discover that the boot is too small.",
            ar: "صِف الحقائب لا عدد الركاب فقط. فأربعة أشخاص عائدون من سفر طويل وأربعة في يوم عمل يحتاجون مركبات مختلفة، والمطار هو أسوأ مكان ممكن لاكتشاف أن الصندوق أصغر من اللازم.",
          },
        ],
      },
      {
        heading: { en: "The metro, honestly", ar: "المترو بصدق" },
        paragraphs: [
          {
            en: "Riyadh Metro's Line 4 opened in December 2024 and serves the airport terminals. For one person with a cabin bag going somewhere near a station, it is probably the better answer and we will not pretend otherwise. The car wins for groups, real luggage, addresses away from a line, late arrivals and anyone who would rather not navigate a new system after a flight.",
            ar: "افتُتح المسار 4 لمترو الرياض في ديسمبر 2024 ويخدم صالات المطار. ولشخص واحد بحقيبة يد متجه إلى مكان قريب من محطة، فهو على الأرجح الجواب الأفضل ولن ندّعي غير ذلك. أما السيارة فتتفوق للمجموعات والأمتعة الفعلية والعناوين البعيدة عن المسار والوصول المتأخر ولكل من يفضّل ألا يتعلم نظامًا جديدًا بعد رحلة جوية.",
          },
        ],
      },
      {
        heading: { en: "Returns", ar: "رحلات العودة" },
        paragraphs: [
          {
            en: "Book both legs at once if your dates are fixed. It is the same journey twice and quoting them together is simpler for everyone; it also means the departure pickup is already set from your outbound flight details rather than arranged in a hurry at the end of a trip.",
            ar: "احجز المرحلتين معًا إن كانت تواريخك محددة. فهي الرحلة نفسها مرتين، وتسعيرهما معًا أبسط للجميع؛ ويعني ذلك أيضًا أن موعد استقبال المغادرة محدد سلفًا من بيانات رحلتك لا مرتَّبًا على عجل في نهاية السفر.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book an airport transfer", ar: "كيف تحجز نقلًا من المطار" },
    paragraphs: [
      {
        en: "Send the direction (arriving or departing), the flight number, the date, the address in Riyadh, and how many passengers and bags. If you are going on to another city from the terminal, say which one and we will quote the whole thing as one journey.",
        ar: "أرسل الاتجاه (قادم أم مغادر)، ورقم الرحلة، والتاريخ، والعنوان في الرياض، وعدد الركاب والحقائب. وإن كنت متابعًا إلى مدينة أخرى من الصالة فاذكرها ونُسعّر الأمر كله كرحلة واحدة.",
      },
      {
        en: "We reply with a written price, the vehicle category, the terminal and the meeting arrangement. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة والصالة وترتيب اللقاء. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh airport transfers: common questions",
    ar: "النقل من مطار الرياض: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How will I find you when I arrive?",
        ar: "كيف أجدكم عند وصولي؟",
      },
      answer: {
        en: "You are met inside the terminal, and you get the terminal and the meeting arrangement in writing before the day rather than a message on the morning. That is the part worth confirming in advance: at an airport with five main terminals, “meet you at arrivals” is not specific enough to be useful.",
        ar: "يُستقبل داخل الصالة، وتحصل على الصالة وترتيب اللقاء مكتوبين قبل اليوم لا برسالة في الصباح. وهذا هو الجزء الذي يستحق التأكيد مسبقًا: ففي مطار بخمس صالات رئيسية، عبارة «نلقاك في صالة الوصول» ليست محددة بما يكفي لتكون مفيدة.",
      },
    },
    {
      question: {
        en: "What happens if my flight is delayed?",
        ar: "ماذا يحدث إذا تأخرت رحلتي؟",
      },
      answer: {
        en: "Nothing you need to do. The pickup is set from the flight number, so a late aircraft moves the pickup with it — you do not have to call ahead, rebook or pay for the delay. This is the main practical reason we ask for the number rather than a time.",
        ar: "لا شيء يلزمك فعله. فموعد الاستقبال محدد من رقم الرحلة، وتأخر الطائرة يحرّك الموعد معها — ولا تحتاج إلى الاتصال مسبقًا أو إعادة الحجز أو دفع ثمن التأخير. وهذا هو السبب العملي الرئيسي في طلبنا الرقم لا الوقت.",
      },
    },
    {
      question: {
        en: "Why do you need my flight number?",
        ar: "لماذا تحتاجون رقم رحلتي؟",
      },
      answer: {
        en: "It does two jobs: it tells us the terminal, and it lets the pickup follow the aircraft instead of the clock. Those are the two failures that ruin airport transfers, and one piece of information prevents both. If you do not have it yet, book and send it later.",
        ar: "يؤدي مهمتين: يخبرنا بالصالة، ويتيح لموعد الاستقبال أن يتبع الطائرة بدل الساعة. وهذان هما الخللان اللذان يفسدان رحلات المطار، ومعلومة واحدة تمنعهما. وإن لم يكن بحوزتك بعد فاحجز وأرسله لاحقًا.",
      },
    },
    {
      question: {
        en: "Which terminal does my airline use?",
        ar: "أي صالة تستخدم شركة طيراني؟",
      },
      answer: {
        en: "We confirm it for your flight and put it in writing before the day, so you do not have to work it out. If you want to check it yourself, the live sources are your airline's booking confirmation, its app, and its flight-status page for your flight number on the day — those reflect what is true now. We do not publish a terminal chart on purpose: terminals at this airport are reassigned from time to time, so any printed list ages badly, and a stale one would send you to the wrong building. Your flight is the one source that cannot be out of date.",
        ar: "نؤكدها لرحلتك ونرسلها مكتوبة قبل اليوم، فلا يلزمك استنتاجها. وإن أردت التحقق بنفسك فالمصادر الحيّة هي تأكيد الحجز من شركة طيرانك وتطبيقها وصفحة حالة الرحلة لرقم رحلتك في اليوم نفسه — فهذه تعكس الواقع الآن. ونحن لا ننشر جدول صالات عن قصد: فتوزيع الصالات في هذا المطار يُعاد ترتيبه من وقت إلى آخر، وأي قائمة مطبوعة تتقادم سريعًا، والقديمة منها قد توصلك إلى المبنى الخطأ. ورحلتك هي المصدر الوحيد الذي لا يتقادم.",
      },
    },
    {
      question: {
        en: "How early should I leave for a departing flight?",
        ar: "متى ينبغي أن أنطلق لرحلة مغادرة؟",
      },
      answer: {
        en: "Ask your airline how early you need to be at the desk, then tell us that time and we build the journey backwards from it. We will not invent a check-in rule: no airport source we could read states one, and the airline's requirement is the one that counts. What we do take care of is the drive — the published thirty-minute figure is a clear-road best case, and the quoted pickup allows for the traffic that is actually there at the hour you are flying.",
        ar: "اسأل شركة طيرانك عن مدى التبكير اللازم للوصول إلى مكتب الإجراءات، ثم أخبرنا بذلك الوقت ونبني الرحلة تراجعيًا منه. ولن نختلق قاعدة لإجراءات السفر: فلم يذكرها أي مصدر مطار أمكننا الوصول إليه، ومتطلب شركة الطيران هو المعتبر. أما ما نتولاه فهو الطريق — فرقم الثلاثين دقيقة المنشور هو أفضل احتمال لطريق خالٍ، ووقت الاستقبال المعروض يحتسب الازدحام الموجود فعلًا في ساعة سفرك.",
      },
    },
    {
      question: {
        en: "Can you take me straight from the airport to Jeddah or Dammam?",
        ar: "هل يمكنكم نقلي من المطار مباشرة إلى جدة أو الدمام؟",
      },
      answer: {
        en: "Yes, and it is quoted from the terminal rather than from the city centre. Dammam is about 400 km and three and a half to four and a half hours; Jeddah is about 950 km and a full day's driving, so landing and setting straight off is worth planning rather than deciding at the carousel. Each route has its own page with the detail, and all seven published routes can start at the terminal door.",
        ar: "نعم، وتُسعَّر من الصالة لا من وسط المدينة. فالدمام نحو 400 كم ومن ثلاث ساعات ونصف إلى أربع ساعات ونصف؛ وجدة نحو 950 كم ويوم قيادة كامل، فالهبوط والانطلاق مباشرة يستحق التخطيط لا القرار عند سير الأمتعة. ولكل مسار صفحته بتفاصيله، ويمكن لجميع المسارات السبعة المنشورة أن تبدأ من باب الصالة.",
      },
    },
    {
      question: {
        en: "Can I book the return at the same time?",
        ar: "هل يمكنني حجز العودة في الوقت نفسه؟",
      },
      answer: {
        en: "Yes, and it is the simpler way to do it. Both legs are quoted together, and the departure pickup is set from your return flight details at the same time — so it is arranged while you are planning calmly rather than at the end of a trip.",
        ar: "نعم، وهي الطريقة الأبسط. فتُسعَّر المرحلتان معًا، ويُحدَّد موعد استقبال المغادرة من بيانات رحلة عودتك في الوقت نفسه — فيُرتَّب وأنت تخطط بهدوء لا في نهاية السفر.",
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
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "The most common onward journey from this airport, with the road-or-rail comparison.",
        ar: "أكثر رحلة تالية شيوعًا من هذا المطار، ومعها مقارنة الطريق بالقطار.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "The long one west, if you are landing and driving on the same day.",
        ar: "الرحلة الطويلة غربًا، إن كنت تهبط وتكمل برًّا في اليوم نفسه.",
      },
    },
    {
      routeKey: "riyadhHotel",
      label: { en: "Riyadh hotel transfers", ar: "النقل من فنادق الرياض" },
      note: {
        en: "Which entrance to name, several transfers across a stay, and a day of meetings.",
        ar: "أي مدخل تذكر، وعدة رحلات خلال إقامة، ويوم اجتماعات.",
      },
    },
    {
      routeKey: "jeddahAirport",
      label: { en: "Jeddah airport transfers", ar: "النقل من مطار جدة" },
      note: {
        en: "The same service at King Abdulaziz, where a Haramain station sits at the terminal.",
        ar: "الخدمة نفسها في مطار الملك عبدالعزيز، حيث توجد محطة لقطار الحرمين عند الصالة.",
      },
    },
    {
      routeKey: "riyadhRailway",
      label: { en: "Riyadh railway stations", ar: "محطات قطار الرياض" },
      note: {
        en: "Riyadh North station is in the airport's area, about 13 km from the terminals — fly in, then take the North Train.",
        ar: "محطة الشمال في منطقة المطار، على نحو 13 كم من الصالات — تهبط جوًّا ثم تكمل بقطار الشمال.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Both directions", ar: "في الاتجاهين" },
    heading: {
      en: "Send us the flight, and we will do the rest",
      ar: "أرسل لنا بيانات الرحلة ونتولى الباقي",
    },
    body: {
      en: "The flight number, the date and your address in Riyadh. We reply with a written price, the vehicle, the terminal and where you will be met.",
      ar: "رقم الرحلة والتاريخ وعنوانك في الرياض. ونرد بسعر مكتوب والمركبة والصالة ومكان اللقاء.",
    },
    button: { en: "Get an airport transfer quote", ar: "اطلب سعر النقل من المطار" },
  },
};
