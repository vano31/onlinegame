let startpage = function() {


let startPageTitle = document.createElement('h1');
startPageTitle.id = 'startPageTitle'
startPageTitle.textContent = 'Welcome to The Online Game Corner! '

   
let signInButton = document.createElement('button');
signInButton.id = 'signIn';
signInButton.textContent = 'Sign In';

let signUpButton = document.createElement('button');
signUpButton.id = 'signUp';
signUpButton.textContent = 'Sign Up'

let guestButton = document.createElement('button');
guestButton.id = 'guest';
guestButton.textContent = 'Guest'






//////////////////
return { startPageTitle, signInButton, signUpButton, guestButton}

}

export {startpage};