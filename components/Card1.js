import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'
import Constants from 'expo-constants';

export default function Card1() {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    const [visibleStatusBar, setVisibleStatusBar] = useState(false);
    const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
    const changeVisibilityStatusBar = () => { setVisibleStatusBar(!visibleStatusBar) };
    const changeStyleStatusBar = () => {
        const styleId = styleTypes.indexOf(styleStatusBar) + 1;
        if (styleId === styleTypes.length) {
            return setStyleStatusBar(styleTypes[0]);
        }
        return setStyleStatusBar(styleTypes[styleId]);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity title="topNav" onPress={() => changeVisibilityStatusBar()} >
                <Image style={styles.icon} source={require('../assets/icon/notification.png')} />
            </TouchableOpacity>

            {!visibleStatusBar ? (
                <View></View>
            )
                : 
                <Card
                    style={{
                        width: 300,
                        height: 200,
                        marginLeft: 20,
                        borderRadius: 20,
                        backgroundColor: '#1597E5',
                    }}>


                    <Text
                        style={{
                            color: 'white',
                            paddingLeft: 20,
                            paddingTop: 20,
                            fontSize: 12,
                        }}>
                        Notification 1
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginLeft: 12,
                            width: 255,
                        }}>


                        <Text style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 12,
                        }}>
                            Notification on First Update
                        </Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginLeft: 12,
                            width: 255,
                        }}>


                        <Text style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 12,
                        }}>
                            Notification 2
                        </Text>

                        <Text style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 12,
                        }}>
                            Notification on Second Update
                        </Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginLeft: 12,
                            width: 255,
                        }}>

                        <Text style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 12,
                        }}>
                            Notification 3
                        </Text>

                        <Text style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 12,
                        }}>
                            Notification on Third Update
                        </Text>

                    </View>
                </Card>
            }

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',

        padding: 8,
    },


    textStyle: {
        textAlign: 'center',
    },

    icon: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        marginTop: 25,
        left: 120



    },
});