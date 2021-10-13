import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'

const NotifyIcon = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image style={styles.notifyIcon} source={require('../assets/icon/alarm.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default NotifyIcon

const styles = StyleSheet.create({

    notifyIcon: {
        width: 20,
        height: 20,
        marginTop: 40,
        left: 110,
        marginLeft: 5,
        marginRight: 5,
    }
})
