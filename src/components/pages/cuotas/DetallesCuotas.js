import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../HomeResidente/NavBar";

export default function DetallesCuotas() {
  return (
    <View style={styles.container}>
      {/* Encabezado con fecha y monto */}
      <View style={styles.header}>
        <Text style={styles.dateText}>20 Sep, 2024</Text>
        <Text style={styles.totalAmount}>$50.00</Text>
      </View>

      {/* Desglose de pagos */}
      <View style={styles.detailsCard}>
        <Text style={styles.sectionTitle}>PAGOS REALIZADOS</Text>
        <LineItem label="05/07/2024" value="$50.00" />
        <LineItem label="20/08/2024" value="$50.00" />

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>PRÓXIMOS VENCIMIENTOS</Text>
        <LineItem label="20/09/2024" value="$50.00" highlight />

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>SERVICIOS ADICIONALES</Text>
        <LineItem label="Monitoreo 24/7" value="$15.00/mes" />

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>CARGOS ADICIONALES</Text>
        <LineItem label="Multa por ruido (Art. 15)" value="$75.00" warning />

        <View style={styles.thickDivider} />

        <LineItem label="TOTAL PENDIENTE" value="$140.00" total />
      </View>
      <NavBar />
    </View>
  );
}

// Componente reutilizable para cada línea
const LineItem = ({
  label,
  value,
  highlight = false,
  warning = false,
  total = false,
}) => {
  return (
    <View style={styles.lineItem}>
      <Text
        style={[
          styles.labelText,
          warning && styles.warningLabel,
          total && styles.totalLabel,
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.valueText,
          highlight && styles.highlightText,
          warning && styles.warningText,
          total && styles.totalText,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
    paddingTop: 15,
  },
  dateText: {
    fontSize: 16,
    color: "#666666",
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 8,
  },
  detailsCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888888",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  lineItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  labelText: {
    fontSize: 16,
    color: "#333333",
  },
  warningLabel: {
    color: "#E74C3C",
  },
  totalLabel: {
    fontWeight: "600",
  },
  valueText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  highlightText: {
    color: "#3396FF",
  },
  warningText: {
    color: "#E74C3C",
    fontWeight: "600",
  },
  totalText: {
    fontSize: 18,
    color: "#27AE60",
    fontWeight: "bold",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    marginVertical: 16,
  },
  thickDivider: {
    borderBottomWidth: 2,
    borderBottomColor: "#DDDDDD",
    marginVertical: 18,
  },
});
