function react(span, emoji) {
  const container = span.closest(".reaction-container");
  const label = container.querySelector(".reaction-label");
  const countSpan = container.querySelector(".reaction-count") || document.createElement("span");

  const textMap = {
    '👍': 'Like',
    '❤️': 'Love',
    '😂': 'Haha',
    '😮': 'Wow',
    '😢': 'Sad',
    '😡': 'Angry'
  };


  label.innerHTML = `${emoji} ${textMap[emoji]}`;

  // زيادة العدد
  if (!countSpan.classList.contains("reaction-count")) {
    countSpan.className = "reaction-count";
    container.querySelector(".reaction-btn").appendChild(countSpan);
  }

  let currentCount = parseInt(countSpan.textContent) || 0;
  countSpan.textContent = currentCount + 1;

  // إشعار لما تعمل رياكشن
  addNotification(`<strong>You</strong> reacted ${textMap[emoji]} to a post`);
}