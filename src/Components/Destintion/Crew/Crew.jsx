import React from "react";
import Navbar from "../../Navbar/Navbar";
import Avatar from "./Avatar.png";
const Crew = () => {
  return (
    <div className="text-white h-screen">
      <Navbar />

      <di className="flex justify-around items-center ">
        <div className="flex h-full flex-col justify-start mb-24 w-2/5  ">
          <div className="text-3xl font-bold flex mb-32">
            <div className="mr-2">01</div>
            <div>Meet Your Crew</div>
          </div>
          <dir className=" space-y-9">
            <span className="text-3xl text-gray-400">COMMANDER</span>
            <h1 className="text-7xl">JHON DOE </h1>

            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia impedit obcaecati ipsam cum quis, dignissimos hic
              deserunt explicabo quae exercitationem perspiciatis suscipit
              nostrum molestias.
            </p>
          </dir>

          <div className="mt-9">0 0 0 0 0 0</div>
        </div>

        <div className=" p-9">
          <img src={Avatar} alt="" />
        </div>
      </di>
    </div>
  );
};

export default Crew;
