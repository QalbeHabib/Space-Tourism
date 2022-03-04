import React, { useState } from 'react'
import './navbr.css'
import logo from '../../logo.svg'
import { IoApps } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {

    const [menu, setMenu] = useState(false)
    

    return (
        <div className='   h-24 flex justify-between px-8 md:px-0 items-center text-white lg:my-8 md:m-0'>
            <img src={ logo } alt="LOGO is here" className='md:pl-5 cursor-pointer' />
           
            

            <div>
                <ul className=' justify-around  bg-gray-900 bg-blur-sm items-center hidden md:flex  md:text-md md:p-5  md:w-[450px] lg:w-[830px] lg:space-x-9 lg:text-xl lg:justify-self-end'>
                    <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>00</span>  HOME</a></li>
                    <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>01</span>  DESTINATION</a></li>
                    <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>02</span>  CREW</a></li>
                    <li className='md:flex-grow'><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>03</span>  TECHNLOGY</a></li>
                </ul>
            </div>
            
            {menu
                ? <IoCloseSharp size={40} className='md:hidden cursor-pointer' onClick={()=>{setMenu(false)}}/> 
                : <IoApps size={40} className='md:hidden cursor-pointer' onClick={() => { setMenu(true) }} />}
            {
                menu && (
                    <div className='absolute top-0 right-0 w-80 h-full bg-gray-900  md:hidden '>

                        <div className='p-5'>
                        <IoCloseSharp size={40} className='md:hidden cursor-pointer ' onClick={()=>{setMenu(false)}}/>

                        </div>
                    
            
                        <ul className="mt-5 text-xl">
                            <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>00</span>  HOME</a></li>
                            <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>01</span>  DESTINATION</a></li>
                            <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>02</span>  CREW</a></li>
                            <li><a href=""><span className='font-bold px-1 md:hidden lg:inline-block'>03</span>  TECHNLOGY</a></li>
                        </ul>
                 </div>  
                )
            }
            
          
           
           

            </div>
       

  )
}

export default Navbar

