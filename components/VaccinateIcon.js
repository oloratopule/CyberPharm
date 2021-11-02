import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const VaccinateIcon = (props) => {
    return (
        <View style={styles.iconContext}>
            <Image style={styles.icon} source={require('../assets/icon/vaccinate.png')} />
            <Text>{props.text}</Text>
        </View>
    )
}

export default VaccinateIcon

const styles = StyleSheet.create({
    iconContext: {
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: 0
    }
    ,
    icon: {
        width: 80,
        height: 80,
        marginTop: 10
    }
})
