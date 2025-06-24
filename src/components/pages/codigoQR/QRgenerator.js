import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema

export default function QRgenerator() {
  const [visitorCount, setVisitorCount] = useState(1);
  const [formData, setFormData] = useState([
    { name: "", visitado: "", department: "", arrivalDate: "" },
  ]);
  const [qrValue, setQrValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { colors, darkMode } = useTheme(); // Obtiene los colores y estado del tema

  const generateQR = () => {
    if (visitorCount === 0) {
      Alert.alert(
        "Error",
        "Por favor, agregue al menos un visitante para generar el QR."
      );
      return;
    }

    for (let i = 0; i < formData.length; i++) {
      const visitor = formData[i];
      if (
        !visitor.name ||
        !visitor.visitado ||
        !visitor.department ||
        !visitor.arrivalDate
      ) {
        Alert.alert(
          "Advertencia",
          "Por favor, complete todos los campos antes de continuar."
        );
        return;
      }
    }

    const qrData = formData
      .map((data, index) => {
        return `Visitante ${index + 1}:\nNombre: ${data.name}\nVisitado: ${data.visitado}\nDepartamento: ${data.department}\nFecha de llegada: ${data.arrivalDate}`;
      })
      .join("\n\n");

    setQrValue(qrData);
    setShowModal(true);
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  const addVisitor = () => {
    setVisitorCount(visitorCount + 1);
    setFormData([
      ...formData,
      { name: "", visitado: "", department: "", arrivalDate: "" },
    ]);
  };

  const removeVisitor = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
    setVisitorCount(visitorCount - 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Generar Código QR
      </Text>

      <ScrollView style={styles.formContainer}>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Número de Visitantes: {visitorCount}
        </Text>

        {formData.map((visitor, index) => (
          <View
            key={index}
            style={[styles.formGroup, { backgroundColor: colors.card }]}
          >
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.inputBackground || colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Nombre del invitado"
              placeholderTextColor={colors.placeholder}
              value={visitor.name}
              onChangeText={(text) => handleInputChange(index, "name", text)}
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.inputBackground || colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Nombre del visitado"
              placeholderTextColor={colors.placeholder}
              value={visitor.visitado}
              onChangeText={(text) =>
                handleInputChange(index, "visitado", text)
              }
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.inputBackground || colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Número de departamento"
              placeholderTextColor={colors.placeholder}
              value={visitor.department}
              onChangeText={(text) =>
                handleInputChange(index, "department", text)
              }
              keyboardType="numeric"
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.inputBackground || colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Fecha de llegada (YYYY-MM-DD)"
              placeholderTextColor={colors.placeholder}
              value={visitor.arrivalDate}
              onChangeText={(text) =>
                handleInputChange(index, "arrivalDate", text)
              }
            />

            <TouchableOpacity
              style={[styles.removeButton, { backgroundColor: colors.danger }]}
              onPress={() => removeVisitor(index)}
            >
              <Text style={styles.buttonText}>Quitar Visitante</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={addVisitor}
        >
          <Text style={styles.buttonText}>Agregar Visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={generateQR}
        >
          <Text style={styles.buttonText}>Generar QR</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Tu Código QR
            </Text>

            <View style={styles.qrWrapper}>
              <QRCode
                value={qrValue}
                size={200}
                backgroundColor={colors.card}
                color={colors.text}
              />
            </View>

            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: colors.danger }]}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  formGroup: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: "85%",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrWrapper: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
