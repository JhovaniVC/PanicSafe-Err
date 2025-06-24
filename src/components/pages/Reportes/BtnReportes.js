import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "../ThemeContext"; // Importa el hook del tema

export default function BtnReportes() {
  const [problemDescription, setProblemDescription] = useState("");
  const [problemType, setProblemType] = useState("");
  const [location, setLocation] = useState("");
  const { colors, darkMode } = useTheme(); // Obtiene los colores y estado del tema

  const problemTypes = [
    "Seguridad",
    "Mantenimiento",
    "Limpieza",
    "Ruido excesivo",
    "Daño a propiedad",
  ];

  const locations = [
    "Área de albercas",
    "Estacionamiento",
    "Jardines",
    "Salón social",
    "Pasillo principal",
  ];

  const handleSubmit = () => {
    if (!problemDescription || !problemType || !location) {
      Alert.alert("Error", "Por favor completa todos los campos obligatorios");
      return;
    }

    Alert.alert(
      "Reporte enviado",
      `Tipo: ${problemType}\nUbicación: ${location}\n\nGracias por tu reporte.`,
      [
        {
          text: "OK",
          onPress: () => {
            setProblemDescription("");
            setProblemType("");
            setLocation("");
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.header, { color: colors.text }]}>
        Describe el problema que deseas reportar:
      </Text>

      {/* Campo de descripción */}
      <Text style={[styles.label, { color: colors.text }]}>
        Descripción del problema:
      </Text>
      <TextInput
        style={[
          styles.input,
          styles.multilineInput,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
        placeholder="Describe detalladamente el problema..."
        placeholderTextColor={colors.placeholder}
        multiline
        numberOfLines={4}
        value={problemDescription}
        onChangeText={setProblemDescription}
      />

      {/* Selector de tipo de problema */}
      <Text style={[styles.label, { color: colors.text }]}>
        Tipo de problema:
      </Text>
      <View
        style={[
          styles.pickerContainer,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <Picker
          selectedValue={problemType}
          onValueChange={(itemValue) => setProblemType(itemValue)}
          style={[styles.picker, { color: colors.text }]}
          dropdownIconColor={colors.primary}
        >
          <Picker.Item
            label="Selecciona el tipo de problema"
            value=""
            color={colors.placeholder}
          />
          {problemTypes.map((type, index) => (
            <Picker.Item
              key={index}
              label={type}
              value={type}
              color={colors.text}
            />
          ))}
        </Picker>
      </View>

      {/* Selector de ubicación */}
      <Text style={[styles.label, { color: colors.text }]}>
        Ubicación del incidente:
      </Text>
      <View
        style={[
          styles.pickerContainer,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
          style={[styles.picker, { color: colors.text }]}
          dropdownIconColor={colors.primary}
        >
          <Picker.Item
            label="Selecciona una ubicación"
            value=""
            color={colors.placeholder}
          />
          {locations.map((loc, index) => (
            <Picker.Item
              key={index}
              label={loc}
              value={loc}
              color={colors.text}
            />
          ))}
        </Picker>
      </View>

      {/* Botón para adjuntar foto */}
      <Text style={[styles.label, { color: colors.text }]}>
        Adjuntar evidencia:
      </Text>
      <TouchableOpacity
        style={[
          styles.attachButton,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <Icon
          name="camera"
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
        <Text style={[styles.attachButtonText, { color: colors.primary }]}>
          Adjuntar Foto
        </Text>
      </TouchableOpacity>

      {/* Botón de enviar */}
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Enviar Reporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  multilineInput: {
    height: 120,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
  attachButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  attachButtonText: {
    fontSize: 16,
  },
  submitButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    elevation: 3,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
