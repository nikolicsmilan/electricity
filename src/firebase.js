// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJpRQUTDECdu5O6496LgojJihvbTqVTas",
  authDomain: "electricity-2c5db.firebaseapp.com",
  projectId: "electricity-2c5db",
  storageBucket: "electricity-2c5db.appspot.com",
  messagingSenderId: "631608263328",
  appId: "1:631608263328:web:3dc3db1bdab0251453bfc5",
  measurementId: "G-P7KEVVF61V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);