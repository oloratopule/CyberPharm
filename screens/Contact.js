{
    // import React, { Component, useState, useEffect } from 'react'
    // import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
    // import ContactItem from '../components/ContactItem'
    // import ContactList from '../API/ContactList.'
    // import { NavigationContainer } from '@react-navigation/native';
    // import { ContactsRef } from '../config/firebase';
    // export default class Contact extends Component {
    //     state = {
    //         Contacts: []
    //     }

    //     readContactsRef = () => {
    //         let contacts = [];
    //         ContactsRef.where('Name', '=', "Thato").onSnapshot(querySnapshot => {
    //             querySnapshot.forEach((doc) => {
    //                 contacts.push(doc.data())
    //             })
    //             this.setState({ Contacts: contacts })
    //         })
    //     }


    //     render() {
    //         return (
    //             <ScrollView horizontal={false} style={styles.container}>
    //                 <TextInput style={styles.search} placeholder="Search..." />

    //                 <FlatList
    //                     data={this.state.Contacts}
    //                     renderItem={({ item }) => {
    //                         <Text>{item.data}</Text>
    //                     }}
    //                 />

    //                 <TouchableOpacity style={styles.addIconContainer} >
    //                     <Image style={styles.addIcon} source={require('../assets/icon/add.png')} />
    //                 </TouchableOpacity>
    //             </ScrollView>
    //         )
    //     }
    // }

    // const styles = StyleSheet.create({
    //     container: {
    //         height: '100%',
    //         alignSelf: 'center'
    //     },
    //     search: {
    //         flexDirection: 'row',
    //         borderColor: '#eee',
    //         marginLeft: 1,
    //         marginTop: 5,
    //         borderWidth: 1,
    //         height: 52,
    //         width: 350,
    //         padding: 10,
    //         marginTop: 10,
    //     },
    //     delete1: {
    //         width: 18,
    //         height: 18,
    //         marginHorizontal: 140,
    //         marginTop: 5,
    //     },
    //     delete: {
    //         width: 20,
    //         height: 20,
    //         marginTop: 25,
    //         marginLeft: 80,
    //     },
    //     plusSign: {
    //         marginTop: 280,
    //         marginHorizontal: 260,
    //         width: 60,
    //         height: 60,
    //     }
    //     ,
    //     addIconContainer: {
    //         position: 'absolute',
    //         top: 740,
    //         left: 290
    //     }
    //     ,
    //     addIcon: {
    //         width: 60,
    //         height: 60,
    //     }
    // })

}

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import ContactItem from '../components/ContactItem'
import ContactList from '../API/ContactList.'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '../config/firebase'
import { db } from '../config/firebase';
const Contact = ({ navigation }) => {
    const [contact, setContact] = useState([''])

    useEffect(() => {
        var docRef = db.collection('Contacts').get().then((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                setContact({ ...doc.data() })
                console.log(contact)
            })
        })
    })



    return (
        <ScrollView horizontal={false} style={styles.container}>
            <TextInput style={styles.search} placeholder="Search..." />

            <ContactItem username="Thato Mahloko" number="07187523976" />

            {
                contact.map(u => {
                    return (
                        <View>
                            <ContactItem key={u} username="Thato Mahloko" number="07187523976" />
                        </View>
                    )
                })
            }

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