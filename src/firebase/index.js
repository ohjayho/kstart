// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQ3sDeIUNpexXoUISwct2gKW9DjZc1OU",
  authDomain: "kstart-1f019.firebaseapp.com",
  projectId: "kstart-1f019",
  storageBucket: "kstart-1f019.firebasestorage.app",
  messagingSenderId: "232338996260",
  appId: "1:232338996260:web:279dd74d4461ca3b5bacb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
