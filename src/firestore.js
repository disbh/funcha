// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-oBH0213JNWBXljyx1cEsYTjdF8at_yI",
  authDomain: "funcha-e9f66.firebaseapp.com",
  projectId: "funcha-e9f66",
  storageBucket: "funcha-e9f66.appspot.com",
  messagingSenderId: "856299509971",
  appId: "1:856299509971:web:44259b9b65d8a32ab81c26",
  measurementId: "G-W7MNBEDGEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
// console.log(db)
const articles = collection(db, "articles")
// console.log(articles) 

export default articles
