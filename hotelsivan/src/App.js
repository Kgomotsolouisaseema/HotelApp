import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import NewRoom from "./components/NewRoom";
import Login from "./components/Login";
import Registration from "./components/Registration";
// import Amenities from "./components/Amenities";
// import FilterRooms from "./components/FilterRooms";
// import MainImage from './MainImage';

function App() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    console.log(userEmail);
  }, [userEmail]);

  return (
    <>
      {/* <Amenities/> */}
      {/* <FilterRooms/> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="/login"
            element={<Login setUserEmail={(email) => setUserEmail(email)} />}
          />

          <Route path="/rooms" element={<Rooms />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/newrooms" element={<NewRoom />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
