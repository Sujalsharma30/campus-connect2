import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Quiz = {
  id: string;
  title: string;
  subject: string;
  status: string;
  questions: number;
  date?: string;
  score?: number;
};

type QuizListProps = {
  quizzes: Quiz[];
  onQuizPress: (id: string) => void;
};

export default function QuizList({ quizzes, onQuizPress }: QuizListProps) {
  if (quizzes.length === 0) {
    return (
      <View className="items-center justify-center py-10">
        <Text className="text-slate-400">No quizzes found.</Text>
      </View>
    );
  }

  return (
    <View className="gap-4">
      {quizzes.map((quiz) => (
        <Pressable
          key={quiz.id}
          onPress={() => onQuizPress(quiz.id)}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex-row justify-between items-center active:bg-slate-50"
        >
          <View className="flex-1">
            <View className="flex-row items-center gap-2 mb-1">
              <Text className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {quiz.subject}
              </Text>
              {quiz.status === 'Completed' && (
                <View className="bg-green-100 px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-bold text-green-700">Done</Text>
                </View>
              )}
            </View>
            <Text className="text-slate-900 font-bold text-base mb-1">
              {quiz.title}
            </Text>
            <Text className="text-slate-400 text-xs">
              {quiz.questions} Questions • {quiz.date}
            </Text>
          </View>

          {quiz.score !== undefined ? (
             <View className="items-end">
                <Text className="text-xl font-bold text-slate-900">{quiz.score}%</Text>
                <Text className="text-xs text-slate-400">Score</Text>
             </View>
          ) : (
            <MaterialIcons name="chevron-right" size={24} color="#cbd5e1" />
          )}
        </Pressable>
      ))}
    </View>
  );
}