// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ynoxzGSzpSfaOiBXkenrh0RkdPCNNJw",
  authDomain: "vue-nuxt-server.firebaseapp.com",
  projectId: "vue-nuxt-server",
  storageBucket: "vue-nuxt-server.firebasestorage.app",
  messagingSenderId: "921537505905",
  appId: "1:921537505905:web:29491509fb95667fe849d0",
  measurementId: "G-RSK02PH949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };