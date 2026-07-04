export type Lang = "en" | "mr";

export const findMyWorkerMeta = {
  slug: "findmyworker",
  name: "FindMyWorker",
  version: "1.0.0",
  minAndroid: "Android 7.0 (Nougat) or higher",
  size: "31 MB",
  filename: "FindMyWorker.apk",
  language: "Marathi & English",
  region: "Chhatrapati Sambhajinagar (Aurangabad) District Talukas"
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
  developedBy: string;
};

export const findMyWorkerContent: Record<Lang, Content> = {
  en: {
    tagline: "The all-in-one platform for workers, job posters, and farm-to-market trade",
    intro:
      "Welcome to FindMyWorker, the all-in-one platform for workers, job posters, and farm-to-market trade in the Chhatrapati Sambhajinagar (Aurangabad) region.",
    featureGroups: [
      {
        heading: "For Workers",
        items: [
          {
            title: "Professional Profile",
            description: "Create your digital identity with your skills, daily rates, and service areas."
          },
          {
            title: "Portfolio Showcase",
            description: "Upload photos of your previous work to build trust with customers."
          },
          {
            title: "Direct Contact",
            description: "Get phone calls directly from customers looking for your specific skills."
          }
        ]
      },
      {
        heading: "For Job Posters",
        items: [
          {
            title: "Post Instant Jobs",
            description: "Need a painter, plumber, or farmhand? Post a job in seconds."
          },
          {
            title: "Track Progress",
            description: "Manage your job posts, mark them as \"In Progress\" or \"Completed.\""
          },
          {
            title: "Localized Search",
            description: "Find workers specifically in your Taluka (Kannad, Sillod, Vaijapur, etc.)."
          }
        ]
      },
      {
        heading: "Marketplace (Bazaar)",
        items: [
          {
            title: "Buy & Sell",
            description: "A dedicated space for agricultural equipment, vehicles, crops, and more."
          },
          {
            title: "Local Trade",
            description: "Search listings by Taluka to keep trade within your community."
          },
          {
            title: "Direct Chat",
            description: "Communicate directly with sellers through the app."
          }
        ]
      }
    ],
    installSteps: [
      { title: "Download", description: "Tap the \"Download APK\" button on this page." },
      {
        title: "Enable Unknown Sources",
        description:
          "Go to Settings > Security (or Apps), then enable \"Install unknown apps\" for your browser or file manager."
      },
      { title: "Install", description: "Open the downloaded file and tap Install." },
      {
        title: "Permissions",
        description: "The app requires Internet and Phone permissions to connect you with workers and sellers."
      }
    ],
    techLabels: {
      version: "Version",
      minAndroid: "Minimum Android",
      language: "Language Support",
      region: "Region Focus",
      size: "File Size"
    },
    privacyHeading: "Privacy & Safety",
    privacyBody:
      "FindMyWorker uses Google Firebase for secure authentication. Your phone number is verified via OTP to ensure only genuine users can access the marketplace and worker directory.",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      { q: "Is FindMyWorker free to use?", a: "Yes, downloading and using the app is completely free." },
      {
        q: "Which areas does it cover?",
        a: "Currently focused on Talukas within Chhatrapati Sambhajinagar (Aurangabad) district."
      },
      { q: "Is my phone number safe?", a: "Yes. It is verified via OTP and secured through Firebase." },
      {
        q: "Can I use it without registering?",
        a: "You can browse listings, but registration is required to contact workers or sellers."
      }
    ],
    downloadCta: "Download APK",
    installNote: "Direct APK download. Not on Play Store yet.",
    developedBy: "Developed by Deccan Digital Solutions"
  },
  mr: {
    tagline: "कामगार, काम देणारे आणि शेतमाल व्यापारासाठी सर्वसमावेशक व्यासपीठ",
    intro:
      "FindMyWorker मध्ये आपले स्वागत आहे — छत्रपती संभाजीनगर (औरंगाबाद) परिसरातील कामगार, काम देणारे आणि शेतमाल खरेदी-विक्रीसाठी सर्वसमावेशक व्यासपीठ.",
    featureGroups: [
      {
        heading: "कामगारांसाठी",
        items: [
          {
            title: "व्यावसायिक प्रोफाइल",
            description: "तुमची कौशल्ये, रोजचा दर आणि सेवा क्षेत्र यांसह डिजिटल ओळख तयार करा."
          },
          {
            title: "पोर्टफोलिओ",
            description: "ग्राहकांचा विश्वास वाढवण्यासाठी तुमच्या आधीच्या कामाचे फोटो अपलोड करा."
          },
          {
            title: "थेट संपर्क",
            description: "तुमच्या कौशल्याची गरज असलेल्या ग्राहकांकडून थेट फोन कॉल मिळवा."
          }
        ]
      },
      {
        heading: "काम देणाऱ्यांसाठी",
        items: [
          {
            title: "झटपट काम पोस्ट करा",
            description: "पेंटर, प्लंबर किंवा शेतमजूर हवा आहे? काही सेकंदात काम पोस्ट करा."
          },
          {
            title: "प्रगती ट्रॅक करा",
            description: "तुमचे काम \"सुरू आहे\" किंवा \"पूर्ण झाले\" असे चिन्हांकित करा."
          },
          {
            title: "स्थानिक शोध",
            description: "तुमच्या तालुक्यातील (कन्नड, सिल्लोड, वैजापूर इ.) कामगार शोधा."
          }
        ]
      },
      {
        heading: "बाजार (मार्केटप्लेस)",
        items: [
          {
            title: "खरेदी-विक्री",
            description: "शेती उपकरणे, वाहने, पिके आणि इतर वस्तूंसाठी खास जागा."
          },
          {
            title: "स्थानिक व्यापार",
            description: "तुमचा व्यापार समुदायातच ठेवण्यासाठी तालुक्यानुसार यादी शोधा."
          },
          {
            title: "थेट चॅट",
            description: "अॅपमधूनच विक्रेत्यांशी थेट संवाद साधा."
          }
        ]
      }
    ],
    installSteps: [
      { title: "डाउनलोड करा", description: "या पानावरील \"APK डाउनलोड करा\" बटणावर टॅप करा." },
      {
        title: "अज्ञात स्रोत सक्षम करा",
        description:
          "सेटिंग्ज > सुरक्षा (किंवा अॅप्स) वर जा, नंतर तुमच्या ब्राउझर किंवा फाइल मॅनेजरसाठी \"अज्ञात अॅप्स इन्स्टॉल करा\" सक्षम करा."
      },
      { title: "इन्स्टॉल करा", description: "डाउनलोड केलेली फाइल उघडा आणि Install वर टॅप करा." },
      {
        title: "परवानग्या",
        description: "कामगार आणि विक्रेत्यांशी जोडण्यासाठी अॅपला इंटरनेट आणि फोन परवानगीची आवश्यकता आहे."
      }
    ],
    techLabels: {
      version: "आवृत्ती",
      minAndroid: "किमान Android",
      language: "भाषा समर्थन",
      region: "क्षेत्र फोकस",
      size: "फाइल आकार"
    },
    privacyHeading: "गोपनीयता आणि सुरक्षा",
    privacyBody:
      "FindMyWorker सुरक्षित प्रमाणीकरणासाठी Google Firebase वापरते. फक्त खरे वापरकर्तेच मार्केटप्लेस आणि कामगार यादीत प्रवेश करू शकतील याची खात्री करण्यासाठी तुमचा फोन नंबर OTP द्वारे सत्यापित केला जातो."
    ,
    faqHeading: "वारंवार विचारले जाणारे प्रश्न",
    faqs: [
      { q: "FindMyWorker वापरणे मोफत आहे का?", a: "होय, अॅप डाउनलोड आणि वापरणे पूर्णपणे मोफत आहे." },
      {
        q: "हे कोणत्या भागात उपलब्ध आहे?",
        a: "सध्या छत्रपती संभाजीनगर (औरंगाबाद) जिल्ह्यातील तालुक्यांवर लक्ष केंद्रित आहे."
      },
      { q: "माझा फोन नंबर सुरक्षित आहे का?", a: "होय. OTP सत्यापन आणि Firebase सुरक्षिततेसह." },
      {
        q: "नोंदणी केल्याशिवाय वापरता येईल का?",
        a: "काम पाहता येतील, पण कामगार किंवा विक्रेत्याशी संपर्क साधण्यासाठी नोंदणी आवश्यक आहे."
      }
    ],
    downloadCta: "APK डाउनलोड करा",
    installNote: "थेट APK डाउनलोड. सध्या Play Store वर उपलब्ध नाही.",
    developedBy: "Deccan Digital Solutions द्वारे विकसित"
  }
};
