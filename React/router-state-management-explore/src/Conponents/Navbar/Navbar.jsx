import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(true);

    const navLinks = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" },
    ];

    const links = navLinks.map(link => <li><a className='' href="">{link.name}</a></li>);

    return (
        <nav className='bg-slate-300 flex justify-between py-3 px-3 md:px-10'>
            <span className='flex items- text-3xl'>
                {
                    open? <X className='mr-3 flex md:hidden' onClick={() => setOpen(!open)}></X> : <Menu onClick={() => setOpen(!open)} className='mr-3 flex md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute bg-indigo-500 sm:px-6 py-5 space-y-5 rounded-lg duration-1000
                    ${open ? 'top-16' : '-top-80'}
                    `}>
                    {
                        navLinks.map(link => <li><a className='hover:bg-indigo-800 px-10 py-2 rounded-lg hover:text-white' href="">{link.name}</a></li>)
                    }
                </ul>

                <h1 className='text-3xl font-bold'>Alamgir 2</h1>
            </span>

            <ul className='hidden md:flex gap-8 float-end items-center'>
                {
                    links
                }
            </ul>
            <button className='btn btn-primary'>SignUp</button>
        </nav>
    );
};

export default Navbar;