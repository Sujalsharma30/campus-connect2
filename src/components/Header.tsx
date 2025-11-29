import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    // Changed bg-gray-50 to bg-white/95 for a cleaner look
    // Added border-b border-amber-100 to separate header from content
    <View className="z-10 bg-white/95 backdrop-blur-sm px-4 pt-6 pb-4 border-b border-amber-100">
      
      <View className="flex-row items-center justify-between">
        <View>
           {/* Added a small sub-label for better hierarchy */}
           {/* <Text className="text-xs font-medium text-amber-600 mb-0.5">Welcome Back,</Text> */}
           {/* <Text className="text-2xl font-bold text-gray-900">👋 Riya!</Text> */}
        </View>

        {/* Status Badge: Green -> Amber */}
        <View className="flex-row items-center gap-2 rounded-full bg-amber-100 px-3 py-1 border border-amber-200">
          
          {/* Animated dot */}
          <View className="relative h-2 w-2">
            {/* Ping Animation: Green -> Amber */}
            <View className="absolute h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></View>
            <View className="relative h-2 w-2 rounded-full bg-amber-500"></View>
          </View>
          
          {/* Text: Green -> Amber */}
          {/* <Text className="text-xs font-bold text-amber-800">Synced Today</Text> */}
        </View>

      </View>
    </View>
  );
}