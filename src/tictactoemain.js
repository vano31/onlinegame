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

let tictactoeDOM = function() {

    let container = document.createElement('div');
    container.classList.add('tiles');
    container.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 600px; height: 600px; display: flex; flex-wrap: wrap; align-items: flex-start');

    for (let y = 2; y >= 0; y--) {

        for (let x = 0; x <= 2; x++) {

            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = `${x}, ${y}`;
            tile.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 200px; height: 200px;');
            container.appendChild(tile);

            //console.log(Grid.coordinates.length);

            tile.addEventListener('click', function(e) {

                let clickedCoordinate = e.target.id;
                

                for (let x = 0; x < Grid.length; x++) {

                    if ((Grid[x].point === clickedCoordinate) && (Grid[x].symbol === '')) {

                        Grid[x].symbol = 'x'
                        e.target.classList.add('xsymbol');
                        console.log(Grid[x]);


                    }

                }

            })


        }

    }
    
    

    return {container};



}


let Grid = grid(3,3);

return {Grid, tictactoeDOM};


//End of Main Function tictactoeMainGame
}

export {tictactoeMainGame}