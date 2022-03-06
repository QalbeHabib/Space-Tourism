import React from 'react'
import Navbar from '../Navbar/Navbar'
const SpaceLaunch = () => {
  return (
    <div className="text-white h-screen">
    <Navbar />

    
    <div className="  flex flex-col justify-center items-center lg:flex-row  lg:justify-around  ">

      <div className="  lg:flex lg:h-full lg:flex-col lg:justify-start lg:mb-24  lg:p-4 ">

      <div className="flex justify-center md:mt-24 items-center text-2xl lg:text-3xl lg:justify-start  md:m-10 ">
            <div className="mr-2">01</div>
            <div>Meet Your Crew</div>
        </div>
      <div className=" space-y-9  text-center lg:text-left flex flex-col  m-5 md:p-6 md:w-[470px] lg:w-[500px]">
            <span className="text-2xl md:text-3xl text-gray-400">COMMANDER</span>
            <h1 className="text-4xl md:text-5lg lg:text-6xl">DOUGLAS HURELY </h1>

            <p className="text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia impedit obcaecati ipsam cum quis, dignissimos hic
              deserunt explicabo quae exercitationem perspiciatis suscipit
              nostrum molestias.
          </p>
          <ul>
            <li className="p-2 m-2 bg-gray-500  inline-block rounded-full"></li>
            <li className="p-2 m-2 bg-gray-500  inline-block rounded-full"></li>
            <li className="p-2 m-2 bg-gray-500  inline-block rounded-full"></li>
            <li className="p-2 m-2 bg-gray-500  inline-block rounded-full"></li>
            <li className="p-2 m-2 bg-gray-500  inline-block rounded-full"></li>
          </ul>
      </div>

        
      
        

      </div>


      <div className=" p-9 ">
       <div className=' h-80 w-[375px] bg-gradient-to-r from-sky-500 to-indigo-500'></div>
      </div>
      


     
  </div>
  </div>
  )
}

export default SpaceLaunch