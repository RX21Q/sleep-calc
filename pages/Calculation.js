import React from "react";
import { View, Text } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../styles";
export default function Calculation({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>
        Insert wakeup/sleep calculations based on parameters here. You chose{" "}
        {route.params?.type || "no route params, chose from navbar"}
      </Text>
      <Navbar navigation={navigation} />
    </View>
  );
}
