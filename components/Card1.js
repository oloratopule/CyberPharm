import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'
import Constants from 'expo-constants';
export default function App() {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    const [visibleStatusBar, setVisibleStatusBar] = useState(false);
    const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
    const changeVisibilityStatusBar = () => {setVisibleStatusBar(!visibleStatusBar)};
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
                : //Hidden Step-by-steps
                <Card
                    style={{
                        width: 280,
                        height: 300,
                        marginLeft: 20,
                        borderRadius: 20,
                        backgroundColor: '#1597E5',
                    }}>


                    <Text
                        style={{
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
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

                        {/*Note Text2*/}
                        <Text style={{
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
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
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
                        }}>
                            Notification 2
                        </Text>

                        {/*Note Text4*/}
                        <Text style={{
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
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
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
                        }}>
                            Notification 3
                        </Text>

                        {/*Note Text4*/}
                        <Text style={{
                            color:'white',
                            paddingLeft: 10,
                            paddingTop: 10,
                            fontSize: 16,
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
    buttonContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
    },

    icon: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        marginTop: -20,
        marginLeft: 300,


    },
});