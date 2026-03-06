import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ml" | "en";

const translations = {
  // Hero
  heroTitle: { ml: "സകാത്ത്", en: "Zakath" },
  heroBrand: { ml: "പൈസെ", en: "Paise" },
  heroSubtitle: {
    ml: "നിങ്ങളുടെ സകാത്ത് ബാധ്യത എളുപ്പത്തിൽ നിറവേറ്റൂ, അനുഗ്രഹങ്ങൾ അയയ്ക്കൂ",
    en: "Fulfill your Zakat obligation with ease and send your blessings along with it",
  },
  everyZakatReaches: {
    ml: "എല്ലാ സകാത്തും അല്ലാഹു ﷻ യിലേക്ക് എത്തുന്നു",
    en: "Every Zakat reaches Allah ﷻ",
  },
  hadithText: {
    ml: "നബി ﷺ പറഞ്ഞു: \"ദാനധർമ്മം സമ്പത്ത് കുറയ്ക്കുന്നില്ല. ഒരാൾ മറ്റൊരാളോട് ക്ഷമിക്കുമ്പോൾ അല്ലാഹു അവന്റെ മാന്യത വർദ്ധിപ്പിക്കുന്നു.\"",
    en: "The Prophet ﷺ said: \"Charity does not decrease wealth. No one forgives another except that Allah increases his honor.\"",
  },
  hadithSource: { ml: "(മുസ്‌ലിം)", en: "(Muslim)" },

  // Features
  secureUpi: { ml: "സുരക്ഷിത UPI", en: "Secure UPI" },
  withDua: { ml: "ദുആയോടെ", en: "With Dua" },
  blessed: { ml: "അനുഗ്രഹീതം", en: "Blessed" },

  // Zakat Calculator
  zakatCalculator: { ml: "സകാത്ത് കാൽക്കുലേറ്റർ", en: "Zakat Calculator" },
  zakatCalcDesc: {
    ml: "സകാത്ത് നിങ്ങളുടെ മൊത്തം സമ്പാദ്യത്തിന്റെയും ഒരു ചാന്ദ്ര വർഷം സൂക്ഷിച്ച സമ്പത്തിന്റെയും 2.5% ആണ്.",
    en: "Zakat is 2.5% of your total savings and wealth held for one lunar year.",
  },
  enterWealth: { ml: "നിങ്ങളുടെ മൊത്തം സമ്പത്ത് / സമ്പാദ്യം നൽകുക", en: "Enter your total wealth / savings" },
  yourZakatAmount: { ml: "നിങ്ങളുടെ സകാത്ത് തുക (2.5%)", en: "Your Zakat Amount (2.5%)" },

  // Donation Form
  giveYourZakat: { ml: "നിങ്ങളുടെ സകാത്ത് നൽകൂ", en: "Give Your Zakat" },
  selectAmount: { ml: "തുക തിരഞ്ഞെടുക്കുക (₹)", en: "Select Amount (₹)" },
  enterCustomAmount: { ml: "ഇഷ്ടാനുസൃത തുക നൽകുക", en: "Enter custom amount" },
  amountRange: {
    ml: (min: string, max: string) => `തുക ₹${min} മുതൽ ₹${max} വരെ ആയിരിക്കണം`,
    en: (min: string, max: string) => `Amount must be between ₹${min} and ₹${max}`,
  },
  yourName: { ml: "നിങ്ങളുടെ പേര് (ഐച്ഛികം)", en: "Your Name (optional)" },
  enterName: { ml: "നിങ്ങളുടെ പേര് നൽകുക", en: "Enter your name" },
  yourDua: { ml: "നിങ്ങളുടെ ദുആ / സന്ദേശം", en: "Your Dua / Message" },
  duaPlaceholder: {
    ml: "അല്ലാഹു ഇത് സ്വീകരിക്കുകയും നമ്മെ എല്ലാവരെയും അനുഗ്രഹിക്കുകയും ചെയ്യട്ടെ...",
    en: "May Allah accept this and bless us all...",
  },
  payViaUpi: { ml: "UPI വഴി ₹{amount} അടയ്ക്കുക", en: "Pay ₹{amount} via UPI" },
  upiId: { ml: "UPI ID", en: "UPI ID" },

  // Confirmation
  jazakAllah: { ml: "ജസാകല്ലാഹു ഖൈറൻ!", en: "JazakAllahu Khairan!" },
  confirmMsg: {
    ml: (amount: string) => `അല്ലാഹു നിങ്ങളുടെ ₹${amount} സകാത്ത് സ്വീകരിക്കുകയും നിങ്ങളുടെ പ്രതിഫലം വർദ്ധിപ്പിക്കുകയും ചെയ്യട്ടെ.`,
    en: (amount: string) => `May Allah accept your Zakat of ₹${amount} and multiply your rewards.`,
  },
  everyZakatPurifies: {
    ml: "നിങ്ങൾ നൽകുന്ന ഓരോ സകാത്തും അല്ലാഹു ﷻ യിലേക്ക് എത്തും — അത് നിങ്ങളുടെ സമ്പത്തും ആത്മാവും ശുദ്ധീകരിക്കുന്നു.",
    en: "Every Zakat you give will reach to Allah ﷻ — it purifies your wealth and soul.",
  },
  from: { ml: "അയച്ചത്:", en: "From:" },
  shareWhatsApp: { ml: "WhatsApp-ൽ പങ്കിടുക", en: "Share on WhatsApp" },
  giveAgain: { ml: "വീണ്ടും നൽകുക", en: "Give Again" },

  // Recent Donations
  recentZakaths: { ml: "സമീപകാല സകാത്തുകൾ", en: "Recent Zakaths" },
  recentDesc: {
    ml: "അജ്ഞാത ദാതാക്കൾ അവരുടെ അനുഗ്രഹങ്ങൾ പങ്കിടുന്നു — നൽകാൻ പ്രചോദിതരാകൂ.",
    en: "Anonymous donors sharing their blessings — be inspired to give.",
  },
  donations: {
    ml: [
      { message: "ആവശ്യക്കാരെ അല്ലാഹു അനുഗ്രഹിക്കട്ടെ. ഈ അവസരത്തിന് അൽഹംദുലില്ലാഹ്. 🤲", amount: 2000, timeAgo: "2 മണിക്കൂർ മുമ്പ്" },
      { message: "നന്ദിയുള്ള ഹൃദയത്തോടെ എന്റെ ബാധ്യത നിറവേറ്റുന്നു. യാ അല്ലാഹ്, ഇത് സ്വീകരിക്കേണമേ.", amount: 5000, timeAgo: "5 മണിക്കൂർ മുമ്പ്" },
      { message: "അല്ലാഹുവിന്റെ മാർഗത്തിൽ. നമുക്കെല്ലാവർക്കും പ്രതിഫലം ഇരട്ടിയാക്കട്ടെ.", amount: 1000, timeAgo: "8 മണിക്കൂർ മുമ്പ്" },
      { message: "സുബ്ഹാനല്ലാഹ്, സകാത്ത് നൽകുന്നത് ഹൃദയത്തിന് സമാധാനം നൽകുന്നു. അൽഹംദുലില്ലാഹ്!", amount: 3000, timeAgo: "12 മണിക്കൂർ മുമ്പ്" },
      { message: "ഈ ചെറിയ സംഭാവന വലിയ മാറ്റം കൊണ്ടുവരട്ടെ. ആമീൻ. 🌙", amount: 500, timeAgo: "1 ദിവസം മുമ്പ്" },
      { message: "ഇത് ഇത്ര എളുപ്പമാക്കിയതിന് ടീമിന് ജസാകല്ലാഹു ഖൈറൻ.", amount: 1500, timeAgo: "1 ദിവസം മുമ്പ്" },
    ],
    en: [
      { message: "May Allah bless everyone in need. Alhamdulillah for this opportunity. 🤲", amount: 2000, timeAgo: "2 hours ago" },
      { message: "Fulfilling my obligation with a grateful heart. Ya Allah, accept this from me.", amount: 5000, timeAgo: "5 hours ago" },
      { message: "For the sake of Allah. May He multiply the rewards for all of us.", amount: 1000, timeAgo: "8 hours ago" },
      { message: "SubhanAllah, giving Zakat brings peace to the heart. Alhamdulillah!", amount: 3000, timeAgo: "12 hours ago" },
      { message: "May this small contribution bring big change. Ameen. 🌙", amount: 500, timeAgo: "1 day ago" },
      { message: "JazakAllahu Khairan to the team for making this so easy.", amount: 1500, timeAgo: "1 day ago" },
    ],
  },

  // Greeting
  bismillah: { ml: "بِسْمِ ٱللَّٰهِ", en: "بِسْمِ ٱللَّٰهِ" },
  bismillahTranslation: {
    ml: "അല്ലാഹുവിന്റെ നാമത്തിൽ, ഏറ്റവും കരുണയുള്ളവൻ, ഏറ്റവും ദയയുള്ളവൻ",
    en: "In the Name of Allah, the Most Gracious, the Most Merciful",
  },

  // Footer
  copyright: {
    ml: (year: number) => `© ${year} സകാത്ത് പൈസെ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.`,
    en: (year: number) => `© ${year} Zakath Paise. All rights reserved.`,
  },
  footerBlessing: {
    ml: "അല്ലാഹു നിങ്ങളുടെ സംഭാവനകൾ സ്വീകരിക്കുകയും നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കുകയും ചെയ്യട്ടെ.",
    en: "May Allah accept your contributions and bless you abundantly.",
  },
  developedBy: {
    ml: "❤️ ഉപയോഗിച്ച് വികസിപ്പിച്ചത്",
    en: "Developed with ❤️ by",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => any;
}

const I18nContext = createContext<I18nContextType>({
  lang: "ml",
  setLang: () => {},
  t: () => "",
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("zakath-lang");
    return (saved === "en" || saved === "ml") ? saved : "ml";
  });

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("zakath-lang", newLang);
  };

  const t = (key: TranslationKey) => {
    const entry = translations[key];
    return (entry as any)[lang];
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
