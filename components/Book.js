import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Book = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/book.png')} />
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
        width: 80,
        height: 80,
        marginTop: 10
    }
})
