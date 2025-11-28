import React from 'react';
import { Text } from 'react-native';

const StyledText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text className="bg-slate-100 text-slate-800 rounded-md px-1.5 py-0.5 font-mono">
      {children}
    </Text>
  );
};

export default StyledText;