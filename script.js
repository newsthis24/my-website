// LIKE SYSTEM

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeBtn.addEventListener("click", () => {

  count++;

  likeCount.innerText = count + " Likes";

});


// COMMENT SYSTEM

const commentBtn = document.getElementById("commentBtn");

commentBtn.addEventListener("click", () => {

  const input = document.getElementById("commentInput");

  const commentText = input.value;

  if(commentText === ""){
    return;
  }

  const commentList = document.getElementById("commentList");

  const div = document.createElement("div");

  div.classList.add("comment");

  div.innerText = commentText;

  commentList.appendChild(div);

  input.value = "";

});


// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

});


// IMAGE UPLOAD PREVIEW

const imageUpload = document.getElementById("imageUpload");

imageUpload.addEventListener("change", ()=>{

  alert("Image Selected");

});
