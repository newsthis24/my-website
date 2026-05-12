const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeBtn.addEventListener("click", () => {
  count++;
  likeCount.innerText = count + " Likes";
});

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
