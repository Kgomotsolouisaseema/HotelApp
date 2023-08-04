import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation
import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
// import GoogleMapComponent from "../GoogleMap"; // Import the GoogleMapComponent


const ClientHome = () => {
  // Add  state variables and logic for the booking form here KG ,FIREBASE CRUD
// return (
//   <div>Hi</div>
// )
  return (
    
    <Container>
      <div className="NavBar">
        <NavBar></NavBar>

        <div className="container">
          <div className="lounge-img"></div>
        </div>
        <div className="add-room-container d-flex justify-content-center">
  <form>
    {/*Booking form for guests  */}
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" className="form-control" />
        </div>
      </div>

      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input type="date" id="check-in" name="check-in" className="form-control" />
        </div>
        <div className="">
          <div className="form-group">
            <label htmlFor="check-in">Check-in Date</label>
            <input type="date" id="check-in" name="check-in" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="check-out">Check-out Date</label>
            <input type="date" id="check-out" name="check-out" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="hotel-preferences">Hotel Preferences</label>
            <textarea id="hotel-preferences" name="hotel-preferences" className="form-control"></textarea>
          </div>
          <div>
            <div className="col-sm-15">
              <button type="submit" className="btn btn-success">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>


      <div>
        {/* Add your social media icons here */}
        <div className="container"  >
        <div className="row" style={{display:"flex"}}>
          {/* Facebook Icon */}
          <div className="">
            <div className="facebook-icon"></div>
          </div>
          {" "}
          {/* Instagram Icon */}
          <div className="">
            <div className="instagram-icon"></div>
          </div><br/>
        {" "}
          {/* Twitter  Icon */}
          <div className="">
            <div className="twitter-icon"></div>
          </div>
        </div>
        </div>

    </div>
        {/* Link to other pages */}
        <div className="row mt-3">
          <div className="col-md-12">
            <Link to="/Bookings" className="btn btn-info">Link to Other Page</Link>
            
          </div>
        </div>
         
      <div>
        {/* Hotel Map: uncomment friday please*/}
        {/* <GoogleMapComponent /> */}
      </div>


      {/* <div>
        <HotelFacilities />
      </div>

      <div>
        <UserRatings />
      </div> */}
      </div>
      <footer>
                <div className="container-footer">
                    <table>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Legal</th>
                                <th>Policy </th>
                                <th>Social media</th>
                            </tr>
                            <tr>
                                <td>Gauteng</td>
                                <td>Copyright</td>
                                <td>Email</td>
                                <td>Twitter</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </footer>
    </Container>
  );
};

export default ClientHome;
