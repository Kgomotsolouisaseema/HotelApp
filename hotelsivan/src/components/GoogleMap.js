// GoogleMap.js
import React from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

//Function for GoogleMapComponent to display map on Client Home.
const GoogleMapComponent = () => {

  return (
   
    <div style={{ width: "130%", height: "400px", marginLeft: "0" }}>
  <iframe
    style={{
      width: "90%",
      height: "400px",
      overflow: "hidden",
      border: "none",
      margin: "0",  
      padding: "0",
    }}
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pretoria+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    allowFullScreen
    loading="lazy"
  >
    <a href="https://www.maps.ie/population/">Hotel Sivan Coordinates</a>
  </iframe>
</div>

  );
};

export default GoogleMapComponent;
