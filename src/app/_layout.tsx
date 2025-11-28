import { Slot } from "expo-router";
import "../../global.css";
import '../../i18n/i18n'; // <--- ADD THIS IMPORT at the top

// import { NavigationContainer } from "@react-navigation/native"; // Make sure you import it!

export default function RootLayout() {
  return (
    // <NavigationContainer>
      <Slot />
    // </NavigationContainer>
  );
}
