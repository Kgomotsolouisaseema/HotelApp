import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import NewRoom from "./components/NewRoom"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/newrooms" element={<NewRoom/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
