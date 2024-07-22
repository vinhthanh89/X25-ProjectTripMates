
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";  

const firebaseConfig = {
    apiKey: "AIzaSyAb-kFCTfuRiVIdOQ67Up19ZmupJoUkSQY",
    authDomain: "tripmates-32f1b.firebaseapp.com",
    projectId: "tripmates-32f1b",
    storageBucket: "tripmates-32f1b.appspot.com",
    messagingSenderId: "252622136361",
    appId: "1:252622136361:web:56135c9f3c0bdfd96f2838",
    measurementId: "G-HPLV6KVLJ0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  if(window.location.hostname === 'localhost'){
    connectFirestoreEmulator(db , 'localhost' , 8080)
  }

export {db} 