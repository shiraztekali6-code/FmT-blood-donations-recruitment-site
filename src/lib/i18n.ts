export type Language = "he" | "en" | "yi" | "am";

export const DEFAULT_LANGUAGE: Language = "he";

export function isLanguage(value: unknown): value is Language {
  return value === "he" || value === "en" || value === "yi" || value === "am";
}

export const translations = {
  he: {
    meta: {
      title: "מחקר הריון ותסמונת דאון | אוניברסיטת בר-אילן"
    },
    nav: {
      study: "המחקר",
      why: "למה זה חשוב",
      join: "הצטרפות",
      languageLabel: "בחירת שפה",
      primaryLabel: "ניווט ראשי"
    },
    brand: {
      title: "המעבדה לחקר מחלת האלצהיימר על שם פול פדר באוניברסיטת בר-אילן",
      subtitle: "גיוס משתתפות למחקר"
    },
    hero: {
      eyebrow: "מחקר באוניברסיטת בר-אילן",
      title: "כל אמא נושאת איתה סיפור.\nחלק מהסיפורים יכולים לשנות את המדע.",
      subtitle: [
        "במהלך ההריון נוצרת מערכת יחסים ביולוגית ייחודית בין האם לעובר.",
        "במעבדתו של פרופ' איתן אוקון באוניברסיטת בר-אילן אנו חוקרים האם חומרים ביולוגיים העוברים מהעובר לאם במהלך ההריון עשויים להשפיע על בריאות המוח שנים רבות לאחר מכן.",
        "אם את אם לילד או ילדה עם תסמונת דאון, נשמח להזמין אותך לקחת חלק במחקר שעשוי לסייע בהבנת הקשר בין הריון, תסמונת דאון ומחלת האלצהיימר."
      ],
      impact:
        "תרומת דם אחת יכולה לעזור לנו להתקרב לתשובות על שאלות שעדיין אינן פתורות.",
      primaryCta: "הצטרפי למחקר",
      secondaryCta: "למה המחקר חשוב?"
    },
    video: {
      title: "",
      subtitle: "",
      placeholderTitle: "מקום שמור לסרטון הזמנה אישי",
      placeholderHeading: "כאן יופיע סרטון ההזמנה",
      placeholderText:
        "כאשר הסרטון יהיה מוכן, הוא יוצג כאן ישירות באתר ללא מעבר ליוטיוב.",
      playLabel: "הפעלת סרטון ההזמנה",
      unsupported: "הדפדפן שלך אינו תומך בהצגת וידאו."
    },
    research: {
      eyebrow: "למה המחקר חשוב",
      title: "מדוע אנו חוקרים אימהות לילדים עם תסמונת דאון?",
      intro: [
        "הריון כרוך בקשר ביולוגי יוצא דופן בין אם לילד. במהלך ההריון, תאים, חלבונים, DNA וחומרים ביולוגיים אחרים יכולים לעבור בין העובר לאם. חוקרים גילו שחלק מתאים עובריים אלו ניתנים לזיהוי בגוף האם במשך שנים רבות.",
        "מספר מחקרים הבחינו בהבדלים בבריאות המוח לטווח ארוך בקרב אימהות לילדים עם תסמונת דאון, אך הגורמים הביולוגיים העומדים בבסיס ממצאים אלה עדיין אינם מובנים היטב. אנו מעוניינים גם להבין האם תהליכים ביולוגיים אלה עשויים להיות רלוונטיים למצבים הקשורים להזדקנות המוח, כולל מחלת האלצהיימר.",
        "מחקרנו שואף לבחון האם אותות ביולוגיים המוחלפים במהלך ההריון עשויים לתרום לבריאות האם לטווח ארוך. על ידי לימוד תהליכים אלה, אנו מקווים לקדם את ההבנה המדעית של הריון, הזדקנות ובריאות המוח, ולתמוך במחקר עתידי בתחום זה.",
        "אם את אם לילד עם תסמונת דאון, השתתפותך עשויה לסייע בקידום המחקר בנושא הריון, בריאות האם ובריאות המוח לטווח ארוך."
      ],
      cards: [
        {
          title: "נשים ובריאות המוח",
          text: "הבנת הגורמים המשפיעים על בריאות המוח של נשים לאורך החיים היא תחום חשוב במחקר הרפואי."
        },
        {
          title: "תסמונת דאון ובריאות האם",
          text: "מחקרים קודמים זיהו הבדלים בבריאות המוח לטווח ארוך בקרב אימהות לילדים עם תסמונת דאון, מה שהדגיש שאלות חשובות למחקר נוסף."
        },
        {
          title: "קשר בין אם לעובר",
          text: "במהלך ההריון, תאים וחומרים ביולוגיים יכולים לעבור מהעובר לגוף האם."
        },
        {
          title: "המחקר שלנו",
          text: "ממצאים ראשוניים מצביעים על כך שחומרים ביולוגיים המוחלפים במהלך ההריון עשויים להישאר ניתנים לגילוי אצל אימהות במשך שנים רבות."
        },
        {
          title: "מה אנו חוקרים",
          text: "האם תהליכים אלה עשויים להיות קשורים לבריאות המוח של האם לאורך כל החיים."
        }
      ],
      closing:
        "השתתפותך יכולה לעזור לחוקרים להבין טוב יותר כיצד הריון עשוי להשפיע על בריאות האם ובריאות המוח לאורך כל החיים."
    },
    participation: {
      eyebrow: "השתתפות והרשמה",
      title: "מי יכולה להשתתף?",
      eligibility: [
        "אם לילד עם תסמונת דאון",
        "גיל 18 ומעלה",
        "נכונות לתרום דגימת דם"
      ],
      involvementTitle: "מה כרוכה בהשתתפות?",
      involvement: [
        "תרומת דם אחת",
        "שאלון קצר",
        "כ-15-30 דקות מזמנך",
        "יצירת קשר עתידית אופציונלית בנוגע למחקרים קשורים"
      ],
      whyTitle: "למה להשתתף?",
      whyIntro: "ההשתתפות שלך יכולה לעזור לנו:",
      reasons: [
        "להבין טוב יותר את ההשפעות הביולוגיות ארוכות הטווח של ההריון",
        "לזהות סמנים ביולוגיים שעשויים להיות קשורים לסיכון למחלת אלצהיימר",
        "לקדם מחקר שעשוי בעתיד לסייע בזיהוי מוקדם יותר של המחלה",
        "להרחיב את הידע על בריאות נשים לאורך החיים"
      ],
      final:
        "כל תרומת דם מייצגת סיפור אישי, ומסייעת לנו להתקרב להבנת שאלות שעדיין אינן פתורות."
    },
    form: {
      eyebrow: "טופס הרשמה",
      title: "נשמח לדעת באם את מעוניינת לקבל מידע נוסף או להצטרף למחקר",
      description:
        "תודה ששקלת להשתתף. לאחר שתגישי טופס זה, צוות המחקר עשוי ליצור איתך קשר כדי לדון בזכאות ובקביעת מועד. רישום אינו מבטיח זכאות.",
      eligibilityTitle: "מי יכולה להשתתף?",
      eligibility: [
        "אם לילד עם תסמונת דאון",
        "גיל 18 ומעלה",
        "נכונות לתרום דגימת דם"
      ],
      involvementTitle: "מה כרוכה בהשתתפות?",
      involvement: [
        "תרומת דם אחת",
        "שאלון קצר",
        "כ-15-30 דקות מזמנך",
        "יצירת קשר עתידית אופציונלית בנוגע למחקרים קשורים"
      ],
      fields: {
        fullName: "שם מלא",
        email: "אימייל",
        phone: "מספר טלפון",
        city: "עיר",
        ageRange: "טווח גיל",
        childAgeRange: "טווח גיל הילד/ה",
        preferredContact: "דרך מועדפת ליצירת קשר",
        comments: "הערות נוספות"
      },
      placeholders: {
        select: "בחרי אפשרות",
        comments: "אפשר לציין העדפות תיאום, שאלות או מידע שחשוב לך לשתף."
      },
      contactMethods: {
        Email: "אימייל",
        Phone: "טלפון",
        Either: "אין העדפה"
      },
      consentTitle: "אני מסכימה שצוות המחקר יצור איתי קשר בנוגע למחקר זה.",
      consentHelper: "הסכמה זו מאפשרת לצוות לפנות אלייך לגבי התאמה, תיאום והמשך התהליך.",
      submit: "שליחת הרשמה",
      submitting: "שולחת...",
      duplicate:
        "הטופס כבר נשלח עם אותם פרטים. אנא המתיני לפני שליחה חוזרת של אותם נתונים.",
      consentRequired: "אנא אשרי יצירת קשר כדי שצוות המחקר יוכל לפנות אלייך בנוגע למחקר.",
      genericError: "משהו השתבש בשליחת הטופס. אנא נסי שוב בעוד רגע.",
      successFallback:
        "תודה שפנית אלינו. קיבלנו את התעניינותך, והודעת אישור נשלחה אלייך. אם המחקר עשוי להתאים, צוות המחקר עשוי ליצור איתך קשר בהמשך עם פרטים נוספים.",
    },
    footer: {
      credit: "בתודה לאימהות ולמשפחות שמאפשרות מחקר מדעי משמעותי."
    },
    api: {
      invalidBody: "הבקשה אינה תקינה. אנא שלחי את הטופס שוב.",
      missingConfig: "מערכת ההרשמה עדיין אינה מוגדרת במלואה. אנא פני למנהל האתר.",
      unreachable: "שירות ההרשמה אינו זמין כרגע. אנא נסי שוב בעוד כמה דקות.",
      defaultSuccess:
        "תודה שפנית אלינו. קיבלנו את התעניינותך, והודעת אישור נשלחה אלייך. אם המחקר עשוי להתאים, צוות המחקר עשוי ליצור איתך קשר בהמשך עם פרטים נוספים.",
      errors: {
        sheet_write_failed: "לא הצלחנו לשמור את ההרשמה במערכת המחקר.",
        sheet_unavailable: "מערכת ההרשמה אינה זמינה כרגע. אנא נסי שוב בקרוב.",
        validation_error: "חלק מהפרטים בטופס דורשים תיקון. אנא בדקי ושלחי שוב.",
        email_failed: "לא ניתן היה להשלים את ההרשמה עקב בעיה בשליחת אימייל.",
        unauthorized: "אירעה בעיית אימות בשירות ההרשמה. אנא פני למנהל האתר.",
        misconfigured: "שירות ההרשמה אינו מוגדר במלואו. אנא פני למנהל האתר.",
        apps_script_access_denied:
          "שירות ההרשמה מחובר, אך אין לו הרשאת גישה לפריסת Google Apps Script. אנא פני למנהל האתר.",
        default: "לא ניתן לשלוח את ההרשמה כרגע. אנא נסי שוב בעוד רגע."
      }
    },
    validation: {
      invalidPayload: "פרטי ההרשמה אינם תקינים.",
      fullName: "יש להזין שם מלא.",
      email: "יש להזין כתובת אימייל תקינה.",
      phone: "יש להזין מספר טלפון תקין.",
      city: "יש להזין עיר.",
      ageRange: "יש לבחור טווח גיל תקין.",
      childAgeRange: "יש לבחור טווח גיל תקין עבור הילד/ה.",
      preferredContact: "יש לבחור דרך תקינה ליצירת קשר.",
      consent: "יש לאשר יצירת קשר על מנת שצוות המחקר יוכל לפנות אלייך."
    }
  },
  en: {
    meta: {
      title: "Down Syndrome Pregnancy Research Study | Bar-Ilan University"
    },
    nav: {
      study: "Study",
      why: "Why It Matters",
      join: "Join",
      languageLabel: "Language selection",
      primaryLabel: "Primary navigation"
    },
    brand: {
      title: "The Paul Feder Laboratory for Alzheimer's Disease Research at Bar-Ilan University",
      subtitle: "Research Recruitment"
    },
    hero: {
      eyebrow: "Bar-Ilan University Research Study",
      title: "Every Mother Carries a Story. Some Stories Can Change Science.",
      subtitle: [
        "Pregnancy creates a lifelong biological connection between mother and child.",
        "Researchers in Prof. Eitan Okun's laboratory at Bar-Ilan University are investigating whether biological signals transferred during pregnancy may influence maternal brain health years later.",
        "If you are the mother of a child with Down syndrome, your participation could help advance research into the relationship between pregnancy, Down syndrome, and Alzheimer's disease."
      ],
      impact:
        "One blood donation may help answer questions science has never been able to answer before.",
      primaryCta: "Join the Study",
      secondaryCta: "Why This Matters"
    },
    video: {
      title: "",
      subtitle: "",
      placeholderTitle: "Reserved space for a personal invitation video",
      placeholderHeading: "The invitation video will appear here",
      placeholderText:
        "When the video is ready, it will play directly on this website without sending visitors to YouTube.",
      playLabel: "Play the invitation video",
      unsupported: "Your browser does not support embedded video."
    },
    research: {
      eyebrow: "Why This Research Matters",
      title: "Why Are We Studying Mothers of Children with Down Syndrome?",
      intro: [
        "Pregnancy involves an extraordinary biological connection between mother and child. During pregnancy, cells, proteins, DNA, and other biological materials can pass between the fetus and the mother. Researchers have found that some fetal cells can be detected in the mother's body many years later.",
        "Several studies have observed differences in long-term brain health among mothers of children with Down syndrome, but the biological factors underlying these findings are still not well understood. We are also interested in understanding whether these biological processes may be relevant to conditions related to brain aging, including Alzheimer's disease.",
        "Our research aims to examine whether biological signals exchanged during pregnancy may contribute to long-term maternal health. By studying these processes, we hope to advance scientific understanding of pregnancy, aging, and brain health, and to support future research in this field.",
        "If you are the mother of a child with Down syndrome, your participation may help advance research on pregnancy, maternal health, and long-term brain health."
      ],
      cards: [
        {
          title: "Women & Brain Health",
          text: "Understanding the factors that influence women's brain health across the lifespan is an important area of medical research."
        },
        {
          title: "Down Syndrome & Maternal Health",
          text: "Previous studies have identified differences in long-term brain health among mothers of children with Down syndrome, highlighting important questions for further research."
        },
        {
          title: "Mother-Fetus Connection",
          text: "During pregnancy, cells and biological materials can pass from the fetus into the mother's body."
        },
        {
          title: "Our Research",
          text: "Preliminary findings suggest that biological materials exchanged during pregnancy may remain detectable in mothers for many years."
        },
        {
          title: "What We Are Investigating",
          text: "Whether these processes may be related to maternal brain health across the lifespan."
        }
      ],
      closing:
        "Your participation can help researchers better understand how pregnancy may influence maternal health and brain health across the lifespan."
    },
    participation: {
      eyebrow: "Participation & Registration",
      title: "Who Can Participate?",
      eligibility: [
        "Mother of a child with Down syndrome",
        "Age 18 or older",
        "Willing to donate a blood sample"
      ],
      involvementTitle: "What Does Participation Involve?",
      involvement: [
        "One blood donation",
        "A short questionnaire",
        "Approximately 15-30 minutes of your time",
        "Optional future contact regarding related studies"
      ],
      whyTitle: "Why Participate?",
      whyIntro: "Your participation may help us:",
      reasons: [
        "Better understand the long-term biological effects of pregnancy",
        "Identify biological markers that may be associated with Alzheimer's disease risk",
        "Advance research that may one day support earlier detection",
        "Expand knowledge about women's health across the lifespan"
      ],
      final:
        "Every blood sample represents a personal story and helps us move closer to understanding questions that remain unanswered."
    },
    form: {
      eyebrow: "Registration Form",
      title: "We would be happy to know if you are interested in receiving more information or joining the study",
      description:
        "Thank you for considering participation. After you submit this form, the research team may contact you to discuss eligibility and scheduling. Registration does not guarantee eligibility.",
      eligibilityTitle: "Who Can Participate?",
      eligibility: [
        "Mother of a child with Down syndrome",
        "Age 18 or older",
        "Willing to donate a blood sample"
      ],
      involvementTitle: "What Does Participation Involve?",
      involvement: [
        "One blood donation",
        "A short questionnaire",
        "Approximately 15-30 minutes of your time",
        "Optional future contact regarding related studies"
      ],
      fields: {
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        city: "City",
        ageRange: "Age Range",
        childAgeRange: "Child's Age Range",
        preferredContact: "Preferred Contact Method",
        comments: "Additional Comments"
      },
      placeholders: {
        select: "Select one",
        comments: "Share any preferences, questions, or scheduling notes."
      },
      contactMethods: {
        Email: "Email",
        Phone: "Phone",
        Either: "Either"
      },
      consentTitle: "I agree to be contacted by the research team regarding this study.",
      consentHelper: "This lets the team follow up about eligibility, scheduling, and next steps.",
      submit: "Register Your Interest",
      submitting: "Submitting...",
      duplicate:
        "This registration was already submitted. Please wait before submitting the same details again.",
      consentRequired: "Please provide consent so the research team can contact you about this study.",
      genericError: "Something went wrong while submitting your form. Please try again in a moment.",
      successFallback:
        "Thank you for reaching out. We have received your interest, and a confirmation email has been sent. If the study may be a good fit, our research team may contact you with more information.",
    },
    footer: {
      credit: "With gratitude to the mothers and families who make meaningful scientific research possible."
    },
    api: {
      invalidBody: "Invalid request body. Please submit the form again.",
      missingConfig:
        "Registration backend is not configured. Please set environment variables and try again.",
      unreachable:
        "The registration service is temporarily unreachable. Please try again in a few minutes.",
      defaultSuccess:
        "Thank you for reaching out. We have received your interest, and a confirmation email has been sent. If the study may be a good fit, our research team may contact you with more information.",
      errors: {
        sheet_write_failed: "We could not save your registration to the study database.",
        sheet_unavailable: "Our registration system is temporarily unavailable. Please try again shortly.",
        validation_error: "Some details in your form need correction. Please review and submit again.",
        email_failed:
          "Your registration could not be completed due to an email service issue. Please try again shortly.",
        unauthorized: "Registration service authentication failed. Please contact the site administrator.",
        misconfigured: "Registration service is not fully configured yet. Please contact the site administrator.",
        apps_script_access_denied:
          "The registration service is connected, but the Google Apps Script deployment is blocking access. Please contact the site administrator.",
        default: "Unable to submit your registration right now. Please try again in a moment."
      }
    },
    validation: {
      invalidPayload: "Invalid submission payload.",
      fullName: "Full name is required.",
      email: "Please provide a valid email address.",
      phone: "Please provide a valid phone number.",
      city: "City is required.",
      ageRange: "Please select a valid age range.",
      childAgeRange: "Please select a valid child age range.",
      preferredContact: "Please select a valid preferred contact method.",
      consent: "Please provide consent so the research team can contact you."
    }
  },
  yi: {
    meta: {
      title: "פֿאָרשונג וועגן טראָגן און דאון־סינדראָם | בר־אילן אוניווערסיטעט"
    },
    nav: {
      study: "די שטודיע",
      why: "פֿאַרוואָס דאָס איז וויכטיק",
      join: "אָנטיילנעמען",
      languageLabel: "שפּראַך אויסקלייבן",
      primaryLabel: "הויפּט־נאַוויגאַציע"
    },
    brand: {
      title: "די פּאָל פֿעדער לאַבאָראַטאָריע פֿאַר אַלצהיימער־פֿאָרשונג אין בר־אילן אוניווערסיטעט",
      subtitle: "אײַנלאַדונג צו אָנטיילנעמען אין פֿאָרשונג"
    },
    hero: {
      eyebrow: "פֿאָרשונג אין בר־אילן אוניווערסיטעט",
      title: "יעדע מוטער טראָגט אַ מעשׂה.\nעטלעכע מעשׂיות קענען טוישן די וויסנשאַפֿט.",
      subtitle: [
        "בעתן טראָגן ווערט געשאַפֿן אַ לאַנגדויערדיקע ביאָלאָגישע פֿאַרבינדונג צווישן מוטער און קינד.",
        "אין דער לאַבאָראַטאָריע פֿון פּראָפֿ׳ איתן אוקון אין בר־אילן אוניווערסיטעט פֿאָרשן מיר צי ביאָלאָגישע סימנים וואָס ווערן איבערגעגעבן בעתן טראָגן קענען האָבן שײַכות צום מוח־געזונט פֿון דער מוטער יאָרן שפּעטער.",
        "אויב איר זענט אַ מוטער פֿון אַ קינד מיט דאון־סינדראָם, קען אײַער אָנטיילנעמען העלפֿן פֿאָרויסרוקן וויכטיקע פֿאָרשונג וועגן טראָגן, דאון־סינדראָם און אַלצהיימער־קרענק."
      ],
      impact:
        "איין בלוט־שענקונג קען העלפֿן אונדז זיך דערנענטערן צו ענטפֿערס אויף פֿראַגעס וואָס זענען נאָך נישט געלייזט.",
      primaryCta: "נעמט אָנטייל",
      secondaryCta: "פֿאַרוואָס איז דאָס וויכטיק?"
    },
    video: {
      title: "",
      subtitle: "",
      placeholderTitle: "אָרט פֿאַר אַ פּערזענלעכן אײַנלאַדונג־ווידעאָ",
      placeholderHeading: "דאָ וועט דער אײַנלאַדונג־ווידעאָ דערשײַנען",
      placeholderText:
        "ווען דער ווידעאָ וועט זײַן גרייט, וועט מען אים קענען זען גלײַך אויף דער וועבזײַט.",
      playLabel: "שפּילן דעם אײַנלאַדונג־ווידעאָ",
      unsupported: "אײַער בלעטערער שטיצט נישט embedded ווידעאָ."
    },
    research: {
      eyebrow: "פֿאַרוואָס די פֿאָרשונג איז וויכטיק",
      title: "פארוואס שטודירן מיר מוטערס פון קינדער מיט דאון־סינדראָם?",
      intro: [
        "ווען אַ פרוי איז אַ מעוברת האָט זי אַ יוצא־דופן ביאָלאָגישער פֿאַרבינדונג מיט דעם קינד. בעתן טראָגן קענען צעלן (תאים), פּראָטעינען (חלבונים), דנ״אַ (DNA), און אַנדערע ביאָלאָגישע מאַטעריאַלן טוישן זיך אויס צווישן דעם עובר און דער מוטער. פֿאָרשער האָבן געפֿונען אַז עטלעכע צעלן פֿונעם עובר לאָזן זיך דערקענען אויף זיכער אין דער מוטערס גוף יאָרן נאָכן קימפּעט.",
        "עטלעכע שטודיעס האָבן באַמערקט אונטערשיידן אין דעם לאַנגדויערדיקן מוח־געזונט פֿון מאַמעס פֿון קינדער מיט דאון־סינדראָם, אָבער מען האָט נאָך נישט פֿאַרשטאַנען די ביאָלאָגישע סיבות הינטער די מעדיצינישע געפֿינסן. פֿאָרשער ווילן אויך פֿאַרשטיין צי די ביאָלאָגישע פּראָצעסן זענען פֿאַרבונדן מיט מעדיצינישע צושטאַנדן וואָס האָבן שײַכות צום פֿאַרעלטערט ווערן פֿונעם מוח, ווי אַלצהיימער־קרענק.",
        "אונזער פֿאָרשונג האָט געשטעלט די מטרה אויסצופֿאָרשן צי די ידיעות וואָס ווערן איבערגעגעבן דורך די אויסגעטוישטע ביאָלאָגישע מאַטעריאַלן קענען זײַן באַהילפֿיק צום לאַנגדויערדיקן געזונט פֿון דער מוטער. דורכן שטודירן די פּראָצעסן האָפֿן מיר צו פֿאַרבעסערן דעם מעדיצינישן פֿאַרשטאַנד פֿון טראָגן און האָבן, פֿאַרעלטערט ווערן און מוח־געזונט, און צו שטיצן קומעדיקע פֿאָרשונג אין דעם תּחום.",
        "אויב איר זענט אַ מוטער פֿון אַ קינד מיט דאון־סינדראָם, קען אײַער אָנטיילנעמען העלפֿן פֿאָרויסרוקן און ווײַטערפֿירן וויכטיקע פֿאָרשונג וועגן טראָגן, מוטער־געזונט און לאַנגדויערדיקן מוח־געזונט."
      ],
      cards: [
        {
          title: "פרויען און מוח־געזונט",
          text: "צו פֿאַרשטיין די פֿאַקטאָרן וואָס ווירקן אויפֿן מוח־געזונט פֿון פרויען במשך פֿון לעבן איז אַ וויכטיקער טייל פֿון מעדיצינישער פֿאָרשונג."
        },
        {
          title: "דאון־סינדראָם און מוטער־געזונט",
          text: "פֿריִערדיקע שטודיעס האָבן געפֿונען אונטערשיידן אין דעם לאַנגדויערדיקן מוח־געזונט פֿון מוטערס פֿון קינדער מיט דאון־סינדראָם, וואָס שטעלט פֿאָר וויכטיקע פֿראַגעס פֿאַר ווײַטערדיקער פֿאָרשונג."
        },
        {
          title: "די פֿאַרבינדונג צווישן מוטער און עובר",
          text: "בעתן טראָגן קענען צעלן און אַנדערע ביאָלאָגישע מאַטעריאַלן אַריבערגיין פֿון דעם עובר אין דעם גוף פֿון דער מוטער."
        },
        {
          title: "אונזער פֿאָרשונג",
          text: "ערשטיקע געפֿינסן ווייזן אָן אַז די אויסגעטוישטע ביאָלאָגישע מאַטעריאַלן בעתן טראָגן און לאָזן זיך דערקענען יאָרן נאָכן קימפּעט אין דעם גוף פֿון דער מוטער."
        },
        {
          title: "וואָס פֿאָרשן מיר?",
          text: "צי קענען די פּראָצעסן זײַן פֿאַרבונדן מיט דעם מוח־געזונט פֿון דער מוטער במשך פֿון איר לעבן."
        }
      ],
      closing:
        "אײַער אָנטיילנעמען קען העלפֿן פֿאָרשער בעסער פֿאַרשטיין ווי טראָגן קען ווירקן אויף דעם געזונט פֿון דער מוטער און איר מוח במשך פֿון איר לעבן."
    },
    participation: {
      eyebrow: "אָנטיילנעמען און אַרײַנשרײַבן",
      title: "ווער קען אָנטיילנעמען?",
      eligibility: [
        "אַ מוטער פֿון אַ קינד מיט דאון־סינדראָם",
        "18 יאָר אַלט אָדער עלטער",
        "גרייט צו שענקען אַ בלוט־טעסט"
      ],
      involvementTitle: "וואָס רעכנט אַרײַן דאָס אָנטיילנעמען?",
      involvement: [
        "איין בלוט־שענקונג",
        "אַ קורצער פֿרעגבויגן",
        "בערך 15–30 מינוט פֿון אײַער צייט",
        "אַ מעגלעכער צוקונפֿטיקער קאָנטאַקט וועגן פֿאַרבונדענע שטודיעס"
      ],
      whyTitle: "פֿאַרוואָס אָנטיילנעמען?",
      whyIntro: "אײַער אָנטיילנעמען קען העלפֿן אונדז:",
      reasons: [
        "בעסער פֿאַרשטיין לאַנגדויערדיקע ביאָלאָגישע ווירקונגען פֿון טראָגן",
        "דערקענען ביאָלאָגישע סימנים וואָס קענען האָבן שײַכות צו אַלצהיימער־ריזיקע",
        "פֿאָרויסרוקן פֿאָרשונג וואָס קען אין דער צוקונפֿט העלפֿן מיט פריערדיקער דערקענונג",
        "פֿאַרברייטערן דעם וויסן וועגן פרויען־געזונט במשך פֿון לעבן"
      ],
      final:
        "יעדע בלוט־שענקונג שטעלט פֿאָר אַ פּערזענלעכע מעשׂה און העלפֿט אונדז זיך דערנענטערן צו פֿראַגעס וואָס זענען נאָך נישט געלייזט."
    },
    form: {
      eyebrow: "אַרײַנשרײַב־פֿאָרעם",
      title: "שרײַבט אַרײַן אײַער ווילן צו אָנטיילנעמען אין דער שטודיע",
      description:
        "מיר דאַנקען אַז איר נעמט אין באַטראַכט צום אָנטיילנעמען אין אונזער פאָרשונג. נאָך דעם וואָס איר שיקט אַרײַן דעם פֿאָרעם, וועלן מיר זיך פֿאַרבינדן מיט אײַך צו שמועסן אויב איר זענט עכט פּאַסיק פֿאַר דער שטודיע און צוזאַמען פּלאַנירן אונזערע קומעדיקע שריט. דאָס אַרײַנשרײַבן אַליין זאָגט נישט צו אײַער פּאַסיקייט פֿאַר דער שטודיע.",
      eligibilityTitle: "ווער קען אָנטיילנעמען?",
      eligibility: [
        "אַ מוטער פֿון אַ קינד מיט דאון־סינדראָם",
        "18 יאָר אַלט אָדער עלטער",
        "גרייט צו שענקען אַ בלוט־טעסט"
      ],
      involvementTitle: "וואָס רעכנט אַרײַן דאָס אָנטיילנעמען?",
      involvement: [
        "איין בלוט־שענקונג",
        "אַ קורצער פֿרעגבויגן",
        "בערך 15–30 מינוט פֿון אײַער צייט",
        "אַ מעגלעכער צוקונפֿטיקער קאָנטאַקט וועגן פֿאַרבונדענע שטודיעס"
      ],
      fields: {
        fullName: "גאַנצער נאָמען",
        email: "בליצפּאָסט",
        phone: "טעלעפֿאָן־נומער",
        city: "שטאָט",
        ageRange: "עלטער־גרופּע",
        childAgeRange: "עלטער־גרופּע פֿונעם קינד",
        preferredContact: "באַפֿאָרצוגטער אופֿן פֿון קאָנטאַקט",
        comments: "נאָך באַמערקונגען"
      },
      placeholders: {
        select: "קלייבט אויס",
        comments: "איר קענט צולייגן פֿראַגעס, באַמערקונגען אָדער באַקוועמע צייטן פֿאַר קאָנטאַקט."
      },
      contactMethods: {
        Email: "בליצפּאָסט",
        Phone: "טעלעפֿאָן",
        Either: "ביידע זענען גוט"
      },
      consentTitle: "איך בין מסכים אַז דער פֿאָרשונג־צוות זאָל זיך פֿאַרבינדן מיט מיר וועגן דער שטודיע.",
      consentHelper: "די הסכמה לאָזט דעם צוות זיך פֿאַרבינדן מיט אײַך וועגן פּאַסיקייט, פּלאַנירונג און קומעדיקע שריט.",
      submit: "שיקט אַרײַן",
      submitting: "מען שיקט...",
      duplicate:
        "דער פֿאָרעם איז שוין געשיקט געוואָרן מיט די זעלבע פּרטים. ביטע וואַרט אַ מאָמענט איידער איר שיקט עס ווידער.",
      consentRequired: "ביטע גיט אײַער הסכמה, כּדי דער פֿאָרשונג־צוות זאָל קענען זיך פֿאַרבינדן מיט אײַך.",
      genericError: "עפּעס איז נישט געלונגען בײַם שיקן דעם פֿאָרעם. ביטע פּרוּווט ווידער אין אַ מאָמענט.",
      successFallback:
        "אַ דאַנק פֿאַר אײַער אינטערעס. אַ באַשטעטיקונג־בליצפּאָסט איז געשיקט געוואָרן, און דער פֿאָרשונג־צוות קען זיך פֿאַרבינדן מיט אײַך וועגן פּאַסיקייט און פּלאַנירונג.",
    },
    footer: {
      credit: "מיט דאַנק צו די מוטערס און משפּחות וואָס מאַכן וויכטיקע וויסנשאַפֿטלעכע פֿאָרשונג מעגלעך."
    },
    api: {
      invalidBody: "די בקשה איז נישט גילטיק. ביטע שיקט דעם פֿאָרעם ווידער.",
      missingConfig: "די אַרײַנשרײַב־סיסטעם איז נאָך נישט גאַנץ גרייט. ביטע פֿאַרבינדט זיך מיטן וועבזײַט־פֿאַרוואַלטער.",
      unreachable: "די אַרײַנשרײַב־סיסטעם איז איצט נישט בנמצא. ביטע פּרוּווט ווידער אין עטלעכע מינוט.",
      defaultSuccess:
        "אַ דאַנק פֿאַר אײַער אינטערעס. אַ באַשטעטיקונג־בליצפּאָסט איז געשיקט געוואָרן, און דער פֿאָרשונג־צוות קען זיך פֿאַרבינדן מיט אײַך וועגן פּאַסיקייט און פּלאַנירונג.",
      errors: {
        sheet_write_failed: "מיר האָבן נישט געקענט אָפּהיטן אײַער אַרײַנשרײַבונג אין דער פֿאָרשונג־סיסטעם.",
        sheet_unavailable: "אונזער אַרײַנשרײַב־סיסטעם איז דערווײַל נישט בנמצא. ביטע פּרוּווט ווידער באַלד.",
        validation_error: "עטלעכע פּרטים אין פֿאָרעם דאַרפֿן פֿאַרריכטונג. ביטע קוקט עס איבער און שיקט ווידער.",
        email_failed: "מען האָט נישט געקענט פֿאַרענדיקן די אַרײַנשרײַבונג צוליב אַן אימייל־פּראָבלעם.",
        unauthorized: "עס איז דאָ אַן אויטענטיפֿיקאַציע־פּראָבלעם אין דער אַרײַנשרײַב־סיסטעם.",
        misconfigured: "די אַרײַנשרײַב־סיסטעם איז נישט גאַנץ קאָנפֿיגורירט.",
        apps_script_access_denied:
          "די אַרײַנשרײַב־סיסטעם איז פֿאַרבונדן, אָבער Google Apps Script פֿאַרשפּאַרט דעם צוטריט.",
        default: "מען קען איצט נישט שיקן אײַער אַרײַנשרײַבונג. ביטע פּרוּווט ווידער אין אַ מאָמענט."
      }
    },
    validation: {
      invalidPayload: "די אַרײַנגעגעבענע פּרטים זענען נישט גילטיק.",
      fullName: "מע דאַרף אַרײַנלייגן אַ גאַנצן נאָמען.",
      email: "ביטע לייגט אַרײַן אַ גילטיקע בליצפּאָסט־אַדרעס.",
      phone: "ביטע לייגט אַרײַן אַ גילטיקן טעלעפֿאָן־נומער.",
      city: "מע דאַרף אַרײַנלייגן אַ שטאָט.",
      ageRange: "ביטע קלייבט אויס אַ גילטיקע עלטער־גרופּע.",
      childAgeRange: "ביטע קלייבט אויס אַ גילטיקע עלטער־גרופּע פֿאַרן קינד.",
      preferredContact: "ביטע קלייבט אויס אַ גילטיקן אופֿן פֿון קאָנטאַקט.",
      consent: "ביטע גיט אײַער הסכמה, כּדי דער פֿאָרשונג־צוות זאָל קענען זיך פֿאַרבינדן מיט אײַך."
    }
  },
  am: {
    meta: {
      title: "የእርግዝና እና ዳውን ሲንድሮም ምርምር | ባር-ኢላን ዩኒቨርሲቲ"
    },
    nav: {
      study: "ጥናቱ",
      why: "ለምን አስፈላጊ ነው",
      join: "ይሳተፉ",
      languageLabel: "ቋንቋ መምረጫ",
      primaryLabel: "ዋና መመሪያ"
    },
    brand: {
      title: "በባር-ኢላን ዩኒቨርሲቲ የፖል ፌደር የአልዛይመር በሽታ ምርምር ላቦራቶሪ",
      subtitle: "ለምርምር ተሳታፊዎች መመዝገቢያ"
    },
    hero: {
      eyebrow: "በባር-ኢላን ዩኒቨርሲቲ የሚካሄድ ምርምር",
      title: "እያንዳንዷ እናት ታሪክ ትሸከማለች።\nአንዳንድ ታሪኮች ሳይንስን ሊቀይሩ ይችላሉ።",
      subtitle: [
        "እርግዝና በእናትና በልጅ መካከል ልዩ የባዮሎጂ ግንኙነት የሚፈጥር ሂደት ነው።",
        "በባር-ኢላን ዩኒቨርሲቲ በፕሮፌሰር ኢታን ኦኩን ላቦራቶሪ ውስጥ፣ በእርግዝና ወቅት የሚተላለፉ ባዮሎጂያዊ ምልክቶች ከብዙ ዓመታት በኋላ በእናቶች የአእምሮ ጤና ላይ ተጽእኖ ሊኖራቸው ይችላል ወይስ የሚለውን እየመረመርን ነው።",
        "ዳውን ሲንድሮም ያለው ልጅ እናት ከሆኑ፣ ተሳትፎዎ ስለ እርግዝና፣ ዳውን ሲንድሮም እና የአልዛይመር በሽታ ግንኙነት የሚደረገውን ምርምር ለማሳደግ ሊረዳ ይችላል።"
      ],
      impact:
        "አንድ የደም ናሙና መስጠት ሳይንስ እስካሁን ሊመልሳቸው ያልቻለ ጥያቄዎችን ለመመለስ ሊረዳ ይችላል።",
      primaryCta: "በጥናቱ ይሳተፉ",
      secondaryCta: "ለምን አስፈላጊ ነው?"
    },
    video: {
      title: "",
      subtitle: "",
      placeholderTitle: "ለግል የግብዣ ቪዲዮ የተያዘ ቦታ",
      placeholderHeading: "የግብዣ ቪዲዮው እዚህ ይታያል",
      placeholderText:
        "ቪዲዮው ዝግጁ ሲሆን በዚህ ድረገጽ ላይ በቀጥታ ይታያል።",
      playLabel: "የግብዣ ቪዲዮውን አጫውት",
      unsupported: "የእርስዎ አሳሽ ቪዲዮን ማሳየት አይደግፍም።"
    },
    research: {
      eyebrow: "ለምን ይህ ምርምር አስፈላጊ ነው",
      title: "ለምን ዳውን ሲንድሮም ያላቸው ልጆች እናቶችን እናጠናለን?",
      intro: [
        "እርግዝና በእናትና በልጅ መካከል ልዩ የባዮሎጂ ግንኙነት የሚፈጥር ሂደት ነው። በእርግዝና ወቅት ሴሎች፣ ፕሮቲኖች፣ ዲኤንኤ (DNA) እና ሌሎች ባዮሎጂያዊ ንጥረ ነገሮች በፅንሱና በእናቱ መካከል ሊተላለፉ ይችላሉ። ተመራማሪዎች ከእነዚህ ንጥረ ነገሮች አንዳንዶቹ በእናቱ ሰውነት ውስጥ ለብዙ ዓመታት ሊቆዩ እንደሚችሉ አግኝተዋል።",
        "አንዳንድ ጥናቶች ዳውን ሲንድሮም ያላቸው ልጆች እናቶች መካከል በረጅም ጊዜ የአእምሮ ጤና ላይ ልዩነቶች መኖራቸውን አስተውለዋል፣ ነገር ግን ከዚህ በስተጀርባ ያሉት ባዮሎጂያዊ ምክንያቶች ገና በቂ ሁኔታ አልተገለጹም። ተመራማሪዎች እነዚህ ሂደቶች ከአእምሮ እርጅና ጋር ተያያዥ በሆኑ ሁኔታዎች፣ ጨምሮም ከአልዛይመር በሽታ ጋር፣ ግንኙነት አላቸው ወይስ የሚለውን ለማወቅ ፍላጎት አላቸው።",
        "የእኛ ምርምር በእርግዝና ወቅት የሚለዋወጡ ባዮሎጂያዊ ምልክቶች በእናቶች የረጅም ጊዜ ጤና ላይ ሚና እንዳላቸው ለመመርመር ይሞክራል። እነዚህን ሂደቶች በማጥናት ስለ እርግዝና፣ እርጅና እና የአእምሮ ጤና ያለውን ሳይንሳዊ ግንዛቤ ለማሳደግ እና በዚህ መስክ የወደፊት ምርምርን ለመደገፍ እንጠባበቃለን።",
        "ዳውን ሲንድሮም ያለው ልጅ እናት ከሆኑ፣ ተሳትፎዎ ስለ እርግዝና፣ የእናት ጤና እና የረጅም ጊዜ የአእምሮ ጤና የሚደረገውን ምርምር ለማሳደግ ሊረዳ ይችላል።"
      ],
      cards: [
        {
          title: "ሴቶች እና የአእምሮ ጤና",
          text: "በሕይወት ዘመን ሁሉ የሴቶችን የአእምሮ ጤና የሚጎዱ ወይም የሚጠብቁ ምክንያቶችን መረዳት አስፈላጊ የሕክምና ምርምር መስክ ነው።"
        },
        {
          title: "ዳውን ሲንድሮም እና የእናት ጤና",
          text: "የቀድሞ ጥናቶች ዳውን ሲንድሮም ያላቸው ልጆች እናቶች መካከል በረጅም ጊዜ የአእምሮ ጤና ላይ ልዩነቶች እንዳሉ አመልክተዋል፣ ይህም ተጨማሪ ምርምር የሚጠይቁ አስፈላጊ ጥያቄዎችን ያስነሳል።"
        },
        {
          title: "የእናትና የፅንስ ግንኙነት",
          text: "በእርግዝና ወቅት ሴሎችና ሌሎች ባዮሎጂያዊ ንጥረ ነገሮች ከፅንሱ ወደ እናቱ ሰውነት ሊተላለፉ ይችላሉ።"
        },
        {
          title: "የእኛ ምርምር",
          text: "የመጀመሪያ ግኝቶች በእርግዝና ወቅት የሚለዋወጡ አንዳንድ ባዮሎጂያዊ ንጥረ ነገሮች በእናቶች ሰውነት ውስጥ ለብዙ ዓመታት ሊቆዩ እንደሚችሉ ያመለክታሉ።"
        },
        {
          title: "ምን እየመረመርን ነው?",
          text: "እነዚህ ሂደቶች በሴቶች የአእምሮ ጤና ላይ በሕይወታቸው ዘመን ሁሉ ተያያዥነት አላቸው ወይስ የሚለውን።"
        }
      ],
      closing:
        "ተሳትፎዎ እርግዝና በእናቶች ጤናና በአእምሮ ጤና ላይ በረጅም ጊዜ እንዴት ተጽእኖ ሊኖረው እንደሚችል ተመራማሪዎች በተሻለ ሁኔታ እንዲረዱ ሊረዳ ይችላል።"
    },
    participation: {
      eyebrow: "ተሳትፎ እና መመዝገብ",
      title: "ማን ሊሳተፍ ይችላል?",
      eligibility: [
        "ዳውን ሲንድሮም ያለው ልጅ እናት",
        "18 ዓመት ወይም ከዚያ በላይ",
        "የደም ናሙና ለመስጠት ፈቃደኛ"
      ],
      involvementTitle: "ተሳትፎው ምንን ያካትታል?",
      involvement: [
        "አንድ ጊዜ የደም ናሙና መስጠት",
        "አጭር መጠይቅ መሙላት",
        "15–30 ደቂቃ ያህል ጊዜ",
        "ከተዛማጅ ጥናቶች ጋር በተያያዘ ወደፊት ሊደረግ የሚችል ግንኙነት (በፈቃድ)"
      ],
      whyTitle: "ለምን መሳተፍ?",
      whyIntro: "ተሳትፎዎ ሊረዳ ይችላል:",
      reasons: [
        "ከእርግዝና በኋላ የሚከሰቱ የረጅም ጊዜ ባዮሎጂያዊ ለውጦችን በተሻለ መረዳት",
        "ከአልዛይመር በሽታ አደጋ ጋር ሊገናኙ የሚችሉ ባዮሎጂያዊ ምልክቶችን መለየት",
        "ወደፊት ቀደም ብሎ መለየትን ሊደግፍ የሚችል ምርምርን ማሳደግ",
        "በሕይወት ዘመን ሁሉ ስለ ሴቶች ጤና ያለውን እውቀት ማስፋት"
      ],
      final:
        "እያንዳንዱ የደም ናሙና የግል ታሪክን ይወክላል እና ገና ያልተመለሱ ጥያቄዎችን ለመረዳት ያግዛል።"
    },
    form: {
      eyebrow: "የመመዝገቢያ ቅጽ",
      title: "በጥናቱ ለመሳተፍ ፍላጎትዎን ያስመዝግቡ",
      description:
        "ተሳትፎን ስለሚያስቡ እናመሰግናለን። ይህን ቅጽ ካስገቡ በኋላ የምርምር ቡድኑ ስለ ብቁነትዎ እና ስለ ቀጠሮ ለመወያየት ሊያነጋግርዎ ይችላል። መመዝገብ ብቁነትን አያረጋግጥም።",
      eligibilityTitle: "ማን ሊሳተፍ ይችላል?",
      eligibility: [
        "ዳውን ሲንድሮም ያለው ልጅ እናት",
        "18 ዓመት ወይም ከዚያ በላይ",
        "የደም ናሙና ለመስጠት ፈቃደኛ"
      ],
      involvementTitle: "ተሳትፎው ምንን ያካትታል?",
      involvement: [
        "አንድ ጊዜ የደም ናሙና መስጠት",
        "አጭር መጠይቅ መሙላት",
        "15–30 ደቂቃ ያህል ጊዜ",
        "ከተዛማጅ ጥናቶች ጋር በተያያዘ ወደፊት ሊደረግ የሚችል ግንኙነት (በፈቃድ)"
      ],
      fields: {
        fullName: "ሙሉ ስም",
        email: "ኢሜይል",
        phone: "ስልክ ቁጥር",
        city: "ከተማ",
        ageRange: "የዕድሜ ክልል",
        childAgeRange: "የልጅዎ የዕድሜ ክልል",
        preferredContact: "የሚመርጡት የግንኙነት መንገድ",
        comments: "ተጨማሪ አስተያየቶች"
      },
      placeholders: {
        select: "አንዱን ይምረጡ",
        comments: "ጥያቄዎች፣ የቀጠሮ ምርጫዎች ወይም ማካፈል የሚፈልጉትን መረጃ ይጻፉ።"
      },
      contactMethods: {
        Email: "ኢሜይል",
        Phone: "ስልክ",
        Either: "ሁለቱም"
      },
      consentTitle: "የምርምር ቡድኑ ስለዚህ ጥናት እንዲያነጋግረኝ እስማማለሁ።",
      consentHelper: "ይህ ፈቃድ ቡድኑ ስለ ብቁነት፣ ቀጠሮ እና ቀጣይ ደረጃዎች እንዲያነጋግርዎ ያስችለዋል።",
      submit: "ፍላጎትዎን ያስመዝግቡ",
      submitting: "በመላክ ላይ...",
      duplicate:
        "ይህ መመዝገቢያ በተመሳሳይ መረጃ ቀድሞ ተልኳል። እባክዎ ተመሳሳይ መረጃ እንደገና ከመላክዎ በፊት ይጠብቁ።",
      consentRequired: "የምርምር ቡድኑ ስለዚህ ጥናት እንዲያነጋግርዎ እባክዎ ፈቃድዎን ያረጋግጡ።",
      genericError: "ቅጹን በመላክ ላይ ችግር ተፈጥሯል። እባክዎ በጥቂት ጊዜ ውስጥ እንደገና ይሞክሩ።",
      successFallback:
        "ስለ ፍላጎትዎ እናመሰግናለን። የማረጋገጫ ኢሜይል ተልኳል፣ እና የምርምር ቡድኑ ስለ ብቁነት እና ስለ ቀጠሮ ሊያነጋግርዎ ይችላል።",
    },
    footer: {
      credit: "ጠቃሚ ሳይንሳዊ ምርምርን የሚያስችሉ እናቶችንና ቤተሰቦችን በምስጋና እናስታውሳለን።"
    },
    api: {
      invalidBody: "ጥያቄው ትክክል አይደለም። እባክዎ ቅጹን እንደገና ይላኩ።",
      missingConfig: "የመመዝገቢያ ስርዓቱ ገና ሙሉ በሙሉ አልተዘጋጀም። እባክዎ የድረገጹን አስተዳዳሪ ያነጋግሩ።",
      unreachable: "የመመዝገቢያ አገልግሎቱ ለጊዜው አይገኝም። እባክዎ ከጥቂት ደቂቃዎች በኋላ ይሞክሩ።",
      defaultSuccess:
        "ስለ ፍላጎትዎ እናመሰግናለን። የማረጋገጫ ኢሜይል ተልኳል፣ እና የምርምር ቡድኑ ስለ ብቁነት እና ስለ ቀጠሮ ሊያነጋግርዎ ይችላል።",
      errors: {
        sheet_write_failed: "መመዝገቢያዎን በምርምር ስርዓቱ ውስጥ ማስቀመጥ አልቻልንም።",
        sheet_unavailable: "የመመዝገቢያ ስርዓታችን ለጊዜው አይገኝም። እባክዎ በቅርቡ እንደገና ይሞክሩ።",
        validation_error: "በቅጹ ውስጥ አንዳንድ መረጃዎች መስተካከል ያስፈልጋቸዋል። እባክዎ ይመልከቱና እንደገና ይላኩ።",
        email_failed: "በኢሜይል አገልግሎት ችግር ምክንያት መመዝገቢያዎ ሊጠናቀቅ አልቻለም።",
        unauthorized: "የመመዝገቢያ አገልግሎቱ የማረጋገጫ ችግር አጋጥሞታል።",
        misconfigured: "የመመዝገቢያ አገልግሎቱ ሙሉ በሙሉ አልተዘጋጀም።",
        apps_script_access_denied:
          "የመመዝገቢያ አገልግሎቱ ተገናኝቷል፣ ግን Google Apps Script መዳረሻን እየከለከለ ነው።",
        default: "መመዝገቢያዎን አሁን መላክ አልተቻለም። እባክዎ በጥቂት ጊዜ ውስጥ ይሞክሩ።"
      }
    },
    validation: {
      invalidPayload: "የመመዝገቢያ መረጃው ትክክል አይደለም።",
      fullName: "ሙሉ ስም ያስፈልጋል።",
      email: "እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ።",
      phone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።",
      city: "ከተማ ያስፈልጋል።",
      ageRange: "እባክዎ ትክክለኛ የዕድሜ ክልል ይምረጡ።",
      childAgeRange: "እባክዎ ለልጅዎ ትክክለኛ የዕድሜ ክልል ይምረጡ።",
      preferredContact: "እባክዎ ትክክለኛ የግንኙነት መንገድ ይምረጡ።",
      consent: "የምርምር ቡድኑ እንዲያነጋግርዎ እባክዎ ፈቃድዎን ያረጋግጡ።"
    }
  }
} as const;

export type Translation = (typeof translations)[Language];
