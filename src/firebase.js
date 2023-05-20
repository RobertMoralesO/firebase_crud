// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIpM8JFo23FWKwk38qH3odbryf5L0yJ4",
  authDomain: "crud-firebase-web-i.firebaseapp.com",
  projectId: "crud-firebase-web-i",
  storageBucket: "crud-firebase-web-i.appspot.com",
  messagingSenderId: "1081499393416",
  appId: "1:1081499393416:web:39a1974a0f2fa7203b2e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}