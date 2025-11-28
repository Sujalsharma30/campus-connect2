import ContentSection from "@/src/components/Lesson/ContentSection";
import Header from "@/src/components/Lesson/Header";
import VideoPlayer from "@/src/components/Lesson/VideoPlayer";
import { ScrollView, View } from "react-native";

export default function LessonScreen() {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView className="flex-1">
        <VideoPlayer />
        <ContentSection />
      </ScrollView>
    </View>
  );
}
