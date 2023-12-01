// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRfQ6LDnh04MyYiSu0BUhwRAI6RIZ9UM",
  authDomain: "watchflix-ai.firebaseapp.com",
  projectId: "watchflix-ai",
  storageBucket: "watchflix-ai.appspot.com",
  messagingSenderId: "72712492500",
  appId: "1:72712492500:web:25e9e9446b28b4dea07241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 