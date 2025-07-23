import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcxK8vwgNu8v6CG3vCiEsrdiobeaegT_Y",
  authDomain: "foodie-app-5dd59.firebaseapp.com",
  projectId: "foodie-app-5dd59",
  storageBucket: "foodie-app-5dd59.firebasestorage.app",
  messagingSenderId: "124466697983",
  appId: "1:124466697983:web:4eb48f2f370ff4b6331eca",
  measurementId: "G-91G9LH0Y92"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;