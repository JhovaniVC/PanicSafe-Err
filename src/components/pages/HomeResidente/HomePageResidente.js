import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NavBar from "./NavBar";
import HeaderHome from "./HeaderHome";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema

export default function HomePageResidente() {
  const navigation = useNavigation();
  const { colors, darkMode } = useTheme(); // Obtiene los colores y estado del tema

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        style={darkMode ? "light" : "dark"}
        backgroundColor={colors.header}
        translucent={true}
      />
      <HeaderHome />

      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.centeredContainer}>
            {/* Botón SOS (mantiene su color rojo distintivo) */}
            <Pressable
              onPress={() => navigation.navigate("Panico")}
              style={({ pressed }) => [
                styles.sosButton,
                {
                  transform: [{ scale: pressed ? 0.98 : 1 }],
                  backgroundColor: colors.danger || "#FF3B30", // Usa el color danger del tema o el rojo por defecto
                },
              ]}
            >
              <View style={styles.sosContent}>
                <Icon
                  name="exclamation-circle"
                  size={36}
                  color="white"
                  style={styles.sosIcon}
                />
                <Text style={styles.sosText}>S.O.S</Text>
              </View>
            </Pressable>

            {/* Botones de opciones */}
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[styles.largeButton, { backgroundColor: colors.card }]}
                onPress={() => navigation.navigate("Bitacora")}
              >
                <Icon
                  name="book"
                  size={26}
                  color={colors.primary}
                  style={styles.buttonIcon}
                />
                <Text style={[styles.buttonText, { color: colors.text }]}>
                  Bitácoras
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.largeButton, { backgroundColor: colors.card }]}
                onPress={() => navigation.navigate("Reportes")}
              >
                <Icon
                  name="exclamation-triangle"
                  size={26}
                  color={colors.primary}
                  style={styles.buttonIcon}
                />
                <Text style={[styles.buttonText, { color: colors.text }]}>
                  REPORTES DE SEGURIDAD
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.largeButton, { backgroundColor: colors.card }]}
                onPress={() => navigation.navigate("QrScreen")}
              >
                <Icon
                  name="qrcode"
                  size={26}
                  color={colors.primary}
                  style={styles.buttonIcon}
                />
                <Text style={[styles.buttonText, { color: colors.text }]}>
                  GENERAR CÓDIGO QR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <NavBar />
    </View>
  );
}

// Estilos base (sin colores fijos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  centeredContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sosButton: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sosContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sosIcon: {
    marginRight: 15,
  },
  sosText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  optionsContainer: {
    width: "100%",
  },
  largeButton: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonIcon: {
    marginRight: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
});
