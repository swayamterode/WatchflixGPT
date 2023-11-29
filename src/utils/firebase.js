// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUcKOAxIUN5UHBL3W9qvHbxN5lp3Ym_F8",
    authDomain: "watchflix-gpt.firebaseapp.com",
    projectId: "watchflix-gpt",
    storageBucket: "watchflix-gpt.appspot.com",
    messagingSenderId: "229243341306",
    appId: "1:229243341306:web:6bfb963bd1313c03dfbc43",
    measurementId: "G-208B3VR686"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 