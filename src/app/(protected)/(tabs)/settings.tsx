import SettingsSection from "@/src/components/Settings/SettingsSection";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  View,
  StatusBar,
  Text,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-gray-50 mt-3">
      <StatusBar barStyle="dark-content" />
      <View className="relative flex-1">
        <ScrollView className="flex-1 pb-24">
          <View className="flex-col gap-8 p-4">
            <SettingsSection
              title="Account"
              items={[
                {
                  type: "profile",
                  icon: "person",
                  title: "Profile",
                  subtitle: "Student Name, Class, Roll No, School",
                  action: { type: "edit" },
                },
                {
                  type: "link",
                  icon: "key",
                  title: "Login & Security",
                },
              ]}
            />
            <SettingsSection
              title="Learning Preferences"
              items={[
                {
                  type: "link",
                  icon: "language",
                  title: "Language",
                  subtitle: "Current: Punjabi",
                },
                {
                  type: "toggle",
                  icon: "translate",
                  title: "Dual-language lessons",
                  defaultState: false,
                },
              ]}
            />
            <SettingsSection
              title="Content Download Settings"
              items={[
                {
                  type: "toggle",
                  title: "Auto-download new lessons on Wi-Fi",
                  defaultState: true,
                },
                {
                  type: "toggle",
                  title: "Keep quizzes offline",
                  defaultState: true,
                },
                {
                  type: "toggle",
                  title: "Don't auto-download videos",
                  defaultState: false,
                },
              ]}
            />
            <SettingsSection
              title="Notifications"
              items={[
                {
                  type: "toggle",
                  title: "Lesson reminders (daily at 6 PM)",
                  defaultState: true,
                },
                {
                  type: "toggle",
                  title: "Quiz due reminders",
                  defaultState: true,
                },
                { type: "toggle", title: "App updates", defaultState: false },
              ]}
            />
            <SettingsSection
              title="Storage & Data"
              items={[
                {
                  type: "link",
                  icon: "save",
                  title: "Storage Management",
                  subtitle: "450 MB / 2 GB",
                },
                {
                  type: "toggle",
                  icon: "data-saver-on",
                  title: "Data Saver Mode",
                  subtitle: "Use low-quality videos to save data",
                  defaultState: true,
                },
              ]}
            />
            <SettingsSection
              title="Support & Help"
              items={[
                { type: "link", icon: "help-center", title: "Help Center" },
                { type: "link", icon: "call", title: "Contact Teacher/Admin" },
                { type: "link", icon: "feedback", title: "Feedback" },
              ]}
            />
            <SettingsSection
              title="App Info"
              items={[{ type: "link", icon: "info", title: "About App" }]}
            />
            <View>
              <Pressable className="mb-20 flex-row w-full items-center justify-center gap-2 rounded-lg border border-red-600 bg-red-100 py-3 text-base font-bold active:bg-red-200">
                <MaterialIcons name="logout" size={24} color="#DC2626" />
                <Text className="text-red-600 font-semibold">Logout</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
