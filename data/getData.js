import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase';
// import getUser from '../auth/getUser';

const getData = () => {
    const [lists, setLists] = useState([{ selctedIndex: 0 }]);
    // const id = getUser

    firebase.firestore().collection().doc(id).get().then((data) => {



    }).catch((err))


    firebase.auth().onAuthStateChanged(function (user) {
        firebase.firestore().collection('contacts')
            .onSnapshot(snapshot => {
                const contact = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setLists(lists)
            })
    })
}

export default getData;