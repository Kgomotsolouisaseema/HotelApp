import { useEffect, useState } from "react";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import { Carousel } from "react-bootstrap"; // Import Bootstrap's Carousel component
// import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./NavBar";

// imports for the modal Roomdetails
import Modal from "react-modal";
import "firebase/firestore"; // Import Firestore
import Roomdetails from "./Roomdetails";


function Rooms() {
  // Fetch the 'roomTypes' collection data from Firestore
  const [rooms, setRooms] = useState([]);

  //states that handle modal fir room details
  const [roomsData, setRoomsData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalIsClosed, setModalIsClosed] = useState(true);

  // const navigate = useNavigate();

  // Organize rooms into separate arrays based on their room types
  const economyRooms = rooms.filter((room) => room.room_type === "Economy");
  const standardRooms = rooms.filter((room) => room.room_type === "Standard");
  const deluxeRooms = rooms.filter((room) => room.room_type === "Deluxe");

  useEffect(() => {
    // Function to fetch room data from Firestore
    const fetchRooms = async () => {
      try {
        const roomSnapshot = await getDocs(collection(db, "roomTypes"));
        const roomData = roomSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRooms(roomData);
      } catch (error) {
        console.log("Error fetching rooms: ", error);
      }
    };

    fetchRooms(); // Call the fetchRooms function when the component mounts
  }, []);

  // fetch data for roomdetails modal
  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomsRef = db.collection("roomTypes"); // Correct the collection name
        const snapshot = await roomsRef.get();
        const rooms = snapshot.docs.map((doc) => doc.data());
        setRoomsData(rooms);
      } catch (error) {
        console.log("Error fetching room details: ", error);
      }
    };
    
    fetchData(); // Call the fetchData function to retrieve room details
  }, []);
  

  const openModal = (room) => {
    setSelectedRoom(room);
    setModalIsOpen(true);
    // setModalIsClosed(false);

  };

  const closeModal = () => {
    setSelectedRoom(null);
    setModalIsOpen(false);
    // setModalIsClosed(true);
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Hotel Sivan Rooms</h2>
        <div>
          {roomsData.map((room) => (
            <div key={room.id}>
              {/*Dispay room details here*/}
              <button onClick={()=> openModal(room)}>View Details </button>
            </div>
          ))}
          {modalIsOpen && (
            <Roomdetails
              isOpen={modalIsOpen}
              room={selectedRoom}
              closeModal={closeModal}
              
            />
          )}
        </div>

        {/* Display Economy Rooms */}
        {/* <h3>Economy Rooms</h3> */}
        <div className="row">
          {economyRooms.map((room) => (
            <div className="col-md-4" key={room.id}>
              <div className="card mb-4">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={room.imageURL}
                      alt={`Economy Room ${room.roomNum}`}
                      id={"crlImg"}
                    />
                  </Carousel.Item>

                  {room.uploadedImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="room"
                        id={"crlImg"}
                      />
                    </Carousel.Item>
                  ))}

                  {/* kg ,  more Carousel.Item for additional images */}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">Economy Room {room.roomNum}</h5>
                  <p className="card-text" id={"room-descr"}>
                    {room.roomDescription}
                  </p>
                  {/* <p className="card-text">{room.roomNum}</p> */}
                  <p className="card-text">{room.price}</p>
                  {/* <p className="card-text">{room.totalOccupants}</p> */}
                  <button onClick={() => openModal(room)}>View Details </button>
                  <button className="btn-checkRoom" onClick={()=> handleBooking(room.id , room.value)}>Book Room </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Standard Rooms */}
        {/* <h3>Standard Rooms</h3> */}
        <div className="row">
          {standardRooms.map((room) => (
            <div className="col-md-4" key={room.id}>
              <div className="card mb-4">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={room.imageURL}
                      alt={`Standard Room ${room.roomNum}`}
                      id={"crlImg"}
                    />
                  </Carousel.Item>
                  {room.uploadedImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="room"
                        id={"crlImg"}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">Standard Room {room.roomNum}</h5>
                  <p className="card-text" id={"room-descr"}>
                    {room.roomDescription}
                  </p>
                  {/* <p className="card-text">{room.roomNum}</p> */}
                  <p className="card-text">{room.price}</p>
                  {/* <p className="card-text">{room.totalOccupants}</p> */}
                  <button onClick={() => openModal(room)}>View Details </button>
                  {/* <button className="btn-checkRoom" onClick={()=> handleBooking(room.id , room.value)}>Book Room </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <h3>Deluxe Rooms</h3> */}
        <div className="row">
          {deluxeRooms.map((room) => (
            <div className="col-md-4" key={room.id}>
              <div className="card mb-4">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={room.imageURL}
                      alt={`Deluxe Room ${room.roomNum}`}
                      id={"crlImg"}
                    />
                  </Carousel.Item>
                  {room.uploadedImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="room"
                        id={"crlImg"}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room {room.roomNum}</h5>
                  <p className="card-text" id={"room-descr"}>{room.roomDescription}</p>
                  {/* <p className="card-text">{room.roomNum}</p> */}
                  <p className="card-text">{room.price}</p>
                  {/* <p className="card-text">{room.totalOccupants}</p> */}
                  <button onClick={() => openModal(room)}>View Details </button>
                  {/* <button className="btn-checkRoom" onClick={()=> handleBooking(room.id , room.value)}>Book Room </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
