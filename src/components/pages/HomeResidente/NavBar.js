import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext";

const NavBar = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          shadowColor: colors.text,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Notificaciones")}
      >
        <FontAwesome name="bell" size={24} color={colors.text} />
        <Text style={[styles.tabText, { color: colors.text }]}>
          Notificaciones
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Configuracion")}
      >
        <FontAwesome name="cog" size={24} color={colors.text} />
        <Text style={[styles.tabText, { color: colors.text }]}>
          Configuración
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("HomeResidente")}
      >
        <FontAwesome name="home" size={24} color={colors.text} />
        <Text style={[styles.tabText, { color: colors.text }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("User")}
      >
        <FontAwesome name="user" size={24} color={colors.text} />
        <Text style={[styles.tabText, { color: colors.text }]}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NavBar;
