// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPopup, signInWithPhoneNumber, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD60e5k5chdw6xQ7X6_GDOzJ5k3JQG0MkQ",
  authDomain: "oliveplates-e5dbf.firebaseapp.com",
  projectId: "oliveplates-e5dbf",
  storageBucket: "oliveplates-e5dbf.appspot.com",
  messagingSenderId: "692806213423",
  appId: "1:692806213423:web:49d5c89dd9e238a3c38bda",
  measurementId: "G-K26J9QV5J7"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier, signOut };
