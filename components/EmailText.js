import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class EmailText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.emailText}>Email address </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    emailText:{
        fontSize:14,
        fontStyle:'Roboto',
        marginLeft: 65,
        marginTop:160,
        marginBottom:-100,
        display:'absolute',
        
        fontStyle:'bold'
        
    },
})
