import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import login from '../auth/login';

const image = { uri: "../assets/bgOne.png" };
const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logi = (navigation) => {
        login(email, password,navigation);

    }

    return (


        <ImageBackground source={require('../assets/bgOne.png')} style={styles.container}>
            <View style={styles.card}>
                <TextInput style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <TextInput style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    />

                <TouchableOpacity style={styles.button} onPress={()=>logi(navigation)}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.registerText}>
                    <Text>Don't have an account?<TouchableOpacity style={{ color: '#fff' }} onPress ={() => navigation.navigate('Register')}> Register Here</TouchableOpacity></Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.password} onPress ={() => navigation.navigate('ResetPassword')}>
                        <Text  >Forgot Password!</Text>
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

    card: {
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
        justifyContent: 'center',
        alignItems: 'center'
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
    buttonText: {
        color: "#fff",
        fontSize: 20
    },
    password: {
        color: '#fff',
        marginTop: 10,
    },
    registerText: {
        marginTop: 20
    }
})

