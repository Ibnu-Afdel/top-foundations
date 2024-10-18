const containerDiv = document.querySelector('.container');

function generateGrid(squarePerSide = 16) {
    containerDiv.innerHTML = '';

    // Set the grid layout to dynamically create the number of rows/columns
    containerDiv.style.gridTemplateColumns = `repeat(${squarePerSide}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${squarePerSide}, 1fr)`;

    for (let i = 0; i < squarePerSide * squarePerSide; i++) {
        const theDivs = document.createElement('div');
        theDivs.className = 'theDivs';
        // No need to manually set width and height anymore, grid handles this
        theDivs.addEventListener('mouseover', function () {
            theDivs.style.backgroundColor = 'red';
        });

        containerDiv.appendChild(theDivs);
    }
}


document.querySelector('.resizeButton').addEventListener('click', function (){
    let squarePerSide = prompt('Enter number of squares per side (e.g., 16): ');
    squarePerSide = parseInt(squarePerSide);
    if (!isNaN(squarePerSide) && squarePerSide > 0  && squarePerSide <= 100) {
        generateGrid(squarePerSide);
    } else {
        alert('Please enter a valid number between 1 and 100!')
    }
});

generateGrid()