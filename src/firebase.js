import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhN4xnJg3Wr0MG-NS7kiBcuFPpDOB2u68",
  authDomain: "quizapppwa-5b27e.firebaseapp.com",
  databaseURL: "https://quizapppwa-5b27e.firebaseio.com",
  projectId: "quizapppwa-5b27e",
  storageBucket: "quizapppwa-5b27e.appspot.com",
  messagingSenderId: "746096314589",
  appId: "1:746096314589:web:3457c80d7018c363d93334"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;