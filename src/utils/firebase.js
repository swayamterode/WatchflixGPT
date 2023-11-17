// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmduXYRjU8IprTTDPb9TWneeaDYxduI8s",
    authDomain: "netflixgpt-902a6.firebaseapp.com",
    projectId: "netflixgpt-902a6",
    storageBucket: "netflixgpt-902a6.appspot.com",
    messagingSenderId: "323277988929",
    appId: "1:323277988929:web:ffecebd5e8adc9d92112c0",
    measurementId: "G-V3WE69ZYES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 