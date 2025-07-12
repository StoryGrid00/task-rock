import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, deleteToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBLGmPRuqGou8cB_A9QDQ-QF7b8QI",
  authDomain: "task-rock.firebaseapp.com",
  projectId: "task-rock",
  storageBucket: "task-rock.firebasestorage.app",
  messagingSenderId: "359134z310",
  appId: "1:359134z310:web:8edf84d7b9334e4c6e83",
  measurementId: "G-W4CTN7PJ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// VAPID Key for FCM
const VAPID_KEY = 'BDG25rX6YAZvxsKIzfbJ0pdKdZfYF0zx4vpyy3BEH8IMjAXN50WpaPSdHPPGxIDntUEc6cpk46na4Fc89HepDts';

// Request notification permission and get FCM token
const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY
      });
      console.log('FCM Token:', token);
      // Store token in localStorage for persistence
      localStorage.setItem('fcm-token', token);
      return token;
    } else {
      console.log('Notifications permission not granted');
      throw new Error('Notification permission denied');
    }
  } catch (error) {
    console.error('Error getting FCM token:', error);
    throw error;
  }
};

export async function enableNotifications() {
  return await requestNotificationPermission();
}

export async function disableNotifications() {
  try {
    await deleteToken(messaging);
    localStorage.removeItem('fcm-token');
    console.log('FCM token deleted and notifications disabled');
  } catch (error) {
    console.error('Error disabling notifications:', error);
    throw error;
  }
}

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log('Foreground message received:', payload);
  
  // Show notification even when app is in foreground
  if (payload.notification) {
    const notificationTitle = payload.notification.title || 'Task Rock';
    const notificationOptions = {
      body: payload.notification.body || 'You have a task notification',
      icon: '/assets/images/jerry.png',
      badge: '/assets/images/icon-192x192.png',
      tag: 'task-rock-notification',
      requireInteraction: true
    };
    
    new Notification(notificationTitle, notificationOptions);
  }
});

