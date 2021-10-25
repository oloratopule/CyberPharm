import React, { useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { Paragraph, Title } from 'react-native-paper';
import emailjs from 'emailjs-com'
const { width, height } = Dimensions.get('screen')
import chat from '../chat/chat'

export default function Messaging() {
    const form = useRef();
    const service = "service_9dj1o2x";
    const template = "template_mz4hjkn";
    const uid = "user_FBWeDGGAg4iQ3mRXAhcdj";
    
    const Chat = (e) => {
        e.preventDefault();
        emailjs.sendForm(service, template, form.target, uid)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent!')
            }, (error) => {
                alert('Error')
                console.log(error.text);
            });

        e.target.reset()
    }
    return (
        <View style={styles.messageFormBody}>
            <Title style={styles.titleName}>Full Name</Title>
            <TextInput style={styles.input} textContentType="givenName" placeholder={"Enter your full name"} name="user_name" />
            <Title style={styles.title}>Email Address</Title>
            <TextInput style={styles.input} textContentType="emailAddress" placeholder={"Enter your email address"} name="user_email" />
            <Paragraph style={styles.titleSub}>Write your problem</Paragraph>
            <TextInput style={styles.typingMessage} multiline={true} placeholder={"Write your message"} name="message" />
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
