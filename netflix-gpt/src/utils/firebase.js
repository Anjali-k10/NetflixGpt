// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfV9Jnl_4BpCTbXPbNf437w-P2b4XZwRU",
    authDomain: "netflixgpt-ed979.firebaseapp.com",
    projectId: "netflixgpt-ed979",
    storageBucket: "netflixgpt-ed979.firebasestorage.app",
    messagingSenderId: "90023148691",
    appId: "1:90023148691:web:e9ec5cb8f443438c05a166",
    measurementId: "G-LZNYJ8V0G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();