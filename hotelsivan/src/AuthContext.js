// import React, { useContext, useState } from 'react';
// import {auth } from "./components/firebase"
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// const AuthContext = React.createContext()

// export function useAuth(){
//   return useContext(AuthContext)
// }


//  export function AuthProvider( {children}) {
//   const [currentUser , setcurrentUser]= useState()

//   function login(email,password){
//     return createUserWithEmailAndPassword(auth , email , password).then(userCredentials=>{

//     }).catch(error=>{
//       console.log(error)
//     })
    
//   }

//   const value = {
//     currentUser
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
      
    
//   );
// }


