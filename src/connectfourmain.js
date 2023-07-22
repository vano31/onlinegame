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

        let connection_coordinates = coordinates.filter(single_coordinate => (single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`]}` || single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`]}` || single_coordinate.point === `${coordinates[x][`x_value`]}, ${coordinates[x][`y_value`] + 1}` || single_coordinate.point === `${coordinates[x][`x_value`]}, ${coordinates[x][`y_value`] - 1}` || single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`] + 1}` || single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`] - 1}` ||  single_coordinate.point === `${coordinates[x][`x_value`] - 1}, ${coordinates[x][`y_value`] + 1}` ||  single_coordinate.point === `${coordinates[x][`x_value`] + 1}, ${coordinates[x][`y_value`] - 1}` ))
        coordinates[x]['adjacent_points'] = connection_coordinates;

    }

    console.log(coordinates);
    return coordinates;

}



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


                        DFS(connectfourGrid[x], 'x', 0, 0, 'start', 0, 4)
                        //dfsChecker(connectfourGrid[x], 0, 0, 0, 0, 'x');
                        console.log(connectfourGrid[x]);
                        
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