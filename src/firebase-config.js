import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAtiPqQ6THNm7I8QfA40gFIxCD-ngEwzlc",
    authDomain: "test-2a84c.firebaseapp.com",
    projectId: "test-2a84c",
    storageBucket: "test-2a84c.appspot.com",
    messagingSenderId: "431269666306",
    appId: "1:431269666306:web:71d5bfb1e3525b83ea111b",
    measurementId: "G-X3BZZV78TD"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

