import { View, Text, Pressable } from "react-native";

export default function QuizBody() {
  return (
    <View className="flex-col p-4 gap-6">
      <View className="flex-col gap-2">
        <View className=" flex-row justify-between items-center">
          <Text className=" text-sm font-medium">Q2 of 10</Text>
        </View>
        <View className="w-full bg-secondary rounded-full h-2.5">
          <View
            className=" h-2.5 rounded-full"
            style={{ width: "20%" }}
          />
        </View>
      </View>
      <View className="text-center gap-4 flex-col">
        <Text className=" text-2xl font-bold">
          What is the value of (x + 2)(x – 2)?
        </Text>
      </View>
      <View className="gap-2 flex-col">
        <Pressable className=" bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm flex-row items-center justify-between">
          <Text className="font-medium">x² - 4</Text>
        </Pressable>
        <Pressable className=" bg-white w-full p-4 text-white rounded-xl border shadow-lg  flex-row items-center justify-between">
          <Text className="font-medium ">x² + 4</Text>
        </Pressable>
        <Pressable className=" bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm  flex-row items-center justify-between">
          <Text className=" font-medium">x² - 2x + 4</Text>
        </Pressable>
        <Pressable className=" bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm  flex-row items-center justify-between">
          <Text className="font-medium">x² + 2x - 4</Text>
        </Pressable>
      </View>
    </View>
  );
}
