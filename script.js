const container = document.getElementById('container');

const DEFAULT_SIZE = 16;

const clearButton = document.getElementById("clear");
const eraseButton = document.getElementById("erase");
const gridDensityButton = document.getElementById("density");

let mode = "sketch";
let gridSize = "16"

function modeChange() {
    if (mode == "sketch") {
        mode = "erase";
        eraseButton.classList.add("activate");
    }
    else if (mode == "erase") {
        mode = "sketch";
        eraseButton.classList.remove("activate");
    }
    else {
        console.log("Something went wrong")
    }

    console.log(mode)
}

function clearGrid() {
    let arrayGrids = Array.from(document.getElementsByClassName('grid'));
    arrayGrids.forEach(grid => grid.classList.remove("hover"));
}

function removeGrid() {
    const arrayRow = Array.from(document.getElementsByClassName('row'));
    i = 0;
    console.log(i < arrayRow.length);
    console.log(arrayRow.length);
    console.log(arrayRow);
    while (i < arrayRow.length) {
        console.log(i);
        container.removeChild(arrayRow[i]);
        i++;
    }
}

function setGridSize() {
    temp = parseInt(prompt("Enter the grid size (no more than 100, no less than 0)"))
    while (temp >100 || temp<0) {                              ``
        temp = parseInt(prompt("Enter the grid size (no more than 100, no less than 0)"))
    }
    gridSize = temp;
    removeGrid();
    createGrid(gridSize);
    let arrayGrids = Array.from(document.getElementsByClassName('grid'));
}

function createGrid(size) {
    trueGridSize = 960/gridSize;
    for (let i = 1; i <= size; i++) {

        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);

        for (let o = 1; o <= size; o++) {
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.style.cssText = `width: ${trueGridSize}px; height: ${trueGridSize}px;`;
            row.appendChild(grid);
        }
    }

    let arrayGrids = Array.from(document.getElementsByClassName('grid'));

    arrayGrids.forEach(grid => { grid.addEventListener("mouseover", hoverOver)});
}

function hoverOver() {
    if (mode == "sketch") {
    this.classList.add("hover");
    }
    else if (mode = "erase") {
        this.classList.remove("hover")
    }
}

eraseButton.addEventListener('click', modeChange);
clearButton.addEventListener('click', clearGrid);
gridDensityButton.addEventListener('click', setGridSize);

createGrid(DEFAULT_SIZE);
