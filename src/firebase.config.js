// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'house-marketplace-app-3b0e9.firebaseapp.com',
  projectId: 'house-marketplace-app-3b0e9',
  storageBucket: 'house-marketplace-app-3b0e9.appspot.com',
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// initialize firebase
export const db = getFirestore();
