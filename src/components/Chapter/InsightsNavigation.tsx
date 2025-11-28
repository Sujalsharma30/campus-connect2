import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InsightsSectionProps {
  insights: {
    weakConcepts: string;
    lastStudied: string;
    streak: string;
  };
}

const InsightsSection = ({ insights }: InsightsSectionProps) => {
  return (
    <View className='mb-8'>
      <Text className="mb-4 text-lg font-bold text-[#0d141b]">Insights</Text>
      <View className="space-y-3">
        <View className="flex-row items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
          <MaterialIcons name="search" size={24} color="#4c739a" />
          <Text>
            <Text className="font-bold">Weak Concepts:</Text>
            <Text> {insights.weakConcepts}</Text>
          </Text>
        </View>
        <View className="flex-row items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
          <MaterialIcons name="schedule" size={24} color="#4c739a" />
          <Text>
            <Text className="font-bold">Last Studied:</Text>
            <Text> {insights.lastStudied}</Text>
          </Text>
        </View>
        <View className="flex-row items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
          <MaterialIcons name="local-fire-department" size={24} color="#f97316" />
          <Text>
            <Text className="font-bold">Streak Progress:</Text>
            <Text> {insights.streak}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InsightsSection;