// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4FPCqHkxytLTCFZy1uD1qARnPB1pZmsw",
    authDomain: "iam-10604.firebaseapp.com",
    databaseURL: "https://iam-10604-default-rtdb.firebaseio.com",
    projectId: "iam-10604",
    storageBucket: "iam-10604.appspot.com",
    messagingSenderId: "184413273535",
    appId: "1:184413273535:web:120f3793f0f2c5b206750a",
    measurementId: "G-71HDWW9J4R"
  };

const appEnv = 'local';
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

let auth = null;
if (appEnv === 'develop'){
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6LfjshEpAAAAACY1k2TfNfeF6gWNni46gQYpqn1h'),
  
        // Optional argument. If true, the SDK automatically refreshes App Check
        // tokens as needed.
        isTokenAutoRefreshEnabled: true
    });

    console.log('app check', appCheck);
    // Initialize Firebase Authentication and get a reference to the service
    auth = getAuth(appCheck.app);
} else {
    auth = getAuth(app);
}

const googleProvider = new GoogleAuthProvider();

export {auth, analytics, googleProvider};