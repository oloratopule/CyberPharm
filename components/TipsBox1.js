import React, { Component } from 'react'
import {  StyleSheet, View, Image } from 'react-native'

export default class TipsBox1 extends Component {
    render() {
        return (
            <View >
                <Image style={styles.tipsBox1} source={require('../assets/icon/tipsCard.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tipsBox1: {
        height: 120,
        width: 175,
        flexDirection: 'row',
        marginTop: 40,
        margin: 10, 
        marginLeft:'auto',
        marginRight:'auto'
        

    }
})
