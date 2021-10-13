import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function HomePageText() {
    return (
        <View style={styles.textIcon}>
            <Image style={styles.textIcon} source={require('../assets/icon/HomePageText.png')} />

        </View>

    );
}

const styles = StyleSheet.create({


    textIcon: {

        marginLeft: -60,
        textAlign: 'left',
        width: 96,
        height: 20,
        marginTop: 20,
        marginBottom: 40
    },

})