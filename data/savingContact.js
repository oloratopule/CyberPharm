import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import getUser from '../auth/getUser';

const savingContact = (fname, lname, email, phone) => {
 
 firebase.firestore().collection('v').add({
     fname,
     lname,
     email,
     phone
 }).then(()=>{
     console.log("s")
 }).catch((err)=>{
     console.log("d")
 })
    
}

export default savingContact;