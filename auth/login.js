
import { firebase } from '../config/firebase';

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword()(email, password).then(() => {
        alert("scscsss")

    }).cath((err) => {


    })

}

export default login