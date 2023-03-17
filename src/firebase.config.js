// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'house-marketplace-app-3b0e9.firebaseapp.com',
  projectId: 'house-marketplace-app-3b0e9',
  storageBucket: 'house-marketplace-app-3b0e9.appspot.com',
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// initialize firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
