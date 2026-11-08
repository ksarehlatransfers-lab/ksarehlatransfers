import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Shaqra — Riyadh Region destination hub.
 *
 * A historic Najdi town in Al-Washm, 180 km north-west of Riyadh on one main
 * road, with a second heritage stop — Ushaiqer — 18 km further north. The
 * page is a **road-trip narrative**: one road, two heritage towns, and the
 * practical journeys (university, family, heritage day trips) that use it.
 *
 * Facts (local research folder, riyadh-region/02), all Saudipedia unless
 * noted:
 * - Governorate of Riyadh Province, 180 km north-west of Riyadh; population
 *   46,403 (2022 census); Shaqra University; King Khalid airport ~178 km;
 *   Road No. 50 is the main way in and out.
 * - Heritage town: wall dating to 1817, watchtowers, a dam, old wells
 *   (Saudipedia, citing the Heritage Commission).
 * - Ushaiqer: ~18 km north of Shaqra, ~200 km from Riyadh; first inhabited
 *   ~1,500 years ago; mud houses, walls, mosques, a residents' museum.
 * - "Around two hours" by road is an estimate from travel guides.
 *
 * Deliberately absent: a recurring commuter service (owner position across
 * the site), bus or rail timetables, entry fees, prices, partner claims.
 */

type B = Bilingual<string>;

