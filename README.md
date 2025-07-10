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
- `assets/` - Images and sounds

### 3. Configure Firebase (Optional)
If you want to customize the Firebase project:
1. Update the Firebase configuration in `index.html` (line 52-60)
2. Update the same configuration in `firebase-messaging-sw.js` (line 4-12)
3. Replace the VAPID key in `index.html` (line 75)

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

### Technical Details
- Uses Firebase Cloud Messaging (FCM)
- Service worker handles background notifications
- VAPID key configured for web push
- Works on locked devices when installed as PWA

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
├── assets/
│   ├── images/              # Jerry images and app icons
│   └── sounds/              # Audio feedback files
└── README.md               # This file
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

### Customization
- **Colors**: Modify CSS variables in `index.html`
- **Jerry Images**: Replace images in `assets/images/`
- **Sounds**: Replace audio files in `assets/sounds/`
- **Notification Timing**: Modify the timing array in the notification logic

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
1. **Check permissions**: Ensure notifications are allowed in browser settings
2. **HTTPS required**: Push notifications only work on HTTPS sites
3. **PWA installation**: For best results, install as PWA
4. **Console logs**: Check browser developer tools for error messages

### Common Issues:
- **"Permission denied"**: User needs to allow notifications
- **"Service worker not registered"**: Ensure HTTPS and proper file serving
- **"No FCM token"**: Check Firebase configuration and VAPID key

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

