  
import {firebase} from '../config/firebase'

const signUp =((email,password, Confirmpassword)=>{
    if(Confirmpassword !== password){
        alert("password doen't match")
    }else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
           
            firebase.firestore().collection('User').doc(email).set({ 
                email:email,
                password:password})
            alert("Account succesfully created ")
          var user = userCredential.user;
        
        })
        .catch((error) => {
          console.log(error)
        })
      
    };
})
export default signUp;

