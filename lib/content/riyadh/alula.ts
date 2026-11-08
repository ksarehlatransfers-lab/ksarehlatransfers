import type { RoutePageContent } from "@/lib/content/riyadh/types";

/**
 * Riyadh to AlUla.
 *
 * The honest-comparison page, required by the owner's decision because the
 * search results for this route are dominated by flights. A page that sold
 * the drive without mentioning the plane would be answering a question
 * nobody asked.
 *
 * So the signature element recommends flying for the travellers it suits,
 * and says so in the first line of the comparison rather than burying it.
 * The business answer is better too: the airport transfer at the other end
 * is a real service, and offering it beats pretending an eleven-hour drive
 * is the default.
 *
 * On the flight time: the planning document for this page carried "about
 * 1h 10m", which traces to the airline's own marketing page and is the
 * outlier. Independently published nonstop times for this city pair run
 * roughly 1h 35m to 2h, and the air distance is about 876 km. The page uses
 * the range. Flight *frequency* is published nowhere we trust, so no number
 * for it appears here at all.
 *
 * Figures are approximations from public route data. Sources in
 * docs/riyadh-content-research.md.
 */
export const riyadhToAlUla: RoutePageContent = {
  routeKey: "riyadhToAlUla",
  imageKey: "guide-alula",

  seo: {
    // 47 characters.
    title: {
      en: "Riyadh to AlUla Private Transfer | Drive or Fly",
      ar: "نقل خاص من الرياض إلى العُلا | اطلب عرض سعر",
    },
    description: {
      en: "Private transfer from Riyadh to AlUla — about 1,050 km and 10 to 12 hours via Qassim and Hail. When the drive makes sense, when flying is better, and how to book either.",
      ar: "نقل خاص من الرياض إلى العُلا — نحو 1,050 كم و10 إلى 12 ساعة عبر القصيم وحائل. متى تكون الرحلة البرية منطقية، ومتى يكون الطيران أفضل، وكيف تحجز أيًّا منهما.",
    },
  },

  crumbLabel: { en: "Riyadh to AlUla", ar: "الرياض إلى العُلا" },

  hero: {
    eyebrow: { en: "Intercity · the north-west", ar: "بين المدن · الشمال الغربي" },
    h1: {
      en: "Riyadh to AlUla private transfer",
      ar: "نقل خاص من الرياض إلى العُلا",
    },
    lead: {
      en: "Around 1,050 km and a full day's driving across the north of the country. For a good many travellers the honest answer is to fly and let us meet you at AlUla — this page explains which group you are in.",
      ar: "نحو 1,050 كم ويوم قيادة كامل عبر شمال البلاد. ولكثير من المسافرين يكون الجواب الصادق هو الطيران وأن نستقبلك في العُلا — وهذه الصفحة توضح إلى أي الفريقين تنتمي.",
    },
  },

  stats: [
    {
      label: { en: "Approximate distance", ar: "المسافة التقريبية" },
      value: { en: "~1,050 km", ar: "~1,050 كم" },
      note: {
        en: "Published road figures run from about 1,040 to 1,055 km by the fastest route through Qassim and Hail. A route via Madinah is longer, around 1,160 km.",
        ar: "تتراوح أرقام الطريق المنشورة بين 1,040 و1,055 كم تقريبًا على أسرع مسار عبر القصيم وحائل. والمسار عبر المدينة المنورة أطول، نحو 1,160 كم.",
      },
    },
    {
      label: { en: "Typical driving time", ar: "زمن القيادة المعتاد" },
      value: { en: "10–12 hours", ar: "10–12 ساعة" },
      note: {
        en: "Published estimates cluster around eleven hours of driving. With the breaks a day like this actually needs, plan on twelve or split it over two days.",
        ar: "تتجمع التقديرات المنشورة حول إحدى عشرة ساعة قيادة. ومع الاستراحات التي يحتاجها يوم كهذا فعلًا، احسب اثنتي عشرة ساعة أو اقسمه على يومين.",
      },
    },
    {
      label: { en: "By air", ar: "جوًّا" },
      value: { en: "~1h 35m–2h", ar: "~1:35–2 ساعة" },
      note: {
        en: "Published nonstop flight times for this city pair; the air distance is about 876 km. Door to door with airport time is commonly nearer four to five hours.",
        ar: "أزمنة الرحلات المباشرة المنشورة لهذا الزوج من المدن؛ والمسافة الجوية نحو 876 كم. ومن الباب إلى الباب مع وقت المطار تقترب عادةً من أربع إلى خمس ساعات.",
      },
    },
    {
      label: { en: "Rail alternative", ar: "البديل بالقطار" },
      value: { en: "None", ar: "لا يوجد" },
      note: {
        en: "There is no passenger railway to AlUla. The road and the air are the two options.",
        ar: "لا يوجد قطار ركاب إلى العُلا. فالطريق البري والجو هما الخياران.",
      },
    },
  ],

  statsChecked: {
    en: "Road, flight and distance figures last checked November 2026.",
    ar: "آخر تحقق من أرقام الطريق والطيران والمسافات: نوفمبر 2026.",
  },

  overview: {
    heading: {
      en: "The long way round",
      ar: "الطريق الطويل",
    },
    paragraphs: [
      {
        en: "AlUla is in the north-west, and Riyadh is in the middle of the country. There is no short way to connect them by road: the fastest route runs north through Qassim and Hail and then west, and it comes to around 1,050 km and a full day behind the wheel.",
        ar: "العُلا في الشمال الغربي، والرياض في وسط البلاد. ولا طريق قصير يربطهما برًّا: فأسرع مسار يتجه شمالًا عبر القصيم وحائل ثم غربًا، ويبلغ نحو 1,050 كم ويومًا كاملًا على المقود.",
      },
      {
        en: "That is why most people fly, and why this page starts by saying so. A direct flight is under two hours in the air against ten to twelve on the road. If you are two people with normal luggage and a hotel booking, the plane wins and nothing we could write would change that.",
        ar: "ولهذا يسافر معظم الناس جوًّا، ولهذا تبدأ هذه الصفحة بقول ذلك. فالرحلة المباشرة أقل من ساعتين في الجو مقابل عشر إلى اثنتي عشرة ساعة على الطريق. وإن كنتما شخصين بأمتعة عادية وحجز فندق فالطائرة هي الفائز، ولا شيء نكتبه يغيّر ذلك.",
      },
      {
        en: "The drive still makes sense for some journeys, and we would rather tell you which ones than sell you the wrong thing. Large parties, serious luggage, a group that wants to stop at Hail or Qassim on the way, a schedule that does not fit the flights, or a plan to have a vehicle at your disposal once you arrive — those are the cases where the road is the better answer.",
        ar: "ومع ذلك تبقى الرحلة البرية منطقية لبعض الرحلات، ونفضّل إخبارك بأيها على بيعك الخيار الخطأ. فالمجموعات الكبيرة والأمتعة الكثيرة ومجموعة تريد التوقف في حائل أو القصيم في الطريق وجدول لا يناسب الرحلات الجوية وخطة لامتلاك سيارة تحت تصرفك بعد الوصول — هذه هي الحالات التي يكون فيها الطريق البري هو الجواب الأفضل.",
      },
    ],
  },

  comparison: {
    heading: { en: "Drive or fly? An honest comparison", ar: "برًّا أم جوًّا؟ مقارنة صادقة" },
    lead: {
      en: "We arrange road transport, so the drive is what we sell. We are telling you to fly anyway if you are in the left-hand column, because a recommendation you cannot trust is worth nothing. We can meet you at AlUla airport either way.",
      ar: "نحن نرتّب النقل البري، فالرحلة البرية هي ما نبيعه. ومع ذلك ننصحك بالطيران إن كنت في العمود الأول، لأن توصية لا تستطيع الثقة بها لا قيمة لها. ويمكننا استقبالك في مطار العُلا في كلتا الحالتين.",
    },
    columns: [
      {
        title: { en: "Fly if", ar: "سافر جوًّا إذا" },
        headline: { en: "~1h 35m–2h", ar: "~1:35–2 ساعة" },
        points: [
          {
            en: "You are one, two or a small party with ordinary luggage.",
            ar: "كنت فردًا أو اثنين أو مجموعة صغيرة بأمتعة عادية.",
          },
          {
            en: "Your time is worth more than the fare difference — which, on a day each way, it usually is.",
            ar: "كان وقتك أغلى من فرق السعر — وهو كذلك عادةً في يوم لكل اتجاه.",
          },
          {
            en: "You are going for a short stay and want to arrive able to do something.",
            ar: "كنت ذاهبًا لإقامة قصيرة وتريد الوصول وأنت قادر على فعل شيء.",
          },
          {
            en: "Nobody in your party wants to spend eleven hours in a vehicle, which is most people.",
            ar: "لم يرغب أحد في مجموعتك بإمضاء إحدى عشرة ساعة في سيارة، وهذا حال معظم الناس.",
          },
        ],
      },
      {
        title: { en: "Drive if", ar: "سافر برًّا إذا" },
        headline: { en: "10–12 hrs", ar: "10–12 ساعة" },
        points: [
          {
            en: "You are a large party, or carrying more than an aircraft hold will take.",
            ar: "كنت مجموعة كبيرة، أو تحمل أكثر مما يستوعبه عنبر الطائرة.",
          },
          {
            en: "You want to break the trip at Hail or Qassim and see something on the way.",
            ar: "أردت تقسيم الرحلة في حائل أو القصيم ورؤية شيء في الطريق.",
          },
          {
            en: "The flight times do not fit your schedule, or you are travelling at short notice.",
            ar: "لم تناسب أوقات الرحلات الجوية جدولك، أو كنت مسافرًا بإشعار قصير.",
          },
          {
            en: "You want the same vehicle and driver with you for the whole trip, including once you are there.",
            ar: "أردت السيارة والسائق نفسيهما معك طوال الرحلة، بما في ذلك بعد الوصول.",
          },
        ],
      },
    ],
    footnote: {
      en: "Flight times above are published figures for nonstop services and vary between sources; one airline page quotes a notably shorter time than the rest, which we have not used. We publish no fares, no flight frequencies and no schedules — check those with the airlines, because they change and we would only be wrong.",
      ar: "أزمنة الطيران أعلاه أرقام منشورة للرحلات المباشرة وتتباين بين المصادر؛ وتذكر صفحة إحدى شركات الطيران زمنًا أقصر بوضوح من البقية ولم نأخذ به. ولا ننشر أسعارًا ولا عدد رحلات ولا جداول — تحقق من ذلك لدى شركات الطيران، فهي تتغير ولن نكون إلا مخطئين.",
    },
  },

  itinerary: {
    heading: { en: "Splitting it over two days", ar: "تقسيمها على يومين" },
    lead: {
      en: "If you are driving, this is how it is usually done. The fastest road runs through Hail, which makes the overnight stop fall in a city with hotels rather than somewhere improvised.",
      ar: "إن كنت مسافرًا برًّا فهكذا تُقطع عادةً. فأسرع طريق يمر بحائل، وهذا يجعل توقف المبيت في مدينة فيها فنادق لا في مكان مرتجل.",
    },
    stops: [
      {
        day: { en: "Day one", ar: "اليوم الأول" },
        name: { en: "Riyadh to Hail", ar: "الرياض إلى حائل" },
        detail: {
          en: "About 630 km and five and a half to six and a half hours north through Qassim, with a proper stop in Buraydah around the halfway mark. An early start gets you into Hail with the evening still yours.",
          ar: "نحو 630 كم وخمس ساعات ونصف إلى ست ساعات ونصف شمالًا عبر القصيم، مع توقف حقيقي في بريدة قرب منتصف المسافة. والانطلاق المبكر يوصلك إلى حائل والمساء ما زال لك.",
        },
      },
      {
        day: { en: "Day two", ar: "اليوم الثاني" },
        name: { en: "Hail to AlUla", ar: "حائل إلى العُلا" },
        detail: {
          en: "The shorter leg, west and then north-west into the sandstone country. You arrive with the day usable instead of arriving exhausted, which is the whole point of splitting it.",
          ar: "المرحلة الأقصر، غربًا ثم شمالًا غربًا إلى بلاد الصخر الرملي. وتصل واليوم قابل للاستخدام بدل أن تصل منهكًا، وهذا هو كل الغرض من التقسيم.",
        },
      },
    ],
    footnote: {
      en: "Quoted as one journey over two days, with the overnight named in the quotation and the driver's hours accounted for. We do not book your hotel — tell us where you are staying and the driving is planned around it.",
      ar: "تُسعَّر كرحلة واحدة على يومين، مع ذكر المبيت في عرض السعر واحتساب ساعات السائق. ونحن لا نحجز فندقك — أخبرنا بمكان إقامتك ويُخطَّط القيادة حوله.",
    },
  },

  stages: {
    heading: { en: "The journey", ar: "الرحلة" },
    lead: {
      en: "Approximate positions on the fastest road route.",
      ar: "مواقع تقريبية على أسرع مسار بري.",
    },
    items: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: 0,
        detail: {
          en: "Pickup from any address or King Khalid International Airport. On a single-day attempt this has to be very early; on a two-day plan it only has to be early.",
          ar: "الاستقبال من أي عنوان أو من مطار الملك خالد الدولي. وفي محاولة اليوم الواحد يجب أن يكون باكرًا جدًّا؛ وفي خطة اليومين يكفي أن يكون باكرًا.",
        },
      },
      {
        name: { en: "Qassim", ar: "القصيم" },
        km: 360,
        detail: {
          en: "The first substantial stop, around a third of the way. Fuel, food and everything else you might want — and the last place on the route where that is comfortably true.",
          ar: "أول توقف كبير، عند نحو ثلث الطريق. وقود وطعام وكل ما قد تحتاجه — وهو آخر موضع على المسار يصح فيه ذلك بارتياح.",
        },
      },
      {
        name: { en: "Hail", ar: "حائل" },
        km: 630,
        detail: {
          en: "Roughly two-thirds of the way and the natural overnight. If you are driving straight through, this is where the day starts to be long.",
          ar: "نحو ثلثي الطريق، والمكان الطبيعي للمبيت. وإن كنت تقود دون توقف فمن هنا يبدأ اليوم في أن يكون طويلًا.",
        },
      },
      {
        name: { en: "North-west towards AlUla", ar: "شمالًا غربًا نحو العُلا" },
        km: 900,
        detail: {
          en: "The landscape changes through this stretch as the road leaves the open north for sandstone country. Services are sparser here than anywhere earlier on the route.",
          ar: "يتغير المشهد في هذا الامتداد حين يترك الطريق الشمال المفتوح إلى بلاد الصخر الرملي. والخدمات أقل هنا من أي موضع سابق على المسار.",
        },
      },
      {
        name: { en: "AlUla", ar: "العُلا" },
        km: 1050,
        detail: {
          en: "Drop-off at your hotel or resort address. AlUla's accommodation is spread out rather than concentrated in one centre, so the specific address matters more here than in most cities.",
          ar: "التوصيل إلى عنوان فندقك أو منتجعك. وأماكن الإقامة في العُلا متفرقة لا متجمعة في مركز واحد، فالعنوان تحديدًا أهم هنا منه في معظم المدن.",
        },
      },
    ],
  },

  pickup: {
    heading: { en: "Pickup in Riyadh", ar: "الانطلاق من الرياض" },
    paragraphs: [
      {
        en: "Any Riyadh address, including the airport. If you have decided to fly and want us only at the other end, you do not need this part at all — say so and we quote the AlUla side on its own.",
        ar: "أي عنوان في الرياض، بما في ذلك المطار. وإن قررت الطيران وأردتنا في الطرف الآخر فقط فلا تحتاج هذا الجزء إطلاقًا — اذكر ذلك ونُسعّر جانب العُلا وحده.",
      },
    ],
  },

  dropoff: {
    heading: { en: "Drop-off in AlUla", ar: "الوصول في العُلا" },
    paragraphs: [
      {
        en: "Door to door to a hotel, a resort or a residential address. AlUla is a valley with its accommodation distributed along it rather than a compact city centre, and some of the resorts are a meaningful drive from the town — so give the property name and not just “AlUla”, or the last half hour will be a surprise to both of us.",
        ar: "من الباب إلى الباب إلى فندق أو منتجع أو عنوان سكني. والعُلا وادٍ تتوزع أماكن الإقامة على امتداده لا مركز مدينة متضام، وبعض المنتجعات على مسافة قيادة معتبرة من البلدة — فاذكر اسم المكان لا «العُلا» فقط، وإلا كان نصف الساعة الأخير مفاجأة لنا جميعًا.",
      },
    ],
  },

  onward: {
    heading: { en: "If you fly, we can still help", ar: "إن سافرت جوًّا فما زال بإمكاننا المساعدة" },
    items: [
      {
        heading: { en: "AlUla airport transfers", ar: "النقل من مطار العُلا" },
        paragraphs: [
          {
            en: "We can meet you at AlUla airport and take you to your hotel, and collect you for the return flight. Give us the flight number and the pickup is set from it, so a delay does not leave you standing outside an airport in the valley.",
            ar: "يمكننا استقبالك في مطار العُلا ونقلك إلى فندقك، واستقبالك لرحلة العودة. زوّدنا برقم الرحلة ويُحدَّد موعد الاستقبال منه، حتى لا يتركك التأخر واقفًا خارج مطار في الوادي.",
          },
        ],
      },
      {
        heading: { en: "A vehicle while you are there", ar: "سيارة أثناء إقامتك" },
        paragraphs: [
          {
            en: "The sites around AlUla are spread across the valley, so having a car and driver for a day or two while you are there is a common arrangement and is quoted by the day rather than by the journey. Tell us the dates and roughly what you want to see.",
            ar: "المواقع حول العُلا متفرقة في الوادي، فامتلاك سيارة مع سائق ليوم أو يومين أثناء إقامتك ترتيب شائع، ويُسعَّر باليوم لا بالرحلة. أخبرنا بالتواريخ وبما تريد زيارته تقريبًا.",
          },
        ],
      },
    ],
  },

  practical: {
    heading: { en: "Before you travel", ar: "قبل السفر" },
    items: [
      {
        heading: { en: "Two drivers, or two days", ar: "سائقان أو يومان" },
        paragraphs: [
          {
            en: "Ten to twelve hours is beyond what one person should drive in a day. Where a journey cannot safely be covered by a single driver we either price a second driver in or plan the overnight stop — we do not quietly arrange a longer shift and hope. Which of the two applies is stated in your quotation.",
            ar: "عشر إلى اثنتا عشرة ساعة تتجاوز ما ينبغي أن يقوده شخص واحد في يوم. وحين لا يمكن تغطية رحلة بأمان بسائق واحد فإما نُسعّر سائقًا ثانيًا أو نخطط توقف المبيت — ولا نرتّب وردية أطول بصمت ونأمل. وأيهما ينطبق مذكور في عرض سعرك.",
          },
        ],
      },
      {
        heading: { en: "Services on the last stretch", ar: "الخدمات في الامتداد الأخير" },
        paragraphs: [
          {
            en: "Fuel and food are regular as far as Hail and thinner after it. This is the ordinary discipline of a long desert drive rather than anything unusual about this road: fill up and eat where the opportunity is good rather than where you happen to be hungry.",
            ar: "الوقود والطعام منتظمان حتى حائل وأقل بعدها. وهذا هو الانتظام المعتاد لرحلة صحراوية طويلة لا شيء استثنائي في هذا الطريق: تزوَّد بالوقود وكُل حيث تكون الفرصة جيدة لا حيث تجوع.",
          },
        ],
      },
      {
        heading: { en: "The return", ar: "العودة" },
        paragraphs: [
          {
            en: "Plenty of parties drive one way and fly the other, and it is often the best of both: the road trip you wanted, without doing it twice. We quote each direction separately so you can mix them. Say what you are thinking and we will price the combination.",
            ar: "كثير من المجموعات تسافر برًّا في اتجاه وجوًّا في الآخر، وهو غالبًا أفضل الخيارين معًا: الرحلة البرية التي أردتها دون تكرارها. ونُسعّر كل اتجاه على حدة لتتمكن من الجمع بينهما. اذكر ما تفكر فيه ونُسعّر التركيبة.",
          },
        ],
      },
      {
        heading: { en: "What we do not arrange", ar: "ما لا نرتّبه" },
        paragraphs: [
          {
            en: "We do not sell flights, book hotels or issue site tickets for the heritage areas. We arrange the road transport and we will tell you plainly when flying is the better choice. Everything else is yours to book.",
            ar: "لا نبيع تذاكر طيران ولا نحجز فنادق ولا نُصدر تذاكر زيارة للمناطق التراثية. نحن نرتّب النقل البري، وسنخبرك بصراحة حين يكون الطيران الخيار الأفضل. وما عدا ذلك تحجزه بنفسك.",
          },
        ],
      },
    ],
  },

  booking: {
    heading: { en: "How to book this journey", ar: "كيف تحجز هذه الرحلة" },
    paragraphs: [
      {
        en: "Tell us whether you want the full drive, the two-day version with a night in Hail, or just the AlUla airport transfers because you are flying. Then send the addresses, the dates, the number of passengers and the luggage.",
        ar: "أخبرنا هل تريد الرحلة البرية الكاملة أم نسخة اليومين بليلة في حائل أم النقل من مطار العُلا فقط لأنك مسافر جوًّا. ثم أرسل العناوين والتواريخ وعدد الركاب والأمتعة.",
      },
      {
        en: "We reply with a written price, the vehicle category and the driver arrangement for the hours involved. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة وترتيب السائق للساعات المطلوبة. ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh to AlUla: common questions",
    ar: "الرياض إلى العُلا: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "Should I drive or fly from Riyadh to AlUla?",
        ar: "هل أسافر برًّا أم جوًّا من الرياض إلى العُلا؟",
      },
      answer: {
        en: "Fly, for most people. A nonstop flight is under two hours in the air against ten to twelve hours of driving, so for a small party with ordinary luggage and a short stay the plane is simply the better answer and we will say so even though the drive is what we sell. Drive if you are a large group, have more luggage than a hold will take, want to stop at Hail or Qassim on the way, or want a vehicle with you for the whole trip. We can meet you at AlUla airport either way.",
        ar: "سافر جوًّا، لمعظم الناس. فالرحلة المباشرة أقل من ساعتين في الجو مقابل عشر إلى اثنتي عشرة ساعة قيادة، فلمجموعة صغيرة بأمتعة عادية وإقامة قصيرة تكون الطائرة هي الجواب الأفضل بساطةً، وسنقول ذلك وإن كانت الرحلة البرية هي ما نبيعه. وسافر برًّا إن كنت مجموعة كبيرة أو لديك أمتعة أكثر مما يستوعبه العنبر أو أردت التوقف في حائل أو القصيم في الطريق أو أردت سيارة معك طوال الرحلة. ويمكننا استقبالك في مطار العُلا في كلتا الحالتين.",
      },
    },
    {
      question: {
        en: "How long is the drive from Riyadh to AlUla really?",
        ar: "كم تستغرق الرحلة البرية من الرياض إلى العُلا فعلًا؟",
      },
      answer: {
        en: "Ten to twelve hours for around 1,050 km by the fastest route through Qassim and Hail. Published estimates cluster near eleven hours of driving; twelve is the realistic figure once you add the breaks a day like this needs. A route via Madinah exists and is longer, around 1,160 km. These are estimates from public route data, not a guaranteed arrival time.",
        ar: "عشر إلى اثنتا عشرة ساعة لمسافة نحو 1,050 كم على أسرع مسار عبر القصيم وحائل. وتتجمع التقديرات المنشورة قرب إحدى عشرة ساعة قيادة؛ واثنتا عشرة هي الرقم الواقعي بعد إضافة الاستراحات التي يحتاجها يوم كهذا. وهناك مسار عبر المدينة المنورة أطول، نحو 1,160 كم. وهذه تقديرات من بيانات مسارات عامة، لا وقت وصول مضمون.",
      },
    },
    {
      question: {
        en: "Can the drive be split over two days with a stop at Hail?",
        ar: "هل يمكن تقسيم الرحلة على يومين بتوقف في حائل؟",
      },
      answer: {
        en: "Yes, and it is the usual way to do it by road. The fastest route runs through Hail, so the overnight falls in a city with hotels: about 630 km on day one and the shorter leg on day two. It is quoted as one journey over two days with the overnight named and the driver's hours accounted for. We do not book the hotel — tell us where you are staying and the driving is planned around it.",
        ar: "نعم، وهي الطريقة المعتادة لقطعها برًّا. فأسرع مسار يمر بحائل، فيقع المبيت في مدينة فيها فنادق: نحو 630 كم في اليوم الأول والمرحلة الأقصر في اليوم الثاني. وتُسعَّر كرحلة واحدة على يومين مع ذكر المبيت واحتساب ساعات السائق. ونحن لا نحجز الفندق — أخبرنا بمكان إقامتك ويُخطَّط القيادة حوله.",
      },
    },
    {
      question: {
        en: "Can you collect me from AlUla airport instead?",
        ar: "هل يمكنكم استقبالي من مطار العُلا بدلًا من ذلك؟",
      },
      answer: {
        en: "Yes, and for many travellers that is the arrangement that makes sense: fly, and have us waiting. Give us the flight number and the pickup is set from it. AlUla's hotels and resorts are spread along the valley rather than clustered in one centre, so name the property — some are a meaningful drive from the town.",
        ar: "نعم، ولكثير من المسافرين يكون هذا هو الترتيب المنطقي: الطيران وأن نكون في انتظارك. زوّدنا برقم الرحلة ويُحدَّد موعد الاستقبال منه. وفنادق العُلا ومنتجعاتها متوزعة على امتداد الوادي لا متجمعة في مركز واحد، فاذكر اسم المكان — فبعضها على مسافة قيادة معتبرة من البلدة.",
      },
    },
    {
      question: {
        en: "Is there a train to AlUla?",
        ar: "هل هناك قطار إلى العُلا؟",
      },
      answer: {
        en: "No. There is no passenger railway to AlUla, so the road and the air are the two options. If a rail leg is ever part of your plan from somewhere else, we can collect from a station as easily as from an airport.",
        ar: "لا. لا يوجد قطار ركاب إلى العُلا، فالطريق البري والجو هما الخياران. وإن كانت مرحلة بالقطار جزءًا من خطتك من مكان آخر يومًا ما، فيمكننا الاستقبال من محطة بالسهولة نفسها التي نستقبل بها من مطار.",
      },
    },
    {
      question: {
        en: "How many flights a week are there, and what do they cost?",
        ar: "كم عدد الرحلات الجوية أسبوعيًّا، وما تكلفتها؟",
      },
      answer: {
        en: "We will not tell you, because we do not know reliably and a wrong figure would be worse than none. Direct services between Riyadh and AlUla do operate, but frequencies and fares change and the airlines are the only accurate source. Check them, then come back and we will quote whichever legs you want on the ground.",
        ar: "لن نخبرك، لأننا لا نعرف ذلك على وجه موثوق ولأن رقمًا خاطئًا أسوأ من لا رقم. والرحلات المباشرة بين الرياض والعُلا تعمل فعلًا، لكن عدد الرحلات والأسعار تتغير، وشركات الطيران هي المصدر الدقيق الوحيد. تحقق منها ثم ارجع إلينا ونُسعّر ما تريده من مراحل برية.",
      },
    },
    {
      question: {
        en: "Can I drive one way and fly the other?",
        ar: "هل يمكنني السفر برًّا في اتجاه وجوًّا في الآخر؟",
      },
      answer: {
        en: "Yes, and it is a good answer more often than people expect. You get the road journey once rather than twice, and the return takes two hours instead of a day. Each direction is quoted separately, so tell us the combination you want and we will price it.",
        ar: "نعم، وهو جواب جيد أكثر مما يتوقع الناس. فتحصل على الرحلة البرية مرة لا مرتين، وتستغرق العودة ساعتين بدل يوم. ويُسعَّر كل اتجاه على حدة، فأخبرنا بالتركيبة التي تريدها ونُسعّرها.",
      },
    },
  ],

  related: [
    {
      routeKey: "alula",
      label: { en: "AlUla transfers", ar: "التوصيل في العلا" },
      note: {
        en: "Once you arrive: AlUla airport, the town, the Old Town, Hegra and Elephant Rock.",
        ar: "بعد الوصول: مطار العلا والمدينة والبلدة القديمة والحِجر وصخرة الفيل.",
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
      routeKey: "riyadhToHail",
      label: { en: "Riyadh to Hail", ar: "الرياض إلى حائل" },
      note: {
        en: "The overnight stage on this road, and the page that explains how to plan the day.",
        ar: "مرحلة المبيت على هذا الطريق، والصفحة التي تشرح كيف تخطط اليوم.",
      },
    },
    {
      routeKey: "riyadhToBuraydah",
      label: { en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" },
      note: {
        en: "The first stage north, and the practical stop on the way.",
        ar: "المرحلة الأولى شمالًا، والتوقف العملي في الطريق.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Drive, fly, or both", ar: "برًّا أم جوًّا أم كليهما" },
    heading: {
      en: "Tell us how you want to reach AlUla",
      ar: "أخبرنا كيف تريد الوصول إلى العُلا",
    },
    body: {
      en: "The full drive, two days with a night in Hail, or just the airport transfers if you are flying. Send the dates and the party and we reply with a written price.",
      ar: "الرحلة البرية الكاملة أو يومان بليلة في حائل أو النقل من المطار فقط إن كنت مسافرًا جوًّا. أرسل التواريخ وتفاصيل المجموعة ونرد بسعر مكتوب.",
    },
    button: { en: "Get an AlUla quote", ar: "اطلب سعر رحلة العُلا" },
  },
};
