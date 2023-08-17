import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import MainImage from "./MainImage";
import GoogleMapComponent from "./GoogleMap"; // Import the GoogleMapComponent
import Amenities from "./Amenities";

const ClientHome = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  function handleCheck(e) {
    e.preventDefault();
    const availableRooms = rooms.filter((room) => room.available);

    if (availableRooms.length > 0) {
      const availableRoomNames = availableRooms
        .map((room) => room.id)
        .join(" ,");
      alert(`Available rooms : ${availableRoomNames}`);
      setRooms();
      navigate("/rooms");
    } else {
      alert("No Available rooms");
    }
  }

  return (
    <>
      <Navbar />
      {/* <p>We have Amazing ...SOMETHING SOMETHING SOMETHING </p> */}
      <br/>
      <MainImage />
      
      <Container>
     
        <form className="centered-form" onSubmit={handleCheck}>
          {/* <h2>Check Available Rooms :</h2> */}
          {/* Booking form for guests */}
          <div className="row">
            <div className="col-sm-6">
              {/* <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                />
              </div> */}
{/* 
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                />
              </div> */}
              {/* <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-input"
                />
              </div> */}
            </div>

            <div className="row-sm-10">
              <div className="form-group">
                <label htmlFor="check-in">Check-in Date</label>
                <input
                  type="date"
                  id="check-in"
                  name="check-in"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="check-out">Check-out Date</label>
                <input
                  type="date"
                  id="check-out"
                  name="check-out"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="submit-button">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </form>
        
      </Container>
      <br/>
      <Amenities/>
      
      <br/>
      <GoogleMapComponent />
      <br/>
      <Footer />
    </>
  );
};

export default ClientHome;
