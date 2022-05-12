import React from "react";
import styles from "../styles";
import { Pressable, View } from "react-native";
import Icon from "react-native-ico-material-design";
export default function Navbar({ navigation }) {
  var iconHeight = 26;
  var iconWidth = 26;
  return (
    <View style={styles.navBar}>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.iconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <Icon
          name="clock-with-white-face"
          height={iconHeight}
          width={iconWidth}
          colors="#448aff"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => "./Info.js"}
        style={styles.iconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <Icon
          name="favorite-heart-button"
          height={iconHeight}
          width={iconWidth}
          colors="#448aff"
          onPress={() => {
            navigation.navigate("Calculation");
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => "./Info.js"}
        style={styles.iconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <Icon
          name="rounded-info-button"
          height={iconHeight}
          width={iconWidth}
          colors="#448aff"
          onPress={() => {
            navigation.navigate("About");
          }}
        />
      </Pressable>
    </View>
  );
}
