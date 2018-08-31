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

db.ref('expenses').on('value', snapshot=>{
    const expenses = [];
    snapshot.forEach(s=>{
        expenses.push({
            id: s.key,
            ...s.val()
        });
    });
    console.log(expenses);
});

db.ref('expenses').on('child_removed', snapshot=>{
    console.log(snapshot.key, snapshot.val());
});