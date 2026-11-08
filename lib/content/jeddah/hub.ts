import type { JeddahHubContent } from "@/lib/content/jeddah/types";

/**
 * The Jeddah destination hub.
 *
 * ## Why this is organised by destination
 *
 * The Riyadh hub is organised by service type, because people already in the
 * capital want to know what kinds of journey we run. Jeddah is different:
 * most people are passing *through* it. They land at King Abdulaziz and the
 * question in their head is not "what do you offer" but "how do I get from
 * here to where I am actually going" — Makkah, most often.
 *
 * So the sections are destinations, not services, and the page is shorter
 * than the Riyadh hub because Jeddah has one dominant intent rather than four
 * branches. Reasoning in docs/research/jeddah/jeddah-hub-architecture.md.
 *
 * ## The access notice
 *
 * Entry to Makkah is restricted to Muslims under Saudi law and enforced at
 * checkpoints on the Jeddah–Makkah road. The biggest Jeddah transfer intent
 * is "airport to a Makkah hotel", so a non-Muslim who books it would be
 * driven to a checkpoint and turned back. The competitor's Jeddah–Makkah page
 * sells that journey without saying so.
 *
 * It therefore gets a designed block above the destination cards, not a line
 * of small print — a reader who cannot complete the journey should learn that
 * before they read a distance. What the page will **not** do is describe the
 * checkpoint procedure or adjudicate anyone's eligibility: no source
 * documents the former and the latter is not ours to judge.
 *
 * ## Facts and their limits
 *
 * No airport or rail operator source was readable (the Riyadh phase
 * established that this airport's operator family returns 403 and SAR returns
 * 401, and the Internet Archive is blocked), so **nothing here is attributed
 * to an operator.** Distances are published ranges, sourced in
 * docs/research/jeddah/jeddah-sources-and-limitations.md.
 *
 * Deliberately absent: prices, rail schedules and fares, any terminal chart
 * or numbered terminal, Hajj Terminal dates, any Hajj or Umrah operator
 * claim, any named hotel.
 */
