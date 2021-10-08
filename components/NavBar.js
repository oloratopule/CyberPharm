import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Navbar = () => {
    return (
        <View style={styles.NavContainer}>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../assets/icon/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../assets/icon/location.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../assets/icon/chat.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    NavContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 342,
        height: 57,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 0,
    }
    ,
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#054EDE',
        marginLeft: 40,
        marginRight: 20, 
    }
})
