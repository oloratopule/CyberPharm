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
import Messaging from './screens/Messaging';




const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={Contact} />
        <Stack.Screen name="Panic" component={SOS} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="NewDoctors" component={NewDoctors} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Symptom" component={SymptopmChecker} />
        <Stack.Screen name="ContactForm" component={ContactForm} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} />
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
