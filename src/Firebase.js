// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuGBFwisvnVHsnEwQGMjgDcB1vMt9X-_k",
  authDomain: "home-real-state-project.firebaseapp.com",
  projectId: "home-real-state-project",
  storageBucket: "home-real-state-project.appspot.com",
  messagingSenderId: "841954660907",
  appId: "1:841954660907:web:62bf575b34d15a0278d06e",
  measurementId: "G-EL55G7DYFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore();