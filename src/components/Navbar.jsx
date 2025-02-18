import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
            <header className="bg-white flex justify-between items-center drop-shadow-md text-black
            py-6 px-8 md:px-32">
                <a href="#">
                    <img className="w-52 hover:scale-115 transition-all"src={logo} alt="tailwind-logo" />
                </a>
                <ul className='hidden xl:flex items-center gap-12 text-base font-semibold'>
                    <li className='hover:text-white cursor-pointer hover:bg-sky-400 p-3 rounded-md transition-all'>Home</li>
                    <li className='hover:text-white cursor-pointer hover:bg-sky-400 p-3 rounded-md transition-all'>Products</li>
                    <li className='hover:text-white cursor-pointer hover:bg-sky-400 p-3 rounded-md transition-all'>Explore</li>
                    <li className='hover:text-white cursor-pointer hover:bg-sky-400 p-3 rounded-md transition-all'>Contact</li>
                </ul>
                <div className='hidden xl:flex items-center justify-center relative'>
                    <i className='bx bx-search absolute left-3'></i>
                    <input type="text" placeholder='Search...'
                    className='transition-all focus:bg-slate-100 outline-sky-500 py-2 pl-10 border-2 border-sky-400 rounded-md'/>
                </div>
                
                <div>
                    <i className='bx bx-menu'></i> 
                </div>
            </header>
        </div>
    )
}