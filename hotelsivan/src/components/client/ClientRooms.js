import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { Carousel } from "react-bootstrap"; // Import Bootstrap's Carousel component

function ClientRooms() {
  // Fetch the 'roomTypes' collection data from Firestore
  const [rooms  ,setRooms] = useState([]);
 

  // Organize rooms into separate arrays based on their room types
  const economyRooms = rooms.filter((room) => room.room_type === "Economy");
  const standardRooms = rooms.filter((room) => room.room_type === "Standard");
  const deluxeRooms = rooms.filter((room) => room.room_type === "Deluxe");
  

  useEffect(() => {
    // Function to fetch room data from Firestore
    const fetchRooms = async () => {
      try {
       
        const roomSnapshot = await getDocs(collection(db, "roomTypes"));
        const roomData = roomSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(roomSnapshot); //see on console what is happening when comp monuts
        setRooms(roomData);
      } catch (error) {
        console.log("Error fetching rooms: ", error);
      }
    };

    fetchRooms(); // Call the fetchRooms function when the component mounts
  }, []);

  return (
    <div>
      <h2>Hotel Sivan Rooms</h2>

      {/* Display Economy Rooms */}
      <h3>Economy Rooms</h3>
      <div className="row">
        {economyRooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            <div className="card mb-4">
              <Carousel>
                {/* Add images to the carousel */}
                {/* adding  room.imageURL or any other property that holds image URLs */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={room.imageURL}
                    alt={`Economy Room ${room.roomNum}`}
                  />
                </Carousel.Item>
                {/* kg ,  more Carousel.Item for additional images */}
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">Economy Room {room.roomNum}</h5>
                <p className="card-text">{room.roomDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display Standard Rooms */}
      <h3>Standard Rooms</h3>
      <div className="row">
        {standardRooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            {/* Similar card and carousel structure as above */}
            <div className="card mb-4">
              <Carousel>
                {/* Add images to the carousel */}
                {/* adding  room.imageURL or any other property that holds image URLs */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={room.imageURL}
                    alt={`Standard Room ${room.roomNum}`}
                  />
            
                  
                </Carousel.Item>
                {/* kg ,  more Carousel.Item for additional images */}
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">Standard Room {room.roomNum}</h5>
                <p className="card-text">{room.roomDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display Deluxe Rooms */}
      <h3>Deluxe Rooms</h3>
      <div className="row">
        {deluxeRooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            <div className="card mb-4">
              <Carousel>
                {/* Add images to the carousel */}
                {/* adding  room.imageURL or any other property that holds image URLs */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={room.imageURL}
                    alt={`Deluxe Room ${room.roomNum}`}
                  />
                </Carousel.Item>
                {/* kg ,  more Carousel.Item for additional images */}
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">Deluxe Room {room.roomNum}</h5>
                <p className="card-text">{room.roomDescription}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientRooms;
