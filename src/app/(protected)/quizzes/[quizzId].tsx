import QuizHeader from '@/src/components/Quizz/HeaderQuizz';
import QuizBody from '@/src/components/Quizz/QuizzBody';
import QuizFloatingButton from '@/src/components/Quizz/QuizzFloatingButton';
import QuizFooter from '@/src/components/Quizz/QuizzFooter';
import { View } from 'react-native';



export default function QuizScreen() {
  return (
    <View className="flex-1 bg-background-color">
      <View className="flex-1">
        <QuizHeader />
        <QuizBody />
        <QuizFooter />
        <QuizFloatingButton />
      </View>
    </View>
  );
}