import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Card } from 'react-native-paper';

export default function CovidPalette() {
    return (
        <View style={StyleSheet.iconContent}>
            <Card>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/icon/covid19Card.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    iconContent: {
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