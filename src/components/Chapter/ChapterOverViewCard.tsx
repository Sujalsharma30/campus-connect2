import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

interface ChapterOverviewCardProps {
  progress: number;
  completed: string;
  description: string;
}

const ChapterOverviewCard = ({ progress, completed, description }: ChapterOverviewCardProps) => {
  const [isOfflineEnabled, setIsOfflineEnabled] = useState(false);
  const toggleSwitch = () => setIsOfflineEnabled(previousState => !previousState);

  return (
    <View className="mb-6 rounded-xl bg-white p-4 shadow-sm">
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-base font-bold text-[#0d141b]">Chapter Overview</Text>
        <View className="flex-row items-center gap-2">
          <Text className="text-sm text-[#4c739a]">Download for Offline</Text>
          <Switch
            trackColor={{ false: '#e2e8f0', true: '#137fec' }}
            thumbColor={isOfflineEnabled ? '#ffffff' : '#f4f3f4'}
            ios_backgroundColor="#e2e8f0"
            onValueChange={toggleSwitch}
            value={isOfflineEnabled}
            className="w-11 h-6 rounded-full"
          />
        </View>
      </View>
      <Text className="mb-4 text-sm text-[#4c739a]">{description}</Text>
      <View>
        <View className="mb-1 flex-row justify-between">
          <Text className="text-sm font-medium">Lessons Completed: {completed}</Text>
        </View>
        <View className="h-2.5 w-full rounded-full bg-gray-200">
          <View
            className="h-2.5 rounded-full bg-[#137fec]"
            style={{ width: `${progress}%` }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChapterOverviewCard;