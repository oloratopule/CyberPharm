import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Donate = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/donateBlood.png')} />
            <Text>{props.text}</Text>
        </View>
    )
}

export default Donate

const styles = StyleSheet.create({
    iconContext: {
        flexDirection: 'column',
        alignItems:'center', justifyContent:'center'
    }
    ,
    icon: {
        width: 70,
        height: 70,
        marginTop: 10
    }
})
