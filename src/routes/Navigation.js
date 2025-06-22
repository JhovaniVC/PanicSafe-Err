// src/navigation/Navigation.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/pages/Login";
// import Register from "../Components/Pages/Register";
// import Home from "../Components/Pages/Home";
// import ResidentNavigator from "./NavigationResidente"; // Importamos el stack del residente

const MainStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <MainStack.Navigator initialRouteName="Login">
      {/* Pantallas de Autenticación */}
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

      {/* Pantalla Principal */}
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          headerLeft: null, // Oculta el botón de retroceso
        }}
      />

      {/* Flujo del Residente (anidado) */}
      {/* <MainStack.Screen
        name="Residente"
        component={ResidentNavigator}
        options={{ headerShown: false }}
      /> */}
    </MainStack.Navigator>
  );
}
