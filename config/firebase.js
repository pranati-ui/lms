// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvZYntU411SmrUYnoyLUgt68nxsR4LdBg",
  authDomain: "learning-management-syst-574b1.firebaseapp.com",
  projectId: "learning-management-syst-574b1",
  storageBucket: "learning-management-syst-574b1.appspot.com",
  messagingSenderId: "71299354813",
  appId: "1:71299354813:web:c7f9138bfed3b78017a7d4",
  measurementId: "G-HMYRXQNT8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app;

