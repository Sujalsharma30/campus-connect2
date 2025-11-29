import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Pressable, Switch } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind"; 
import { useTranslation } from "react-i18next"; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// --- Main Settings Screen Component ---
export default function SettingsScreen() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { t, i18n } = useTranslation(); 

  // Function to change language and persist the choice
  const changeLanguage = async (lang) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lang); // Update App UI globally
      try {
        await AsyncStorage.setItem('user-language', lang); // Save preference
      } catch (error) {
        console.error("Error saving language preference:", error);
      }
    }
  };

  return (
    <View className="flex-1 bg-gray-100 dark:bg-slate-900">
      {/* Dynamic Status Bar */}
      <StatusBar 
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} 
        backgroundColor={colorScheme === "dark" ? "#0f172a" : "#f3f4f6"} 
      />

      {/* Header */}
      <View className="px-6 pt-14 pb-4 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <View className="flex-row items-center gap-4">
          <Pressable onPress={() => router.back()} className="active:opacity-50">
            <Ionicons name="arrow-back" size={26} color={colorScheme === "dark" ? "white" : "#1f2937"} />
          </Pressable>
          <Text className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('settings')}
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* PROFILE CARD */}
        <View className="m-5 bg-white dark:bg-slate-800 p-4 rounded-2xl flex-row items-center gap-4 shadow-sm border border-gray-100 dark:border-slate-700">
          <View className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full items-center justify-center border-2 border-white dark:border-slate-600 shadow-sm">
             <Text className="text-2xl font-bold text-blue-600 dark:text-blue-300">SS</Text>
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">Sujal Sharma</Text>
            <Text className="text-gray-500 dark:text-gray-400 text-xs font-medium">0863IS231053 • CSE</Text>
            <View className="bg-blue-50 dark:bg-blue-900/40 self-start px-2 py-0.5 rounded-md mt-1">
               <Text className="text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase">{t('student') || "Student"} • {t('active') || "Active"}</Text>
            </View>
          </View>
          <Pressable className="p-2 bg-gray-50 dark:bg-slate-700 rounded-full">
            <MaterialIcons name="edit" size={20} color={colorScheme === "dark" ? "#94a3b8" : "#6b7280"} />
          </Pressable>
        </View>

        <View className="px-5 flex-col gap-6">

          {/* LANGUAGE SELECTION */}
          <SettingsSection
            title={t('app_language')}
            items={[
              { 
                type: "selection", 
                icon: "language", 
                title: "English", 
                color: "#8b5cf6",
                isSelected: i18n.language.startsWith('en'), // Robust check
                action: () => changeLanguage('en')
              },
              { 
                type: "selection", 
                icon: "translate", 
                title: "हिंदी (Hindi)", 
                color: "#8b5cf6",
                isSelected: i18n.language.startsWith('hi'), // Robust check
                action: () => changeLanguage('hi')
              },
            ]}
          />

          {/* GENERAL */}
          <SettingsSection
            title={t('general') || "General"}
            items={[
              { type: "link", icon: "person-outline", title: t('personal_details') || "Personal Details", color: "#3b82f6" }, 
              { type: "link", icon: "lock-outline", title: t('change_password') || "Change Password", color: "#3b82f6" },
            ]}
          />

          {/* ACADEMICS */}
          <SettingsSection
            title={t('academics') || "Academics"}
            items={[
              { type: "link", icon: "school", title: t('attendance_criteria') || "Attendance Criteria", subtitle: "75%", color: "#f59e0b" },
              { type: "toggle", icon: "notifications-active", title: t('class_alerts') || "Class Alerts", defaultState: true, color: "#f59e0b" },
            ]}
          />

          {/* APP PREFERENCES */}
          <SettingsSection
            title={t('settings') || "Preferences"}
            items={[
              { 
                type: "toggle", 
                icon: "dark-mode", 
                title: t('dark_mode'), 
                color: "#8b5cf6",
                value: colorScheme === 'dark', 
                action: toggleColorScheme 
              }, 
              { type: "toggle", icon: "download", title: "Offline Mode", subtitle: "Save locally", defaultState: true, color: "#8b5cf6" },
            ]}
          />

          {/* SUPPORT & INFO */}
          <SettingsSection
            title={t('support') || "Support"}
            items={[
              { type: "link", icon: "help-outline", title: t('help_faq') || "Help & FAQ", color: "#10b981" },
              { type: "link", icon: "mail-outline", title: t('contact_admin') || "Contact Admin", color: "#10b981" },
              { type: "link", icon: "info-outline", title: t('about_app') || "About App", subtitle: "v2.4.0", color: "#6b7280" },
            ]}
          />

          {/* LOGOUT BUTTON */}
          <Pressable className="mt-2 mb-8 bg-white dark:bg-slate-800 border border-red-100 dark:border-red-900/30 p-4 rounded-xl flex-row items-center justify-center gap-2 active:bg-red-50 dark:active:bg-red-900/20">
            <MaterialIcons name="logout" size={20} color="#ef4444" />
            <Text className="text-red-500 font-semibold text-base">
              {t('sign_out')}
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
}

