import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface InfoCardProps {
  children: ReactNode;
}

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <View className="bg-white rounded-xl shadow-sm p-6 text-center">
      {children}
    </View>
  );
};

export default InfoCard;