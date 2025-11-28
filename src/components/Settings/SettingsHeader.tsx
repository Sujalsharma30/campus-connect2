import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export function SettignsHeader() {
  return (
    <View className="top-6 z-10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
      <View className="text-center">
        <View className="flex-row items-center justify-center gap-2">
          <MaterialIcons name="settings" size={24} color="#1F2937" />
          <Text className="text-xl font-bold text-gray-900">Settings</Text>
        </View>
        <Text className="text-sm text-gray-500 text-center">
          Personalize your learning app.
        </Text>
      </View>
    </View>
  );
}
