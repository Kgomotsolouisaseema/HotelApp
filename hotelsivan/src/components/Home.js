import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import GoogleMapComponent from "../GoogleMap"; // Import the GoogleMapComponent


const ClientHome = () => {
  const [rooms  ,setRooms] = useState([]);
  console.log(rooms);
  const navigate = useNavigate();



  function handleCheck(e){
    e.preventDefault()
    const availableRooms = rooms.filter(room => room.available)
    
    if(availableRooms.length > 0){
      const availableRoomNames = availableRooms.map(room => room.id).join(" ,");
      alert(`Available rooms : ${availableRoomNames}`);
      setRooms()
      navigate('/rooms');
    }else{
      alert("No Available rooms")

    } 
  };



  return (
    <>   
   <Navbar/>
  <Container>  
 <form className="centered-form"  onSubmit={handleCheck}> 
  {/* Booking form for guests */}
  <div className="row">
    <div className="col-sm-6">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input type="number" id="guests" name="guests" className="form-input" />
      </div>
    </div>

    <div className="col-sm-6">
      <div className="form-group">
        <label htmlFor="check-in">Check-in Date</label>
        <input type="date" id="check-in" name="check-in" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="check-out">Check-out Date</label>
        <input type="date" id="check-out" name="check-out" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="hotel-preferences">Hotel Preferences</label>
        <textarea id="hotel-preferences" name="hotel-preferences" className="form-input"></textarea>
      </div>

      <div className="form-group">
        <button type="submit" className="submit-button" >Check Availability</button>
      </div>
    </div>
  </div>
</form>
  <div>
    {/* <GoogleMapComponent /> */}
  </div>
     </Container>

     
     </>

    
  );
};

export default ClientHome;
