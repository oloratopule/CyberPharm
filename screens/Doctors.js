import * as React from 'react';
import {
  Text, View, StyleSheet, TextInput, Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default function Doctors({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Search for doctors" style={styles.textInput} />
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.specialty}>
          <View style={styles.specialty1}>
          <Image style={styles.img} source={require('../assets/icon/brain.png')} />
            <Text
              style={{
                marginLeft: '25px',
                marginTop: '5px',
                fontSize: '15px',
              }}>
              Neurology
            </Text>
            <Text
              style={{ color: 'white', marginLeft: '15px', marginTop: '6px' }}>
              2.029 Doctors
            </Text>
          </View>
          <View style={styles.specialty2}>
          <Image style={styles.img} source={require('../assets/icon/dna.png')} />
            <Text
              style={{
                marginLeft: '25px',
                marginTop: '10px',
                fontSize: '15px',
              }}>
              Genetics
            </Text>
            <Text
              style={{ color: 'white', marginLeft: '15px', marginTop: '6px' }}>
              1.870 Doctors
            </Text>
          </View>
          <View style={styles.specialty2}>
          <Image style={styles.img} source={require('../assets/icon/dentist.png')} />
            <Text
              style={{
                marginLeft: '25px',
                marginTop: '10px',
                fontSize: '15px',
              }}>
              Dentistry
            </Text>
            <Text
              style={{ color: 'white', marginLeft: '15px', marginTop: '6px' }}>
              1.064 Doctors
            </Text>
          </View>
          <View style={styles.specialty2}>
          <Image style={styles.img} source={require('../assets/icon/surgery.png')} />
            <Text
              style={{
                marginLeft: '25px',
                marginTop: '10px',
                fontSize: '15px',
              }}>
              Surgery
            </Text>
            <Text
              style={{ color: 'white', marginLeft: '15px', marginTop: '6px' }}>
              964 Doctors
            </Text>
          </View>

          
        </View>
      </ScrollView>
      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. Bellamy N</Text>
          <Text style={styles.occupation}>Viralogist</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. Bellamy N</Text>
          <Text style={styles.occupation}>Oncologists</Text>
          <Text></Text>
        </View>
      </View>

      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. Klimisch J</Text>
          <Text style={styles.occupation}>Surgeon</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. Martinez K</Text>
          <Text style={styles.occupation}>Pedratrician</Text>
          <Text></Text>
        </View>
      </View>

      <View style={styles.cards}>
        <View style={styles.card1}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. Mark M</Text>
          <Text style={styles.occupation5}>Rheumatologists</Text>
          <Text></Text>
        </View>
        <View style={styles.card2}>
          <View>
            <Image style={styles.sos} source={require('../assets/icon/nurse.jpg')} />
          </View>
          <Text style={styles.name} onPress={() => navigation.navigate('Appointment')}>Dr. O'Boyle J</Text>
          <Text style={styles.occupation}>Radiologists</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
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
    marginTop: 50,
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
  specialty: {
    flexDirection: 'row',
    marginTop: 20,
  },
  specialty1: {
    height: 120,
    width: 114,
    backgroundColor: 'background: rgba(21, 151, 229, 0.5);',
    borderRadius: 20,
  },
  specialty2: {
    height: 120,
    backgroundColor: 'background: rgba(21, 151, 229, 0.5);',
    width: 114,
    marginLeft: 10,
    borderRadius: 20,
  },

  img:{
    marginTop:15,
    marginLeft:35,
    height:45,
    width:45
    
  }
});
