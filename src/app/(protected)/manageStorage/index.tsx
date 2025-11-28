import ClearDataSection from "@/src/components/Downloads/ClearDataSection";
import DownloadedContent from "@/src/components/Downloads/DownloadedContent";
import StorageSummary from "@/src/components/Downloads/StorageSummary";
import { StatusBar,View,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <View className="relative flex-1">
        <ScrollView className="flex-1">
          <View className="flex-col gap-6 p-4">
            <StorageSummary />
            <DownloadedContent />
            <ClearDataSection />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}