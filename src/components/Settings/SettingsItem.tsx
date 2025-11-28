import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type SettingsItemProps = {
  type: "link" | "toggle" | "profile";
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle?: string;
  defaultState?: boolean;
  action?: { type: "edit" };
};

export default function SettingsItem({
  type,
  icon,
  title,
  subtitle,
  defaultState,
  action,
}: SettingsItemProps) {
  const [isToggled, setIsToggled] = useState(defaultState || false);

  const getIconContainerColors = () => {
    switch (icon) {
      case "person":
      case "key":
      case "language":
      case "translate":
      case "data-saver-on":
      case "help-center":
      case "call":
      case "feedback":
      case "info":
      case "save":
        return "bg-blue-100 text-blue-600"; // Using Tailwind's red color for primary
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (type === "profile") {
    return (
      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center gap-4">
          <View
            className={`flex h-12 w-12 items-center justify-center rounded-full ${getIconContainerColors()}`}
          >
            <MaterialIcons name={icon} size={24} color="#1173d4" />
          </View>
          <View>
            <Text className="font-medium text-gray-800">{title}</Text>
            {subtitle && (
              <Text className="text-sm text-gray-500">{subtitle}</Text>
            )}
          </View>
        </View>
        <Pressable className="flex-row items-center gap-1">
          <Text className="text-sm font-medium text-red-600">✏️ Edit</Text>
        </Pressable>
      </View>
    );
  }

  if (type === "link") {
    return (
      <Pressable className="flex-row items-center justify-between p-4 active:bg-gray-50">
        <View className="flex-row items-center gap-4">
          {icon && (
            <View
              className={`flex h-10 w-10 items-center justify-center rounded-full ${getIconContainerColors()}`}
            >
              <MaterialIcons name={icon} size={24} color="#1173d4" />
            </View>
          )}
          <View>
            <Text className="font-medium text-gray-800">{title}</Text>
            {subtitle && (
              <Text className="text-sm text-gray-500">{subtitle}</Text>
            )}
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
      </Pressable>
    );
  }

  if (type === "toggle") {
    return (
      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center gap-4 flex-1">
          {icon && (
            <View
              className={`flex h-10 w-10 items-center justify-center rounded-full ${getIconContainerColors()}`}
            >
              <MaterialIcons name={icon} size={24} color="#1173d4" />
            </View>
          )}
          <View className="flex-1">
            <Text className="font-medium text-gray-800">{title}</Text>
            {subtitle && (
              <Text className="mt-2 text-sm text-gray-500">{subtitle}</Text>
            )}
          </View>
        </View>
        <Pressable
          onPress={() => setIsToggled(!isToggled)}
          className={`h-6 w-11 rounded-full ${isToggled ? "bg-blue-600" : "bg-gray-300"}`}
        >
          <View
            className={`absolute h-5 w-5 rounded-full border border-gray-300 bg-white transition-transform duration-300 ${isToggled ? "translate-x-5" : "translate-x-0"}`}
          />
        </Pressable>
      </View>
    );
  }

  return null;
}
