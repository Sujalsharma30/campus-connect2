import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface LessonItemProps {
  icon: string;
  title: string;
  status: string;
}

const LessonItem = ({ icon, title, status }: LessonItemProps) => {
  const router = useRouter()
  const isCompleted = status === "completed";
  const isContinue = status === "continue";
  const isNotStarted = status === "not-started" || status === "not-attempted";

  const statusText = isCompleted
    ? "Completed"
    : isContinue
      ? "Continue"
      : isNotStarted
        ? status === "not-started"
          ? "Not Started"
          : "Not Attempted"
        : "";
  const statusColor = isCompleted
    ? "text-green-600"
    : isContinue
      ? "text-[#137fec]"
      : "text-[#4c739a]";
  const opacityClass = isNotStarted ? "opacity-60" : "";

  const getStatusIcon = () => {
    if (isCompleted) {
      return <MaterialIcons name="check-circle" size={20} color="#22c55e" />;
    }
    if (isContinue) {
      return <MaterialIcons name="play-circle" size={20} color="#137fec" />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between rounded-lg bg-white border border-zinc-200 p-3 shadow-sm ${opacityClass}`}
      disabled={isNotStarted}
      onPress={() => router.push('/(protected)/Lessons/')}
    >
      <View className="flex-row items-center gap-4">
        <View className="size-12 items-center justify-center rounded-lg bg-[#e7edf3]">
          <Text className="text-2xl">{icon}</Text>
        </View>
        <View>
          <Text className="font-medium text-[#0d141b]">{title}</Text>
          <Text className="text-sm text-[#4c739a] capitalize">
            {status.replace("-", " ")}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        {getStatusIcon()}
        <Text className={`text-sm font-medium ${statusColor}`}>
          {statusText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LessonItem;
