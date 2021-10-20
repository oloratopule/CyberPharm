
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';

const getUser = (id) => {
    firebase.auth().currentUser(id);
    console.log(id)
}

export default getUser;