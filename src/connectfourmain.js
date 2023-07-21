import './style.css'
import {DFS} from './dfs.js'

let connectfourMainGame = function() {

//Start of Main Function tictactoeMainGame


let section = function(x,y) {

    let symbol = '';
    let x_value = x;
    let y_value = y;
    let icon = 'z';
    let point = `${x_value}, ${y_value}`;
    let visited = 'no';
    let adjacent_points = [];
    let x_vector;
    let y_vector;

    return {x_value, y_value, point, visited, adjacent_points, symbol, icon, x_vector, y_vector}

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


/*
let dfsChecker = function(coordinate, d1, d2, directionX, directionY, symbol) {

    //console.log('dfsChecker has run')
    console.log(d1, d2)

    if (d1 + d2 === 4) {

        console.log(d1, d2);

        console.log('Connect 4 Has Been Reached!');
        d1 = 0;
        d2 = 0;
        return


    }   else if (d1 === 0 && d2 === 0) {

        //console.log(d1,d2)

        let adjacents = coordinate.adjacent_points;
        let sameSymbolAdjacents = adjacents.filter(point => (point.symbol === symbol));
        //console.log(sameSymbolAdjacents);
        //console.log(sameSymbolAdjacents.length);


        if (sameSymbolAdjacents.length > 0) {

            //console.log(true);

            while (sameSymbolAdjacents.length > 0) {


                let singleAdjacentPoint = sameSymbolAdjacents.pop();

                //console.log(connectfourGrid)

                for (let x = 0; x < connectfourGrid.length; x++) {

                    if (singleAdjacentPoint.point === connectfourGrid[x].point) {

                        singleAdjacentPoint.visited = 'yes'

                    }   else {

                        continue
                    }

                }

                //console.log(singleAdjacentPoint);

                directionX = coordinate.x_value - singleAdjacentPoint.x_value;
                directionY = coordinate.y_value - singleAdjacentPoint.y_value;
                d1 += 1;
                console.log(d1, d2);
                dfsChecker(singleAdjacentPoint, d1, d2, directionX, directionY, symbol);
    
            }


        }   else {


            //--> Issue is here: No call to repeat function
            //d2 += 1;
            //dfsChecker(singleAdjacentPoint, singleAdjacentPoint.adjacent_points, d1, d2, directionX, directionY, symbol);
            return


        }


    }   else if (d1 > 0 && d2 === 0) {

        

        let adjacents = coordinate.adjacent_points;
        let sameSymbolAdjacents = adjacents.filter(point => (point.symbol === symbol));

        if (sameSymbolAdjacents.length > 0) {

            while (sameSymbolAdjacents.length > 0) {

                let singleAdjacentPoint = sameSymbolAdjacents.pop();

                for (let x = 0; x < connectfourGrid.length; x++) {

                    if (singleAdjacentPoint.point === connectfourGrid[x].point) {

                        singleAdjacentPoint.visited = 'yes'

                    }   else {

                        continue
                    }

                }


                if (directionX === coordinate.x_value - singleAdjacentPoint.x_value && directionY === coordinate.y_value - singleAdjacentPoint.y_value) {

                    d1 += 1;
                    //console.log(d1, d2);
                    dfsChecker(singleAdjacentPoint, d1, d2, directionX, directionY, symbol);


                }   else {

                    d2 += 1;
                    console.log(d1, d2);
                    dfsChecker(singleAdjacentPoint, d1, d2, directionX, directionY, symbol);


                }

    
            }


        }   else {

            d2 += 1;
            console.log(d1, d2);
            dfsChecker(singleAdjacentPoint, d1, d2, directionX, directionY, symbol);


        }


    }   else if (d2 > 0) {

        let adjacents = coordinate.adjacent_points;
        let sameSymbolAdjacents = adjacents.filter(point => (point.symbol === symbol));

        if (sameSymbolAdjacents.length > 0) {

            while (sameSymbolAdjacents.length > 0) {

                let singleAdjacentPoint = sameSymbolAdjacents.pop();

                for (let x = 0; x < connectfourGrid.length; x++) {

                    if (singleAdjacentPoint.point === connectfourGrid[x].point) {

                        singleAdjacentPoint.visited = 'yes'

                    }   else {

                        continue
                    }

                }


                if (directionX === 0 - (coordinate.x_value - singleAdjacentPoint.x_value) && directionY === 0 - (coordinate.y_value - singleAdjacentPoint.y_value)) {

                    d2 += 1;
                    console.log(d1, d2);
                    dfsChecker(singleAdjacentPoint, d1, d2, directionX, directionY, symbol);


                }   else {

                    return


                }

    
            }

            return


        }


    }


}

*/


/*
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

*/


/*
let connectionChecker = function(coordinate) {

    let markedCoordinates = [];

    //Use coordinate connection checker to find the points that find the point that is futhest away from 

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
*/


let connectfourDOM = function() {

    let connectfourcontainer = document.createElement('div');
    connectfourcontainer.classList.add('tiles');
    connectfourcontainer.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 600px; height: 600px; display: flex; flex-wrap: wrap; align-items: flex-start');

    for (let y = 5; y >= 0; y--) {

        for (let x = 0; x <= 5; x++) {

            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = `${x}, ${y}`;
            tile.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 100px; height: 100px;');
            connectfourcontainer.appendChild(tile);

            //console.log(Grid.coordinates.length);

            tile.addEventListener('click', function clickHandler(e) {

                let clickedCoordinate = e.target.id;
                

                for (let x = 0; x < connectfourGrid.length; x++) {

                    if ((connectfourGrid[x].point === clickedCoordinate) && (connectfourGrid[x].symbol === '')) {

                        connectfourGrid[x].symbol = 'x'
                        e.target.classList.add('xsymbol');


                        DFS(connectfourGrid[x], 'x', 0, 0, 'start', 0)
                        //dfsChecker(connectfourGrid[x], 0, 0, 0, 0, 'x');
                        //console.log(connectfourGrid[x]);
                        //connectionChecker(connectfourGrid[x]);
                        //tile.removeEventListener(clickHandler)

                        



                    }

                }

            })


        }

    }
    
    

    return {connectfourcontainer};



}


let connectfourGrid = grid(6,6);

return {connectfourGrid, connectfourDOM};


//End of Main Function tictactoeMainGame
}

export {connectfourMainGame}