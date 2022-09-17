// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBxOgc4cxu_0DayZydOGQOPEAomaN7E0T0',
    authDomain: 'simple-todo-ea529.firebaseapp.com',
    projectId: 'simple-todo-ea529',
    storageBucket: 'simple-todo-ea529.appspot.com',
    messagingSenderId: '316703630671',
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);