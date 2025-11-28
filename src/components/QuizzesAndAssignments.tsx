import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Define strict types for the assignment data
type AssignmentData = {
  id: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  title: string;
  statusText: string;
  statusColor: string;
  date?: string; // Optional due date
};

const assignments: AssignmentData[] = [
  {
    id: 'qz-101',
    iconName: 'dns', // Database icon
    iconColor: '#0f766e', // Teal-700
    iconBgColor: 'bg-teal-50',
    title: 'Data Structures Quiz #1',
    statusText: 'Due Tomorrow',
    statusColor: 'text-amber-600',
    date: 'Oct 24',
  },
  {
    id: 'as-102',
    iconName: 'code', // Code icon
    iconColor: '#ea580c', // Orange-600
    iconBgColor: 'bg-orange-50',
    title: 'Python Lab: File Handling',
    statusText: 'Pending Submission',
    statusColor: 'text-red-600',
    date: 'Oct 26',
  },
  {
    id: 'pr-103',
    iconName: 'storage', // Storage icon
    iconColor: '#2563eb', // Blue-600
    iconBgColor: 'bg-blue-50',
    title: 'DBMS Project Phase 1',
    statusText: 'Submitted • 95/100',
    statusColor: 'text-green-600',
    date: 'Oct 20',
  },
];

type QuizLinkProps = AssignmentData;

const QuizLink = ({ 
  id, 
  iconName, 
  iconColor, 
  iconBgColor, 
  title, 
  statusText, 
  statusColor,
  date 
}: QuizLinkProps) => {
  const router = useRouter();

  return (
    <Pressable 
      onPress={() => router.push(`/(protected)/assignment/${id}`)}
      className="flex-row items-center justify-between p-4 border-b border-slate-100 last:border-b-0 active:bg-slate-50"
    >
      <View className="flex-row items-center gap-4 flex-1">
        {/* Icon Box */}
        <View className={`${iconBgColor} rounded-xl p-2.5`}>
          <MaterialIcons name={iconName} size={24} color={iconColor} />
        </View>
        
        {/* Text Content */}
        <View className="flex-1">
          <Text className="font-semibold text-slate-800 text-sm" numberOfLines={1}>
            {title}
          </Text>
          <Text className={`text-xs font-medium mt-0.5 ${statusColor}`}>
            {statusText}
          </Text>
        </View>
      </View>

      {/* Date & Chevron */}
      <View className="flex-row items-center gap-2">
        {date && (
          <Text className="text-xs text-slate-400 font-medium">{date}</Text>
        )}
        <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
      </View>
    </Pressable>
  );
};

export default function QuizzesAndAssignments() {
  return (
    <View className="mb-6 px-1">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-slate-900">
          Tasks & Deadlines
        </Text>
        <Pressable>
            <Text className="text-amber-600 font-semibold text-sm">View Calendar</Text>
        </Pressable>
      </View>
      
      <View className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {assignments.map((item) => (
          <QuizLink key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}