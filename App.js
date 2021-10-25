import React from 'react';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ResetPassword from './screens/ResetPassword';
import SOS from './screens/SOS';
import Doctors from './screens/Doctors';
import Appointment from './screens/Appointment';
import Dates from './screens/Dates';
import Contact from './screens/Contact';
import Login from './screens/Login'
import Register from './screens/Register'
import SymptopmChecker from './screens/SymptopmChecker'
import MessagePalette from './screens/MessagePalette';
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
   <View>
     <MessagePalette/>
   </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
