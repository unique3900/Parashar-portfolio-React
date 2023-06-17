import React, {
    useState
} from 'react'
import {
    GiHamburgerMenu
} from 'react-icons/gi'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [navState, setnavState] = useState(false)
    return (
        <div id='navbar' className='fixed bg-black bg-opacity-10  text-white w-full p-3'>

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
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link> </li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
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
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link> </li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                    <li className='cursor-pointer font-bold hover:scale-105'><Link  to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
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
