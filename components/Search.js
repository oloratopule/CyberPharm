import React from "react";
import { View, StyleSheet,TextInput} from 'react-native';

export default function Search() {
    return (
        <View>
            <View>
                <TextInput
                    style={styles.searchField}
                    onChangeText={''}
                    placeholder='Search'
                    keyboardType='default'
                />
            </View>
            <View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({


    searchField: {
        width:342,
        height: 52,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#E9F3F8',
        alignSelf:'center'
    },

})