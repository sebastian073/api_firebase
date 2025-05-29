// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbFbB3X1BcyyyiwcPB1JWyMDxnSiMVE-o",
  authDomain: "api-final-118e5.firebaseapp.com",
  projectId: "api-final-118e5",
  storageBucket: "api-final-118e5.firebasestorage.app",
  messagingSenderId: "56959654016",
  appId: "1:56959654016:web:eb5ba4d5ba399f0bfd2e65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
