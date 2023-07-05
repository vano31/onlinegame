//const { title } = require("process");

let chooseGameLinks = function() {

    let chooseGameSection = document.createElement('div');
    chooseGameSection.id = 'chooseGameSection';

    let chooseHeading = document.createElement('h2');
    chooseHeading.textContent = "Choose A Game To Play";

    let tictactoeButton = document.createElement('button');
    tictactoeButton.classList.add('gameChooseButton');
    tictactoeButton.textContent = 'Tic Tac Toe';

    ////Other chooseGameButtons can be added here later

    let returnButton = document.createElement('button');
    returnButton.id = 'returnButton';
    returnButton.textContent = 'Go Back';

    chooseGameSection.appendChild(chooseHeading);
    chooseGameSection.appendChild(tictactoeButton);
    chooseGameSection.appendChild(returnButton);


    return {chooseGameSection, chooseHeading, tictactoeButton, returnButton}

}

export {chooseGameLinks};