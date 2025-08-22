function addComment(){
    const comment = document.getElementById("comment").value;
    const commentBox = document.getElementById("comment-box");
    const p = document.createElement("p");
    p.innerText = comment;
    commentBox.appendChild(p);
    document.getElementById("comment").value = '';
}