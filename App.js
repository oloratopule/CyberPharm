import React from 'react';
import { StyleSheet, View } from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
<<<<<<< HEAD

=======
import ResetPassword from './screens/ResetPassword';
import SOS from './screens/SOS';
import Doctors from './screens/Doctors';
import Appointment from './screens/Appointment';
import Dates from './screens/Dates';
import Contact from './screens/Contact';
import ContactForm from './screens/ContactForm';
<<<<<<< HEAD
import ContactItem from './components/ContactItem';
=======
import Vaccination from './screens/Vaccination';
import DonateBlood from './screens/DonateBlood';
>>>>>>> b8aa64ed958b85edcd369be59b356a7471afdce5
>>>>>>> abf9d964dbd034c983508ad2a6e84f952be9cb55

const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
<<<<<<< HEAD
    <View>
      <ContactForm />
    </View>
=======
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen name="ResetPassword" component={ResetPassword} />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Contact" component={Contact} />
    //     <Stack.Screen name="SOS" component={SOS} />
    //     <Stack.Screen name="Doctors" component={Doctors} />
    //     <Stack.Screen name="Appointment" component={Appointment} />
    //     <Stack.Screen name="Symptom" component={SymptopmChecker} />
    //     <Stack.Screen name="Dates" component={Dates} />
    //   </Stack.Navigator>
    // </NavigationContainer>
<View>
  <Vaccination/>
  </View>

>>>>>>> b8aa64ed958b85edcd369be59b356a7471afdce5
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
