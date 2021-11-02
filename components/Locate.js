import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

const Locate = () => {
    return (
        <View style={styles.locateBar}>
            <TouchableOpacity>
                <Image style={styles.locate} source={require('../assets/icon/locate.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Locate

const styles = StyleSheet.create({
    locateBar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 342,
        height: 57,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 0,
    }
    ,
    locate: {
        width: 360,
        height: 80,
        marginTop:60,        
    }
})
