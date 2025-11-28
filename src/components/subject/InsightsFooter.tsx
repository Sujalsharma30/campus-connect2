import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InsightsFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="sticky bottom-0 bg-white/80 backdrop-blur-sm">
      <View className="border-t border-gray-200 p-4">
        <Pressable
          onPress={toggleDetails}
          className="flex-row items-center justify-between"
        >
          <Text className="font-semibold text-slate-700">
            Insights & Quick Actions
          </Text>
          <MaterialIcons
            name="expand-more"
            size={24}
            color="#475569"
            style={{ transform: [{ rotate: isOpen ? "180deg" : "0deg" }] }}
          />
        </Pressable>
        {isOpen && (
          <View className="mt-4 gap-4 flex-col">
            <View className="gap-2 flex-col">
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="search" size={20} color="#f97316" />
                <Text className="text-sm font-bold text-slate-600">
                  Weak Areas:
                </Text>
                <Text className="text-sm text-slate-600">
                  Struggling with Geometry
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="history" size={20} color="#3b82f6" />
                <Text className="text-sm font-bold text-slate-600">
                  Recent Activity:
                </Text>
                <Text className="text-sm text-slate-600">
                  Last studied Algebra yesterday
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons
                  name="local-fire-department"
                  size={20}
                  color="#ef4444"
                />
                <Text className="text-sm font-bold text-slate-600">
                  Streak:
                </Text>
                <Text className="text-sm text-slate-600">
                  Studied 4 days in a row! 🔥
                </Text>
              </View>
            </View>
            <View className="gap-2 flex-col">
              <Pressable className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5">
                <MaterialIcons name="play-circle" size={20} color="white" />
                <Text className="text-sm font-bold text-white">
                  Continue Last Chapter
                </Text>
              </Pressable>
              <Pressable className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-blue-100 px-4 py-2.5">
                <MaterialIcons name="quiz" size={20} color="#137fec" />
                <Text className="text-sm font-bold text-blue-500">
                  Full Subject Test
                </Text>
              </Pressable>
              <Pressable className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5">
                <MaterialIcons
                  name="download-for-offline"
                  size={20}
                  color="#475569"
                />
                <Text className="text-sm font-bold text-slate-700">
                  Download All Notes
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default InsightsFooter;
