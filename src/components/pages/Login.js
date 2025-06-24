import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios. Por favor, complete el formulario.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      navigation.navigate("Residente");
    } catch (error) {
      console.error("Firebase Auth Error:", error.code, error.message);
      let errorMessage = "Ocurrió un error. Inténtelo de nuevo.";

      if (error.code) {
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Correo electrónico inválido.";
            break;
          case "auth/user-not-found":
            errorMessage = "No se encontró una cuenta con este correo. Regístrese primero.";
            break;
          case "auth/wrong-password":
          case "auth/invalid-credential":
            errorMessage = "Correo o contraseña incorrectos. Inténtelo de nuevo.";
            break;
          case "auth/missing-password":
            errorMessage = "Debe ingresar una contraseña.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Demasiados intentos fallidos. Inténtelo más tarde.";
            break;
          default:
            errorMessage = `Error: ${error.message}`;
        }
      }
      
      alert(errorMessage);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>SIGN IN</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
