import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAQjUqTMdPGA8kRZMylSbKREdw06HMd33I",
    authDomain: "linear-sight-362821.firebaseapp.com",
    projectId: "linear-sight-362821",
    storageBucket: "linear-sight-362821.appspot.com",
    messagingSenderId: "807493054153",
    appId: "1:807493054153:web:2da342bcdb5652407b6718"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// let useremail = document.getElementById('useremail');
// let userepassword = document.getElementById('userepassword');
// let btn = document.getElementById('btn');

// let user1 = "muathirkareem820"
// let user2 = "mutahir786"
// let btn = document.getElementById('btn');

// userlogin.ad


// console.log('hi');
createUserWithEmailAndPassword(auth, "muathirkareem820", "mutahir786")
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
    });