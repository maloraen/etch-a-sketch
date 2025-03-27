const containerDiv = document.querySelector(".container");
let totalSquares = 16 * 16; // default grid size

function createGrid(size) {
    for (i = 0; i < size; i++) { // create grid of square divs
        const squareDiv = document.createElement("div"); // create element
        squareDiv.classList.add("square"); // add class
        containerDiv.appendChild(squareDiv); // add to dom
    
        // create variable for css
        const gridSize = Math.ceil(Math.sqrt(size));
        containerDiv.style.setProperty('--grid-size', gridSize);
    }
    
    // when mouse enters div, toggle "colored" class
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.toggle("colored");
        });
    });
}

// allow user to input grid size
const gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
    // prompt user for a number
    let prompt = prompt("Grid Size (e.g. 16 for 16x16):");
    let input = Number(prompt);

    // validate user input
    if (isNaN(input) || input <= 0 || input > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    // clear grid
    containerDiv.innerHTML = "";

    createGrid(input * input);
})

// create initial grid
createGrid(totalSquares); 