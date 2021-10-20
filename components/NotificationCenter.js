import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper'
import Constants from 'expo-constants';
import Notification from './Notification';

export default function NotificationCenter() {
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
                <Image style={styles.icon} source={require('../assets/icon/notify.png')} />
            </TouchableOpacity>

            {!visibleStatusBar ? (
                <View>
                    {/*if not clicked then card dissapears*/}
                </View>
            )
                :
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.notificationArea}>
                    <Card style={styles.notify}>
                        <Notification title={'DR. Wolfson'} paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore ab porro amet molestias autem? Cumque illoperspiciatis sint iure.'} />
                    </Card>

                    <Card style={styles.notify}>
                        <Notification title={'DR. Wolfson'} paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore ab porro amet molestias autem? Cumque illoperspiciatis sint iure.'} />
                    </Card>

                    <Card style={styles.notify}>
                        <Notification title={'DR. Wolfson'} paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore ab porro amet molestias autem? Cumque illoperspiciatis sint iure.'} />
                    </Card>

                    <Card style={styles.notify}>
                        <Notification title={'DR. Wolfson'} paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore ab porro amet molestias autem? Cumque illoperspiciatis sint iure.'} />
                    </Card>
                </ScrollView>

            }

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    }
    ,
    textStyle: {
        textAlign: 'center',
        color:'white'

    },
    
    
    icon: {
        width: 20,
        height: 20,
        marginTop: 28,
        left: 120
    }
    ,
    notify: {
        padding: 15,
        backgroundColor:'#1597E5',
        fontWeight:'bold',
       
        
        
    }
    ,
    notificationArea: {
        height:100,
        width:300,
        borderWidth: 1,
        borderColor: 1,
      marginTop:180,
       position:'absolute',
       color:"white"
       
    }
});