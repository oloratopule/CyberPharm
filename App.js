import React from 'react';
import { StyleSheet, View } from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';


const Stack = createNativeStackNavigator();
export default function App({ navigation }) {

  return (
    <View>
      < Home />
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
