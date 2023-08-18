// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import firestore from "../components/firebase";
// import Swal from "sweetalert2";


// // import React from "react";

// function FilterRooms() {
//   const [selectedDates, setSelectedDates] = useState({
//     startDate: null,
//     endDate: null,
//   });
//   const [filteredRooms, setFilteredRooms] = useState([]);

//   useEffect(() => {
//     if (selectedDates.startDate && selectedDates.endDate) {
//       filteredRooms(selectedDates);
//     }
//   }, [selectedDates]);

//   const handleDateChange = (newDates) => {
//     setSelectedDates(newDates);
//   };

//   const filterRooms = async (dates) => {
//     const { startDate, endDate } = dates;
//     const roomRef = firestore.collection("bookings");
//     const query = roomRef.where("availability", "array-contains-any", [
//       { startDate: startDate.toISOString(), endDate: endDate.toISOString() },
//     ]);
//     try {
//       const querySnapshot = await query.get();
//       const rooms = querySnapshot.docs.map((doc) => doc.data());
//       setFilteredRooms(rooms);
//     } catch (error) {
//       console.log("Error fectching rooms :", error);
//     }
//     // Error popup
//     Swal.fire({
//       icon: "error",
//       title: "Failed!",
//       text: "Error occurred while fectching rooms. Please try again...",
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   };

//   return (
//     <div>
//       <DatePicker
//         selected={selectedDates.startDate}
//         startDate={selectedDates.startDate}
//         endDate={selectedDates.endDate}
//         onChange={(dates) =>
//         handleDateChange({ startDate: dates[0], endDate: dates[1] }) } selectsRange inline/>
//       <div className="room-list">
//         {filteredRooms.map((room) => (
//           <div key={room.id} className="room-card">
//             <h3>{room.roomNum}</h3>
//             <h3>{room.roomType}</h3> {/* compare the actual names before kg*/}
//             <h3>{room.roomNum}</h3>
//             <ul>
//               {room.availability.map((period, index) => (
//                 <li key={index}>
//                   Available From {period.startDate} to {period.endDate}
//                 </li>
//               ))}
//             </ul>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FilterRooms;
