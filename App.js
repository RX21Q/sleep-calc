import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Button, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  }
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let monthName = months[d.getMonth()];
  var dateOfMonth = new Date().getDate();
  var year = new Date().getFullYear(); 
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background.png')}>
      </ImageBackground>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.dateText}>{weekday}, {monthName} {dateOfMonth}, {year}</Text>
      <Text style={styles.instOneTxt}>Desired Wake Up Time:</Text>
      <Button
        style={styles.buttonOne}
        title="Calculate Optimal Bedtimes"
        onPress={() => Alert.alert('Simple Button pressed')}/>
      <Text style={styles.instTwoTxt}>If you're going to bed now</Text>
      <Button
        style={styles.buttonTwo}
        title="When Should I Wake Up?"
        onPress={() => Alert.alert('Simple Button pressed')}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  instOneTxt: {
    fontSize: 26,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  instTwoTxt: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    color: 'white'
  },
  buttonOne: {
    color: 'white',
  },
  buttonTwo: {
    color: 'black',
  },
  timeText: {
    fontSize: 35,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    height: '92%',
  },
  dateText: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    height: '78%',
    
  },
  '*': {
    fontFamily: 'Roboto',
  },
});