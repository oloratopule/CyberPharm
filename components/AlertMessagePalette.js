import React, { Component } from 'react'
import {  StyleSheet, View ,Text} from 'react-native'

export default class AlertMessagePalette extends Component {
    render() {
        return (
            <View>
                <View style={styles.inBox}>
                    <Text style={styles.text}>hello</Text>
                    <Text style={styles.text}>hello</Text>
                    <Text style={styles.text}>hello</Text>
                    <Text style={styles.text}>hello</Text>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inBox:{
        width:50,
        height:50,
        
    },
    text:{
        color:'black',
        fontSize:12,
    }
   
})
