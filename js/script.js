// Initialize Vars
const container = document.getElementById("container")
const pixel = document.createElement("div")
const rowsInGrid = 15;
const columnsInGrid = 15;
const pixelSize = 15;
grid = {}

// Initializes Empty Grid to Screen
let initGrid = function(rows, columns) {
  // Set container size based on .pixel width
  widthCalculation = (pixelSize * columns) + (columns * 2)
  container.style.width = widthCalculation + "px"

  // Make grid
  for (i=0; i < rows; i++) {
    let currentRow = "row" + i
    grid[currentRow] = new Array(columns).fill("0")
    grid[currentRow].forEach(function(element, index) {
      container.appendChild(document.createElement("div")).className = "pixel"
    })
  }

  // Set Pixel width and Height
  document.querySelectorAll(".pixel").forEach(function(p) {
    p.style.width = pixelSize + "px";
    p.style.height = pixelSize + "px"
  })
}

// Changes background color of .pixel based on x,y pair (x[0] is top row)
let printSnake = function([x,y]) {
  let divLoc = ((rowsInGrid * x) + y)
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "goldenrod"
}

// Run game
let game = function() {
  initGrid(rowsInGrid, columnsInGrid)
  let snake = [[7,2], [7,3], [7,4]]

  snake.forEach(function(loc) {
    printSnake(loc)
  })
}

game()