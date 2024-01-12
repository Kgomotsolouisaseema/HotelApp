import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../components/firebase";
import { collection , onSnapshot } from "firebase/firestore";
import Footer from "./Footer";
import MainImage from "./MainImage";
import GoogleMapComponent from "./GoogleMap"; // Import the GoogleMapComponent
import Amenities from "./Amenities";

const ClientHome = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [selectedDates, setSelectedDates] = useState({arrivalDate: null, departurDate: null,});

  useEffect(() => {
    // Fetch bookings from Firebase and set the bookings state
    const bookingsRef = collection(db, "bookings");
    const unsubscribeBookings = onSnapshot(bookingsRef, (snapshot) => {
      const bookingData = snapshot.docs.map((doc) => doc.data());
      // console.log(bookingData,'BOOKData');
      setBookings(bookingData);
    });
    //
    // Fetch rooms from Firebase and set the rooms state
    //Snapshot allow yous to listen to changes in the collectiondata in real time 
    const roomsRef = collection(db, "roomTypes");
    const unsubscribeRooms = onSnapshot(roomsRef, (snapshot) => {
      // console.log(snapshot.docs)
      const roomData = snapshot.docs.map((doc) => doc.data());
      console.log('roomData',roomData);
      setRooms(roomData);
    });

    // Unsubscribe from the listeners when the component unmounts
    return () => {
      unsubscribeBookings();
      unsubscribeRooms();
    };
    // console.log(bookingsRef);
  }, []);

function handleCheck(e ) {
  e.preventDefault();

  if (!selectedDates.arrivalDate || !selectedDates.departurDate) {
    alert("Please select both check-in and check-out dates.");
    return;
  }

  const bookedRooms = bookings.filter((booking) => {
    const bookingStartDate = new Date(booking.arrivalDate);
    const bookingEndDate = new Date(booking.departurDate);

    return (
      selectedDates.arrivalDate <= bookingEndDate &&
      selectedDates.departurDate >= bookingStartDate
    );
  });

  const availableRooms = rooms.filter((room) => {
    const isRoomAvailable = !bookedRooms.some((booking) => {
      const bookingStartDate = new Date(booking.arrivalDate);
      const bookingEndDate = new Date(booking.departurDate);
      
      return (
        selectedDates.arrivalDate <= bookingEndDate &&
        selectedDates.departurDate >= bookingStartDate &&
        booking.room_Id === room.id
      );
    });

    return isRoomAvailable;
  });

  if (availableRooms.length > 0) {
    const availableRoomNames = availableRooms
      .map((room) => room.roomNum)
      .join(", ");
    alert(`Available rooms: ${availableRoomNames}`);
    setSelectedDates({
      arrivalDate: null,
      departurDate: null,
    });
    // Navigate to the rooms page AFTER setting the selected dates and alert
    navigate(`/rooms?arrival=${selectedDates.arrivalDate}&departure=${selectedDates.departurDate}`);
    // navigate("/rooms");
  } else {
    alert("No available rooms for the selected dates.");
  }
}

  return (
    <>
      <Navbar />
      {/* <p>We have Amazing ...SOMETHING SOMETHING SOMETHING </p> */}
      <br />
      <MainImage />

      <Container>
        <form className="centered-form" onSubmit={handleCheck}>
          {/* <h2>Check Available Rooms :</h2> */}
          {/* Booking form for guests */}
          <div className="row">

            <div className="second">
              <div className="form-group">
                <label htmlFor="check-in">Check-in Date</label>
                <input
                  type="date"
                  id="check-in"
                  name="check-in"
                  className="form-input"
                  value={selectedDates.arrivalDate || ""}
                  onChange={(e) =>
                    setSelectedDates({
                      ...selectedDates,
                      arrivalDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="check-out">Check-out Date</label>
                <input
                  type="date"
                  id="check-out"
                  name="check-out"
                  className="form-input"
                  value={selectedDates.departurDate || ""}
                  onChange={(e) =>
                    setSelectedDates({...selectedDates,departurDate: e.target.value,})
                  }
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
      <br />
      <Amenities />

      <br />
      <GoogleMapComponent />
      <br />
      <Footer />
    </>
  );
};

export default ClientHome;
