import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "vn",
      debug: true,
      detection: {
        order: ["querystring", "cookie"],
        cache: ["cookie"],
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (error, t) => {
      if (error) {
        console.log(error);
      }
    }
  );

export default i18n;
