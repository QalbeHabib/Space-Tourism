import React from "react";
import Navbar from "../Navbar/Navbar";
import Moon from "../../Assets/Images/Moon.png";
import './destination.css';

const Destination = () => {
  return (
    <div>
      <Navbar />
        <div className="text-2xl md:text-3xl lg:text-4xl text-white flex justify-center lg:justify-start p-11 lg:p-7">
          <di className="mr-6 lg:ml-8">01</di>
          <h1 className="">Pick Your Destination</h1>
        </div>
      
        <div className="flex flex-col justify-center item-center   lg:flex-row lg:justify-around">
          <img src={Moon} alt="" className="inline p-16 md:p-32 lg:p-20 App-logo" />

          <div>
          <article className="  ">
            

            <div className="text-white text-center lg:text-left space-y-10 flex flex-col justify-center items-center lg:space-y-2 lg:p-4">
              
                <ul className="flex justify-center mt-10 text-xl md:2xl  ">
                  <li>
                    <a href="">MOON</a>
                  </li>
                  <li> 
                    <a href="">MARS</a>
                  </li>
                  <li>
                    <a href="">EUTOPA</a>
                  </li>
                  <li>
                    <a href="">TITAN</a>
                  </li>
              </ul>
              
                <h1 className=" text-8xl md:text-9xl ">MOON</h1>
                <p className=" w-[390] lg:w-[472px] text-lg md:text-xl lg:text-xl text-center p-4 m-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  sequi qui molestias vitae corporis? Voluptates odit nisi
                  reiciendis, voluptatum minus repellendus ipsa, provident sequi
                  atque quo qui quam laboriosam placeat, magni excepturi?
                </p>
              <hr />
              

              <div className="flex flex-col space-y-8 md:space-y-10 lg:flex-row lg:justify-around lg:space-y-0   w-full">
                

                  <div >
                    
                    <span className="md:text-xl lg:text-lg">AVG. DISTANCE</span>
                    <h3 className="text-3xl md:text-4xl lg:text-2xl font-bold m-2">
                      213.213 KM
                    </h3>
                </div>
                

                  <div className="md:text-xl lg:text-lg">
                    <h4>AVG. TRAVEL TIME</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-2xl font-bold m-2">
                      10 DAYS
                    </h3>
                </div>
                

              </div>
              

            </div>
            

            </article>
          </div>
        </div>
     
    </div>
  );
};

export default Destination;
