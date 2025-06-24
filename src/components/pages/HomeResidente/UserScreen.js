import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

import { useTheme } from "../ThemeContext";
import NavBar from "./NavBar";

const UserScreen = ({ navigation }) => {
  const { colors, darkMode } = useTheme();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        );
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.profileHeader}>
        <FontAwesome name="user-circle" size={80} color={colors.primary} />
        <Text style={[styles.profileName, { color: colors.text }]}>
          Pedro Pony
        </Text>
      </View>

      <View style={[styles.infoContainer, { backgroundColor: colors.card }]}>
        <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>
            No. departamento
          </Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>512</Text>
        </View>

        <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
          <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>
            Email
          </Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>
            pedropony@gmail.com
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.danger }]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  infoContainer: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserScreen;
