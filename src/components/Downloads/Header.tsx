import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter()
  return (
    <View className="top-6 z-10 border-b border-zinc-300 bg-white/80 p-4 backdrop-blur-sm mb-6">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="folder" size={28} color="black" />
          <Text className="text-xl font-bold text-gray-900">
            My Downloads
          </Text>
        </View>
        <TouchableOpacity className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600" onPress={() => router.push('/(protected)/manageStorage/')}>
          <MaterialIcons name="settings" size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>
      {/* <Text className="mt-1 text-sm text-gray-500">
        Available offline, no internet needed.
      </Text> */}
    </View>
  );
}