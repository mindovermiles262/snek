import * as movement from "./movement.js";
import * as gameplay from './gameplay.js'

// Initialize Vars
const container = document.getElementById("container")
const pixel = document.createElement("div")
const rowsInGrid = 8;
const columnsInGrid = 8;
const pixelSize = 15;
let direction = "r"
let moveSpeed = 400
let grid = {}

// Run game
function game() {
  // Initialize Game
  gameplay.initGrid(rowsInGrid, columnsInGrid)
  let gameOver = false;
  let score = 0
  let snake = [[7,1], [7,2], [7,3], [7,4], [7,5]]
  movement.printSnake(snake)
  let nugget = movement.newNugget(snake)
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

  // Run Game
  let run = setInterval(function() {
    gameOver = movement.move(snake)
    let eat = movement.eatNugget(nugget, snake, score)
    if (typeof eat === "number") {
      score = eat
      snake.push(nugget)
      nugget = movement.newNugget(snake)
    }
    if (gameOver === true) {
      gameplay.gameExit(run)
    }
  }, moveSpeed);
}

game()

export { direction, columnsInGrid, rowsInGrid, pixelSize, grid };