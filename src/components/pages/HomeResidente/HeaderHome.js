import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderHome = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hola Pedro Pony</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#3396FE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    height: 90, // Altura aumentada
    justifyContent: "flex-end", // Alinea el texto en la parte inferior
    alignItems: "center",
    paddingBottom: 20, // Espacio inferior para el texto
  },
  headerText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HeaderHome;
