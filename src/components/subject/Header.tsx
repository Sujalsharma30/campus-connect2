import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter()
  return (
    <View className="top-6 z-10 flex-row items-center justify-between bg-white/80 p-4 pb-3 mb-8">
      <Pressable className="flex-row items-center gap-3 text-slate-800" onPress={() => router.back()} >
        <MaterialIcons name="arrow-back" size={24} color="#1e293b" />
        <Text className="font-medium text-slate-800">Back</Text>
      </Pressable>
      <Text className="text-lg font-bold text-slate-800">{title} 🎓</Text>
      <View className="w-12" />
    </View>
  );
};

export default Header;
