import React from "react";
import {View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default function CovidPalette() {
    return (
        <View style={styles.inner}>
            <View>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/icon/covid19Card.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    icon: {
        width: 354,
        height: 180,
        alignSelf: 'center',
        marginLeft:20, 
        marginTop:10
    }
    ,


})