import React from 'react';
import { View, Text } from 'react-native';
import LessonItem from './LessonItem';

interface Lesson {
  type: string;
  title: string;
  status: string;
  icon: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList = ({ lessons }: LessonListProps) => {
  return (
    <View className="mb-6">
      <Text className="mb-4 text-lg font-bold text-[#0d141b]">Lessons</Text>
      <View className="gap-3">
        {lessons.map((lesson, index) => (
          <LessonItem key={index} {...lesson} />
        ))}
      </View>
    </View>
  );
};

export default LessonList;