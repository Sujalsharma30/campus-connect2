import React from "react";
import { View, Text } from "react-native";

interface SubjectProgressCardProps {
  progress: number;
  completed: string;
  quizzes: number;
  bestScore: string;
  quote: string;
}

const SubjectProgressCard = ({
  progress,
  completed,
  quizzes,
  bestScore,
  quote,
}: SubjectProgressCardProps) => {
  return (
    <View className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
      <View className="flex-row items-center gap-4">
        <View className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
          <Text className="text-4xl">📐</Text>
        </View>
        <View className="flex-grow">
          <Text className="text-xl font-bold text-slate-800">Mathematics</Text>
          <Text className="mt-1 text-sm text-slate-500">
            You’ve completed {progress}% of this subject
          </Text>
          <View className="mt-2 h-2.5 w-full rounded-full bg-gray-200">
            <View
              className="h-2.5 rounded-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>
      </View>
      <View className="mt-4 flex-row justify-between gap-2">
        <View className="flex-1 text-center">
          <Text className="text-sm text-slate-500">Completed</Text>
          <Text className="font-bold text-slate-800">✅ {completed}</Text>
        </View>
        <View className="flex-1 text-center">
          <Text className="text-sm text-slate-500">Quizzes</Text>
          <Text className="font-bold text-slate-800">📝 {quizzes}</Text>
        </View>
        <View className="flex-1 text-center">
          <Text className="text-sm text-slate-500">Best Score</Text>
          <Text className="font-bold text-slate-800">🏆 {bestScore}</Text>
        </View>
      </View>
      <Text className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
        {quote}
      </Text>
    </View>
  );
};

export default SubjectProgressCard;
