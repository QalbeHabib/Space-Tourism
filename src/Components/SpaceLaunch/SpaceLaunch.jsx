import React,{ useState } from 'react'
import Navbar from '../Navbar/Navbar'

const SpaceLaunch = ({ datas }) => {
  const [state, setState] = useState(datas[0])
  
  const updateState = (id) => {
  setState(datas[id])
}
  return (
    <div className="text-white  max-w-[1440px] lg:h-[900px] mx-auto scroll-smooth ">
     
    <Navbar />

    <div className="flex justify-center my-6 items-center text-2xl md:justify-start  p-4">
      <div className="mr-2">01</div>
      <div>Space Launch 101</div>
      </div>
      
    <div className="  flex flex-col justify-center items-center lg:flex-row  lg:justify-around  ">
  
          
      <div className="  lg:flex lg:h-full lg:flex-col lg:justify-start lg:mb-24  lg:p-4 order-3 lg:order-none">

         
          <div className=" space-y-6  text-center lg:text-left flex flex-col  m-5 md:p-6 md:w-[470px] lg:w-[500px]">
                <span className="text-xl mt-8 md:text-3xl text-gray-400">THE TERIMINILOGY...</span>
                <h1 className="text-4xl md:text-5lg lg:text-6xl">{state.title}</h1>

                <p className="text-xl font-light pb-10">
                  {state.description}
              </p>
            <ul className='order-first lg:order-none'>
              {
                datas.map((a,idx) => {
                  return (
                    <div key={idx} className="p-4 m-2 bg-gray-500  inline-block rounded-full border-white cursor-pointer hover:bg-white hover:text-black font-bold">
                      <li onClick={()=> updateState(idx)}>{idx + 1}</li>
                    </div>
                  )
                })
              }
                
               
               
              </ul>
          </div>

        
      
        

      </div>

     

      <div className="  flex justify-center items-center text-center "  >
          <div >
            <img src={ state.url }  className= 'w-96 h-80  md:w-[768px] md:h-[310px] lg:w-[525px] lg:h-[500px]  bg-no-repeat bg-contain shadow-lg rounded-xl'/>
          </div>
      </div>
      


     
  </div>
      </div>
  
  )
}

export default SpaceLaunch