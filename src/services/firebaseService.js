import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDINtSSuEjr90WbFZbIGAwT4m3TJqH-5jU",
  authDomain: "quizapppwa-e3095.firebaseapp.com",
  databaseURL: "https://quizapppwa-e3095.firebaseio.com",
  projectId: "quizapppwa-e3095",
  storageBucket: "quizapppwa-e3095.appspot.com",
  messagingSenderId: "813584279598",
  appId: "1:813584279598:web:9ec7bc66124745247bd7bf"
};
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}