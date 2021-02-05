import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkmKg2nQlKJ5BiSvS9oI-Y-wxXch60gws",
  authDomain: "project-44e13.firebaseapp.com",
  projectId: "project-44e13",
  storageBucket: "project-44e13.appspot.com",
  messagingSenderId: "921398495366",
  appId: "1:921398495366:web:56bb28529ac8ddf29d6907",
  measurementId: "G-RGDEJW4XB8",
};

//connects the front end to the backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// access to the database
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
