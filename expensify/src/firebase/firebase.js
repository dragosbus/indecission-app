import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDR9Or75BPkg9EcoQBhkTFcDCMVbR7Xt7s",
    authDomain: "expensify-a8447.firebaseapp.com",
    databaseURL: "https://expensify-a8447.firebaseio.com",
    projectId: "expensify-a8447",
    storageBucket: "expensify-a8447.appspot.com",
    messagingSenderId: "784333759890"
};

firebase.initializeApp(config);

const db = firebase.database();

export {firebase, db as default};