export type ShaqraContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  ushaiqerImageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B; caption: B };
  road: {
    heading: B;
    lead: B;
    stops: { name: B; km: string; note: B }[];
    estimate: B;
    footnote: B;
  };
  heritage: {
    heading: B;
    lead: B;
    stops: { name: B; summary: B; points: B[] }[];
    dayTrip: B;
  };
  reasons: { heading: B; items: { title: B; detail: B }[]; limit: B };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const shaqra: ShaqraContent = {
  routeKey: "shaqra",
  imageKey: "dest-shaqra",
  ushaiqerImageKey: "shaqra-ushaiqer",

  seo: {
    title: {
      en: "Riyadh to Shaqra Private Transfer | Shaqra and Ushaiqer",
      ar: "توصيل من الرياض إلى شقراء وأشيقر | نقل خاص بسيارة",
    },
    description: {
      en: "Private car from Riyadh to Shaqra, 180 km north-west on Road No. 50, and on to Ushaiqer heritage village — university, family or day trips. Get a written quote.",
      ar: "نقل خاص من الرياض إلى شقراء على بعد 180 كم شمال غرب العاصمة، ثم إلى قرية أشيقر التراثية: رحلات الجامعة والزيارات العائلية والتراثية. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Shaqra", ar: "شقراء" },

  hero: {
    eyebrow: { en: "Riyadh Region · Al-Washm", ar: "منطقة الرياض · الوشم" },
    h1: {
      en: "Private transfers from Riyadh to Shaqra",
      ar: "نقل خاص من الرياض إلى شقراء",
    },
    lead: {
      en: "One road, 180 km north-west of the capital, to a mudbrick town in Al-Washm — and a second heritage town, Ushaiqer, 18 km beyond it. A journey for a university, a family visit or a day spent among old walls and towers.",
      ar: "طريق واحد يمتد 180 كم شمال غرب العاصمة إلى بلدة طينية عريقة في الوشم، وبعدها بـ18 كم بلدة تراثية ثانية هي أشيقر. رحلة لزيارة الجامعة أو الأهل أو ليوم بين الأسوار والأبراج القديمة.",
    },
    caption: {
      en: "The old town of Shaqra: ruined walls and towers at the edge of the modern city.",
      ar: "البلدة القديمة في شقراء: أطلال الأسوار والأبراج على طرف المدينة الحديثة.",
    },
  },

  road: {
    heading: {
      en: "The road: Riyadh, Shaqra, Ushaiqer",
      ar: "الطريق: الرياض ثم شقراء ثم أشيقر",
    },
    lead: {
      en: "Road No. 50 is the main way in and out of Shaqra. Most of the journey is the open road between the capital and Al-Washm.",
      ar: "الطريق رقم 50 هو الطريق الرئيسي من شقراء وإليها، ومعظم الرحلة طريق مفتوح بين العاصمة والوشم.",
    },
    stops: [
      {
        name: { en: "Riyadh", ar: "الرياض" },
        km: "0",
        note: {
          en: "Any address, or King Khalid airport, about 178 km from Shaqra.",
          ar: "أي عنوان، أو مطار الملك خالد الذي يبعد نحو 178 كم عن شقراء.",
        },
      },
      {
        name: { en: "Shaqra", ar: "شقراء" },
        km: "180",
        note: {
          en: "The governorate centre: the heritage town, Shaqra University and the modern city.",
          ar: "مركز المحافظة: البلدة التراثية وجامعة شقراء والمدينة الحديثة.",
        },
      },
      {
        name: { en: "Ushaiqer", ar: "أشيقر" },
        km: "+18",
        note: {
          en: "About 18 km north of Shaqra — the heritage village and palm farms.",
          ar: "على بعد نحو 18 كم شمال شقراء، وفيها القرية التراثية ومزارع النخيل.",
        },
      },
    ],
    estimate: {
      en: "Around two hours each way by road, as an estimate.",
      ar: "نحو ساعتين في كل اتجاه برًّا، تقديرًا.",
    },
    footnote: {
      en: "Distances are the published figures from Riyadh. The distance you drive depends on where in Riyadh you start, and we quote on your actual addresses.",
      ar: "المسافات هي الأرقام المنشورة من الرياض، والمسافة التي تقطعها تعتمد على نقطة انطلاقك في الرياض، ونحن نُسعّر على عناوينك الفعلية.",
    },
  },

  heritage: {
    heading: {
      en: "Two heritage towns, one journey",
      ar: "بلدتان تراثيتان في رحلة واحدة",
    },
    lead: {
      en: "Shaqra and Ushaiqer are close enough to see on the same day — two different scales of Najdi mudbrick building.",
      ar: "شقراء وأشيقر قريبتان بما يكفي لزيارتهما في يوم واحد، وهما مستويان مختلفان من العمارة النجدية الطينية.",
    },
    stops: [
      {
        name: { en: "Shaqra heritage town", ar: "البلدة التراثية في شقراء" },
        summary: {
          en: "The historic centre of the governorate, rehabilitated as a heritage district.",
          ar: "المركز التاريخي للمحافظة، وقد أُعيد تأهيله حيًّا تراثيًا.",
        },
        points: [
          { en: "A town wall dating back to 1817", ar: "سور يعود إلى عام 1817" },
          { en: "Watchtowers, a dam and old wells", ar: "أبراج مراقبة وسد وآبار قديمة" },
          { en: "Palaces and houses in the historic belt", ar: "قصور وبيوت في الحزام التاريخي" },
        ],
      },
      {
        name: { en: "Ushaiqer heritage village", ar: "قرية أشيقر التراثية" },
        summary: {
          en: "A walled village first inhabited around 1,500 years ago, 18 km north of Shaqra.",
          ar: "قرية مسوّرة سُكنت أول مرة قبل نحو 1,500 عام، على بعد 18 كم شمال شقراء.",
        },
        points: [
          { en: "Winding lanes through hundreds of mud houses", ar: "أزقة متعرجة بين مئات البيوت الطينية" },
          { en: "Old mosques, wells and al-Wuhaibi House", ar: "مساجد وآبار قديمة وبيت الوهيبي" },
          { en: "A museum set up by residents", ar: "متحف أسسه الأهالي" },
        ],
      },
    ],
    dayTrip: {
      en: "For a day trip, send the order you want to visit them in and the time you want to be back in Riyadh. We quote the whole day's driving together.",
      ar: "لرحلة اليوم الواحد، أرسل الترتيب الذي تريد زيارتهما به والوقت الذي تريد العودة فيه إلى الرياض، ونُسعّر قيادة اليوم كله معًا.",
    },
  },

  reasons: {
    heading: {
      en: "Why people make the journey",
      ar: "لماذا يقوم الناس بهذه الرحلة",
    },
    items: [
      {
        title: { en: "Shaqra University", ar: "جامعة شقراء" },
        detail: {
          en: "Arrival at the start of a term, a graduation, or moving belongings — give us the campus or address you are going to.",
          ar: "الوصول في بداية الفصل الدراسي أو حفل التخرج أو نقل الأغراض الشخصية، فزوّدنا بالمقر أو العنوان الذي تقصده.",
        },
      },
      {
        title: { en: "Family visits", ar: "زيارة الأهل" },
        detail: {
          en: "A private car for the whole family and its luggage, from your door in Riyadh to theirs in Shaqra.",
          ar: "سيارة خاصة للعائلة كلها وأمتعتها، من بابك في الرياض إلى بابهم في شقراء.",
        },
      },
      {
        title: { en: "A heritage day out", ar: "يوم تراثي" },
        detail: {
          en: "Shaqra's old town and Ushaiqer in one day, returning to Riyadh in the evening.",
          ar: "البلدة القديمة في شقراء وأشيقر في يوم واحد، والعودة إلى الرياض مساءً.",
        },
      },
    ],
    limit: {
      en: "We quote individual journeys. We do not run a daily commuting service between Riyadh and Shaqra.",
      ar: "نُسعّر الرحلات الفردية، ولا نقدّم خدمة توصيل يومية منتظمة بين الرياض وشقراء.",
    },
  },

  quotation: {
    heading: { en: "How the quotation works", ar: "كيف يُعدّ عرض السعر" },
    items: [
      {
        en: "Send the Riyadh pickup, the address in Shaqra or Ushaiqer, the date and time, how many passengers and suitcases, and any return.",
        ar: "أرسل نقطة الانطلاق في الرياض والعنوان في شقراء أو أشيقر والتاريخ والوقت وعدد الركاب والحقائب، وموعد العودة إن وُجدت.",
      },
      {
        en: "We reply with a written price and the vehicle category. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة، ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
      {
        en: "No prices are published here, and nothing is added after you accept.",
        ar: "لا ننشر أسعارًا هنا، ولا يُضاف شيء بعد موافقتك.",
      },
    ],
  },

  faqHeading: { en: "Riyadh to Shaqra: common questions", ar: "من الرياض إلى شقراء: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Shaqra from Riyadh?", ar: "من الرياض إلى شقراء كم كيلو؟" },
      answer: {
        en: "About 180 km north-west of the capital. Road No. 50 is the main road in and out of Shaqra. Allow around two hours each way as an estimate; where in Riyadh you start makes a difference.",
        ar: "نحو 180 كم شمال غرب العاصمة، والطريق رقم 50 هو الطريق الرئيسي من شقراء وإليها. احسب نحو ساعتين في كل اتجاه تقديرًا، ونقطة انطلاقك في الرياض تُحدث فرقًا.",
      },
    },
    {
      question: { en: "How far is Ushaiqer from Shaqra?", ar: "كم تبعد أشيقر عن شقراء؟" },
      answer: {
        en: "About 18 km north of Shaqra, so the two heritage towns fit comfortably into one day from Riyadh.",
        ar: "نحو 18 كم شمال شقراء، فتتسع البلدتان التراثيتان ليوم واحد من الرياض براحة.",
      },
    },
    {
      question: { en: "Can you take me from Riyadh to Shaqra University?", ar: "هل توفرون التوصيل من الرياض إلى جامعة شقراء؟" },
      answer: {
        en: "Yes, as an individual journey — for example the start of a term, a graduation or moving belongings. Give us the campus or address. We do not run a daily commuting service.",
        ar: "نعم، رحلةً فردية، مثل بداية الفصل الدراسي أو حفل التخرج أو نقل الأغراض. زوّدنا بالمقر أو العنوان، ونحن لا نقدّم خدمة توصيل يومية منتظمة.",
      },
    },
    {
      question: { en: "Is there a train or bus from Riyadh to Shaqra?", ar: "هل يوجد قطار أو باص من الرياض إلى شقراء؟" },
      answer: {
        en: "We know of no passenger railway to Shaqra; Road No. 50 is described as the main way in and out. People also ask about buses — we do not publish bus timetables, so check with the bus operator.",
        ar: "لا نعلم بوجود قطار ركاب إلى شقراء، ويوصف الطريق رقم 50 بأنه الطريق الرئيسي منها وإليها. ويسأل الناس عن الحافلات أيضًا، ونحن لا ننشر جداولها، فتحقق لدى مشغّل الحافلات.",
      },
    },
    {
      question: { en: "Can I visit Shaqra and Ushaiqer in one day from Riyadh?", ar: "هل يمكن زيارة شقراء وأشيقر في يوم واحد من الرياض؟" },
      answer: {
        en: "Yes. Send the order you want and the time you want to be back in Riyadh, and the day's driving is quoted together.",
        ar: "نعم. أرسل الترتيب الذي تريده والوقت الذي تريد العودة فيه إلى الرياض، وتُسعَّر قيادة اليوم كله معًا.",
      },
    },
  ],

  related: [
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "The capital's hub: airport, railway stations, hotels and intercity routes.",
        ar: "صفحة العاصمة: المطار ومحطات القطار والفنادق والمسارات بين المدن.",
      },
    },
    {
      routeKey: "riyadhToHail",
      label: { en: "Riyadh to Hail", ar: "الرياض إلى حائل" },
      note: {
        en: "One of the two published routes to Hail runs west through Shaqra.",
        ar: "أحد المسارين المنشورين إلى حائل يمر غربًا عبر شقراء.",
      },
    },
    {
      routeKey: "diriyah",
      label: { en: "Diriyah", ar: "الدرعية" },
      note: {
        en: "Najdi mudbrick heritage on Riyadh's own doorstep, at At-Turaif.",
        ar: "التراث النجدي الطيني على أطراف الرياض في حي الطريف.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "180 km north-west", ar: "180 كم شمال غرب الرياض" },
    heading: { en: "Request a Riyadh–Shaqra quotation", ar: "اطلب عرض سعر للتوصيل من الرياض إلى شقراء" },
    body: {
      en: "Your Riyadh pickup, the address in Shaqra or Ushaiqer, the date, and whether you are coming back the same day. We reply with a written price.",
      ar: "نقطة انطلاقك في الرياض والعنوان في شقراء أو أشيقر والتاريخ، وهل ستعود في اليوم نفسه. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Shaqra quote", ar: "اطلب سعر رحلة شقراء" },
  },
};
