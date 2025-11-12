// const { useDeferredValue } = require("react");

// need to set max size for the grid in width

const root = document.getElementById('root');

function sizeGrid (row = 3, col = 3) {
    for (let i = 0; i < row * col; i++) {
        createDiv(i);
        if ((i + 1) % col === 0) {
            const br = document.createElement('br');
            root.appendChild(br);
        }
    }
}

function createDiv (number) {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    //Modify to take the input of the width and height and 1/row * max width and height

    div.style.border = '1px solid black';
    div.textContent = number + 1;
    root.appendChild(div);
}






function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
}


function draw() {
    let columns = document.getElementsByClassName('column');
}


function playGame() {
    sizeGrid(5, 5);
}

playGame();
