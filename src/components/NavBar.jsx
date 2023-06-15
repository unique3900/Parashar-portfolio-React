import React, {
    useState
} from 'react'
import {
    GiHamburgerMenu
} from 'react-icons/gi'

const NavBar = () => {
    const [navState, setnavState] = useState(false)
    return (
        <div className='relative  text-white w-full bg-transparent p-3'>

            {/*  */}
            <GiHamburgerMenu onClick={
                    () => {
                        setnavState(!navState)
                    }
                }
                className='lg:hidden  w-8 h-8 cursor-pointer'/> {/*  Nav Small ss */}

            {
            navState == true && (
                <div className="absolute left-4 text-black top-14 bg-white  w-60 h-auto py-8 px-3">
                    <ul className='flex flex-col gap-4'>
                        <li className='cursor-pointer text-lg font-bold hover:scale-105'>Home</li>
                        <li className='cursor-pointer text-lg font-bold hover:scale-105'>Skills</li>
                        <li className='cursor-pointer text-lg font-bold hover:scale-105'>Projects</li>
                            <li className='cursor-pointer text-lg font-bold hover:scale-105'>Contact</li>
                        <button className="w-full font-bold  bg-green-500 rounded-md px-3 py-2"><a id="anchor" href={'./img/Parashar CV.pdf'}
        download="Parashar CV"
        target="_blank"
        rel="noreferrer">Download CV</a></button>
                    </ul>
                </div>
            )
        }

            <div className="hidden lg:flex flex-row justify-between items-center gap-3 px-10 py-3">

          
                <div className="flex flex-row justify-around gap-10 list-none">
                    <li className='cursor-pointer font-bold hover:scale-105'>Home</li>
                    <li className='cursor-pointer font-bold hover:scale-105'>Skills</li>
                    <li className='cursor-pointer font-bold hover:scale-105'>Projects</li>
                    <li className='cursor-pointer font-bold hover:scale-105'>Contact</li>
          </div>
          
          <button className="w-fit bg-green-600 font-bold rounded-md px-3 py-2"><a id="anchor" href={'./img/Parashar CV.pdf'}
        download="Parashar CV"
        target="_blank"
        rel="noreferrer">Download CV</a></button>
            </div>


        </div>
    )
}

export default NavBar
