import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background.png')}>
      </ImageBackground>
      <Text>Set Desired Wake Up Time</Text>
      <TouchableOpacity style={styles.buttonOne}>
        <Text>When Should I Go to Sleep?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonTwo}>
        <Text>When should I Wake Up?</Text>
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
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});