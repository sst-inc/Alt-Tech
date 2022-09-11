// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbk8rfH80RBRWCy7pxphnQjrQwY9dWMcg",
  authDomain: "alternate-tech.firebaseapp.com",
  databaseURL: "https://alternate-tech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alternate-tech",
  storageBucket: "alternate-tech.appspot.com",
  messagingSenderId: "1057930360277",
  appId: "1:1057930360277:web:b03619aa1fca5d7002f95c",
  measurementId: "G-4H0N4SPPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);