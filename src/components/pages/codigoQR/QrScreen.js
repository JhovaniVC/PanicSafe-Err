import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema

export default function QrScreen() {
  const navigation = useNavigation();
  const { colors, darkMode } = useTheme(); // Obtiene los colores y estado del tema

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <Text style={[styles.title, { color: colors.primary }]}>
        Gestión de Códigos QR
      </Text>
      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Selecciona una opción para trabajar con códigos QR
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("QRgenerator")}
      >
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("QRscanner")}
      >
        <Text style={styles.buttonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos base (sin colores fijos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginVertical: 15,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    width: "100%",
    maxWidth: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
