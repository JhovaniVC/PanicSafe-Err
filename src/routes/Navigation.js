// src/navigation/Navigation.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native"; // Import adicional para seguridad
import Home from "../components/pages/Home";
import HomePageResidente from "../components/pages/HomeResidente/HomePageResidente";
import BtnPanico from "../components/pages/panico/BtnPanico";
import QrScreen from "../components/pages/codigoQR/QrScreen";
import QRgenerator from "../components/pages/codigoQR/QRgenerator";
import QRscanner from "../components/pages/codigoQR/QRscanner";
import NotificacionesScreen from "../components/pages/HomeResidente/NotificacionesScreen";
import ConfiguracionScreen from "../components/pages/HomeResidente/ConfiguracionScreen";
import BotonBitacora from "../components/pages/Componentes/BotonBitacora";
import BitacoraPersonal from "../components/pages/Componentes/BitacoraPersonal";
import BitacoraEntregas from "../components/pages/Componentes/BitacoraEntregas";
import BtnCuotas from "../components/pages/cuotas/BtnCuotas";
import DetallesCuotas from "../components/pages/cuotas/DetallesCuotas";
import PantallaPago from "../components/pages/cuotas/PantallaPago";
import BtnReportes from "../components/pages/Reportes/BtnReportes";
import UserScreen from "../components/pages/HomeResidente/UserScreen";

const MainStack = createNativeStackNavigator();

// Función para estilos reutilizables de header (sin useTheme)
const getHeaderOptions = (backgroundColor, title, tintColor = "white") => ({
  title,
  headerStyle: { backgroundColor },
  headerTintColor: tintColor,
  headerTitleStyle: { fontWeight: "bold" },
});

export default function Navigation() {
  return (
    <MainStack.Navigator
      initialRouteName="HomeResidente"
      screenOptions={{
        headerStyle: { backgroundColor: "#3396FE" }, // Azul por defecto
        headerTintColor: "white",
      }}
    >
      {/* Pantalla principal - HomeResidente */}
      <MainStack.Screen
        name="HomeResidente"
        component={HomePageResidente}
        options={{ headerShown: false }}
      />

      {/* Pantalla Home original (secundaria) */}
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          headerLeft: () => <View style={{ marginLeft: 15 }} />, // Alternativa a headerLeft: null
        }}
      />

      {/* Pantallas del Residente */}
      <MainStack.Screen
        name="Panico"
        component={BtnPanico}
        options={getHeaderOptions("#FF2929", "BOTÓN DE PÁNICO")}
      />
      <MainStack.Screen
        name="QrScreen"
        component={QrScreen}
        options={getHeaderOptions("#3396FE", "Generar QR")}
      />
      <MainStack.Screen
        name="QRgenerator"
        component={QRgenerator}
        options={getHeaderOptions("#3396FE", "Generar QR")}
      />
      <MainStack.Screen
        name="QRscanner"
        component={QRscanner}
        options={getHeaderOptions("#3396FE", "Escanear QR")}
      />
      <MainStack.Screen
        name="Notificaciones"
        component={NotificacionesScreen}
        options={getHeaderOptions("#000", "Notificaciones")}
      />
      <MainStack.Screen
        name="Configuracion"
        component={ConfiguracionScreen}
        options={getHeaderOptions("#000", "Configuración")}
      />
      <MainStack.Screen
        name="Bitacora"
        component={BotonBitacora}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="BitacoraPersonal"
        component={BitacoraPersonal}
        options={getHeaderOptions("#000", "Bitácora de Personal")}
      />
      <MainStack.Screen
        name="BitacoraEntregas"
        component={BitacoraEntregas}
        options={getHeaderOptions("#000", "Bitácora de Entregas")}
      />
      <MainStack.Screen
        name="Cuotas"
        component={BtnCuotas}
        options={getHeaderOptions("#FFF", "Cuotas y Servicios", "black")}
      />
      <MainStack.Screen
        name="DetallesCuotas"
        component={DetallesCuotas}
        options={getHeaderOptions("#FFF", "Detalles de Pago", "black")}
      />
      <MainStack.Screen
        name="Pago"
        component={PantallaPago}
        options={getHeaderOptions("#FFF", "Realizar Pago", "black")}
      />
      <MainStack.Screen
        name="Reportes"
        component={BtnReportes}
        options={getHeaderOptions("#FFF", "Reportes", "black")}
      />
      <MainStack.Screen
        name="User"
        component={UserScreen}
        options={getHeaderOptions("#000", "Mi Cuenta")}
      />

      {/* Pantallas comentadas/inactivas (opcional) */}
      {/*
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Register"
        component={Register}
        options={{ title: "Registro de usuario" }}
      />
      */}
    </MainStack.Navigator>
  );
}
