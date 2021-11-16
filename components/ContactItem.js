import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { db } from '../config/firebase';
import getUSER from '../auth/user';

const ContactItem = (props) => {
    const [details, setDetails] = useState([]);

  

    return (
        <View style={styles.contactContainer}>
            <Image style={styles.avatarIcon} source={require('../assets/icon/avatar.png')} />
            <View>
                <Text>{props.username}</Text>
                <Text>{props.number}</Text>
            </View>
            <View style={styles.iconGroup}>
                <TouchableOpacity style={styles.delete}>
                    <Image style={styles.icon} source={require('../assets/icon/edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete}>
                    <Image style={styles.icon} source={require('../assets/icon/delete.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    avatarIcon: {
        height: 50,
        width: 50
    }
    ,
    iconGroup: {
        flexDirection: 'row',
        left: 110
    }
    ,
    icon: {
        height: 20,
        width: 20
    }
    ,
    delete: {
        textAlign: 'right',
        padding: 10
    }

})
