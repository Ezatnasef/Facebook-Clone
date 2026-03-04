# Facebook Clone

A modern Facebook clone built with vanilla HTML, CSS, and JavaScript. This project replicates the core features of a social media platform including authentication, news feed, posts, reactions, comments, notifications, and dark mode.

![Facebook Clone Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Features

### Authentication
- Login page with email/password fields
- Session management (simple redirect-based)
- Logout functionality

### News Feed
- Interactive stories section with overlay text
- Create new posts with text and random images
- Posts display with author info, timestamp, images, and actions
- Like, react, comment, and share functionality

### Reactions System
- Multiple reaction types: 👍 Like, ❤️ Love, 😂 Haha, 😮 Wow, 😢 Sad, 😡 Angry
- Dynamic reaction counter
- Hover to reveal reaction picker

### Comments
- Add comments to any post
- Live comment counter update
- Expandable/collapsible comments section

### Notifications
- Real-time notification panel
- Unread notification badge
- Tracks: post creation, comments, reactions
- Mark as read on click

### Dark Mode
- Toggle between light and dark themes
- Persistent theme preference during session

### Additional Features
- User profile page with cover photo
- Online contacts sidebar
- Responsive three-column layout
- Smooth animations and transitions

## 📁 Project Structure

```
facebook-clone/
├── index.html          # Login page
├── home.html           # Main news feed
├── profile.html        # User profile page
├── styles/
│   ├── general.css     # Global styles
│   ├── header.css      # Header navigation
│   ├── left-sidebar.css
│   ├── right-sidebar.css
│   ├── feed.css        # News feed styles
│   ├── post.css        # Post component styles
│   ├── dark.css        # Dark mode styles
│   └── notifications.css
└── scripts/
    ├── auth.js         # Authentication logic
    ├── posts.js        # Post creation & comments
    ├── reactions.js    # Reaction system
    ├── dark.js         # Dark mode toggle
    └── notifications.js # Notification system
```

## 🚀 Getting Started

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Ezatnasef/Facebook-Clone.git
   cd facebook-clone
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build process or server required

3. **Login**
   - Enter any credentials (demo mode accepts all inputs)
   - Click "Log In" to access the main feed

## 💻 Usage Guide

### Creating a Post
1. Click on the text input in the "What's on your mind?" section
2. Type your message
3. Click "Post" to publish
4. A random image will be attached automatically

### Reacting to Posts
1. Hover over the "Like" button to reveal reaction options
2. Click any emoji to react
3. The reaction count will update automatically

### Commenting
1. Click the "Comment" button on any post
2. Type your comment in the input field
3. Click "Post" to add your comment

### Using Dark Mode
1. Click the moon icon (🌙) in the header
2. Toggle to switch between light and dark themes

### Viewing Notifications
1. Click the bell icon (🔔) in the header
2. View all recent notifications
3. Click outside the panel to close

## 🎨 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and CSS Variables
- **JavaScript (ES6+)** - Vanilla JavaScript for interactivity
- **No frameworks** - Pure vanilla implementation

## 🔧 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📱 Responsive Design

The layout adapts to different screen sizes:
- **Desktop**: Three-column layout (sidebar, feed, contacts)
- **Tablet**: Two-column layout
- **Mobile**: Single column with collapsible sidebars

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Facebook is a registered trademark of Meta Platforms, Inc.

---

<p align="center">Built with ❤️ using HTML, CSS, and JavaScript</p>
