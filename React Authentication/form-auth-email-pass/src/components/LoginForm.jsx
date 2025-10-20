import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';

const LoginForm = () => {

    const [showPass,setShowPass] = useState(false);
    const [user,setUser] = useState(null);

    const handleShowPass = (e) => {
        e.preventDefault();
        setShowPass(!showPass);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth,email,password)
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{user?.email}</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        name='password' className="input" placeholder="Password" />
                                    <button className="btn btn-xs absolute top-2 right-6" onClick={handleShowPass}>
                                        {
                                            showPass ? <IoIosEyeOff></IoIosEyeOff> : <IoIosEye></IoIosEye>
                                        }
                                    </button>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <div>
                                    New to our website? Please <Link className='text-blue-500 underline' to={'/sign-up'}>SignUp</Link>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;