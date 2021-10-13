import { getAuth, updatePassword } from "firebase/auth";


const sendPasswordResetMail = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
        .then(() => {

        });

}

export default sendPasswordResetMail
