import { startpage } from './startpage.js';

import {initializeApp} from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyB9bHwSXIAmYRFUzUGjrL0ScA011zGM1d0",
    authDomain: "online-game-backend.firebaseapp.com",
    projectId: "online-game-backend",
    storageBucket: "online-game-backend.appspot.com",
    messagingSenderId: "562748717352",
    appId: "1:562748717352:web:2ec3f6dbe3added85bb81d"
};


initializeApp(firebaseConfig);

////////////////////////////////////////////////////////////////////////////////

let {startPageTitle, signInButton, signUpButton, guestButton} = startpage();


document.body.appendChild(startPageTitle);
document.body.appendChild(signInButton);
document.body.appendChild(signUpButton);
document.body.appendChild(guestButton);

signInButton.addEventListener('click', function() {

    console.log('Sign In Clicked')



})



signUpButton.addEventListener('click', function() {
    

    console.log('Sign Up Button Clicked')


})



guestButton.addEventListener('click', function(){

    console.log('Guest Button Clicked')


})