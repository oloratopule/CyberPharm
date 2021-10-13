import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
  RadioButton
} from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Dates({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('null');
  const [selectedMonth, setSelectedMonth] = useState('null');
  const [getAge, setAge] = useState('');
  return (
    <SafeAreaView style={styles.container}>

      <Picker
        selectedMonth={selectedValue}
        style={{ height: 30, width: 250, borderRadius: 20, }}
        onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
      >
        <Picker.Item label="January, 2021" value="January" />
        <Picker.Item label="February, 2021" value="February" />
        <Picker.Item label="March, 2021" value="March" />
        <Picker.Item label="April, 2021" value="April" />
        <Picker.Item label="May, 2021" value="May" />
        <Picker.Item label="June, 2021" value="June" />
        <Picker.Item label="July, 2021" value="July" />
        <Picker.Item label="August, 2021" value="August" />
        <Picker.Item label="September, 2021" value="September" />
        <Picker.Item label="October, 2021" value="October" />
        <Picker.Item label="November, 2021" value="November" />
        <Picker.Item label="December, 2021" value="December" />
      </Picker>

      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.cards}>
          <View style={styles.card1 }>
            <Text style={styles.date}>1</Text>
            <Text style={styles.day}>FRI</Text>
          </View>
          <View style={styles.card3}>

            <Text style={styles.date}>2</Text>
            <Text style={styles.day}>SAT</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>3</Text>
            <Text style={styles.day}>SUN</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>4</Text>
            <Text style={styles.day}>MON</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>5</Text>
            <Text style={styles.day}>TUE</Text>
          </View>
          <View style={styles.card3}>

            <Text style={styles.date}>6</Text>
            <Text style={styles.day}>WED</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>7</Text>
            <Text style={styles.day}>THUR</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>8</Text>
            <Text style={styles.day}>FRI</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>9</Text>
            <Text style={styles.day}>SAT</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.date}>10</Text>
            <Text style={styles.day}>SUN</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>11</Text>
            <Text style={styles.day}>MON</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>12</Text>
            <Text style={styles.day}>TUE</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>13</Text>
            <Text style={styles.day}>WED</Text>
            <View style={styles.card3}> 
              <Text style={styles.date}>14</Text>
              <Text style={styles.day}>THUR</Text>
            </View>
            {/* <View style={styles.card3}>
            <Text style={styles.date}>15</Text>
            <Text style={styles.day}>FRI</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>16</Text>
            <Text style={styles.day}>SAT</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>18</Text>
            <Text style={styles.day}>SUN</Text>
          </View>
          <View style={styles.card3}>

            <Text style={styles.date}>19</Text>
            <Text style={styles.day}>MON</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>20</Text>
            <Text style={styles.day}>TUE</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>21</Text>
            <Text style={styles.day}>WED</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>22</Text>
            <Text style={styles.day}>THUR</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>23</Text>
            <Text style={styles.day}>FRI</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>24</Text>
            <Text style={styles.day}>SAT</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>25</Text>
            <Text style={styles.day}>SUN</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.date}>26</Text>
            <Text style={styles.day}>MON</Text>
            </View> */}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.time}>Available Time </Text>
      <View style={styles.times}>
        <View style={styles.time1}>
          <Text style={styles.t9}>09:00 AM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>09:30 AM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>10:00 AM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>10:30 AM</Text>
        </View>
      </View>

      <View style={styles.times}>
        <View style={styles.time1}>
          <Text style={styles.t9}>12:00 AM</Text>
        </View>
        <View style={styles.t2}>
          <Text style={styles.t9}>12:30 AM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>13:30 PM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>14:00 PM</Text>
        </View>
      </View>

      <View style={styles.times}>
        <View style={styles.time1}>
          <Text style={styles.t9}>15:00 PM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>16:30 PM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>17:00 PM</Text>
        </View>
        <View style={styles.time2}>
          <Text style={styles.t9}>17:30 PM</Text>
        </View>
      </View>

      <Text style={styles.time}> Patient Details</Text>
      <Text style={styles.age}><b>Full Name</b></Text>
      <TextInput style={styles.input} placeholder="Full name" />

      <Text style={styles.age}><b>Age</b></Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 250, borderRadius: 20, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="20-25" value="20-25" />
        <Picker.Item label="26-30" value="26-30" />
        <Picker.Item label="31-40" value="31-40" />
        <Picker.Item label="26-30" value="26-30" />
      </Picker>

      <Text style={styles.age}><b>Gender</b></Text>
      <RadioButton.Group
        onValueChange={(newValue) => setAge(newValue)}
        value={getAge}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton value="High" />
          <Text style={{ paddingTop: '3%' }}>Male</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton value="Medium" />
          <Text style={{ paddingTop: '3%' }}>Female</Text>
        </View>
      </RadioButton.Group>
      <Text style={styles.age}><b>Write your problem</b></Text>
      <TextInput style={styles.problem} placeholder="Write your problem" />
      <TouchableOpacity style={styles.btn}>
        <View style={styles.app}> Set Appointment</View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    bottom: 10,
  },
  scrollContainer: {
    height: 120,
  },
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  date: {
    marginLeft: 22,
    marginTop: 15,
    fontSize: 20,
  },
  day: {
    marginLeft: 20,
    marginTop: 12,
    fontSize: 12,
  },
  card1: {
    height: 90,
    border: '1px solid gray',
    width: 70,
  },
  card2: {
    height: 90,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 70,
    marginLeft: 10,
  },
  card3: {
    height: 90,
    border: '1px solid gray',
    width: 70,
    marginLeft: 10,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  times: {
    flexDirection: 'row',
    marginTop: 12,
  },
  time1: {
    border: '1px solid gray',
    height: 30,
    fontSize: 15,
    width: 70,
  },
  t9: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 13,
  },
  time2: {
    border: '1px solid gray',
    height: 30,
    fontSize: 15,
    width: 70,
    marginLeft: 5,
  },
  t2: {
    height: 30,
    fontSize: 15,
    width: 70,
    marginLeft: 5,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
  },
  input: {
    width: 250,
    height: 25,
    marginRight: 35,
    borderRadius: 20,
    paddingLeft: 15,
    border: '1px solid gray',
  },
  age: {
    marginTop: 10,
    marginLeft: 10
  },
  problem: {
    width: 250,
    height: 90,
    marginRight: 35,
    paddingLeft: 15,
    border: '1px solid gray',
    marginTop: 10
  },
  btn: {
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 280,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  },
  app: {
    marginLeft: 90,
    marginTop: 5,
    color: 'white'
  }
});
