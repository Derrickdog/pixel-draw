const grid = document.querySelector('#grid');

createGrid(16);

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
    e.target.style.backgroundColor = "black";
}