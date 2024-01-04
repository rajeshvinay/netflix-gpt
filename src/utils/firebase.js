// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLkTpNoLAJv5__SIGLyWySrXDNp0IGGWw",
  authDomain: "netflixgpt-d95eb.firebaseapp.com",
  projectId: "netflixgpt-d95eb",
  storageBucket: "netflixgpt-d95eb.appspot.com",
  messagingSenderId: "1026968104178",
  appId: "1:1026968104178:web:8299477b18cb33574a746b",
  measurementId: "G-8QN00HTQ0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()