// --- Internal Helper Components ---

function SettingsSection({ title, items }) {
  return (
    <View>
      <Text className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-2">
        {title}
      </Text>
      <View className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700">
        {items.map((item, index) => (
          <SettingsItem 
            key={index} 
            item={item} 
            isLast={index === items.length - 1} 
          />
        ))}
      </View>
    </View>
  );
}

function SettingsItem({ item, isLast }) {
  const { colorScheme } = useColorScheme();
  
  // Logic: If it's a toggle like Dark Mode, use controlled props. Otherwise use local state.
  const isControlled = item.value !== undefined;
  const [localEnabled, setLocalEnabled] = useState(item.defaultState || false);
  
  const switchValue = isControlled ? item.value : localEnabled;
  const onAction = item.action || (() => setLocalEnabled(prev => !prev));

  const IconComponent = MaterialIcons; 

  return (
    <Pressable 
      className={`flex-row items-center px-4 py-3.5 bg-white dark:bg-slate-800 active:bg-gray-50 dark:active:bg-slate-700
        ${!isLast ? "border-b border-gray-100 dark:border-slate-700" : ""}
      `}
      onPress={item.type === "toggle" ? onAction : item.action}
    >
      {/* Icon Container */}
      <View 
        className="w-8 h-8 rounded-lg items-center justify-center mr-3"
        style={{ backgroundColor: item.color ? `${item.color}15` : (colorScheme === 'dark' ? '#1e293b' : '#f3f4f6') }}
      >
        <IconComponent 
          name={item.icon} 
          size={18} 
          color={item.color || (colorScheme === "dark" ? "#94a3b8" : "#4b5563")} 
        />
      </View>

      {/* Text Content */}
      <View className="flex-1 justify-center">
        <Text className="text-sm font-medium text-gray-900 dark:text-white leading-tight">
          {item.title}
        </Text>
        {item.subtitle && (
          <Text className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5" numberOfLines={1}>
            {item.subtitle}
          </Text>
        )}
      </View>

      {/* Right Side Action */}
      <View>
        {item.type === "toggle" ? (
          <Switch
            trackColor={{ false: "#e5e7eb", true: item.color || "#3b82f6" }}
            thumbColor={"#ffffff"}
            ios_backgroundColor="#e5e7eb"
            onValueChange={onAction}
            value={switchValue}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          />
        ) : item.type === "selection" && item.isSelected ? (
           <MaterialIcons name="check" size={22} color="#10b981" />
        ) : (
          item.type !== "selection" && (
            <MaterialIcons name="chevron-right" size={22} color={colorScheme === "dark" ? "#475569" : "#9ca3af"} />
          )
        )}
      </View>
    </Pressable>
  );
}