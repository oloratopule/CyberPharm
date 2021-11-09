import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import SendPasswordResetMail from '../auth/sendPasswordResetMail';

export default function ResetPassword() {
    const [email, setEmail] = useState('')

    const resetEmail = () => {
        SendPasswordResetMail(email)
    }

  
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Reset Password</Text>
            <Text style={styles.text}>
                Enter email associated with your account and we'll send an email with instructions<br />to reset your password
            </Text>
            <TextInput
                placeholder='Email'
                style={styles.placeholder}
                onChangeText={(email) => setEmail(email)}
            />

            <View style={styles.btn}>
                <TouchableOpacity onPress={() => resetEmail()}>
                    <Text style={styles.send}>Send Verification Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    head: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 10,
        fontSize: 17,
    },
    placeholder: {
        width: 258,
        backgroundColor: '#E9F3F8',
        height: 42,
        marginTop: 45,
        borderRadius: 20,
        paddingLeft: 15,
        color: 'black'
    },
    btn: {
        backgroundColor: 'background: rgba(80, 131, 232, 1);',
        marginTop: 200,
        height: 60,
        width: 250,
        borderRadius: 20,
        marginLeft: 25

    },
    send: {
        color: 'white',
        marginLeft: 45,
        marginTop: 19,
        fontSize: 15,
        fontWeight: 'bold'
    }

});
