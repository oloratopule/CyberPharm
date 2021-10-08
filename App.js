import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ResetPassword from './screens/ResetPassword';
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
  
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
