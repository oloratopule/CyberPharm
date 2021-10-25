import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SymptomsIcon = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/symptoms.png')} />
            <Text>{props.text}</Text>
        </View>
    )
}

export default SymptomsIcon

const styles = StyleSheet.create({
    iconContext: {
        flexDirection: 'column',
        textAlign: 'center',
        marginRight:0
    }
    ,
    icon: {
        width: 80,
        height: 80,
        marginTop: 10
    }
})
