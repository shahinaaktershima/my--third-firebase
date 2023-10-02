// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzR1yJHDgg7PupABLFAxhkRK-tFxS8620",
  authDomain: "my-third-firebase-projects.firebaseapp.com",
  projectId: "my-third-firebase-projects",
  storageBucket: "my-third-firebase-projects.appspot.com",
  messagingSenderId: "363995481537",
  appId: "1:363995481537:web:57475a6c1d9267012d9b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;