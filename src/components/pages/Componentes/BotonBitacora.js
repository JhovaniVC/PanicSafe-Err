import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import NavBar from "../HomeResidente/NavBar";
import { useTheme } from "../ThemeContext";

export default function MainMenu({ navigation }) {
  const { colors, darkMode } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      {/* Contenido principal con fondo dinámico */}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Header con estilo dinámico */}
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: darkMode ? colors.card : "#FFFFFF" },
          ]}
        >
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={[styles.backIcon, { color: colors.primary }]}>
              {"<"}
            </Text>
            <Text style={[styles.backText, { color: colors.primary }]}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.text }]}>Bitácora</Text>
        </View>

        {/* Contenido de la pantalla */}
        <View style={styles.content}>
          {/* Botón de Bitácora Personal */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate("BitacoraPersonal")}
          >
            <Text style={styles.buttonText}>Bitácora de Personal</Text>
          </TouchableOpacity>

          {/* Botón de Entregas */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate("BitacoraEntregas")}
          >
            <Text style={styles.buttonText}>Bitácora de Entregas</Text>
          </TouchableOpacity>
        </View>
      </View>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 30,
    position: "relative",
    paddingTop: 10,
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 10,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
