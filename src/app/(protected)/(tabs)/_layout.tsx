import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind"; // Import to handle Dark Mode in Tabs
import React from "react";
import { View, Text } from "react-native";

// Inline Header component to prevent resolve errors with external files
const Header = () => (
  <View className="pt-12 pb-4 px-6 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
    <Text className="text-xl font-bold text-gray-900 dark:text-white">Home</Text>
  </View>
);

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        // --- Dark Mode Colors ---
        tabBarActiveTintColor: isDark ? "#38bdf8" : "#0ea5e9", // Light Sky Blue for Dark Mode
        tabBarInactiveTintColor: isDark ? "#64748b" : "#94a3b8", // Slate Gray
        
        // --- Floating Tab Bar Styling ---
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 16,
          right: 16,
          borderRadius: 20,
          height: 65,
          backgroundColor: isDark ? "#1e293b" : "#ffffff", // Dynamic Background
          borderTopWidth: 0, // Remove default border
          elevation: 10, // Android Shadow
          shadowColor: "#000", // iOS Shadow
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          paddingBottom: 10, // Center icons vertically
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
        headerShown: false, // Default to hidden (Screens manage their own headers)
      }}
    >
      
      {/* HOME TAB */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false, // Keep Header for Home
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={26} color={color} />
          ),
        }}
      />

      {/* TIMETABLE TAB */}
      <Tabs.Screen
        name="Timetable"
        options={{
          title: "Timetable",
          headerShown: false, // HIDDEN: TimeTableScreen has its own header now
          tabBarIcon: ({ color }) => (
            // Changed from 'download' to 'calendar' as it fits better
            <MaterialIcons name="schedule" size={24} color={color} />
          ),
        }}
      />

      {/* SEARCH TAB */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false, 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={28} color={color} />
          ),
        }}
      />

      {/* SETTINGS TAB */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false, // HIDDEN: SettingsScreen has its own header now
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}