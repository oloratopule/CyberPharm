import {firebase} from '../config/firebase'
import React from 'react'
const logout=({navigation})=>{
     let msg="Logged Out"
        firebase.auth().signOut()
        Alerts(msg)
        navigation.navigate("Login")
      
}
export default logout;