
import { firebase } from '../config/firebase';

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        alert("Success")

    }).catch((err) => {

        console.log(err)

    })

}

export default login;