import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Lesson = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  title: string;
};

type SubjectSectionProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
};

const SubjectSection = ({ iconName, iconColor, iconBgColor, title, subtitle, lessons }: SubjectSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="rounded-xl border border-transparent bg-white shadow-sm overflow-hidden">
      <Pressable
        className="flex-row items-center justify-between p-4"
        onPress={() => setIsOpen(!isOpen)}
      >
        <View className="flex-row items-center gap-3">
          <View className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
            <MaterialIcons name={iconName} size={24} color={iconColor} />
          </View>
          <View>
            <Text className="font-semibold text-gray-900">{title}</Text>
            <Text className="text-sm text-gray-500">{subtitle}</Text>
          </View>
        </View>
        <MaterialIcons
          name="expand-more"
          size={24}
          color="#4B5563"
          style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}
        />
      </Pressable>
      {isOpen && (
        <View className="border-t border-gray-100 p-2">
          {lessons.map((lesson, index) => (
            <Pressable key={index} className="flex-row items-center gap-4 rounded-lg px-4 py-3 active:bg-gray-50">
              <MaterialIcons name={lesson.iconName} size={24} color={lesson.iconColor} />
              <Text className="flex-1 font-medium">{lesson.title}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default function DownloadList() {
  return (
    <View className="flex-col gap-3 p-4 bg-white rounded-2xl border border-zinc-200 shadow-md my-6">
      <SubjectSection
        iconName="calculate"
        iconColor="#3B82F6"
        iconBgColor="bg-blue-100"
        title="Mathematics"
        subtitle="3 lessons downloaded"
        lessons={[
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 1: Numbers" },
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 2: Addition" },
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 3: Subtraction" },
        ]}
      />
      <SubjectSection
        iconName="science"
        iconColor="#A855F7"
        iconBgColor="bg-purple-100"
        title="Science"
        subtitle="2 lessons + 1 quiz downloaded"
        lessons={[
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 1: Biology" },
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 2: Chemistry" },
          { iconName: "quiz", iconColor: "#F97316", title: "Quiz 1: Science" },
        ]}
      />
      <SubjectSection
        iconName="translate"
        iconColor="#10B981"
        iconBgColor="bg-green-100"
        title="English"
        subtitle="1 lesson downloaded"
        lessons={[
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 1: Grammar" },
        ]}
      />
      <SubjectSection
        iconName="book"
        iconColor="#FBBF24"
        iconBgColor="bg-yellow-100"
        title="Punjabi"
        subtitle="2 lessons downloaded"
        lessons={[
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 1: Vocabulary" },
          { iconName: "play-circle-outline", iconColor: "#10B981", title: "Lesson 2: Reading" },
        ]}
      />
    </View>
  );
}