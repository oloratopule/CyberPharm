import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import ContactItem from '../components/ContactItem'
import ContactList from '../API/ContactList.'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Contacts = ({ navigation }) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    
    const [contact, setContact] = useState([
        {
            fname: firstName,
            lname: lastName,
            phone: phoneNumber,
            mail: email
        }
    ])

    return (
        <ScrollView horizontal={false} style={styles.container}>
            <TextInput style={styles.search} placeholder="Search..." />

            {contact.map(user => {
                return (
                    <ContactItem  />
                )
            })}


            <TouchableOpacity style={styles.addIconContainer} onPress={() => navigation.navigate('Contacts')}>
                <Image style={styles.addIcon} source={require('../assets/icon/add.png')} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignSelf: 'center'
    },
    search: {
        flexDirection: 'row',
        borderColor: '#eee',
        marginLeft: 1,
        marginTop: 5,
        borderWidth: 1,
        height: 52,
        width: 350,
        padding: 10,
        marginTop: 10,
    },
    delete1: {
        width: 18,
        height: 18,
        marginHorizontal: 140,
        marginTop: 5,
    },
    delete: {
        width: 20,
        height: 20,
        marginTop: 25,
        marginLeft: 80,
    },
    plusSign: {
        marginTop: 280,
        marginHorizontal: 260,
        width: 60,
        height: 60,
    }
    ,
    addIconContainer: {
        position: 'absolute',
        top: 740,
        left: 290
    }
    ,
    addIcon: {
        width: 60,
        height: 60,
    }
});