import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';

const SignUpForm = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log("Register button clicked. ", e.target.email.value);
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth,email,password)
            .then(res => {
                console.log('User, ', res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={handleRegister}>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;