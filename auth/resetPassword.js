
import { firebase } from '../config/firebase';

const resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert("EMAIL SENT!")
    }).cath((err) => {
    })

}

export default resetPassword;