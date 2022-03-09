import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Douglas from '../../Assets/Images/Douglas.png';

import './crew.css'
const Crew = ({datas}) => {

  const [state, setState] = useState(datas[0])
  
  const updateState = (id) => {
    setState(datas[id])
  }
  return (
    <div className="text-white h-screen">
      <Navbar />

      
      <div className="  flex flex-col justify-center items-center lg:flex-row  lg:justify-around  ">

        <div className="  lg:flex lg:h-full lg:flex-col lg:justify-between lg:mb-24  lg:p-4  order-1 md:order-none lg:w-[800px]">

        <div className="flex justify-center md:mt-24 items-center text-2xl lg:text-3xl lg:justify-start  md:m-10 ">
              <div className="mr-2">01</div>
              <div>Meet Your Crew</div>
          </div>
        <div className=" space-y-9  text-center lg:text-left flex flex-col  m-5 p-3 md:p-6 md:w-[470px] lg:w-[500px]">
              <span className="text-2xl md:text-3xl text-gray-400 ">{state.subtitle}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">{ state.title}</h1>

              <p className="text-xl font-light ">
                {state.description}
            </p>
            <ul className='mt-auto  '>
              {
                datas.map((a,idx) => {
                  return (
                    <div key={idx} className="p-1 m-2 bg-gray-500  inline-block rounded-full cursor-pointer hover:bg-white ">
                      <li 
                    onClick={()=>updateState(idx)}></li>
                    </div>
                    
                  )
                })
              }
              
              
            </ul>
        </div>

        </div>


        <div className=" p-9 w-[570px] h-[712px]">
          <img src={state.url} alt=""  className=""/>
        </div>
  
    </div>
    </div>
  );
};

export default Crew;
