// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOQIp6aKEboPXrkbB94IJ4dwaAkn5bqVE",
  authDomain: "travelapp-4151e.firebaseapp.com",
  projectId: "travelapp-4151e",
  storageBucket: "travelapp-4151e.appspot.com",
  messagingSenderId: "116239282427",
  appId: "1:116239282427:web:045b17ecf1cf546b1fc05e",
  measurementId: "G-G60T4H5G33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
