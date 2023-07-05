//const { title } = require("process");

let chooseGameLinks = function() {

    let chooseGameSection = document.createElement('div');
    chooseGameSection.id = 'chooseGameSection';

    let chooseHeading = document.createElement('h2');
    chooseHeading.textContent = "Choose A Game To Play";

    let tictactoeButton = document.createElement('button');
    tictactoeButton.classList.add('gameChooseButton');
    tictactoeButton.id = 'tictactoeButton';
    tictactoeButton.textContent = 'Tic Tac Toe';

    let dotandboxButton = document.createElement('button');
    dotandboxButton.classList.add('gameChooseButton');
    dotandboxButton.id = 'dotandboxButton';
    dotandboxButton.textContent = 'Dot and Boxes'

    ////Other chooseGameButtons can be added here later

    let returnButton = document.createElement('button');
    returnButton.id = 'returnButton';
    returnButton.textContent = 'Go Back';

    chooseGameSection.appendChild(chooseHeading);
    chooseGameSection.appendChild(tictactoeButton);
    chooseGameSection.appendChild(dotandboxButton);
    chooseGameSection.appendChild(returnButton);


    return {chooseGameSection, chooseHeading, tictactoeButton, dotandboxButton, returnButton}

}

export {chooseGameLinks};