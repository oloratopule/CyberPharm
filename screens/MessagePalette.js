import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import EmailText from '../components/EmailText'
import ProblemPallete from '../components/ProblemPallete'
import SendButton from '../components/SendButton'

export default class MessagePalette extends Component {
    render() {
        return (
            <View style={styles.mainFrame}>
                <View>
                    <EmailText style={styles.textposition} />
                    <View style={styles.Boxposition}>
                        <ProblemPallete />
                    </View>
                    <View style={styles.buttonPosition}>
                        <SendButton style={styles.buttonPosition} />
                    </View>
                </View>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    keyboardType="numeric"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    mainFrame:{
        width:428,
        height:926
    },

  


    inputText: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 20,
       marginTop:-380,
        width: 330,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        display: 'absolute'

    },
    buttonPosition: {
        marginTop: 500
    }
})
