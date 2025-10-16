// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_PS-tHdTLii40QpkboG5N4R0pusTPAbI",
  authDomain: "email-password-auth-8e1d6.firebaseapp.com",
  projectId: "email-password-auth-8e1d6",
  storageBucket: "email-password-auth-8e1d6.firebasestorage.app",
  messagingSenderId: "288524816207",
  appId: "1:288524816207:web:7722db4b559e8af4153f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);