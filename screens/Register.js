import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native';

export default function Register() {
    return (
        <ImageBackground style={styles.container} source={require('../assets/pexels-anthony-shkraba-5214995 2.png')}>
            <View style={styles.bl}>
                <TextInput
                    placeholder='Email'
                    style={styles.placeholder}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.placeholder}
                />
                <TextInput
                    placeholder='Confirm Password'
                    style={styles.placeholder}
                />
                <TextInput
                    placeholder='Contact List'
                    style={styles.placeholder}
                />
                <TextInput
                    placeholder='Home Location'
                    style={styles.placeholder}
                />

                <View style={styles.btn}>
                    <Text style={styles.text}>REGISTER</Text>
                </View>
                <Text style={styles.existing}>Existing User? <Text style={styles.login}>Login Here</Text></Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bl: {
        backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
        height: 624,
        marginTop: 153,
        borderRadius: 20,
    },
    placeholder: {
        width: 258,
        backgroundColor: '#E9F3F8',
        height: 42,
        marginTop: 60,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
        paddingLeft:15
    },
    btn: {
        backgroundColor: 'background: rgba(80, 131, 232, 1);',
        height: 52,
        width: 162,
        marginLeft: 90,
        marginTop: 20,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        marginTop: 10,
        marginLeft: 37,
        fontSize: 20
    },
    existing: {
        marginLeft: 80,
        marginTop: 20,
    },
    login: {
        color: 'white'
    },

});
