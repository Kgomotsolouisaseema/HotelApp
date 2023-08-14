import React from "react";
import { useState } from "react";
import { db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Booking = ({ room }) => {
  const location = useLocation();
  const roomData = location.state.room;
  const [room_id, setRoomId] = useState(roomData.id);
  const [image_url, setImageUrl] = useState(roomData.imageURL);
  const [room_type, setRoomType] = useState(roomData.room_type);
  const [room_description, setRoomDescription] = useState(
    roomData.room_description
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [num_of_guests, setNumOfGuests] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [pickUpOption, setPickUpOption] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const handleBooking = async (e) => {
    e.preventDefault();
    //store data into firestore database
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        firstname: firstName,
        lastname: lastName,
        email: email,
        room_id: room_id,
        // room_type: room_type,
        // room_description: room_description,
        // num_of_guests: num_of_guests,
        // arrivalDate: arrivalDate,
        // arrivalTime: arrivalTime,
        // departureDate: departureDate,
      
      });
      console.log(docRef);
      //Success popup
      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: "Successfully saved your booking.",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      //Success popup
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Error occurred while adding the booking.Please try again...",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return (
    <div class="container">
      <div class="container-book">
        <a href="/Rooms" class="return-back-link">
          <b>Return Back</b>
        </a>
        <br />
        <h2>Hotel Booking</h2>
        <img src={image_url} class="img-book-form" alt="banner" />
        <br />
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Room ID.</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Room ID"
                value={room_id}
                onChange={(event) => setRoomId(event.target.value)}
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">E-mail</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                placeholder="example@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          {/* <!-- ... other form fields ... --> */}
          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button class="btn btn-primary" onClick={handleBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Booking;
