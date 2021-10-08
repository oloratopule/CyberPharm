import React, { Component } from 'react'
import { Text, StyleSheet, View, Image , TouchableOpacity} from 'react-native'

export default class SosButton extends Component {
    render() {
        return (
            <View style={styles.iconContext}>
        <TouchableOpacity>
        <Image style={styles.sosIcon} source={require('../assets/icon/StopIcon.png')} />
        </TouchableOpacity>
            
            
        </View>
        )
    }
}

const styles = StyleSheet.create({

    sosIcon:{
        width:19,
        height:18,
        alignSelf:'flex-end',
        marginRight:65,
        
       
      
        
    }
})
