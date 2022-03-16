import "./App.css";

import { Home, Destination, SpaceLaunch, Crew, Navbar } from "./Components";
import { GlobalContext, crewData, LaunchData } from "./Context/GlobalContext";
import { Routes, Route, Link } from "react-router-dom";
import { images } from "./Assets/Images/index";

function App() {
 
  return (
    <div style={{ backgroundImage: `url(${images.HomeBg})` }} className='h-full w-screen bg-no-repeat  bg-cover pt-8'>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="destination"
          element={<Destination datas={GlobalContext} habib='ali'/>}
        />
        <Route path="crew" element={<Crew datas={crewData}  />} />
        <Route
          path="spacelaunch"
          element={<SpaceLaunch datas={LaunchData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
