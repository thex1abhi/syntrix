
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "syntrix-d5127.firebaseapp.com",
    projectId: "syntrix-d5127",
    storageBucket: "syntrix-d5127.firebasestorage.app",
    messagingSenderId: "233008985820",
    appId: "1:233008985820:web:a7d5c753fac66be004e619"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
