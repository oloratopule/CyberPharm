import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class SosButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Image style={styles.sosIcon} source={require('../assets/icon/StopIcon.png')} />
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    sosIcon: {
        width: 20,
        height: 20,
        marginTop: 40,
        left: 110,
        marginLeft: 5,
        marginRight: 5,
    }
})
