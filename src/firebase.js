// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI2xThChUyxeIt2ieTy5t27wPGI7daxUM",
    authDomain: "auth-react-c1113.firebaseapp.com",
    projectId: "auth-react-c1113",
    storageBucket: "auth-react-c1113.appspot.com",
    messagingSenderId: "737946992928",
    appId: "1:737946992928:web:02a2c97d37aebbd237d745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app;