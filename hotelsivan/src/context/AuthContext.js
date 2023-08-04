import React, { useContext, useState, useEffect } from "react";
import { auth } from '../firebase';
import {  createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";



const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading ,setLoading] = useState(true)

// const auth = getAuth(app);


  function signup(email, password) {
    createUserWithEmailAndPassword(auth,email, password)
    
    .then((userCredentials)=>{
        // signed in 
        // const user = userCredentials.user;
    
    }).catch((error)=>{
        // const errorCode = error.code;
        // const errorMessage = error.message;
    });
  }

  // the useEffect function that listens for authentication state changes 
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth,(user) => {
        setCurrentUser(user);
        setLoading(false)
     
    });

    return unsubscriber;
  },[]);

  const value = { currentUser, signup };

  return (
    <div>
    {/* Render children only when loading is false and authentication status is determined */}
    {loading ? <p> Loading ... </p> :(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )}
    </div>
  );
}
//webdevSimplified 20:25 min
export default AuthContext;
