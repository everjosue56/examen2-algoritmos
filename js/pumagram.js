 
document.addEventListener('DOMContentLoaded', function() {
const likeBtn = document.querySelector('.like-btn');
const likeCount = document.querySelector('.like-count');
const addCommentBtn = document.querySelector('.add-comment-btn');
const commentInput = document.querySelector('.comment-input');
const commentsContainer = document.querySelector('.comments-container');
   
function likePost() {
    let likes = parseInt(likeCount.textContent);
    likes++;
    likeCount.textContent = likes;
    localStorage.setItem('likes', JSON.stringify(likes));
}

 function addComment() {
const commentText = commentInput.value.trim();
if (commentText !== '') {
const newComment = document.createElement('div');
newComment.classList.add('comment');
newComment.innerHTML = `
                <span class="comment-username">Usuario:</span>
                <span class="comment-text">${commentText}</span>
            `;
commentsContainer.appendChild(newComment);
commentInput.value = '';
localStorage.setItem('commentInput', JSON.stringify(commentInput));
         }
    }

 likeBtn.addEventListener('click', likePost);
 addCommentBtn.addEventListener('click', addComment);
});