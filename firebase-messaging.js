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

export async function enableNotifications() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey: 'BDG25rX6YAZvxsKIzfbJ0pdKdZfYF0zx4vpyy3BEH8IMjAXN50WpaPSdHPPGxIDntUEc6cpk46na4Fc89HepDts'
    });
    console.log('FCM Token:', token);
    return token;
  } else {
    throw new Error('Notification permission denied');
  }
}

export async function disableNotifications() {
  await deleteToken(messaging);
  console.log('Notifications disabled');
}

onMessage(messaging, (payload) => {
  console.log('Foreground message received:', payload);
});

