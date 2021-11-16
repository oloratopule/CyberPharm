
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';

const login = (email, password, navigation) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        Alert.alert("Success")
        navigation.navigate("Home");
    }).catch((err) => {

        console.log(err)

    })
    

}

export default login;