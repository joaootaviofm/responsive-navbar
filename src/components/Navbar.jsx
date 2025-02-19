import { useState } from 'react'
import logo from '../assets/logo.png'
import mail from '../assets/mail.svg'

export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <div className='relative bg-gradient-to-r from-white to-sky-500 px-15 min-h-20 w-screen flex items-center justify-between drop-shadow-lg'> 
            <div>
                <img className='w-40 hover:scale-115 cursor-pointer transition-all' src={logo} alt="" />
            </div>
            <ul className='hidden md:flex items-center gap-11'>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'>
                    <a href="#">Home</a>
                </li>
                <li className='hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'>
                    <a href="#">About</a>
                </li>
                <li className='flex items-center hover:bg-sky-500 transition-all font-bold hover:text-white p-3 rounded-lg cursor-pointer'> 
                    <a href="#">
                        Projects
                    </a>
                </li>
            </ul>
            <ul className='font-bold'>
                <a href="#" className='relative flex items-center gap-x-2 hover:bg-sky-300 rounded-lg transition-all'>
                    <li className='pl-10 transition-all hidden lg:block cursor-pointer  text-black px-7 py-3 border-1 border-transparent active:border-sky-600 active:text-white'>Contact</li>
                    <img src={mail} className='w-7 absolute left-1'/>
                </a>
            </ul>
            <div className='md:hidden'>
                <button className="cursor-pointer"
                        onClick={() => setIsMenuOpen((prev) => !isMenuOpen)}>
                    <i className='bx bx-menu text-3xl'></i>
                </button>
            </div>
            <ul className={`font-semibold md:hidden absolute ${isMenuOpen ? "opacity-100" : "opacity-0"} flex flex-col transform transition-transform
            left-0 top-40 items-center justify-center w-screen gap-1 bg-gradient-to-l from-blue-400 to-blue-50`}
            style={{transition: "transform .3s ease, opacity .3s"}}>
                <li className='active:bg-sky-500 text-center w-screen transition-all p-4'>
                    <a href="#">Home</a>
                </li>
                <li className='active:bg-sky-500 text-center w-screen transition-all p-4'>
                    <a href="#">Projects</a>
                </li>
                <li className='active:bg-sky-500 text-center w-screen transition-all p-4'>
                    <a href="#">About</a>
                </li>
                <li className='active:bg-sky-500 text-center w-screen transition-all p-4'>
                    <a href="#">Contact</a>
                </li>

            </ul>
        </div>
    )
}