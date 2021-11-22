import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const AlertBox = (props) => {
    const createTwoButtonAlert = () =>
        Alert.alert(
            `${props.message}`,
            "Login Success",
            [
                {
                    text: "Cancel",
                    onPress: () => props.navigation,
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <View style={styles.container}>
            {createTwoButtonAlert}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default AlertBox;