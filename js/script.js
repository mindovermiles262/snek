// Initialize Vars
const container = document.getElementById("container")
const pixel = document.createElement("div")
const rowsInGrid = 15;
const columnsInGrid = 15;
const pixelSize = 15;
let direction = "r"
grid = {}

// Initializes Empty Grid to Screen
function initGrid(rows, columns) {
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
function printSnake(snake) {
  snake.forEach(function([x,y]) {
    let divLoc = ((rowsInGrid * x) + y)
    let divs = document.getElementsByClassName("pixel")
    divs[divLoc].style.backgroundColor = "goldenrod"
  })
}

// Remove last node of snake
function tailDock([x,y]) {
  let divLoc = ((rowsInGrid * x) + y);
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "var(--bg-color)"
}

function checkCollide(snake) {
  let endGame = false;
  headLoc = snake.pop()
  snake.forEach(function(ele) {
    if (JSON.stringify(ele) === JSON.stringify(headLoc)) {
      alert("You Lose!")
      endGame = true;
    }
  })
  if (endGame === false) {
    snake.push(headLoc)
  } else {
    return true
  }
}

function moveRight(snake) {
  headLoc = snake[snake.length-1]
  snake.push([headLoc[0], headLoc[1] + 1])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveLeft(snake) {
  headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] - 1])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveUp(snake) {
  headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] - 1, headLoc[1]])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveDown(snake) {
  headLoc = snake[snake.length-1];
  snake.push([headLoc[0] + 1, headLoc[1]])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function move(snake) {
  if (direction === "r") {
    return moveRight(snake)
  } else if (direction == "l") {
    return moveLeft(snake)
  } else if (direction == 'u') {
    return moveUp(snake)
  } else if (direction == 'd') {
    return moveDown(snake)
  } else if (direction == "quit") {
    console.log("Quit")
    return true;
  }
}

// Run game
function game() {
  initGrid(rowsInGrid, columnsInGrid)
  let gameOver = false;
  let snake = [[7,1], [7,2], [7,3], [7,4], [7,5]]
  printSnake(snake)
  document.addEventListener("keydown", function(event) { 
    if (event.keyCode == 37) {
      direction = "l"
    } else if (event.keyCode == 38) {
      direction = "u"
    } else if (event.keyCode == 39) {
      direction = "r"
    } else if (event.keyCode == 40) {
      direction = "d"
    } else {
      direction = "quit"
    }
  }, false)
  run = setInterval(function() {
    gameOver = move(snake)
    if (gameOver === true) {
      clearInterval(run)
      console.log("Game Over")
    }
  }, 1000);
}

game()