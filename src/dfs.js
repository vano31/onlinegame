
let DFS = function(coordinate, symbol, xvector, yvector, direction, count, countMax) { 

    //This function is used for both Tic Toe and Connect 4


    //parameter coordinate is the current coordinate
    //symbol is the symbol of the coordinate
    //xvector is the change of the distance between the next coordinate.x_value and the current coordinate.x_value
    //yvector is the change of the distance between the next coordinate.y_value and the current coordinate.y_value
    //direction lets you know whether we are going forward or backwards with the connection, or whether we are starting the function (forward, backward, start)
    //count tells you how many adjacent points that have the same vector have been found in the opposite direction
    //CountMax tells you how many connections you need to get the win condition- for Connect 4, its 4. for TicTacToe, its 3



    const x_vectors = [1,-1,0]
    
    ////////////////////////////////////////////

    
    const y_vectors = [1, -1, 0]
    


    let adjacents = coordinate.adjacent_points;
    let sameSymbolAdjacents = adjacents.filter(point => (point.symbol === symbol));

    for (let x = 0; x < sameSymbolAdjacents.length; x++) {

        for (let z = 0; z < y_vectors.length; z++) {


            
            
            if ((sameSymbolAdjacents[x].y_value - coordinate.y_value) === y_vectors[z]) {

                

                sameSymbolAdjacents[x].y_vector = y_vectors[z];

                sameSymbolAdjacents[x].y_vector_opposite = (0 - sameSymbolAdjacents[x].y_vector);
                
                break;

            }
            
            

        }  

        

        for (let z = 0; z < x_vectors.length; z++) {

            

            

            if ((sameSymbolAdjacents[x].x_value - coordinate.x_value) === x_vectors[z]) {

                

                sameSymbolAdjacents[x].x_vector = x_vectors[z];

                sameSymbolAdjacents[x].x_vector_opposite = (0 - sameSymbolAdjacents[x].x_vector);
                
                break;
            }
            
            


        }
        
        

        

    }

    


    if (direction === 'start') {

        console.log('run start ')
        

        while (sameSymbolAdjacents.length > 0) {

            let lastSameSymbolAdjacent = sameSymbolAdjacents.pop();
            

            DFS(lastSameSymbolAdjacent, symbol, lastSameSymbolAdjacent.x_vector_opposite, lastSameSymbolAdjacent.y_vector_opposite, 'forward', 0, countMax)

        }


    }

    if (direction === 'forward') {

        let newSameSymbolAdjacents = [];        

        while (sameSymbolAdjacents.length > 0) {

            let lastIndex = sameSymbolAdjacents.length - 1;
            

            if (sameSymbolAdjacents[lastIndex].x_vector_opposite === xvector && sameSymbolAdjacents[lastIndex].y_vector_opposite === yvector ) {

              


                DFS(sameSymbolAdjacents[lastIndex], symbol, sameSymbolAdjacents[lastIndex].x_vector_opposite, sameSymbolAdjacents[lastIndex].y_vector_opposite, 'forward', 0, countMax)
                newSameSymbolAdjacents.push(sameSymbolAdjacents.pop());
                
                return

            }   else {

                
                newSameSymbolAdjacents.push(sameSymbolAdjacents.pop());

                continue
            }


        }

        if (sameSymbolAdjacents.length === 0) {

            for (const sameSymbolCoordinate of newSameSymbolAdjacents) {


                if (sameSymbolCoordinate.x_vector === (xvector) && sameSymbolCoordinate.y_vector === (yvector)) {
    
                    DFS(coordinate, symbol, sameSymbolCoordinate.x_vector, sameSymbolCoordinate.y_vector, 'backward', count + 1, countMax)
                    break
    
    
                }   else {
    
                    continue
                }
    
            }




        }
            


    }



    if (direction === 'backward') {


        if (sameSymbolAdjacents.length > 0) {

            if (count === countMax) {


                if (countMax === 4) {

                    console.log('You Got Connect 4!');

                }   else if (countMax === 3) {

                    console.log('You Got Tic Tac Toe')
                }

                
                return

            }   else {

                for (const sameSymbolCoordinate of sameSymbolAdjacents) {

                    if (sameSymbolCoordinate.x_vector === (xvector) && sameSymbolCoordinate.y_vector === (yvector)) {

        
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