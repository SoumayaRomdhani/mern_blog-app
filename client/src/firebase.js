// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-13017.firebaseapp.com",
  projectId: "mern-blog-13017",
  storageBucket: "mern-blog-13017.appspot.com",
  messagingSenderId: "748083488515",
  appId: "1:748083488515:web:dcf6aaac786cb4f1ee6b36",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
