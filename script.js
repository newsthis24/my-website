import { db }

from "./firebase.js";

import {

collection,
addDoc,
getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// LIKE SYSTEM

const likeBtn=

document.getElementById("likeBtn");

const likeCount=

document.getElementById("likeCount");


likeBtn.onclick=async()=>{

await addDoc(

collection(db,"likes"),

{

time:Date.now()

}

);

loadLikes();

};


async function loadLikes(){

const snapshot=

await getDocs(

collection(db,"likes")

);

likeCount.innerText=

snapshot.size+" Likes";

}

loadLikes();



// COMMENT SYSTEM

const commentBtn=

document.getElementById("commentBtn");


commentBtn.onclick=async()=>{

const input=

document.getElementById(

"commentInput"

);

if(input.value=="") return;

await addDoc(

collection(db,"comments"),

{

text:input.value

}

);

input.value="";

loadComments();

};


async function loadComments(){

const snapshot=

await getDocs(

collection(db,"comments")

);

const list=

document.getElementById(

"commentList"

);

list.innerHTML="";

snapshot.forEach((doc)=>{

const div=

document.createElement("div");

div.classList.add("comment");

div.innerText=

doc.data().text;

list.appendChild(div);

});

}

loadComments();
