import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/translation.json";
import fr from "./fr/translation.json";
import ja from "./ja/translation.json";

const savedLang = localStorage.getItem("site-lang") || "en";

export default i18next.use(initReactI18next).init({
  lng: savedLang, // default language
  debug: false,
  resources: {
    en: {
      translation: en,
    },
    fr:{
        translation: fr,
    },
    ja:{
        translation: ja,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },

  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  returnNull: false,
});
