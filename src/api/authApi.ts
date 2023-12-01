import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPpSpOQKqCi6VMYjHCtN1TorgNOx3qIyY",
    authDomain: "community-saver-firebase.firebaseapp.com",
    projectId: "community-saver-firebase",
    storageBucket: "community-saver-firebase.appspot.com",
    messagingSenderId: "357625475661",
    appId: "1:357625475661:web:a6c3b9dafa74754e636204",
    measurementId: "G-N28PGLWLW4"
  };

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(fireApp);


export {fireApp, auth}