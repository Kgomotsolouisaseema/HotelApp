import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation
import { Container } from "react-bootstrap";

import GoogleMapComponent from "../GoogleMap"; // Import the GoogleMapComponent


const ClientHome = () => {
  // Add  state variables and logic for the booking form here KG ,FIREBASE CRUD
// return (
//   <div>Hi</div>
// )
  return (
    
    <Container>
      <div className="NavBar">
        {/* <NavBar></NavBar> */}

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

          <div className="container">
            <label id="hotel-preferences">Hotel Preferences</label>
            <textarea className="text" ></textarea>
          </div>
          <br/>
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
        <ul className="socials">
          <li className="facebook-icon" ></li>
          <li className="twitter-icon"></li>
          <li className="instagram-icon"></li>
        </ul>
    </div>

  
      <div>
        {/* Hotel Map: uncomment friday please*/}
        <GoogleMapComponent />
      </div>


      {/* <div>
        <HotelFacilities />
      </div>

      <div>
        <UserRatings />
      </div> */}
      </div>
      <div>
      <footer>
                <div className="container-footer">
                    <table>
                        <thead>
                            {/* <tr>
                                <th>Address</th>
                                <th>Legal</th>
                                <th>Policy </th>
                                <th>Social media</th>
                            </tr> */}
                            <tr>
                                {/* <td>Gauteng</td>
                                <td>Copyright</td>
                                <td>Email</td>
                                <td>Twitter</td> */}
                            </tr>
                        </thead>
                    </table>
                </div>
            </footer>
          </div>
    </Container>
  );
};

export default ClientHome;
