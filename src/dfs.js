
let DFS = function(coordinate, symbol, xvector, yvector, direction, count, countMax) { 


    //parameter coordinate is the current coordinate
    //symbol is the symbol of the coordinate
    //xvector is the change of the distance between the next coordinate.x_value and the current coordinate.x_value
    //yvector is the change of the distance between the next coordinate.y_value and the current coordinate.y_value
    //direction lets you know whether we are going forward or backwards with the connection, or whether we are starting the function (forward, backward, start)
    //count tells you how many adjacent points that have the same vector have been found in the opposite direction
    //CountMax tells you how many connections you need to get the win condition- for Connect 4, its 4. for TicTacToe, its 3


    //let x_vectors = [];

    const x_vectors = [1,-1,0]
    //console.log(x_vectors)

    /*

    let x_vector_right = 1;
    let x_vector_left = -1;
    let x_vector_neutral = 0;

    x_vectors.push(x_vector_right);
    x_vectors.push(x_vector_left);
    x_vectors.push(x_vector_neutral);
    */

    ////////////////////////////////////////////


    //let y_vectors = [];
    const y_vectors = [1, -1, 0]
    //console.log(y_vectors)


    /*

    let y_vector_up = 1;
    let y_vector_down = -1;
    let y_vector_neutral = 0;

    y_vectors.push(y_vector_up);
    y_vectors.push(y_vector_down);
    y_vectors.push(y_vector_neutral);
    */


    let adjacents = coordinate.adjacent_points;
    let sameSymbolAdjacents = adjacents.filter(point => (point.symbol === symbol));

    for (let x = 0; x < sameSymbolAdjacents.length; x++) {

        for (let z = 0; z < y_vectors.length; z++) {


            //console.log(y_vectors)
            //console.log(y_vectors[0])
            //console.log(y_vectors[1])
            //console.log(y_vectors[2])
            //console.log(y_vectors[z])
            //console.log(sameSymbolAdjacents[x].y_value)
            //console.log(coordinate.y_value)

            
            
            if ((sameSymbolAdjacents[x].y_value - coordinate.y_value) === y_vectors[z]) {

                //console.log(yvector)

                sameSymbolAdjacents[x].y_vector = y_vectors[z];

                sameSymbolAdjacents[x].y_vector_opposite = (0 - sameSymbolAdjacents[x].y_vector);
                //console.log(sameSymbolAdjacents[x].y_vector);
                //console.log(sameSymbolAdjacents[x])
                break;

            }
            
            

        }  

        

        for (let z = 0; z < x_vectors.length; z++) {

            

            //console.log(x_vectors)
            //console.log(x_vectors[z])
            //console.log(sameSymbolAdjacents[x].x_value)
            //console.log(coordinate.x_value)

            

            if ((sameSymbolAdjacents[x].x_value - coordinate.x_value) === x_vectors[z]) {

                //console.log(xvector)

                sameSymbolAdjacents[x].x_vector = x_vectors[z];

                sameSymbolAdjacents[x].x_vector_opposite = (0 - sameSymbolAdjacents[x].x_vector);
                //console.log(sameSymbolAdjacents[x].x_vector)
                //console.log(sameSymbolAdjacents[x]);
                break;
            }
            
            


        }
        
        

        

    }

    
    /*
    for (let x = 0; x < sameSymbolAdjacents.length; x++) {

        for (let z = 0; z < y_vectors.length; z++) {

            console.log(y_vectors)
            console.log(y_vectors[z])

            //console.log(sameSymbolAdjacents[x].y_value)
            //console.log(coordinate.y_value)

            if ((sameSymbolAdjacents[x].y_value - coordinate.y_value) === 0 - y_vectors[z]) {

                //console.log(yvector)

                sameSymbolAdjacents[x].y_vector_opposite = 0 - y_vectors[z];
                //console.log(sameSymbolAdjacents[x].y_vector_opposite)
                break;

            }

        }  

        for (let z = 0; z < x_vectors.length; z++) {


            console.log(x_vectors)
            console.log(x_vectors[z])

            //console.log(sameSymbolAdjacents[x].x_value)
            //console.log(coordinate.x_value)

            if ((sameSymbolAdjacents[x].x_value - coordinate.x_value) === 0 - x_vectors[z]) {

                //console.log(xvector)

                sameSymbolAdjacents[x].x_vector_opposite = 0 - x_vectors[z]
                //console.log(sameSymbolAdjacents[x].x_vector_opposite)
                break
            }


        }   

    }
    */

    
    

    

    if (direction === 'start') {

        console.log('run start ')
        //console.log(coordinate);

        while (sameSymbolAdjacents.length > 0) {

            let lastSameSymbolAdjacent = sameSymbolAdjacents.pop();

            //console.log(lastSameSymbolAdjacent);
            //console.log(coordinate);
            

            DFS(lastSameSymbolAdjacent, symbol, lastSameSymbolAdjacent.x_vector_opposite, lastSameSymbolAdjacent.y_vector_opposite, 'forward', 0, countMax)

        }


    }

    if (direction === 'forward') {

        let newSameSymbolAdjacents = [];

        //console.log('run forward')
        //console.log(coordinate);

        

        while (sameSymbolAdjacents.length > 0) {

            let lastIndex = sameSymbolAdjacents.length - 1;
            //console.log(sameSymbolAdjacents[lastIndex]);

            
            //console.log(xvector)
            //console.log(yvector)
            //console.log(sameSymbolAdjacents[x]);
            //console.log(coordinate)

            if (sameSymbolAdjacents[lastIndex].x_vector_opposite === xvector && sameSymbolAdjacents[lastIndex].y_vector_opposite === yvector ) {

                //console.log(xvector)
                //console.log(yvector)
                //console.log(sameSymbolAdjacents[x]);
                //console.log(coordinate)



                DFS(sameSymbolAdjacents[lastIndex], symbol, sameSymbolAdjacents[lastIndex].x_vector_opposite, sameSymbolAdjacents[lastIndex].y_vector_opposite, 'forward', 0, countMax)
                newSameSymbolAdjacents.push(sameSymbolAdjacents.pop());
                //console.log(coordinate);
                //console.log(sameSymbolAdjacents);
                //console.log(newSameSymbolAdjacents);
                return

            }   else {

                //console.log('Whipp');
                newSameSymbolAdjacents.push(sameSymbolAdjacents.pop());
                //console.log(coordinate);
                //console.log(sameSymbolAdjacents);

                continue
            }


        }

        if (sameSymbolAdjacents.length === 0) {

            for (const sameSymbolCoordinate of newSameSymbolAdjacents) {

                //console.log('Booyah')
                //console.log(newSameSymbolAdjacents)
                //console.log(sameSymbolCoordinate);
                //console.log(coordinate);
                //console.log(xvector);
                //console.log(yvector);

                if (sameSymbolCoordinate.x_vector === (xvector) && sameSymbolCoordinate.y_vector === (yvector)) {
    
                    DFS(coordinate, symbol, sameSymbolCoordinate.x_vector, sameSymbolCoordinate.y_vector, 'backward', count + 1, countMax)
                    break
    
    
                }   else {
    
                    continue
                }
    
            }

            //return




        }
            


    }



    if (direction === 'backward') {

        //console.log('run backward');
        //console.log(coordinate);


        if (sameSymbolAdjacents.length > 0) {

            if (count === countMax) {

                console.log('You Got Connect 4!');
                return

            }   else {

                for (const sameSymbolCoordinate of sameSymbolAdjacents) {

                    if (sameSymbolCoordinate.x_vector === (xvector) && sameSymbolCoordinate.y_vector === (yvector)) {

                        //console.log('checking');
                        //console.log(coordinate);
                        //console.log(sameSymbolCoordinate)
                        //console.log(xvector);
                        //console.log(yvector)
        
                        DFS(sameSymbolCoordinate, symbol, sameSymbolCoordinate.x_vector, sameSymbolCoordinate.y_vector, 'backward', count + 1, countMax)
                        break
        
        
                    }   else {
        
                        continue
                    }
        
                }

            }


        }   else {


            return

        }
            


    }

    


}

export {DFS}