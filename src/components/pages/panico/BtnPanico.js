import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../HomeResidente/NavBar";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema

export default function BtnPanico() {
  const navigation = useNavigation();
  const { colors, darkMode } = useTheme(); // Obtiene los colores y estado del tema

  const handleSOS = () => {
    Linking.openURL("tel:911");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Instrucciones */}
      <View style={styles.instructionsContainer}>
        <Text style={[styles.instructionsTitle, { color: colors.text }]}>
          Instrucciones para el Botón de Pánico
        </Text>

        <View style={styles.instructionItem}>
          <Text
            style={[
              styles.instructionNumber,
              { color: colors.danger || "#FF3B30" },
            ]}
          >
            1.
          </Text>
          <Text style={[styles.instructionText, { color: colors.text }]}>
            En caso de emergencia: Si necesitas ayuda, presiona el gran botón
            rojo en el centro de la pantalla.
          </Text>
        </View>

        <View style={styles.instructionItem}>
          <Text
            style={[
              styles.instructionNumber,
              { color: colors.danger || "#FF3B30" },
            ]}
          >
            2.
          </Text>
          <Text style={[styles.instructionText, { color: colors.text }]}>
            Activar la alarma: Al presionar el botón, se enviará una alerta a
            tus contactos de emergencia.
          </Text>
        </View>

        <View style={styles.instructionItem}>
          <Text
            style={[
              styles.instructionNumber,
              { color: colors.danger || "#FF3B30" },
            ]}
          >
            3.
          </Text>
          <Text style={[styles.instructionText, { color: colors.text }]}>
            Espera ayuda: Mantén la calma y espera a que llegue la ayuda.
          </Text>
        </View>

        <Text
          style={[styles.footerText, { color: colors.secondaryText || "#888" }]}
        >
          Usa este botón solo en situaciones de emergencia.
        </Text>
      </View>

      {/* Botón SOS (mantiene su color rojo distintivo) */}
      <Pressable
        style={({ pressed }) => [
          styles.sosButton,
          {
            backgroundColor: colors.danger || "#FF3B30",
            transform: [{ scale: pressed ? 0.95 : 1 }],
            shadowColor: darkMode ? colors.danger : "#000",
          },
        ]}
        onPress={handleSOS}
      >
        <Icon name="exclamation-circle" size={50} color="white" />
        <Text style={styles.sosText}>S.O.S</Text>
      </Pressable>

      <NavBar />
    </View>
  );
}

// Estilos base (sin colores fijos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  instructionsContainer: {
    marginBottom: 40,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: 15,
  },
  instructionNumber: {
    fontWeight: "bold",
    marginRight: 8,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  sosText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    letterSpacing: 2,
  },
});
