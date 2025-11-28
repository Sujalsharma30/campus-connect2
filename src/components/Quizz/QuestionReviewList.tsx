import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Question {
  id: number;
  text: string;
  correct: boolean;
  correctAnswer: string;
  yourAnswer: string;
}

interface QuestionReviewListProps {
  questions: Question[];
}

const QuestionReviewList = ({ questions }: QuestionReviewListProps) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(3);

  const toggleOpen = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <View className="">
      <Text className=" text-slate-800 text-lg font-bold leading-tight tracking-tight px-2 pb-3 pt-2">
        Question Review List
      </Text>
      <View className="flex-col gap-3 mb-6">
        {questions.map((question) => {
          const isCorrect = question.correct;
          const statusText = isCorrect ? "Correct ✅" : "Incorrect ❌";
          const statusColor = isCorrect ? "text-green-600" : "text-red-600";
          const isOpen = openQuestion === question.id;

          return (
            <View
              key={question.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <Pressable
                onPress={() => toggleOpen(question.id)}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <Text className="text-slate-800 font-medium">
                  {question.text}:{" "}
                  <Text className={statusColor}>{statusText}</Text>
                </Text>
                <MaterialIcons
                  name="expand-more"
                  size={24}
                  color="#64748b"
                  style={{
                    transform: [{ rotate: isOpen ? "180deg" : "0deg" }],
                  }}
                />
              </Pressable>
              {isOpen && (
                <View className="px-4 pb-4 border-t border-slate-200">
                  <Text className="text-green-600 text-sm mt-2">
                    Correct Answer: {question.correctAnswer}
                  </Text>
                  <Text className="text-red-600 text-sm">
                    Your Answer: {question.yourAnswer}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuestionReviewList;
