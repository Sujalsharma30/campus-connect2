import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function QuizSummary() {
  const completed = 2;
  const total = 4;
  const progress = (completed / total) * 100;
  const strokeDashoffset = 100 - progress;

  return (
    <View className="  bg-white px-4 pb-4 pt-2 mb-20">
      <View className="flex items-center justify-between rounded-md bg-gray-100 p-4">
        <View className="flex flex-row items-center gap-4">
          <View className="relative h-16 w-16">
            <Svg height="100%" width="100%" viewBox="0 0 36 36">
              <Circle
                cx="18"
                cy="18"
                r="16"
                stroke="#E5E7EB" // gray-200
                strokeWidth="2"
                fill="none"
              />
              <Circle
                cx="18"
                cy="18"
                r="16"
                stroke="#EF4444" // red-500 from --primary-color
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={strokeDashoffset}
                fill="none"
                rotation="-90"
                originX="18"
                originY="18"
              />
            </Svg>
            <View className="absolute inset-0 flex items-center justify-center">
              <Text className="text-sm font-bold text-gray-800">{progress}%</Text>
            </View>
          </View>
          <View>
            <Text className="font-semibold text-gray-800">Quizzes Completed: {completed}/{total}</Text>
            <Text className="text-sm text-gray-500">You attempted quizzes 2 days in a row 🎉</Text>
          </View>
        </View>
      </View>
    </View>
  );
}