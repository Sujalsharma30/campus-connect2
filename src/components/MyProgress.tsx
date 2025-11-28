import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

export default function MyProgress() {
  const progress = 62;
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius; // approx 100
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View className="mb-6 px-1">
      <Text className="text-lg font-bold text-slate-900 mb-4">
        Overall Progress
      </Text>
      
      <View className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <View className="flex-row items-center gap-5">
          {/* Circular Progress Bar */}
          <View className="relative h-24 w-24">
            <Svg className="h-full w-full" viewBox="0 0 36 36">
              {/* Background Track */}
              <Path
                fill="none"
                stroke="#f1f5f9" // slate-100
                strokeWidth="3.5"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress Line */}
              <Path
                fill="none"
                stroke="#0f766e" // teal-700 to match theme
                strokeWidth="3.5"
                strokeDasharray={`${circumference}, ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                // Rotate 90deg so it starts from top
                transform="rotate(0 18 18)" 
              />
            </Svg>
            
            {/* Center Text */}
            <View className="absolute inset-0 items-center justify-center">
              <Text className="text-xl font-bold text-slate-800">
                {progress}%
              </Text>
            </View>
          </View>

          {/* Text Summary */}
          <View className="flex-1">
            <Text className="font-bold text-slate-800 text-base">
              Keep it up!
            </Text>
            <Text className="text-sm text-slate-500 mt-1 leading-relaxed">
              You've completed <Text className="font-bold text-teal-700">62%</Text> of your semester goals. Consistent effort pays off! 🎉
            </Text>
          </View>
        </View>

        {/* Badges / Stats */}
        <View className="mt-5 flex-row flex-wrap gap-2 border-t border-slate-50 pt-4">
          <View className="flex-row items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 border border-amber-100">
            <MaterialIcons name="local-fire-department" size={16} color="#d97706" />
            <Text className="text-xs font-semibold text-amber-700">
              3 Day Streak
            </Text>
          </View>
          
          <View className="flex-row items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 border border-blue-100">
            <MaterialIcons name="emoji-events" size={16} color="#2563eb" />
            <Text className="text-xs font-semibold text-blue-700">
              Top 10%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}