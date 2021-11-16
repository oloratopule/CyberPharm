import * as React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const url = 'https://sacoronavirus.co.za/evds/';

export default function Vaccination({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Why is vaccination important?</Text>

      <Text style={styles.text}>
        Vaccination is a safe and effective way to prevent disease and save
        lives. When we get vaccinated,<br/>we are not just protecting ourselves, but
        also those around us. Some people, like those who are seriously ill, are
        advised not to get certain vaccines – so they depend on the rest of us
        to get vaccinated and help reduce the spread of disease.
      </Text>

      <Text style={styles.header}>How do vaccines work?</Text>
      <Text style={styles.text}>
        Vaccines train your immune system to create antibodies, just as it does
        when it is exposed<br/>to a disease. When you get a vaccine, your<br/>immune
        system responds. It:
      </Text>

      <Text>
        <View style={styles.list}>
          <MaterialCommunityIcons name="needle" size={25} color="#054EDE" />
          <Text style={styles.text2}>
            produces antibodies. Antibodies are proteins produced naturally by
            the immune system to fight disease
          </Text>
        </View>

        <View style={styles.list}>
          <MaterialCommunityIcons name="needle" size={25} color="#054EDE" />
          <Text style={styles.text2}>
            remembers the disease and how to fight it. If you are then exposed
            to the germ in the future, your immune system can quickly destroy it
            before you become unwell.
          </Text>
        </View>
      </Text>

      <View style={styles.footer}>
           <Text style={styles.register} >
          Register for Vaccination Here
        </Text>
        <MaterialIcons
          name="app-registration"
          size={20}
          color="black"
          style={styles.book}
          onPress={() => Linking.openURL(url)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderRadius: 20,
    height: 632,
  },
  text: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 15,
  },
  header: {
    marginLeft: 15,
    fontSize: 25,
    marginTop: 10,
    fontWeight:'bold'
  },
  list: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  text2: {
    marginLeft: 10,
    marginRight: 30,
  },
  footer: {
    backgroundColor: '#054EDE',
    marginTop: 150,
    width: 280,
    height: 40,
    marginLeft: 60,
    borderRadius: 20,
  },
  register: {
    marginLeft: 60,
    marginTop: 10,
    color: 'white',
  },
  book: {
    marginLeft: 35,
    marginTop: -20,
    color: 'white',
  },
});
