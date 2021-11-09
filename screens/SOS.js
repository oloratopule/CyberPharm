import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import { Foundation, Ionicons, } from '@expo/vector-icons';

export default function SOS({ navigation }) {
  return (
    <View style={styles.container}>
      {
        // <View style={styles.icons}>
        //   <Foundation name="align-left" size={40} color="black" />
        // </View>
      }
      <TouchableOpacity>
        <Image style={styles.sos} source={require('../assets/icon/panic.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <Ionicons name="add-circle" size={70} color='#00B2FF' style={styles.add} />
      </TouchableOpacity>
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
    alignSelf:'center'
  },
  add: {
    marginTop: 260,
    marginLeft: 290
  }
});
