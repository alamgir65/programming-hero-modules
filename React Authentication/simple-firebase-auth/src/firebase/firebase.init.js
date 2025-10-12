// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGj17qknYtSYa_0MjETSmgyobeZol978",
  authDomain: "simple-firebase-auth-1d2b3.firebaseapp.com",
  projectId: "simple-firebase-auth-1d2b3",
  storageBucket: "simple-firebase-auth-1d2b3.firebasestorage.app",
  messagingSenderId: "668854511769",
  appId: "1:668854511769:web:c4d581ee8db3ad9f6ab008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);