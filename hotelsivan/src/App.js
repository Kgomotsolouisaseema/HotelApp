
import React from 'react';
// import { Router, Route } from 'react-router-dom'; 
// import { Container } from 'react-bootstrap'; 
// import AuthProvider from './context/AuthContext'; 
// import ClientHome from "./components/client/ClientHome";
import ClientRooms from './components/client/ClientRooms';
import NewRoom from "./components/admin/NewRoom";  
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
       {/* <ClientHome /> */}
      <NewRoom/>
      {/* <ClientRooms/> */}
    </div>
 
  );
}

export default App;
