import {
db
}

from "./firebase.js";

import {

collection,
addDoc,
getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// LIKE

const likeBtn=document.getElementById("likeBtn");

const likeCount=document.getElementById("likeCount");

let count=0;

likeBtn.addEventListener("click",async()=>{

count++;

likeCount.innerText=count+" Likes";

await addDoc(

collection(db,"likes"),

{

count:count

}

);

});


// COMMENT

const commentBtn=

document.getElementById("commentBtn");

commentBtn.addEventListener(

"click",

async()=>{

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

const div=

document.createElement(

"div"

);

div.classList.add(

"comment"

);

div.innerText=

input.value;

document

.getElementById(

"commentList"

)

.appendChild(div);

input.value="";

}

);
