// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvkXpHDRdu-0gTW8joxJQX_sUpwe9T268",
  authDomain: "bhg-cloud.firebaseapp.com",
  projectId: "bhg-cloud",
  storageBucket: "bhg-cloud.appspot.com",
  messagingSenderId: "104316574452",
  appId: "1:104316574452:web:74f198023a1e51f738dca1",
  measurementId: "G-K46VJGF4VX"};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Authentication persistence enabled');
  })
  .catch((error) => {
    console.error('Error enabling authentication persistence:', error);
  });


export { db, storage,auth };

