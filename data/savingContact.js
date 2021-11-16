import {Component, React, useState} from 'react'
import { firebase } from '../config/firebase';
const savingContact = (fname, lname, email, phone) => {
    firebase.firestore().collection("Contact").add(
        {
            fname,
            lname,
            email,
            phone
        }

    ).then(() => {
        console.log("correct")
    }).catch(() => {
        console.log("wrong")
    })



}

export default savingContact;