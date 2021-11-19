import React,{useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';
import { firebase } from '../config/firebase'
import getUSER from '../auth/user'

export default function SOS({ navigation }) {
  const [contact, setContact] = useState([
    {},
  ])
  useEffect(() => {
    const ud = getUSER();
    console.log(ud)
    firebase
      .firestore()
      .collection('Contacts')
      .doc(ud)
      .collection('Contact_List')
      .onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContact(dis);
      });
  }, []);


  const SOS = (() => {
    SMS.sendSMSAsync(
      [contact.PhoneNumber, ],
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
        <ImageBackground style={styles.sos} source={require('../assets/icon/panic.png')} />
      </TouchableOpacity>
      <Ionicons name="add-circle" size={40} color='#00B2FF' style={styles.add} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sos: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginTop: 150,
    alignSelf: 'center'
  },
  add: {
    marginTop: 260,
    marginLeft: 290
  }
});
