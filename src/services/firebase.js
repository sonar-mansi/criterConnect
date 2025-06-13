// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5z-OW2UFGZBHSVo-JRtNsPD1alDT3kts",
  authDomain: "criterconnect.firebaseapp.com",
  projectId: "criterconnect",
  storageBucket: "criterconnect.firebasestorage.app",
  messagingSenderId: "84657719473",
  appId: "1:84657719473:web:4c0d3f935995ca69fc7a90",
  measurementId: "G-Q87W159QYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);