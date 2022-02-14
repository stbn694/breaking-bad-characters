import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import es from './assets/locales/es.json';

export const resources = {
  en,
  es,
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'en',
  supportedLngs: ['en', 'es'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
