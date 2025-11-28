import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface HeaderProps {
  title: string;
  progress: number;
}

const Header = ({ title, progress }: HeaderProps) => {
  const router = useRouter();
  return (
    <View className="top-6 z-10 flex-row items-center justify-between bg-slate-50/80 p-4 mb-8">
      <TouchableOpacity
        className="flex-row items-center gap-3"
        onPress={() => router.back()}
      >
        <MaterialIcons name="arrow-back" size={24} color="#0d141b" />
        <Text className="text-sm font-semibold text-[#0d141b]">Back</Text>
      </TouchableOpacity>
      <View className="flex-row items-center gap-2">
        <Text className="text-lg font-bold text-[#0d141b]">{title}</Text>
        <Text className="text-2xl">📐</Text>
      </View>
      <Text className="text-sm font-bold text-[#137fec]">{progress}%</Text>
    </View>
  );
};

export default Header;
