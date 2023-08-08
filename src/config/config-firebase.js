import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHFwnSpyAcER_MhWLlaG5LKWHxILZnMhM",
  authDomain: "authentication-3b3ff.firebaseapp.com",
  projectId: "authentication-3b3ff",
  storageBucket: "authentication-3b3ff.appspot.com",
  messagingSenderId: "778237673217",
  appId: "1:778237673217:web:03a0c824f9ca95b1026500",
  measurementId: "G-05FN5C2FN6",
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, analytics, googleProvider };
