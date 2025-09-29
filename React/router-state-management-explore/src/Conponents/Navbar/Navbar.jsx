import React from 'react';

const Navbar = () => {
    const navLinks = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" },
    ];

    return (
        <nav className='bg-slate-300 flex justify-between items-center px-10 py-3'>
            <h1 className='text-3xl font-bold'>Alamgir 2</h1>
            <ul className='flex gap-8 float-end'>
                {
                    navLinks.map(link => <li><a className='btn' href="">{link.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;