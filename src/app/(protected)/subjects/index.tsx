import ChapterList from '@/src/components/subject/ChapterList';
import Header from '@/src/components/subject/Header';
import InsightsFooter from '@/src/components/subject/InsightsFooter';
import SubjectProgressCard from '@/src/components/subject/SubjectProgressCard';
import React from 'react';
import { ScrollView, View } from 'react-native';


const subjectData = {
  title: 'Mathematics',
  progress: 40,
  completed: '4 / 10',
  quizzes: 3,
  bestScore: '9/10',
  quote: '"The only way to learn mathematics is to do mathematics." - Paul Halmos',
};

const chapters = [
  {
    icon: '📖',
    title: 'Algebra Basics',
    progress: 80,
    locked: false,
  },
  {
    icon: '📏',
    title: 'Geometry Fundamentals',
    progress: 50,
    locked: false,
  },
  {
    icon: '📈',
    title: 'Calculus Introduction',
    progress: 20,
    locked: false,
  },
  {
    icon: '🎲',
    title: 'Statistics and Probability',
    progress: 0,
    locked: true,
  },
];

const SubjectScreen = () => {
  return (
    <View className="flex-1">
      <Header title={subjectData.title} />
      <ScrollView className="flex-1 p-4">
        <SubjectProgressCard
          progress={subjectData.progress}
          completed={subjectData.completed}
          quizzes={subjectData.quizzes}
          bestScore={subjectData.bestScore}
          quote={subjectData.quote}
        />
        <ChapterList chapters={chapters} />
      </ScrollView>
      <InsightsFooter />
    </View>
  );
};

export default SubjectScreen;