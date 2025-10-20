import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router';

const SignUpForm = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        // console.log("Register button clicked. ", e.target.email.value);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        const passMinLength = /^.{6,}$/;
        const passUpperLower = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const passSpecialChar = /^(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~]).+$/;


        if (!passMinLength.test(password)) {
            setError('Password must be minimum 6 character.');
            return;
        }
        else if (!passUpperLower.test(password)) {
            setError('Password must be consists a Uppercase & lowercase letter.');
            return;
        } else if (!passSpecialChar.test(password)) {
            setError('Password must be consists a Special character.')
            return;
        }

        if(!terms){
            setError('Plase accept our all terms & conditions.');
            return;
        }

        setSuccess(false);
        setError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log('User, ', res.user);
                setSuccess(true);
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }


    const handleShowPass = (e) => {
        e.preventDefault();
        setShowPass(!showPass);
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

                                <div>
                                    <label className="label">
                                        <input type="checkbox" name='terms' className="checkbox" />
                                        Accept all terms and conditions.
                                    </label>
                                </div>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                {
                                    error && <p className='text-red-600'>{error}</p>
                                }
                                {
                                    success && <p className='text-green-600'>User Created Successfully.</p>
                                }
                                <button className="btn btn-neutral mt-4">Register</button>
                                <div>
                                    Already have an account? Please <Link className='text-blue-500 underline' to={'/login'}>Login</Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;