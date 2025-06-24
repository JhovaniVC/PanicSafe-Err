import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import NavBar from "../HomeResidente/NavBar";
import { useTheme } from "../ThemeContext";

export default function BitacoraPersonal() {
  const { colors, darkMode } = useTheme();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [infoResaltar, setInfoResaltar] = useState("");
  const [contacto, setContacto] = useState("");

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(selectedTime);
    }
  };

  const handleSave = () => {
    Alert.alert("Éxito", "Registro guardado correctamente");
  };

  const formatDate = () => {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = () => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { backgroundColor: colors.background },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Bitácora de Personal
        </Text>

        {/* Sección Fecha y Hora con iconos a la izquierda */}
        <View
          style={[
            styles.datetimeRow,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Icon
                name="calendar"
                size={24}
                color={colors.primary}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <Icon
                name="clock-o"
                size={24}
                color={colors.primary}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.datetimeDisplay}>
            <Text style={[styles.datetimeText, { color: colors.text }]}>
              {formatDate()}
            </Text>
            <Text style={[styles.datetimeText, { color: colors.text }]}>
              {formatTime()}
            </Text>
          </View>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={darkMode ? "spinner" : "default"}
            onChange={onChangeDate}
            locale="es-ES"
            themeVariant={darkMode ? "dark" : "light"}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display={darkMode ? "spinner" : "default"}
            onChange={onChangeTime}
            locale="es-ES"
            is24Hour={true}
            themeVariant={darkMode ? "dark" : "light"}
          />
        )}

        {/* Formulario */}
        <View style={styles.formSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Motivo
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.inputBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            value={motivo}
            onChangeText={setMotivo}
            placeholder="Ingrese el motivo"
            placeholderTextColor={colors.placeholder}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Descripción
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              {
                backgroundColor: colors.inputBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Describa el evento"
            placeholderTextColor={colors.placeholder}
            multiline
          />
        </View>

        <View style={styles.formSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Información a resaltar (opcional):
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              {
                backgroundColor: colors.inputBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            value={infoResaltar}
            onChangeText={setInfoResaltar}
            placeholder="Información importante"
            placeholderTextColor={colors.placeholder}
            multiline
          />
        </View>

        <View style={styles.formSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Contacto (opcional):
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.inputBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            value={contacto}
            onChangeText={setContacto}
            placeholder="Teléfono de contacto"
            placeholderTextColor={colors.placeholder}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: colors.primary }]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Guardar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  datetimeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
  },
  iconContainer: {
    flexDirection: "row",
    marginRight: 15,
  },
  icon: {
    marginRight: 15,
  },
  datetimeDisplay: {
    flexDirection: "row",
  },
  datetimeText: {
    fontSize: 16,
    marginRight: 15,
  },
  formSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
