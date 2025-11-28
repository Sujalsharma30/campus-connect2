import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

// --- ASSETS CONFIGURATION ---
// Ensure these files exist in your root "assets/images/" folder.
// If they are in a different folder, update the path below.
// The path "../../..." goes up from (auth) -> app -> src -> root -> assets
const CAMPUS_BG = require('../../../assets/images/svvv-bg.jpg');
const UNI_LOGO = require('../../../assets/images/svvv-logo.png');

export default function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" />

      {/* Full Screen Background Image */}
      <ImageBackground
        source={CAMPUS_BG}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark Overlay for Text Readability (Replaces LinearGradient) */}
        <View style={styles.overlay}>
          
          {/* Top Section: Branding */}
          <View className="flex-1 items-center justify-center mt-10">
            <View className="bg-white p-4 rounded-full shadow-2xl mb-6">
              <Image
                source={UNI_LOGO}
                className="w-24 h-24"
                resizeMode="contain"
              />
            </View>
            <Text className="text-white text-xs font-bold uppercase tracking-[3px] text-center opacity-90 px-4">
              Shri Vaishnav Vidyapeeth Vishwavidyalaya
            </Text>
            <Text className="text-amber-400 text-3xl font-extrabold mt-2 text-center tracking-tighter">
              Campus Connect
            </Text>
          </View>

          {/* Bottom Section: Content & Action */}
          <View className="w-full px-6 pb-12">
            <View className="mb-10">
              <Text className="text-slate-200 text-center text-base leading-7 font-medium">
                {t('welcome_desc', 'Your unified digital gateway to campus life. Access schedules, resources, and updates instantly.')}
              </Text>
            </View>

            {/* Main Action Button */}
            <Pressable
              onPress={() => router.push('/(auth)/screenTwo')}
              className="w-full bg-amber-500 rounded-2xl py-4 flex-row justify-center items-center active:bg-amber-600 shadow-lg shadow-black/30"
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
            >
              <Text className="text-slate-900 font-bold text-lg mr-2">
                {t('get_started', 'Get Started')}
              </Text>
              <MaterialIcons name="arrow-forward" size={22} color="#0f172a" />
            </Pressable>

            {/* Pagination/Progress Dots */}
            <View className="flex-row justify-center gap-3 mt-8">
              <View className="w-8 h-1.5 bg-amber-500 rounded-full" />
              <View className="w-2 h-1.5 bg-white/30 rounded-full" />
              <View className="w-2 h-1.5 bg-white/30 rounded-full" />
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.85)', // Dark blue-slate overlay with 85% opacity
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});