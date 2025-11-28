import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import DownloadHeader from "@/src/components/Downloads/Header";
import Header from "@/src/components/Header";
import { QuizzHeader } from "@/src/components/Quizz/QuizzHeader";
import { SettignsHeader } from "@/src/components/Settings/SettingsHeader";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0ea5e9", // Primary color for active tabs
        tabBarInactiveTintColor: "#64748b", // Gray for inactive tabs
        headerShown: false, // Hide the header by default
        tabBarStyle: {
          position: "absolute",
          bottom: 10, // ⬆️ moves tab bar up from botto
          left: 16,
          right: 16,
          borderRadius: 16,
          height: 80,
          backgroundColor: "#fff",
          elevation: 5, // shadow for Android
          shadowColor: "#000", // shadow for iOS
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true, // Make sure the header is shown
          header: () => <Header />, // Use your custom component
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="downloaded"
        options={{
          headerShown: true,
          header: () => <DownloadHeader />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="download-for-offline"
              size={24}
              color={color}
            />
          ),
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="quizzes"
        options={{
          headerShown: true,
          header: () => <QuizzHeader />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="quiz" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: true,
          header: () => <SettignsHeader />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
