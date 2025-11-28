import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SettingsItem from './SettingsItem';


type SettingsItemProps = {
  type: 'link' | 'toggle' | 'profile';
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle?: string;
  defaultState?: boolean;
  action?: { type: 'edit' };
};

type SettingsSectionProps = {
  title: string;
  items: SettingsItemProps[];
};

export default function SettingsSection({ title, items }: SettingsSectionProps) {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-800 mb-3">{title}</Text>
      <View className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {items.map((item, index) => (
          <SettingsItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
}