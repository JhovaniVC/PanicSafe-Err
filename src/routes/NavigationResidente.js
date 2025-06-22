// src/navigation/NavigationResidente.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageResidente from "../Components/Pages/HomeResidente/HomePageResidente";
import BtnPanico from "../Components/Pages/panico/BtnPanico";
import QrScreen from "../Components/Pages/codigoQR/QrScreen";
import QRgenerator from "../Components/Pages/codigoQR/QRgenerator";
import QRscanner from "../Components/Pages/codigoQR/QRscanner";
import NotificacionesScreen from "../Components/Pages/HomeResidente/NotificacionesScreen";
import ConfiguracionScreen from "../Components/Pages/HomeResidente/ConfiguracionScreen";
import BotonBitacora from "../Components/Pages/Componentes/BotonBitacora";
import BitacoraPersonal from "../Components/Pages/Componentes/BitacoraPersonal";
import BitacoraEntregas from "../Components/Pages/Componentes/BitacoraEntregas";
import BtnCuotas from "../Components/Pages/cuotas/BtnCuotas";
import DetallesCuotas from "../Components/Pages/cuotas/DetallesCuotas";
import PantallaPago from "../Components/Pages/cuotas/PantallaPago";
import BtnReportes from "../Components/Pages/Reportes/BtnReportes";
import UserScreen from "../Components/Pages/HomeResidente/UserScreen";

const Stack = createNativeStackNavigator();

// Función para estilos reutilizables de header
const getHeaderOptions = (backgroundColor, title, tintColor = "white") => ({
  title,
  headerStyle: { backgroundColor },
  headerTintColor: tintColor,
  headerTitleStyle: { fontWeight: "bold" },
});

export default function ResidentNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3396FE" }, // Azul por defecto
        headerTintColor: "white",
      }}
    >
      {/* Pantallas del Residente */}
      <Stack.Screen
        name="HomeResidente"
        component={HomePageResidente}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Panico"
        component={BtnPanico}
        options={getHeaderOptions("#FF2929", "BOTÓN DE PÁNICO")}
      />
      <Stack.Screen
        name="QrScreen"
        component={QrScreen}
        options={getHeaderOptions("#3396FE", "Generar QR")}
      />
      <Stack.Screen
        name="QRgenerator"
        component={QRgenerator}
        options={getHeaderOptions("#3396FE", "Generar QR")}
      />
      <Stack.Screen
        name="QRscanner"
        component={QRscanner}
        options={getHeaderOptions("#3396FE", "Escanear QR")}
      />
      <Stack.Screen
        name="Notificaciones"
        component={NotificacionesScreen}
        options={getHeaderOptions("#000", "Notificaciones")}
      />
      <Stack.Screen
        name="Configuracion"
        component={ConfiguracionScreen}
        options={getHeaderOptions("#000", "Configuración")}
      />
      <Stack.Screen
        name="Bitacora"
        component={BotonBitacora}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BitacoraPersonal"
        component={BitacoraPersonal}
        options={getHeaderOptions("#000", "Bitácora de Personal")}
      />
      <Stack.Screen
        name="BitacoraEntregas"
        component={BitacoraEntregas}
        options={getHeaderOptions("#000", "Bitácora de Entregas")}
      />
      <Stack.Screen
        name="Cuotas"
        component={BtnCuotas}
        options={getHeaderOptions("#FFF", "Cuotas y Servicios", "black")}
      />
      <Stack.Screen
        name="DetallesCuotas"
        component={DetallesCuotas}
        options={getHeaderOptions("#FFF", "Detalles de Pago", "black")}
      />
      <Stack.Screen
        name="Pago"
        component={PantallaPago}
        options={getHeaderOptions("#FFF", "Realizar Pago", "black")}
      />
      <Stack.Screen
        name="Reportes"
        component={BtnReportes}
        options={getHeaderOptions("#FFF", "Reportes", "black")}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={getHeaderOptions("#000", "Mi Cuenta")}
      />
    </Stack.Navigator>
  );
}
