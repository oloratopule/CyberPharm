import { getAuth, updatePassword } from "firebase/auth";

const auth = getAuth();

const sendPasswordResetMail = () => {

    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
        .then(() => {

        });

}

export default sendPasswordResetMail
