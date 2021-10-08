import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContent: {
        justifyContent: 'center',
        alignItems: 'left'
    },
    tipsBoxContainer: {
        flexDirection: 'row'
    }
    ,
    inconList: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav: {
        backgroundColor: '#054EDE',
        margin: 0,
        borderRadius: 20,
        marginTop: 30,

    }
    ,
    navItem: {
        alignSelf: 'center'
    }
})
