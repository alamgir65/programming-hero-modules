import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {

    const [user,setUser] = useState(null);

    const AuthProvider =new GoogleAuthProvider();

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, AuthProvider)
            .then(res =>  {
                console.log(res);
                setUser(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const signOutHandler = () => {
        signOut(auth)
            .then(res => {
                console.log(res);
                setUser(null);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const githubProvider = new GithubAuthProvider();
    const signInGithubHandler = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                console.log(res);
                setUser(res.user);
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            {
                user? <button onClick={signOutHandler}>SignOut</button> : <>
                    <button onClick={handleLoginWithGoogle}>Sign in with google</button>
                    <button onClick={signInGithubHandler}>SignIn with Github</button>
                </>
            }
            
            
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;