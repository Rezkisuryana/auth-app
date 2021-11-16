// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlgG0oWQeM5dvdx8WctRIc2wD11476ROc",
  authDomain: "auth-app-e71e8.firebaseapp.com",
  projectId: "auth-app-e71e8",
  storageBucket: "auth-app-e71e8.appspot.com",
  messagingSenderId: "842707924441",
  appId: "1:842707924441:web:505174faf5332a00c655c8"
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();