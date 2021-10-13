import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

const Contacts = () => {
    return (
        <View style={styles.container}>

            <View style={styles.search}>
                <TextInput
                    placeholder="Search..."
                />

                <TouchableOpacity>
                    <Image source={require('../assets/icon/delete-sign (1).png')} style={styles.delete} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/icon/menu-2.png')} style={styles.menu} />
                </TouchableOpacity>
            </View>

            <br />

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/icon/user-male-circle.png')} style={{ width: 60, height: 60, }} />
                <Text style={{ marginTop: 12, }}>Babur Mavlonov</Text>
                <Text style={{ marginTop: 32, marginLeft: -104 }}>+99897 565 7173</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icon/phone.png')} style={styles.phone} />
                </TouchableOpacity>
            </View>

            <br />

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/icon/user-male-circle.png')} style={{ width: 60, height: 60, }} />
                <Text style={{ marginTop: 12, }}>Babur Mavlonov</Text>
                <Text style={{ marginTop: 32, marginLeft: -104 }}>+99897 565 7173</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icon/phone.png')} style={styles.phone} />
                </TouchableOpacity>
            </View>

            <br />

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/icon/user-male-circle.png')} style={{ width: 60, height: 60, }} />
                <Text style={{ marginTop: 12, }}>Babur Mavlonov</Text>
                <Text style={{ marginTop: 32, marginLeft: -104 }}>+99897 565 7173</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icon/phone.png')} style={styles.phone} />
                </TouchableOpacity>
            </View>

            <br />

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/icon/user-male-circle.png')} style={{ width: 60, height: 60, }} />
                <Text style={{ marginTop: 12, }}>Babur Mavlonov</Text>
                <Text style={{ marginTop: 32, marginLeft: -104 }}>+99897 565 7173</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icon/phone.png')} style={styles.phone} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Image source={require('../assets/icon/plus.png')} style={styles.plusSign} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
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
    delete: {
        width: 18,
        height: 18,
        marginHorizontal: 140,
        marginTop: 5,
    },
    menu: {
        width: 15,
        height: 20,
        marginHorizontal: -140,
        marginTop: 5,
    },
    phone: {
        width: 30,
        height: 30,
        marginTop: 17,
        marginLeft: 130,
    },
    plusSign: {
        marginTop: 280,
        marginHorizontal: 260,
        width: 80,
        height: 80,
    }
});
