import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface ChapterItemProps {
  icon: string;
  title: string;
  progress: number;
  locked: boolean;
}

const ChapterItem = ({ icon, title, progress, locked }: ChapterItemProps) => {
  const containerStyle = locked ? "opacity-60" : "";
  const progressStyle = { width: `${progress}%` };
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push("/(protected)/Chapter/")}
      className={`flex-row items-center gap-4 rounded-xl bg-white p-3 shadow-sm ${containerStyle}`}
    >
      <View className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <Text className="text-2xl">{icon}</Text>
      </View>
      <View className="flex-grow">
        <Text className="font-semibold text-slate-800">{title}</Text>
        <View className="flex-row items-center gap-2">
          <View className="h-1.5 flex-grow rounded-full bg-gray-200">
            <View
              className="h-1.5 rounded-full"
              style={{ width: `${progress}%`, backgroundColor: "#1173d4" }}
            />
          </View>
          <Text className="text-xs font-medium text-slate-500">
            {progress}%
          </Text>
        </View>
      </View>
      <View className="flex-row gap-1">
        <TouchableOpacity className="h-9 w-9 rounded-full bg-blue-50 items-center justify-center">
          <MaterialIcons name="play-arrow" size={20} color="#137fec" />
        </TouchableOpacity>
        <TouchableOpacity className="h-9 w-9 rounded-full bg-gray-100 items-center justify-center">
          <MaterialIcons name="description" size={20} color="#475569" />
        </TouchableOpacity>
        <TouchableOpacity className="h-9 w-9 rounded-full bg-gray-100 items-center justify-center">
          <MaterialIcons name="download" size={20} color="#475569" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ChapterItem;
