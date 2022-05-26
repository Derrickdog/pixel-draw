const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;

const grid = document.querySelector('#grid');

// COLOR EVENT LISTENERS
document.querySelector('#black').addEventListener('click', () => {
    currentColor = 'black';
});
document.querySelector('#blue').addEventListener('click', () => {
    currentColor = 'blue';
});
document.querySelector('#red').addEventListener('click', () => {
    currentColor = 'red';
});
document.querySelector('#rainbow').addEventListener('click', () => {
    currentColor = 'rainbow';
});

// SIZE EVENT LISTENERS
document.querySelector('#btn1').addEventListener('click', () => {
    clearGrid();
    createGrid(8);
});
document.querySelector('#btn2').addEventListener('click', () => {
    clearGrid();
    createGrid(16);
});
document.querySelector('#btn3').addEventListener('click', () => {
    clearGrid();
    createGrid(32);
});
document.querySelector('#btn4').addEventListener('click', () => {
    clearGrid();
    createGrid(64);
});

// CLEAR BUTTONS
document.querySelector('#eraser').addEventListener('click', () => {
    currentColor = 'white';
});
document.querySelector('#clear').addEventListener('click', () => {
    clearGrid();
    currentColor = DEFAULT_COLOR;
    createGrid(DEFAULT_SIZE);
});

// FUNCTIONS
function clearGrid(){
    grid.innerHTML = '';
}

function createGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size**2; i++){
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', drawPixel);
        grid.appendChild(gridElement); 
    }
}

function drawPixel(e){
    if(currentColor == 'rainbow'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else{
        e.target.style.backgroundColor = currentColor;
    }
}

// LOAD
window.onload = () => {
    createGrid(DEFAULT_SIZE);
}