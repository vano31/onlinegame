let player = function(game, amountPlayers, player, turn, lobby, account, status) {



    let gamePlayingNow = game; //currentGame taken from index.js global variable "currentGame"
    let gametype = amountPlayers; //local_multi, online_multi, or vs_comp
    let playertype = player; //guest or named_user or comp; orderRandomizer() uses this to determine if comp is player1 (which always goes first) or player2 (which is always second)
    let turnorder = turn; //player1 (which always goes first) or player2 (which always goes second). Decided by orderRandomizer() in the beginning of the game, which will make host player 1 or player 2 via randomization
    let lobbystatus = lobby; // whether "host" or "recipient" in online game or "none" in local game. Used to determine whether the host or recipient is platyer1 or player2 in an online game
    let onlineaccount = account; //works with onlineUserDecider to attach  an online user account if playing online. will be "none" in a local game
    let currentstatus = status; // works with userStatusUpdater to determine if 


    return {gamePlayingNow, gametype, playertype, turnorder, lobbystatus, onlineaccount, currentstatus}

}


let modeAndGameDecider = function(gameType, currentGame) {

    //currentGame taken from index.js global variable "currentGame"

    let this_Player;
    let other_Player;
    

    //gameType equals either "local_multi", "online_multi", or "vs_comp"

    if (gameType === 'local_mutli') {

        this_Player = player(currentGame, );
        other_Player = player();


    }   else if (gameType === 'vs_comp') {

        this_Player = player(currentGame, );
        other_Player = player(currentGame, );



    }   else if (gameType === 'online_multi') {

        this_Player = player(currentGame, );
        other_Player = player(currentGame, );
        //communicates with databaseConnector() to update this information with Firebase


    }


    return {this_Player, other_Player, /*current_Player*/}

    



}


let onlineUserDecider = function() {

    //Used to assign whether a participant online is or offline. If online, this function attached data of the user account (username, wins for the 3 games, and losses for the 3 games)


}

let orderRandomizer = function() {

    //Used to determine if which player goes first.
    //player1 always goes first, player2 always goes second
    // If online game, uses randomness to determine if "host" or "recipient" from "lobbystatus" parameter is player1.
    //If offline game, uses randomness to determine if "comp" or "user/guest" from "playertype" parameter is player1.

    //communicates with databaseConnector() to update this information with Firebase


}


let turnSwitchChanger = function(answer) {

    //Recieves an "parameter" from a function within one of the 3 games to determine if turns should be switched. 
    //For example, in dots and boxes specifically, there will be 3 functions: boxChecker()--> checks if box is created and produces true or false and returns answer; 
    // Then, (for dot and boxes speciifically) gameStateChecker() --> which checks if player1 or player2 has won the game and returns nothing if game is won to stop the game or the original answer from boxCecker();
    //Lastly, turnSwitchChanger() which takes the "answer" returned from gameStateChecker() if there is one and then decides if the player keeps their turn or not by making the global variable "currentPlayer" either
    //"thisPlayer" or "otherPlayer". In the index.js file, eventListeners for clicking are only initiated if "currentPlayer" === "thisPlayer" 
    // 
    //communicates with databaseConnector() to update this information with Firebase




}


let userStatUpdater = function(currentgame) {

    //if tictactoe
        //Symbol, statusOfCurrentGame
        //check rules for tictactoe for each player profile constantly
        //
        

    //if connect four
        //Color, statusOfCurrentGame
        //Check rules for connect four for each player profile constantly
        //



    //if dotsandboxes
        //Color, score, clickCount, statusOfCurrentGame
        //Check rules for connect four for each player profile constantly


    //if player.account is actually present(meaning association with friebase server exists) than this function communicates with databaseConnector() to update this information with Firebase



}

let databaseConnector = function() {


    //function that connects to the database


}









export {modeAndGameDecider}