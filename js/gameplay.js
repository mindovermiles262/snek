import { pixelSize, grid, columnsInGrid, rowsInGrid } from './main.js'

// Initializes Empty Grid to Screen
function initGrid(rows, columns) {
  // Set container size based on .pixel width
  const widthCalculation = (pixelSize * columns) + (columns * 2)
  container.style.width = widthCalculation + "px"

  // Make grid
  for (let i = 0; i < rows; i++) {
    let currentRow = "row" + i
    grid[currentRow] = new Array(columns).fill("0")
    grid[currentRow].forEach(function (element, index) {
      container.appendChild(document.createElement("div")).className = "pixel"
    })
  }

  // Set Pixel width and Height
  document.querySelectorAll(".pixel").forEach(function (p) {
    p.style.width = pixelSize + "px";
    p.style.height = pixelSize + "px"
  })
}

function checkCollideTail(snake) {
  let endGame = false;
  let headLoc = snake.pop()
  snake.forEach(function (ele) {
    if (JSON.stringify(ele) === JSON.stringify(headLoc)) {
      endGame = true;
    }
  })
  if (endGame === false) {
    snake.push(headLoc)
  } else {
    return true
  }
}

function checkCollideWall(snake) {
  let headLoc = snake.pop()
  if (headLoc[1] == columnsInGrid) {
    console.log("You ran into the right wall")
    return true
  } else if (headLoc[1] < 0) {
    console.log("You ran into the left wall")
    return true
  } else if (headLoc[0] < 0) {
    console.log("You ran into the top wall")
    return true
  } else if (headLoc[0] == rowsInGrid) {
    console.log("You ran into the bottom wall")
    return true
  }
  snake.push(headLoc)
}

function gameExit(interval) {
  clearInterval(interval)
  document.getElementById("gameover").innerText = "Game Over"
  console.log("Game Over")
}

export { checkCollideTail, checkCollideWall, gameExit, initGrid };