import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import savingContact from '../data/savingContact'

const ContactForm = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();

    function save(fn, ln, pn, em) {
        firstName = fn;
        lastName = ln;
        email = em;
        phone = pn;
        savingContact(firstName, lastName, email, phone)
    }

    return (
        <View style={styles.container}>

            <View>
                <View>
                    <View>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            placeholder="Enter name"
                            style={styles.input}
                   /*{ onChangeText={setFirstName(firstName)}}*/ />
                    </View>

                    <View>
                        <Text style={styles.label}>Surname</Text>
                        <TextInput
                            placeholder="Enter surname"
                            style={styles.input}
               /*     onChangeText={setLastName(lastName)} */ />
                    </View>

                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder="Enter email"
                            style={styles.input}
               /*     onChangeText={setEmail(email)} */ />
                    </View>

                    <View>
                        <Text style={styles.label}>Phone number</Text>
                        <TextInput
                            placeholder="+998 -- --- -- --"
                            style={styles.input}
                /*    onChangeText={setPhoneNumber(phoneNumber)} */ />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.saveText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        marginTop: 30,
        alignItems: 'center'
    },
    label: {
        marginBottom: 0,
        marginTop: 5
    }
    ,
    input: {
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        height: 52,
        width: 360,
        backgroundColor: '#D9D9D9',
        padding: 15
    },
    saveText: {
        color: 'white',
        fontSize: 20
    }
    ,
    button: {
        backgroundColor: 'rgba(62, 100, 255, 1)',
        position: 'relative',
        width: 360,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 20
    },

});
