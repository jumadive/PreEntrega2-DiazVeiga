import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jumashop-8dc29.firebaseapp.com",
  projectId: "jumashop-8dc29",
  storageBucket: "jumashop-8dc29.appspot.com",
  messagingSenderId: "689766841027",
  appId: "1:689766841027:web:18384fdfe6f1b5aeda4076",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
