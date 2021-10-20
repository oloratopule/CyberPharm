import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Ionicons,
  SimpleLineIcons,
  Entypo,
  AntDesign,
} from '@expo/vector-icons';


export default function Appointment({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
      <Text style={styles.name}>Dr. Bellamy Nicholas</Text>
      <Text style={styles.occupation}>Viralogist</Text>
      <View style={styles.cards}>
        <View style={styles.patients}>
          <Ionicons
            name="ios-people-sharp"
            size={32}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.number}>1000+</Text>
          <Text style={styles.heading}>Patients</Text>
        </View>

        <View style={styles.experience}>
          <SimpleLineIcons
            name="badge"
            size={32}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.number}>10 Yrs</Text>
          <Text style={{color:'white', marginLeft:'13px'}}>Experience</Text>
        </View>

        <View style={styles.ratings}>
          <Entypo
            name="star-outlined"
            size={32}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.number}>4.5</Text>
          <Text style={styles.heading}>Ratings</Text>
        </View>
      </View>
      <Text style={styles.text}>About Doctor</Text>
      <Text style={styles.description}>
        Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital at
        London. He has achieved several awards and recognition for is
        contribution and service in his own field. He is available for private
        consultation.
      </Text>

      <Text style={styles.text}>Working time</Text>
      <Text style={styles.description}>Mon- Sat(08:30 AM - 09:00 PM)</Text>
      <Text style={styles.text}>Communication</Text>
      <View style={styles.call}>
        <AntDesign name="message1" size={19} color="black" />
        <Text style={styles.communication}>
          <b> Messaging</b>
          <br /> Chat me up, share photos
        </Text>
      </View>
      <View style={styles.call}>
        <Ionicons name="call-outline" size={19} color="black" />
        <Text style={styles.communication}>
          <b> Audio Call</b>
          <br /> Call your doctor directly
        </Text>
      </View>
      <View >
        <TouchableOpacity style={styles.btn}  onPress ={() => navigation.navigate('Dates')}>
        <View style={styles.app}>   Book Appointment</View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    // marginTop: 20,
    bottom: 10,
  },
  sos: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginLeft: 110,
    marginTop: 60,
  },
  name: {
    marginTop: 20,
    marginLeft: 65,
    fontSize: 17,
    fontWeight: 'bold',
  },
  occupation: {
    marginLeft: 125,
    marginTop: 5,
  },
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  patients: {
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    height: 110,
    width: 90,
    borderRadius: 20,
  },
  experience: {
    marginLeft: 10,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    height: 110,
    width: 90,
    borderRadius: 20,
  },
  ratings: {
    marginLeft: 10,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    height: 110,
    width: 90,
    borderRadius: 20,
  },
  number: {
    marginLeft: 20,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color:'white'
  },
  icon: {
    marginLeft: 29,
    marginTop: 12,
  },
  heading: {
    marginLeft: 22,
    color:'white'
  },
  text: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
  },
  call: {
    flexDirection: 'row',
    marginTop: 7,
  },
  communication: {
    marginLeft: 7,
  },
  btn: {
      backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 280,
    height: 40,
    borderRadius:20,
    marginTop:25
  },
  app:{
    marginLeft:85,
    marginTop:12,
    color:'white'
  }
});
