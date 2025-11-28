import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assumes you're using React Navigation
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-slate-50 p-4 top-6 z-10 mb-8">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="text-[#0d141b] size-10 items-center justify-center rounded-full"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#0d141b" />
        </TouchableOpacity>
        <Text className="text-[#0d141b] text-xl font-bold leading-tight tracking-tight flex-1 text-center">📝 Quiz Results</Text>
        <View className="size-10" />
      </View>
      <Text className="text-slate-500 text-base font-normal leading-normal text-center mt-1">Here’s how you performed!</Text>
    </View>
  );
};

export default Header;