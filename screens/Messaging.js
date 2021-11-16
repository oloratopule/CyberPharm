import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { Paragraph, Title } from 'react-native-paper';
const { width, height } = Dimensions.get('screen')
const client = require('twilio')('AC06df3ab4309a87e11d9819c84a3f5891', 'a5555254b0123c63225ba2b7dcb64651');
import { Twilio, } from 'twilio'
import sgmail from '@sendgrid/mail'
import SENDGRID_API_KEY from '../sendgrid.env'
export default function Messaging() {
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const sgMail = require('@sendgrid/mail')

    const Chat = () => {

        sgmail.setApiKey('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')
        const msg = {
            to: 'thato732mahloko@gmail.com', // Change to your recipient
            from: 'cyberpharmmlab@gmail.com', // Change to your verified sender
            subject: subject,
            text: 'Sent from APP "Cyber Pharm"',
            html: '<strong>Auto messsaging API</strong>',
        }
        sgMail.send(msg)
            .then(() => {
                console.log('Email Sent')
                alert('Email Sent')
            })
            .catch((error) => {
                console.log(error)
            })


    }


    return (
        <View style={styles.messageFormBody}>
            <Title style={styles.titleName}>Full Name</Title>
            <TextInput style={styles.input} textContentType="givenName" placeholder={"Enter your full name"} onChangeText={(name) => setName(name)} />
            <Title style={styles.title}>Mobile Number</Title>
            <TextInput style={styles.input} textContentType="telephoneNumber" placeholder={"Enter your mobile number"} onChangeText={(phone) => setPhone(phone)} />
            <Paragraph style={styles.titleSub}>Write your problem</Paragraph>
            <TextInput style={styles.typingMessage} multiline={true} placeholder={"Write your message"} onChangeText={(subject) => setSubject(subject)} />
            <TouchableOpacity style={styles.button} onPress={Chat}>
                <Text style={styles.buttonText}>SEND MESSAGE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    messageFormBody: {
        paddding: 20,
        backgroundColor: "white",
        height: height

    }
    ,
    title: {
        marginLeft: 42,
        marginTop: 40,
    }
    ,
    titleName: {
        marginLeft: 42,
        marginTop: 40,
    }
    ,
    input: {
        width: 330,
        backgroundColor: "#EDEDED",
        height: 70,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        alignSelf: 'center',
    }
    ,
    titleSub: {
        color: 'grey',
        fontSize: 20,
        marginLeft: 42,
        marginTop: 60
    }
    ,
    typingMessage: {
        paddingLeft: 15,
        paddingTop: 15,
        marginTop: 10,
        alignSelf: 'center',
        width: 330,
        height: 130,
        backgroundColor: "#EDEDED",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D5D5D5',
    }
    ,
    button: {
        backgroundColor: '#3E64FF',
        height: 60,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40,
        alignSelf: 'center'
    }
    ,
    buttonText: {
        color: '#fff'
    }

})
