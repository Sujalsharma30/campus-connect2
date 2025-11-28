import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DownloadForOffline() {
  return (
    <View className="mb-24 px-1">
      <View className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        {/* Header Section */}
        <View className="flex-row items-center gap-3 mb-2">
            <View className="bg-slate-50 p-2.5 rounded-full">
                <MaterialIcons name="wifi-off" size={22} color="#475569" />
            </View>
            <View>
                <Text className="text-lg font-bold text-slate-900">Offline Access</Text>
                <Text className="text-xs text-slate-500 font-medium">Access materials without internet</Text>
            </View>
        </View>

        {/* Info Text */}
        <Text className="text-sm text-slate-600 mt-3 mb-5 leading-relaxed">
          <Text className="font-bold text-amber-600">2 Updates Available:</Text> Data Structures (Unit 3 Notes), Web Engineering (Lab Manual).
        </Text>

        {/* Action Button */}
        <Pressable 
            className="flex-row w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 active:bg-teal-700 shadow-sm"
            style={{ elevation: 2 }}
        >
          <MaterialIcons name="download" size={22} color="white" />
          <Text className="text-white font-bold text-base">Download All (45 MB)</Text>
        </Pressable>
      </View>
    </View>
  );
}