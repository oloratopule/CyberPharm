import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Book = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/bookDr.png')} />
            <Text>{props.text}</Text>
        </View>
    )
}

export default Book

const styles = StyleSheet.create({
    iconContext: {
        flexDirection: 'column',
        alignSelf:'center',
        textAlign:'center'
    }
    ,
    icon: {
        width: 70,
        height: 70,
        marginTop: 10
    }
})
