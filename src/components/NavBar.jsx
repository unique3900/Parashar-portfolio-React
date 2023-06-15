import React, {
    useEffect,
    useState
} from 'react'
import {
    GiHamburgerMenu
} from 'react-icons/gi'
const NavBar = () => {
    const [navState, setnavState] = useState(false);
    
    return (
        <div className='fixed -z-1 w-[100%] bg-transparent py-4 px-4 '>
           
            <GiHamburgerMenu className=' lg:hidden w-8 h-10 cursor-pointer'
                onClick={
                    () => {
                        setnavState(!navState)
                    }
                }/>
          
          

            <div className={`hidden lg:flex p-5 flex-row justify-around items-center gap-4`}>
            <img src={`./img/logo.png`}
                className=' flex lg:hidden w-44 h-36 object-cover'
                alt=""/>

                <ul className="flex flex-col lg:flex-row justify-between gap-10">
                    <li className="text-lg font-bold">Home</li>
                    <li className="text-lg font-bold">About</li>
                    <li className="text-lg font-bold">Skills</li>
                    <li className="text-lg font-bold">Projects</li>
                    <li className="text-lg font-bold">Contact</li>

                </ul>
                <button className="bg-green-700 w-fit outline-none px-3 py-2 cursor-pointer font-bold rounded-lg">Download CV</button>
            </div>

            {
            navState == true && (
                <div className={`flex z-10 fixed lg:hidden p-5 flex-col justify-around items-start gap-4 py-10`}>

                    <ul className="flex flex-col lg:flex-row justify-between gap-10">
                        <li className="text-lg font-bold">Home</li>
                        <li className="text-lg font-bold">About</li>
                        <li className="text-lg font-bold">Skills</li>
                        <li className="text-lg font-bold">Projects</li>
                        <li className="text-lg font-bold">Contact</li>

                    </ul>
                    <button className="bg-green-700 w-fit outline-none px-3 py-2 cursor-pointer font-bold rounded-lg">Download CV</button>
                </div>
            )
        } </div>
    )
}

export default NavBar
