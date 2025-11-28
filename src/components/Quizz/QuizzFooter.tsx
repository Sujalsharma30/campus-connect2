import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function QuizFooter() {
  const router = useRouter();
  return (
    <View className="border-t mt-auto border-gray-200 p-4">
      <View className=" flex-row justify-between items-center">
        <Pressable className=" flex-row items-center gap-2 text-secondary font-medium">
          <MaterialIcons name="arrow-back" size={24} color="#994d4d" />
          <Text className="text-secondary">Previous</Text>
        </Pressable>
        <Pressable className=" flex-row items-center gap-2 text-secondary font-medium">
          <MaterialIcons name="bookmark-border" size={24} color="#994d4d" />
          <Text className="text-secondary">Mark for Review</Text>
        </Pressable>
        <Pressable
          className=" flex-row items-center gap-2  font-bold"
          onPress={() => router.push("/(protected)/quizzes/SubmitScreen")}
        >
          <Text className="">Next</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#ea2a2a" />
        </Pressable>
      </View>
    </View>
  );
}
