import * as React from 'react';
import {  View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default function SOS({navigation}) {
  const SOS = (()=>{
    SMS.sendSMSAsync(
        ['0123456789', '9876543210'],
        'My sample HelloWorld message',
        {
          
        }
      );
})
  return (
    <View style={styles.container}>
   <View style={styles.icons}>
      <Foundation name="graph-horizontal" size={40} color="black" />
   </View>
   <TouchableOpacity onPress={SOS}>
   <ImageBackground style={styles.sos} source={require('../assets/icon/panic.png')}/>
   </TouchableOpacity>
   <Ionicons name="add-circle" size={40} color='#00B2FF' style={styles.add}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  icons:{
      flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sos:{
      position:'absolute',
      width:200,
      height:200,
      borderRadius:50,
      marginTop: 150,
      marginLeft:50
  },
  add:{
    marginTop:630,
    marginLeft:290
  }
});
