import React from "react";
import { View, Text } from "react-native";

interface DonutChartProps {
  percentage: number;
}

const DonutChart = ({ percentage }: DonutChartProps) => {
  // A proper implementation would use react-native-svg to draw the arc.
  // This is a simplified visual representation.
  return (
    <View
      className="relative mx-auto w-[150px] h-[150px] rounded-full justify-center items-center"
      style={{ backgroundColor: "#e0e7ff" }}
    >
      <View
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          backgroundColor: "#137fec",
          // Note: Simulating a fill. A real conic-gradient is complex in RN.
          // This would be replaced with an SVG component.
          transform: [{ scale: percentage / 100 }],
        }}
      />
      <View className="absolute w-[120px] h-[120px] rounded-full bg-slate-50 flex items-center justify-center">
        <Text className="text-2xl font-bold text-slate-800">{percentage}%</Text>
        <Text className="text-sm text-slate-500">Correct</Text>
      </View>
    </View>
  );
};

export default DonutChart;
