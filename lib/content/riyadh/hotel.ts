import type { HotelPageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh hotel transfers.
 *
 * The smallest service intent in the cluster, and largely a sub-intent of the
 * airport page — so this page does not try to compete with it. It takes the
 * part the airport page cannot cover properly: the hotel end of the journey,
 * and the one detail that decides whether a hotel pickup works.
 *
 * ## The angle
 *
 * Large Riyadh hotels have several entrances — a main lobby, a separate
 * conference or ballroom entrance, a basement car park, sometimes a residence
 * tower with its own door. Naming the right one is where hotel transfers
 * actually go wrong, and it is advice we can give without anything confirmed
 * by a partner. That is the page's first `<h2>` and its reason to exist.
 *
 * ## What this page does not claim
 *
 * No waiting-time policy, no meet-and-greet arrangement, no statement about
 * where a car may stand at any particular property, and no named hotel. Where
 * a vehicle can wait is set by each hotel and by the traffic officer on the
 * day, not by us; and nothing about our own waiting or inclusions has been
 * confirmed with the driver partners — the same gap that blocks the
 * private-driver-hire page. The quotation section describes the process
 * instead.
 *
 * No hotel-branded photography is used anywhere, and no hotel is named, so
 * nothing here can read as a partnership we do not have.
 *
 * There is also deliberately **no stat band**: this page makes no distance or
 * duration claim, so there is no figure to date-stamp.
 */
export const riyadhHotel: HotelPageContent = {
  routeKey: "riyadhHotel",
  // Social card and JSON-LD only. The page itself carries no photograph: see
  // the design note in docs/riyadh-design-concepts.md.
  imageKey: "dest-riyadh",

  seo: {
    // 46 characters.
    title: {
      en: "Riyadh Hotel Transfers | Door to Door Quotes",
      ar: "نقل خاص من فنادق الرياض | اطلب عرض سعر",
    },
    description: {
      en: "Private transfers to and from Riyadh hotels — a named entrance rather than a guess, a driver who knows which door, and a price agreed in writing before anything is booked.",
      ar: "نقل خاص من فنادق الرياض وإليها — مدخل محدد بالاسم لا بالتخمين، وسائق يعرف أي باب، وسعر متفق عليه مكتوبًا قبل أي حجز.",
    },
  },

  crumbLabel: { en: "Hotel transfers", ar: "النقل من الفنادق" },

  hero: {
    eyebrow: { en: "Riyadh · hotels", ar: "الرياض · الفنادق" },
    h1: {
      en: "Riyadh hotel transfers",
      ar: "نقل خاص من فنادق الرياض",
    },
    lead: {
      en: "Almost every hotel transfer that goes wrong goes wrong in the same way: the car is at one entrance and the passenger is at another. This page is mostly about fixing that.",
      ar: "تكاد كل رحلة فندق تفشل أن تفشل بالطريقة نفسها: السيارة عند مدخل والمسافر عند مدخل آخر. وهذه الصفحة في معظمها عن إصلاح ذلك.",
    },
  },

  entrance: {
    heading: { en: "Pickup from a named entrance", ar: "الاستقبال من مدخل محدد" },
    lead: {
      en: "A large Riyadh hotel can have four ways in, and “I am at the hotel” does not narrow it down. Tell us which door you will be standing at and the problem disappears. These are the ones that come up.",
      ar: "قد يكون لفندق كبير في الرياض أربعة مداخل، وعبارة «أنا في الفندق» لا تحدد أيًّا منها. أخبرنا بالباب الذي ستقف عنده فتختفي المشكلة. وهذه هي المداخل التي تتكرر.",
    },
    kinds: [
      {
        name: { en: "The main lobby entrance", ar: "مدخل البهو الرئيسي" },
        detail: {
          en: "The default if you tell us nothing, and the right answer most of the time. If your booking does not name an entrance, this is the one we will confirm back to you.",
          ar: "الخيار الافتراضي إن لم تخبرنا بشيء، وهو الصحيح في معظم الأحوال. وإن لم يذكر حجزك مدخلًا فهذا هو الذي سنؤكده لك.",
        },
      },
      {
        name: {
          en: "A conference or ballroom entrance",
          ar: "مدخل المؤتمرات أو القاعات",
        },
        detail: {
          en: "Often on a different side of the building from the lobby, sometimes on a different street. If you are leaving an event rather than a room, this is usually where you actually are.",
          ar: "غالبًا في جهة أخرى من المبنى غير البهو، وأحيانًا على شارع مختلف. وإن كنت خارجًا من مناسبة لا من غرفة فهذا هو موقعك الفعلي عادةً.",
        },
      },
      {
        name: { en: "The basement or car-park level", ar: "القبو أو دور المواقف" },
        detail: {
          en: "Some properties route cars below ground and some do not allow it at all. Whether a vehicle can reach you there is the hotel's rule, not ours, so say if that is where you expect to be and we will confirm what is possible.",
          ar: "بعض المنشآت توجّه السيارات إلى الأسفل وبعضها لا يسمح بذلك إطلاقًا. وإمكانية وصول المركبة إليك هناك قرار الفندق لا قرارنا، فاذكر إن كنت تتوقع أن تكون هناك ونؤكد لك ما هو ممكن.",
        },
      },
      {
        name: {
          en: "A residence or serviced-apartment door",
          ar: "باب الأجنحة أو الشقق المخدومة",
        },
        detail: {
          en: "Mixed-use towers often have a separate entrance for longer-stay guests, with its own address. Give that address rather than the hotel's main one.",
          ar: "الأبراج متعددة الاستخدامات لها غالبًا مدخل منفصل لضيوف الإقامة الطويلة، وله عنوانه الخاص. فأعطِ ذلك العنوان لا العنوان الرئيسي للفندق.",
        },
      },
    ],
    footnote: {
      en: "We do not publish a standing arrangement for any property, because where a car may wait is set by the hotel and by whoever is managing the forecourt that day. What you get instead is the entrance and the arrangement confirmed in writing for your booking, and a phone number so the driver can reach you if the forecourt is closed.",
      ar: "لا ننشر ترتيبًا ثابتًا لأي منشأة، لأن موضع انتظار السيارة يحدده الفندق ومن يدير الساحة الأمامية في ذلك اليوم. وما تحصل عليه بدلًا من ذلك هو المدخل والترتيب مؤكدين مكتوبين لحجزك، ورقم هاتف ليتمكن السائق من الوصول إليك إن كانت الساحة مغلقة.",
    },
  },

  journeys: [
    {
      heading: { en: "To and from the airport", ar: "من المطار وإليه" },
      paragraphs: [
        {
          en: "The commonest hotel journey in Riyadh, and the one with the most detail behind it — which terminal, what happens if the flight is late, why we ask for the flight number. All of that lives on the airport page rather than being repeated here.",
          ar: "أكثر رحلات الفنادق شيوعًا في الرياض، وأكثرها تفصيلًا — أي صالة، وما يحدث إن تأخرت الرحلة، ولماذا نطلب رقم الرحلة. وكل ذلك موجود في صفحة المطار لا مكررًا هنا.",
        },
        {
          en: "What matters at the hotel end is the same as everywhere on this page: name the entrance for a departure, and give us the flight number for an arrival so the pickup follows the aircraft rather than the clock.",
          ar: "وما يهم في جانب الفندق هو ذاته في كل هذه الصفحة: اذكر المدخل للمغادرة، وزوّدنا برقم الرحلة للوصول ليتبع الاستقبال الطائرة لا الساعة.",
        },
      ],
      links: [
        {
          routeKey: "riyadhAirport",
          label: { en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" },
          note: {
            en: "Arrivals, departures, the flight-number mechanic and why we will not print a terminal chart.",
            ar: "الوصول والمغادرة وآلية رقم الرحلة ولماذا لا نطبع جدول صالات.",
          },
        },
      ],
    },
    {
      heading: { en: "Across the city", ar: "عبر المدينة" },
      paragraphs: [
        {
          en: "Hotel to an office, hotel to a meeting, hotel to another hotel, hotel to a railway station. These are short journeys where the address matters more than the distance: the Olaya and King Fahd Road corridors are dense enough that a few hundred metres changes which entrance and which approach road make sense.",
          ar: "من الفندق إلى مكتب أو اجتماع أو فندق آخر أو محطة قطار. وهي رحلات قصيرة يكون العنوان فيها أهم من المسافة: فممرا العليا وطريق الملك فهد مزدحمان بما يجعل مئات الأمتار تغيّر أي مدخل وأي طريق وصول هو المنطقي.",
        },
        {
          en: "If your day is several stops rather than one journey, say so in the enquiry. A day of meetings is usually better arranged as a car for the day, with the vehicle staying with you between stops, than as four separate transfers booked an hour apart — and it is quoted by the day rather than per journey.",
          ar: "وإن كان يومك عدة توقفات لا رحلة واحدة فاذكر ذلك في الاستفسار. فيوم الاجتماعات يكون ترتيبه كسيارة لليوم، تبقى معك بين التوقفات، أفضل عادةً من أربع رحلات منفصلة محجوزة بفارق ساعة — ويُسعَّر باليوم لا بالرحلة.",
        },
      ],
      links: [
        {
          routeKey: "riyadhRailway",
          label: { en: "Riyadh railway stations", ar: "محطات قطار الرياض" },
          note: {
            en: "Two stations, 23 km apart. Which one you need depends on where your train is going.",
            ar: "محطتان تفصل بينهما 23 كم. وأيهما تحتاج يعتمد على وجهة قطارك.",
          },
        },
      ],
    },
    {
      heading: { en: "Onward to another city", ar: "المتابعة إلى مدينة أخرى" },
      paragraphs: [
        {
          en: "A good many intercity journeys start at a hotel door rather than a home address, and every published route can be quoted from one. The pickup works exactly as it does for an airport run: name the entrance, give the departure time you want, and the long drive is planned backwards from it.",
          ar: "كثير من الرحلات بين المدن تبدأ من باب فندق لا من عنوان سكني، وكل مسار منشور يمكن تسعيره من هناك. ويعمل الاستقبال تمامًا كما يعمل في رحلة المطار: اذكر المدخل وحدد وقت الانطلاق الذي تريده، وتُخطَّط الرحلة الطويلة تراجعيًا منه.",
        },
      ],
      links: [
        {
          routeKey: "riyadhToDammam",
          label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
          note: {
            en: "About 400 km east, and the most common onward run from a city hotel.",
            ar: "نحو 400 كم شرقًا، وأكثر رحلة تالية شيوعًا من فندق في المدينة.",
          },
        },
        {
          routeKey: "riyadhToJeddah",
          label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
          note: {
            en: "About 950 km west — a full day, so the hotel departure is usually at first light.",
            ar: "نحو 950 كم غربًا — يوم كامل، فتكون المغادرة من الفندق مع أول الضوء عادةً.",
          },
        },
        {
          routeKey: "riyadh",
          label: { en: "All Riyadh routes", ar: "جميع مسارات الرياض" },
          note: {
            en: "The hub, with all seven intercity routes and their distances.",
            ar: "الصفحة الرئيسية، وفيها المسارات السبعة بين المدن ومسافاتها.",
          },
        },
      ],
    },
  ],

  quotation: {
    heading: {
      en: "What a hotel transfer quotation covers",
      ar: "ما يشمله عرض سعر النقل من الفندق",
    },
    lead: {
      en: "We would rather tell you how the price is arrived at than publish a generic list of inclusions — what is included is confirmed for your journey. So here is what the written quotation states.",
      ar: "نفضّل أن نخبرك بكيفية الوصول إلى السعر على أن ننشر قائمة عامة بما يشمله، فما يشمله يُؤكَّد لرحلتك. فإليك ما يذكره عرض السعر المكتوب.",
    },
    items: [
      {
        en: "The entrance you will be collected from, named rather than assumed.",
        ar: "المدخل الذي ستُستقبل منه، مذكورًا بالاسم لا مفترضًا.",
      },
      {
        en: "The pickup time — derived from your flight or your own stated time, not chosen for you.",
        ar: "موعد الاستقبال — مستخرجًا من رحلتك أو من الوقت الذي تذكره، لا مختارًا لك.",
      },
      {
        en: "The vehicle category, matched to the passengers and the luggage you describe.",
        ar: "فئة المركبة، مطابقة للركاب والأمتعة التي تصفها.",
      },
      {
        en: "The total price, in writing, before anything is reserved — and nothing added afterwards.",
        ar: "السعر الإجمالي، مكتوبًا، قبل حجز أي شيء — ولا شيء يُضاف بعد ذلك.",
      },
      {
        en: "What it does not state: a waiting-time policy or a standing arrangement at any particular hotel. Those are confirmed for your booking, because they depend on the property and on the day.",
        ar: "وما لا يذكره: سياسة لوقت الانتظار أو ترتيب ثابت في فندق معين. فهذه تُؤكَّد لحجزك، لأنها تعتمد على المنشأة وعلى اليوم.",
      },
    ],
    booking: [
      {
        en: "To book, send the hotel, the entrance if you know it, the direction and time, and how many passengers and bags. If several transfers fall across one stay, send them together and we will quote the set.",
        ar: "للحجز، أرسل الفندق والمدخل إن كنت تعرفه والاتجاه والوقت وعدد الركاب والحقائب. وإن كانت عدة رحلات في إقامة واحدة فأرسلها معًا ونُسعّرها كمجموعة.",
      },
      {
        en: "Nothing is reserved and no payment is taken until you accept the price.",
        ar: "ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق على السعر.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh hotel transfers: common questions",
    ar: "النقل من فنادق الرياض: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "Where exactly will the driver wait?",
        ar: "أين سينتظر السائق بالضبط؟",
      },
      answer: {
        en: "At the entrance named in your confirmation. If your booking does not name one, we default to the main lobby entrance and confirm that back to you in writing before the day. We do not publish a standing arrangement for any particular hotel, because where a car may stand is the hotel's rule and depends on how busy the forecourt is — so we confirm it per booking and give the driver a phone number for you rather than guess.",
        ar: "عند المدخل المذكور في تأكيد حجزك. وإن لم يذكر حجزك مدخلًا فنعتمد مدخل البهو الرئيسي ونؤكده لك مكتوبًا قبل اليوم. ولا ننشر ترتيبًا ثابتًا لأي فندق بعينه، لأن موضع وقوف السيارة قرار الفندق ويعتمد على ازدحام الساحة الأمامية — فنؤكده لكل حجز ونزوّد السائق برقم هاتفك بدل التخمين.",
      },
    },
    {
      question: {
        en: "Can someone book on my behalf?",
        ar: "هل يمكن لشخص آخر الحجز بالنيابة عني؟",
      },
      answer: {
        en: "Yes. The enquiry can come from you, an assistant, a host, an event organiser or a concierge desk — we reply with the quotation to whoever sends it. Put the travelling passenger's name and a phone number in the enquiry so the driver is looking for the right person.",
        ar: "نعم. يمكن أن يأتي الاستفسار منك أو من مساعد أو مضيف أو منظّم مناسبة أو مكتب خدمات الضيوف — ونرسل عرض السعر إلى من أرسله. واذكر في الاستفسار اسم المسافر ورقم هاتفه ليبحث السائق عن الشخص الصحيح.",
      },
    },
    {
      question: {
        en: "Can you collect from a compound or a serviced apartment?",
        ar: "هل يمكنكم الاستقبال من مجمّع أو شقة مخدومة؟",
      },
      answer: {
        en: "Yes. A serviced apartment is quoted like any other address. For a gated compound, pickup or drop-off may be possible at an agreed entrance or gate; entry inside the compound is not included, and security permission and internal access are not guaranteed. Tell us the compound when you enquire and we will confirm the meeting point.",
        ar: "نعم. تُسعَّر الشقة المخدومة كأي عنوان آخر. أما المجمّعات المسوّرة فقد يكون الاستقبال أو النزول ممكنًا عند مدخل أو بوابة متفق عليها، ولا يشمل ذلك الدخول إلى داخل المجمّع، ولا نضمن الإذن الأمني أو الوصول الداخلي. أخبرنا باسم المجمّع عند الاستفسار ونؤكد لك نقطة اللقاء.",
      },
    },
    {
      question: {
        en: "Can I book several transfers across one stay?",
        ar: "هل يمكنني حجز عدة رحلات خلال إقامة واحدة؟",
      },
      answer: {
        en: "Yes, and sending them together is easier than booking them one at a time — we quote the set and the arrangements are consistent. If the pattern is really a car at your disposal for a day rather than separate journeys, say so: day hire is quoted by the day and usually suits a day of meetings better than four bookings an hour apart.",
        ar: "نعم، وإرسالها معًا أسهل من حجزها واحدة واحدة — فنُسعّر المجموعة وتكون الترتيبات متسقة. وإن كان النمط في حقيقته سيارة تحت تصرفك ليوم لا رحلات منفصلة فاذكر ذلك: فالاستئجار اليومي يُسعَّر باليوم ويناسب يوم الاجتماعات أكثر من أربعة حجوزات بفارق ساعة.",
      },
    },
    {
      question: {
        en: "Do you need my room number?",
        ar: "هل تحتاجون رقم غرفتي؟",
      },
      answer: {
        en: "No. We need the hotel, the entrance, the time, and a phone number that works on the day. The room number tells us nothing useful about where you will be standing, which is the only thing that matters for a pickup.",
        ar: "لا. نحتاج الفندق والمدخل والوقت ورقم هاتف يعمل في ذلك اليوم. ورقم الغرفة لا يخبرنا بشيء مفيد عن موضع وقوفك، وهو الشيء الوحيد المهم للاستقبال.",
      },
    },
    {
      question: {
        en: "Can you take me from one hotel to another?",
        ar: "هل يمكنكم نقلي من فندق إلى آخر؟",
      },
      answer: {
        en: "Yes, and it is one of the simpler journeys we run — but name both entrances rather than both hotels. Two towers on the same road can have their doors on different streets, and a few hundred metres is the difference between a smooth pickup and a phone call.",
        ar: "نعم، وهي من أبسط الرحلات التي نشغّلها — لكن اذكر المدخلين لا الفندقين. فقد يكون لبرجين على الطريق نفسه بابان على شارعين مختلفين، ومئات الأمتار هي الفرق بين استقبال سلس ومكالمة هاتفية.",
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
        en: "The journey most hotel transfers are half of.",
        ar: "الرحلة التي يشكّل معظم النقل من الفنادق نصفها.",
      },
    },
    {
      routeKey: "riyadhRailway",
      label: { en: "Riyadh railway stations", ar: "محطات قطار الرياض" },
      note: {
        en: "Both stations, and which one your train actually leaves from.",
        ar: "المحطتان، وأي واحدة ينطلق منها قطارك فعلًا.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Name the door", ar: "اذكر الباب" },
    heading: {
      en: "Tell us the hotel and the entrance",
      ar: "أخبرنا بالفندق والمدخل",
    },
    body: {
      en: "That, the time, and how many of you there are. We reply with a written price and the entrance confirmed, so nobody is standing at the wrong door.",
      ar: "ذلك والوقت وعددكم. ونرد بسعر مكتوب والمدخل مؤكدًا، فلا يقف أحد عند الباب الخطأ.",
    },
    button: { en: "Get a hotel transfer quote", ar: "اطلب سعر النقل من الفندق" },
  },
};
