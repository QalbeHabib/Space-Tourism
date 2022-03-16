import React, { useState } from 'react'

import logo from '../../logo.svg'
import { IoApps } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {   Link,NavLink } from "react-router-dom";
import './navbr.css'

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const liBorder =" font-bold px-1  cursor-pointer hover:border-b-4 border-gray-400 pb-8 "
    

    return (
        <div className='   h-24 flex justify-between px-8 md:px-0 items-center text-white lg:py-8 md:m-0'>
          <Link to="/" className='md:pl-5 cursor-pointer'>  <img src={ logo } alt="LOGO is here"  /></Link>
        
            <div className=' relative lg:w-[32%] lg:h-[1px] bg-gray-500  left-[5%] z-10'></div>
          

            <div>
                <ul className='justify-between px-8 white-glassmorphism border-none outline-none bg-blur-sm items-center hidden md:flex  md:text-sm md:p-5   md:w-[550px] lg:w-[830px] lg:space-x-9 lg:text-xl '>
                    <li><NavLink exact activeclassname="active" to="/"  className={`${liBorder} ` }>00 HOME</NavLink></li>
                    <li><NavLink activeclassname="active" to="/destination" className={`${liBorder} ` }>01  DESTINATION</NavLink></li>
                    <li><NavLink activeclassname="active" to="/crew"  className={`${liBorder} ` }>02  CREW</NavLink></li>
                    <li><NavLink activeclassname="active" to="/spacelaunch" className={`${liBorder}` }>03  TECHNLOGY</NavLink></li>
                </ul>
            </div>
            
            {menu
                ? <IoCloseSharp size={40} className='md:hidden cursor-pointer' onClick={()=>{setMenu(false)}}/> 
                : <IoApps size={40} className='md:hidden cursor-pointer ' onClick={() => { setMenu(true) }} />
            }
                {
                menu && (
                    <div className='absolute top-0 right-0 w-2/4 blue-glassmorphism shadow-2xl h-screen z-30  md:hidden '>

                        <div className='p-5'>
                        <IoCloseSharp size={40} className='md:hidden cursor-pointer ' onClick={()=>{setMenu(false)}}/>

                        </div>
                    
            
                        <ul className="mt-5 text-lg md:text-xl">
                            <li><Link  to="/"><span className='font-bold px-1 md:hidden lg:inline-block'>00</span>  HOME</Link></li>
                            <li><Link   to="/destination"><span className='font-bold px-1 md:hidden lg:inline-block'>01</span>  DESTINATION</Link></li>
                            <li><Link  to="/crew"><span className='font-bold px-1 md:hidden lg:inline-block'>02</span>  CREW</Link></li>
                            <li><Link  to="/spacelaunch"><span className='font-bold px-1 md:hidden lg:inline-block'>03</span>  TECHNLOGY</Link></li>
                        </ul>
                 </div>  
                )
            }
            
          
           
           

            </div>
       

  )
}

export default Navbar

