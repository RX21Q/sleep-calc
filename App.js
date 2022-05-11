import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-ico-material-design";

export default function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
    setInterval(() => {
      setTime(time);
    }, 1000);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours =
      (today.getHours() < 10 ? "0" : "") + ((today.getHours() + 24) % 12 || 12);
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return hours + ":" + minutes;
  };
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let monthName = months[d.getMonth()];
  var dateOfMonth = d.getDate();
  var year = d.getFullYear();
  var ampm = d.getHours() >= 12 ? "PM" : "AM";
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  var iconHeight = 26;
  var iconWidth = 26;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    selectedDate && setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };
  let dateStr = date.toLocaleString();
  let slicedDateStr = dateStr.slice(10, 16);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/background.png")}
      ></ImageBackground>
      <Text style={styles.timeText}>
        {getCurrentTime()} {ampm}
      </Text>
      <Text style={styles.dateText}>
        {weekday}, {monthName} {dateOfMonth}, {year}
      </Text>
      <View style={styles.break} />
      <Text style={styles.instOneTxt}>
        Please set your{"\n"}desired wake up time:
      </Text>
      <Text style={styles.selectedTime}>SELECTED TIME -{slicedDateStr}</Text>
      <TouchableOpacity
        style={styles.buttonOne}
        onPress={showTimepicker}
        uppercase={false}
      >
        <Text style={styles.buttonOneTxt}>Change Time</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
      <TouchableOpacity
        style={styles.buttonTwo}
        onPress={() => Alert.alert("Simple Button1 pressed")}
        uppercase={false}
      >
        <Text style={styles.buttonTwoTxt}>Calculate Optimal Bedtimes</Text>
      </TouchableOpacity>
      <View style={styles.breakTwo} />
      <Text style={styles.instTwoTxt}>If you're going to bed now</Text>
      <TouchableOpacity
        style={styles.buttonThree}
        onPress={() => Alert.alert("Simple Button1 pressed")}
        uppercase={false}
      >
        <Text style={styles.buttonThreeTxt}>When Should I Wake Up?</Text>
      </TouchableOpacity>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <Pressable
            onPress={() => "./Info.js"}
            style={styles.iconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="clock-with-white-face"
              height={iconHeight}
              width={iconWidth}
              colors="#448aff"
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
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
