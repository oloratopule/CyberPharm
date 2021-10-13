
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/native'

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        const navigation = useNavigation();

        alert("Success")
        navigation.navigate('Home');
    }).catch((err) => {

        console.log(err)

    })

}

export default login;