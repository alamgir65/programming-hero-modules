import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <>
            <h1>This is nav</h1>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
            </nav>
        </>
    );
};

export default Header;