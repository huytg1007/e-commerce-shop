// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCZsopMqmyF8bMzd5wvMbI8Paxykzi6aoE",
    authDomain: "e-commerce-website-2a5fc.firebaseapp.com",
    projectId: "e-commerce-website-2a5fc",
    storageBucket: "e-commerce-website-2a5fc.appspot.com",
    messagingSenderId: "626216638139",
    appId: "1:626216638139:web:015ee0aae2bda302843b9e",
    measurementId: "G-7XSTG4Q3F3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;