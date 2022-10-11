import logo from '../../images/logo.png';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { XMarkIcon,Bars3Icon} from '@heroicons/react/24/solid'


const Header = () => {
    const[open,setOpen]=useState(false);
    return (
        <nav>
            <div className='bg-slate-200 flex items-center justify-between p-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='text-2xl font-bold'>Test-Takers</h1>
                </div>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 mr-5 md:hidden">
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
                </div>
                
                <ul className={` bg-slate-200 md:flex gap-12 mr-20 text-xl md:static font-semibold absolute ${open? 'top-[69px]' : 'top-[-120px]'}`}>
                    <li><NavLink className={({isActive}) => isActive? ' underline' : undefined} to='/'>Home</NavLink></li>
                    
                    <li><NavLink className={({isActive}) => isActive? 'underline' : undefined} to='/statistics'>Statistics</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? 'underline' : undefined} to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </nav>
    );
};

export default Header;