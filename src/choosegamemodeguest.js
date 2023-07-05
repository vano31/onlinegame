
let chooseGameModeGuestLinks = function() {

    let chooseGameModeSection = document.createElement('div');
    chooseGameModeSection.id = 'chooseGameModeSection';

    let chooseModeHeading = document.createElement('h2');
    chooseModeHeading.textContent = "Choose A Game Mode";

    let vsCpuGuest = document.createElement('button');
    vsCpuGuest.classList.add('gameModeChoose');
    vsCpuGuest.id = 'vsCpuGuest';
    vsCpuGuest.textContent = 'Play Against Computer';

    let vsLocalGuest = document.createElement('button');
    vsLocalGuest.classList.add('gameModeChoose');
    vsLocalGuest.id = 'vsLocalGuest';
    vsLocalGuest.textContent = 'Play against A Friend Locally';


    let returnGuestModeButton = document.createElement('button');
    returnGuestModeButton.id = 'returnGuestModeButton';
    returnGuestModeButton.textContent = 'Go Back To Game Selection';

    chooseGameModeSection.appendChild(chooseModeHeading);
    chooseGameModeSection.appendChild(vsCpuGuest);
    chooseGameModeSection.appendChild(vsLocalGuest);
    chooseGameModeSection.appendChild(returnGuestModeButton);


    return {chooseGameModeSection, chooseModeHeading, vsCpuGuest, vsLocalGuest, returnGuestModeButton}

}

export {chooseGameModeGuestLinks};