import { initializeApp } from "firebase/app";
import { getAuth, indexedDBLocalPersistence, setPersistence } from "firebase/auth";
import { enableLogging } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

enableLogging(true);

const firebaseConfig = {
    apiKey: "AIzaSyCzCfO4KDNMkdifs7hJMCGwmlmFdn9GfhA",
    authDomain: "hotelelyoguinalcira.firebaseapp.com",
    projectId: "hotelelyoguinalcira",
    storageBucket: "hotelelyoguinalcira.appspot.com",
    messagingSenderId: "185686157536",
    appId: "1:185686157536:web:0c1431afc1bbac47010885",
    measurementId: "G-RT99LWDTYF"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, indexedDBLocalPersistence)
  .then(() => {    
  })
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });


export { auth, db, storage };
