import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7KQHHje5SR1UsgbaMOtG9XEJH3FIStFk",
    authDomain: "colecionaveisfb-4ec05.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-4ec05.firebaseio.com",
    projectId: "colecionaveisfb-4ec05",
    storageBucket: "colecionaveisfb-4ec05.appspot.com",
    messagingSenderId: "686223344133",
    appId: "1:686223344133:web:09c8eccb4740b9f02a926c",
    measurementId: "G-3K25Q471QP"
};
  
var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();