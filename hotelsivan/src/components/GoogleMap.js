// GoogleMap.js
import React from "react";
// import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
//initialized a variable to hold the lat and log om hotel sivan
//this also includes stylting .
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.8692, //  hotel's latitude //25° 28' 41.8692'' N
  lng: 28.039173, //  hotel's longitude //28° 2' 21.0228'' E
};

//Function for GoogleMapComponent to display map on Client Home.
const GoogleMapComponent = () => {
  //   const [showInfoWindow, setShowInfoWindow] = React.useState(false);

  //   const handleMarkerClick = () => {
  //     setShowInfoWindow(true);
  //   };

  //   const handleInfoWindowClose = () => {
  //     setShowInfoWindow(false);
  //   };

  return (
    // <GoogleMap
    //   mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
    //   <Marker position={center} onClick={handleMarkerClick}>
    //     {showInfoWindow && (
    //       <InfoWindow onCloseClick={handleInfoWindowClose}>
    //         <div>
    //           <h3>Hotel Sivan </h3>
    //           <p>2830 Phuthi Road ,Pretoria ,South Africa</p>
    //         </div>
    //       </InfoWindow>
    //     )}
    //   </Marker>
    // </GoogleMap>
    // <div style={{ width: "50%", height: "400px", marginLeft: "0" }}>
    //   <iframe
    //     width="90%"
    //     height="400"
    //     frameborder="0"
    //     scrolling="no"
    //     marginheight="0"
    //     // marginwidth="0"
    //     marginWidth ="0"
    //     src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pretoria+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    //   >
    //     <a href="https://www.maps.ie/population/">Hotel Sivan Coordinates</a>
    //   </iframe>
    // </div>
    <div style={{ width: "50%", height: "400px", marginLeft: "0" }}>
  <iframe
    style={{
      width: "90%",
      height: "400px",
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
