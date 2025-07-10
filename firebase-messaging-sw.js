importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBLGmPRuqGou8cB_A9QDQ-QF7b8QI",
  authDomain: "task-rock.firebaseapp.com",
  projectId: "task-rock",
  storageBucket: "task-rock.firebasestorage.app",
  messagingSenderId: "359134z310",
  appId: "1:359134z310:web:8edf84d7b9334e4c6e83",
  measurementId: "G-W4CTN7PJ"
});

const messaging = firebase.messaging();

// Handle background messages (when app is not in focus)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received:', payload);
  
  // Use the standardized notification message
  const notificationTitle = 'Task Rock';
  const notificationBody = 'You have task(s) to complete :)';
  
  const notificationOptions = {
    body: notificationBody,
    icon: '/assets/images/jerry.png',
    badge: '/assets/images/icon-192x192.png',
    tag: 'task-rock-notification',
    requireInteraction: true,
    renotify: true,
    silent: false,
    vibrate: [200, 100, 200],
    timestamp: Date.now(),
    data: {
      url: '/',
      timestamp: Date.now(),
      ...payload.data
    },
    actions: [
      {
        action: 'view',
        title: 'View Tasks',
        icon: '/assets/images/icon-192x192.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle messages from main app for sending notifications
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SEND_NOTIFICATION') {
    const payload = event.data.payload;
    
    // Show notification with standardized message
    const notificationTitle = 'Task Rock';
    const notificationBody = 'You have task(s) to complete :)';
    
    const notificationOptions = {
      body: notificationBody,
      icon: '/assets/images/jerry.png',
      badge: '/assets/images/icon-192x192.png',
      tag: 'task-rock-notification',
      requireInteraction: true,
      renotify: true,
      silent: false,
      vibrate: [200, 100, 200],
      timestamp: Date.now(),
      data: payload.data || {}
    };
    
    self.registration.showNotification(notificationTitle, notificationOptions);
    console.log('Task Rock: Push notification sent via service worker');
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Task Rock: Notification clicked', event);
  
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    // Open or focus the Task Rock app
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes('task-rock') && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

