// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-JLf85BKnS-ml1CSbWcZdqbGLcFIeBg",
  authDomain: "blogsite-hao.firebaseapp.com",
  projectId: "blogsite-hao",
  storageBucket: "blogsite-hao.firebasestorage.app",
  messagingSenderId: "853991248040",
  appId: "1:853991248040:web:63d4b7c1c793e756f1729d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;