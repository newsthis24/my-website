// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBPLVWY9YnVXqf8wMaNimVkRKI-Bq4WZFE",
  authDomain: "my-personal-site-116dd.firebaseapp.com",
  projectId: "my-personal-site-116dd",
  storageBucket: "my-personal-site-116dd.firebasestorage.app",
  messagingSenderId: "859932951207",
  appId: "1:859932951207:web:d853f66936870060551182",
  measurementId: "G-7ZY2DVT7CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Login Button
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

  signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;

      alert("Welcome " + user.displayName);

    })
    .catch((error) => {

      console.log(error);

    });

});
