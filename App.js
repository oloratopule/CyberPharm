import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Register from './screens/Register'
import login from './auth/login';

export default function App() {
  const login = () => {

    login ("kb@gmail.com", "123456789")
  }
  return (
    <View style={styles.container}>
<<<<<<< HEAD
    <Register/>
=======
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>testing</Text>
      <StatusBar style="auto" />
>>>>>>> 42bcd5b611023a58aa8e647df0f69ad143f0e87d
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
