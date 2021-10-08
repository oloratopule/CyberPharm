import React,{useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import signUp from '../auth/signUp'



export default function Register({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Confirmpassword, setConfirmpassword] = useState('')
    const RegisterUser = () => {
        signUp(email,password, Confirmpassword);
    }
    return (
        <ImageBackground source={require('../assets/pexels-anthony-shkraba-5214995 2.png')}>
            <View style={styles.main}>
                <View style={styles.form}>
                    <TextInput
                        placeholder='Email'
                        style={styles.placeholder}
                        value={email} onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.placeholder}
                        value={password} onChangeText={(password) => setPassword(password)}
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        style={styles.placeholder}
                        value={Confirmpassword} onChangeText={(Confirmpassword) => setConfirmpassword(Confirmpassword)}
                    />

                    <View style={styles.btn}>
                        <TouchableOpacity onPress={()=>RegisterUser()}><Text style={styles.text}>REGISTER</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.existing}>Existing User? <Text style={styles.login} onPress ={() => navigation.navigate('Login')}>Login Here</Text></Text>

                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    main: {
        backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
        height: '86.7%',
        marginTop: 100,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60, 
        bottom: 10,
    },
    placeholder: {
        width: 258,
        backgroundColor: '#E9F3F8',
        height: 42,
        marginTop: 45,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
        paddingLeft: 15
    },
    btn: {
        backgroundColor: 'background: rgba(80, 131, 232, 1);',
        height: 52,
        width: 162,
        marginLeft: 90,
        marginTop: 50,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        marginTop: 10,
        marginLeft: 40,
        fontSize: 20
    },
    existing: {
        marginLeft: 80,
        marginTop: 60,
    },
    login: {
        color: 'white'
    },
    form: {
        marginTop: 120
    }

});
