import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class SosButton extends Component {
    render() {
        return (
            <View>
                <Image style={styles.sosIcon} source={require('../assets/icon/SosIcon.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    sosIcon: {
        width: 20,
        height: 20,
        marginTop: 27,
        left: 110,
        marginLeft: 5,
        marginRight: 5,
    }
})
