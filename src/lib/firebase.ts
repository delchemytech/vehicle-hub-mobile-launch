import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApVzHLtc8YfSxxmFWd2_PwjojtV_e6MtA",
  authDomain: "myvehiclehub.firebaseapp.com",
  projectId: "myvehiclehub",
  storageBucket: "myvehiclehub.firebasestorage.app",
  messagingSenderId: "624803215167",
  appId: "1:624803215167:web:16aa5d26bc6a6b82c2058a",
  measurementId: "G-SFKTCZVL1V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const trackEvent = (eventName: string, params?: { [key: string]: any }) => {
  logEvent(analytics, eventName, params);
};

export { db, analytics };