export const jeddahHub: JeddahHubContent = {
  routeKey: "jeddah",
  imageKey: "jeddah-corniche",

  seo: {
    // 53 characters.
    title: {
      en: "Jeddah Private Transfers | Airport, Makkah, Intercity",
      ar: "نقل خاص في جدة: المطار ومكة وبين المدن | عرض سعر",
    },
    description: {
      en: "Private car and van transfers in and from Jeddah — King Abdulaziz airport arrivals, the road to Makkah, and intercity journeys. Request a written quotation.",
      ar: "نقل خاص بالسيارات والڤانات في جدة ومنها — استقبال القادمين في مطار الملك عبدالعزيز، والطريق إلى مكة المكرمة، والرحلات بين المدن. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Jeddah", ar: "جدة" },

  hero: {
    eyebrow: { en: "Destination · Jeddah", ar: "وجهة · جدة" },
    h1: {
      en: "Private transfers in and from Jeddah",
      ar: "نقل خاص في جدة ومنها",
    },
    lead: {
      en: "Most people do not come to Jeddah so much as come through it. You land on the Red Sea coast and the real question is where you are going next — so that is how this page is arranged.",
      ar: "معظم الناس لا يأتون إلى جدة بقدر ما يمرّون بها. تهبط على ساحل البحر الأحمر، والسؤال الحقيقي هو إلى أين تتجه بعدها — ولهذا رُتّبت هذه الصفحة على هذا الأساس.",
    },
  },

  access: {
    heading: {
      en: "Before you book a journey to Makkah",
      ar: "قبل حجز رحلة إلى مكة المكرمة",
    },
    body: [
      {
        en: "Entry to Makkah is restricted to Muslims under Saudi law, and it is enforced at checkpoints on the road from Jeddah. This matters more here than anywhere else on our site, because the most common journey people ask us for in Jeddah is the airport to a hotel in Makkah.",
        ar: "دخول مكة المكرمة مقصور على المسلمين بموجب النظام السعودي، ويُطبَّق ذلك عند نقاط التفتيش على الطريق من جدة. وهذا أهم هنا منه في أي موضع آخر في موقعنا، لأن أكثر رحلة يطلبها الناس منا في جدة هي من المطار إلى فندق في مكة.",
      },
      {
        en: "So we say it before you book rather than after. If the journey is not open to you, a quotation from us would be a journey that ends at a checkpoint — and we would rather tell you now than drive you there.",
        ar: "لذلك نقول ذلك قبل الحجز لا بعده. فإن لم تكن الرحلة متاحة لك، فعرض سعر منا يعني رحلة تنتهي عند نقطة تفتيش — ونفضّل إخبارك الآن على أن نوصلك إلى هناك.",
      },
      {
        en: "Around the Hajj season, the Ministry of Interior announces further restrictions each year — they have included entry permits for residents and a bar on visit-visa holders entering Makkah. We will not accept or carry a passenger who is not legally permitted to enter Makkah on their travel date.",
        ar: "وحول موسم الحج تعلن وزارة الداخلية كل عام قيودًا إضافية، وقد شملت اشتراط تصريح دخول للمقيمين ومنع حاملي تأشيرات الزيارة من دخول مكة. ولا نقبل ولا ننقل أي راكب لا يحق له نظامًا دخول مكة المكرمة في تاريخ رحلته.",
      },
    ],
    limit: {
      en: "What we will not do is tell you how the checkpoint operates, what will be inspected, or whether any particular traveller will be admitted. We arrange road transport; we do not give immigration or religious advice, and we are not an official Hajj or Umrah operator.",
      ar: "وما لن نفعله هو إخبارك بكيفية عمل نقطة التفتيش، أو بما سيُفحص، أو بما إن كان مسافر بعينه سيُسمح له بالدخول. نحن نرتّب النقل البري، ولا نقدّم استشارات جوازات ولا فتاوى، ولسنا مشغّلاً رسميًا للحج أو العمرة.",
    },
    link: {
      routeKey: "jeddahToMakkah",
      label: {
        en: "The Jeddah to Makkah journey, with the seasonal rules in full",
        ar: "التوصيل من جدة إلى مكة، مع قيود موسم الحج كاملة",
      },
    },
  },

  destinations: {
    heading: { en: "Where are you going from Jeddah?", ar: "إلى أين تتجه من جدة؟" },
    lead: {
      en: "Distances and times are published ranges, not promises — every figure below comes from public route data and is given as the spread those sources actually show. Where there is something you should know before booking, the card says it.",
      ar: "المسافات والأزمنة نطاقات منشورة لا وعود — فكل رقم أدناه من بيانات مسارات عامة ويُذكر بالفارق الذي تظهره تلك المصادر فعلًا. وحيث يوجد ما ينبغي أن تعرفه قبل الحجز، تذكره البطاقة.",
    },
    items: [
      {
        name: { en: "Makkah", ar: "مكة المكرمة" },
        reason: {
          en: "The journey most people arriving in Jeddah are actually making — airport or hotel to a Haram-area address.",
          ar: "الرحلة التي يقوم بها فعلًا معظم القادمين إلى جدة — من المطار أو الفندق إلى عنوان في منطقة الحرم.",
        },
        distance: { en: "80–100 km", ar: "80–100 كم" },
        duration: { en: "1–1.5 hrs", ar: "1–1.5 ساعة" },
        caveat: {
          en: "Entry is restricted to Muslims and enforced at checkpoints on the road. Read the notice above before booking.",
          ar: "الدخول مقصور على المسلمين ويُطبَّق عند نقاط التفتيش على الطريق. اقرأ التنبيه أعلاه قبل الحجز.",
        },
        routeKey: "jeddahToMakkah",
        primary: true,
      },
      {
        name: { en: "Madinah", ar: "المدينة المنورة" },
        reason: {
          en: "North up the coast and inland, usually as the second leg of a pilgrimage trip or a journey between the two holy cities.",
          ar: "شمالًا على الساحل ثم إلى الداخل، وغالبًا كمرحلة ثانية في رحلة حج أو عمرة أو انتقال بين المدينتين المقدستين.",
        },
        distance: { en: "405–450 km", ar: "405–450 كم" },
        duration: { en: "~3.75–5 hrs", ar: "~3.75–5 ساعات" },
        caveat: {
          en: "The Haramain train also runs this corridor and is often the better answer for one or two people travelling light.",
          ar: "وقطار الحرمين يخدم هذا الممر أيضًا، وهو غالبًا الجواب الأفضل لشخص أو شخصين بأمتعة خفيفة.",
        },
      },
      {
        name: { en: "Taif", ar: "الطائف" },
        reason: {
          en: "Up into the Hejaz highlands, and much closer from here than from anywhere else we serve.",
          ar: "صعودًا إلى مرتفعات الحجاز، وهي أقرب من هنا منها من أي مكان آخر نخدمه.",
        },
        distance: { en: "163–201 km", ar: "163–201 كم" },
        duration: { en: "~1.75–2.5 hrs", ar: "~1.75–2.5 ساعة" },
        caveat: {
          en: "A genuine mountain road via Al Hada. Travel sources cite a longer alternative route in fog or rain.",
          ar: "طريق جبلي حقيقي عبر الهدا. وتذكر مصادر السفر مسارًا بديلًا أطول في الضباب أو المطر.",
        },
      },
      {
        name: { en: "Yanbu", ar: "ينبع" },
        reason: {
          en: "North along the Red Sea coast, for the port, the industrial city and the diving.",
          ar: "شمالًا على ساحل البحر الأحمر، للميناء والمدينة الصناعية والغوص.",
        },
        distance: { en: "~337 km", ar: "~337 كم" },
        duration: { en: "~3h 20m", ar: "~3:20 ساعة" },
      },
      {
        name: { en: "Riyadh", ar: "الرياض" },
        reason: {
          en: "The long crossing east to the capital — a full day on the road, and the one journey here we already have a complete page for.",
          ar: "العبور الطويل شرقًا إلى العاصمة — يوم كامل على الطريق، وهي الرحلة الوحيدة هنا التي لدينا لها صفحة كاملة بالفعل.",
        },
        distance: { en: "~950 km", ar: "~950 كم" },
        duration: { en: "9–10 hrs", ar: "9–10 ساعات" },
        routeKey: "riyadhToJeddah",
      },
    ],
    footnote: {
      en: "Published figures for these roads disagree with each other, which is why they appear as ranges. We quote on your two actual addresses, so the distance in your quotation may not match any route planner exactly.",
      ar: "الأرقام المنشورة لهذه الطرق تتعارض فيما بينها، ولهذا تظهر كنطاقات. ونحن نُسعّر على عنوانيك الفعليين، فقد لا تطابق المسافة في عرض السعر أي أداة تخطيط مسارات تمامًا.",
    },
  },

  bands: [
    {
      heading: {
        en: "Arriving at King Abdulaziz International Airport",
        ar: "الوصول إلى مطار الملك عبدالعزيز الدولي",
      },
      lead: {
        en: "Give us the flight number and the rest follows from it.",
        ar: "زوّدنا برقم الرحلة ويتبع الباقي منه.",
      },
      paragraphs: [
        {
          en: "The flight number tells us the terminal and lets the pickup follow the aircraft rather than the clock, so a delayed arrival moves the pickup with it. You do not need to call ahead or rebook.",
          ar: "رقم الرحلة يخبرنا بالصالة ويتيح لموعد الاستقبال أن يتبع الطائرة بدل الساعة، فتأخر الوصول يحرّك الموعد معه. ولا تحتاج إلى الاتصال مسبقًا أو إعادة الحجز.",
        },
        {
          en: "We do not publish a terminal chart for this airport, and the reason is worth knowing: published sources disagree about how many terminals are in use here and what they are called. One lists a north and a south terminal, another says the south has closed and that everything now runs from a single main terminal, and a third gives the Hajj facility a different number again. A printed list would send somebody to the wrong building, so we read your actual flight instead and confirm the terminal in writing before the day.",
          ar: "ولا ننشر جدول صالات لهذا المطار، والسبب يستحق المعرفة: فالمصادر المنشورة تتعارض في عدد الصالات العاملة هنا وفي أسمائها. إحداها تذكر صالة شمالية وأخرى جنوبية، وأخرى تقول إن الجنوبية أُغلقت وإن كل الرحلات تعمل الآن من صالة رئيسية واحدة، وثالثة تعطي صالة الحج رقمًا مختلفًا. والقائمة المطبوعة ستوصل أحدهم إلى المبنى الخطأ، فنقرأ رحلتك الفعلية بدلًا من ذلك ونؤكد الصالة مكتوبة قبل اليوم.",
        },
        {
          en: "A dedicated Hajj terminal operates here in the Hajj and Umrah seasons. If you are arriving on a pilgrimage flight, say so — it changes which building you will be at. We publish no dates for it, because no source we could read states them reliably.",
          ar: "وتعمل هنا صالة مخصصة للحج في موسمي الحج والعمرة. فإن كنت قادمًا على رحلة حج أو عمرة فاذكر ذلك — فهو يغيّر المبنى الذي ستكون فيه. ولا ننشر مواعيدها، لأن أي مصدر أمكننا قراءته لا يذكرها على وجه موثوق.",
        },
        {
          en: "One more thing about this airport that surprises people: a Haramain high-speed railway station sits inside it. If the train suits your onward journey better than a car, that is a legitimate answer and we will say so.",
          ar: "وأمر آخر في هذا المطار يُفاجئ الناس: فيه محطة لقطار الحرمين السريع. فإن كان القطار أنسب لرحلتك التالية من السيارة فذلك جواب مشروع وسنقوله.",
        },
        {
          en: "Our airport page covers all of this properly — the terminal question, both directions, the rail option and what a quotation does and does not state.",
          ar: "وصفحة المطار لدينا تغطي ذلك كله بشكل واف — سؤال الصالات، والاتجاهان، وخيار القطار، وما يذكره عرض السعر وما لا يذكره.",
        },
      ],
      imageKey: "svc-airport",
    },
    {
      heading: { en: "Around Jeddah", ar: "التنقل في جدة" },
      lead: {
        en: "A coastal city that runs for miles, so the address matters more than the distance.",
        ar: "مدينة ساحلية تمتد أميالًا، فالعنوان فيها أهم من المسافة.",
      },
      paragraphs: [
        {
          en: "Jeddah stretches a long way along the Red Sea, and a journey from the north of the city to Al-Balad is not the short hop a map suggests. Give us the specific address rather than the district, and for a hotel give us the entrance — large hotels have several, and the car being at one door while you are at another is how city transfers go wrong.",
          ar: "تمتد جدة مسافة طويلة على البحر الأحمر، والرحلة من شمال المدينة إلى البلد ليست التنقّل القصير الذي تشير إليه الخريطة. زوّدنا بالعنوان تحديدًا لا بالحي، وللفندق زوّدنا بالمدخل — فالفنادق الكبيرة لها عدة مداخل، ووجود السيارة عند باب وأنت عند آخر هو كيف تفشل الرحلات داخل المدينة.",
        },
        {
          en: "Al-Balad, the historic district, is a UNESCO World Heritage site and a common destination in its own right — its lanes are narrow and largely pedestrian, so a drop-off is at the edge rather than at a door. The corniche runs for kilometres and the same applies: name the stretch you want.",
          ar: "والبلد، الحي التاريخي، موقع تراث عالمي لليونسكو ووجهة شائعة بحد ذاتها — وأزقّته ضيّقة ومخصصة للمشي في معظمها، فالتوصيل يكون عند الطرف لا عند الباب. والكورنيش يمتد كيلومترات وينطبق عليه الأمر نفسه: اذكر المقطع الذي تريده.",
        },
      ],
      imageKey: "jeddah-albalad",
    },
  ],

  quotation: {
    heading: { en: "How a Jeddah quotation works", ar: "كيف يعمل عرض سعر جدة" },
    lead: {
      en: "The same process as everywhere else we operate, and the same deliberate omission: we describe how the price is arrived at rather than publishing a list of inclusions nobody has confirmed.",
      ar: "العملية نفسها في كل مكان نعمل فيه، والإغفال المتعمد نفسه: نشرح كيف يُحتسب السعر بدل نشر قائمة بما يشمله لم يتحقق منها أحد.",
    },
    items: [
      {
        en: "You tell us the destination, the date and time, how many passengers and bags, and the flight number if one is involved.",
        ar: "تخبرنا بالوجهة والتاريخ والوقت وعدد الركاب والحقائب، ورقم الرحلة إن كان هناك رحلة جوية.",
      },
      {
        en: "We reply with a written price, the vehicle category, and the terminal or entrance confirmed.",
        ar: "ونرد بسعر مكتوب وفئة المركبة والصالة أو المدخل مؤكدًا.",
      },
      {
        en: "Nothing is reserved and no payment is taken until you accept it — and nothing is added afterwards.",
        ar: "ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه — ولا شيء يُضاف بعد ذلك.",
      },
      {
        en: "What the quotation does not state: a waiting-time policy, a standing arrangement at any hotel or terminal, or a rail schedule. Those are confirmed for your booking, or they belong to the operator.",
        ar: "وما لا يذكره عرض السعر: سياسة لوقت الانتظار، أو ترتيب ثابت في فندق أو صالة، أو جدول قطارات. فهذه تُؤكَّد لحجزك، أو هي من شأن المشغّل.",
      },
      {
        en: "We arrange road transport only. Not flights, not rail tickets, not hotels, and not Hajj or Umrah visas, permits or packages.",
        ar: "ونحن نرتّب النقل البري فقط. لا تذاكر طيران ولا قطارات ولا فنادق ولا تأشيرات حج أو عمرة ولا تصاريح ولا برامج.",
      },
    ],
  },

  faqHeading: {
    en: "Jeddah transfers: common questions",
    ar: "النقل في جدة: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "Can you take me from Jeddah airport to a hotel in Makkah?",
        ar: "هل يمكنكم نقلي من مطار جدة إلى فندق في مكة المكرمة؟",
      },
      answer: {
        en: "Yes — it is the most common journey people ask us for in Jeddah, about 80 to 100 km and an hour to an hour and a half. Give us the flight number and the hotel, and the pickup is set from the flight so a delay does not leave you without a vehicle. Please read the notice about entry to Makkah first: it is restricted to Muslims under Saudi law and enforced at checkpoints on the road. Our Jeddah to Makkah page covers the journey in full, including hotel drop-off near the Haram.",
        ar: "نعم — وهي أكثر رحلة يطلبها الناس منا في جدة، نحو 80 إلى 100 كم وساعة إلى ساعة ونصف. زوّدنا برقم الرحلة والفندق، ويُحدَّد موعد الاستقبال من الرحلة فلا يتركك التأخر بلا سيارة. ويُرجى قراءة التنبيه بشأن دخول مكة أولًا: فهو مقصور على المسلمين بموجب النظام السعودي ويُطبَّق عند نقاط التفتيش على الطريق. وصفحة التوصيل من جدة إلى مكة لدينا تغطي الرحلة كاملة، ومنها مكان النزول عند الفنادق قرب الحرم.",
      },
    },
    {
      question: {
        en: "Can non-Muslims travel to Makkah?",
        ar: "هل يمكن لغير المسلمين السفر إلى مكة المكرمة؟",
      },
      answer: {
        en: "No. Entry to Makkah is restricted to Muslims under Saudi law, and there are checkpoints on the road from Jeddah where it is enforced. We tell you before you book rather than after, because a quotation for a journey you cannot complete is worth nothing to either of us. What we will not do is describe how the checkpoint operates or judge whether a particular traveller will be admitted — that is not ours to say. If Makkah is not open to you, Jeddah, Taif and the coast are, and we are glad to quote those.",
        ar: "لا. دخول مكة المكرمة مقصور على المسلمين بموجب النظام السعودي، وهناك نقاط تفتيش على الطريق من جدة يُطبَّق عندها ذلك. ونخبرك قبل الحجز لا بعده، لأن عرض سعر لرحلة لا تستطيع إكمالها لا قيمة له لأي منا. وما لن نفعله هو وصف كيفية عمل نقطة التفتيش أو الحكم بما إن كان مسافر بعينه سيُسمح له — فذلك ليس من شأننا. وإن لم تكن مكة متاحة لك فجدة والطائف والساحل متاحة، ويسرّنا تسعيرها.",
      },
    },
    {
      question: {
        en: "Which terminal will you meet me at?",
        ar: "في أي صالة ستلتقوني؟",
      },
      answer: {
        en: "The one your flight actually uses, confirmed in writing before the day. We do not publish a terminal chart for King Abdulaziz, because published sources disagree about how many terminals are in use and what they are called — one says the South terminal has closed, another still lists it, and the Hajj facility is given different numbers by different sources. Your airline's booking confirmation or app is the live answer, and it is the one we work from.",
        ar: "الصالة التي تستخدمها رحلتك فعلًا، مؤكدة مكتوبة قبل اليوم. ولا ننشر جدول صالات لمطار الملك عبدالعزيز، لأن المصادر المنشورة تتعارض في عدد الصالات العاملة وفي أسمائها — فإحداها تقول إن الصالة الجنوبية أُغلقت، وأخرى ما زالت تذكرها، وصالة الحج تُعطى أرقامًا مختلفة في مصادر مختلفة. وتأكيد الحجز من شركة طيرانك أو تطبيقها هو الجواب الحيّ، وهو ما نعمل منه.",
      },
    },
    {
      question: {
        en: "Is the Haramain train better than driving to Makkah or Madinah?",
        ar: "هل قطار الحرمين أفضل من السيارة إلى مكة أو المدينة؟",
      },
      answer: {
        en: "Often, yes — and Jeddah is the one city where we will say that without hesitating. The Haramain line reaches both holy cities and one of its stations is inside King Abdulaziz airport, so for one or two people travelling light it is hard to beat. The car wins for families, for real luggage, for an address away from a station, for a late arrival, and for anyone who would rather not change mode after a flight. We arrange the road journey and sell no rail tickets, so there is nothing in this for us either way. Check schedules and fares with the operator; we publish neither.",
        ar: "غالبًا نعم — وجدة هي المدينة الوحيدة التي نقول فيها ذلك بلا تردد. فخط الحرمين يصل إلى المدينتين المقدستين، وإحدى محطاته داخل مطار الملك عبدالعزيز، فلشخص أو شخصين بأمتعة خفيفة يصعب التغلب عليه. أما السيارة فتتفوق للعائلات وللأمتعة الفعلية ولعنوان بعيد عن محطة وللوصول المتأخر، ولكل من يفضّل ألا يغيّر وسيلته بعد رحلة جوية. ونحن نرتّب الرحلة البرية ولا نبيع تذاكر قطار، فلا مصلحة لنا في أي الخيارين. وتحقق من المواعيد والأسعار لدى المشغّل؛ فنحن لا ننشر أيًّا منهما.",
      },
    },
    {
      question: {
        en: "How long does the drive from Jeddah to Makkah actually take?",
        ar: "كم تستغرق الرحلة من جدة إلى مكة فعلًا؟",
      },
      answer: {
        en: "An hour to an hour and a half for 80 to 100 km — roughly 80 km from central Jeddah and closer to 100 km from the airport, which lies north of the city. The spread is why we give a range rather than a number. Add the checkpoint and the traffic around the Haram at prayer times and the upper end is the realistic figure. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "ساعة إلى ساعة ونصف لمسافة 80 إلى 100 كم — نحو 80 كم من وسط جدة وأقرب إلى 100 كم من المطار الواقع شمال المدينة. وهذا الفارق هو سبب ذكرنا نطاقًا لا رقمًا. وأضف نقطة التفتيش والحركة حول الحرم في أوقات الصلاة فيكون الحد الأعلى هو الرقم الواقعي. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Can you collect me from the Haramain station in Jeddah?",
        ar: "هل يمكنكم استقبالي من محطة قطار الحرمين في جدة؟",
      },
      answer: {
        en: "Yes, and tell us which one: Jeddah has two Haramain stations, one in the city at Al-Sulaymaniyah and one inside King Abdulaziz airport. They are a long way apart, so naming the station — or simply telling us which train you are on — is the thing that prevents the car being at the wrong one.",
        ar: "نعم، وأخبرنا بأيهما: فلجدة محطتان لقطار الحرمين، إحداهما في المدينة بالسليمانية والأخرى داخل مطار الملك عبدالعزيز. وهما متباعدتان، فذكر المحطة — أو ببساطة إخبارنا بالقطار الذي أنت عليه — هو ما يمنع وجود السيارة في المحطة الخطأ.",
      },
    },
    {
      question: {
        en: "Do you arrange Umrah transport?",
        ar: "هل ترتّبون نقل العمرة؟",
      },
      answer: {
        en: "We arrange the road legs of it — the arrival from Jeddah, hotel transfers, the journey on to Madinah and the departure run — at any time of year. We are a private transport provider and not an official Hajj or Umrah operator, so we do not issue visas or permits and we do not sell pilgrimage packages. Road transport only, and we are clear about that before you book rather than after.",
        ar: "نرتّب مراحلها البرية — الوصول من جدة، والتنقل بين الفنادق، والرحلة إلى المدينة المنورة، ورحلة المغادرة — في أي وقت من السنة. ونحن مزوّد نقل خاص ولسنا مشغّلاً رسميًا للحج أو العمرة، فلا نُصدر تأشيرات ولا تصاريح ولا نبيع برامج. النقل البري فقط، ونوضح ذلك قبل الحجز لا بعده.",
      },
    },
    {
      question: {
        en: "Can you take me on to Riyadh?",
        ar: "هل يمكنكم نقلي إلى الرياض؟",
      },
      answer: {
        en: "Yes — about 950 km east and a full day's driving, nine to ten hours without counting stops. It is the one journey from Jeddah we already have a complete page for, written from the Riyadh end, and it has the detail this one does not: where the stops are, why the distance figures disagree, and whether one driver can cover it.",
        ar: "نعم — نحو 950 كم شرقًا ويوم قيادة كامل، من تسع إلى عشر ساعات دون حساب التوقفات. وهي الرحلة الوحيدة من جدة التي لدينا لها صفحة كاملة بالفعل، مكتوبة من جهة الرياض، وفيها التفاصيل التي ليست هنا: مواضع التوقف، وسبب تعارض أرقام المسافة، وهل يغطيها سائق واحد.",
      },
    },
  ],

  related: [
    {
      routeKey: "jeddahToMakkah",
      label: { en: "Jeddah to Makkah", ar: "من جدة إلى مكة" },
      note: {
        en: "Airport or city to your hotel: the entry rules, the 80–100 km road and drop-off near the Haram.",
        ar: "من المطار أو المدينة إلى فندقك: شروط الدخول وطريق 80–100 كم ومكان النزول قرب الحرم.",
      },
    },
    {
      routeKey: "jeddahAirport",
      label: { en: "Jeddah airport transfers", ar: "النقل من مطار جدة" },
      note: {
        en: "King Abdulaziz in detail: the terminal question, arrivals and departures, and the railway station at the airport.",
        ar: "مطار الملك عبدالعزيز بالتفصيل: سؤال الصالات، والوصول والمغادرة، ومحطة القطار في المطار.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "The 950 km crossing from the capital, with the stages, the stops and the honest driver-hours answer.",
        ar: "العبور الطويل 950 كم من العاصمة، ومعه المراحل والتوقفات والجواب الصادق عن ساعات السائق.",
      },
    },
    {
      routeKey: "riyadhToTaif",
      label: { en: "Riyadh to Taif", ar: "الرياض إلى الطائف" },
      note: {
        en: "The same highlands from the other side of the country — about 790 km, against roughly 170 km from here.",
        ar: "المرتفعات نفسها من الجهة الأخرى للبلاد — نحو 790 كم، مقابل 170 كم تقريبًا من هنا.",
      },
    },
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "The other city we cover in depth: airport, railway, hotels and seven intercity routes.",
        ar: "المدينة الأخرى التي نغطيها بعمق: المطار والقطار والفنادق وسبعة مسارات بين المدن.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Landed, or leaving", ar: "وصلت أو تغادر" },
    heading: {
      en: "Tell us where you are going from Jeddah",
      ar: "أخبرنا إلى أين تتجه من جدة",
    },
    body: {
      en: "The destination, the date, how many of you and what luggage. We reply with a written price and the terminal or entrance confirmed.",
      ar: "الوجهة والتاريخ وعددكم والأمتعة. ونرد بسعر مكتوب والصالة أو المدخل مؤكدًا.",
    },
    button: { en: "Get a Jeddah quote", ar: "اطلب سعر رحلة جدة" },
  },
};
