import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="">
      <Link href={"/(auth)"} className="text-blue-500 underline">
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      </Link>
    </SafeAreaView>
  );
}
