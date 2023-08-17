import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-modal";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line to import Bootstrap JavaScript

// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

// import 'dotenv/config'
// Modal.setAppElement(document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    
      {/* <BrowserRouter BrowserRouter future={{ v7_startTransition: true }}> */}
      
        <App />
      
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
