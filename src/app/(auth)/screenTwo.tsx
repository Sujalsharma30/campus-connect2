import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next'; // Import Hook
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LanguageScreen() {
  const router = useRouter();
  const { t, i18n } = useTranslation(); // Init Hook
  
  // Initialize state with current active language (fallback to 'en')
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language || 'en');

  // Sync state if language changes externally
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  // Function to switch language
  const changeLanguage = async (lang: string) => {
    setSelectedLanguage(lang);
    await i18n.changeLanguage(lang); // Applies translation instantly
    await AsyncStorage.setItem('user-language', lang); // Saves preference
  };

  const LanguageOption = ({ 
    langCode, 
    label, 
    subLabel, 
    imageUri 
  }: { 
    langCode: string, 
    label: string, 
    subLabel: string, 
    imageUri: string 
  }) => {
    // Check if currently selected (handles 'en', 'en-US', etc.)
    const isSelected = selectedLanguage.startsWith(langCode);

    return (
      <Pressable 
        onPress={() => changeLanguage(langCode)}
        className={`w-full flex flex-row items-center justify-between p-4 rounded-xl shadow-sm border ${
          isSelected 
            ? 'bg-amber-50 border-amber-500' 
            : 'bg-white border-zinc-200'
        }`}
      >
        <View className="flex-row items-center gap-4">
          <Image
            source={{ uri: imageUri }}
            className="w-8 h-8 rounded-md"
          />
          <View>
            <Text className={`text-lg font-semibold ${isSelected ? 'text-zinc-900' : 'text-zinc-700'}`}>
              {label}
            </Text>
            <Text className="text-sm text-zinc-500">{subLabel}</Text>
          </View>
        </View>
        
        {isSelected && (
          <MaterialIcons name="check-circle" size={24} color="#f59e0b" />
        )}
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-slate-50">
      <View className="flex-grow flex flex-col items-center px-4">
        <View className="w-full max-w-md text-center py-8">
          {/* Translated Headers */}
          <Text className="text-2xl font-bold leading-tight tracking-tight text-[#0d171b] mb-2">
            {t('select_language')}
          </Text>
          <Text className="text-zinc-500">
            {t('choose_lang_desc')}
          </Text>
        </View>
        
        <View className="w-full max-w-md flex-col gap-4">
          <LanguageOption 
            langCode="en"
            label="English"
            subLabel="Default"
            imageUri="https://lh3.googleusercontent.com/aida-public/AB6AXuBLBVe_MkGoAZ70XPwLZusZHd7hrdgNmxBW9ANIEz6xhAErtRH80uAcUOWrqdYm4tR3wzEDoVldHgHsKZN8Bm1IT_-7_MvNJH_bFxnJ8PCQGs1-NfCAfckH5TYuPWOHC98zYQD6631_4BEpCr6m8PuOxGZVeyfSEjwRwthvB-uKXO30oNYqrgU9TOijArcLdRTyXs4tGPGk9Sy4pOnMSRDb_14FH8eu8L9xVoRnVlIVz9X_6geMc_jCG-CoHfpOCNYiNs3--ke58oBf"
          />
          
          <LanguageOption 
            langCode="hi"
            label="हिंदी"
            subLabel="Hindi"
            imageUri="https://lh3.googleusercontent.com/aida-public/AB6AXuAgxhP1-4Tceb4UYIxLsyK6wkTQe5wFahTVtdpTOUBGu19AdOnIdOHpbs5y_SQd157GUZ0EBhptaTN6z-DbHUmpdvsM09Jla2Mf78JVf1Fyi7c9OX1NMRy7iKCehSAOS-7hnGL14XyrP_xpmEFCuL4YwQOUOHdRTTfVvlLRnd2I4TKoPssIfdU4tKzuW1KgtHgo09H3EuWXJTEImqnXA2LA8SITs49qWhVW8oH3cMD-mlH92mfmJisisEhhKzbpwRsdf0H3KW0oTeY4"
          />
        </View>
      </View>

      <View className="p-4 bg-white/80 border-t border-zinc-200 mb-4">
        <View className="flex-row items-center justify-between gap-4 mx-auto px-2">
          <Pressable
            onPress={() => router.back()}
            className="flex w-1/2 items-center justify-center h-12 px-6 rounded-xl text-base font-bold bg-gray-900 text-white"
          >
            <Text className="text-white font-semibold">{t('back')}</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(auth)/profilelogin")}
            className="flex w-1/2 items-center justify-center h-12 px-6 rounded-xl text-base font-bold bg-amber-500 text-white shadow-md shadow-amber-200"
          >
            <Text className="truncate text-black-500 font-bold">{t('next')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}