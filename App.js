import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
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
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background.png')}>
      </ImageBackground>
      <Text style={styles.timeText}>{'Current time'} - {time}</Text>
      <Text style={styles.instOneTxt}> Desired Wake Up Time:</Text>
      <TouchableOpacity style={styles.buttonOne}>
        <Text style={styles.buttonOneTxt}>Calculate Optimal Bedtimes</Text>
      </TouchableOpacity>
      <Text style={styles.instTwoTxt}>If you're going to bed now</Text>
      <TouchableOpacity style={styles.buttonTwo}>
        <Text style={styles.buttonTwoTxt}>When should I Wake Up?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
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
  buttonOneTxt: {
    color: 'white',
  },
  buttonTwoTxt: {
    color: 'black'
  },
});