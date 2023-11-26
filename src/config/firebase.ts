// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE5uCMEp2u3G2qBvkK9oGOrPVWUfjcrcI",
  authDomain: "gdd-toolkit.firebaseapp.com",
  databaseURL: "https://gdd-toolkit-default-rtdb.firebaseio.com",
  projectId: "gdd-toolkit",
  storageBucket: "gdd-toolkit.appspot.com",
  messagingSenderId: "792191653355",
  appId: "1:792191653355:web:9c3cbd9e603ffcb24bb5ae",
  measurementId: "G-RP1HGGTFQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);