import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function HomePageText() {
    return (
        <View>
            <Text style={styles.font}>
                Home
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({


    font: {

       fontSize:18,
       fontFamily:'',
       fontWeight:'light',
       marginTop:25,
       alignContent:'center',
       alignSelf:'left',
       
    },

})