import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function StorageInfo() {
  const primaryColor = '#1fd6c7';
  const usedStoragePercentage = 22.5;

  return (
    <View className="rounded-xl border border-zinc-200 bg-white p-4 shadow-md">
      <Text className="font-semibold text-gray-900">Storage Info</Text>
      <Text className="mt-1 text-sm text-gray-500">
        You’re using 450 MB out of 2 GB.
      </Text>
      <View className="mt-3 h-2 w-full rounded-full bg-gray-200">
        <View
          className="h-2 rounded-full"
          style={{ backgroundColor: primaryColor, width: `${usedStoragePercentage}%` }}
        />
      </View>
      <View className="mt-4 flex-col gap-3 sm:flex-row">
        <TouchableOpacity className="flex-1 flex-row min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-gray-100 px-4 py-2.5 active:bg-gray-200">
          <MaterialIcons name="delete" size={16} color="#4B5563" />
          <Text className="truncate text-sm font-bold text-gray-700">
            Delete old
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 flex-row min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2.5"
          style={{ backgroundColor: primaryColor }}
        >
          <MaterialIcons name="download" size={16} color="black" />
          <Text className="truncate text-sm font-bold text-black">
            Download all
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}