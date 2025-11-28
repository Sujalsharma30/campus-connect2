import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  return (
    <View className="top-6 z-10 bg-slate-50/80 backdrop-blur-sm mb-8">
      <View className="flex-row items-center p-4">
        <TouchableOpacity
          className="flex-row items-center gap-1"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#0d141b" />
          <Text className="text-sm font-medium text-[#0d141b]">Back</Text>
        </TouchableOpacity>
        <View className="flex-1 text-center items-center">
          <Text className="text-lg font-bold leading-tight tracking-tight text-[#0d141b]">
            Simple Equations
          </Text>
          <Text className="text-sm text-slate-500">📖 🎥 | Lesson 2 of 5</Text>
        </View>
        <View className="w-12" />
      </View>
      <View className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#1380ec] to-transparent opacity-20" />
    </View>
  );
};

export default Header;
