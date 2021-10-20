import firebase from 'firebase';
import  'firebase/auth' ;
import  'firebase/firestore' ;

const firebaseConfig = {
    apiKey: "AIzaSyBLerc0KtLLLbPz8z-VqwtejW9_J57BeYw",
    authDomain: "cyberpharm-9a581.firebaseapp.com",
    projectId: "cyberpharm-9a581",
    storageBucket: "cyberpharm-9a581.appspot.com",
    messagingSenderId: "220521230267",
    appId: "1:220521230267:web:c1cfb3e9fb419bcfa59e9e",
    measurementId: "G-FNVZ1MVKQC"
  };


  firebase.initializeApp(firebaseConfig);

  export {firebase};