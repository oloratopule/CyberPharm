import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ResetPassword from './screens/ResetPassword';
import SOS from './screens/SOS';
import Doctors from './screens/Doctors';
import Appointment from './screens/Appointment';
import Dates from './screens/Dates';
import Contact from './screens/Contact';
import ContactForm from './screens/ContactForm';
import Vaccination from './screens/Vaccination';
import DonateBlood from './screens/DonateBlood';

const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="SOS" component={SOS} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Symptom" component={SymptopmChecker} />
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
