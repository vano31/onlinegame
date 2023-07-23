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


    return {x_value, y_value, coordinate, adjacent_boxes, color, connected_vertices, unit_vertex, top_edge, bottom_edge, left_edge, right_edge /*connected_edges*/}



}


let vertexgrid = function(x_amount, y_amount) {

    let vertices = [];

    for (let y = 0; y < y_amount; y++) {

        for (let x = 0; x < x_amount; x++) {

            let vertex = vertex(x,y);
            vertices.push(vertex);

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

            let box = box(x,y);
            boxes.push(box);

        }


    }

    for (let x = 0; x < boxes.length; x++) {

        let connection_boxes = connections.filter(single_box => (single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`]}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`]}` || single_box.coordinate === `${boxes[x][`x_value`]}, ${boxes[x][`y_value`] + 1}` || single_box.coordinate === `${boxes[x][`x_value`]}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`] + 1}` || single_box.coordinate === `${boxes[x][`x_value`] + 1}, ${boxes[x][`y_value`] - 1}` || single_box.coordinate === `${boxes[x][`x_value`] - 1}, ${boxes[x][`y_value`] + 1}`));
        vertices[x]['adjacent_boxes'] = connection_boxes;

    }


    console.log(boxes);
    return boxes;





}


let unitVertexToBox = function(vertexGrid, boxGrid) {


    boxGrid.boxes.forEach(box => {

        for (let x = 0; x < vertexGrid.vertices.length; x++) {

            if (vertexGrid.vertices[x].coordinate === box.coordinate) {

                box.unit_vertex = vertexGrid.vertices[x];
                break

            }
            
        }
    })

}


let setBoxConnectedVertices = function(vertexGrid, boxGrid) {

    boxGrid.boxes.forEach(box => {

        for (let x = 0; x < vertexGrid.vertices.length; x++) {

            if (vertexGrid.vertices[x].coordinate === `${box.x_value}, ${box.y_value}` || vertexGrid.vertices[x].coordinate === `${box.x_value + 1}, ${box.y_value}` || vertexGrid.vertices[x].coordinate === `${box.x_value}, ${box.y_value + 1}` || vertexGrid.vertices[x].coordinate === `${box.x_value+ 1}, ${box.y_value + 1}`) {

                box.connected_vertices.push(vertexGrid.vertices[x]);


            }
        }


    })


}

let setBoxConnectedEdges = function(boxGrid) {



    boxGrid.boxes.forEach(box => {

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


let dotandboxesVertexGrid = vertexgrid(10,10);

let dotandboxesBoxGrid = boxgrid(10,10);

unitVertexToBox(dotandboxesVertexGrid, dotandboxesBoxGrid);

setBoxConnectedVertices(dotandboxesVertexGrid, dotandboxesBoxGrid);

setBoxConnectedEdges(dotandboxesBoxGrid);


return {dotandboxesVertexGrid, dotandboxesBoxGrid}

//End of Main Function dotandboxesMainGame
}



export {dotandboxesMainGame}


//Use Array.includes for finding out if the two points clicked contain the edges of a box and use that to determine if a box

