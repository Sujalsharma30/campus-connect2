import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuickActions = () => {
  return (
    <View className="mb-6">
      <Text className="mb-4 text-lg font-bold text-[#0d141b]">Quick Actions</Text>
      <View className="flex-col gap-3">
        <TouchableOpacity className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-[#137fec] border border-zinc-200 px-4 py-3 shadow-sm">
          <MaterialIcons name="play-arrow" size={20} color="white" />
          <Text className="text-sm font-bold text-white">Continue Where You Left Off</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-white border border-zinc-200 px-4 py-3 shadow-sm">
          <MaterialIcons name="edit" size={20} color="#0d141b" />
          <Text className="text-sm font-bold text-[#0d141b]">Take Chapter Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row w-full items-center justify-center gap-2 rounded-lg bg-white border border-zinc-200 px-4 py-3 shadow-sm">
          <MaterialIcons name="download" size={20} color="#0d141b" />
          <Text className="text-sm font-bold text-[#0d141b]">Download All Lessons</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActions;