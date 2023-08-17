import React from 'react';
import {  FaRegBuilding, FaSwimmingPool, FaGlassMartiniAlt,
     FaShuttleVan, FaLock, FaWifi, FaUtensils,  FaTshirt, 
     FaBusinessTime,  FaClock }
 from 'react-icons/fa';
 //FaConciergeBell ,FaAlarmClock,FaSecurity,
function Amenities() {
  return (
    <div>
      <h2>Hotel Facilities & Services</h2>
      <ul>
        {/* <li><FaSecurity /> 24-Hour Security</li> */}
        <li><FaRegBuilding /> Conference Venue</li>
        <li><FaSwimmingPool /> Swimming Pool</li>
        <li><FaGlassMartiniAlt /> Bar</li>
        <li><FaShuttleVan /> Shuttle Service</li>
        <li><FaLock /> Secure On-Site Parking</li>
        <li><FaWifi /> Complimentary WiFi</li>
        <li><FaUtensils /> Room Service</li>
        <li><FaTshirt /> Laundry Service</li>
        <li><FaBusinessTime /> Business Service</li>
        {/* <li><FaAlarmClock /> Wake Up Calls</li> */}
        <li><FaClock /> 24-Hour Reception</li>
      </ul>
    </div>
  );
}

export default Amenities;
