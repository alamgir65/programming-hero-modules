import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {
    const AuthProvider =new GoogleAuthProvider();

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, AuthProvider)
            .then(res =>  console.log(res))
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <button onClick={handleLoginWithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;