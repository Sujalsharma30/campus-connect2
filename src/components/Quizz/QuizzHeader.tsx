import { View, Text } from "react-native";

export function QuizzHeader() {
  return (
    <View className="top-6 z-10 bg-white/80 p-4 shadow-sm mb-6">
      <View className="text-center">
        <Text className="text-2xl font-bold tracking-tight text-gray-900">
          📝 Quizzes
        </Text>
        <Text className="mt-1 text-sm text-gray-500">
          Practice and test your knowledge.
        </Text>
      </View>
    </View>
  );
}
