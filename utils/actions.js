import{firebaseapp}from './firebase'
import *as firebase from 'firebase'
import 'firebase/firestore'
const db=firebase.firestore(firebaseapp)

export const isUserLogged=()=>{

    let isLogeed=false
    firebase.auth().onAuthStateChanged((user)=>{
        user !==null && (isLogeed=true)
    })
}
export const getCurrentUser =()=>{
    return firebase.auth().currentUser
}