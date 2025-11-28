import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function QuizHeader() {
  const router = useRouter()
  return (
    <View className=" top-6 z-10  shadow-sm mb-12">
      <View className=" flex-row items-center p-4">
        <Pressable className=" flex-row items-center gap-1 " onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#1b0e0e" />
          <Text className="text-sm font-medium">Back</Text>
        </Pressable>
        <Text className="text-lg font-bold text-center flex-1 ">
          Mathematics Quiz #2
        </Text>
        <View className=" flex-row items-center gap-2 ">
          <MaterialIcons name="timer" size={20} color="#1b0e0e" />
          {/* <Text className="text-sm font-medium">12:34</Text> */}
        </View>
      </View>
    </View>
  );
}
