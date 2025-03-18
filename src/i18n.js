import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Detecta idioma do navegador

import en from "./locales/en.json";
import pt from "./locales/pt.json";

i18n
  .use(LanguageDetector) // Adiciona detecção automática de idioma
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt }
    },
    fallbackLng: "en", // Se não reconhecer o idioma, usa PT
    interpolation: { escapeValue: false },
    detection: {
      order: ["navigator", "htmlTag", "localStorage", "cookie"], // Tenta detectar nesta ordem
      caches: ["localStorage", "cookie"], // Salva a escolha do usuário
    },
  });

export default i18n;