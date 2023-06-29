// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxnBVymy_6KhyMQKdsrYhfcjIxsgHhAxY",
  authDomain: "yatch-1bbbc.firebaseapp.com",
  projectId: "yatch-1bbbc",
  storageBucket: "yatch-1bbbc.appspot.com",
  messagingSenderId: "616140380777",
  appId: "1:616140380777:web:97ca30f394097d2a78a0f8",
  measurementId: "G-KFQJPYZSKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);