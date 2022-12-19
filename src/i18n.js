import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import HttpApi from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";

import Backend from "i18next-http-backend";

i18next
  .use(Backend)
 
  .use(initReactI18next)

  .use(HttpApi)

  .use(LanguageDetector) // Registering the detection plugin

  .init({

    fallbackLng: "en",
    debug: false,
    detection: {
      order:["localStorage", "cookie"],
      caches:["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18next;