import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./NavBar";

// import GoogleMapComponent from "../GoogleMap"; // Import the GoogleMapComponent


const ClientHome = () => {
  return (
    <>   
   <Navbar/>
  <Container>  
 <form className="centered-form"> 
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
        <button type="submit" className="submit-button">Book Now</button>
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
