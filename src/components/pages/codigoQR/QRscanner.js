import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';

const QRscanner = () => {
  const [permiso, solicitarPermiso] = useCameraPermissions();
  const [escaneado, setEscaneado] = useState(false);

  const manejarEscaneoQR = ({ type, data }) => {
    setEscaneado(true);
    Alert.alert(
      `Código ${type} escaneado`,
      `Datos: ${data}`,
      [{ text: 'OK', onPress: () => setEscaneado(false) }],
      { cancelable: false }
    );
  };

  if (!permiso) {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.textoPermiso}>Solicitando permiso de la cámara...</Text>
      </View>
    );
  }

  if (!permiso.granted) {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.textoPermiso}>Permiso de cámara no concedido.</Text>
        <Button title="Solicitar Permiso" onPress={solicitarPermiso} />
      </View>
    );
  }

  return (
    <CameraView
      style={styles.camara}
      onBarcodeScanned={escaneado ? undefined : manejarEscaneoQR}
    >
      {/* Superposición para dar efecto visual al escáner */}
      <View style={styles.superposicion}>
        <View style={styles.capaSuperior} />
        <View style={styles.capaCentro}>
          <View style={styles.capaLateral} />

          {/* Contenedor del título y el cuadro de escaneo */}
          <View style={styles.areaEscaneo}>
            <Text style={styles.tituloEscaneo}>Escanea el código de visita</Text>
            <View style={styles.enfoque} />
          </View>

          <View style={styles.capaLateral} />
        </View>
        <View style={styles.capaInferior} />
      </View>
    </CameraView>
  );
};

// Estilos mejorados con título agregado
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textoPermiso: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  camara: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  superposicion: {
    flex: 1,
  },
  capaSuperior: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  capaCentro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capaLateral: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  areaEscaneo: {
    alignItems: 'center',
  },
  tituloEscaneo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  enfoque: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'white',
  },
  capaInferior: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default QRscanner;
