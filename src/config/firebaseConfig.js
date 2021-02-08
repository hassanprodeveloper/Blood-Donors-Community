import * as React from 'react';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';
 
const firebaseConfig ={
    apiKey: "AIzaSyD15p1nCahUaQpgrPT58NH0ahyVDflpThE",
    authDomain: "blood-bank-0011.firebaseapp.com",
    databaseURL: "https://blood-bank-0011-default-rtdb.firebaseio.com",
    projectId: "blood-bank-0011",
    storageBucket: "blood-bank-0011.appspot.com",
    messagingSenderId: "309624095969",
    appId: "1:309624095969:web:e92f04beb25c88d7dae3a0",
    measurementId: "G-9LYP4DFWZE"
};
if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

export default () =>{
    return (firebase, auth)
}