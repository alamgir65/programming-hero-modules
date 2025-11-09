// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEDiAVTAqJhw2QhQ1muFRHmSLpFZw0-Lk",
  authDomain: "smart-deals-241ec.firebaseapp.com",
  projectId: "smart-deals-241ec",
  storageBucket: "smart-deals-241ec.firebasestorage.app",
  messagingSenderId: "663511799759",
  appId: "1:663511799759:web:bd3a11500c0c8ec77564ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);