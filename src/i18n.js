import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional, for automatic language detection
import Backend from 'i18next-http-backend';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector) // Detect language from localStorage, etc.
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language if none is detected
    lng: localStorage.getItem('i18nextLng') || 'en', // Use stored language or default to English
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Order to detect language
      caches: ['localStorage'], // Cache the language in localStorage
    },
  });

export default i18n;