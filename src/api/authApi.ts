import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY
  };

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(fireApp);
await auth.setPersistence(browserSessionPersistence);

export {fireApp, auth}