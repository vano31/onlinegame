

////////////Important Creator Functions ///////////////////////////
let formCreator = function(className) {

    let form = document.createElement('form');
    form.classList.add(className);

    return form;

}

let labelAndInputMaker = function(name, inputType, inputid, labelid, labelText, form) {

    let label = document.createElement('label');
    label.setAttribute('for', name);
    label.id = labelid;
    label.textContent = labelText;

    let input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('name', name);
    input.id = inputid;

    //let button = document.createElement('button');
    //button.textContent = buttonName;


    form.appendChild(label);
    form.appendChild(input);
    //form.appendChild(button);

    return {label, input, /*button*/}

}



//////////Start Page Buttons/////////////////////
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


return { startPageTitle, signInButton, signUpButton, guestButton}

}

//////////////Sign In Form/////////////////////////////
let signInForm = formCreator('signInForm');
labelAndInputMaker('username', 'text', 'signInUsername', 'signInUsernameLabel', 'Username', signInForm);
labelAndInputMaker('password', 'text', 'signInPassword', 'signInPasswordLabel', 'Password', signInForm);
let signInButton = document.createElement('button');
signInButton.id = 'signInButton';
signInButton.textContent = 'Sign In';
signInForm.appendChild(signInButton);




///////////Sign Up Form/////////////////////////////////////////
let signUpForm = formCreator('signUpForm');
labelAndInputMaker('username', 'text', 'signUpUsername', 'signUpUsernameLabel', 'Username', signUpForm);
labelAndInputMaker('password', 'text', 'signUpPassword', 'signUpPasswordLabel', 'Password', signUpForm);
let signUpButton = document.createElement('button');
signUpButton.id = 'signUpButton';
signUpButton.textContent = 'Sign Up';
signUpForm.appendChild(signUpButton);


////////////Export/////////////////////////////
export {startpage, signInForm, signUpForm};