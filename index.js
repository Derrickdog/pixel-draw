let currentColor = 'black';
let currentSize = 16;

const grid = document.querySelector('#grid');

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

createGrid(currentSize);

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
    if(currentColor == 'black')
        e.target.style.backgroundColor = 'black';
    else if(currentColor == 'blue')
        e.target.style.backgroundColor = 'blue';
    else if(currentColor == 'red')
        e.target.style.backgroundColor = 'red';
    else{
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}