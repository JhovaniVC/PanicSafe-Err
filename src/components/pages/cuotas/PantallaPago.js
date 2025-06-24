import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../HomeResidente/NavBar";

export default function PantallaPago() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Función para formatear automáticamente MM/AA
  const formatExpiry = (text) => {
    // Elimina cualquier caracter que no sea número
    let cleanedText = text.replace(/[^0-9]/g, "");

    // Aplica el formato MM/AA
    if (cleanedText.length > 2) {
      cleanedText =
        cleanedText.substring(0, 2) + "/" + cleanedText.substring(2, 4);
    }

    setExpiry(cleanedText);
  };

  const handlePayment = () => {
    if (cardNumber.length < 16 || !expiry || !cvc) {
      alert("Por favor completa todos los campos");
      return;
    }
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Resumen del pago */}
      <View style={styles.paymentSummary}>
        <Text style={styles.summaryTitle}>Total a pagar</Text>
        <Text style={styles.amount}>$140.00</Text>
        <Text style={styles.description}>Cuota mensual - Julio 2024</Text>
      </View>

      {/* Campos de tarjeta */}
      <View style={styles.cardForm}>
        <Text style={styles.sectionTitle}>Información de pago seguro</Text>

        <TextInput
          style={styles.input}
          placeholder="Número de tarjeta"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
          maxLength={16}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="MM/AA"
            value={expiry}
            onChangeText={formatExpiry} // Usamos la función de formato aquí
            keyboardType="numeric"
            maxLength={5}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="CVC"
            keyboardType="numeric"
            value={cvc}
            onChangeText={setCvc}
            maxLength={3}
          />
        </View>
      </View>

      {/* Botón de pago */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pagar $140.00</Text>
      </TouchableOpacity>

      {/* Modal de éxito (se mantiene igual) */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.successTitle}>¡Pago exitoso!</Text>
            <Text style={styles.successText}>
              Por favor inicia sesión en tu banco para aprobar esta transacción
            </Text>

            <View style={styles.paymentMethod}>
              <Text style={styles.methodTitle}>Método de pago</Text>
              <Text style={styles.methodText}>
                •••• •••• •••• {cardNumber.slice(-4)}
              </Text>
              <Text style={styles.methodText}>VISA - {expiry}</Text>
            </View>

            <Pressable style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <NavBar />
    </View>
  );
}

// Los estilos se mantienen exactamente igual que en el código anterior
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  paymentSummary: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 16,
    color: "#666",
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  cardForm: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
  },
  payButton: {
    backgroundColor: "#3396FE",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  payButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    width: "85%",
    alignItems: "center",
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 15,
  },
  successText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },
  paymentMethod: {
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    paddingVertical: 20,
    marginBottom: 20,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 10,
  },
  methodText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 5,
  },
  modalButton: {
    backgroundColor: "#3396FE",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
