// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvXOO9dNViftmiGTYns_Epd10fOFzYcSk",
  authDomain: "todo-app-react-a186b.firebaseapp.com",
  projectId: "todo-app-react-a186b",
  storageBucket: "todo-app-react-a186b.appspot.com",
  messagingSenderId: "1039351424313",
  appId: "1:1039351424313:web:b9d65b147d5e37860f74e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
