import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../icons/logo';

export default function Navbar() {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/'},
        { name: 'Usuarios', path: '/users' },
        { name: 'Posts', path: '/posts' },
        { name: 'Álbumes', path: '/albums' },
    ];
  return (
    <nav className="w-full flex justify-center py-3 px-2 ">
        <div className='flex items-center gap-6 bg-gray-800 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300'>
            <div className='w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md'>
                <span className='text-xl font-bold'><Logo/></span>
            </div>
            {navItems.map((item)=>
                <Link to={item.path} key={item.name} className={`hover:text-gray-300 transition ${
                    location.pathname === item.path ? 'font-semibold underline' : ''}`}>
                    {item.name}
                </Link>
            )}
        </div>
    </nav>
  )
}
