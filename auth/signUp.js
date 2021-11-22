import { NavigationContainer } from '@react-navigation/native'
import { firebase } from '../config/firebase'

const signUp = ((email, password, Confirmpassword, Navigation) => {
    if (Confirmpassword !== password) {
        alert("password doen't match")
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                firebase.firestore().collection('User').doc(email).set({

                    email: email,
                    password: password
                })
                alert("Account succesfully created ")
                var user = userCredential.user;
                Navigation.navigate("Login")

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                console.log(errorCode)
                console.log(errorMessage)

            })

    };
})
export default signUp;

