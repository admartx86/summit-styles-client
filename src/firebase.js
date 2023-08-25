// src/firebase.js

import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCutjKkz1IXm5nXJwFv9fUkR_AdVf7TeTk",
    authDomain: "summit-styles.firebaseapp.com",
    databaseURL: "https://summit-styles-default-rtdb.firebaseio.com",
    projectId: "summit-styles",
    storageBucket: "summit-styles.appspot.com",
    messagingSenderId: "829581921979",
    appId: "1:829581921979:web:73e82ec42a0e62dbb7639e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };