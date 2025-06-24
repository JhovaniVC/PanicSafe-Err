import React, { useState } from "react";
import { View, TextInput, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password);
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !houseNumber || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Complete all the form");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Error", "The password must have at least 6 characters, a number and a special character.");
      return;
    }

    try {
      //Crear usuario en Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      //Guardar datos adicionales en Firestore
      await setDoc(doc(db, "usuarios", userCredential.user.uid), {
        firstName,
        lastName,
        houseNumber,
        email,
      }).then(() => {
        //Mostrar alerta solo después de que Firestore complete
        Alert.alert("Registration successful", "Your account has been successfully created.");
        navigation.navigate("Login");
      }).catch((firestoreError) => {
        Alert.alert("Error", "The user was created but the additional data was not saved: " + firestoreError.message);
      });

    } catch (authError) {
      console.error("Authentication error:", authError);
      Alert.alert("Error", authError.message);
    }
  };

  return (
    <ImageBackground source={require("../../assets/background.jpg")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput placeholder="Name(s)" value={firstName} onChangeText={setFirstName} style={styles.input} placeholderTextColor="white" />
        <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.input} placeholderTextColor="white" />
        <TextInput placeholder="House Number" value={houseNumber} onChangeText={setHouseNumber} style={styles.input} placeholderTextColor="white" keyboardType="numeric" />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="white" />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} placeholderTextColor="white" />
        <TextInput placeholder="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} placeholderTextColor="white" />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Already have an account? Sign in!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;