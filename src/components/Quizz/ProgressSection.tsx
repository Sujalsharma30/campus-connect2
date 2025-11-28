import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ProgressSectionProps {
  streak: number;
  mathProgress: {
    old: number;
    new: number;
  };
}

const ProgressSection = ({ streak, mathProgress }: ProgressSectionProps) => {
  const progressChange = mathProgress.new - mathProgress.old;
  const progressColor = progressChange >= 0 ? "text-green-600" : "text-red-600";

  return (
    <View>
      <View className="text-slate-800 text-lg font-bold  px-2 pb-3 pt-2 flex-row items-center gap-3">
        <MaterialIcons name="menu-book" size={24} color="#1e293b" />
        <Text className="text-slate-800 text-lg font-bold leading-tight tracking-tight">
        Subject Progress Update
        </Text>
      </View>
      <View className="bg-white rounded-xl shadow-sm divide-y divide-slate-200">
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">Maths Progress</Text>
          <Text className="text-slate-800 font-medium text-base">
            {mathProgress.old}% → {mathProgress.new}%
            <Text className={`ml-1 ${progressColor}`}>
              ({progressChange > 0 ? "+" : ""}
              {progressChange}%)
            </Text>
          </Text>
        </View>
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">New Streak</Text>
          <Text className="text-slate-800 font-medium text-base">
            🔥 {streak} days in a row!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressSection;
