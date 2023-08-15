import React from "react";
import { useState } from "react";
import { db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";



//defined a function called Booking which takes the property , room.
const Booking = ({room}) => {
  // const {rooms} =props
  // if(!rooms || rooms.length === 0){
    // return <div>No Room available. </div>
  // }
  
  const location = useLocation(); //useLocation hook to get the current location and locate the rooms object
  
  const roomData = location.state.room; // gets the current state of the room
  // console.log(roomData);
  const [room_id, setRoomId] = useState(roomData.id);
  //useStae declare and initialize, stoe various props of selected rooms
  const [image_url, setImageUrl] = useState(roomData.imageURL);
  const [roomType, setRoomType] = useState(roomData.room_type);
  const [roomDescription, setRoomDescription] = useState(roomData.room_description);

  //user input of their details on the form , this is infromation the guests will input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfGuests, setNumOfGuests] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  //This function handles the booking when the submit button is clicked  , line 37-47 handles the adding of data by user
  //line 33 -72
  const handleBooking = async (e) => {
    e.preventDefault();
    //store data into firestore database line  36-60
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        //addDoc method ,adds information the firestore using `booking` reference
        firstName: firstName,
        lastName: lastName,
        email: email,
        room_id: room_id,   //problem here , roomid is reading null . 
        roomType: roomType,
        roomDescription: roomDescription,
        numberOfGuests: numberOfGuests,
        arrivalDate: arrivalDate,
        arrivalTime: arrivalTime,
        departureDate: departureDate,
        specialRequests: specialRequests,
      });
      console.log(docRef);

      //Success popup
      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: "Successfully saved your booking.",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error("Error adding document: ", error);

      //Success popup
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Error occurred while adding the booking.Please try again...",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="container">
      <div className="container-book">
      <Link to="/rooms" className="backtorooms">
        <b>Return Back</b>
      </Link>
        <h2>Hotel Booking</h2>
        <br />
        <img src={image_url} className="img-book-form" alt="banner" />
        <br />
        <br />
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Room ID.</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="room_id"
                value={room_id}
                onChange={(event) => setRoomId(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="example@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Number of Guests</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="Number of Guests"
                onChange={(event) => setNumOfGuests(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Arrival Date</label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={(event) => setArrivalDate(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Arrival Time</label>
            <div className="col-sm-10">
              <input
                type="time"
                className="form-control"
                onChange={(event) => setArrivalTime(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Departure Date</label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={(event) => setDepartureDate(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Special Requests</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Special Requests"
                onChange={(event) => setSpecialRequests(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button className="btn btn-primary" onClick={handleBooking}>
                Confirm Booking
                {/* <Booking room={room}/> */}
              </button>
            </div>
          </div>
        </form>
      </div>
      <br/>
   
    </div>
  );
};
export default Booking;
