# 🪨 Task Rock - PWA Task Manager with Push Notifications

A fun and engaging Progressive Web App (PWA) for task management featuring Jerry the Rock as your virtual companion. Complete with Firebase push notifications that work on locked devices.

## 🎯 Features

- **Virtual Pet Companion**: Jerry the Rock provides motivation and feedback
- **Task Management**: Create, edit, and track tasks with due dates and times
- **Push Notifications**: Firebase-powered notifications at 20, 15, 10, 5, and 2 minutes before tasks are due
- **Progressive Web App**: Install on mobile devices for native app experience
- **Customization**: Unlock accessories for Jerry by completing tasks
- **Health System**: Jerry's health decreases if tasks are overdue
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone [your-repo-url]
cd task-rock
```

### 2. Deploy to Web Server
Upload all files to your web server or hosting platform:
- `index.html` - Main application
- `firebase-messaging-sw.js` - Service worker for push notifications
- `manifest.json` - PWA configuration
- `assets/` - Images and sounds (CRITICAL - must be included)

### 3. HTTPS Required
- Firebase push notifications only work on HTTPS
- Most hosting platforms (GitHub Pages, Netlify, Vercel) provide HTTPS automatically

## 📱 Push Notifications

### How It Works
- **Toggle Control**: Users can enable/disable notifications in Settings
- **Smart Timing**: Notifications sent at 20, 15, 10, 5, and 2 minutes before due time
- **No Spam**: Only sends notifications for upcoming tasks, not for task creation/editing
- **Cross-Platform**: Works on iOS and Android when installed as PWA

### Notification Format
- **Title**: "Task Rock"
- **Message**: "You have task(s) to complete :)"
- **Icon**: Jerry the Rock

### Setup Instructions
1. Open app on HTTPS domain
2. Go to Settings
3. Toggle "Task Notifications" ON
4. Grant permission when prompted
5. Create tasks with due dates/times
6. Receive notifications before tasks are due

## 🛠️ Technical Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **PWA**: Service Worker, Web App Manifest
- **Storage**: LocalStorage for game state and settings
- **Icons**: Custom Jerry the Rock illustrations

## 📁 File Structure

```
task-rock/
├── index.html                 # Main application file
├── firebase-messaging-sw.js   # Service worker for push notifications
├── manifest.json             # PWA manifest
├── assets/                   # CRITICAL - Images and sounds
│   ├── images/              # Jerry images and app icons
│   └── sounds/              # Audio feedback files
├── README.md               # This file
├── CRITICAL_FIXES.md       # Important fix documentation
└── DEPLOYMENT.md           # Deployment instructions
```

## 🎮 How to Play

1. **Create Tasks**: Add tasks with titles, descriptions, and due dates
2. **Complete Tasks**: Check off completed tasks to keep Jerry healthy
3. **Earn Rewards**: Unlock accessories for Jerry by completing tasks
4. **Stay Motivated**: Jerry provides encouragement and feedback
5. **Get Notified**: Enable push notifications to never miss a deadline

## ⚙️ Settings

- **Task Notifications**: Toggle push notifications on/off
- **Jerry Customization**: Equip unlocked accessories
- **Health Monitoring**: Track Jerry's health status

## 🔧 Development

### Local Development
1. Serve files from a local web server (required for service worker)
2. Use HTTPS for testing push notifications
3. Open browser developer tools to monitor console logs

### Testing Push Notifications
```javascript
// In browser console after enabling notifications:
// 1. Create a task due in 20 minutes
// 2. Watch console for notification logs
// 3. Verify notifications appear at correct intervals
```

## 📱 Installation as PWA

### Mobile (iOS/Android)
1. Open the app in Safari (iOS) or Chrome (Android)
2. Tap "Add to Home Screen" or "Install App"
3. The app will appear as a native app icon
4. Push notifications will work even when the app is closed

### Desktop
1. Open the app in Chrome, Edge, or other PWA-compatible browser
2. Look for the install prompt or click the install icon in the address bar
3. The app will install as a desktop application

## 🔔 Notification Troubleshooting

### If notifications aren't working:
1. **Check HTTPS**: Push notifications only work on HTTPS sites
2. **Check permissions**: Ensure notifications are allowed in browser settings
3. **Toggle in Settings**: Make sure notifications are enabled in app Settings
4. **Check console**: Look for Firebase errors in browser developer tools
5. **Test timing**: Create a task due in 20 minutes and wait

### Common Issues:
- **"Permission denied"**: User needs to allow notifications
- **"Service worker not registered"**: Ensure HTTPS and proper file serving
- **"No FCM token"**: Check Firebase configuration and VAPID key
- **Assets not loading**: Ensure assets/ directory is uploaded

## 🎨 Credits

- **Character Design**: Jerry the Rock and accessories
- **Sound Effects**: Task completion and feedback sounds
- **Icons**: Custom PWA icons and badges

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

**Enjoy managing your tasks with Jerry the Rock! 🪨✨**

