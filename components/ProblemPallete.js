import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ProblemPallete extends Component {
    render() {
        return (
            <View>
                <View style={styles.messageBox }>
                    <Text style={styles.text}>
                        Write your problem
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messageBox:{
        height:154,
        width:360,
        paddingLeft:25,
        paddingRight:25,
        borderWidth:1,
        borderColor:'black',
        marginTop:220,
        alignSelf:'center',
        borderRadius:20,
      
        position:'absolute'
    },

    text:{
        fontSize:15,
        paddingTop:10,
        paddingLeft:10
    }
    
})
