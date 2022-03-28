import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVb384H6b84ZpBN0LCElUbQC4CKJZLYJo",
    authDomain: "trip-planner-9213c.firebaseapp.com",
    databaseURL: "https://trip-planner-9213c-default-rtdb.firebaseio.com",
    projectId: "trip-planner-9213c",
    storageBucket: "trip-planner-9213c.appspot.com",
    messagingSenderId: "964535624554",
    appId: "1:964535624554:web:1e3dc773e18e1dde85bb13",
    measurementId: "G-B4JK54PR7K"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
export const db = firebase.firestore();


//-------------------------------------Web Version 9-------------------------------------

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDVb384H6b84ZpBN0LCElUbQC4CKJZLYJo",
//   authDomain: "trip-planner-9213c.firebaseapp.com",
//   databaseURL: "https://trip-planner-9213c-default-rtdb.firebaseio.com",
//   projectId: "trip-planner-9213c",
//   storageBucket: "trip-planner-9213c.appspot.com",
//   messagingSenderId: "964535624554",
//   appId: "1:964535624554:web:1e3dc773e18e1dde85bb13",
//   measurementId: "G-B4JK54PR7K"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore();
// export default app;