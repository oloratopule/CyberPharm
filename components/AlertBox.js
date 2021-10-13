import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native'


 class AlertBox extends Component {
    
    render() {
        return (
            <View>
            <TouchableOpacity>
               {/* <Image style={styles.icon} source={require('../assets/icon/notification.png')} /> */}
                
            </TouchableOpacity>    
               
               
               
     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height:20,
        backgroundColor: '#fff',
        marginTop:-20,
        marginLeft:300,
       
       
    },

  
   
})

export default AlertBox;
