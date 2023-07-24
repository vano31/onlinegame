import { startpage, signInForm, signUpForm} from './startpage.js';
import { chooseGameLinks } from './choosegameguest.js';
import { chooseGameModeGuestLinks } from './choosegamemodeguest.js';
import { tictactoeMainGame } from './tictactoemain.js';
import { connectfourMainGame } from './connectfourmain.js';
import { dotandboxesMainGame } from './dotandboxes.js';
import './style.css';

///////////Firebase Initialization//////////////
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyB9bHwSXIAmYRFUzUGjrL0ScA011zGM1d0",
    authDomain: "online-game-backend.firebaseapp.com",
    projectId: "online-game-backend",
    storageBucket: "online-game-backend.appspot.com",
    messagingSenderId: "562748717352",
    appId: "1:562748717352:web:2ec3f6dbe3added85bb81d"
};


initializeApp(firebaseConfig);


////////////StartPage Information///////////////
let {startPageTitle, signInButton, signUpButton, guestButton} = startpage();
let {chooseGameSection, chooseHeading, tictactoeButton, connectfourButton, dotandboxButton, returnGuestButton} = chooseGameLinks();
let {chooseGameModeSection, chooseModeHeading, vsCpuGuest, vsLocalGuest, returnGuestModeButton} = chooseGameModeGuestLinks();
//let {string1} = tictactoeMainGame(); 
let {tictactoeGrid, tictactoeDOM} = tictactoeMainGame();
let {connectfourGrid, connectfourDOM} = connectfourMainGame()
let {dotandboxesVertexGrid, dotandboxesBoxGrid, dotandboxesDOM} = dotandboxesMainGame()

let starterButtons = document.createElement('div');
starterButtons.id = 'starterButtons';
document.body.appendChild(starterButtons);


starterButtons.appendChild(startPageTitle);
starterButtons.appendChild(signInButton);
starterButtons.appendChild(signUpButton);
starterButtons.appendChild(guestButton);

////////////////////////////////////////////////////////

let {tictactoecontainer} = tictactoeDOM();
let {connectfourcontainer} = connectfourDOM();
let {dblargeContainer, boxContainer, vertexContainer} = dotandboxesDOM()

let gamecontainer;
let gameGrid;


/////////////////////////////////////////////////////////




//////GameSpace Div- Purpose is to Use this space as a container for whatever game of forms are loaded///////////
let gameSpace = document.createElement('div');
gameSpace.id = 'gameSpace';
document.body.appendChild(gameSpace);



signInButton.addEventListener('click', function() {

    gameSpace.appendChild(signInForm);

    if (gameSpace.contains(signUpForm)) {
        gameSpace.removeChild(signUpForm);
    }   else if (gameSpace.contains(chooseGameSection)) {
        gameSpace.removeChild(chooseGameSection);
    }
    console.log('Sign In Clicked');

})



signUpButton.addEventListener('click', function() {

    gameSpace.appendChild(signUpForm);

    if (gameSpace.contains(signInForm)) {
        gameSpace.removeChild(signInForm)
    }   else if (gameSpace.contains(chooseGameSection)) {
        gameSpace.removeChild(chooseGameSection);
    }
    console.log('Sign Up Button Clicked');



})



guestButton.addEventListener('click', function(){


    if (gameSpace.contains(signInForm)) {
        gameSpace.removeChild(signInForm)
    }

    if (gameSpace.contains(signUpForm)) {
        gameSpace.removeChild(signUpForm);
    }
    
    gameSpace.appendChild(chooseGameSection);
    starterButtons.removeChild(startPageTitle);
    starterButtons.removeChild(signInButton);
    starterButtons.removeChild(signUpButton);
    starterButtons.removeChild(guestButton);


    console.log('Guest Button Clicked');

    

})

returnGuestButton.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameSection);

    starterButtons.appendChild(startPageTitle);
    starterButtons.appendChild(signInButton);
    starterButtons.appendChild(signUpButton);
    starterButtons.appendChild(guestButton);


    console.log('Return Button Clicked');



})


returnGuestModeButton.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameModeSection);
    gameSpace.appendChild(chooseGameSection);


})

tictactoeButton.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameSection);
    gameSpace.appendChild(chooseGameModeSection);

    gamecontainer = tictactoecontainer;
    gameGrid = tictactoeGrid;


});


connectfourButton.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameSection);
    gameSpace.appendChild(chooseGameModeSection);

    gamecontainer = connectfourcontainer;
    gameGrid = connectfourGrid;


})

dotandboxButton.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameSection);
    gameSpace.appendChild(chooseGameModeSection);

    gamecontainer = dblargeContainer;
    gameGrid = dotandboxesBoxGrid;


})


vsLocalGuest.addEventListener('click', function() {

    gameSpace.removeChild(chooseGameModeSection);
    //gameSpace.appendChild(string1);
    gameSpace.appendChild(gamecontainer);

    console.log(gameGrid);



})











