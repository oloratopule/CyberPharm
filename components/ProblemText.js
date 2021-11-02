import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ProblemText extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text:{
        fontSize:12,
        textAlign:'left'
    }
})
