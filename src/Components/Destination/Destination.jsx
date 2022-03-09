import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Moon from "../../Assets/Images/Moon.png";
import { images } from "../../Assets/Images/index";
// import { GlobalContext } from "../../Context/GlobalContext";
import "./destination.css";

const Destination = ({ datas }) => {
  // datas.map(data => console.log(data.desctiption))
  const Navlist = ["MOON", "MARS", "EUTOPA", "TITAN"];

  const [state, setState] = useState(datas[0]);

  const updateState = (id) => {
    setState(datas[id]);
  };

  return (
    <div>
      <Navbar />
      <div className="text-2xl md:text-3xl lg:text-4xl text-white flex justify-center lg:justify-start p-11 lg:p-7 ">
        <div className="mr-6 lg:ml-8">01</div>
        <h1>Pick your destination</h1>
      </div>

      <div className="flex flex-col justify-center item-center   lg:flex-row lg:justify-around">
        <img
          src={state.url}
          alt=""
          className="inline p-16 md:p-32 lg:p-20 App-logo"
        />

        <div>
          <article>
            <div className="text-white text-center lg:text-left space-y-10 flex flex-col justify-center items-center lg:space-y-2 lg:p-4">
              <ul className="flex justify-center mt-10 text-xl md:2xl  ">
                {Navlist.map((list, idx) => (
                  <div key={idx}>
                    <li  onClick={() => updateState(idx)} >
                      <a className="cursor-pointer hover:border-b-2 border-white pb-4"> {list}</a>
                    </li>
                  </div>
                ))}
              </ul>

              <div className="text-white text-center lg:text-left space-y-10 flex flex-col justify-center items-center lg:space-y-2 lg:p-4">
                <h1 className=" text-8xl md:text-9xl ">{state.title}</h1>
                <p className=" w-[390] lg:w-[472px] text-lg md:text-xl lg:text-xl text-center p-4 m-4 ">
                  {state.desctiption}
                </p>
                <hr />

                <div className="flex flex-col space-y-8 md:space-y-10 lg:flex-row lg:justify-around lg:space-y-0  mb-9 w-full">
                  <div>
                    <span className="md:text-xl lg:text-lg">AVG. DISTANCE</span>
                    <h3 className="text-3xl md:text-4xl lg:text-2xl font-bold m-2">
                      {state.distance}
                    </h3>
                  </div>

                  <div className="md:text-xl lg:text-lg">
                    <h4>AVG. TRAVEL TIME</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-2xl font-bold m-2">
                      {state.time}
                    </h3>
                  </div>
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
