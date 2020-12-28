import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_zWBTfSJRokJznwfu7FZFlXSBHnof14w",
    authDomain: "jawaker-clone.firebaseapp.com",
    projectId: "jawaker-clone",
    storageBucket: "jawaker-clone.appspot.com",
    messagingSenderId: "750313518096",
    appId: "1:750313518096:web:437b2da2e1e902f975c695",
    measurementId: "G-C3MH9PS3K8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
