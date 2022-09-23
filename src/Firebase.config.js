import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyB-otuhRJqFWMdrZavI-iEfyRzaF7Ubm00",
    authDomain: "netflix-clone-8339c.firebaseapp.com",
    projectId: "netflix-clone-8339c",
    storageBucket: "netflix-clone-8339c.appspot.com",
    messagingSenderId: "445021648487",
    appId: "1:445021648487:web:ca3b773da4d3ff9a8a06c2",
    measurementId: "G-PRJ9QCFWRL"
  };

  let app= initializeApp(firebaseConfig)

  export let auth= getAuth(app)