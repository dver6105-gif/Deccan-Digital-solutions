export type Lang = "en" | "mr";

export const onlineBcMeta = {
  slug: "onlinebc-kunjkheda",
  name: "OnlineBCKunjkheda",
  version: "1.0.0",
  minAndroid: "Android 7.0 (Nougat) or higher",
  size: "31 MB",
  filename: "OnlineBCKunjkheda.apk",
  language: "Marathi & English",
  region: "Kunjkheda & nearby communities"
};

type FeatureGroup = {
  heading: string;
  items: { title: string; description: string }[];
};

type Content = {
  tagline: string;
  intro: string;
  featureGroups: FeatureGroup[];
  installSteps: { title: string; description: string }[];
  techLabels: { version: string; minAndroid: string; language: string; region: string; size: string };
  privacyHeading: string;
  privacyBody: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  downloadCta: string;
  installNote: string;
  supportNote: string;
  developedBy: string;
};

export const onlineBcContent: Record<Lang, Content> = {
  en: {
    tagline: "Automated UPI-powered savings and chit fund manager for your community",
    intro:
      "OnlineBCKunjkheda helps your savings group (BC) manage multiple funds, automate UPI payments, and keep transparent, admin-verified ledgers, all in one app.",
    featureGroups: [
      {
        heading: "Multi-Group Management",
        items: [
          {
            title: "Independent Hubs",
            description: "Join or manage multiple separate saving and payment groups simultaneously."
          },
          {
            title: "Isolated Data",
            description: "Each group operates with its own independent members, rules, timelines, and financial pools."
          }
        ]
      },
      {
        heading: "Automated UPI Payment Triggers",
        items: [
          {
            title: "One-Click Payments",
            description: "No more copying bank details or typing manual numbers."
          },
          {
            title: "Seamless Triggers",
            description:
              "The app automatically generates and triggers UPI payment prompts for your due amounts, making monthly or weekly contributions instant and error-free."
          }
        ]
      },
      {
        heading: "Transparent Ledgers & Admin Overrides",
        items: [
          {
            title: "Real-Time Tracking",
            description: "View detailed, transparent transaction histories for your entire group."
          },
          {
            title: "Admin Corrections",
            description:
              "Group administrators can perform ledger overrides to adjust cash transactions, correct mistakes, or log offline payments instantly, keeping the books 100% accurate."
          }
        ]
      },
      {
        heading: "Group-Specific Communication",
        items: [
          {
            title: "Stay Connected",
            description: "Built-in communication channels dedicated to each specific group."
          },
          {
            title: "Reminders & Announcements",
            description:
              "Admins can easily broadcast payment deadlines, meeting updates, or bidded amount announcements directly inside the group dashboard."
          }
        ]
      },
      {
        heading: "Security & Trust",
        items: [
          {
            title: "Data Privacy",
            description: "Your group's financial discussions and ledger histories are securely stored and encrypted."
          },
          {
            title: "Transparent Records",
            description:
              "Every automated trigger and manual admin override is tracked, ensuring accountability across the entire community."
          }
        ]
      }
    ],
    installSteps: [
      {
        title: "Download & Allow Install",
        description:
          "Go to Settings > Security (or Apps) and enable \"Install unknown apps\" for your browser or file manager."
      },
      {
        title: "Install & Launch",
        description: "Open the downloaded APK and grant the necessary permissions for smooth UPI integration."
      },
      { title: "Register Your Profile", description: "Sign up securely using your mobile number." },
      {
        title: "Join or Create a Group",
        description:
          "Enter a unique group code provided by your administrator, or start a new group to invite your community members."
      },
      {
        title: "Automate Your Savings",
        description: "Set up your UPI shortcuts and experience stress-free community financing."
      }
    ],
    techLabels: {
      version: "Version",
      minAndroid: "Minimum Android",
      language: "Language Support",
      region: "Region Focus",
      size: "File Size"
    },
    privacyHeading: "Security & Trust",
    privacyBody:
      "Your group's financial discussions and ledger histories are securely stored and encrypted. Every automated UPI trigger and manual admin override is tracked, ensuring accountability across the entire community.",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can I be part of more than one savings group?",
        a: "Yes. OnlineBCKunjkheda supports multiple independent groups, each with its own members, rules, and ledger."
      },
      {
        q: "How do UPI payments work in the app?",
        a: "The app automatically generates a UPI payment prompt for your due amount, so you can pay in one tap instead of entering bank details manually."
      },
      {
        q: "What happens if a payment is made offline or in cash?",
        a: "Your group administrator can log it directly through an admin ledger override, keeping the records accurate."
      },
      {
        q: "How do I join my community's group?",
        a: "Ask your group administrator for your unique group code and enter it in the app to join."
      },
      {
        q: "Is my group's financial data private?",
        a: "Yes. Group ledgers and discussions are encrypted and only visible to members of that group."
      }
    ],
    downloadCta: "Download APK",
    installNote: "Direct APK download. Not on Play Store yet.",
    supportNote: "For support, inquiries, or feedback, please contact your group administrator or reach out via our website support portal.",
    developedBy: "Developed by Deccan Digital Solutions"
  },
  mr: {
    tagline: "तुमच्या समुदायासाठी स्वयंचलित UPI आधारित बचत आणि बीसी (चिट फंड) व्यवस्थापन",
    intro:
      "OnlineBCKunjkheda तुमच्या बचत गटाला (बीसी) अनेक निधी व्यवस्थापित करण्यास, UPI पेमेंट्स स्वयंचलित करण्यास आणि पारदर्शक, प्रशासक-सत्यापित हिशोब ठेवण्यास मदत करते — सर्व एका अॅपमध्ये.",
    featureGroups: [
      {
        heading: "अनेक गट व्यवस्थापन",
        items: [
          {
            title: "स्वतंत्र हब",
            description: "एकाच वेळी अनेक स्वतंत्र बचत आणि पेमेंट गटांमध्ये सामील व्हा किंवा व्यवस्थापित करा."
          },
          {
            title: "विभक्त डेटा",
            description: "प्रत्येक गट स्वतःचे सदस्य, नियम, वेळापत्रक आणि निधीसह स्वतंत्रपणे कार्य करतो."
          }
        ]
      },
      {
        heading: "स्वयंचलित UPI पेमेंट ट्रिगर",
        items: [
          {
            title: "एका क्लिकवर पेमेंट",
            description: "बँक तपशील कॉपी करण्याची किंवा नंबर टाइप करण्याची गरज नाही."
          },
          {
            title: "अखंड ट्रिगर",
            description:
              "अॅप तुमच्या देय रकमेसाठी आपोआप UPI पेमेंट प्रॉम्प्ट तयार करते आणि सुरू करते, त्यामुळे मासिक किंवा साप्ताहिक हप्ते झटपट आणि चूकविरहित होतात."
          }
        ]
      },
      {
        heading: "पारदर्शक हिशोब आणि प्रशासक दुरुस्ती",
        items: [
          {
            title: "रिअल-टाइम ट्रॅकिंग",
            description: "तुमच्या संपूर्ण गटाचा तपशीलवार, पारदर्शक व्यवहार इतिहास पहा."
          },
          {
            title: "प्रशासक दुरुस्ती",
            description:
              "गट प्रशासक रोख व्यवहार समायोजित करण्यासाठी, चुका सुधारण्यासाठी किंवा ऑफलाइन पेमेंट त्वरित नोंदवण्यासाठी हिशोबात दुरुस्ती करू शकतात, त्यामुळे हिशोब १००% अचूक राहतो."
          }
        ]
      },
      {
        heading: "गट-विशिष्ट संवाद",
        items: [
          {
            title: "संपर्कात रहा",
            description: "प्रत्येक गटासाठी खास अंगभूत संवाद माध्यम."
          },
          {
            title: "स्मरणपत्रे आणि घोषणा",
            description:
              "प्रशासक गट डॅशबोर्डमधून थेट पेमेंट अंतिम मुदती, सभेचे अपडेट्स किंवा बोली रकमेच्या घोषणा सहज प्रसारित करू शकतात."
          }
        ]
      },
      {
        heading: "सुरक्षा आणि विश्वास",
        items: [
          {
            title: "डेटा गोपनीयता",
            description: "तुमच्या गटाचे आर्थिक संभाषण आणि हिशोब इतिहास सुरक्षितपणे साठवले आणि एन्क्रिप्ट केले जातात."
          },
          {
            title: "पारदर्शक नोंदी",
            description:
              "प्रत्येक स्वयंचलित ट्रिगर आणि प्रशासकाची दुरुस्ती नोंदवली जाते, त्यामुळे संपूर्ण समुदायात उत्तरदायित्व राहते."
          }
        ]
      }
    ],
    installSteps: [
      {
        title: "डाउनलोड करा आणि परवानगी द्या",
        description: "सेटिंग्ज > सुरक्षा (किंवा अॅप्स) मध्ये जाऊन \"अज्ञात अॅप्स इन्स्टॉल करा\" सक्षम करा."
      },
      {
        title: "इन्स्टॉल करा आणि उघडा",
        description: "डाउनलोड केलेली APK उघडा आणि सुरळीत UPI एकत्रीकरणासाठी आवश्यक परवानग्या द्या."
      },
      { title: "तुमची प्रोफाइल नोंदणी करा", description: "तुमच्या मोबाईल नंबरने सुरक्षितपणे साइन अप करा." },
      {
        title: "गटात सामील व्हा किंवा तयार करा",
        description:
          "तुमच्या प्रशासकाने दिलेला युनिक ग्रुप कोड टाका, किंवा नवीन गट सुरू करून समुदाय सदस्यांना आमंत्रित करा."
      },
      {
        title: "तुमची बचत स्वयंचलित करा",
        description: "तुमचे UPI शॉर्टकट सेट करा आणि तणावमुक्त सामुदायिक वित्तपुरवठ्याचा अनुभव घ्या!"
      }
    ],
    techLabels: {
      version: "आवृत्ती",
      minAndroid: "किमान Android",
      language: "भाषा समर्थन",
      region: "क्षेत्र फोकस",
      size: "फाइल आकार"
    },
    privacyHeading: "सुरक्षा आणि विश्वास",
    privacyBody:
      "तुमच्या गटाचे आर्थिक संभाषण आणि हिशोब इतिहास सुरक्षितपणे साठवले आणि एन्क्रिप्ट केले जातात. प्रत्येक स्वयंचलित UPI ट्रिगर आणि प्रशासकाची दुरुस्ती नोंदवली जाते, त्यामुळे संपूर्ण समुदायात उत्तरदायित्व राहते.",
    faqHeading: "वारंवार विचारले जाणारे प्रश्न",
    faqs: [
      {
        q: "मी एकापेक्षा जास्त बचत गटांचा भाग होऊ शकतो का?",
        a: "होय. OnlineBCKunjkheda अनेक स्वतंत्र गटांना समर्थन देते, प्रत्येकाचे स्वतःचे सदस्य, नियम आणि हिशोब असतात."
      },
      {
        q: "अॅपमध्ये UPI पेमेंट कसे काम करते?",
        a: "अॅप तुमच्या देय रकमेसाठी आपोआप UPI पेमेंट प्रॉम्प्ट तयार करते, त्यामुळे बँक तपशील टाइप करण्याऐवजी एका क्लिकवर पेमेंट करता येते."
      },
      {
        q: "पेमेंट रोखीने किंवा ऑफलाइन झाल्यास काय होते?",
        a: "तुमचा गट प्रशासक ते थेट अॅडमिन लेजर दुरुस्तीद्वारे नोंदवू शकतो, त्यामुळे हिशोब अचूक राहतो."
      },
      {
        q: "मी माझ्या समुदायाच्या गटात कसे सामील होऊ?",
        a: "तुमच्या गट प्रशासकाकडून युनिक ग्रुप कोड मागा आणि अॅपमध्ये टाकून सामील व्हा."
      },
      {
        q: "माझ्या गटाचा आर्थिक डेटा खाजगी आहे का?",
        a: "होय. गटाचे हिशोब आणि संभाषणे एन्क्रिप्टेड असतात आणि फक्त त्या गटाच्या सदस्यांनाच दिसतात."
      }
    ],
    downloadCta: "APK डाउनलोड करा",
    installNote: "थेट APK डाउनलोड. सध्या Play Store वर उपलब्ध नाही.",
    supportNote: "मदत, चौकशी किंवा अभिप्रायासाठी कृपया तुमच्या गट प्रशासकाशी संपर्क साधा किंवा आमच्या वेबसाइट सपोर्ट पोर्टलद्वारे संपर्क करा.",
    developedBy: "Deccan Digital Solutions द्वारे विकसित"
  }
};
