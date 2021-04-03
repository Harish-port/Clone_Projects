// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBO_2JxTeTLv1O9J8xLQR10gQkCAI5R7jQ",
    authDomain: "clone-3e776.firebaseapp.com",
    projectId: "clone-3e776",
    storageBucket: "clone-3e776.appspot.com",
    messagingSenderId: "255366143140",
    appId: "1:255366143140:web:bb2e684142c3e86d7b5a31",
    measurementId: "G-KQDZ3K9B29"
  });

  const db = firebase.firestore();

  export {db} 