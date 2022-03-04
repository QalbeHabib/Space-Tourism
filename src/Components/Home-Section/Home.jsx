import React from "react";
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <div className="relative">

    <Navbar />


      <div className="flex flex-col justify-center items-center  text-white mt-24 space-y-24 md:mt-28 md:space-y-28 lg:flex-row  lg:justify-between lg:items-end  lg:p-24">
      <div className="w-96 h-full  ">
        <h2 className='text-lg md:text-xl text-center lg:text-left'>SO, YOU WANT TOT TRAVEL TO</h2>
        <h1 className=" text-8xl md:text-9xl my-9 text-center ">SPACE</h1>
        <p className="text-md md:text-lg text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          velit deserunt necessitatibus voluptas earum voluptate vitae. Eos sed
          reiciendis culpa facilis cumque omnis vitae odit, ut modi consectetur
          accusantium dolorem?
        </p>
          </div>
          <div className=" min-w-[274px] h-[274px] bg-white  my-20 flex justify-center items-center rounded-full">
                <h2 className="text-5xl text-black">Explore</h2>
          </div>
      </div>
   
    
    </div>
  );
}

export default Home;
