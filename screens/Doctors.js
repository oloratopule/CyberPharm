import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';


export default function Doctors({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Search for doctors" style={styles.textInput} />
      </View>

      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')}/>
          </View>
          <Text style={styles.name}  onPress ={() => navigation.navigate('Appointment')}>Dr. Bellamy N</Text>
          <Text style={styles.occupation}>Viralogist</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name}>Dr. Bellamy N</Text>
          <Text style={styles.occupation}>Oncologists</Text>
          <Text></Text>
        </View>
      </View>

      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')}  />
          </View>
          <Text style={styles.name}>Dr. Klimisch J</Text>
          <Text style={styles.occupation}>Surgeon</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name}>Dr. Martinez K</Text>
          <Text style={styles.occupation}>Pedratrician</Text>
          <Text></Text>
        </View>
      </View>

      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name}>Dr. Mark M</Text>
          <Text style={styles.occupation5}>Rheumatologists</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name}>Dr. O'Boyle J</Text>
          <Text style={styles.occupation}>Radiologists</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  textInput: {
    marginTop: 35,
    borderWidth: '1px',
    width: '250px',
    height: '40px',
    paddingLeft: '40px',
    marginBottom: '10px',
    borderRadius: 25,
    borderColor: 'lightgray',
    marginHorizontal: 10,
    marginVertical: 25,
  },
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  card1: {
    backgroundColor: '#054EDE',
    height: 150,
    width: 135,
    borderRadius: 20,
  },
  card2: {
    backgroundColor: '#054EDE',
    height: 150,
    width: 135,
    marginLeft: 7,
    borderRadius: 20,
  },
  name: {
    marginTop: 10,
    marginLeft: 12,
    color: 'white',
    fontSize: 17,
  },
  occupation: {
    marginLeft: 35,
    color: 'white',
  },
  occupation5: {
    marginLeft: 15,
    color: 'white',
  },
  sos: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 25,
  },
});
