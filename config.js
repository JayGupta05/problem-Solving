import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDTEdbmsfGuNwxrVPppj7qXNDOBbCucGZA",
    authDomain: "problemsolving-13e7d.firebaseapp.com",
    projectId: "problemsolving-13e7d",
    storageBucket: "problemsolving-13e7d.appspot.com",
    messagingSenderId: "606298419953",
    appId: "1:606298419953:web:0a319ed9f8efbbba6e6f50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
