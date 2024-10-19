const containerDiv = document.querySelector('.container');
let selectedColor = document.querySelector('.colorPicker').value;
let rainbowMode = false;
let eraseMode = false;
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
            if (eraseMode){
                theDivs.style.backgroundColor = '#ffffff';
            } else if (rainbowMode){
                theDivs.style.backgroundColor = getRandomColor();
            } else {
                theDivs.style.backgroundColor = selectedColor;
            }
        });

        containerDiv.appendChild(theDivs);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('.colorPicker').addEventListener('input', function (event){
    selectedColor = event.target.value;
})

document.querySelector('.rainbowButton').addEventListener('click', function (){
    rainbowMode = !rainbowMode;
    if (rainbowMode){
        this.textContent = 'Rainbow Mode: On';
    } else {
        this.textContent = 'Rainbow Mode: Off';
    }
})

document.querySelector('.eraseButton').addEventListener('click', function (){
    eraseMode = !eraseMode;
    rainbowMode = false;
    if (eraseMode) {
        this.textContent = 'Erase Mode: ON';
        document.querySelector('.rainbowButton').textContent = 'Rainbow Mode';
    } else {
        this.textContent = 'Erase Mode';
    }
})

document.querySelector('.clearButton').addEventListener('click', function() {
    const gridDivs = document.querySelectorAll('.theDivs');
    gridDivs.forEach(div => {
        div.style.backgroundColor = '#ffffff'; // Set background to white
    });
});


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