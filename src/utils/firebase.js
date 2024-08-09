// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4828d.firebaseapp.com",
  projectId: "blog-4828d",
  storageBucket: "blog-4828d.appspot.com",
  messagingSenderId: "382678742849",
  appId: "1:382678742849:web:6eab1359f539646baa93c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);