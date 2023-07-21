//import { deflateSync } from 'zlib';
import './style.css'

let tictactoeMainGame = function() {

//Start of Main Function tictactoeMainGame


let section = function(x,y) {

    let symbol = '';
    let x_value = x;
    let y_value = y;
    let icon = 'z';
    let point = `${x_value}, ${y_value}`;
    let adjacent_points = [];

    return {x_value, y_value, point, adjacent_points, symbol, icon}

}

let grid = function(x_amount, y_amount) {

    let coordinates = [];

    for (let y = 0; y < y_amount; y++) {

        for (let x = 0; x < x_amount; x++) {

            let coordinate = section(x,y);
            coordinates.push(coordinate);

            

        }

    }
  


    for (let x = 0; x < coordinates.length; x++) {

        //let current_coori = coordinates[x];
        let connection_coordinates = coordinates.filter(single_coordinate => (single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`]}` || single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`]}` || single_coordinate.point === `${coordinates[x][`x_value`]}, ${coordinates[x][`y_value`] + 1}` || single_coordinate.point === `${coordinates[x][`x_value`]}, ${coordinates[x][`y_value`] - 1}` || single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`] + 1}` || single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`] - 1}` ||  single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`] + 1}` ||  single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`] - 1}` ))
        coordinates[x]['adjacent_points'] = connection_coordinates;

    }

    console.log(coordinates);
    return coordinates;

}


let dFSChecker = function(coordinate, tally, changeX, changeY) {

    let adjacents = coordinate.adjacent_points;
    let lastOne = adjacents.length - 1;


    if (tally === 2) {

        console.log(`X has reached 3 in a Row`);
        //tally = 1;
        return
        

    }

    if (tally === 0) {

        if (adjacents.length === 0) {

            return

        }   else {

            while (adjacents.length > 0) {

                /*
                console.log(coordinate.x_value);
                console.log(adjacents);
                console.log(lastOne);
                console.log(adjacents[lastOne]);
                */

                let newSlopeX = coordinate.x_value - adjacents[lastOne].x_value;
                let newSlopeY = coordinate.y_value - adjacents[lastOne].y_value;

                if (adjacents[lastOne].symbol === coordinate.symbol) {

                    dFSChecker(adjacents[lastOne], (tally + 1), newSlopeX, newSlopeY);

                    adjacents.pop();
                    lastOne = adjacents.length - 1;

                    
                }   else {

                    adjacents.pop();
                    lastOne = adjacents.length - 1;

                }


            }

        }



    }

    if (tally === 1) {

        if (adjacents.length === 0) {

            return

        }   else {

            while(adjacents.length > 0) {


                /////Overarching if else statement- start

                if (adjacents[lastOne].symbol === coordinate.symbol) {

                    /*
                    let newSlopeX = coordinate.x_value - adjacents[lastOne].x_value;
                    let newSlopeY = coordinate.y_value - adjacents[lastOne].y_value;
                    */

                    if ( (coordinate.x_value - adjacents[lastOne].x_value === changeX) && (coordinate.y_value - adjacents[lastOne].y_value === changeY) ) {

                        let newSlopeX = coordinate.x_value - adjacents[lastOne].x_value;
                        let newSlopeY = coordinate.y_value - adjacents[lastOne].y_value;
                        
                        dFSChecker(adjacents[lastOne], (tally + 1), newSlopeX, newSlopeY);

                        adjacents.pop();
                        lastOne = adjacents.length - 1;


                    }   else {

                        adjacents.pop()
                        lastOne = adjacents.length - 1;

                    }



                }   else {


                    adjacents.pop();
                    lastOne = adjacents.length - 1;

                }


                /////Overarching if else statement- end



               




            }

        }




    }


}

let connectionChecker = function(coordinate) {

    let markedCoordinates = [];

    for (let x = 0; x < coordinate.adjacent_points.length; x++) {

        if ((coordinate.adjacent_points[x].symbol === 'x') && (coordinate.adjacent_points[x].x_value === 0 || coordinate.adjacent_points[x].x_value === 2 || coordinate.adjacent_points[x].y_value === 0 || coordinate.adjacent_points[x].y_value === 2)) {

            markedCoordinates.push(coordinate.adjacent_points[x]);

        }   else {

            continue

        }

    }

    if (markedCoordinates.length > 0) {

        for (let x = 0; x < markedCoordinates.length; x++) {

            dFSChecker(markedCoordinates[x], 0, 0, 0)
    
        }


    }

    



}



let tictactoeDOM = function() {

    let tictactoecontainer = document.createElement('div');
    tictactoecontainer.classList.add('tiles');
    tictactoecontainer.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 600px; height: 600px; display: flex; flex-wrap: wrap; align-items: flex-start');

    for (let y = 2; y >= 0; y--) {

        for (let x = 0; x <= 2; x++) {

            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = `${x}, ${y}`;
            tile.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 200px; height: 200px;');
            tictactoecontainer.appendChild(tile);

            //console.log(Grid.coordinates.length);

            tile.addEventListener('click', function clickHandler(e) {

                let clickedCoordinate = e.target.id;
                

                for (let x = 0; x < tictactoeGrid.length; x++) {

                    if ((tictactoeGrid[x].point === clickedCoordinate) && (tictactoeGrid[x].symbol === '')) {

                        tictactoeGrid[x].symbol = 'x'
                        e.target.classList.add('xsymbol');

                        console.log(tictactoeGrid[x]);
                        connectionChecker(tictactoeGrid[x]);
                        //tile.removeEventListener(clickHandler)



                    }

                }

            })


        }

    }
    
    

    return {tictactoecontainer};



}


let tictactoeGrid = grid(3,3);

return {tictactoeGrid, tictactoeDOM};


//End of Main Function tictactoeMainGame
}

export {tictactoeMainGame}