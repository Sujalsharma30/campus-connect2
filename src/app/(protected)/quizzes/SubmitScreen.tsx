import BreakdownSection from "@/src/components/Quizz/BreakDownSection";
import DonutChart from "@/src/components/Quizz/DonutChart";
import InfoCard from "@/src/components/Quizz/InfoCard";
import ProgressSection from "@/src/components/Quizz/ProgressSection";
import QuestionReviewList from "@/src/components/Quizz/QuestionReviewList";
import Header from "@/src/components/Quizz/QuizzResultHeader";
import Footer from "@/src/components/Quizz/SubmitQuizzFooter";
import React from "react";
import { View, ScrollView, Text } from "react-native";

const quizData = {
  score: 8,
  totalQuestions: 10,
  timeTaken: "9 min 12 sec",
  streak: 3,
  mathProgress: {
    old: 45,
    new: 55,
  },
  questions: [
    {
      id: 1,
      text: "Question 1",
      correct: true,
      correctAnswer: "15",
      yourAnswer: "15",
    },
    {
      id: 2,
      text: "Question 2",
      correct: true,
      correctAnswer: "x=5",
      yourAnswer: "x=5",
    },
    {
      id: 3,
      text: "Question 3",
      correct: false,
      correctAnswer: "12",
      yourAnswer: "10",
    },
  ],
};

export default function QuizResultsScreen() {
  const percentage = Math.round(
    (quizData.score / quizData.totalQuestions) * 100
  );

  return (
    <View className="flex-1 bg-slate-50">
      <Header />
      <ScrollView className="p-4 gap-6 flex-col">
        <InfoCard>
          <DonutChart percentage={percentage} />
          <View className=" flex-col items-center mt-2">
            <View className=" flex-row items-center justify-center">
              <Text className="text-xl font-bold text-slate-800">
                {percentage}%
              </Text>
            </View>
            <View className="mt-2 flex-row items-center gap-2 rounded-full bg-yellow-100 px-4 py-1">
              <Text className="text-lg">🏅</Text>
              <Text className="text-sm font-medium text-yellow-800">
                “Algebra Star!”
              </Text>
            </View>
            <Text className="text-slate-600 text-base font-normal leading-normal mt-4">
              Great work, Riya! You’re improving in Maths.
            </Text>
          </View>
        </InfoCard>

        <BreakdownSection
          score={quizData.score}
          total={quizData.totalQuestions}
          time={quizData.timeTaken}
        />

        <ProgressSection
          streak={quizData.streak}
          mathProgress={quizData.mathProgress}
        />

        <QuestionReviewList questions={quizData.questions} />
      </ScrollView>
      <Footer />
    </View>
  );
}
