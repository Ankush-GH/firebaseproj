// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPUPQpNzgtYHCHl8rrSIkP56F10AQx5u0",
    authDomain: "breezeai-17529.firebaseapp.com",
    projectId: "breezeai-17529",
    storageBucket: "breezeai-17529.appspot.com",
    messagingSenderId: "1095080282327",
    appId: "1:1095080282327:web:a0a7f724cf7cf558b18892",
    measurementId: "G-FN0EDZ4LVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);