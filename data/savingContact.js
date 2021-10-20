import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import getUser from '../auth/getUser';

const savingContact = (fname, lname, email, phone) => {
   const id = getUser
 
    firebase.firestore().collection('contacts').doc(id).set(({

        fname,
        lname,
        email,
        phone

    })).then(()=>{

    }).catch((err))
}

export default savingContact;