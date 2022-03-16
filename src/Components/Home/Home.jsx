import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { images } from "../../Assets/Images";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="  max-w-[1440px] lg:h-[900px] mx-auto scroll-smooth ">
      
        <Navbar />
        <div className="flex flex-col justify-center items-center  text-white mt-24 space-y-24 md:mt-28 md:space-y-28 lg:flex-row  lg:justify-between lg:items-end  lg:p-24">
          <div className="w-96 h-full  ">
            <h2 className="text-lg md:text-xl text-center lg:text-left">
              SO, YOU WANT TOT TRAVEL TO
            </h2>
            <h1 className=" text-8xl md:text-9xl my-9 text-center ">SPACE</h1>
            <p className="text-md md:text-lg lg:text-xl text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus velit deserunt necessitatibus voluptas earum
              voluptate vitae. Eos sed reiciendis culpa facilis cumque omnis
              vitae odit, ut modi consectetur accusantium dolorem?
            </p>
          </div>

          <Link to="/destination">
            <div className=" min-w-[274px] h-[274px] shadow-xl explore-hover cursor-pointer bg-white mb-32 md:mb-20   flex justify-center items-center rounded-full">
              <h2 className="text-5xl text-black ">Explore</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
