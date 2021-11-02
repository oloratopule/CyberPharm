import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Covid() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.header}>Covid-19</Text>
        <FontAwesome5 name="virus" size={24} color="black" />
      </View>
      <Text style={styles.text}>
        Coronavirus disease is an infectious disease caused by the SARS-CoV-2
        virus. <br />
        Most people who fall sick with COVID-19 will experience mild to moderate
        symptoms and recover without special treatment. However, some will
        become seriously ill and require medical attention.
      </Text>
      <Text style={styles.header}>How it spreads</Text>
      <Text style={styles.text}>
        The virus can spread from an infected person’s mouth or nose in small
        liquid particles when they cough, sneeze, speak, sing or breathe. These
        particles range from larger respiratory droplets to smaller aerosols.{' '}
        <br /> You can be infected by breathing in the virus if you are near
        someone who has COVID-19, or by touching a contaminated surface and then
        your eyes, nose or mouth. The virus spreads more easily indoors and in
        crowded settings.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    borderRadius: 20,
    height: 632,
  },
  text: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  header: {
    marginLeft: 15,
    fontSize: 25,
    marginTop: 10,
    fontWeight:'bold'
  },
  heading: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent:'space-between',
     marginRight: 30,
  },
  
});
