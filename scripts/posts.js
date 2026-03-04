function addPost() {
  const textInput = document.getElementById("postText");
  const text = textInput.value.trim();
  if (!text) return;

  const postsContainer = document.getElementById("posts");

  const randomImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454391308404-9c8c2d2d2a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];
  const randomImg = randomImages[Math.floor(Math.random() * randomImages.length)];

  const newPost = document.createElement("div");
  newPost.className = "post";

  newPost.innerHTML = `
    <div class="post-header">
      <img src="https://i.pravatar.cc/40?img=12" alt="You">
      <div>
        <strong>Ezzat</strong>
        <span>Just now</span>
      </div>
    </div>
    <p>${text}</p>
    <img src="${randomImg}" alt="Post image" style="width:100%; height:auto; max-height:600px; object-fit:cover; display:block;">
    <div class="post-actions">
      <div class="reaction-container">
        <div class="reaction-btn">
          <span class="reaction-label">👍 Like</span>
          <span class="reaction-count"></span>
          <div class="reactions-box">
            <span onclick="react(this,'👍')">👍</span>
            <span onclick="react(this,'❤️')">❤️</span>
            <span onclick="react(this,'😂')">😂</span>
            <span onclick="react(this,'😮')">😮</span>
            <span onclick="react(this,'😢')">😢</span>
            <span onclick="react(this,'😡')">😡</span>
          </div>
        </div>
      </div>
      <button onclick="toggleComments(this)">💬 Comment <span class="comment-count">0</span></button>
      <button onclick="alert('Share feature coming soon!')">↪ Share</button>
    </div>
    <div class="comments-section">
      <div class="comment-form">
        <img src="https://i.pravatar.cc/32?img=12" alt="You">
        <input type="text" placeholder="Write a comment..." class="comment-input">
        <button onclick="addComment(this)">Post</button>
      </div>
      <div class="comments-list"></div>
    </div>
  `;

  postsContainer.insertBefore(newPost, postsContainer.firstChild);

  textInput.value = "";

  const shortText = text.length > 50 ? text.substring(0, 50) + "..." : text;
  addNotification(`<strong>You</strong> created a new post: "${shortText}"`);
}
function toggleComments(btn) {
  const post = btn.closest(".post");
  const commentsSection = post.querySelector(".comments-section");
  commentsSection.classList.toggle("open");

  // لو فتح، ركز على حقل الكتابة تلقائيًا
  if (commentsSection.classList.contains("open")) {
    const input = commentsSection.querySelector(".comment-input");
    if (input) input.focus();
  }
}

function addComment(btn) {
  const form = btn.closest(".comment-form");
  const input = form.querySelector(".comment-input");
  const text = input.value.trim();
  if (!text) return;

  const commentsList = form.nextElementSibling;

  const newComment = document.createElement("div");
  newComment.className = "comment";
  newComment.innerHTML = `
    <img src="https://i.pravatar.cc/32?img=12" alt="You">
    <div class="comment-content">
      <strong>Ezzat</strong>
      <p>${text}</p>
      <span>Just now</span>
    </div>
  `;

  commentsList.appendChild(newComment);

  input.value = "";

  // زيادة عدد التعليقات جنب الزر
  const post = btn.closest(".post");
  const countSpan = post.querySelector(".comment-count");
  let count = parseInt(countSpan.textContent) || 0;
  countSpan.textContent = count + 1;

  // إشعار
  addNotification(`<strong>You</strong> commented on a post`);
}