import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FooterNav = () => {
  return (
    <View className=" mt-auto border-t border-[#e7edf3] bg-slate-50/95 pb-3 pt-2 backdrop-blur-sm">
      <View className="flex-row justify-around">
        <TouchableOpacity className="flex-col items-center justify-end gap-1">
          <MaterialIcons name="home" size={24} color="#4c739a" />
          <Text className="text-xs font-medium text-[#4c739a]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center justify-end gap-1">
          <MaterialIcons name="school" size={24} color="#137fec" />
          <Text className="text-xs font-medium text-[#137fec]">Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center justify-end gap-1">
          <MaterialIcons name="quiz" size={24} color="#4c739a" />
          <Text className="text-xs font-medium text-[#4c739a]">Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center justify-end gap-1">
          <MaterialIcons name="person" size={24} color="#4c739a" />
          <Text className="text-xs font-medium text-[#4c739a]">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterNav;