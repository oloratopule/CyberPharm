
import { firebase } from '../config/firebase';

const login = (email, password, { navigation }) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        alert("Success")
        navigation.navigate('Home')
    }).catch((err) => {

        console.log(err)

    })

}

export default login;