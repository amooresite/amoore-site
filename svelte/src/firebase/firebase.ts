import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXdh9bRplRXelocILZ1973P91uqLGI_r8",
  authDomain: "andrea-moore-d4354.firebaseapp.com",
  projectId: "andrea-moore-d4354",
  storageBucket: "andrea-moore-d4354.appspot.com",
  messagingSenderId: "800936776870",
  appId: "1:800936776870:web:3ef41a0580ebe62deb9067",
  measurementId: "G-ELNEMWKKB9"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);


