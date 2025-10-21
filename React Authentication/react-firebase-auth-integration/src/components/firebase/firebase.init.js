// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyfSRWYNH30lLkwTndPr1QZ_Yn4qR8Hc",
  authDomain: "fir-auth-integration-bbcc9.firebaseapp.com",
  projectId: "fir-auth-integration-bbcc9",
  storageBucket: "fir-auth-integration-bbcc9.firebasestorage.app",
  messagingSenderId: "323154445585",
  appId: "1:323154445585:web:01690d42c366423ab678b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);