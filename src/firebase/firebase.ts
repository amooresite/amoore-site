import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiCQG_yZBbu3fHDjMs46akETaGFKViEAw",
  authDomain: "andrea-moore-site.firebaseapp.com",
  projectId: "andrea-moore-site",
  storageBucket: "andrea-moore-site.appspot.com",
  messagingSenderId: "197839826273",
  appId: "1:197839826273:web:11a6b43e32709c07c26920",
  measurementId: "G-N0MRVV2NPJ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);