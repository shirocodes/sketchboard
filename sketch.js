
    const grid = document.querySelector('#squareDivs');

    //creating grids cells
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('gridCells');

            //add hover effects
            gridCell.addEventListener('mouseover', () => {
                const randomColor = getRandomColor();
                gridCell.style.backgroundColor = randomColor;
            });
            grid.appendChild(gridCell);
        }
    //generate random colors
    function getRandomColor() {
        const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColorRep = '#';
        for (let i = 0; i < 6; i++) {
            hexColorRep += hexColors[Math.floor(Math.random() * hexColors.length)];
        }
        return hexColorRep;
    }
};

//Adding button
const buttonTop = document.querySelector('.btn');

    const buttonDiv = document.createElement('button');
    buttonDiv.classList.add('newButton');
    buttonDiv.textContent = 'Reset Grid';
    buttonTop.appendChild(buttonDiv);

    buttonDiv.addEventListener('click', resetGrid);
        //prompt for grid size
        function resetGrid() {
            let gridSize = prompt ("Enter a new grid: 1-100:");
            gridSize = parseInt(gridSize);

            if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
                alert("please enter a valid number between 1 and 100.");
                return;
            }
            createGrid(gridSize);
        }
        //clear existing grid for a new one
        function createGrid(size) {
            grid.innerHTML = '';

            for (let i = 0; i < size * size; i++) {
                const gridCell = document.createElement('div');
                gridCell.classList.add('gridCells');

                gridCell.addEventListener('mouseover', () => {
                    const randomColor = getRandomColor();
                    gridCell.style.backgroundColor = randomColor;
                });
                grid.appendChild(gridCell);
            }

            //update gridCells' styles to align with container
            const updatedGridCells = document.querySelectorAll('.gridCells');
            updatedGridCells.forEach(cell => {
                cell.style.flex = `1 0 calc(100% / ${size})`;
                cell.style.aspectRatio = '1';
            });
        }
        function getRandomColor() {
            const hexColors = '0123456789ABCDEF';
            let hexColorRep = '#';
            for (let i = 0; i < 6; i++) {
                hexColorRep += hexColors[Math.floor(Math.random() * 16)]
            }
            return hexColorRep;
        };
        






 



