import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "./src/firebaseConfig";
import Navigation from "./src/routes/Navigation";

// Fix para Hermes
const waitForAuth = (auth) => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      unsubscribe();
      resolve();
    });
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await waitForAuth(auth);
        setIsReady(true);
      } catch (error) {
        console.error("Initialization error:", error);
        setIsReady(true); // Fallback para continuar
      }
    };

    initialize();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
