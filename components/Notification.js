import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'
const Notification = (props) => {
    return (
        <View style={styles.notificationContent}>
            <Title>{props.title}</Title>
            <Paragraph style={styles.notificationText}>
                {props.paragraph}
            </Paragraph>
            <View style={styles.horizontalRef}>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    notificationContent: {
        flexDirection: 'column',
        marginBottom:10
    }
    ,
    notificationText: {
        justifyContent: 'center',
        textAlign: 'center'
    }
    ,
    horizontalRef: {
        flexDirection: 'column',
        borderColor: '#000',
        borderBottomWidth: 2
    }
})
