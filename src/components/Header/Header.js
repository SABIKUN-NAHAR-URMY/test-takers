import logo from '../../images/logo.png';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { XMarkIcon,Bars3Icon} from '@heroicons/react/24/solid'


const Header = () => {
    
    const[open,setOpen]=useState(false);
    return (
        <nav>
            <div className='bg-slate-200 flex items-center justify-between md:px-28 h-20'>
                <div className='flex items-center gap-3'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='text-2xl font-bold'>Test-Takers</h1>
                </div>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
                </div>
                
                <ul className={`bg-slate-200 w-full md:w-[unset] md:flex gap-12 text-xl md:static font-semibold absolute ${open? 'top-[69px]' : 'top-[-120px]'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </nav>
    );
};

export default Header;