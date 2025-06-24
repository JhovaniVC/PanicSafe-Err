import { View, Text, Button, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";


const Home = ({ navigation }) => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la pantalla principal!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Home;
