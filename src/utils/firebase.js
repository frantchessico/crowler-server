const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'AIzaSyCNUbYeGAHc264imkY1K75TsGFpurCH4j8',
  authDomain: 'maza-gimo.firebaseapp.com',
  databaseURL: 'https://maza-gimo.firebaseio.com',
  projectId: 'maza-gimo',
  storageBucket: 'maza-gimo.appspot.com',
  messagingSenderId: '361134124536',
  appId: '1:361134124536:web:cc73ea204b1314ddd2ba0d',
  measurementId: 'G-98QDEFL14X'
  };

  firebase.initializeApp(firebaseConfig);

  module.exports = {
    AUTH: firebase.auth(),
    FIRESTORE: firebase.firestore()
  }