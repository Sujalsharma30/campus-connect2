import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

// Import translation files
import en from './local/en.json';
import hi from './local/hi.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('user-language');

  if (!savedLanguage) {
    // Determine the user's phone language
    const locales = Localization.getLocales();
    savedLanguage = locales[0]?.languageCode ?? 'en';
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: savedLanguage, // Use language detected or stored
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
        useSuspense: false // fix for some react native crash issues
    }
  });
};

initI18n();

export default i18n;