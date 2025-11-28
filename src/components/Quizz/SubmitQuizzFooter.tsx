import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <View className="px-4 pt-3 pb-2">
        <TouchableOpacity
          className="flex-row w-full items-center justify-center rounded-xl h-12 px-5 bg-[#137fec] text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-blue-500/30"
          activeOpacity={0.8}
        >
          <Text className="text-white text-base font-bold">Continue</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-around items-center border-t border-slate-200 pt-1 pb-2">
        <TouchableOpacity
          className="flex-col items-center justify-center gap-1 text-slate-500 flex-1"
          activeOpacity={0.8}
        >
          <MaterialIcons name="home" size={24} color="#64748b" />
          <Text className="text-xs font-medium text-slate-500">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-col items-center justify-center gap-1 text-slate-500 flex-1"
          activeOpacity={0.8}
        >
          <MaterialIcons name="slideshow" size={24} color="#64748b" />
          <Text className="text-xs font-medium text-slate-500">Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-col items-center justify-center gap-1 text-[#137fec] flex-1"
          activeOpacity={0.8}
        >
          <View className="relative">
            <MaterialIcons name="quiz" size={24} color="#137fec" />
            <View className="w-5 h-5 rounded-full bg-[#137fec] opacity-10 absolute -top-1 -right-2" />
          </View>
          <Text className="text-xs font-bold text-[#137fec]">Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-col items-center justify-center gap-1 text-slate-500 flex-1"
          activeOpacity={0.8}
        >
          <MaterialIcons name="person" size={24} color="#64748b" />
          <Text className="text-xs font-medium text-slate-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
