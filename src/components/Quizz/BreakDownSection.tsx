import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface BreakdownSectionProps {
  score: number;
  total: number;
  time: string;
}

const BreakdownSection = ({ score, total, time }: BreakdownSectionProps) => {
  return (
    <View>
      <Text className="text-slate-800 text-lg font-bold leading-tight tracking-tight px-2 pb-3 pt-2 flex items-center">
        <MaterialIcons name="bar-chart" size={24} color="#1e293b" />
        Performance Breakdown
      </Text>
      <View className="bg-white rounded-xl shadow-sm divide-y divide-slate-200">
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">Total Questions</Text>
          <Text className="text-slate-800 font-medium text-base">{total}</Text>
        </View>
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">Correct</Text>
          <Text className="text-green-600 font-medium text-base flex-row items-center">
            {score}{" "}
            <MaterialIcons name="check-circle" size={18} color="#22c55e" />
          </Text>
        </View>
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">Incorrect</Text>
          <Text className="text-red-600 font-medium text-base flex-row items-center">
            {total - score}{" "}
            <MaterialIcons name="cancel" size={18} color="#ef4444" />
          </Text>
        </View>
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-slate-600 text-base">Time Taken</Text>
          <Text className="text-slate-800 font-medium text-base">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default BreakdownSection;
