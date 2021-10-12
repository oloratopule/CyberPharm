import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ResetPassword from './screens/ResetPassword';
import Contact from './screens/Contacts';
import ContactForm from './screens/ContactForm';

const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} /> 
    //     <Stack.Screen name="Home" component={Home} /> 
    //     <Stack.Screen name="ResetPassword" component={ResetPassword} />
    //     <Stack.Screen name="Contacts" component={Contact} />
    //     <Stack.Screen name="Contact Form" component={ContactForm} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Contact />
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
