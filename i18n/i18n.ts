import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from "expo-localization";

// Import translation files
import en from "./local/en.json";
import hi from "./local/hi.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

// 1. Get Device Language synchronously for immediate render
const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLanguage, // Start with device language
    fallbackLng: "en",
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, 
    }
  });

// 2. Check for saved user preference asynchronously
const loadSavedLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('user-language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  } catch (error) {
    console.error("Failed to load language from storage", error);
  }
};

loadSavedLanguage();

export default i18n;