import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <div className='relative bg-gradient-to-r from-white to-sky-500 px-15 min-h-20 w-screen flex items-center justify-between drop-shadow-lg'> 
            <div>
                <img className='w-40 hover:scale-115 cursor-pointer transition-all' src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-11'>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'>
                    <a href="#">Home</a>
                </li>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'>
                    <a href="#">About</a>
                </li>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'> 
                    <a href="#">Projects</a>
                </li>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'>
                    <a href="#">Contact</a>
                </li>
            </ul>

        </div>
    )
}