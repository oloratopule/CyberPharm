import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SymptopmChecker from './screens/SymptopmChecker';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ResetPassword from './screens/ResetPassword';
import SOS from './screens/SOS';
import Doctors from './screens/Doctors';
import Appointment from './screens/Appointment';
import Dates from './screens/Dates';
import Contact from './screens/Contacts';
import ContactForm from './screens/ContactForm';

const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="SOS" component={SOS} />
         <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Dates" component={Dates} />
      </Stack.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
