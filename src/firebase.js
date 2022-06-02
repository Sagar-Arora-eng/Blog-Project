import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD35zleIwmKvswbgEO6QDbQ9awqluWEv4U",
  authDomain: "react-hooks-blog-b0b8c.firebaseapp.com",
  projectId: "react-hooks-blog-b0b8c",
  storageBucket: "react-hooks-blog-b0b8c.appspot.com",
  messagingSenderId: "790087321720",
  appId: "1:790087321720:web:0b75e2b41fff27e5a3c58d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();