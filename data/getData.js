import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
import getUser from '../auth/getUser';

const getData = (fname, lname, email, phone) => {
    const id = getUser

    firebase.firestore().collection().doc(id).get(({

        fname,
        lname,
        email,
        phone

    })).then(() => {

    }).catch((err))
}

export default getData;