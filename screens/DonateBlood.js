import * as React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const url = 'https://sanbs.org.za/donation-process/';

export default function DonateBlood() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donation Process</Text>
      <Text style={styles.text}>
        Donating safe blood means you are committed to participating in a vital
        community service to improve the quality of life, for patients in need
        of blood transfusions.
        <br /> These measures include:
      </Text>
      <View style={styles.measures}>
        <Fontisto name="blood-drop" size={20} color="red" />
        <Text style={styles.text2}>
          You will be required to complete a Donor Questionnaire. The questions
          are aimed at assessing your health and lifestyle to eliminate any
          effects that could pose a risk to your health and the health of a
          recipient.
        </Text>
      </View>

      <View style={styles.measures}>
        <Fontisto name="blood-drop" size={20} color="red" />
        <Text style={styles.text2}>
          This is followed by a one-on-one interview with the nurse who goes
          through the questions to ensure that the questions are understood and
          that the donor understands the importance of being honest on the
          questionnaire
        </Text>
      </View>

      <View style={styles.measures}>
        <Fontisto name="blood-drop" size={20} color="red" />
        <Text style={styles.text2}>
          Your blood pressure and haemoglobin (iron) levels are checked. (The
          checking of your iron level is done with a small prick to your
          finger).
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.register} onPress={() => Linking.openURL(url)}>
         Donate Blood
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderRadius: 20,
    
  },
  text: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  header: {
    marginLeft: 15,
    fontSize: 25,
    marginTop: 25,
    fontWeight:'bold'
  },
  measures: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  text2: {
    marginLeft: 10,
    marginRight: 30,
  },
   register: {
    marginLeft: 50,
    marginTop: 5,
    color: 'white',
    fontSize:19
  },
   footer: {
    backgroundColor: '#054EDE',
    marginTop: 170,
    width: 220,
    height: 40,
    marginLeft: 80,
    borderRadius: 20,
  },
});
