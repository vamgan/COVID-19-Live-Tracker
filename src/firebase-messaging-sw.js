var firebase = require("firebase");
  firebase.initializeApp({
    apiKey: "AIzaSyBg3SaW0z7vwrNTN5yqi3Gq1vZGL_gY9as",
    authDomain: "gocovid19-1dbcb.firebaseapp.com",
    databaseURL: "https://gocovid19-1dbcb.firebaseio.com",
    projectId: "gocovid19-1dbcb",
    storageBucket: "gocovid19-1dbcb.appspot.com",
    messagingSenderId: "247646979622",
    appId: "1:247646979622:web:d3559575bc53826a61c8e7",
    measurementId: "G-BQSSTL44TR"
});
  const messaging = firebase.messaging();