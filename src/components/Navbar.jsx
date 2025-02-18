import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
            <header className="bg-white flex justify-between items-center drop-shadow-md text-black
            py-6 px-8 md:px-32">
                <a href="#">
                    <img className="w-52 hover:scale-115 transition-all"src={logo} alt="tailwind-logo" />
                </a>
                <ul className='hidden md:flex gap-11 font-semibold'>
                    <li >Home</li>
                    <li >Products</li>
                    <li >Explore</li>
                    <li >Contact</li>
                </ul>

            </header>
        </div>
    )
}