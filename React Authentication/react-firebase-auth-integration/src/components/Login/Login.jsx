import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const Login = () => {

    const {signInUser} = use(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
            .then(res => {
                console.log('From Login... ',res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col sm:flex-row-reverse gap-x-10 gap-y-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now.</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={loginHandler}>
                            <fieldset className="fieldset">
                                {/* email field  */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                {/* password  */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>

                            <p>New to in our website? please <NavLink className={'text-blue-500'} to={'/register'}>Register</NavLink> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;