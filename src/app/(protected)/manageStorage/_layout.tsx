import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ManageStoragelayout = () => {
  const router = useRouter();
  function backHandler() {
    router.back();
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true, // This enables the header
          header: () => <Header onPress={backHandler} />, // This replaces the default header with your custom component
        }}
      />
    </Stack>
  );
};

function Header({ onPress }: { onPress: void }) {
  return (
    <View className="top-6 z-10 border-b border-gray-100 bg-white/80 p-4 backdrop-blur-sm">
      <View className="flex-row items-center gap-6">
        <TouchableOpacity
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 active:bg-gray-100"
          onPress={onPress}
        >
          <MaterialIcons name="arrow-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="storage" size={28} color="black" />
          <Text className="text-xl font-bold text-gray-900">
            Manage Storage
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ManageStoragelayout;
