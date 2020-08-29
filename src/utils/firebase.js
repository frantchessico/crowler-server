const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAV-an0gnYUc59_4_hFrJMLg30fHjjBtYo",
    authDomain: "electricaguard.firebaseapp.com",
    databaseURL: "https://electricaguard.firebaseio.com",
    projectId: "electricaguard",
    storageBucket: "electricaguard.appspot.com",
    messagingSenderId: "173298613374",
    appId: "1:173298613374:web:26c54706c5868be97e2c2f",
    measurementId: "G-YQPNWNPKNG"
  };

  firebase.initializeApp(firebaseConfig);

  module.exports = {
    AUTH: firebase.auth(),
    FIRESTORE: firebase.firestore(),
    DATABASE: firebase.database(),
    ADMIN: firebase.database()
  }