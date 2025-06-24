import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../HomeResidente/NavBar";

export default function BtnCuotas() {
  const navigation = useNavigation();

  const handlePayment = () => {
    alert("Redirigiendo a pasarela de pago...");
  };

  const handleViewDetails = () => {
    // Navegará a una pantalla nueva (que crearás después)
    navigation.navigate("DetallesCuotas");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.centeredContent}>
        {/* Monto */}
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>$165.00</Text>
        </View>

        {/* Texto "Ver Detalles" como enlace */}
        <TouchableOpacity onPress={handleViewDetails}>
          <Text style={styles.detailsLink}>Ver Detalles</Text>
        </TouchableOpacity>

        {/* Botón de Pago */}
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate("Pago")}
        >
          <Text style={styles.paymentButtonText}>Realizar Pago</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  centeredContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  amountContainer: {
    marginBottom: 20,
  },
  amountText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  detailsLink: {
    fontSize: 18,
    color: "#3396FE",
    textDecorationLine: "underline",
    marginBottom: 30,
  },
  paymentButton: {
    backgroundColor: "#3396FE",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "80%",
  },
  paymentButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
