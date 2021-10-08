import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';

const image = { uri: "../assets/bgOne.png" };
const Login = ({navigation}) => {
    return (


        <ImageBackground source={require('../assets/bgOne.png')} style={styles.container}>
            <View style={styles.card}>
                <TextInput style={styles.input}
                    placeholder="Email"
                />

                <TextInput style={styles.input}
                    placeholder="Password"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.registerText}>
                    <Text>Don't have an account?<TouchableOpacity style={{color: '#fff'}}> Register Here</TouchableOpacity></Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={styles.password}>Forgot Password!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: 898,
        // width: 400
    },
    // img: {
    //     position: 'relative',
    //     width: '450px',
    //     height: '100%'
    // },
    card: {
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(5, 78, 222, 0.7)',
        height: 560,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        bottom: '-37.62%',
    },

    button: {
        borderRadius: 30,
        backgroundColor: '#5083E8',
        marginTop: 15,
        width: 162,
        height: 52,
        justifyContent:'center', 
        alignItems:'center'
    },
    input: {
        borderRadius: 20,
        backgroundColor: '#E9F3F8',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        width: 342,
        padding: 14,
        marginTop: 30,
    }
    ,
    buttonText:{
        color: "#fff"
    },
    password: {
        color: '#fff',
        marginTop: 30,
    },
    registerText: {
        marginTop: 20
    }
})

