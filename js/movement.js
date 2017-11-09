import { direction, rowsInGrid } from './main.js';
import { checkCollide as checkCollide } from './gameplay.js' 

function moveRight(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] + 1])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveLeft(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] - 1])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveUp(snake) {
  let headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] - 1, headLoc[1]])
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollide(snake);
}

function moveDown(snake) {
  let headLoc = snake[snake.length - 1];
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

// Changes background color of .pixel based on x,y pair (x[0] is top row)
function printSnake(snake) {
  snake.forEach(function ([x, y]) {
    let divLoc = ((rowsInGrid * x) + y)
    let divs = document.getElementsByClassName("pixel")
    divs[divLoc].style.backgroundColor = "goldenrod"
  })
}

// Remove last node of snake
function tailDock([x, y]) {
  let divLoc = ((rowsInGrid * x) + y);
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "var(--bg-color)"
}

export{ moveRight, moveLeft, moveUp, moveDown, move, printSnake, tailDock };