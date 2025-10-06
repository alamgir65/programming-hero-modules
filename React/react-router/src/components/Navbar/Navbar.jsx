import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <ul style={{display: 'flex', gap: '20px', listStyle: 'none'}}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/mobile'}>Mobile</NavLink></li>
                <li><NavLink to={'/laptops'}>Laptops</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;