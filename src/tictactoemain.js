let tictactoeMainGame = function() {

    /*
    let string1 = document.createElement('h2');
    string1.textContent = 'Tic Tac Toe, 3 In A Row';
    return {string1};
    */

//Start of Main Function tictactoeMainGame


let section = function(x,y) {

    let symbol = '';
    let x_value = x;
    let y_value = y;
    let icon = 'z';
    let point = `${x_value}, ${y_value}`;
    let adjacent_points = [];

    return {x_value, y_value, point, adjacent_points}

}

let grid = function(x_amount, y_amount) {

    let coordinates = [];
    for (let y = 0; y < y_amount; y++) {

        for (let x = 0; x < x_amount; x++) {

            let coordinate = section(x,y);
            coordinates.push(coordinate);

            

            for (let x = 0; x < coordinates.length; x++) {

                if (coordinates[x].point === `${coordinates[x].x_value + 1}, ${coordinates[x].y_value}` || coordinates[x].point === `${coordinates[x].x_value - 1}, ${coordinates[x].y_value}` || coordinates[x].point === `${coordinates[x].x_value}, ${coordinates[x].y_value + 1}` || coordinates[x].point === `${coordinates[x].x_value}, ${coordinates[x].y_value - 1}` || coordinates[x].point === `${coordinates[x].x_value + 1}, ${coordinates[x].y_value + 1}` || coordinates[x].point === `${coordinates[x].x_value - 1}, ${coordinates[x].y_value - 1}`  ) {

                    coordinate.adjacent_points.push(coordinates[x]);

                }   else {

                    continue
                }

            }

            

            //coordinates.push(coordinate)

        }

    }

    return coordinates;

}


let Grid = grid(3,3);

return {Grid};









//End of Main Function tictactoeMainGame
}

export {tictactoeMainGame}