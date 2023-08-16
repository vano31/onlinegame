import './style.css';

let dotandboxesMainGame = function() {

let vertex = function(x,y) {

    let x_value = x;
    let y_value = y;
    let coordinate = `${x}, ${y}`;
    let adjacent_vertices = [];
    //let natural_edges = [];
    
    return {x_value, y_value, coordinate, adjacent_vertices, /*natural_edges*/}

}


let box = function(x,y) {

    let x_value = x;
    let y_value = y;
    let coordinate = `${x}, ${y}`;
    let adjacent_boxes = [];
    let color = ``;
    let connected_vertices = [];
    let unit_vertex;
    //let connected_edges = [];
    let top_edge = [];
    let bottom_edge = [];
    let left_edge = [];
    let right_edge = [];
    let edge_count;


    return {x_value, y_value, coordinate, adjacent_boxes, color, connected_vertices, unit_vertex, top_edge, bottom_edge, left_edge, right_edge, edge_count /*connected_edges*/}



}


let vertexgrid = function(x_amount, y_amount) {

    let vertices = [];

    for (let y = 0; y < y_amount; y++) {

        for (let x = 0; x < x_amount; x++) {

            let vertexx = vertex(x,y);

            vertices.push(vertexx);

        }


    }

    for (let x = 0; x < vertices.length; x++) {

        let connection_vertices = vertices.filter(single_vertex => (single_vertex.coordinate === `${vertices[x][`x_value`] + 1}, ${vertices[x][`y_value`]}` || single_vertex.coordinate === `${vertices[x][`x_value`] - 1}, ${vertices[x][`y_value`]}` || single_vertex.coordinate === `${vertices[x][`x_value`]}, ${vertices[x][`y_value`] + 1}` || single_vertex.coordinate === `${vertices[x][`x_value`]}, ${vertices[x][`y_value`] - 1}`))
        vertices[x]['adjacent_vertices'] = connection_vertices;

    }


    console.log(vertices);
    return vertices;

}


let boxgrid = function(x_amount, y_amount) {

    let boxes = [];

    for (let y = 0; y < y_amount; y++) {

        for (let x = 0; x < x_amount; x++) {

            let boxx = box(x,y);
            boxes.push(boxx);

        }


    }

    for (let x = 0; x < boxes.length; x++) {

        let connection_boxes = boxes.filter(single_box => (single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`]}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`]}` || single_box.coordinate === `${boxes[x][`x_value`]}, ${boxes[x][`y_value`] + 1}` || single_box.coordinate === `${boxes[x][`x_value`]}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`] + 1}` || single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`] + 1}`));
        boxes[x]['adjacent_boxes'] = connection_boxes;

    }


    console.log(boxes);
    return boxes;





}


let unitVertexToBox = function(vertexGrid, boxGrid) {


    boxGrid.forEach(box => {

        for (let x = 0; x < vertexGrid.length; x++) {

            if (vertexGrid[x].coordinate === box.coordinate) {

                box.unit_vertex = vertexGrid[x];
                break

            }
            
        }
    })

}


let setBoxConnectedVertices = function(vertexGrid, boxGrid) {

    boxGrid.forEach(box => {

        for (let x = 0; x < vertexGrid.length; x++) {

            if (vertexGrid[x].coordinate === `${box.x_value}, ${box.y_value}` || vertexGrid[x].coordinate === `${box.x_value + 1}, ${box.y_value}` || vertexGrid[x].coordinate === `${box.x_value}, ${box.y_value + 1}` || vertexGrid[x].coordinate === `${box.x_value+ 1}, ${box.y_value + 1}`) {

                box.connected_vertices.push(vertexGrid[x]);


            }
        }


    })


}

let setBoxConnectedEdges = function(boxGrid) {



    boxGrid.forEach(box => {

        for (let x = 0; x < box.connected_vertices.length; x++) {


            if (box.connected_vertices[x].coordinate === `${box.x_value}, ${box.y_value}`) {

                box.bottom_edge.push(box.connected_vertices[x]);
                box.left_edge.push(box.connected_vertices[x]);                

            }   else if (box.connected_vertices[x].coordinate === `${box.x_value + 1}, ${box.y_value}`) {

                box.bottom_edge.push(box.connected_vertices[x]);
                box.right_edge.push(box.connected_vertices[x]);


            }   else if (box.connected_vertices[x].coordinate === `${box.x_value + 1}, ${box.y_value + 1}`) {

                box.right_edge.push(box.connected_vertices[x]);
                box.top_edge.push(box.connected_vertices[x]);



            }   else if (box.connected_vertices[x].coordinate === `${box.x_value}, ${box.y_value + 1}`) {

                box.top_edge.push(box.connected_vertices[x]);
                box.left_edge.push(box.connected_vertices[x]);


            }

        }


        


    })

}

//dotandboxesDOM
let dotandboxesDOM = function() {


    let dblargeContainer = document.createElement('div');
    dblargeContainer.classList.add('largeContainer');
    dblargeContainer.setAttribute('style', 'box-sizing: border-box; height: 1500px; width: 1500px; position: relative; z-index: 1')


    let boxContainer = document.createElement('div');
    boxContainer.classList.add('boxContainer');
    boxContainer.setAttribute('style', 'box-sizing: border-box;  width: 1000px; height: 1000px; display: flex; flex-wrap: wrap; align-items: flex-start; z-index: 2; position: absolute; margin-left: 100px; margin-top: 50px');
    dblargeContainer.appendChild(boxContainer);

    for (let y = 9; y >= 0; y--) {

        for (let x = 0; x <= 9; x++) {

            let box = document.createElement('div');
            box.classList.add('box');
            box.id = `${x}, ${y}`;
            box.setAttribute('style', 'box-sizing: border-box; width: 100px; height: 100px; z-index: 2; position: relative; border-style: solid transparent; border-width: 1px; margin: -1;');
            boxContainer.appendChild(box);

        }

    }

    let vertexContainer = document.createElement('div');
    vertexContainer.classList.add('vertexContainer');
    vertexContainer.setAttribute('style', 'box-sizing: border-box; width: 1000px; height: 1000px; display: flex; flex-wrap: wrap; align-items: flex-start; z-index: 3; gap: 93px 93px; position: absolute; margin-left: 97px; margin-top: 47px;');
    dblargeContainer.appendChild(vertexContainer);

    for (let y = 10; y >= 0; y--) {

        for (let x = 0; x <= 10; x++) {

            let vertex = document.createElement('div');
            vertex.classList.add('vertex');
            vertex.id = `${x}, ${y}`;
            vertex.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 5px; height: 5px; z-index: 3');
            vertexContainer.appendChild(vertex);

            //Beginning of section to add eventlisteners to each vertex

            vertex.addEventListener('click', function() {

                console.log(vertex);

            })

        }

    }


    


    return {dblargeContainer, boxContainer, vertexContainer}


}


let dotandboxesVertexGrid = vertexgrid(11,11);

let dotandboxesBoxGrid = boxgrid(10,10);

unitVertexToBox(dotandboxesVertexGrid, dotandboxesBoxGrid);

setBoxConnectedVertices(dotandboxesVertexGrid, dotandboxesBoxGrid);

setBoxConnectedEdges(dotandboxesBoxGrid);






return {dotandboxesVertexGrid, dotandboxesBoxGrid, dotandboxesDOM}

//End of Main Function dotandboxesMainGame
}



export {dotandboxesMainGame}


//Use Array.includes for finding out if the two points clicked contain the edges of a box.
//Let edge_count be used to determine if all four edges of a box have been clicked

