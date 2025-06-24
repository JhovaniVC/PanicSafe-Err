// App.js
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/routes/Navigation";
import { ThemeProvider } from "./src/components/pages/ThemeContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
