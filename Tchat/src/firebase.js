import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBfETzUi9Z03T0-PGJ0umqjpvlV4-AAKz8",
    authDomain: "tchat-95215.firebaseapp.com",
    projectId: "tchat-95215",
    storageBucket: "tchat-95215.appspot.com",
    messagingSenderId: "821591827655",
    appId: "1:821591827655:web:5d55d972252ca7ccffcae2"
}).auth();