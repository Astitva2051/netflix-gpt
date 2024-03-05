// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALFuloli7vogibQIeqnKyjpkpo_MOuSpc",
  authDomain: "netflixgpt-f064d.firebaseapp.com",
  projectId: "netflixgpt-f064d",
  storageBucket: "netflixgpt-f064d.appspot.com",
  messagingSenderId: "345790830096",
  appId: "1:345790830096:web:07270ed092bbbdfaffdc95",
  measurementId: "G-23YHD2K39L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
