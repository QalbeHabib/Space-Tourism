import React, { useState } from 'react'
import './navbr.css'
import logo from '../../logo.svg'
import { IoApps } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {  Link } from "react-router-dom";
const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const liBorder = [ 'font-bold', 'px-1' ,'md:text-lg', 'cursor-pointer', 'hover:border-b-4', 'border-white'  ]
    

    return (
        <div className='   h-24 flex justify-between px-8 md:px-0 items-center text-white lg:my-8 md:m-0'>
          <Link to="/" className='md:pl-5 cursor-pointer'>  <img src={ logo } alt="LOGO is here"  /></Link>
        
            <div className=' relative lg:w-[32%] lg:h-[1px] bg-gray-500  left-[5%] z-10'></div>
          

            <div>
                <ul className=' justify-between px-8 white-glassmorphism border-none outline-none bg-blur-sm items-center hidden md:flex  md:text-sm md:p-5   md:w-[550px] lg:w-[830px] lg:space-x-9 lg:text-xl '>
                    <li><Link to="/"  className='font-bold px-1 cursor-pointer hover:border-b-2 border-white pb-8'>00 HOME</Link></li>
                    <li><Link to="/destination" className='font-bold px-1  cursor-pointer hover:border-b-2 border-white pb-8'>01  DESTINATION</Link></li>
                    <li><Link to="/crew"  className='font-bold px-1  cursor-pointer hover:border-b-2 border-white pb-8'>02  CREW</Link></li>
                    <li><Link to="/spacelaunch" className='font-bold px-1  cursor-pointer hover:border-b-2 border-white pb-8'>03  TECHNLOGY</Link></li>
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
                            <li><Link to="/"><span className='font-bold px-1 md:hidden lg:inline-block'>00</span>  HOME</Link></li>
                            <li><Link to="/destination"><span className='font-bold px-1 md:hidden lg:inline-block'>01</span>  DESTINATION</Link></li>
                            <li><Link to="/crew"><span className='font-bold px-1 md:hidden lg:inline-block'>02</span>  CREW</Link></li>
                            <li><Link to="/spacelaunch"><span className='font-bold px-1 md:hidden lg:inline-block'>03</span>  TECHNLOGY</Link></li>
                        </ul>
                 </div>  
                )
            }
            
          
           
           

            </div>
       

  )
}

export default Navbar

