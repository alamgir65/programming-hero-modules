import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../firebase/firebase.init';

const Register = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const registerHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const profie = {
            displayName : name
        };

        createUserWithEmailAndPassword(auth,email,password)
            .then(res => {
                console.log(res.user);

                updateProfile(res.user, profie)
                    .then(() => {
                        console.log('Also name added');
                    })
                    .catch(err => {
                        setError(err.message);
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col sm:flex-row-reverse gap-x-10 gap-y-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now.</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={registerHandler}>
                            <fieldset className="fieldset">
                                {/* name field  */}
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />
                                {/* email field  */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                {/* password  */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>

                            <p>Already have an account? please <NavLink className={'text-blue-500'} to={'/login'}>Login</NavLink> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;