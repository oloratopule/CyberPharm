import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';
import Loader from '../components/Loader';
import AlertBox from '../components/AlertBox';
const login = (email, password, navigation) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        
        <AlertBox message={"Login Activity"} navigation={navigation.navigate("Home")} />
    }).catch((err) => {

        console.log(err)

    })


}

export default login;