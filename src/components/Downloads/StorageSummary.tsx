import React from 'react';
import { View, Text } from 'react-native';

export default function StorageSummary() {
  const primaryColor = '#1fd6c7';
  const usedStoragePercentage = 22.5;

  return (
    <View className="rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-md">
      <Text className="text-lg font-semibold text-gray-900">Total Used Space</Text>
      <Text className="mt-1 text-3xl font-bold text-gray-800">450 MB</Text>
      <Text className="mt-1 text-sm text-gray-500">out of 2 GB available on device</Text>
      <View className="mt-4 h-2.5 w-full rounded-full bg-gray-200">
        <View
          className="h-2.5 rounded-full"
          style={{ backgroundColor: primaryColor, width: `${usedStoragePercentage}%` }}
        />
      </View>
    </View>
  );
}