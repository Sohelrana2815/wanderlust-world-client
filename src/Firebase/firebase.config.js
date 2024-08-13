// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAEhp8A2-8qWlsKE9D-NpiBJAbJhqNAHE",
  authDomain: "wanderlust-world-e22f6.firebaseapp.com",
  projectId: "wanderlust-world-e22f6",
  storageBucket: "wanderlust-world-e22f6.appspot.com",
  messagingSenderId: "420777023896",
  appId: "1:420777023896:web:77a5565bafb6200e5d73ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
