
const grid = document.querySelector('#squareDivs');

//creating grids cells
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridCells = document.createElement('div');
        gridCells.classList.add('gridCells');
        grid.appendChild(gridCells);
    }
} 

//Event listener for hover effects
grid.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    grid.style.backgroundColor = randomColor;
});

//generate random colors
function getRandomColor() {
    const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColorRep = '#';
    for (let i = 0; i < 6; i++) {
        hexColorRep += hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    return hexColorRep;
}