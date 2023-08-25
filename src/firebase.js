// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFYdywOmdtM2UEBahxCmbCWD9Iji5VVsk",
  authDomain: "example-store-24467.firebaseapp.com",
  projectId: "example-store-24467",
  storageBucket: "example-store-24467.appspot.com",
  messagingSenderId: "617139917064",
  appId: "1:617139917064:web:33facf12161e6dcdd29cbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
