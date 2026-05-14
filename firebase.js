import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey:"AIzaSyBPLVWY9YnVXqf8wMaNimVkRKI-Bq4WZFE",

authDomain:"my-personal-site-116dd.firebaseapp.com",

projectId:"my-personal-site-116dd",

storageBucket:"my-personal-site-116dd.firebasestorage.app",

messagingSenderId:"859932951207",

appId:"1:859932951207:web:d853f66936870060551182"

};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app);

const provider=new GoogleAuthProvider();

const loginBtn=document.getElementById("loginBtn");

loginBtn.addEventListener("click",()=>{

signInWithPopup(auth,provider)

.then((result)=>{

alert("Welcome "+result.user.displayName);

})

.catch(console.log);

});
