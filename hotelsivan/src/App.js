
import React from 'react';
import { Router, Route } from 'react-router-dom'; // Import Router and Route from react-router-dom
import { Container } from 'react-bootstrap'; // Import the Container component from react-bootstrap
import AuthProvider from './context/AuthContext'; 
import ClientHome from "./components/client/ClientHome";
import NewRoom from "./components/admin/NewRoom";
import HotelLogo from "../src/icons/HotelLogo.png";

function App() {
  return (
    // <div>
    //   {/* Your logo image */}
    //   <img src={HotelLogo} alt="Logo" className="navbar-logo" />
    //    <ClientHome />
    //   <NewRoom/>

    //   {/* <ClientRooms/> */}
    // </div>
    <Router>
       {/* {isAdmin ? <AdminRoutes /> : <ClientRoutes />} Vukonas way */}
      {" "}
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
        {" "}
        <AuthProvider>
          
          {" "}
          <Routes>
           {/* Common components  placed here */}
           <img src={HotelLogo} alt="Logo" className="navbar-logo" />
            <Route path="/client/*" element={<ClientHome />} />
            <Route path="/admin/*" element={<NewRoom />} />

            {" "}
          </Routes>
          {" "}
        </AuthProvider>
        {" "}
      </Container>
      {" "}
    </Router>
  );
}

export default App;

//inside the function before the return
// const [isAdmin , setIsAdmin] = useState(true);

// <div className="background">
//   <div className="backdrop">
//   <Router>
//     {isAdmin ? <AdminRoutes/> : <ClientRoutes/>} {/* Vukonas way*/ }
//   <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
//     <AuthProvider>
//       {/* Common components  placed here */}
//       <Routes>

//       {/* For example, you might have a Landing Page */}

//       {/* Client-side routes */}

//         <Route path="/client/*" element={<ClientRoutes />} />
//         <Route exact path="/" element={<AdminHome />} />

//       {/* Admin-side routes */}

//         <Route path="/admin/*" element={<AdminRoutes />} />
//         <Route path="/Registration" element={<Registration />} />
//         <Route path="./Login" element={<Login />} />

//       </Routes>

//     </AuthProvider>
//   </Container>
// </Router>

//   </div>
// </div>

///////////////////////////////////////////

// <div className="background">
//   <div className="backdrop">
//   <Router>
//     {isAdmin ? <AdminRoutes/> : <ClientRoutes/>} {/* Vukonas way*/ }
//   <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
//     <AuthProvider>
//       {/* Common components  placed here */}
//       <Routes>

//       {/* For example, you might have a Landing Page */}

//       {/* Client-side routes */}

//         <Route path="/client/*" element={<ClientRoutes />} />
//         <Route exact path="/" element={<AdminHome />} />

//       {/* Admin-side routes */}

//         <Route path="/admin/*" element={<AdminRoutes />} />
//         <Route path="/Registration" element={<Registration />} />
//         <Route path="./Login" element={<Login />} />

//       </Routes>

//     </AuthProvider>
//   </Container>
// </Router>

//   </div>
// </div>
