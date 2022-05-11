import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Button, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + ((today.getHours() + 24) % 12 || 12);
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    return hours + ':' + minutes;
  }
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let monthName = months[d.getMonth()];
  var dateOfMonth = new Date().getDate();
  var year = new Date().getFullYear();
  var ampm = (d.getHours() >= 12) ? "PM" : "AM";
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background.png')}>
      </ImageBackground>
      <Text style={styles.timeText}>{time} {ampm}</Text>
      <Text style={styles.dateText}>{weekday}, {monthName} {dateOfMonth}, {year}</Text>
      <View style={styles.break}/>
      <View><Button onPress={showTimepicker} title="Show time picker!"/></View>
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
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
    fontSize: 32,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    top: '11%',
  },
  dateText: {
    fontSize: 22,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    top: '6%',
  },
  break: {
  borderBottomColor: 'black',
  borderBottomWidth: 2,
  alignSelf: 'auto',
  width: '75%',
  justifyContent: 'center',
  bottom: '21%',
  },
  '*': {
    fontFamily: 'Roboto',
  },
});