import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

const ContactForm = () => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.header}>Name</Text>
                <TextInput
                    placeholder="Enter name"
                    style={styles.input}
                />

                <Text style={styles.header}>Surname</Text>
                <TextInput
                    placeholder="Enter surname"
                    style={styles.input}
                />

                <Text style={styles.header}>Phone number</Text>
                <TextInput
                    placeholder="+998 -- --- -- --"
                    style={styles.input}
                />

            </View>

            <TouchableOpacity style={styles.button}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        marginTop: 80
    },
    input: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        height: 52,
        width: 342,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#eee'
    },
    button: {
        borderRadius: 80,
        backgroundColor: 'rgba(0, 178, 255, 1)',
        position: 'relative',
        marginTop: -50,
        width: 60,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        left: 280,
        top: 177,
    },

});
