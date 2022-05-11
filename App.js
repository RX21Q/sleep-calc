import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Button, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-ico-material-design';


export default function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
    setInterval(() => {setTime(time);
    }, 1000);
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

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  let dateStr = date.toLocaleString();
  let slicedDateStr = dateStr.slice(10,16)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background.png')}>
      </ImageBackground>
      <Text style={styles.timeText}>{getCurrentTime()} {ampm}</Text>
      <Text style={styles.dateText}>{weekday}, {monthName} {dateOfMonth}, {year}</Text>
      <View style={styles.break}/>
      <Text style={styles.instOneTxt}>Please set your{'\n'}desired wake up time:</Text>
      <Text style={styles.selectedTime}>SELECTED TIME -{slicedDateStr}</Text>
      <TouchableOpacity
          style={styles.buttonOne}
          onPress={showTimepicker}
          uppercase={false}>
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
          onPress={() => Alert.alert('Simple Button1 pressed')}
          uppercase={false}>
         <Text style={styles.buttonTwoTxt}>Calculate Optimal Bedtimes</Text>
         </TouchableOpacity>
      <View style={styles.breakTwo}/>
      <Text style={styles.instTwoTxt}>If you're going to bed now</Text>
      <TouchableOpacity
          style={styles.buttonThree}
          onPress={() => Alert.alert('Simple Button1 pressed')}
          uppercase={false}>
         <Text style={styles.buttonThreeTxt}>When Should I Wake Up?</Text>
         </TouchableOpacity>
         <View style={styles.navContainer}>
           <View style={styles.navBar}>
             <Pressable onPress={() => ('./Info.js')} style={styles.iconBehave}
             android_ripple={{borderless:true, radius:50}}>
               <Icon name="clock-with-white-face" height={iconHeight} width={iconWidth} colors="#448aff"/>
             </Pressable>
             <Pressable onPress={() => ('./Info.js')} style={styles.iconBehave}
             android_ripple={{borderless:true, radius:50}}>
               <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} colors="#448aff"/>
             </Pressable>
             <Pressable onPress={() => ('./Info.js')} style={styles.iconBehave}
             android_ripple={{borderless:true, radius:50}}>
               <Icon name="rounded-info-button" height={iconHeight} width={iconWidth} colors="#448aff"/>
             </Pressable>
           </View>
         </View>
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
    textAlign: 'center',
    bottom: '10%',
  },
  instTwoTxt: {
    fontSize: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    color: 'white',
    top: '12%',
  },
  selectedTime: {
    fontSize: 26,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    bottom: '6%'
  },
  buttonOne: {
    alignItems: 'center',
    backgroundColor: '#119AD4',
    padding: 10,
    textTransform: 'lowercase',
    paddingLeft: 88,
    paddingRight: 88,
    borderRadius: 7.5,
    bottom: '0%',
  },
  buttonOneTxt: {
    color: 'white',
    fontSize: 18,
  },
  buttonTwo: {
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    padding: 10,
    textTransform: 'lowercase',
    paddingLeft: 37,
    paddingRight: 37,
    borderRadius: 7.5,
    top: '3%',
  },
  buttonTwoTxt: {
    color: 'white',
    fontSize: 18,
  },
  buttonThree: {
    alignItems: 'center',
    backgroundColor: '#D7DA3D',
    padding: 10,
    textTransform: 'lowercase',
    borderRadius: 7.5,
    paddingLeft: 44,
    paddingRight: 44,
    top: '17%',
  },
  buttonThreeTxt: {
    fontSize: 18,
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
    bottom: '11%',
  },
  breakTwo: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    alignSelf: 'auto',
    width: '75%',
    justifyContent: 'center',
    top: '10%'
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: "#36454F",
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconBehave: {
    padding: 14,
  },
  '*': {
    fontFamily: 'Roboto',
  },
});