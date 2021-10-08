
import { firebase } from '../config/firebase';

const resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert("scscsss")

    }).cath((err) => {


    })

}

export default resetPassword;