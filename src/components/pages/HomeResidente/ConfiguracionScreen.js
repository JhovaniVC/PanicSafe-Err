import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useTheme } from "../ThemeContext";
import NavBar from "./NavBar";

const ConfiguracionScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const { darkMode, toggleDarkMode, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Configuración</Text>

      <View style={[styles.settingItem, { backgroundColor: colors.card }]}>
        <Text style={[styles.settingText, { color: colors.text }]}>
          Modo Oscuro
        </Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: colors.primary }}
          thumbColor={darkMode ? "#f5f5f5" : "#f4f3f4"}
        />
      </View>

      <View style={[styles.settingItem, { backgroundColor: colors.card }]}>
        <Text style={[styles.settingText, { color: colors.text }]}>
          Versión de la App
        </Text>
        <Text
          style={[
            styles.settingValue,
            {
              color: darkMode ? "#AAAAAA" : "#666666", // Color más claro para modo oscuro
            },
          ]}
        >
          1.0.0
        </Text>
      </View>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  settingText: {
    fontSize: 16,
  },
  settingValue: {
    fontSize: 16,
  },
});

export default ConfiguracionScreen;
