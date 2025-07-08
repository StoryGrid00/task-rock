importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging.js');

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

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/images/jerry.png',
    badge: '/assets/images/icon-192x192.png',
    tag: 'task-rock-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Tasks'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
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

