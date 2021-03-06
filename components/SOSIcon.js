import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SOSIcon = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/SOScontacts.png')} />
            <Text>{props.text}</Text>
        </View>
    )
}

export default SOSIcon

const styles = StyleSheet.create({
    iconContext: {
        flexDirection: 'column',
        textAlign:'center'
    }
    ,
    icon: {
        width: 70,
        height: 70,
        marginTop: 10
    }
})
