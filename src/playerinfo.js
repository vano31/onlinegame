let player = function(game, player, turn, lobby, account, status) {


    let gametype = game; //local_multi, online_multi, or vs_comp
    let playertype = player; //guest or named_user or comp
    let turnorder = turn; //player1 (which always goes first) or player2 (which always goes second). Decided by orderRandomizer() in the beginning of the game
    let lobbystatus = lobby; // whether "host" or "recipient" in online game or "none" in local game. Used to determine whether the host or recipient is platyer1 or player2 in an online game
    let onlineaccount = account; //works with onlineUserDecider to attach  an online user account if playing online. will be "none" in a local game
    let currentstatus = status; // works with userStatusUpdater to determine if 


    return {gametype, playertype, turnorder, lobbystatus, onlineaccount, currentstatus}

}


let modeAndGameDecider = function(gameType, currentGame) {

    //current

    let this_Player;
    let other_Player;
    

    //gameType equals either "local_multi", "online_multi", or "vs_comp"

    if (gameType === 'local_mutli') {

        this_Player = player(currentGame, );
        other_Player = player();


    }   else if (gameType === 'vs_comp') {

        this_Player = player();
        other_Player = player();



    }   else if (gameType === 'online_multi') {

        this_Player = player();
        other_Player = player();



    }


    return {this_Player, other_Player, /*current_Player*/}



}


let onlineUserDecider = function() {

    //Used to assign whether a participant online is 


}

let orderRandomizer = function() {




}


let turnSwitchChanger = function() {




}


let userStatUpdater = function(currentgame) {

    //if tictactoe
        //check rules for tictactoe for each player profile constantly


    //if conenct four


    //if dotsandboxes



}






export {modeAndGameDecider}