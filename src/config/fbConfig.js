import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics';
import 'firebase/auth'

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAuEhKNmsiS3Dg5vXVXSOhNJ0g_3ZOGd1M",
  authDomain: "net-ninja-marioplan-81fc0.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-81fc0.firebaseio.com",
  projectId: "net-ninja-marioplan-81fc0",
  storageBucket: "net-ninja-marioplan-81fc0.appspot.com",
  messagingSenderId: "348048104050",
  appId: "1:348048104050:web:8dc89dfd21c12fb50400eb",
  measurementId: "G-V4VD9HKQTZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
firebase.analytics();

export default firebase;