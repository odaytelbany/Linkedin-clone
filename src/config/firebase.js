import { initializeApp } from "firebase/app"; 
import {  getAuth } from "firebase/auth"; 
import {  getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyB4XwJg6bS3xx-DkhXxFElxrxUgmO3UZ_s",
    authDomain: "linkedin-e2c1e.firebaseapp.com",
    projectId: "linkedin-e2c1e",
    storageBucket: "linkedin-e2c1e.appspot.com",
    messagingSenderId: "578489244687",
    appId: "1:578489244687:web:928286bf51d380cb05d77a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};