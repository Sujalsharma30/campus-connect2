import React from 'react';
import { View, Text } from 'react-native';
import ChapterItem from './ChapterItem';

interface Chapter {
  icon: string;
  title: string;
  progress: number;
  locked: boolean;
}

interface ChapterListProps {
  chapters: Chapter[];
}

const ChapterList = ({ chapters }: ChapterListProps) => {
  return (
    <View>
      <Text className="px-1 pb-3 text-lg font-bold text-slate-800">Chapters / Units</Text>
      <View className="gap-3 flex-col">
        {chapters.map((chapter, index) => (
          <ChapterItem key={index} {...chapter} />
        ))}
      </View>
    </View>
  );
};

export default ChapterList;