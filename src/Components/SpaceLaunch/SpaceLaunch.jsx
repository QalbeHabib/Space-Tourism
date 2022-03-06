import React from 'react'
import Navbar from '../Navbar/Navbar'
import Launch from '../../Assets/Images/Launch.png'
const SpaceLaunch = () => {
  return (
    <div className="text-white h-screen">
    <Navbar />

    <div className="flex justify-center my-6 items-center text-2xl md:justify-start  p-4">
      <div className="mr-2">01</div>
      <div>Space Launch 101</div>
      </div>
      
    <div className="  flex flex-col justify-center items-center lg:flex-row  lg:justify-around  ">
  
          
      <div className="  lg:flex lg:h-full lg:flex-col lg:justify-start lg:mb-24  lg:p-4 order-3 lg:order-none">

         
          <div className=" space-y-6  text-center lg:text-left flex flex-col  m-5 md:p-6 md:w-[470px] lg:w-[500px]">
                <span className="text-xl mt-8 md:text-3xl text-gray-400">THE TERIMINILOGY...</span>
                <h1 className="text-4xl md:text-5lg lg:text-6xl">LAUNCH VEHICLE</h1>

                <p className="text-xl font-light pb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                  mollitia impedit obcaecati ipsam cum quis, dignissimos hic
                  deserunt explicabo quae exercitationem perspiciatis suscipit
                  nostrum molestias.
              </p>
              <ul className='order-first lg:order-none'>
                <li className="p-5 m-2 bg-white inline-block text-black rounded-full border-black ">1</li>
                <li className="p-5 m-2 bg-gray-500  inline-block rounded-full border-white ">2</li>
                <li className="p-5 m-2 bg-gray-500  inline-block rounded-full border-white ">3</li>
               
              </ul>
          </div>

        
      
        

      </div>

  

      <div className="  flex justify-center items-center text-center "  >
       <div className=' w-96 h-80  md:w-[768px] md:h-[310px] lg:w-[525px] lg:h-[500px] bg-gradient-to-r from-red-500 to-blue-500 bg-no-repeat bg-contain ' ></div>
      </div>
      


     
  </div>
  </div>
  )
}

export default SpaceLaunch