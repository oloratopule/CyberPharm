import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import ContactItem from '../components/ContactItem'

const Contacts = () => {
    return (
        <ScrollView horizontal={false} style={styles.container}>
                <TextInput style={styles.search} placeholder="Search..." />

                <View>
                    <ContactItem username={'Thato'} number={'+27718752396'} />
                </View>
                <View>
                    <ContactItem username={'Thato'} number={'+27718752396'} />
                </View>
                <View>
                    <ContactItem username={'Thato'} number={'+27718752396'} />
                </View>
                <View>
                    <ContactItem username={'Thato'} number={'+27718752396'} />
                </View>
                

                <TouchableOpacity style={styles.addIconContainer}>
                    <Image style={styles.addIcon} source={require('../assets/icon/add.png')} />
                </TouchableOpacity>
        </ScrollView>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        height:'100%', 
        alignSelf:'center'
    },
    search: {
        flexDirection: 'row',
        borderColor: '#eee',
        marginLeft: 1,
        marginTop: 5,
        borderWidth: 1,
        height: 52,
        width: 350,
        padding: 10,
        marginTop: 10,
    },
    delete1: {
        width: 18,
        height: 18,
        marginHorizontal: 140,
        marginTop: 5,
    },
    delete: {
        width: 20,
        height: 20,
        marginTop: 25,
        marginLeft: 80,
    },
    plusSign: {
        marginTop: 280,
        marginHorizontal: 260,
        width: 60,
        height: 60,
    }
    ,
    addIconContainer: {
        position: 'absolute',
        top: 740,
        left: 290
    }
    ,
    addIcon: {
        width: 60,
        height: 60,
    }
});
