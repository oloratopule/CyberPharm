import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';
import Contact from './screens/Contact';
import SOS from './screens/SOS';
import Doctors from './screens/Doctors';
import Appointment from './screens/Appointment';
import SymptopmChecker from './screens/SymptopmChecker';
import Dates from './screens/Dates';
import ContactForm from './screens/ContactForm';
import Vaccination from './screens/Vaccination';
import DonateBlood from './screens/DonateBlood';
import NewDoctors from './screens/NewDoctors';





const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Doctors" component={NewDoctors} />
        <Stack.Screen name="Book" component={Doctors} />
        <Stack.Screen name="Booking" component={Dates} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Donation" component={DonateBlood} />
        <Stack.Screen name="Symptom" component={SymptopmChecker} />
        <Stack.Screen name="Contacts" component={ContactForm} />       
        <Stack.Screen name="SOS" component={SOS} />       
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
