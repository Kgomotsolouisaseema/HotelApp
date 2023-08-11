import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {getAnalytics} from "firebase/analytics"
import { getStorage } from 'firebase/storage';
// console.log(process.env.REACT_APP_FIREBASE_API_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyBmxTWGRwTyUOjNOfC7svmPu-vbDupXSz4",
  authDomain: "hotelsivan-developement.firebaseapp.com",
  projectId: "hotelsivan-developement",
  storageBucket: "hotelsivan-developement.appspot.com",
  messagingSenderId: "568446124484",
  appId: "1:568446124484:web:a28dc497099b90a584e491",
  measurementId: "G-ZT5WQQ0BZD"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db =getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);


export default app;

