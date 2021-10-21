import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper'

const NewDoctors = () => {
    return (
        <View>
            <Card style={styles.card}>
                <Card style={styles.doctorProfilePicBG}>
                    <Image style={styles.doctorProfilePic} source={require('../assets/icon/circledoc.jpg')} />
                </Card>
            </Card>
        </View>
    )
}

export default NewDoctors

const styles = StyleSheet.create({
    card: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: 380,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center'
    }
    ,
    doctorProfilePicBG: {
        height: 120,
        width: 120,
        padding: 5,
        marginTop: 20,
        borderRadius: 60, 
        backgroundColor:'#ccc',
        justifyContent:'center', 
        alignContent:'center',
        alignItems:'center'
    }
    ,
    doctorProfilePic: {
        height: 110,
        width: 110,
        alignSelf: 'center',
        borderRadius: 55

    }
})
