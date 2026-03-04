let notifications = [];
let notificationCount = 0;

function addNotification(text) {
  const notification = {
    id: Date.now(),
    text: text,
    time: "Just now",
    unread: true
  };

  notifications.unshift(notification);
  notificationCount++;
  updateNotificationBadge();
  renderNotifications();
}

function updateNotificationBadge() {
  const badge = document.getElementById("notificationBadge");
  const unreadCount = notifications.filter(n => n.unread).length;
  
  if (unreadCount > 0) {
    badge.textContent = unreadCount > 99 ? "99+" : unreadCount;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

function renderNotifications() {
  const list = document.getElementById("notificationsList");
  list.innerHTML = "";

  if (notifications.length === 0) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:#65676b;">No notifications yet</div>';
    return;
  }

  notifications.forEach(notif => {
    const item = document.createElement("div");
    item.className = `notification-item ${notif.unread ? "unread" : ""}`;
    item.onclick = () => markAsRead(notif.id);
    
    item.innerHTML = `
      <img src="https://i.pravatar.cc/40?img=${Math.floor(Math.random()*50)}">
      <div>
        <div class="notification-text">${notif.text}</div>
        <div class="notification-time">${notif.time}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

function markAsRead(id) {
  const notif = notifications.find(n => n.id === id);
  if (notif && notif.unread) {
    notif.unread = false;
    updateNotificationBadge();
    renderNotifications();
  }
}

function toggleNotifications() {
  const panel = document.getElementById("notificationsPanel");
  const isShown = panel.classList.toggle("show");
  
  if (isShown) {
    notifications.forEach(n => n.unread = false);
    updateNotificationBadge();
    renderNotifications();
  }
}

document.addEventListener("click", function(e) {
  const panel = document.getElementById("notificationsPanel");
  const icon = document.querySelector(".notification-icon");
  
  if (!panel.contains(e.target) && !icon.contains(e.target)) {
    panel.classList.remove("show");
  }
});