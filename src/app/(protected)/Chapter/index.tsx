import ChapterOverviewCard from "@/src/components/Chapter/ChapterOverViewCard";
import Header from "@/src/components/Chapter/Header";
import InsightsSection from "@/src/components/Chapter/InsightsNavigation";
import LessonList from "@/src/components/Chapter/LessonList";
import QuickActions from "@/src/components/Chapter/QuickActions";
import React from "react";
import { ScrollView, View } from "react-native";

const chapterData = {
  title: "Algebra Basics",
  progress: 80,
  lessonsCompleted: 4,
  totalLessons: 5,
  description:
    "Learn the basics of algebra: variables, equations, and operations.",
  lessons: [
    {
      type: "video",
      title: "What are Variables?",
      status: "completed",
      icon: "📽️",
    },
    {
      type: "interactive",
      title: "Simple Equations",
      status: "continue",
      icon: "🧩",
    },
    {
      type: "reading",
      title: "Word Problems",
      status: "not-started",
      icon: "📖",
    },
    {
      type: "quiz",
      title: "Practice Quiz",
      status: "not-attempted",
      icon: "📝",
    },
    {
      type: "pdf",
      title: "Summary & Revision Notes",
      status: "not-started",
      icon: "📄",
    },
  ],
};

const insightsData = {
  weakConcepts: "Word Problems",
  lastStudied: "2 days ago",
  streak: "5 days in a row",
};

const ChapterScreen = () => {
  return (
    <View className="flex-1">
      <Header title={chapterData.title} progress={chapterData.progress} />
      <ScrollView className="flex-1 p-4">
        <ChapterOverviewCard
          progress={chapterData.progress}
          completed={`${chapterData.lessonsCompleted} / ${chapterData.totalLessons}`}
          description={chapterData.description}
        />
        <LessonList lessons={chapterData.lessons} />
        <QuickActions />
        <InsightsSection insights={insightsData} />
      </ScrollView>
    </View>
  );
};

export default ChapterScreen;
