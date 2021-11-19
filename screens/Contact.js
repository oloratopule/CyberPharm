

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator, Button } from 'react-native'
import ContactItem from '../components/ContactItem'
import ContactList from '../API/ContactList.'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '../config/firebase'
import { db } from '../config/firebase';
import getUSER from '../auth/user'

const Contact = ({ navigation }) => {
    const [user, setUser] = useState([
        { FirstName: '' },
    ])

    const [contact, setContact] = useState([
        {},
    ])

    const [details, setDetails] = useState([]);





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



    return (
        <ScrollView horizontal={false} style={styles.container}>
            <TextInput style={styles.search} placeholder="Search..." />

            {contact.map((data, k) => (
                <View>
                    <ContactItem  data={data}/>
                </View>
            ))}

            <TouchableOpacity style={styles.addIconContainer} onPress={() => navigation.navigate('ContactForm')}>
                <Image style={styles.addIcon} source={require('../assets/icon/add.png')} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Contact

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
        top: 0,
        left: 290
    }
    ,
    addIcon: {
        width: 60,
        height: 60,
    }
});