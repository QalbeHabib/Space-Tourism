import "./App.css";

import { Home, Destination, SpaceLaunch, Crew, Navbar } from "./Components";
import { GlobalContext, crewData, LaunchData } from "./Context/GlobalContext";
import { Routes, Route, Link } from "react-router-dom";
import { images } from "./Assets/Images/index";

function App() {
  return (
    <div className="  max-w-[1440px] mx-auto scroll-smooth  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="destination"
          element={<Destination datas={GlobalContext} />}
        />
        <Route path="crew" element={<Crew datas={crewData} />} />
        <Route
          path="spacelaunch"
          element={<SpaceLaunch datas={LaunchData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
