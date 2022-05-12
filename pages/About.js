import React from "react";
import styles from "../styles";
import { View, Text } from "react-native";
import Navbar from "../components/Navbar";
export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About page</Text>

      <Navbar navigation={navigation} />
    </View>
  );
}
