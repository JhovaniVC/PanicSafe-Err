import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema
import NavBar from "./NavBar";

const NotificacionesScreen = () => {
  const { colors } = useTheme(); // Obtiene los colores del tema

  // Datos de ejemplo para notificaciones
  const notifications = [
    {
      id: 1,
      text: "Nuevo mensaje del administrador",
      time: "Hoy, 10:30 AM",
      read: false,
    },
    {
      id: 2,
      text: "Pago de cuota recibido",
      time: "Ayer, 2:45 PM",
      read: true,
    },
    {
      id: 3,
      text: "Recordatorio: Reunión mañana",
      time: "Lunes, 9:15 AM",
      read: true,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Notificaciones</Text>

      <ScrollView style={styles.notificationsContainer}>
        {notifications.map((notification) => (
          <View
            key={notification.id}
            style={[
              styles.notificationItem,
              {
                backgroundColor: colors.card,
                borderLeftWidth: notification.read ? 0 : 3,
                borderLeftColor: notification.read
                  ? "transparent"
                  : colors.primary,
              },
            ]}
          >
            <Text style={[styles.notificationText, { color: colors.text }]}>
              {notification.text}
            </Text>
            <Text
              style={[styles.notificationTime, { color: colors.secondaryText }]}
            >
              {notification.time}
            </Text>
          </View>
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
};

// Estilos base (sin colores fijos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
  },
});

export default NotificacionesScreen;
