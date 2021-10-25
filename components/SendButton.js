import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class SendButton extends Component {
    render() {
        return (
            <View style={styles.ButtonPosition}>

                <View>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../assets/icon/SendMessageButton.png')} />
                    </TouchableOpacity>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {

        width: 360,
        height: 60,
        marginTop: -50,
        alignSelf:'center',
        marginLeft:30
       
        

    },

    ButtonPosition: {
        marginRight: 30,
        marginLeft: 10,
        display: 'absolute',
    }
})
