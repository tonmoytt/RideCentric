// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ex3gIDW14yOueCjsnOjeI0ZuMm5o788",
  authDomain: "ridecentric-final.firebaseapp.com",
  projectId: "ridecentric-final",
  storageBucket: "ridecentric-final.appspot.com",
  messagingSenderId: "327678593433",
  appId: "1:327678593433:web:6dcc129eef99d816deab08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app